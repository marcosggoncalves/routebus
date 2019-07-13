-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: 31-Out-2018 às 12:27
-- Versão do servidor: 8.0.13
-- versão do PHP: 7.2.10-0ubuntu0.18.04.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `linhas`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `bairros`
--

CREATE TABLE `bairros` (
  `id_bairro` int(11) NOT NULL,
  `lat` varchar(50) DEFAULT NULL,
  `lng` varchar(50) DEFAULT NULL,
  `nome_bairro` varchar(100) DEFAULT NULL,
  `numero_linha` varchar(5) DEFAULT NULL,
  `id_cidade` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Extraindo dados da tabela `bairros`
--

INSERT INTO `bairros` (`id_bairro`, `lat`, `lng`, `nome_bairro`, `numero_linha`, `id_cidade`) VALUES
(1, '-22.2182482\r\n', '-54.7563086\r\n', 'Jardim Santa-Maria', 'L12', 1),
(2, '-22.2300534', '-54.8380607', 'Jardim Florida II', NULL, 1),
(3, '-22.2251', '-54.8386', 'Jardim Florida', NULL, 1);

-- --------------------------------------------------------

--
-- Estrutura da tabela `cidade`
--

CREATE TABLE `cidade` (
  `id_cidade` int(11) NOT NULL,
  `nome_cidade` varchar(80) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Extraindo dados da tabela `cidade`
--

INSERT INTO `cidade` (`id_cidade`, `nome_cidade`) VALUES
(1, 'Dourados-MS\r\n');

-- --------------------------------------------------------

--
-- Estrutura da tabela `pontos`
--

CREATE TABLE `pontos` (
  `id_ponto` int(11) NOT NULL,
  `lat_ponto` varchar(50) DEFAULT NULL,
  `lng_ponto` varchar(50) DEFAULT NULL,
  `horario_ponto` time DEFAULT NULL,
  `endereço_ponto` varchar(80) DEFAULT NULL,
  `id_bairro` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Extraindo dados da tabela `pontos`
--

INSERT INTO `pontos` (`id_ponto`, `lat_ponto`, `lng_ponto`, `endereço_ponto`, `id_bairro`) VALUES
(1, '-22.2092203', '-54.7654834', ' R. Filinto Müller (IFMS)', 1),
(2, '-22.2091714', '-54.766934', 'R. Francisca de Carvalho', 1),
(3, '-22.2062383', '-54.7686439', 'R. Francisca de Carvalho', 1),
(4, '-22.205008', '-54.7684913', 'R. Francisca de Carvalho', 1),
(5, '-22.2030696', '-54.769943', 'R. Francisca de Carvalho', 1),
(6, '-22.2042756', '-54.7700789', 'R. Francisca de Carvalho', 1),
(7, '-22.2057878', '-54.7695233', 'R. Projetada Quartoze', 1),
(8, '-22.2084252', '-54.7685312', 'R. Álvaro Brandão', 1),
(9, '-22.2117307', '-54.7671676', 'R. Álvaro Brandão', 1),
(10, '-22.2139268', '-54.7669614', 'R. Álvaro Brandão', 1),
(11, '-22.2154588', '-54.7667884', 'R. Álvaro Brandão', 1),
(12, '-22.2159718', '-54.7667114', 'R. Álvaro Brandão', 1),
(13, '-22.2160867', '-54.76444013', 'R. Monte Alegre', 1),
(14, '-22.21574', '-54.7615976', 'R. Monte Alegre', 1),
(15, '-22.2185779', '-54.7605311', 'R. Monte Alegre', 1),
(16, '-22.213744', '-54.7982499', 'R. Neli Todesquini', 1),
(17, '-22.2157061', '-54.7607173', 'Rua das Dálias', 1),
(18, '-22.2153775', '-54.758387', ' R. Joaquim Alves Taveira', 1),
(19, '-22.2149304', '-54.7563314', 'Neli Todesquini', 1),
(20, '-22.2142924', '-54.759076', 'R. Ponta Porã', 1),
(21, '-22.2141306', '-54.7609884', 'R. Ponta Porã', 1),
(22, '-22.2135513', '-54.7613856', ' R. Candido de Carvalho', 1),
(23, '-22.2196272', '-54.7655645', 'R. Candido de Carvalho', 1),
(24, '-22.2138342', '-54.7657965', 'R. Candido de Carvalho', 1),
(25, '-22.216643', '-54.7660055', 'R. Candido de Carvalho', 1);

-- --------------------------------------------------------

--
-- Estrutura da tabela `reclamações`
--

CREATE TABLE `reclamações` (
  `id_reclamação` int(11) NOT NULL,
  `desc_reclamação` text,
  `data_de_reclamação` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Estrutura da tabela `tipo_usuario`
--

CREATE TABLE `tipo_usuario` (
  `id_tipo_usuario` int(11) NOT NULL,
  `preco_tipo_usuario_passagem` double DEFAULT NULL,
  `desc_tipo_usuario` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Estrutura da tabela `usuario`
--

CREATE TABLE `usuario` (
  `id_usuario` int(11) NOT NULL,
  `nome_usuario` varchar(100) DEFAULT NULL,
  `senha_usuario` varchar(20) DEFAULT NULL,
  `telefone_usuario` char(11) DEFAULT NULL,
  `cpf_usuario` char(11) DEFAULT NULL,
  `email_usuario` varchar(80) DEFAULT NULL,
  `tipo_usuario` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `bairros`
--
ALTER TABLE `bairros`
  ADD PRIMARY KEY (`id_bairro`),
  ADD KEY `id_cidade` (`id_cidade`);

--
-- Indexes for table `cidade`
--
ALTER TABLE `cidade`
  ADD PRIMARY KEY (`id_cidade`);

--
-- Indexes for table `pontos`
--
ALTER TABLE `pontos`
  ADD PRIMARY KEY (`id_ponto`),
  ADD KEY `id_bairro` (`id_bairro`);

--
-- Indexes for table `reclamações`
--
ALTER TABLE `reclamações`
  ADD PRIMARY KEY (`id_reclamação`);

--
-- Indexes for table `tipo_usuario`
--
ALTER TABLE `tipo_usuario`
  ADD PRIMARY KEY (`id_tipo_usuario`);

--
-- Indexes for table `usuario`
--
ALTER TABLE `usuario`
  ADD PRIMARY KEY (`id_usuario`),
  ADD KEY `tipo_usuario` (`tipo_usuario`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `bairros`
--
ALTER TABLE `bairros`
  MODIFY `id_bairro` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `cidade`
--
ALTER TABLE `cidade`
  MODIFY `id_cidade` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `pontos`
--
ALTER TABLE `pontos`
  MODIFY `id_ponto` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

--
-- AUTO_INCREMENT for table `reclamações`
--
ALTER TABLE `reclamações`
  MODIFY `id_reclamação` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `tipo_usuario`
--
ALTER TABLE `tipo_usuario`
  MODIFY `id_tipo_usuario` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `usuario`
--
ALTER TABLE `usuario`
  MODIFY `id_usuario` int(11) NOT NULL AUTO_INCREMENT;

--
-- Constraints for dumped tables
--

--
-- Limitadores para a tabela `bairros`
--
ALTER TABLE `bairros`
  ADD CONSTRAINT `bairros_ibfk_1` FOREIGN KEY (`id_cidade`) REFERENCES `cidade` (`id_cidade`);

--
-- Limitadores para a tabela `pontos`
--
ALTER TABLE `pontos`
  ADD CONSTRAINT `pontos_ibfk_1` FOREIGN KEY (`id_bairro`) REFERENCES `bairros` (`id_bairro`);

--
-- Limitadores para a tabela `usuario`
--
ALTER TABLE `usuario`
  ADD CONSTRAINT `usuario_ibfk_1` FOREIGN KEY (`tipo_usuario`) REFERENCES `tipo_usuario` (`id_tipo_usuario`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
