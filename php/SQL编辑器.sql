--SQl语句 Struct Query Language， 这个是个关系型数据库的语言

--一、结构操作
--1、创建库
create database mydb1810

--切换当前的数据库
use mydb1810

--2、创建表
--创建会员表
--primary key：主键；表示唯一性。

create table userinfo(
	username varchar(20) primary key,
	userpass varchar(16) not null,
	usersex char(2) not null,
	userage int,
	userphone char(11)
)

-- 二、数据操作
--1、增：给表里增加数据

insert into userinfo(username,userpass,usersex,userage,userphone)
				values('张浩','12580','男',21,'13651932603');
insert into userinfo(username,userpass,usersex,userage,userphone)
				values('张立','12581','男',22,'13751932603');
insert into userinfo(username,userpass,usersex,userage,userphone)
				values('赵志强','12582','男',22,'13851932603');
insert into userinfo(username,userpass,usersex,userage,userphone)
				values('尚优','12580','男',26,'13951932603');

--查询:
select * from userinfo

select username,userpass from userinfo

select * from userinfo where usersex = '男'


select * from userinfo
		where usersex = '男'
			and userage > 15

--3、删除

delete from userinfo
delete from userinfo  where usersex = '男' and username < 15

--4、改
update userinfo set usersex = '男' where username = '张立'