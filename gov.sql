/*
SQLyog Ultimate v11.33 (64 bit)
MySQL - 5.5.8-log : Database - government
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`government` /*!40100 DEFAULT CHARACTER SET latin1 */;

USE `government`;

/*Table structure for table `apply` */

DROP TABLE IF EXISTS `apply`;

CREATE TABLE `apply` (
  `applyid` int(11) NOT NULL AUTO_INCREMENT,
  `uid` varchar(100) NOT NULL,
  `sid` varchar(100) NOT NULL,
  `applydate` varchar(100) NOT NULL,
  `status` varchar(100) NOT NULL DEFAULT 'Not Verified',
  `filesrc` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`applyid`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=latin1;

/*Data for the table `apply` */

insert  into `apply`(`applyid`,`uid`,`sid`,`applydate`,`status`,`filesrc`) values (6,'m@gmail.com','13','30/04/2023','Rejected','aplication.pdf'),(7,'v@gmail.com','15','30/04/2023','Approved','age.pdf'),(9,'k@gmail.com','13','30/04/2023','Approved','keerthi.pdf');

/*Table structure for table `login` */

DROP TABLE IF EXISTS `login`;

CREATE TABLE `login` (
  `l_id` int(100) NOT NULL AUTO_INCREMENT,
  `reg_id` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  `type` varchar(100) NOT NULL,
  `status` varchar(100) NOT NULL DEFAULT '1',
  PRIMARY KEY (`l_id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=latin1;

/*Data for the table `login` */

insert  into `login`(`l_id`,`reg_id`,`email`,`password`,`type`,`status`) values (1,'1','admin@gmail.com','admin','ADMIN','1'),(2,'1','v@gmail.com','123','USER','1'),(3,'2','m@gmail.com','123','USER','1'),(5,'4','afzal@gmail.com','123','USER','1'),(7,'6','k@gmail.com','123','USER','1');

/*Table structure for table `notifications` */

DROP TABLE IF EXISTS `notifications`;

CREATE TABLE `notifications` (
  `nid` int(100) NOT NULL AUTO_INCREMENT,
  `uid` varchar(100) NOT NULL,
  `subject` varchar(100) NOT NULL,
  `description` varchar(500) NOT NULL,
  `date` varchar(100) NOT NULL,
  PRIMARY KEY (`nid`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=latin1;

/*Data for the table `notifications` */

insert  into `notifications`(`nid`,`uid`,`subject`,`description`,`date`) values (8,'1','Lorem ipsum dolor sit amet','It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.','28-04-2023'),(12,'1','Objective Of Kerala Free Laptop Scheme 2023','The primary goal of this scheme is to recruit deserving college students from the Scheduled Castes (SC), Scheduled Tribes (ST), and Other Backward Classes (OBC)','28-04-2023');

/*Table structure for table `register` */

DROP TABLE IF EXISTS `register`;

CREATE TABLE `register` (
  `reg_id` int(100) NOT NULL AUTO_INCREMENT,
  `fullname` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `phone` varchar(100) NOT NULL,
  `address` varchar(100) NOT NULL,
  `category` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  PRIMARY KEY (`reg_id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=latin1;

/*Data for the table `register` */

insert  into `register`(`reg_id`,`fullname`,`email`,`phone`,`address`,`category`,`password`) values (1,'vishnu','v@gmail.com','9878789784','2059C, No 26, Pandit Karuppan Rd, near Thevara Ferry Road, Junction, Kochi, Kerala 682013','Public','123'),(2,'Midhun M','m@gmail.com','9876576764','4953+XF8, Civil Station Rd, Periyar Nagar, Aluva, Kerala 683101','Student','123'),(4,'Afzal A R','afzal@gmail.com','9998875630','RCXJ+H7C, Unnamed Road, Kulayettikara, Kerala 682315','Farmer','123'),(6,'Keerthi','k@gmail.com','9775874746','X733+J3R, Town Hall Rd, Koovapadam, Shanthi Nagar Housing Colony, Mattancherry, Kochi, Kerala 682002','Student','123');

/*Table structure for table `service` */

DROP TABLE IF EXISTS `service`;

CREATE TABLE `service` (
  `sid` int(100) NOT NULL AUTO_INCREMENT,
  `uid` varchar(100) NOT NULL,
  `subject` varchar(100) NOT NULL,
  `description` varchar(100) NOT NULL,
  `src` varchar(100) NOT NULL,
  `cdate` varchar(100) NOT NULL,
  `lastdate` varchar(100) NOT NULL,
  `category` varchar(100) NOT NULL,
  PRIMARY KEY (`sid`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=latin1;

/*Data for the table `service` */

insert  into `service`(`sid`,`uid`,`subject`,`description`,`src`,`cdate`,`lastdate`,`category`) values (12,'admin@gmail.com','Indira Gandhi National Old Age Pension','Age of 60 years or higher. Having a family annual income of or less than Rs. 100000/-. Residing with','Document 4(2) (1).pdf','29-04-2023','2023-04-28','Public'),(13,'admin@gmail.com','student laptop','This Scheme is sponsored by the government of the Indian state of Kerala to distribute free computer','InsurTech.pdf','29-04-2023','2023-04-28','Student'),(15,'admin@gmail.com','Kerala University Merit Scholarship','The scholarship amount is Rs 2500 per annum for 3 years for UG students and Rs 3000 per annum for 2 ','scholorship.pdf','30-04-2023','2023-05-07','Public');

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
