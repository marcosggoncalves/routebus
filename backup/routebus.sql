-- Criação das tabelas

CREATE TABLE tipo_de_usuario (
    id_tipo_usuario INTEGER PRIMARY KEY AUTO_INCREMENT,
    nome_tipo_usuario VARCHAR(80),
    nivel_de_acesso INTEGER
);

CREATE TABLE linhas (
    id_linha INTEGER PRIMARY KEY AUTO_INCREMENT,
    nome_linha VARCHAR(80),
    saida_linha VARCHAR(80),
    chegada_linha VARCHAR(80)
);

CREATE TABLE usuarios (
    id_usuario INTEGER PRIMARY KEY AUTO_INCREMENT,
    nome_usuario VARCHAR(80),
    email_usuario VARCHAR(100),
    senha_usuario VARCHAR(255),
    telefone_usuario CHAR(11),
    cpf_usuario CHAR(11),
    perfil_usuario TEXT,
    id_tipo_usuario INTEGER,
    FOREIGN KEY(id_tipo_usuario) REFERENCES tipo_de_usuario(id_tipo_usuario)
);

CREATE TABLE bairros (
    id_bairro INTEGER PRIMARY KEY AUTO_INCREMENT,
    lat VARCHAR(20),
    lng VARCHAR(20),
    nome_bairro VARCHAR(80),
    id_linha INTEGER,
    FOREIGN KEY(id_linha) REFERENCES linhas(id_linha)
);

CREATE TABLE ruas (
    id_rua INTEGER PRIMARY KEY AUTO_INCREMENT,
    nome_rua VARCHAR(80)
);

CREATE TABLE pontos (
    id_ponto INTEGER PRIMARY KEY AUTO_INCREMENT,
    lat_ponto VARCHAR(20),
    lng_ponto VARCHAR(20),
    id_bairro INTEGER,
    id_rua INTEGER,
    FOREIGN KEY(id_rua) REFERENCES ruas(id_rua),
    FOREIGN KEY(id_bairro) REFERENCES bairros(id_bairro)
);

CREATE TABLE reclamacoes (
    id_reclamacao INTEGER PRIMARY KEY AUTO_INCREMENT,
    desc_reclamacao TEXT,
    tipo_reclamacao VARCHAR(100),
    anexo_arquivo TEXT,
    data_de_reclamacao VARCHAR(80),
    STATUS VARCHAR(80),
    id_usuario INTEGER,
    FOREIGN KEY(id_usuario) REFERENCES usuarios(id_usuario)
);

CREATE TABLE comentario (
    id_comentario INTEGER PRIMARY KEY AUTO_INCREMENT,
    comentario TEXT,
    data_comentario VARCHAR(80),
    id_usuario INTEGER,
    id_reclamacao INTEGER,
    FOREIGN KEY(id_usuario) REFERENCES usuarios(id_usuario),
    FOREIGN KEY(id_reclamacao) REFERENCES reclamacoes(id_reclamacao)
);

CREATE TABLE favoritos (
    id_favorito INTEGER PRIMARY KEY AUTO_INCREMENT,
    data_salvo DATE,
    id_usuario INTEGER,
    id_bairro INTEGER,
    FOREIGN KEY(id_usuario) REFERENCES usuarios(id_usuario),
    FOREIGN KEY(id_bairro) REFERENCES bairros(id_bairro)
);

CREATE TABLE sentidovia (
    id_sentidovia INTEGER PRIMARY KEY AUTO_INCREMENT,
    nome_sentidovia VARCHAR(100)
);

CREATE TABLE classificacao (
    id_classificacao INTEGER PRIMARY KEY AUTO_INCREMENT,
    nome_classificacao VARCHAR(100)
);

CREATE TABLE horarios (
    id_horario INTEGER PRIMARY KEY AUTO_INCREMENT,
    horario_time TIME,
    id_bairro INTEGER,
    percurso_viagem VARCHAR(255),
    id_sentido INTEGER,
    FOREIGN KEY(id_sentido) REFERENCES sentidovia(id_sentidovia),
    FOREIGN KEY(id_bairro) REFERENCES bairros(id_bairro)
);

CREATE TABLE classificacao_horario (
    id_classificacao_horario INTEGER PRIMARY KEY AUTO_INCREMENT,
    id_horario INTEGER,
    id_classificacao INTEGER,
    FOREIGN KEY(id_horario) REFERENCES horarios(id_horario),
    FOREIGN KEY(id_classificacao) REFERENCES classificacao(id_classificacao)
);

-- Inserção de dados nas tabelas

INSERT INTO tipo_de_usuario (nome_tipo_usuario, nivel_de_acesso) VALUES 
('Usuário', 1),
('Administrador', 2);

INSERT INTO linhas (nome_linha) VALUES ('L12');

INSERT INTO usuarios (nome_usuario, email_usuario, senha_usuario, telefone_usuario, cpf_usuario, perfil_usuario, id_tipo_usuario) VALUES 
('Marcos Lopes', 'marcoslopes5687@gmail.com', 'f3670239abb1787232f3ec107ec647f4', '99510796', '06938907110', 'http://s2.glbimg.com/GfTA-EzkZvbms6v0PbsKIf6AiPs=/620x465/s.glbimg.com/jo/g1/f/original/2016/11/10/feira.jpg', 1),
('Viacao Dourados', 'viacaodourados@gmail.com', 'f3670239abb1787232f3ec107ec647f4', '99510796', '3456789', 'https://i2.wp.com/diariodotransporte.com.br/wp-content/uploads/2018/06/DOURADOS_MS.jpg?fit=640%2C360&ssl=1', 2);
