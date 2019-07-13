-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: 18-Nov-2018 às 08:33
-- Versão do servidor: 10.1.36-MariaDB
-- versão do PHP: 7.2.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `tcc`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `bairros`
--

CREATE TABLE `bairros` (
  `id_bairro` int(11) NOT NULL,
  `lat` varchar(10) DEFAULT NULL,
  `lng` varchar(10) DEFAULT NULL,
  `nome_bairro` varchar(100) DEFAULT NULL,
  `linha_id_linha` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `bairros`
--

INSERT INTO `bairros` (`id_bairro`, `lat`, `lng`, `nome_bairro`, `linha_id_linha`) VALUES
(1, '-22.218248', '-54.756308', 'Jardim Santa-Maria', 1);

-- --------------------------------------------------------

--
-- Estrutura da tabela `classificação_horarios`
--

CREATE TABLE `classificação_horarios` (
  `id_classificação_horarios` int(11) NOT NULL,
  `nome_classificação_horario` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `classificação_horarios`
--

INSERT INTO `classificação_horarios` (`id_classificação`, `nome_classificação_horario`) VALUES
(1, 'SÁBADOS'),
(2, 'UTEIS'),
(3, 'DOMINGOS/FERIADOS'),
(4, 'PONTOS FACULTATIVOS');

-- --------------------------------------------------------

--
-- Estrutura da tabela `comentario`
--

CREATE TABLE `comentario` (
  `id_comentario` int(11) NOT NULL,
  `comentario` text,
  `date_horas` text,
  `id_reclamação` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estrutura da tabela `favoritos`
--

CREATE TABLE `favoritos` (
  `id_favorito` int(11) NOT NULL,
  `data_salvo` text,
  `id_usuario` int(11) DEFAULT NULL,
  `id_bairro` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `favoritos`
--

INSERT INTO `favoritos` (`id_favorito`, `data_salvo`, `id_usuario`, `id_bairro`) VALUES
(1, '18/11/2018 - (3:33:0)', 1, 1);

-- --------------------------------------------------------

--
-- Estrutura da tabela `horarios`
--

CREATE TABLE `horarios` (
  `id_horarios` int(11) NOT NULL,
  `inicio_horario` time DEFAULT NULL,
  `final_horario` time DEFAULT NULL,
  `id_bairro` int(11) DEFAULT NULL,
  `classificação_id_classifação` int(11) DEFAULT NULL,
  `id_sentido` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `horarios`
--

INSERT INTO `horarios` (`id_horarios`, `inicio_horario`, `final_horario`, `id_bairro`, `classificação_id_classifação`, `id_sentido`) VALUES
(1, '02:10:00', '01:20:00', 1, 2, 1);

-- --------------------------------------------------------

--
-- Estrutura da tabela `linhas`
--

CREATE TABLE `linhas` (
  `id_linha` int(11) NOT NULL,
  `nome_linha` varchar(6) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `linhas`
--

INSERT INTO `linhas` (`id_linha`, `nome_linha`) VALUES
(1, 'L12');

-- --------------------------------------------------------

--
-- Estrutura da tabela `pontos`
--

CREATE TABLE `pontos` (
  `id_ponto` int(11) NOT NULL,
  `lat_ponto` varchar(10) DEFAULT NULL,
  `lng_ponto` varchar(10) DEFAULT NULL,
  `id_bairro` int(11) DEFAULT NULL,
  `id_rua` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `pontos`
--

INSERT INTO `pontos` (`id_ponto`, `lat_ponto`, `lng_ponto`, `id_bairro`, `id_rua`) VALUES
(1, '-22.209220', '-54.765483', 1, 1),
(2, '-22.209171', '-54.766934', 1, 2),
(3, '-22.216086', '-54.764440', 1, 3);

-- --------------------------------------------------------

--
-- Estrutura da tabela `reclamações`
--

CREATE TABLE `reclamações` (
  `id_reclamação` int(11) NOT NULL,
  `desc_reclamação` text,
  `data_de_reclamação` date DEFAULT NULL,
  `tipo_reclamção` varchar(100) DEFAULT NULL,
  `anexo_arquivo` text,
  `id_usuario` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `reclamações`
--

INSERT INTO `reclamações` (`id_reclamação`, `desc_reclamação`, `data_de_reclamação`, `tipo_reclamção`, `anexo_arquivo`, `id_usuario`) VALUES
(0, 'O Sistema Integrado de Transporte de Dourados (SIT Dourados) é o sistema que estrutura o transporte urbano na cidade brasileira de mesmo nome, no estado de Mato Grosso do Sul. O SIT agilizou o transporte urbano local e economizou gastos para os seus usuários, pois unificou o preço da passagem e além disso o usuário não paga mais duas passagens para chegar no local desejado. Hoje conta com um transporte coletivo 100% integrado, sendo administrado pela prefeitura. O sistema é formado pelo transporte de massa, sendo a modalidade que atende a maior parte da população Douradense. Recentemente foi introduzida a bilhetagem eletrônica, o que inibiu fraudes, além de facilitar a vida dos usuários douradenses, visto que esses não precisam mais portar ativos (dinheiro) para pagar sua passagem, sendo mais seguro também aos mesmos.', '2018-11-16', 'O Sistema Integrado de Transporte de Dourados ', 'uploads/download (1).jpeg', 1),
(0, 'Ao observar as dificuldades vivenciadas pelos estudantes do Curso Técnico em Informática para Internet do IFMS Campus Dourados sobre conteúdos de linguagem de programação Javascript, pensou-se na criação de uma ferramenta de auxílio aos estudos. Tal ferramenta configura-se na criação de um robô que auxilia no ensino de conteúdos de programação orientada a objetos, contribuindo para uma metodologia atrativa e divertida para os estudantes, o que por sua vez, também auxilia na criação de um ambiente propício ao ensino de robótica e na interação com novas tecnologias. Assim, além de despertar curiosidades na área da robótica, poderá contribuir no incentivo a pesquisa aplicada. Palavras-chave: Robótica, Programação, Sistema Web.', '2018-11-16', 'TCC do nycolas', 'uploads/2B69E.jpg', 1),
(0, '11111', '1111-11-11', '11111', 'uploads/tcc.sql', 1);

-- --------------------------------------------------------

--
-- Estrutura da tabela `ruas`
--

CREATE TABLE `ruas` (
  `id_rua` int(11) NOT NULL,
  `nome_rua` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `ruas`
--

INSERT INTO `ruas` (`id_rua`, `nome_rua`) VALUES
(1, 'R. Filinto Müller (IFMS)'),
(2, 'R. Francisca de Carvalho\r\n'),
(3, 'R. Monte Alegre\r\n');

-- --------------------------------------------------------

--
-- Estrutura da tabela `sentido`
--

CREATE TABLE `sentido` (
  `id_sentido` int(11) NOT NULL,
  `nome_sentido_via` varchar(40) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `sentido`
--

INSERT INTO `sentido` (`id_sentido`, `nome_sentido_via`) VALUES
(1, 'Via Pantanal'),
(2, 'Via Maracana');

-- --------------------------------------------------------

--
-- Estrutura da tabela `tipo_de_usuario`
--

CREATE TABLE `tipo_de_usuario` (
  `id_tipo_usuario` int(11) NOT NULL,
  `nome_tipo_usuario` varchar(100) DEFAULT NULL,
  `nivel_de_acesso` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `tipo_de_usuario`
--

INSERT INTO `tipo_de_usuario` (`id_tipo_usuario`, `nome_tipo_usuario`, `nivel_de_acesso`) VALUES
(1, 'Usuário', 1),
(2, 'Administrador', 2);

-- --------------------------------------------------------

--
-- Estrutura da tabela `usuarios`
--

CREATE TABLE `usuarios` (
  `id_usuario` int(11) NOT NULL,
  `nome_usuario` varchar(100) DEFAULT NULL,
  `email_usuario` varchar(40) DEFAULT NULL,
  `senha_usuario` char(8) DEFAULT NULL,
  `telefone_usuario` char(11) DEFAULT NULL,
  `cpf_usuario` varchar(11) DEFAULT NULL,
  `foto_usuario` text,
  `id_tipo_usuario` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `usuarios`
--

INSERT INTO `usuarios` (`id_usuario`, `nome_usuario`, `email_usuario`, `senha_usuario`, `telefone_usuario`, `cpf_usuario`, `foto_usuario`, `id_tipo_usuario`) VALUES
(1, 'Marcos Lopes', 'Marcoslopes5687@gmail.com', '99510796', '99510796', '06938907110', 'http://s2.glbimg.com/GfTA-EzkZvbms6v0PbsKIf6AiPs=/620x465/s.glbimg.com/jo/g1/f/original/2016/11/10/feira.jpg', 1),
(2, 'Viação Dourados', 'Viaçãodourados@gmail.com', '99510796', '99510796', '3456789', 'https://i2.wp.com/diariodotransporte.com.br/wp-content/uploads/2018/06/DOURADOS_MS.jpg?fit=640%2C360&ssl=1', 2);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `bairros`
--
ALTER TABLE `bairros`
  ADD PRIMARY KEY (`id_bairro`),
  ADD KEY `linha_id_linha` (`linha_id_linha`);

--
-- Indexes for table `classificação_horarios`
--
ALTER TABLE `classificação_horarios`
  ADD PRIMARY KEY (`id_classificação_horarios`);

--
-- Indexes for table `comentario`
--
ALTER TABLE `comentario`
  ADD PRIMARY KEY (`id_comentario`),
  ADD KEY `id_reclamação` (`id_reclamação`);

--
-- Indexes for table `favoritos`
--
ALTER TABLE `favoritos`
  ADD PRIMARY KEY (`id_favorito`),
  ADD KEY `id_usuario` (`id_usuario`),
  ADD KEY `id_bairro` (`id_bairro`);

--
-- Indexes for table `horarios`
--
ALTER TABLE `horarios`
  ADD PRIMARY KEY (`id_horarios`),
  ADD KEY `id_bairro` (`id_bairro`),
  ADD KEY `classificação_id_classifação` (`classificação_id_classifação`),
  ADD KEY `id_sentido` (`id_sentido`);

--
-- Indexes for table `linhas`
--
ALTER TABLE `linhas`
  ADD PRIMARY KEY (`id_linha`);

--
-- Indexes for table `pontos`
--
ALTER TABLE `pontos`
  ADD PRIMARY KEY (`id_ponto`),
  ADD KEY `id_rua` (`id_rua`),
  ADD KEY `id_bairro` (`id_bairro`);

--
-- Indexes for table `reclamações`
--
ALTER TABLE `reclamações`
  ADD PRIMARY KEY (`id_reclamação`),
  ADD KEY `id_usuario` (`id_usuario`);

--
-- Indexes for table `ruas`
--
ALTER TABLE `ruas`
  ADD PRIMARY KEY (`id_rua`);

--
-- Indexes for table `sentido`
--
ALTER TABLE `sentido`
  ADD PRIMARY KEY (`id_sentido`);

--
-- Indexes for table `tipo_de_usuario`
--
ALTER TABLE `tipo_de_usuario`
  ADD PRIMARY KEY (`id_tipo_usuario`);

--
-- Indexes for table `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id_usuario`),
  ADD KEY `id_tipo_usuario` (`id_tipo_usuario`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `bairros`
--
ALTER TABLE `bairros`
  MODIFY `id_bairro` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `classificação_horarios`
--
ALTER TABLE `classificação_horarios`
  MODIFY `id_classificação_horarios` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `comentario`
--
ALTER TABLE `comentario`
  MODIFY `id_comentario` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `favoritos`
--
ALTER TABLE `favoritos`
  MODIFY `id_favorito` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `horarios`
--
ALTER TABLE `horarios`
  MODIFY `id_horarios` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `linhas`
--
ALTER TABLE `linhas`
  MODIFY `id_linha` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `pontos`
--
ALTER TABLE `pontos`
  MODIFY `id_ponto` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `reclamações`
--
ALTER TABLE `reclamações`
  MODIFY `id_reclamação` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=38;

--
-- AUTO_INCREMENT for table `ruas`
--
ALTER TABLE `ruas`
  MODIFY `id_rua` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `sentido`
--
ALTER TABLE `sentido`
  MODIFY `id_sentido` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `tipo_de_usuario`
--
ALTER TABLE `tipo_de_usuario`
  MODIFY `id_tipo_usuario` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id_usuario` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Constraints for dumped tables
--

--
-- Limitadores para a tabela `bairros`
--
ALTER TABLE `bairros`
  ADD CONSTRAINT `bairros_ibfk_1` FOREIGN KEY (`linha_id_linha`) REFERENCES `linhas` (`id_linha`);

--
-- Limitadores para a tabela `comentario`
--
ALTER TABLE `comentario`
  ADD CONSTRAINT `comentario_ibfk_1` FOREIGN KEY (`id_reclamação`) REFERENCES `reclamações` (`id_reclamação`);

--
-- Limitadores para a tabela `favoritos`
--
ALTER TABLE `favoritos`
  ADD CONSTRAINT `favoritos_ibfk_1` FOREIGN KEY (`id_usuario`) REFERENCES `usuarios` (`id_usuario`),
  ADD CONSTRAINT `favoritos_ibfk_2` FOREIGN KEY (`id_bairro`) REFERENCES `bairros` (`id_bairro`);

--
-- Limitadores para a tabela `horarios`
--
ALTER TABLE `horarios`
  ADD CONSTRAINT `horarios_ibfk_1` FOREIGN KEY (`id_bairro`) REFERENCES `bairros` (`id_bairro`),
  ADD CONSTRAINT `horarios_ibfk_2` FOREIGN KEY (`classificação_id_classifação`) REFERENCES `classificação_horarios` (`id_classificação_horarios`),
  ADD CONSTRAINT `horarios_ibfk_3` FOREIGN KEY (`id_sentido`) REFERENCES `sentido` (`id_sentido`);

--
-- Limitadores para a tabela `pontos`
--
ALTER TABLE `pontos`
  ADD CONSTRAINT `pontos_ibfk_1` FOREIGN KEY (`id_rua`) REFERENCES `ruas` (`id_rua`),
  ADD CONSTRAINT `pontos_ibfk_2` FOREIGN KEY (`id_bairro`) REFERENCES `bairros` (`id_bairro`);

--
-- Limitadores para a tabela `reclamações`
--
ALTER TABLE `reclamações`
  ADD CONSTRAINT `reclamações_ibfk_1` FOREIGN KEY (`id_usuario`) REFERENCES `usuarios` (`id_usuario`);

--
-- Limitadores para a tabela `usuarios`
--
ALTER TABLE `usuarios`
  ADD CONSTRAINT `usuarios_ibfk_1` FOREIGN KEY (`id_tipo_usuario`) REFERENCES `tipo_de_usuario` (`id_tipo_usuario`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
