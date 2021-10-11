-- Adminer 4.3.1 MySQL dump

SET NAMES utf8;
SET time_zone = '+00:00';
SET foreign_key_checks = 0;
SET sql_mode = 'NO_AUTO_VALUE_ON_ZERO';

DROP TABLE IF EXISTS `insert_data`;
CREATE TABLE `insert_data` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `fName` varchar(32) DEFAULT NULL,
  `lName` varchar(32) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO `insert_data` (`id`, `fName`, `lName`, `email`, `password`) VALUES
(1,	'dasd',	'asd',	'menards@gmail.com',	'Jaydeep123$#'),
(2,	'dasd',	'asd',	'menards@gmail.com',	'Jaydeep123$#'),
(3,	'dasd',	'asd',	'menards@gmail.com',	''),
(4,	'Test12568',	'Test',	'menards@gmail.com',	'cscs'),
(5,	'dasd',	'asd',	'menards@gmail.com',	'dscsdc'),
(6,	'dasd',	'asd',	'menards@gmail.com',	'Jaydeep123$#'),
(7,	'dasd',	'asd',	'menards@gmail.com',	'Jaydeep123$#'),
(8,	'dasd',	'asd',	'menardsl.com',	'Jaydeep123$#'),
(9,	'dasd',	'asd',	'menards@gmail.com',	'mangoit'),
(10,	'dasd',	'asd',	'menards@gmail.com',	'mangoit'),
(11,	'dasd',	'asd',	'menards@gmail.com',	'Jaydeep123$#'),
(12,	'dasd',	'asd',	'menards@gmail.com',	'Jaydeep123$#'),
(13,	'dasd',	'asd',	'menards@gmail.com',	'Jaydeep123$#'),
(14,	'dasd',	'asd',	'menards@gmail.com',	'Jaydeep123$#'),
(15,	'dasd',	'asd',	'menards@gmail.com',	'Jaydeep123$#'),
(16,	'dasd',	'asd',	'menards@gmail.com',	'female'),
(17,	'dasd',	'asd',	'menards@gmail.com',	'Jaydeep123$#'),
(18,	'dasd',	'asd',	'menards@gmail.com',	'Jaydeep123$#'),
(19,	'dasd',	'asd',	'menards@gmail.com',	'Jaydeep123$#'),
(20,	'dasd',	'asd',	'menards@gmail.com',	'Jaydeep123$#'),
(21,	'dasd',	'asd',	'menards@gmail.com',	'Jaydeep123$#'),
(22,	'dasd',	'asd',	'menards@gmail.com',	'Jaydeep123$#'),
(23,	'dasd',	'asd',	'menards@gmail.com',	'Jaydeep123$#'),
(24,	'dasd',	'asd',	'menards@gmail.com',	'Jaydeep123$#');

-- 2021-07-29 05:27:01
