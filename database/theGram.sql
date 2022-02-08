-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 08, 2022 at 01:58 PM
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
  `updated_at` datetime DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `posts`
--

INSERT INTO `posts` (`id`, `user_id`, `image`, `description`, `slug`, `created_at`, `updated_at`) VALUES
(10031, 10000, 'http://localhost:3000/uploaded_file-1644324733148-58574326istockphoto-499571753-612x612.jpg', 'cat 1', 'JlhzGcJOsj', '2022-02-08 13:52:13', '2022-02-08 13:52:13'),
(10032, 10000, 'http://localhost:3000/uploaded_file-1644324746882-930522394istockphoto-858688716-612x612.jpg', 'cat 2', 'CJcdsOinDl', '2022-02-08 13:52:26', '2022-02-08 13:52:26'),
(10033, 10000, 'http://localhost:3000/uploaded_file-1644324756578-207819999istockphoto-977318096-612x612.jpg', 'cat 3', 'lfxMYWCGwf', '2022-02-08 13:52:36', '2022-02-08 13:52:36'),
(10034, 10000, 'http://localhost:3000/uploaded_file-1644324770578-281973867istockphoto-1071204696-612x612.jpg', 'cat 4', 'tmrwegnowO', '2022-02-08 13:52:50', '2022-02-08 13:52:50'),
(10035, 10000, 'http://localhost:3000/uploaded_file-1644324829821-159998480istockphoto-1220248041-612x612.jpg', 'cat 5', 'pLMkCdpBOL', '2022-02-08 13:53:49', '2022-02-08 13:53:49'),
(10036, 10000, 'http://localhost:3000/uploaded_file-1644324918697-972781390istockphoto-1337484588-612x612.jpg', 'cat 6', 'iQeQ-vNNRv', '2022-02-08 13:55:18', '2022-02-08 13:55:18');

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
(10001, 'tester@testnet.com', 'Elvis', 'Presley', 'tester', 'password', 'https://unsplash.com/photos/QeVmJxZOv3k');

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10037;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10002;

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
