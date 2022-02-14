-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
<<<<<<< Updated upstream
-- Generation Time: Feb 08, 2022 at 05:22 PM
=======
-- Generation Time: Feb 14, 2022 at 11:53 AM
>>>>>>> Stashed changes
-- Server version: 10.4.22-MariaDB
-- PHP Version: 8.1.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `thegram`
--

-- --------------------------------------------------------

--
-- Table structure for table `comments`
--

CREATE TABLE `comments` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `post_id` int(11) NOT NULL,
  `comment` varchar(240) NOT NULL,
  `created_at` datetime DEFAULT current_timestamp(),
  `updated_at` datetime DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `posts`
--

CREATE TABLE `posts` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `image` varchar(1000) NOT NULL,
  `description` varchar(240) DEFAULT NULL,
  `slug` varchar(10) DEFAULT NULL,
  `created_at` datetime DEFAULT current_timestamp(),
  `updated_at` datetime DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `posts`
--

INSERT INTO `posts` (`id`, `user_id`, `image`, `description`, `slug`, `created_at`, `updated_at`) VALUES
<<<<<<< Updated upstream
(10037, 10000, 'uploaded_file-1644334185489-934488068istockphoto-1337484588-612x612.jpg', '\"Hello Kitty\"', 'GspWYAaFLs', '2022-02-08 16:29:45', '2022-02-08 16:29:45'),
(10038, 10000, 'uploaded_file-1644335292941-391980892istockphoto-1220248041-612x612.jpg', 'mi', 'jYDtSmGMtD', '2022-02-08 16:48:12', '2022-02-08 16:48:12'),
(10039, 10000, 'uploaded_file-1644335356949-239771001istockphoto-1159651037-612x612.jpg', 'dd', 'nkjUUvvzgY', '2022-02-08 16:49:16', '2022-02-08 16:49:16'),
(10040, 10000, 'uploaded_file-1644336514933-314855902istockphoto-1220248041-612x612.jpg', 'bbbbbb', 'RuhQRimJQf', '2022-02-08 17:08:34', '2022-02-08 17:08:34'),
(10041, 10000, 'uploaded_file-1644336894072-757362851istockphoto-1071204696-612x612.jpg', 'cat', 'wacHOZTBTJ', '2022-02-08 17:14:54', '2022-02-08 17:14:54');
=======
(10037, 10000, 'uploaded_file-1644835923319-299519349istockphoto-1337484588-612x612.jpg', '\"Updated text\"', 'GspWYAaFLs', '2022-02-08 16:29:45', '2022-02-14 11:52:03'),
(10038, 10000, 'uploaded_file-1644335292941-391980892istockphoto-1220248041-612x612.jpg', 'mi', 'jYDtSmGMtD', '2022-02-08 16:48:12', '2022-02-08 16:48:12'),
(10039, 10000, 'uploaded_file-1644335356949-239771001istockphoto-1159651037-612x612.jpg', 'dd', 'nkjUUvvzgY', '2022-02-08 16:49:16', '2022-02-08 16:49:16'),
(10040, 10000, 'uploaded_file-1644336514933-314855902istockphoto-1220248041-612x612.jpg', 'bbbbbb', 'RuhQRimJQf', '2022-02-08 17:08:34', '2022-02-08 17:08:34'),
(10041, 10000, 'uploaded_file-1644336894072-757362851istockphoto-1071204696-612x612.jpg', 'cat', 'wacHOZTBTJ', '2022-02-08 17:14:54', '2022-02-08 17:14:54'),
(10042, 10000, 'uploaded_file-1644835079803-507019703istockphoto-1256908153-612x612.jpg', '\"Hello Kitty\"', 'jIUjvWBbFP', '2022-02-14 11:37:59', '2022-02-14 11:37:59');
>>>>>>> Stashed changes

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `email` varchar(1000) NOT NULL,
  `first_name` varchar(1000) NOT NULL,
  `last_name` varchar(1000) NOT NULL,
  `username` varchar(1000) NOT NULL,
  `password` varchar(1000) NOT NULL,
  `image` varchar(1000) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `email`, `first_name`, `last_name`, `username`, `password`, `image`) VALUES
(10000, 'brad.drummer34@yahoo.com', 'Brad', 'Haupt', 'bradhaupt', 'password', 'https://unsplash.com/photos/q11NM0cFFzY'),
(10001, 'tester@testnet.com', 'Elvis', 'Presley', 'tester', 'password', 'https://unsplash.com/photos/QeVmJxZOv3k'),
(10002, 'james@host.com', 'james', 'brown', 'james', 'aap', 'http://localhost:3000/uploaded_file-1644337083178-641902185istockphoto-499571753-612x612.jpg');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `comments`
--
ALTER TABLE `comments`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`),
  ADD KEY `post_id` (`post_id`);

--
-- Indexes for table `posts`
--
ALTER TABLE `posts`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `slug` (`slug`),
  ADD KEY `user_id` (`user_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `comments`
--
ALTER TABLE `comments`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10001;

--
-- AUTO_INCREMENT for table `posts`
--
ALTER TABLE `posts`
<<<<<<< Updated upstream
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10042;
=======
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10043;
>>>>>>> Stashed changes

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10003;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `comments`
--
ALTER TABLE `comments`
  ADD CONSTRAINT `FK_comment_post` FOREIGN KEY (`post_id`) REFERENCES `posts` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `FK_comment_user` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `posts`
--
ALTER TABLE `posts`
  ADD CONSTRAINT `FK_post_user` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
