
-- drop database
drop database if exists genduyike;

-- create database
create database genduyike;
use genduyike;


-- drop table
drop table if exists patients, doctors, orders;

-- create patients table
create table patients
(
	patient_id int unsigned auto_increment not null primary key,
	wechat_num tinytext not null,
	phone_num char(11) not null,
	city tinytext not null
);

-- create doctors table
create table doctors
(
	doctor_id int unsigned auto_increment not null primary key,
	wechat_num tinytext not null,
	phone_num char(11) not null,
	name tinytext not null,
	age tinyint unsigned not null,
	identity_id char(18) not null,
	hospital tinytext not null,
	department tinyint unsigned not null,
	qualification_certificate_id tinytext not null,
	professional_certificate_id tinytext not null,
	city tinytext not null,
	push_status tinyint unsigned not null,
	order_status tinyint unsigned not null,
	audit_status tinyint unsigned not null
);

-- create orders table
create table orders
(
	order_id int unsigned auto_increment not null primary key,
	score tinyint unsigned not null,
	left_message tinytext not null,
	patient_id int unsigned not null,
	doctor_id int unsigned not null,
	illness_describe tinytext not null,
	chat_record longtext not null,
	order_status tinyint unsigned not null
);


--insert into patient values('''',''glchengang'',''深圳一中'',''1976-10-10'');
--insert into patient values('''',''jack'',''深圳一中'',''1975-12-23'');
