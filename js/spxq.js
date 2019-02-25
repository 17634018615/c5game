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
	// zhdx("#dl02").onclick = function(){
	// 	xs()
	// }
	zhdx("#dl03").onclick = function(){
		xs()
		zhuce.style.display = "none";
	}
	zhdx("#zc01").onclick = function(){
		cs()
	}
	// zhdx("#zc02").onclick = function(){
	// 	cs()
	// }
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

	zhdx("#cardId").onblur = function(){
		var reg = /^[1-6]\d{16}[\dX]zhdx/i;
	
		if(reg.test(this.value)){
			this.nextElementSibling.innerHTML = "√";
		}else{
			this.nextElementSibling.innerHTML = "×";
		}
	}
}
function zhdx(str){
	if(str.charAt(0)=="#"){
		return document.getElementById(str.substring(1));
	}else if(str.charAt(0)=="."){
		return document.getElementsByClassName(str.substring(1));
	}else{
		return document.getElementsByTagName(str);
	}
}