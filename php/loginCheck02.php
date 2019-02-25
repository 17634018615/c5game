<?php
	header("Content-type:text/html;charset=utf-8");

	$username = $_POST['username'];
	$userpass = $_POST['userpass'];

	$conn = mysql_connect('localhost','root','root');

	if(!$conn){
		echo "服务器端出错！";
	}else{
		mysql_select_db("c5game",$conn);

		$sqlstr = "select * from userinfo where username='$username'and userpass='$userpass'";

		$result = mysql_query($sqlstr,$conn);

		mysql_close($conn);

		if(mysql_num_rows($result) == 1){
			header("location:wd/sb.html");
		}else{
			echo"登陆失败！";
		}

	}

?>