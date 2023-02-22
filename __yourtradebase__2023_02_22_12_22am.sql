/*
 Navicat Premium Data Transfer

 Source Server         : localhost_mysql
 Source Server Type    : MySQL
 Source Server Version : 100427 (10.4.27-MariaDB)
 Source Host           : 127.0.0.1:3306
 Source Schema         : __yourtradebase

 Target Server Type    : MySQL
 Target Server Version : 100427 (10.4.27-MariaDB)
 File Encoding         : 65001

 Date: 22/02/2023 00:21:34
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for categories
-- ----------------------------
DROP TABLE IF EXISTS `categories`;
CREATE TABLE `categories`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 3 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of categories
-- ----------------------------
INSERT INTO `categories` VALUES (1, 'first');
INSERT INTO `categories` VALUES (2, 's123econd');

-- ----------------------------
-- Table structure for customer_extra_infos
-- ----------------------------
DROP TABLE IF EXISTS `customer_extra_infos`;
CREATE TABLE `customer_extra_infos`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `data` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 5 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of customer_extra_infos
-- ----------------------------
INSERT INTO `customer_extra_infos` VALUES (1, '123');
INSERT INTO `customer_extra_infos` VALUES (2, '32123423423423423');
INSERT INTO `customer_extra_infos` VALUES (4, '222');

-- ----------------------------
-- Table structure for customers
-- ----------------------------
DROP TABLE IF EXISTS `customers`;
CREATE TABLE `customers`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `full_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `friendly_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `company_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `address` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `post_code` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `contact_info_list` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `extra_info_list` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `invoice_due_in` date NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 12 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of customers
-- ----------------------------
INSERT INTO `customers` VALUES (7, 'vlad rudic23543254', 'km1220', 'dev', 'test address', '12345', '[{\"type\":\"office\",\"data\":\"1@1.com\"},{\"type\":\"mobile\",\"data\":\"123456789\"}]', '[{\"type\":\"test extra info\",\"data\":\"test info\"}]', '2023-02-24');
INSERT INTO `customers` VALUES (8, 'test 123', 'test', 'test', 'test', '1234', '[{\"type\":\"email\",\"data\":\"213@123123123.com\"},{\"type\":\"mobile\",\"data\":\"9999999\"}]', '[{\"type\":\"test1\",\"data\":\"12321312312312312312\"},{\"type\":\"test3\",\"data\":\"312312213213123123123\"}]', '2023-02-25');
INSERT INTO `customers` VALUES (9, 'test', 'test', 'test', 'test', '1234', '[{\"type\":\"email\",\"data\":\"213@123123123.com\"},{\"type\":\"mobile\",\"data\":\"9999999\"}]', '[{\"type\":\"test1\",\"data\":\"123213123\"},{\"type\":\"test3\",\"data\":\"312312213213123123123\"}]', '2023-02-25');
INSERT INTO `customers` VALUES (11, 'zzzzzzzzzzzz', 'z', 'z', 'z', 'z', '[{\"type\":\"email\",\"data\":\"zz@z.com\"}]', '[]', '2023-02-19');

-- ----------------------------
-- Table structure for email_templates
-- ----------------------------
DROP TABLE IF EXISTS `email_templates`;
CREATE TABLE `email_templates`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `subject` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `body` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `attached_file_list` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 10 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of email_templates
-- ----------------------------
INSERT INTO `email_templates` VALUES (4, '321', '4', '{\"blocks\":[{\"key\":\"47pfo\",\"text\":\"zzzzzzzzzzzzzzzzzzzzz\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}}],\"entityMap\":{}}', 'undefined');
INSERT INTO `email_templates` VALUES (5, '321', '44444444444444444444', '{\"blocks\":[{\"key\":\"47pfo\",\"text\":\"321123321123123213\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}}],\"entityMap\":{}}', 'undefined');
INSERT INTO `email_templates` VALUES (9, 'bb', 'bb', '', '\"\"');

-- ----------------------------
-- Table structure for jobs
-- ----------------------------
DROP TABLE IF EXISTS `jobs`;
CREATE TABLE `jobs`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `status` enum('possible','won') CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL DEFAULT 'possible',
  `site_address` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `site_postcode` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `customer_id` int NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of jobs
-- ----------------------------

-- ----------------------------
-- Table structure for labours
-- ----------------------------
DROP TABLE IF EXISTS `labours`;
CREATE TABLE `labours`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `price` decimal(10, 2) NULL DEFAULT NULL,
  `per` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `markup` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 7 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of labours
-- ----------------------------
INSERT INTO `labours` VALUES (3, 'labour 1', 80.00, 'hour', '15.00');
INSERT INTO `labours` VALUES (5, 'labour 3', 1200.00, 'week', '5.00');

-- ----------------------------
-- Table structure for materials
-- ----------------------------
DROP TABLE IF EXISTS `materials`;
CREATE TABLE `materials`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `product_code` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `title` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `price` decimal(10, 2) NULL DEFAULT NULL,
  `foreach` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `markup` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `brand` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `category_id` int NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 8 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of materials
-- ----------------------------
INSERT INTO `materials` VALUES (4, '1', 'material 1', 100.00, 'bag', '30.00', 'brand 1', 1);
INSERT INTO `materials` VALUES (5, '2', 'material 2', 500.00, 'kg', '10.00', 'brand 1', 1);
INSERT INTO `materials` VALUES (7, 'material 4', 'test 4', 40.00, '4', '40.00', '4', 4);

-- ----------------------------
-- Table structure for notifications
-- ----------------------------
DROP TABLE IF EXISTS `notifications`;
CREATE TABLE `notifications`  (
  `user_id` int NOT NULL AUTO_INCREMENT,
  `quote_accepted` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `online_payment_received` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `quote_reply_received` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `invoice_reply_received` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `job_reply_received` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `customer_reply_received` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `field_team_creates_a_note` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `field_team_uploads_a_file` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `field_team_captures_a_job_signature` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`user_id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 2 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of notifications
-- ----------------------------
INSERT INTO `notifications` VALUES (1, '[]', '[]', '[]', '[4,7,9,10,11,12,13,14]', '[]', '[]', '[]', '[]', 'undefined');

-- ----------------------------
-- Table structure for price_lists
-- ----------------------------
DROP TABLE IF EXISTS `price_lists`;
CREATE TABLE `price_lists`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `content` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `material_list` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL,
  `labour_list` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL,
  `price` decimal(10, 2) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 11 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of price_lists
-- ----------------------------
INSERT INTO `price_lists` VALUES (6, 'first', '111', '[{\"id\":519,\"product_code\":\"111\",\"title\":\"111\",\"price\":\"100\",\"foreach\":\"bag\",\"markup\":\"50.00\",\"brand\":\"brand 1\",\"category_id\":\"1\"},{\"id\":115,\"product_code\":\"222\",\"title\":\"222\",\"price\":\"50\",\"foreach\":\"bag\",\"markup\":\"30.00\",\"brand\":\"brand 1\",\"category_id\":\"2\"}]', '[{\"id\":465,\"title\":\"labour 1\",\"price\":\"40\",\"per\":\"hour\",\"markup\":\"10.00\"},{\"id\":740,\"title\":\"labour 2\",\"price\":\"1200\",\"per\":\"week\",\"markup\":\"30.00\"}]', 1000.00);
INSERT INTO `price_lists` VALUES (8, 'price list 1', '1111', '[{\"id\":237,\"product_code\":\"1\",\"title\":\"1\",\"price\":\"10\",\"foreach\":\"1\",\"markup\":\"10.00\",\"brand\":\"1\",\"category_id\":\"1\"},{\"id\":779,\"product_code\":\"2\",\"title\":\"2\",\"price\":\"20\",\"foreach\":\"2\",\"markup\":\"20.00\",\"brand\":\"2\",\"category_id\":\"2\"}]', '[{\"id\":590,\"title\":\"3\",\"price\":\"30\",\"per\":\"3\",\"markup\":\"30.00\"},{\"id\":519,\"title\":\"4\",\"price\":\"40\",\"per\":\"4\",\"markup\":\"40.00\"}]', 20.00);
INSERT INTO `price_lists` VALUES (10, 'test price list', 'test', '[{\"id\":976,\"product_code\":\"1\",\"title\":\"1\",\"price\":\"10\",\"foreach\":\"1\",\"markup\":\"10.00\",\"brand\":\"1\",\"category_id\":\"1\"},{\"id\":936,\"product_code\":\"3\",\"title\":\"3\",\"price\":\"30\",\"foreach\":\"3\",\"markup\":\"30.00\",\"brand\":\"3\",\"category_id\":\"3\"}]', '[{\"id\":763,\"title\":\"1\",\"price\":\"10\",\"per\":\"1\",\"markup\":\"10.00\"},{\"id\":121,\"title\":\"2\",\"price\":\"20\",\"per\":\"2\",\"markup\":\"20.00\"}]', 10.00);

-- ----------------------------
-- Table structure for quotes
-- ----------------------------
DROP TABLE IF EXISTS `quotes`;
CREATE TABLE `quotes`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `pricelist_data_list` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL,
  `company_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `building_number` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `post_code` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `email` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `phone` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 16 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of quotes
-- ----------------------------
INSERT INTO `quotes` VALUES (4, '[{\"id\":687,\"title\":\"first\",\"content\":\"111\",\"material_list\":[{\"id\":519,\"product_code\":\"111\",\"title\":\"111\",\"price\":\"100\",\"foreach\":\"bag\",\"markup\":\"50.00\",\"brand\":\"brand 1\",\"category_id\":\"1\"},{\"id\":115,\"product_code\":\"222\",\"title\":\"222\",\"price\":\"50\",\"foreach\":\"bag\",\"markup\":\"30.00\",\"brand\":\"brand 1\",\"category_id\":\"2\"}],\"labour_list\":[{\"id\":465,\"title\":\"labour 1\",\"price\":\"40\",\"per\":\"hour\",\"markup\":\"10.00\"},{\"id\":740,\"title\":\"labour 2\",\"price\":\"1200\",\"per\":\"week\",\"markup\":\"30.00\"}],\"price\":1000,\"totalMaterial\":{\"price\":150,\"markup_price\":215},\"totalLabour\":{\"price\":1240,\"markup_price\":1604},\"vat\":0},{\"id\":722,\"title\":\"test price list\",\"content\":\"test\",\"material_list\":[{\"id\":976,\"product_code\":\"1\",\"title\":\"1\",\"price\":\"10\",\"foreach\":\"1\",\"markup\":\"10.00\",\"brand\":\"1\",\"category_id\":\"1\"},{\"id\":936,\"product_code\":\"3\",\"title\":\"3\",\"price\":\"30\",\"foreach\":\"3\",\"markup\":\"30.00\",\"brand\":\"3\",\"category_id\":\"3\"}],\"labour_list\":[{\"id\":763,\"title\":\"1\",\"price\":\"10\",\"per\":\"1\",\"markup\":\"10.00\"},{\"id\":121,\"title\":\"2\",\"price\":\"20\",\"per\":\"2\",\"markup\":\"20.00\"}],\"price\":\"10\",\"totalMaterial\":{\"price\":40,\"markup_price\":50},\"totalLabour\":{\"price\":30,\"markup_price\":35},\"vat\":0}]', 'test from front end form', 'test', 'test', '1@1.com', 'test number');
INSERT INTO `quotes` VALUES (9, '[{\"id\":488,\"title\":\"test\",\"content\":\"test\",\"material_list\":[{\"id\":978,\"product_code\":\"1\",\"title\":\"1\",\"price\":\"1\",\"foreach\":\"1\",\"markup\":\"1.00\",\"brand\":\"1\",\"category_id\":\"1\"},{\"id\":931,\"product_code\":\"2\",\"title\":\"2\",\"price\":\"2\",\"foreach\":\"2\",\"markup\":\"2.00\",\"brand\":\"2\",\"category_id\":\"2\"}],\"labour_list\":[{\"id\":235,\"title\":\"10\",\"price\":\"10\",\"per\":\"10\",\"markup\":\"10.00\"},{\"id\":648,\"title\":\"20\",\"price\":\"20\",\"per\":\"20\",\"markup\":\"20.00\"}],\"totalMaterial\":{\"price\":3,\"markup_price\":3.05},\"totalLabour\":{\"price\":30,\"markup_price\":35},\"price\":\"10\",\"vat\":\"10.00\"},{\"id\":872,\"title\":\"test2\",\"content\":\"test2\",\"material_list\":[{\"id\":223,\"product_code\":\"100\",\"title\":\"100\",\"price\":\"100\",\"foreach\":\"100\",\"markup\":\"100.00\",\"brand\":\"100\",\"category_id\":\"100\"},{\"id\":664,\"product_code\":\"500\",\"title\":\"500\",\"price\":\"500\",\"foreach\":\"500\",\"markup\":\"500.00\",\"brand\":\"500\",\"category_id\":\"500\"}],\"labour_list\":[{\"id\":258,\"title\":\"200\",\"price\":\"200\",\"per\":\"200\",\"markup\":\"200.00\"},{\"id\":734,\"title\":\"250\",\"price\":\"50\",\"per\":\"50\",\"markup\":\"50.00\"}],\"totalMaterial\":{\"price\":600,\"markup_price\":3200},\"totalLabour\":{\"price\":250,\"markup_price\":675},\"price\":\"50\",\"vat\":\"20.00\"}]', 'test', 'test', 'test', '1@1.com', '+35935900000000');
INSERT INTO `quotes` VALUES (10, '[{\"id\":116,\"title\":\"1111212121\",\"content\":\"111\",\"material_list\":[{\"id\":534,\"product_code\":\"111\",\"title\":\"111\",\"price\":\"111\",\"foreach\":\"111\",\"markup\":\"111.00\",\"brand\":\"111\",\"category_id\":\"111\"},{\"id\":202,\"product_code\":\"222\",\"title\":\"222\",\"price\":\"222\",\"foreach\":\"222\",\"markup\":\"222.00\",\"brand\":\"222\",\"category_id\":\"222\"}],\"labour_list\":[{\"id\":195,\"title\":\"11\",\"price\":\"11\",\"per\":\"11\",\"markup\":\"11.00\"},{\"id\":321,\"title\":\"50\",\"price\":\"50\",\"per\":\"50\",\"markup\":\"50.00\"}],\"totalMaterial\":{\"price\":333,\"markup_price\":949.05},\"totalLabour\":{\"price\":61,\"markup_price\":87.21},\"price\":\"1500\",\"vat\":\"20.00\"},{\"id\":587,\"title\":\"222\",\"content\":\"222\",\"material_list\":[{\"id\":987,\"product_code\":\"100\",\"title\":\"100\",\"price\":\"100\",\"foreach\":\"100\",\"markup\":\"100.00\",\"brand\":\"100\",\"category_id\":\"100\"},{\"id\":762,\"product_code\":\"200\",\"title\":\"200\",\"price\":\"200\",\"foreach\":\"200\",\"markup\":\"20.00\",\"brand\":\"200\",\"category_id\":\"200\"}],\"labour_list\":[{\"id\":252,\"title\":\"30\",\"price\":\"30\",\"per\":\"30\",\"markup\":\"30.00\"},{\"id\":717,\"title\":\"50\",\"price\":\"50\",\"per\":\"50\",\"markup\":\"50.00\"}],\"totalMaterial\":{\"price\":300,\"markup_price\":440},\"totalLabour\":{\"price\":80,\"markup_price\":114},\"price\":\"20\",\"vat\":\"50.00\"}]', 'test company 111', '111', '111', '111@gmail.com', '+3592222222');
INSERT INTO `quotes` VALUES (15, '[{\"id\":697,\"title\":\"222\",\"content\":\"222\",\"material_list\":[{\"id\":800,\"product_code\":\"2\",\"title\":\"2\",\"price\":\"20\",\"foreach\":\"2\",\"markup\":\"20.00\",\"brand\":\"2\",\"category_id\":\"\"}],\"labour_list\":[{\"id\":446,\"title\":\"222\",\"price\":\"2220\",\"per\":\"222\",\"markup\":\"2220.00\"}],\"price\":\"220\",\"totalMaterial\":{\"price\":20,\"markup_price\":24},\"totalLabour\":{\"price\":2220,\"markup_price\":51504},\"vat\":\"20.00\"}]', '222', '2', '2', '2', '+3592');

-- ----------------------------
-- Table structure for quotes_old
-- ----------------------------
DROP TABLE IF EXISTS `quotes_old`;
CREATE TABLE `quotes_old`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `reference` int NULL DEFAULT NULL,
  `to` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `from` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `date` datetime NULL DEFAULT NULL,
  `price_list_id` int NULL DEFAULT NULL,
  `intro` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `notes` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `terms` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `customer_id` int NOT NULL,
  `job_id` int NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 3 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of quotes_old
-- ----------------------------
INSERT INTO `quotes_old` VALUES (1, 123, '123', '123', '0000-00-00 00:00:00', 123, '123', '123', '123', 123, 123);
INSERT INTO `quotes_old` VALUES (2, 222, '222', '222', '0000-00-00 00:00:00', 2, '2', '2', '2', 2, 2);

-- ----------------------------
-- Table structure for reminders
-- ----------------------------
DROP TABLE IF EXISTS `reminders`;
CREATE TABLE `reminders`  (
  `user_id` int NOT NULL AUTO_INCREMENT,
  `quote_unsent` tinyint(1) NULL DEFAULT NULL,
  `quote_need_follow_up` tinyint(1) NULL DEFAULT NULL,
  `invoice_unsent` tinyint(1) NULL DEFAULT NULL,
  `invoice_overdue` tinyint(1) NULL DEFAULT NULL,
  `summary_daily_email` tinyint(1) NULL DEFAULT NULL,
  `summary_weekly_email` tinyint(1) NULL DEFAULT NULL,
  `all_unsubscribe` tinyint(1) NULL DEFAULT NULL,
  PRIMARY KEY (`user_id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 5 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of reminders
-- ----------------------------
INSERT INTO `reminders` VALUES (1, 3, 3, 3, 3, 0, 0, 0);
INSERT INTO `reminders` VALUES (2, 7, 3, 7, 7, 0, 1, 1);
INSERT INTO `reminders` VALUES (3, 3, 7, 7, 3, 1, 1, 0);
INSERT INTO `reminders` VALUES (4, 0, 0, 0, 0, 0, 0, 0);

-- ----------------------------
-- Table structure for tasks
-- ----------------------------
DROP TABLE IF EXISTS `tasks`;
CREATE TABLE `tasks`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `desc` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `due` date NULL DEFAULT NULL,
  `job_id` int NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 14 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of tasks
-- ----------------------------
INSERT INTO `tasks` VALUES (9, 'task 1', '11111111111111111111111', '0000-00-00', 1);
INSERT INTO `tasks` VALUES (10, 'task 2', '22222', '0000-00-00', 1);
INSERT INTO `tasks` VALUES (13, 'test task', 'test', '0000-00-00', 1);

-- ----------------------------
-- Table structure for team_members
-- ----------------------------
DROP TABLE IF EXISTS `team_members`;
CREATE TABLE `team_members`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `email` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `initial_text` varchar(5) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `initial_color` varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `role` tinyint(1) NULL DEFAULT NULL,
  `permissions` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `user_id` int NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 15 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of team_members
-- ----------------------------
INSERT INTO `team_members` VALUES (4, '123321123321', '', '123', '#5ed9f5', 2, '{\"general\":{\"admin\":false,\"field_team\":false,\"export_csv\":true},\"invoice\":{\"view\":true,\"add\":true,\"edit_send\":true},\"quote\":{\"view\":true,\"add\":true,\"edit_send\":true}}', 1);
INSERT INTO `team_members` VALUES (7, '312312', '123', 'F1', '#2b56cd', 2, '', 1);
INSERT INTO `team_members` VALUES (9, 'qqq', 'qq', 'Aqq', '#fd5353', 1, '{\"general\":{\"admin\":true,\"field_team\":false,\"export_csv\":true},\"invoice\":{\"view\":true,\"add\":true,\"edit_send\":true},\"quote\":{\"view\":true,\"add\":true,\"edit_send\":true}}', 1);
INSERT INTO `team_members` VALUES (10, 'xxx', 'x', 'Axx', '', 1, '{\"general\":{\"admin\":false,\"field_team\":false,\"export_csv\":true},\"invoice\":{\"view\":true,\"add\":true,\"edit_send\":true},\"quote\":{\"view\":true,\"add\":true,\"edit_send\":true}}', 1);
INSERT INTO `team_members` VALUES (11, '123123', '123123', 'A32', '#14234e', 1, '{\"general\":{\"admin\":false,\"field_team\":false,\"export_csv\":true},\"invoice\":{\"view\":true,\"add\":true,\"edit_send\":true},\"quote\":{\"view\":true,\"add\":true,\"edit_send\":true}}', 1);
INSERT INTO `team_members` VALUES (12, '321', '123', 'A', '#ff4a4a', 1, '{\"general\":{\"admin\":false,\"field_team\":false,\"export_csv\":true},\"invoice\":{\"view\":true,\"add\":true,\"edit_send\":true},\"quote\":{\"view\":true,\"add\":true,\"edit_send\":true}}', 1);
INSERT INTO `team_members` VALUES (13, '123', '321', 'A', '#14b8a6', 1, '{\"general\":{\"admin\":false,\"field_team\":false,\"export_csv\":true},\"invoice\":{\"view\":true,\"add\":true,\"edit_send\":true},\"quote\":{\"view\":true,\"add\":true,\"edit_send\":true}}', 1);

-- ----------------------------
-- Table structure for todo
-- ----------------------------
DROP TABLE IF EXISTS `todo`;
CREATE TABLE `todo`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `content` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `is_done` tinyint(1) UNSIGNED NOT NULL DEFAULT 0,
  `date` date NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 10 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of todo
-- ----------------------------
INSERT INTO `todo` VALUES (8, 'zzzzzzzzz', 0, '2023-02-05');
INSERT INTO `todo` VALUES (9, 'zzzzzzzzz', 0, '2023-02-05');

-- ----------------------------
-- Table structure for user_profiles
-- ----------------------------
DROP TABLE IF EXISTS `user_profiles`;
CREATE TABLE `user_profiles`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `email` varchar(40) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `from_name` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `reply_to_email` varchar(40) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `signature` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `timezone` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `password` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `last_login_at` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 7 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of user_profiles
-- ----------------------------
INSERT INTO `user_profiles` VALUES (1, 'first', '1@1.com', '12', '213', '{\"blocks\":[{\"key\":\"7onnq\",\"text\":\"2123123123123\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}}],\"entityMap\":{}}', '{\"value\":\"America/Dawson\",\"lab', '123', '{\"epoch\":1677021001926,\"tz\":\"etc/gmt+5\",\"silent\":true,\"_weekStart\":1,\"_today\":{}}');
INSERT INTO `user_profiles` VALUES (2, '123', '123123@123.com', NULL, NULL, NULL, NULL, '123QW2Qq', '{\"epoch\":1676854388458,\"tz\":\"etc/gmt+5\",\"silent\":true,\"_weekStart\":1,\"_today\":{}}');
INSERT INTO `user_profiles` VALUES (3, 'insertedUserData', '123123123@213.com', NULL, NULL, NULL, NULL, '123QW2Qq', NULL);
INSERT INTO `user_profiles` VALUES (4, '123QW2Qq123QW2Qq', 'sad@ds.com', NULL, NULL, NULL, NULL, '123QW2Qq', NULL);
INSERT INTO `user_profiles` VALUES (5, '123QW2Qq', '123QW2Qq@1.com', NULL, NULL, NULL, NULL, '123QW2Qq', NULL);
INSERT INTO `user_profiles` VALUES (6, '123', '123@123.com', NULL, NULL, NULL, NULL, '123QW2Qq', NULL);

SET FOREIGN_KEY_CHECKS = 1;
