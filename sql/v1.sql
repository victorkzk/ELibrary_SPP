USE `library`;

CREATE TABLE `users` (
	`id` INT(11) NOT NULL AUTO_INCREMENT,
	`last_name` VARCHAR(40),
	`first_name` VARCHAR(20),
	`middle_name` VARCHAR(20),
	`address` VARCHAR(40),
	`phone_number` VARCHAR(15),
	PRIMARY KEY(`id`)	
)