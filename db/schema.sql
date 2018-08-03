DROP DATABASE IF EXISTS `message_db`;
CREATE DATABASE `message_db`;

USE `message_db`;

CREATE TABLE messages
(
    firstName VARCHAR (255) NOT NULL,
	lastName VARCHAR (255) NOT NULL,
	message VARCHAR (255) NOT NULL,
	email VARCHAR (55) NOT NULL,
    subject VARCHAR (55) NOT NULL,
	PRIMARY KEY (id)
);