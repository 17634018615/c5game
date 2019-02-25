let myTimer = null;
let currIndex = 0;
var arr=["http://www.baidu.com","http://www.taobao.com","http://www.jd.cn","http://www.1000phone.com"];
//自动播放
function autoPlay(){
	if(myTimer!=null){
		return;
	}
	myTimer = setInterval(function(){
		//一、数据处理
		let outIndex = currIndex;
		currIndex=currIndex+1;

		if(currIndex>=4){
			currIndex=0;
		} 
		//二、外观呈现
		showImg(outIndex,currIndex);
	},3000);
}
//停止播放	
/*function stopPlay(){
	window.clearInterval(myTimer);
	myTimer = null;
}*/
//跳转到对应的图片上
function goImg(index){
	//一、数据处理
	let outIndex = currIndex;
	currIndex = index;
	if(currIndex>=4 || currIndex<0){
		currIndex=0;
	}
	//二、外观呈现
	showImg(outIndex,currIndex);
}
//显示指定的图片
function showImg(outOrd,inOrd){
	if(outOrd==inOrd){
		return;
	}
	//1、改图片
	//一个淡入，一个淡出
	let imgDoms=zhdx("#lunbo").children;
	imgDoms[inOrd].style.left= "830px";
	// moveYun02(imgDoms[outOrd],"left",-400,1000);
	// moveYun02(imgDoms[inOrd],"left",0,1000);
	slideInOut(imgDoms[outOrd],"left",-830,500,imgDoms[inOrd],830);
	//2、改豆豆
	let liDoms = zhdx("#doudou").children;
	for(var i=0;i<liDoms.length;i++){
		liDoms[i].style.backgroundColor = "#e4b35a";
	}
	liDoms[inOrd].style.backgroundColor = "#f86b00";
}
window.onload = function(){


	//注册
	zhdx("#yonghu").onblur = function(){
		//1、创建对象
		let xhr = new XMLHttpRequest();

		xhr.open("get","../php/jaince.php?username="+this.value,true);

		xhr.onreadystatechange = function(){
			if(xhr.readyState == 4 && xhr.status == 200){
				if(xhr.responseText == "0"){
					zhdx("#userSpan").innerHTML="亲，该用户已经被使用！";
				}else{
					zhdx("#userSpan").innerHTML="该用户名可以使用";
				}
			}
		}
		xhr.send(); 
	}
    
	
	// 轮播盒子
	let liebiao = document.getElementById("lbhz").getElementsByTagName("li");
	for(let x = 0;x < liebiao.length;x++){
		liebiao[x].onclick =  function(){ 
			for(let i = 0;i < liebiao.length;i++){
				let hz = document.getElementById("p"+i);
				let lb = document.getElementById("lb"+i);          
				if(x == i){
					hz.className = "tabPane";
					lb.className="bian";
				}
				else{
					hz.className = "";
					lb.className = "";         
			    }
				
			}
		}
	}
	/*
	let liebiao2 = document.getElementById("lbhz2").getElementsByTagName("li");
	for(let x = 0;x < liebiao2.length;x++){
		liebiao2[x].onclick =  function(){ 
			for(let i = 0;i < liebiao2.length;i++){
				let hz2 = document.getElementById("pt"+i);
				let lb2 = document.getElementById("lbt"+i);          
				if(x == i){
					hz2.className = "tabPane";
					lb2.className="bian";
				}
				else{
					hz2.className = "";
					lb2.className = "";         
			    }
				
			}
		}
	}

	let liebiao3 = document.getElementById("lbhz3").getElementsByTagName("li");
	for(let x = 0;x < liebiao3.length;x++){
		liebiao3[x].onclick =  function(){ 
			for(let i = 0;i < liebiao3.length;i++){
				let hz3 = document.getElementById("ptt"+i);
				let lb3 = document.getElementById("lbtt"+i);          
				if(x == i){
					hz3.className = "tabPane";
					lb3.className="bian";
				}
				else{
					hz3.className = "";
					lb3.className = "";         
			    }
				
			}
		}
	}*/



	//登录注册点击事件
	let dlck = zhdx("#dlck")
	let denglu = zhdx("#denglu")
	let zhuce = zhdx("#zhuce")
	function xs(){
		dlck.style.display = "block";
		denglu.style.display = "block";
	}
	function cs(){
		zhuce.style.display = "block";
		denglu.style.display = "block";
	}
	zhdx("#dl01").onclick = function(){
		xs()
	}
	zhdx("#dl02").onclick = function(){
		xs()
	}
	zhdx("#dl03").onclick = function(){
		xs()
		zhuce.style.display = "none";
	}
	zhdx("#zc01").onclick = function(){
		cs()
	}
	zhdx("#zc02").onclick = function(){
		cs()
	}
	zhdx("#zc03").onclick = function(){
		cs()
		dlck.style.display = "none";
	}
	zhdx("#dlcuo").onclick = function(){
		zhuce.style.display = "none";
		dlck.style.display = "none";
		denglu.style.display = "none";
	}
	zhdx("#zccuo").onclick = function(){
		zhuce.style.display = "none";
		dlck.style.display = "none";
		denglu.style.display = "none";
	}
	zhdx("#denglu").onclick = function(){
		zhuce.style.display = "none";
		dlck.style.display = "none";
		denglu.style.display = "none";
	}

	//会员名：数字字母下划线
	zhdx("#yonghu").onblur = function(){
		var reg = new RegExp('^[a-zA-Z_][a-zA-Z0-9_]{3,6}zhdx');
		if(reg.test(zhdx("#yonghu").value)){
			this.nextElementSibling.innerHTML = "√";
		}else{
			this.nextElementSibling.innerHTML = "×";
		}
	}
	//中文姓名：只能是中文，最多四个字
	zhdx("#userName").onblur = function(){
		var reg = new RegExp('^[\u4e00-\u9fa5]{2,3}zhdx');
		if(reg.test(zhdx("#userName").value)){
			this.nextElementSibling.innerHTML = "√";
		}else{
			this.nextElementSibling.innerHTML = "×";
		}
	}
	/*邮政编码:共 6 位数字，第一位不能为 0
	zhdx("#postCode").onblur = function(){
		var reg = new RegExp('^[1-9][0-9]{5}zhdx');
		if(reg.test(this.value)){
			this.nextElementSibling.innerHTML = "√";
		}else{
			this.nextElementSibling.innerHTML = "×";
		}
	}
	//电子邮件：以若干个数字字母下划线开头，紧接着是@，紧接着若干个数字字母下划线开头，
	//紧接着是点，紧接着是 com或者cn或者net，或者com.cn  (com|cn|net|com.cn)  /^\w+@\w+(\.\w+)+zhdx/
	zhdx("#email").onblur = function(){
		//var reg = new RegExp('^\w{3,}@\w{2,}\.(com|cn|net|com.cn){1}zhdx');
		var reg = /^\w{3,}@\w{2,}\.(com|cn|net|com.cn){1}zhdx/;  //no
		if(reg.test(this.value)){
			this.nextElementSibling.innerHTML = "√";
		}else{
			this.nextElementSibling.innerHTML = "×";
		}
	}*/
	zhdx("#mima").onblur = function(){
		var reg = /^[a-z0-9_-]{6,18}zhdx/;
		if(reg.test(this.value)){
			this.nextElementSibling.innerHTML = "√";
		}else{
			this.nextElementSibling.innerHTML = "×";
		}
	}
	zhdx("#mima2").onblur = function(){
	var v = zhdx("#mima").value;
	var s = zhdx("#mima2").value;
		if(s == v){
			zhdx("#mima2").nextElementSibling.innerHTML = "√";
		}else{
			zhdx("#mima2").nextElementSibling.innerHTML = "×";
		}
	}

	/*
	zhdx("#mima").onblur = function(){
		let v = zhdx("#mima").value;
		let s = zhdx("#mima2").value;

		if(v.test(this.value) == ""){
			this.nextElementSibling.innerHTML = "×";
		}
	}*/
	/*手机号：11位数字 +08615029977581
	zhdx("#phone").onblur = function(){
		var reg = /^\+\d{1,3}1\d{10}zhdx/;
		//var reg = new RegExp('^\+\d{1,3}1\d{10}zhdx');
		if(reg.test(this.value)){
			this.nextElementSibling.innerHTML = "√";
		}else{
			this.nextElementSibling.innerHTML = "×";
		}
	}*/
	//身份证号码：18位，第一位是1-6的数字，紧接着16位是数字，
	//最后一位可以是数字或者X
	zhdx("#cardId").onblur = function(){
		var reg = /^[1-6]\d{16}[\dX]zhdx/i;
		//var reg = new RegExp('^[1-6]\d{16}(\d|X)zhdx','i'); //worry 
		if(reg.test(this.value)){
			this.nextElementSibling.innerHTML = "√";
		}else{
			this.nextElementSibling.innerHTML = "×";
		}
	}


	//1、自动播放
	autoPlay();
	//2、鼠标进入停止播放
	/*zhdx("#lunbo").onmouseover = function(){
		stopPlay();
	}
	//3、鼠标离开继续播放
	zhdx("#lunbo").onmouseout = function(){
		autoPlay();
	}*/
	let liDoms = zhdx("#doudou").children;
	for(var i=0;i<liDoms.length;i++){
		liDoms[i].setAttribute("index",i);
		//绑定了事件
		liDoms[i].onmouseover = function(event){
			let evt = event || window.event;
			// console.log(i);
			// goImg(i);//循环的时候，不会调用goImg();
			goImg(this.getAttribute("index"));
			evt.stopPropagation();
		}
	}
	//5、超链
	zhdx("#lunbo").onclick = function(){
		location.href = arr[currIndex];
	}
}




// 回到顶部




window.onscroll  = function(){
	var fh = zhdx("#fh");
	var x = document.body.scrollTop || document.documentElement.scrollTop;
	if(x >= 800){
		fh.style.display = "block";
	}else{
		fh.style.display = "none";
	}
	zhdx("#fh").onclick = function fh(){
		var hd = x;
		var myTime = setInterval(function(){
			hd -= 10;
			if(hd < 0){
				window.clearInterval(myTime);
				myTime = null;
				return
			}
			document.body.scrollTop = document.documentElement.scrollTop = hd;
		},1)
	}
}


	$.get("php/getGoodsList.php",function showList(objs){
		let htmlStr="";
		for(let i in objs){
			htmlStr += `<li class="zuixin">
						<a class="shang" href="xiangqing.html?goodsId=${objs[i].goodsId}">
							<img src="${objs[i].goodsImg}"/>
						</a>
						<p class="name">
							<a href="">${objs[i].goodsName}</a>
						</p>
						<p class="inof">
							<span class="pulzuo">
								售价<span class="price">
									￥${objs[i].goodsPrice}	
								</span>起
							</span>
							<span class="pulyou">${objs[i].goodsCount}件在售</span>
						</p>
						</li>`;
			
		} 
		$("#shangpin").append(htmlStr);//.listview('refresh')
		//$("#dataFilter").listview("refresh");
		//$("#dataFilter").trigger("create");
		//$.parser.parse($("#dataFilter"));
	},"json");
	
		//$("#dataFilter").trigger("create"); 
		//$("#dataFilter").parser.parser("#dataFilter");		

	



// zhdx函数
function zhdx(str){
	if(str.charAt(0)=="#"){
		return document.getElementById(str.substring(1));
	}else if(str.charAt(0)=="."){
		return document.getElementsByClassName(str.substring(1));
	}else{
		return document.getElementsByTagName(str);
	}
}	