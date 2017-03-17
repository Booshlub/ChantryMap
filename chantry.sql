-- phpMyAdmin SQL Dump
-- version 4.6.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 05, 2017 at 09:52 PM
-- Server version: 5.7.14
-- PHP Version: 5.6.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `chantry`
--

-- --------------------------------------------------------

--
-- Table structure for table `photos`
--

CREATE TABLE `photos` (
  `id` int(11) NOT NULL,
  `photo_name` varchar(100) NOT NULL,
  `photo_description` varchar(200) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `photos`
--

INSERT INTO `photos` (`id`, `photo_name`, `photo_description`) VALUES
(1, 'img1.jpg', 'A picture of the boat that takes you to Chantry Island'),
(2, 'img2.jpg', 'An aerial view of Chantry Island'),
(3, 'img3.jpg', 'A different aerial view of Chantry Island'),
(4, 'img4.jpg', 'A view of the boat and lighthouse from the water'),
(5, 'img5.jpg', 'A different view of the boat and lighthouse from the water'),
(6, 'img6.jpg', 'Another view of the boat and lighthouse from the water'),
(7, 'img7.jpg', 'A large aerial photo of the entire island'),
(8, 'img8.jpg', 'Picture of the dock where the boat loads passengers'),
(9, 'img9.jpg', 'A picture of the lighthouse from across the water'),
(10, 'img10.jpg', 'A picture of a bird from the bird sanctuary'),
(11, 'img11.jpg', 'A couple of bird eggs in the bird sanctuary'),
(12, 'img12.jpg', 'A bird in the bird sanctuary');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `photos`
--
ALTER TABLE `photos`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `photos`
--
ALTER TABLE `photos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
