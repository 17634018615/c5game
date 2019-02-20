



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
	slideInOut(imgDoms[outOrd],"left",-830,200,imgDoms[inOrd],830);
	//2、改豆豆
	let liDoms = $("#doudou").children;
	for(var i=0;i<liDoms.length;i++){
		liDoms[i].style.backgroundColor = "#e4b35a";
	}
	liDoms[inOrd].style.backgroundColor = "#f86b00";
}
window.onload = function(){


	// 注册
	// $("#yonghu").onblur = function(){
	// 	//1、创建对象
	// 	let xhr = new XMLHttpRequest();

	// 	xhr.open("get","../php/jaince.php?username="+this.value,true);

	// 	xhr.onreadystatechange = function(){
	// 		if(xhr.readyState == 4 && xhr.status == 200){
	// 			if(xhr.responseText == "0"){
	// 				$("#userSpan").innerHTML="亲，该用户已经被使用！";
	// 			}else{
	// 				$("#userSpan").innerHTML="该用户名可以使用";
	// 			}
	// 		}
	// 	}
	// 	xhr.send();	
	// }
    




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