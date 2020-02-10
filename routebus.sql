

CREATE TABLE `bairros` (
  `id_bairro` int(11) NOT NULL,
  `lat` varchar(20) DEFAULT NULL,
  `lng` varchar(20) DEFAULT NULL,
  `nome_bairro` varchar(80) DEFAULT NULL,
  `id_linha` int(11) DEFAULT NULL
);

INSERT INTO `bairros` (`id_bairro`, `lat`, `lng`, `nome_bairro`, `id_linha`) VALUES
(1, '-22.2092203', '-54.7654834', 'Santa - Maria', 1);

-- --------------------------------------------------------

--
-- Estrutura para tabela `classificacao`
--

CREATE TABLE `classificacao` (
  `id_classificacao` int(11) NOT NULL,
  `nome_classifcacao` varchar(100) DEFAULT NULL
) ;

--
-- Despejando dados para a tabela `classificacao`
--

INSERT INTO `classificacao` (`id_classificacao`, `nome_classifcacao`) VALUES
(1, 'Uteis');

-- --------------------------------------------------------

--
-- Estrutura para tabela `classificacao_horario`
--

CREATE TABLE `classificacao_horario` (
  `id_classificacao_horario` int(11) NOT NULL,
  `id_horario` int(11) DEFAULT NULL,
  `id_classificacao` int(11) DEFAULT NULL
) ;

--
-- Despejando dados para a tabela `classificacao_horario`
--

INSERT INTO `classificacao_horario` (`id_classificacao_horario`, `id_horario`, `id_classificacao`) VALUES
(1, 1, 1),
(2, 2, 1),
(3, 3, 1);

-- --------------------------------------------------------

--
-- Estrutura para tabela `comentario`
--

CREATE TABLE `comentario` (
  `id_comentario` int(11) NOT NULL,
  `comentario` text DEFAULT NULL,
  `data_comentario` varchar(80) DEFAULT NULL,
  `id_usuario` int(11) DEFAULT NULL,
  `id_reclamacao` int(11) DEFAULT NULL
) ;

--
-- Despejando dados para a tabela `comentario`
--

INSERT INTO `comentario` (`id_comentario`, `comentario`, `data_comentario`, `id_usuario`, `id_reclamacao`) VALUES
(1, '0', '2020-02-09 17:13:15.181', 4, 3),
(2, 'oi', '2020-02-09 17:13:49.592', 4, 3),
(3, 'kk', '2020-02-09 17:14:25.477', 4, 3),
(4, 'kkd', '2020-02-09 17:16:43.103', 4, 3),
(5, 'k', '2020-02-09 17:34:50.613', 4, 3),
(6, '', '2020-02-09 17:34:54.925', 4, 3),
(7, 'aqui', '09/02/2020', 4, 3),
(8, 'iii', '09/02/202017:41:23', 4, 3),
(9, 'aqui', '09/02/2020 ás 17:41:59', 4, 3),
(10, 'aqui', '09/02/2020 às 17:42:44', 4, 3),
(11, 'Claro', '09/02/2020 às 17:45:41', 4, 3);

-- --------------------------------------------------------

--
-- Estrutura para tabela `favoritos`
--

CREATE TABLE `favoritos` (
  `id_favorito` int(11) NOT NULL,
  `data_salvo` text DEFAULT NULL,
  `id_usuario` int(11) DEFAULT NULL,
  `id_bairro` int(11) DEFAULT NULL
) ;

--
-- Despejando dados para a tabela `favoritos`
--

INSERT INTO `favoritos` (`id_favorito`, `data_salvo`, `id_usuario`, `id_bairro`) VALUES
(6, '09/02/2020 às 22:37:18', 4, 1),
(7, '09/02/2020 às 22:37:32', 4, 1),
(8, '09/02/2020 às 22:37:37', 4, 1),
(9, '09/02/2020 às 22:37:39', 4, 1),
(10, '09/02/2020 às 22:37:41', 4, 1);

-- --------------------------------------------------------

--
-- Estrutura para tabela `horario`
--

CREATE TABLE `horario` (
  `id_horario` int(11) NOT NULL,
  `horario_time` time DEFAULT NULL,
  `id_bairro` int(11) DEFAULT NULL,
  `id_sentido` int(11) DEFAULT NULL,
  `percurso_viagem` text DEFAULT NULL
) ;

--
-- Despejando dados para a tabela `horario`
--

INSERT INTO `horario` (`id_horario`, `horario_time`, `id_bairro`, `id_sentido`, `percurso_viagem`) VALUES
(1, '23:59:00', 1, 1, 'TERMINAL'),
(2, '20:00:00', 1, 1, 'Terminal'),
(3, '20:00:00', 1, 1, 'Terminal');

-- --------------------------------------------------------

--
-- Estrutura para tabela `linha`
--

CREATE TABLE `linha` (
  `id_linha` int(11) NOT NULL,
  `nome_linha` varchar(80) DEFAULT NULL,
  `saida_linha` varchar(80) DEFAULT NULL,
  `chegada_linha` varchar(80) DEFAULT NULL
) ;

--
-- Despejando dados para a tabela `linha`
--

INSERT INTO `linha` (`id_linha`, `nome_linha`, `saida_linha`, `chegada_linha`) VALUES
(1, '1000', '100', '100');

-- --------------------------------------------------------

--
-- Estrutura para tabela `pontos`
--

CREATE TABLE `pontos` (
  `id_ponto` int(11) NOT NULL,
  `lat_ponto` varchar(20) DEFAULT NULL,
  `lng_ponto` varchar(20) DEFAULT NULL,
  `id_bairro` int(11) DEFAULT NULL,
  `id_rua` int(11) DEFAULT NULL
) ;

--
-- Despejando dados para a tabela `pontos`
--

INSERT INTO `pontos` (`id_ponto`, `lat_ponto`, `lng_ponto`, `id_bairro`, `id_rua`) VALUES
(2, '-22.2092203', '-54.7654834', 1, 1),
(3, '-22.2091714', '-54.766934', 1, 1),
(4, '-22.2062383', '-54.7686439', 1, 1),
(5, '-22.205008', '-54.7684913', 1, 1),
(6, '-22.2030696', '-54.769943', 1, 1),
(7, '-22.2042756', '-54.7700789', 1, 1),
(8, '-22.2057878', '-54.7695233', 1, 1),
(9, '-22.2084252', '-54.7685312', 1, 1),
(10, '-22.2117307', '-54.7671676', 1, 1),
(11, '-22.2139268', '-54.7669614', 1, 1),
(12, '-22.2154588', '-54.7667884', 1, 1),
(13, '-22.2159718', '-54.7667114', 1, 1),
(14, '-22.2160867', '-54.76444013', 1, 1),
(15, '-22.21574', '-54.7615976', 1, 1),
(16, '-22.2185779', '-54.7605311', 1, 1),
(17, '-22.213744', '-54.7982499', 1, 1),
(18, '-22.2157061', '-54.7607173', 1, 1),
(19, '-22.2153775', '-54.758387', 1, 1),
(20, '-22.2149304', '-54.7563314', 1, 1),
(21, '-22.2142924', '-54.759076', 1, 1),
(22, '-22.2141306', '-54.7609884', 1, 1),
(23, '-22.2135513', '-54.7613856', 1, 1),
(24, '-22.2196272', '-54.7655645', 1, 1),
(25, '-22.2138342', '-54.7657965', 1, 1),
(26, '-22.216643', '-54.7660055', 1, 1);

-- --------------------------------------------------------

--
-- Estrutura para tabela `reclamacoes`
--

CREATE TABLE `reclamacoes` (
  `id_reclamacao` int(11) NOT NULL,
  `desc_reclamacao` text DEFAULT NULL,
  `tipo_reclamacao` varchar(100) DEFAULT NULL,
  `anexo_arquivo` text DEFAULT NULL,
  `data_de_reclamacao` varchar(80) DEFAULT NULL,
  `STATUS` varchar(80) DEFAULT NULL,
  `id_usuario` int(11) DEFAULT NULL
) ;

--
-- Despejando dados para a tabela `reclamacoes`
--

INSERT INTO `reclamacoes` (`id_reclamacao`, `desc_reclamacao`, `tipo_reclamacao`, `anexo_arquivo`, `data_de_reclamacao`, `STATUS`, `id_usuario`) VALUES
(1, 'card-favoritos', 'card-favoritos', '', '2000-02-10', 'Resolvido', 4),
(2, 'card-favoritos', 'card-favoritos', 'uploads/download.jpeg', '0100-01-02', 'Resolvido', 4),
(3, 'card-favoritos', 'card-favoritos', 'uploads/download.jpeg', '0100-01-02', 'Resolvido', 4);

-- --------------------------------------------------------

--
-- Estrutura para tabela `ruas`
--

CREATE TABLE `ruas` (
  `id_rua` int(11) NOT NULL,
  `nome_rua` varchar(80) DEFAULT NULL
) ;

--
-- Despejando dados para a tabela `ruas`
--

INSERT INTO `ruas` (`id_rua`, `nome_rua`) VALUES
(1, 'Marcelino Pires');

-- --------------------------------------------------------

--
-- Estrutura para tabela `sentidovia`
--

CREATE TABLE `sentidovia` (
  `id_sentidovia` int(11) NOT NULL,
  `nome_sentidovia` varchar(100) DEFAULT NULL
) ;

--
-- Despejando dados para a tabela `sentidovia`
--

INSERT INTO `sentidovia` (`id_sentidovia`, `nome_sentidovia`) VALUES
(1, 'Marcelino Pires');

-- --------------------------------------------------------

--
-- Estrutura para tabela `tipo_de_usuario`
--

CREATE TABLE `tipo_de_usuario` (
  `id_tipo_usuario` int(11) NOT NULL,
  `nome_tipo_usuario` varchar(80) DEFAULT NULL,
  `nivel_de_acesso` int(11) DEFAULT NULL
) ;

--
-- Despejando dados para a tabela `tipo_de_usuario`
--

INSERT INTO `tipo_de_usuario` (`id_tipo_usuario`, `nome_tipo_usuario`, `nivel_de_acesso`) VALUES
(1, 'Clientes', 1),
(2, 'Administrador', 2);

-- --------------------------------------------------------

--
-- Estrutura para tabela `usuarios`
--

CREATE TABLE `usuarios` (
  `id_usuario` int(11) NOT NULL,
  `nome_usuario` varchar(80) DEFAULT NULL,
  `email_usuario` varchar(100) DEFAULT NULL,
  `senha_usuario` varchar(20) DEFAULT NULL,
  `telefone_usuario` char(11) DEFAULT NULL,
  `cpf_usuario` char(11) DEFAULT NULL,
  `perfil_usuario` text DEFAULT NULL,
  `id_tipo_usuario` int(11) DEFAULT NULL
) ;

--
-- Despejando dados para a tabela `usuarios`
--

INSERT INTO `usuarios` (`id_usuario`, `nome_usuario`, `email_usuario`, `senha_usuario`, `telefone_usuario`, `cpf_usuario`, `perfil_usuario`, `id_tipo_usuario`) VALUES
(4, 'Marcos', 'marcoslopes5687@gmail.com', '92317981', '67998343255', '06938907110', 'uploads/download.jpeg', 1);

--
-- Índices de tabelas apagadas
--

--
-- Índices de tabela `bairros`
--
ALTER TABLE `bairros`
  ADD PRIMARY KEY (`id_bairro`),
  ADD KEY `id_linha` (`id_linha`);

--
-- Índices de tabela `classificacao`
--
ALTER TABLE `classificacao`
  ADD PRIMARY KEY (`id_classificacao`);

--
-- Índices de tabela `classificacao_horario`
--
ALTER TABLE `classificacao_horario`
  ADD PRIMARY KEY (`id_classificacao_horario`),
  ADD KEY `id_horario` (`id_horario`),
  ADD KEY `id_classificacao` (`id_classificacao`);

--
-- Índices de tabela `comentario`
--
ALTER TABLE `comentario`
  ADD PRIMARY KEY (`id_comentario`),
  ADD KEY `id_usuario` (`id_usuario`),
  ADD KEY `id_reclamacao` (`id_reclamacao`);

--
-- Índices de tabela `favoritos`
--
ALTER TABLE `favoritos`
  ADD PRIMARY KEY (`id_favorito`),
  ADD KEY `id_usuario` (`id_usuario`),
  ADD KEY `id_bairro` (`id_bairro`);

--
-- Índices de tabela `horario`
--
ALTER TABLE `horario`
  ADD PRIMARY KEY (`id_horario`),
  ADD KEY `id_sentido` (`id_sentido`),
  ADD KEY `id_bairro` (`id_bairro`);

--
-- Índices de tabela `linha`
--
ALTER TABLE `linha`
  ADD PRIMARY KEY (`id_linha`);

--
-- Índices de tabela `pontos`
--
ALTER TABLE `pontos`
  ADD PRIMARY KEY (`id_ponto`),
  ADD KEY `id_rua` (`id_rua`),
  ADD KEY `id_bairro` (`id_bairro`);

--
-- Índices de tabela `reclamacoes`
--
ALTER TABLE `reclamacoes`
  ADD PRIMARY KEY (`id_reclamacao`),
  ADD KEY `id_usuario` (`id_usuario`);

--
-- Índices de tabela `ruas`
--
ALTER TABLE `ruas`
  ADD PRIMARY KEY (`id_rua`);

--
-- Índices de tabela `sentidovia`
--
ALTER TABLE `sentidovia`
  ADD PRIMARY KEY (`id_sentidovia`);

--
-- Índices de tabela `tipo_de_usuario`
--
ALTER TABLE `tipo_de_usuario`
  ADD PRIMARY KEY (`id_tipo_usuario`);

--
-- Índices de tabela `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id_usuario`),
  ADD KEY `id_tipo_usuario` (`id_tipo_usuario`);

--
-- AUTO_INCREMENT de tabelas apagadas
--

--
-- AUTO_INCREMENT de tabela `bairros`
--
ALTER TABLE `bairros`
  MODIFY `id_bairro` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de tabela `classificacao`
--
ALTER TABLE `classificacao`
  MODIFY `id_classificacao` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de tabela `classificacao_horario`
--
ALTER TABLE `classificacao_horario`
  MODIFY `id_classificacao_horario` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de tabela `comentario`
--
ALTER TABLE `comentario`
  MODIFY `id_comentario` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT de tabela `favoritos`
--
ALTER TABLE `favoritos`
  MODIFY `id_favorito` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT de tabela `horario`
--
ALTER TABLE `horario`
  MODIFY `id_horario` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de tabela `linha`
--
ALTER TABLE `linha`
  MODIFY `id_linha` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de tabela `pontos`
--
ALTER TABLE `pontos`
  MODIFY `id_ponto` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;

--
-- AUTO_INCREMENT de tabela `reclamacoes`
--
ALTER TABLE `reclamacoes`
  MODIFY `id_reclamacao` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de tabela `ruas`
--
ALTER TABLE `ruas`
  MODIFY `id_rua` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de tabela `sentidovia`
--
ALTER TABLE `sentidovia`
  MODIFY `id_sentidovia` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de tabela `tipo_de_usuario`
--
ALTER TABLE `tipo_de_usuario`
  MODIFY `id_tipo_usuario` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de tabela `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id_usuario` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- Restrições para dumps de tabelas
--

--
-- Restrições para tabelas `bairros`
--
ALTER TABLE `bairros`
  ADD CONSTRAINT `bairros_ibfk_1` FOREIGN KEY (`id_linha`) REFERENCES `linha` (`id_linha`);

--
-- Restrições para tabelas `classificacao_horario`
--
ALTER TABLE `classificacao_horario`
  ADD CONSTRAINT `classificacao_horario_ibfk_1` FOREIGN KEY (`id_horario`) REFERENCES `horario` (`id_horario`),
  ADD CONSTRAINT `classificacao_horario_ibfk_2` FOREIGN KEY (`id_classificacao`) REFERENCES `classificacao` (`id_classificacao`);

--
-- Restrições para tabelas `comentario`
--
ALTER TABLE `comentario`
  ADD CONSTRAINT `comentario_ibfk_1` FOREIGN KEY (`id_usuario`) REFERENCES `usuarios` (`id_usuario`),
  ADD CONSTRAINT `comentario_ibfk_2` FOREIGN KEY (`id_reclamacao`) REFERENCES `reclamacoes` (`id_reclamacao`);

--
-- Restrições para tabelas `favoritos`
--
ALTER TABLE `favoritos`
  ADD CONSTRAINT `favoritos_ibfk_1` FOREIGN KEY (`id_usuario`) REFERENCES `usuarios` (`id_usuario`),
  ADD CONSTRAINT `favoritos_ibfk_2` FOREIGN KEY (`id_bairro`) REFERENCES `bairros` (`id_bairro`);

--
-- Restrições para tabelas `horario`
--
ALTER TABLE `horario`
  ADD CONSTRAINT `horario_ibfk_1` FOREIGN KEY (`id_sentido`) REFERENCES `sentidovia` (`id_sentidovia`),
  ADD CONSTRAINT `horario_ibfk_2` FOREIGN KEY (`id_bairro`) REFERENCES `bairros` (`id_bairro`);

--
-- Restrições para tabelas `pontos`
--
ALTER TABLE `pontos`
  ADD CONSTRAINT `pontos_ibfk_1` FOREIGN KEY (`id_rua`) REFERENCES `ruas` (`id_rua`),
  ADD CONSTRAINT `pontos_ibfk_2` FOREIGN KEY (`id_bairro`) REFERENCES `bairros` (`id_bairro`);

--
-- Restrições para tabelas `reclamacoes`
--
ALTER TABLE `reclamacoes`
  ADD CONSTRAINT `reclamacoes_ibfk_1` FOREIGN KEY (`id_usuario`) REFERENCES `usuarios` (`id_usuario`);

--
-- Restrições para tabelas `usuarios`
--
ALTER TABLE `usuarios`
  ADD CONSTRAINT `usuarios_ibfk_1` FOREIGN KEY (`id_tipo_usuario`) REFERENCES `tipo_de_usuario` (`id_tipo_usuario`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
