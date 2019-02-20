<?php
	header("Content-type:text/html;charset=utf-8");

	$username = $_GET["username"];

	$conn = mysql_connect('localhost','root','root');

	if(!$conn){
		echo "服务器端出错";
	}else{
		mysql_select_db("mydb1810",$conn);

		$sqlstr="select * from userinfo where username='$username'";

		$result=mysql_query($sqlstr,$conn);

		mysql_close($conn);
        if(mysql_num_rows($result)==1){
        	 echo "0";
        }else{
        	echo "1";
        }
	}

?>