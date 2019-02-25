<?php
	header("Content-type:text/html;charset=utf-8");
	//1、接收数据
	$username = $_POST['username'];
	$userpass = $_POST['userpass'];
	$truename = $_POST['tauename'];
	$usersfz = $_POST['usersfz'];

	//2、处理
	//2.1、创建连接（搭桥）
	$conn = mysql_connect('localhost','root','root');

	if(!$conn){
		//die（“没有连接成功”）;
		//响应
		echo "服务器端出错：数据库没有连接上";
	}else{
		//2.2、选择数据库（目的地）
		mysql_select_db("c5game",$conn);
		//3、传输数据（运输）
		//3.1、定义一个字符串，写上SQL语句
		$sqlstr="insert into userinfo(username,userpass,truename,usersfz)values('$username','$userpass','$truename','$usersfz')";
		//3.2、执行SQL语句
		mysql_query($sqlstr,$conn);
		//3.3、关闭数据库（过河拆桥）
		mysql_close($conn);
		echo "注册成功！";
		header("location:../index.html");
	}
?>