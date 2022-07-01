-- Adminer 4.8.1 MySQL 8.0.29 dump

SET NAMES utf8;
SET time_zone = '+00:00';
SET foreign_key_checks = 0;
SET sql_mode = 'NO_AUTO_VALUE_ON_ZERO';

SET NAMES utf8mb4;

CREATE DATABASE `mydatabase` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `mydatabase`;

DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id` int NOT NULL AUTO_INCREMENT,
  `firstName` varchar(255) NOT NULL,
  `lastName` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `photo` varchar(255) NOT NULL,
  `createdDate` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  `gender` varchar(8) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `IDX_e12875dfb3b1d92d7d7c5377e2` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT INTO `user` (`id`, `firstName`, `lastName`, `email`, `password`, `photo`, `createdDate`, `gender`) VALUES
(45,	'test',	'joestar',	'test@test.test',	'a4246fd151488e49d4118c8e691d33ce',	'unnamed-1656709534766.jpg',	'2022-07-01 21:05:34.874977',	'Мужской'),
(46,	'test1',	'joestar',	'test1@test.test',	'f22f9d5ff70e2d0b5af5a80695124e48',	'unnamed-1656709554201.jpg',	'2022-07-01 21:05:54.251999',	'Женский'),
(47,	'test2',	'joestar',	'test2@test.test',	'ca2887b4aaef3fb24df4118dd9387e57',	'unnamed-1656709570993.jpg',	'2022-07-01 21:06:11.051335',	'Мужской'),
(48,	'test3',	'joestar',	'test3@test.test',	'a83a94cb82d855bf52ba00fd109d9c6c',	'unnamed-1656709582988.jpg',	'2022-07-01 21:06:23.042428',	'Женский'),
(49,	'test4',	'brando',	'test4@test.test',	'04607f8960d74f2818cd076653aa3ac6',	'unnamed-1656709603486.jpg',	'2022-07-01 21:06:43.548621',	'Мужской'),
(50,	'test5',	'brando',	'test5@test.test',	'f3550760515f252846645ebe3915adc5',	'unnamed-1656709614215.jpg',	'2022-07-01 21:06:54.246508',	'Мужской'),
(51,	'test6',	'brando',	'test6@test.test',	'bc0ae537df7dfd715dfec9cbe06fd37a',	'unnamed-1656709621662.jpg',	'2022-07-01 21:07:01.701541',	'Женский'),
(52,	'test7',	'joestar',	'test7@test.test',	'5e6a5238e0e7a422796438414f156506',	'unnamed-1656709633102.jpg',	'2022-07-01 21:07:13.127321',	'Мужской'),
(53,	'test8',	'joestar',	'test8@test.test',	'db75fd9c8d79da1b9c448d311aee6f3f',	'unnamed-1656709642413.jpg',	'2022-07-01 21:07:22.444849',	'Женский'),
(54,	'test9',	'joestar',	'test9@test.test',	'67596f1273243d2c901f5b17c4c1a66f',	'unnamed-1656709649504.jpg',	'2022-07-01 21:07:29.566499',	'Мужской'),
(55,	'test10',	'joestar',	'test10@test.test',	'8464de84d37385c8a6c85d082472dc31',	'unnamed-1656709658414.jpg',	'2022-07-01 21:07:38.465247',	'Женский'),
(56,	'test11',	'joestar',	'test11@test.test',	'887ead8ebfa01b957425d329ddae1a7a',	'unnamed-1656709666943.jpg',	'2022-07-01 21:07:47.001692',	'Мужской'),
(57,	'test12',	'joestar',	'test12@test.test',	'60474c9c10d7142b7508ce7a50acf414',	'unnamed-1656709672402.jpg',	'2022-07-01 21:07:52.428870',	'Мужской'),
(58,	'test13',	'joestar',	'test13@test.test',	'33fc3dbd51a8b38a38b1b85b6a76b42b',	'unnamed-1656709677400.jpg',	'2022-07-01 21:07:57.446623',	'Мужской'),
(59,	'test14',	'brando',	'test14@test.test',	'b99c94f62fb2a61433c4e44e27406050',	'unnamed-1656709686880.jpg',	'2022-07-01 21:08:07.404183',	'Мужской'),
(60,	'test15',	'joestar',	'test15@test.test',	'4b377d23309d4ed39c9da5791417aeff',	'unnamed-1656709698293.jpg',	'2022-07-01 21:08:18.318902',	'Мужской');

-- 2022-07-01 21:29:43
