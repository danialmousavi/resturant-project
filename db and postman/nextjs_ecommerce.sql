-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 24, 2024 at 06:45 PM
-- Server version: 10.4.22-MariaDB
-- PHP Version: 8.1.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `nextjs_ecommerce`
--

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `parent_id` bigint(20) UNSIGNED NOT NULL DEFAULT 0,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`id`, `parent_id`, `name`, `description`, `deleted_at`, `created_at`, `updated_at`) VALUES
(1, 0, 'پیتزا', NULL, NULL, '2022-05-10 05:28:26', '2022-05-10 06:16:42'),
(2, 0, 'برگر', 'Dignissimos vel odit aliquam et cupiditate sunt minus aut impedit.', NULL, '2022-05-10 05:33:04', '2022-05-10 05:33:04'),
(3, 0, 'پیش غذا و سالاد', 'Labore eos velit laboriosam in.', NULL, '2022-05-10 05:33:31', '2022-05-10 05:33:31'),
(4, 0, 'نوشیدنی', 'Ipsam numquam dolores eveniet modi non hic.', NULL, '2022-05-10 05:33:40', '2022-05-10 05:33:40'),
(16, 0, 'oo', 'oo', '2022-06-19 19:54:54', '2022-06-19 19:54:36', '2022-06-19 19:54:54'),
(17, 0, 'core', 'gbgb', '2024-01-22 14:34:31', '2024-01-21 11:59:09', '2024-01-22 14:34:31'),
(18, 0, 'uuu', 'uuuuuuuuuuuu', '2024-01-21 12:07:25', '2024-01-21 11:59:54', '2024-01-21 12:07:25');

-- --------------------------------------------------------

--
-- Table structure for table `cities`
--

CREATE TABLE `cities` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `province_id` bigint(20) UNSIGNED NOT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `cities`
--

INSERT INTO `cities` (`id`, `name`, `province_id`, `deleted_at`, `created_at`, `updated_at`) VALUES
(4, 'تهران', 1, NULL, NULL, NULL),
(5, 'شیراز', 2, NULL, NULL, NULL),
(6, 'آباده', 2, NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `contact_us`
--

CREATE TABLE `contact_us` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `subject` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `text` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `contact_us`
--

INSERT INTO `contact_us` (`id`, `name`, `email`, `subject`, `text`, `created_at`, `updated_at`) VALUES
(1, 'csdc', 'xsax@gmail.com', 'csdc', 'sdcs', '2022-05-17 06:14:28', '2022-05-17 06:14:28'),
(2, 'csdc', 'xsax@gmail.com', 'csdc', 'sdcs', '2022-05-17 06:16:03', '2022-05-17 06:16:03'),
(3, 'xasx', 'csd@gmail.com', 'asx', 'asx', '2022-05-17 06:17:30', '2022-05-17 06:17:30'),
(4, 'xasx', 'csd@gmial.com', 'asx', 'asx', '2022-05-17 06:36:33', '2022-05-17 06:36:33'),
(5, 'gg', 'sc@gmail.com', 'sc`gh', 'dfv', '2022-05-17 06:37:14', '2022-05-17 06:37:14'),
(6, 'cs', 'ds@gmail.com', 'sv', 'th', '2022-05-17 06:39:05', '2022-05-17 06:39:05'),
(7, 'core', 'ali1@gmail.com', 'cdsc', 'hg', '2024-01-15 07:47:54', '2024-01-15 07:47:54'),
(8, 'ppp', 'ali2@gmail.com', 'sss', 'kj', '2024-01-15 07:50:11', '2024-01-15 07:50:11'),
(9, 'cdd', 'csdc@gmail.com', 'llll', 'kkkkkk', '2024-01-16 07:46:57', '2024-01-16 07:46:57'),
(10, 'بربی', 's@gmail.com', 'رر', 'ررررر', '2024-01-16 08:21:32', '2024-01-16 08:21:32'),
(11, 'opp', 's@gmail.com', 'رر', 'oo', '2024-01-16 08:26:02', '2024-01-16 08:26:02');

-- --------------------------------------------------------

--
-- Table structure for table `coupons`
--

CREATE TABLE `coupons` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `code` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `percentage` int(10) UNSIGNED NOT NULL,
  `expired_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `deleted_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `coupons`
--

INSERT INTO `coupons` (`id`, `code`, `percentage`, `expired_at`, `deleted_at`, `created_at`, `updated_at`) VALUES
(1, '123', 5, '2024-01-17 11:58:24', '2024-01-16 11:58:20', NULL, '2022-06-01 10:02:33'),
(2, '1234', 6, '2024-05-08 13:07:59', NULL, '2022-06-01 09:45:21', '2022-06-01 09:51:01'),
(3, '50', 8, '2024-02-09 14:49:52', NULL, '2022-06-01 09:50:38', '2024-01-20 16:15:24'),
(5, 'tr', 9, '2024-01-17 15:57:52', NULL, '2024-01-22 12:05:31', '2024-01-20 16:31:51'),
(6, 'uuu', 4, '2024-02-14 16:32:56', '2024-01-20 16:35:50', '2024-01-20 16:33:11', '2024-01-20 16:35:50');

-- --------------------------------------------------------

--
-- Table structure for table `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `uuid` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `connection` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `queue` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `exception` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2014_10_11_092110_create_provinces_table', 1),
(2, '2014_10_11_092247_create_cities_table', 1),
(3, '2014_10_12_000000_create_users_table', 1),
(4, '2014_10_12_100000_create_password_resets_table', 1),
(5, '2019_08_19_000000_create_failed_jobs_table', 1),
(6, '2019_12_14_000001_create_personal_access_tokens_table', 1),
(7, '2022_05_10_084136_create_categories_table', 1),
(8, '2022_05_10_084137_create_products_table', 1),
(9, '2022_05_10_091917_create_product_images_table', 1),
(10, '2022_05_10_092236_create_orders_table', 1),
(11, '2022_05_10_092251_create_order_items_table', 1),
(12, '2022_05_10_092343_create_transactions_table', 1),
(13, '2022_05_10_092747_create_contact_us_table', 1),
(14, '2022_05_18_161832_create_coupons_table', 2),
(15, '2022_05_18_181337_create_user_addresses_table', 3);

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

CREATE TABLE `orders` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `address_id` bigint(20) NOT NULL,
  `coupon_id` bigint(20) DEFAULT NULL,
  `status` tinyint(4) NOT NULL DEFAULT 0,
  `total_amount` int(10) UNSIGNED NOT NULL,
  `coupon_amount` int(10) UNSIGNED NOT NULL DEFAULT 0,
  `paying_amount` int(10) UNSIGNED NOT NULL,
  `payment_status` tinyint(4) NOT NULL DEFAULT 0,
  `deleted_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `orders`
--

INSERT INTO `orders` (`id`, `user_id`, `address_id`, `coupon_id`, `status`, `total_amount`, `coupon_amount`, `paying_amount`, `payment_status`, `deleted_at`, `created_at`, `updated_at`) VALUES
(5, 1, 1, NULL, 0, 290000, 14500, 275500, 0, NULL, '2022-05-18 14:26:08', '2022-05-18 14:26:08'),
(6, 1, 1, NULL, 0, 290000, 14500, 275500, 0, NULL, '2022-05-18 14:32:23', '2022-05-18 14:32:23'),
(7, 1, 1, NULL, 0, 580000, 0, 580000, 0, NULL, '2022-05-18 14:38:11', '2022-05-18 14:38:11'),
(8, 1, 1, NULL, 0, 580000, 0, 580000, 0, NULL, '2022-05-18 14:38:28', '2022-05-18 14:38:28'),
(9, 1, 1, NULL, 0, 580000, 0, 580000, 0, NULL, '2022-05-18 14:38:57', '2022-05-18 14:38:57'),
(10, 1, 1, NULL, 0, 290000, 14500, 275500, 0, NULL, '2022-05-18 14:39:22', '2022-05-18 14:39:22'),
(11, 1, 1, NULL, 0, 580000, 0, 580000, 0, NULL, '2022-05-18 14:39:46', '2022-05-18 14:39:46'),
(12, 1, 1, NULL, 0, 290000, 14500, 275500, 0, NULL, '2022-05-18 14:40:55', '2022-05-18 14:40:55'),
(13, 1, 1, NULL, 0, 290000, 14500, 275500, 0, NULL, '2022-05-18 14:40:58', '2022-05-18 14:40:58'),
(14, 1, 1, NULL, 0, 580000, 0, 580000, 0, NULL, '2022-05-18 14:42:10', '2022-05-18 14:42:10'),
(15, 1, 1, NULL, 0, 105000, 0, 105000, 0, NULL, '2022-05-18 14:44:38', '2022-05-18 14:44:38'),
(16, 1, 1, NULL, 0, 105000, 0, 105000, 0, NULL, '2022-05-18 14:45:01', '2022-05-18 14:45:01'),
(17, 1, 1, NULL, 0, 290000, 0, 290000, 0, NULL, '2022-05-18 14:47:24', '2022-05-18 14:47:24'),
(18, 1, 1, NULL, 0, 290000, 0, 290000, 0, NULL, '2022-05-18 14:47:31', '2022-05-18 14:47:31'),
(19, 1, 1, NULL, 0, 580000, 0, 580000, 0, NULL, '2022-05-18 14:52:22', '2022-05-18 14:52:22'),
(20, 1, 1, NULL, 1, 580000, 0, 580000, 1, NULL, '2022-05-18 14:52:44', '2022-05-18 17:35:07'),
(21, 1, 1, NULL, 0, 290000, 14500, 275500, 0, NULL, '2022-05-18 18:18:39', '2022-05-18 18:18:39'),
(22, 1, 1, NULL, 0, 105000, 0, 105000, 0, NULL, '2022-05-18 18:20:22', '2022-05-18 18:20:22'),
(23, 1, 1, NULL, 0, 105000, 0, 105000, 0, NULL, '2022-05-18 18:21:50', '2022-05-18 18:21:50'),
(24, 1, 1, NULL, 1, 105000, 0, 105000, 1, NULL, '2022-05-18 18:44:14', '2022-05-18 18:44:20'),
(25, 1, 1, NULL, 1, 145000, 0, 145000, 1, NULL, '2022-05-18 19:00:41', '2022-05-18 19:00:47'),
(26, 1, 1, NULL, 1, 290000, 0, 290000, 1, NULL, '2022-05-18 19:05:19', '2022-05-18 19:05:23'),
(27, 1, 1, NULL, 1, 290000, 0, 290000, 1, NULL, '2022-05-18 19:11:22', '2022-05-18 19:11:29'),
(28, 1, 1, NULL, 0, 290000, 14500, 275500, 0, NULL, '2022-05-18 19:11:49', '2022-05-18 19:11:49'),
(29, 1, 1, NULL, 0, 290000, 0, 290000, 0, NULL, '2022-05-18 19:13:27', '2022-05-18 19:13:27'),
(30, 1, 1, NULL, 0, 290000, 0, 290000, 0, NULL, '2022-05-18 19:13:50', '2022-05-18 19:13:50'),
(31, 1, 1, NULL, 0, 290000, 0, 290000, 0, NULL, '2022-05-18 19:15:33', '2022-05-18 19:15:33'),
(32, 1, 1, NULL, 1, 290000, 14500, 275500, 1, NULL, '2022-05-18 19:21:51', '2022-05-18 19:21:56'),
(33, 1, 2, NULL, 0, 105000, 5250, 99750, 0, NULL, '2022-05-19 08:50:01', '2022-05-19 08:50:01'),
(34, 1, 2, 1, 1, 105000, 5250, 99750, 1, NULL, '2022-05-19 08:51:31', '2022-05-19 08:51:40'),
(38, 1, 2, NULL, 0, 290000, 0, 290000, 0, NULL, '2023-06-17 06:55:22', '2023-06-17 06:55:22'),
(39, 1, 2, NULL, 0, 290000, 0, 290000, 0, NULL, '2024-01-17 15:25:04', '2024-01-17 15:25:04'),
(40, 1, 2, NULL, 0, 290000, 0, 290000, 0, NULL, '2024-01-17 15:40:49', '2024-01-17 15:40:49'),
(41, 1, 1, NULL, 0, 745000, 0, 745000, 0, NULL, '2024-01-17 15:58:06', '2024-01-17 15:58:06'),
(42, 1, 1, 2, 1, 745000, 44700, 700300, 1, NULL, '2024-01-17 16:06:16', '2024-01-17 16:29:45'),
(43, 1, 1, NULL, 0, 745000, 0, 745000, 0, NULL, '2024-01-17 16:42:33', '2024-01-17 16:42:33'),
(44, 1, 1, NULL, 1, 745000, 0, 745000, 1, NULL, '2024-01-17 16:42:45', '2024-01-17 16:42:49');

-- --------------------------------------------------------

--
-- Table structure for table `order_items`
--

CREATE TABLE `order_items` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `order_id` bigint(20) UNSIGNED NOT NULL,
  `product_id` bigint(20) UNSIGNED NOT NULL,
  `price` int(10) UNSIGNED NOT NULL,
  `quantity` int(10) UNSIGNED NOT NULL,
  `subtotal` int(10) UNSIGNED NOT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `order_items`
--

INSERT INTO `order_items` (`id`, `order_id`, `product_id`, `price`, `quantity`, `subtotal`, `deleted_at`, `created_at`, `updated_at`) VALUES
(3, 5, 3, 105000, 2, 250000, NULL, '2022-05-18 14:26:08', '2022-05-18 14:26:08'),
(4, 5, 8, 80000, 1, 80000, NULL, '2022-05-18 14:26:08', '2022-05-18 14:26:08'),
(5, 6, 3, 105000, 2, 250000, NULL, '2022-05-18 14:32:23', '2022-05-18 14:32:23'),
(6, 6, 8, 80000, 1, 80000, NULL, '2022-05-18 14:32:23', '2022-05-18 14:32:23'),
(7, 7, 3, 105000, 4, 500000, NULL, '2022-05-18 14:38:11', '2022-05-18 14:38:11'),
(8, 7, 8, 80000, 2, 160000, NULL, '2022-05-18 14:38:11', '2022-05-18 14:38:11'),
(9, 8, 3, 105000, 4, 500000, NULL, '2022-05-18 14:38:28', '2022-05-18 14:38:28'),
(10, 8, 8, 80000, 2, 160000, NULL, '2022-05-18 14:38:28', '2022-05-18 14:38:28'),
(11, 9, 3, 105000, 4, 500000, NULL, '2022-05-18 14:38:57', '2022-05-18 14:38:57'),
(12, 9, 8, 80000, 2, 160000, NULL, '2022-05-18 14:38:57', '2022-05-18 14:38:57'),
(13, 10, 3, 105000, 2, 250000, NULL, '2022-05-18 14:39:22', '2022-05-18 14:39:22'),
(14, 10, 8, 80000, 1, 80000, NULL, '2022-05-18 14:39:22', '2022-05-18 14:39:22'),
(15, 11, 3, 105000, 4, 500000, NULL, '2022-05-18 14:39:46', '2022-05-18 14:39:46'),
(16, 11, 8, 80000, 2, 160000, NULL, '2022-05-18 14:39:46', '2022-05-18 14:39:46'),
(17, 12, 3, 105000, 2, 250000, NULL, '2022-05-18 14:40:55', '2022-05-18 14:40:55'),
(18, 12, 8, 80000, 1, 80000, NULL, '2022-05-18 14:40:55', '2022-05-18 14:40:55'),
(19, 13, 3, 105000, 2, 250000, NULL, '2022-05-18 14:40:58', '2022-05-18 14:40:58'),
(20, 13, 8, 80000, 1, 80000, NULL, '2022-05-18 14:40:58', '2022-05-18 14:40:58'),
(21, 14, 3, 105000, 4, 500000, NULL, '2022-05-18 14:42:10', '2022-05-18 14:42:10'),
(22, 14, 8, 80000, 2, 160000, NULL, '2022-05-18 14:42:10', '2022-05-18 14:42:10'),
(23, 15, 3, 105000, 1, 125000, NULL, '2022-05-18 14:44:38', '2022-05-18 14:44:38'),
(24, 16, 3, 105000, 1, 125000, NULL, '2022-05-18 14:45:01', '2022-05-18 14:45:01'),
(25, 17, 3, 105000, 2, 250000, NULL, '2022-05-18 14:47:24', '2022-05-18 14:47:24'),
(26, 17, 8, 80000, 1, 80000, NULL, '2022-05-18 14:47:24', '2022-05-18 14:47:24'),
(27, 18, 3, 105000, 2, 250000, NULL, '2022-05-18 14:47:31', '2022-05-18 14:47:31'),
(28, 18, 8, 80000, 1, 80000, NULL, '2022-05-18 14:47:31', '2022-05-18 14:47:31'),
(29, 19, 3, 105000, 4, 500000, NULL, '2022-05-18 14:52:22', '2022-05-18 14:52:22'),
(30, 19, 8, 80000, 2, 160000, NULL, '2022-05-18 14:52:22', '2022-05-18 14:52:22'),
(31, 20, 3, 105000, 4, 500000, NULL, '2022-05-18 14:52:44', '2022-05-18 14:52:44'),
(32, 20, 8, 80000, 2, 160000, NULL, '2022-05-18 14:52:44', '2022-05-18 14:52:44'),
(33, 21, 3, 105000, 2, 250000, NULL, '2022-05-18 18:18:39', '2022-05-18 18:18:39'),
(34, 21, 8, 80000, 1, 80000, NULL, '2022-05-18 18:18:39', '2022-05-18 18:18:39'),
(35, 22, 3, 105000, 1, 125000, NULL, '2022-05-18 18:20:22', '2022-05-18 18:20:22'),
(36, 23, 3, 105000, 1, 125000, NULL, '2022-05-18 18:21:50', '2022-05-18 18:21:50'),
(37, 24, 3, 105000, 1, 125000, NULL, '2022-05-18 18:44:14', '2022-05-18 18:44:14'),
(38, 25, 5, 145000, 1, 145000, NULL, '2022-05-18 19:00:41', '2022-05-18 19:00:41'),
(39, 26, 5, 145000, 2, 290000, NULL, '2022-05-18 19:05:19', '2022-05-18 19:05:19'),
(40, 27, 5, 145000, 2, 290000, NULL, '2022-05-18 19:11:22', '2022-05-18 19:11:22'),
(41, 28, 5, 145000, 2, 290000, NULL, '2022-05-18 19:11:49', '2022-05-18 19:11:49'),
(42, 29, 5, 145000, 2, 290000, NULL, '2022-05-18 19:13:27', '2022-05-18 19:13:27'),
(43, 30, 5, 145000, 2, 290000, NULL, '2022-05-18 19:13:50', '2022-05-18 19:13:50'),
(44, 31, 5, 145000, 2, 290000, NULL, '2022-05-18 19:15:33', '2022-05-18 19:15:33'),
(45, 32, 5, 145000, 2, 290000, NULL, '2022-05-18 19:21:51', '2022-05-18 19:21:51'),
(46, 33, 3, 105000, 1, 125000, NULL, '2022-05-19 08:50:02', '2022-05-19 08:50:02'),
(47, 34, 3, 105000, 1, 125000, NULL, '2022-05-19 08:51:31', '2022-05-19 08:51:31'),
(52, 38, 5, 145000, 2, 290000, NULL, '2023-06-17 06:55:22', '2023-06-17 06:55:22'),
(53, 39, 5, 145000, 2, 290000, NULL, '2024-01-17 15:25:04', '2024-01-17 15:25:04'),
(54, 40, 5, 145000, 2, 290000, NULL, '2024-01-17 15:40:49', '2024-01-17 15:40:49'),
(55, 41, 3, 110000, 2, 260000, NULL, '2024-01-17 15:58:06', '2024-01-17 15:58:06'),
(56, 41, 5, 145000, 3, 435000, NULL, '2024-01-17 15:58:06', '2024-01-17 15:58:06'),
(57, 41, 6, 45000, 2, 90000, NULL, '2024-01-17 15:58:06', '2024-01-17 15:58:06'),
(58, 42, 3, 110000, 2, 260000, NULL, '2024-01-17 16:06:16', '2024-01-17 16:06:16'),
(59, 42, 5, 145000, 3, 435000, NULL, '2024-01-17 16:06:16', '2024-01-17 16:06:16'),
(60, 42, 6, 45000, 2, 90000, NULL, '2024-01-17 16:06:16', '2024-01-17 16:06:16'),
(61, 43, 3, 110000, 2, 260000, NULL, '2024-01-17 16:42:33', '2024-01-17 16:42:33'),
(62, 43, 5, 145000, 3, 435000, NULL, '2024-01-17 16:42:33', '2024-01-17 16:42:33'),
(63, 43, 6, 45000, 2, 90000, NULL, '2024-01-17 16:42:33', '2024-01-17 16:42:33'),
(64, 44, 3, 110000, 2, 260000, NULL, '2024-01-17 16:42:45', '2024-01-17 16:42:45'),
(65, 44, 5, 145000, 3, 435000, NULL, '2024-01-17 16:42:45', '2024-01-17 16:42:45'),
(66, 44, 6, 45000, 2, 90000, NULL, '2024-01-17 16:42:45', '2024-01-17 16:42:45');

-- --------------------------------------------------------

--
-- Table structure for table `password_resets`
--

CREATE TABLE `password_resets` (
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `personal_access_tokens`
--

CREATE TABLE `personal_access_tokens` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `tokenable_type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `tokenable_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  `abilities` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `personal_access_tokens`
--

INSERT INTO `personal_access_tokens` (`id`, `tokenable_type`, `tokenable_id`, `name`, `token`, `abilities`, `last_used_at`, `created_at`, `updated_at`) VALUES
(13, 'App\\Models\\User', 4, 'myApp', '13f86270dc5a4bbceaf407879d3dad0f00b1ca963a8c9a141e29531943c1008e', '[\"*\"]', '2022-05-26 10:51:29', '2022-05-20 08:38:21', '2022-05-26 10:51:29'),
(30, 'App\\Models\\User', 18, 'myApp', '81761b08061d3e23c1eff4c625ae76ef0de47b6d5b4d5c6e9597d9b8831959c1', '[\"user\"]', '2022-06-01 13:46:37', '2022-06-01 13:43:33', '2022-06-01 13:46:37'),
(42, 'App\\Models\\User', 18, 'myApp', '582b8126b296e612e2714183bfec9743d33c518210fc15a91a3efced18bb6992', '[\"user\"]', '2022-11-18 07:34:11', '2022-11-18 07:26:47', '2022-11-18 07:34:11'),
(65, 'App\\Models\\User', 1, 'myApp', '00ebc2da0a1e9352fcafbc70823870844372ceb942e98b64ccfebc4a1f213f38', '[\"user\"]', '2024-01-22 15:37:41', '2024-01-22 15:37:15', '2024-01-22 15:37:41');

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `slug` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `category_id` bigint(20) UNSIGNED NOT NULL,
  `primary_image` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `price` int(10) UNSIGNED NOT NULL DEFAULT 0,
  `quantity` int(10) UNSIGNED NOT NULL DEFAULT 0,
  `status` tinyint(4) NOT NULL DEFAULT 1,
  `sale_price` int(10) UNSIGNED DEFAULT 0,
  `date_on_sale_from` timestamp NULL DEFAULT NULL,
  `date_on_sale_to` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `name`, `slug`, `category_id`, `primary_image`, `description`, `price`, `quantity`, `status`, `sale_price`, `date_on_sale_from`, `date_on_sale_to`, `deleted_at`, `created_at`, `updated_at`) VALUES
(3, 'پیتزا رست بیف', 'پیتزا-رست-بیف', 1, '371167.jpg', 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است', 130000, 4, 1, 110000, '2024-01-13 16:05:49', '2024-01-31 16:06:14', NULL, '2022-05-10 07:43:15', '2024-01-17 16:42:49'),
(5, 'پیتزا پپرونی', 'پیتزا-پپرونی', 1, '434825.jpg', 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است', 145000, 44, 1, 0, NULL, NULL, NULL, '2022-05-10 07:54:16', '2024-01-17 16:42:49'),
(6, 'برگر گوشت ذغالی', 'برگر-گوشت-ذغالی', 2, '750670.jpg', 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است', 45000, 5, 1, 0, NULL, NULL, NULL, '2022-05-10 07:58:13', '2024-01-17 16:42:49'),
(7, 'برگر بوقلمون ذغالی', 'برگر-بوقلمون-ذغالی', 2, '915791.jpg', 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است', 51000, 10, 1, 0, NULL, NULL, NULL, '2022-05-10 07:59:31', '2022-05-10 07:59:31'),
(8, 'دوبل برگر گوشت ذغالی', 'دوبل-برگر-گوشت-ذغالی', 2, '131608.jpg', 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است', 80000, 8, 1, 0, NULL, NULL, NULL, '2022-05-10 08:01:08', '2022-05-18 17:35:07'),
(9, 'سیب زمینی ساده', 'سیب-زمینی-ساده', 3, '107085.jpg', 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است', 40000, 10, 1, NULL, NULL, NULL, NULL, '2022-05-10 08:08:40', '2022-05-10 08:08:40'),
(10, 'سالاد', 'سالاد', 3, '832255.jpg', 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است', 44000, 10, 1, NULL, NULL, NULL, NULL, '2022-05-10 08:10:39', '2022-05-10 08:10:39'),
(11, 'نوشابه قوطی', 'نوشابه-قوطی', 4, '848139.jpg', 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است', 10000, 10, 1, NULL, NULL, NULL, NULL, '2022-05-10 08:12:36', '2022-05-10 08:12:36'),
(12, 'نوشابه قوطی زرد', 'نوشابه-قوطی-زرد', 4, '39277.jpg', 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است', 10000, 10, 1, NULL, NULL, NULL, NULL, '2022-05-10 08:13:28', '2022-05-10 08:13:28'),
(16, 'پیتزا مخصوص', 'پیتزا-مخصوص', 1, '453429.jpg', 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است', 126500, 10, 1, NULL, NULL, NULL, '2024-01-22 14:33:01', '2022-05-27 14:23:24', '2024-01-22 14:33:01');

-- --------------------------------------------------------

--
-- Table structure for table `product_images`
--

CREATE TABLE `product_images` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `product_id` bigint(20) UNSIGNED NOT NULL,
  `image` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `product_images`
--

INSERT INTO `product_images` (`id`, `product_id`, `image`, `deleted_at`, `created_at`, `updated_at`) VALUES
(5, 3, '390017.jpg', NULL, '2022-05-10 07:43:15', '2022-05-10 07:43:15'),
(6, 3, '396758.jpg', NULL, '2022-05-10 07:43:15', '2022-05-10 07:43:15'),
(9, 5, '453429.jpg', NULL, '2022-05-10 07:54:16', '2022-05-10 07:54:16'),
(10, 5, '548214.jpg', NULL, '2022-05-10 07:54:16', '2022-05-10 07:54:16'),
(11, 6, '762669.jpg', NULL, '2022-05-10 07:58:13', '2022-05-10 07:58:13'),
(12, 6, '768993.jpg', NULL, '2022-05-10 07:58:13', '2022-05-10 07:58:13'),
(13, 7, '938729.jpg', NULL, '2022-05-10 07:59:31', '2022-05-10 07:59:31'),
(14, 7, '942937.jpg', NULL, '2022-05-10 07:59:31', '2022-05-10 07:59:31'),
(15, 8, '341653.jpg', NULL, '2022-05-10 08:01:08', '2022-05-10 08:01:08'),
(16, 8, '345242.jpg', NULL, '2022-05-10 08:01:08', '2022-05-10 08:01:08'),
(17, 9, '146451.jpg', NULL, '2022-05-10 08:08:40', '2022-05-10 08:08:40'),
(18, 9, '150561.jpg', NULL, '2022-05-10 08:08:40', '2022-05-10 08:08:40'),
(19, 10, '849319.jpg', NULL, '2022-05-10 08:10:39', '2022-05-10 08:10:39'),
(20, 10, '853029.jpg', NULL, '2022-05-10 08:10:39', '2022-05-10 08:10:39'),
(21, 11, '860749.jpg', NULL, '2022-05-10 08:12:36', '2022-05-10 08:12:36'),
(22, 12, '53835.jpg', NULL, '2022-05-10 08:13:28', '2022-05-10 08:13:28'),
(28, 16, '4591.jpg', NULL, '2022-05-27 14:23:24', '2022-05-27 14:23:24'),
(29, 16, '11197.jpg', NULL, '2022-05-27 14:23:24', '2022-05-27 14:23:24');

-- --------------------------------------------------------

--
-- Table structure for table `provinces`
--

CREATE TABLE `provinces` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `provinces`
--

INSERT INTO `provinces` (`id`, `name`, `deleted_at`, `created_at`, `updated_at`) VALUES
(1, 'تهران', NULL, NULL, NULL),
(2, 'فارس', NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `transactions`
--

CREATE TABLE `transactions` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `order_id` bigint(20) UNSIGNED NOT NULL,
  `amount` int(10) UNSIGNED NOT NULL,
  `token` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `trans_id` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `status` tinyint(4) NOT NULL DEFAULT 0,
  `deleted_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `transactions`
--

INSERT INTO `transactions` (`id`, `user_id`, `order_id`, `amount`, `token`, `trans_id`, `status`, `deleted_at`, `created_at`, `updated_at`) VALUES
(1, 1, 5, 275500, 'dZeYqJk', NULL, 0, NULL, '2022-05-18 14:26:08', '2022-05-18 14:26:08'),
(2, 1, 6, 275500, 'dZeYqJo', NULL, 0, NULL, '2022-05-18 14:32:23', '2022-05-18 14:32:23'),
(3, 1, 7, 580000, 'dZeYqJs', NULL, 0, NULL, '2022-05-18 14:38:11', '2022-05-18 14:38:11'),
(4, 1, 8, 580000, 'dZeYqJw', NULL, 0, NULL, '2022-05-18 14:38:28', '2022-05-18 14:38:28'),
(5, 1, 9, 580000, 'dZeYqJ0', NULL, 0, NULL, '2022-05-18 14:38:57', '2022-05-18 14:38:57'),
(6, 1, 10, 275500, 'dZeYqJ4', NULL, 0, NULL, '2022-05-18 14:39:22', '2022-05-18 14:39:22'),
(7, 1, 11, 580000, 'dZeYqZU', NULL, 0, NULL, '2022-05-18 14:39:46', '2022-05-18 14:39:46'),
(8, 1, 12, 275500, 'dZeYqZY', NULL, 0, NULL, '2022-05-18 14:40:55', '2022-05-18 14:40:55'),
(9, 1, 13, 275500, 'dZeYqZc', NULL, 0, NULL, '2022-05-18 14:40:58', '2022-05-18 14:40:58'),
(10, 1, 14, 580000, 'dZeYqZg', NULL, 0, NULL, '2022-05-18 14:42:10', '2022-05-18 14:42:10'),
(11, 1, 15, 105000, 'dZeYqZo', NULL, 0, NULL, '2022-05-18 14:44:38', '2022-05-18 14:44:38'),
(12, 1, 16, 105000, 'dZeYqZs', NULL, 0, NULL, '2022-05-18 14:45:01', '2022-05-18 14:45:01'),
(13, 1, 17, 290000, 'dZeYqZw', NULL, 0, NULL, '2022-05-18 14:47:24', '2022-05-18 14:47:24'),
(14, 1, 18, 290000, 'dZeYqZ0', NULL, 0, NULL, '2022-05-18 14:47:31', '2022-05-18 14:47:31'),
(15, 1, 19, 580000, 'dZeYqZ4', NULL, 0, NULL, '2022-05-18 14:52:22', '2022-05-18 14:52:22'),
(16, 1, 20, 580000, 'dZeYqpU', NULL, 1, NULL, '2022-05-18 14:52:44', '2022-05-18 17:35:07'),
(17, 1, 21, 275500, 'dZeYq54', NULL, 0, NULL, '2022-05-18 18:18:39', '2022-05-18 18:18:39'),
(18, 1, 22, 105000, 'dZeYrJU', NULL, 0, NULL, '2022-05-18 18:20:22', '2022-05-18 18:20:22'),
(19, 1, 23, 105000, 'dZeYrJY', NULL, 0, NULL, '2022-05-18 18:21:50', '2022-05-18 18:21:50'),
(20, 1, 24, 105000, 'dZeYrJg', '85793', 1, NULL, '2022-05-18 18:44:14', '2022-05-18 18:44:20'),
(21, 1, 25, 145000, 'dZeYrJo', '85795', 1, NULL, '2022-05-18 19:00:41', '2022-05-18 19:00:47'),
(22, 1, 26, 290000, 'dZeYrJs', '85796', 1, NULL, '2022-05-18 19:05:19', '2022-05-18 19:05:23'),
(23, 1, 27, 290000, 'dZeYrJw', '85797', 1, NULL, '2022-05-18 19:11:22', '2022-05-18 19:11:29'),
(24, 1, 28, 275500, 'dZeYrJ0', NULL, 0, NULL, '2022-05-18 19:11:49', '2022-05-18 19:11:49'),
(25, 1, 29, 290000, 'dZeYrJ4', NULL, 0, NULL, '2022-05-18 19:13:27', '2022-05-18 19:13:27'),
(26, 1, 30, 290000, 'dZeZo5U', NULL, 0, NULL, '2022-05-18 19:13:50', '2022-05-18 19:13:50'),
(27, 1, 31, 290000, 'dZeZo5Y', NULL, 0, NULL, '2022-05-18 19:15:33', '2022-05-18 19:15:33'),
(28, 1, 32, 275500, 'dZeZo5c', '85802', 1, NULL, '2022-05-18 19:21:51', '2022-05-18 19:21:56'),
(29, 1, 33, 99750, 'dZeZp5Y', NULL, 0, NULL, '2022-05-19 08:50:02', '2022-05-19 08:50:02'),
(30, 1, 34, 99750, 'dZeZp5c', '85842', 1, NULL, '2022-05-19 08:51:31', '2022-05-19 08:51:40'),
(34, 1, 38, 290000, '3235958870', NULL, 0, NULL, '2023-06-17 06:55:22', '2023-06-17 06:55:22'),
(35, 1, 39, 290000, '202401171855156I', NULL, 0, NULL, '2024-01-17 15:25:04', '2024-01-17 15:25:04'),
(36, 1, 40, 290000, '3450752840', NULL, 0, NULL, '2024-01-17 15:40:49', '2024-01-17 15:40:49'),
(37, 1, 41, 745000, '3450771094', NULL, 0, NULL, '2024-01-17 15:58:06', '2024-01-17 15:58:06'),
(38, 1, 42, 700300, '3450779359', NULL, 1, NULL, '2024-01-17 16:06:16', '2024-01-17 16:29:45'),
(39, 1, 43, 745000, '3450818584', NULL, 0, NULL, '2024-01-17 16:42:33', '2024-01-17 16:42:33'),
(40, 1, 44, 745000, '3450818782', NULL, 1, NULL, '2024-01-17 16:42:45', '2024-01-17 16:42:49');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `cellphone` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `otp` int(11) DEFAULT NULL,
  `login_token` varchar(199) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `is_admin` tinyint(4) NOT NULL DEFAULT 0,
  `deleted_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `email_verified_at`, `password`, `remember_token`, `cellphone`, `otp`, `login_token`, `is_admin`, `deleted_at`, `created_at`, `updated_at`) VALUES
(1, 'علی شیخ', 'ali@gmail.com', NULL, '$2y$10$SR.HcahR/dcL681A6yEWieISlpdH8cQ64VmLDYBMDQbb3l5AS09jy', NULL, '09100000000', 909444, '$2y$10$rgng67FgOX/6Ta8v0ROO..uDyBG/ON4m25WTXBeOB4RAONSncmnD2', 1, NULL, NULL, '2024-01-22 15:36:54'),
(3, 'لیام', 'liam@gmail.com', NULL, '$2y$10$nB6AebKJ3UpvOqYZcY/n3OwHVY1xgqHG0k/9E3uoPRa2iKgecYHp6', NULL, '09150000000', 685843, '$2y$10$IiX7cZTLYQabLZDVx2OM/eztW2s2NdSUmKAO5BaGP8lFYNRUqioE2', 1, NULL, '2022-05-19 12:50:17', '2022-05-27 11:32:27'),
(10, 'u', 'uu@gmail.com', NULL, '$2y$10$I0ckcHQ/.WfhFohZlRqyHOXtbRNO.3m.BiNl.u2zI.G1pVxrQ5udm', NULL, '09110000000', NULL, NULL, 0, NULL, NULL, '2022-05-27 10:12:16'),
(11, 'l', 'll@gmail.com', NULL, '$2y$10$2uwviQF9s7zZQ5x2itdCHe7eoMoKa2ui/FIvx9PPFzvV07PPkGKBW', NULL, '09120000000', NULL, NULL, 0, NULL, '2022-05-27 10:16:44', '2022-05-27 10:16:44'),
(14, 'core', 'ali2@gmail.com', NULL, '$2y$10$j0kjFHPzK3Xq5AqbagDlF.2IV2U43CPLSdKOLfP/LEftuMHuEiabK', NULL, '09196823796', NULL, NULL, 0, NULL, '2022-06-01 05:31:50', '2022-06-01 05:31:50');

-- --------------------------------------------------------

--
-- Table structure for table `user_addresses`
--

CREATE TABLE `user_addresses` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `address` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `cellphone` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `postal_code` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `province_id` bigint(20) NOT NULL,
  `city_id` bigint(20) NOT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `user_addresses`
--

INSERT INTO `user_addresses` (`id`, `title`, `address`, `cellphone`, `postal_code`, `user_id`, `province_id`, `city_id`, `deleted_at`, `created_at`, `updated_at`) VALUES
(1, 'محل کار', 'pppp', '09223456888', '6234567489', 1, 1, 4, NULL, NULL, '2024-01-16 17:34:55'),
(2, 'iii', 'csdcsdc', '09120000000', '1234567892', 1, 1, 4, NULL, NULL, '2024-01-17 09:54:39'),
(8, 'u', 'eeeeee', '09178623796', '1234567898', 1, 2, 5, '2022-06-17 06:17:24', '2022-06-17 06:14:50', '2022-06-17 06:17:24'),
(9, 'o3', 'ooo', '09178538966', '1234565473', 1, 1, 4, '2022-06-17 06:17:03', '2022-06-17 06:15:56', '2022-06-17 06:17:03'),
(10, 'tt', 'ttt', '09100000000', '1234567899', 1, 1, 4, '2024-01-16 17:34:02', '2024-01-16 17:05:25', '2024-01-16 17:34:02'),
(11, 'uuuuu', 'uuuuu', '09100000000', '1234567899', 1, 2, 6, '2024-01-16 17:34:45', '2024-01-16 17:10:48', '2024-01-16 17:34:45'),
(12, 'ooo', 'hhhh', '09100000000', '1234567899', 1, 2, 5, '2024-01-17 09:52:04', '2024-01-17 09:51:56', '2024-01-17 09:52:04');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `cities`
--
ALTER TABLE `cities`
  ADD PRIMARY KEY (`id`),
  ADD KEY `cities_province_id_foreign` (`province_id`);

--
-- Indexes for table `contact_us`
--
ALTER TABLE `contact_us`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `coupons`
--
ALTER TABLE `coupons`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `code` (`code`);

--
-- Indexes for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`id`),
  ADD KEY `orders_user_id_foreign` (`user_id`);

--
-- Indexes for table `order_items`
--
ALTER TABLE `order_items`
  ADD PRIMARY KEY (`id`),
  ADD KEY `order_items_order_id_foreign` (`order_id`),
  ADD KEY `order_items_product_id_foreign` (`product_id`);

--
-- Indexes for table `password_resets`
--
ALTER TABLE `password_resets`
  ADD KEY `password_resets_email_index` (`email`);

--
-- Indexes for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  ADD KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `slug` (`slug`),
  ADD KEY `products_category_id_foreign` (`category_id`);

--
-- Indexes for table `product_images`
--
ALTER TABLE `product_images`
  ADD PRIMARY KEY (`id`),
  ADD KEY `product_images_product_id_foreign` (`product_id`);

--
-- Indexes for table `provinces`
--
ALTER TABLE `provinces`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `transactions`
--
ALTER TABLE `transactions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `transactions_user_id_foreign` (`user_id`),
  ADD KEY `transactions_order_id_foreign` (`order_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`),
  ADD UNIQUE KEY `cellphone` (`cellphone`);

--
-- Indexes for table `user_addresses`
--
ALTER TABLE `user_addresses`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_addresses_user_id_foreign` (`user_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT for table `cities`
--
ALTER TABLE `cities`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `contact_us`
--
ALTER TABLE `contact_us`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `coupons`
--
ALTER TABLE `coupons`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT for table `orders`
--
ALTER TABLE `orders`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=45;

--
-- AUTO_INCREMENT for table `order_items`
--
ALTER TABLE `order_items`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=67;

--
-- AUTO_INCREMENT for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=66;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=28;

--
-- AUTO_INCREMENT for table `product_images`
--
ALTER TABLE `product_images`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=51;

--
-- AUTO_INCREMENT for table `provinces`
--
ALTER TABLE `provinces`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `transactions`
--
ALTER TABLE `transactions`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=41;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=28;

--
-- AUTO_INCREMENT for table `user_addresses`
--
ALTER TABLE `user_addresses`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `cities`
--
ALTER TABLE `cities`
  ADD CONSTRAINT `cities_province_id_foreign` FOREIGN KEY (`province_id`) REFERENCES `provinces` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `orders`
--
ALTER TABLE `orders`
  ADD CONSTRAINT `orders_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `order_items`
--
ALTER TABLE `order_items`
  ADD CONSTRAINT `order_items_order_id_foreign` FOREIGN KEY (`order_id`) REFERENCES `orders` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `order_items_product_id_foreign` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `products`
--
ALTER TABLE `products`
  ADD CONSTRAINT `products_category_id_foreign` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `product_images`
--
ALTER TABLE `product_images`
  ADD CONSTRAINT `product_images_product_id_foreign` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `transactions`
--
ALTER TABLE `transactions`
  ADD CONSTRAINT `transactions_order_id_foreign` FOREIGN KEY (`order_id`) REFERENCES `orders` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `transactions_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `user_addresses`
--
ALTER TABLE `user_addresses`
  ADD CONSTRAINT `user_addresses_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
