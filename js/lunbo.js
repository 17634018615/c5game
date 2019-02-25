



// 轮播图


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
	let imgDoms=$("#lunbo").children;
	imgDoms[inOrd].style.left= "830px";
	// moveYun02(imgDoms[outOrd],"left",-400,1000);
	// moveYun02(imgDoms[inOrd],"left",0,1000);
	slideInOut(imgDoms[outOrd],"left",-830,500,imgDoms[inOrd],830);
	//2、改豆豆
	let liDoms = $("#doudou").children;
	for(var i=0;i<liDoms.length;i++){
		liDoms[i].style.backgroundColor = "#e4b35a";
	}
	liDoms[inOrd].style.backgroundColor = "#f86b00";
}


window.onload = function(){

	//注册
	/*
	$("#yonghu").onblur = function(){
	}*/
    




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
	}


	//登录注册点击事件
	let dlck = $("#dlck")
	let denglu = $("#denglu")
	let zhuce = $("#zhuce")
	function xs(){
		dlck.style.display = "block";
		denglu.style.display = "block";
	}
	function cs(){
		zhuce.style.display = "block";
		denglu.style.display = "block";
	}
	$("#dl01").onclick = function(){
		xs()
	}
	$("#dl02").onclick = function(){
		xs()
	}
	$("#dl03").onclick = function(){
		xs()
		zhuce.style.display = "none";
	}
	$("#zc01").onclick = function(){
		cs()
	}
	$("#zc02").onclick = function(){
		cs()
	}
	$("#zc03").onclick = function(){
		cs()
		dlck.style.display = "none";
	}
	$("#dlcuo").onclick = function(){
		zhuce.style.display = "none";
		dlck.style.display = "none";
		denglu.style.display = "none";
	}
	$("#zccuo").onclick = function(){
		zhuce.style.display = "none";
		dlck.style.display = "none";
		denglu.style.display = "none";
	}
	$("#denglu").onclick = function(){
		zhuce.style.display = "none";
		dlck.style.display = "none";
		denglu.style.display = "none";
	}


	//会员名：数字字母下划线
	$("#yonghu").onblur = function(){
		var reg = new RegExp('^[a-zA-Z_][a-zA-Z0-9_]{3,6}$');
		if(reg.test($("#yonghu").value)){
			this.nextElementSibling.innerHTML = "√";
		}else{
			this.nextElementSibling.innerHTML = "×";
		}

		//1、创建对象
		let xhr = new XMLHttpRequest();

		xhr.open("get","php/jaince.php?username="+this.value,true);

		xhr.onreadystatechange = function(){
			if(xhr.readyState == 4 && xhr.status == 200){
				if(xhr.responseText == "0"){
					alert("亲，该用户已经被使用！");
				}
			}
		}
		// console(xhr.readyState)
		xhr.send();	
	}
	//中文姓名：只能是中文，最多四个字
	$("#userName").onblur = function(){
		var reg = new RegExp('^[\u4e00-\u9fa5]{2,3}$');
		if(reg.test($("#userName").value)){
			this.nextElementSibling.innerHTML = "√";
		}else{
			this.nextElementSibling.innerHTML = "×";
		}
	}
	/*邮政编码:共 6 位数字，第一位不能为 0
	$("#postCode").onblur = function(){
		var reg = new RegExp('^[1-9][0-9]{5}$');
		if(reg.test(this.value)){
			this.nextElementSibling.innerHTML = "√";
		}else{
			this.nextElementSibling.innerHTML = "×";
		}
	}
	//电子邮件：以若干个数字字母下划线开头，紧接着是@，紧接着若干个数字字母下划线开头，
	//紧接着是点，紧接着是 com或者cn或者net，或者com.cn  (com|cn|net|com.cn)  /^\w+@\w+(\.\w+)+$/
	$("#email").onblur = function(){
		//var reg = new RegExp('^\w{3,}@\w{2,}\.(com|cn|net|com.cn){1}$');
		var reg = /^\w{3,}@\w{2,}\.(com|cn|net|com.cn){1}$/;  //no
		if(reg.test(this.value)){
			this.nextElementSibling.innerHTML = "√";
		}else{
			this.nextElementSibling.innerHTML = "×";
		}
	}*/
	$("#mima").onblur = function(){
		var reg = /^[a-z0-9_-]{6,18}$/;
		if(reg.test(this.value)){
			this.nextElementSibling.innerHTML = "√";
		}else{
			this.nextElementSibling.innerHTML = "×";
		}
	}
	$("#mima2").onblur = function(){
	var v = $("#mima").value;
	var s = $("#mima2").value;
		if(s == v){
			$("#mima2").nextElementSibling.innerHTML = "√";
		}else{
			$("#mima2").nextElementSibling.innerHTML = "×";
		}
	}

	/*
	$("#mima").onblur = function(){
		let v = $("#mima").value;
		let s = $("#mima2").value;

		if(v.test(this.value) == ""){
			this.nextElementSibling.innerHTML = "×";
		}
	}*/
	/*手机号：11位数字 +08615029977581
	$("#phone").onblur = function(){
		var reg = /^\+\d{1,3}1\d{10}$/;
		//var reg = new RegExp('^\+\d{1,3}1\d{10}$');
		if(reg.test(this.value)){
			this.nextElementSibling.innerHTML = "√";
		}else{
			this.nextElementSibling.innerHTML = "×";
		}
	}*/
	//身份证号码：18位，第一位是1-6的数字，紧接着16位是数字，
	//最后一位可以是数字或者X
	$("#cardId").onblur = function(){
		var reg = /^[1-6]\d{16}[\dX]$/i;
		//var reg = new RegExp('^[1-6]\d{16}(\d|X)$','i'); //worry 
		if(reg.test(this.value)){
			this.nextElementSibling.innerHTML = "√";
		}else{
			this.nextElementSibling.innerHTML = "×";
		}
	}
	/*出生日期:四位数字（1-9开头，三位数字）-二位数字-二位数字
	//(0[1-9]|1[0-9]|2[0-9]|3[10])(0[1-9]|1[0-2])
	$("#birthday").onblur = function(){
		var reg = /^[1-9]\d{3}[\-\.\/](0[1-9]|1[0-2])[\-\.\/](0[1-9]|1[0-9]|2[0-9]|3[10])$/;
	
		if(reg.test(this.value)){
			this.nextElementSibling.innerHTML = "√";
		}else{
			this.nextElementSibling.innerHTML = "×";
		}
	}
		
	$("#ip").onblur = function(){
		var reg = /^((\d|[1-9]\d|2[0-4][0-9]|1[0-9]{2}|25[0-5])\.){3}/;
		if(reg.test($("#ip").value)){
			this.nextElementSibling.innerHTML = "√";
		}else{
			this.nextElementSibling.innerHTML = "×";
		}
	}*/



	//1、自动播放
	autoPlay();
	//2、鼠标进入停止播放
	/*$("#lunbo").onmouseover = function(){
		stopPlay();
	}
	//3、鼠标离开继续播放
	$("#lunbo").onmouseout = function(){
		autoPlay();
	}*/
	let liDoms = $("#doudou").children;
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
	$("#lunbo").onclick = function(){
		location.href = arr[currIndex];
	}
}




// 回到顶部




window.onscroll  = function(){
	var fh = $("#fh");
	var x = document.body.scrollTop || document.documentElement.scrollTop;
	if(x >= 800){
		fh.style.display = "block";
	}else{
		fh.style.display = "none";
	}
	$("#fh").onclick = function fh(){
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





// $函数
function $(str){
	if(str.charAt(0)=="#"){
		return document.getElementById(str.substring(1));
	}else if(str.charAt(0)=="."){
		return document.getElementsByClassName(str.substring(1));
	}else{
		return document.getElementsByTagName(str);
	}
}	