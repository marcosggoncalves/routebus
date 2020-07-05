
CREATE TABLE ruas (
id_rua integer PRIMARY KEY auto_increment,
nome_rua varchar(80)
);

CREATE TABLE linha (
id_linha integer PRIMARY KEY auto_increment,
nome_linha varchar(80),
saida_linha varchar(80),
chegada_linha varchar(80)
);

CREATE TABLE pontos (
id_ponto integer PRIMARY KEY auto_increment,
lat_ponto varchar(20),
lng_ponto varchar(20),
id_bairro integer,
id_rua integer,
FOREIGN KEY(id_rua) REFERENCES ruas (id_rua)
);

CREATE TABLE usuarios (
id_usuario integer PRIMARY KEY auto_increment,
nome_usuario varchar(80),
email_usuario varchar(100),
senha_usuario varchar(255),
telefone_usuario char(11),
cpf_usuario char(11),
perfil_usuario text,
id_tipo_usuario integer
);

CREATE TABLE bairros (
id_bairro integer PRIMARY KEY auto_increment,
lat varchar(20),
lng varchar(20),
nome_bairro varchar(80),
id_linha integer,
FOREIGN KEY(id_linha) REFERENCES linha (id_linha)
);

CREATE TABLE tipo_de_usuario (
id_tipo_usuario integer PRIMARY KEY auto_increment,
nome_tipo_usuario varchar(80),
nivel_de_acesso integer
);

CREATE TABLE reclamacoes (
id_reclamacao integer PRIMARY KEY auto_increment,
desc_reclamacao text,
tipo_reclamacao varchar(100),
anexo_arquivo text,
data_de_reclamacao varchar(80),
STATUS varchar(80),
id_usuario integer,
FOREIGN KEY(id_usuario) REFERENCES usuarios (id_usuario)
);

CREATE TABLE comentario (
id_comentario integer PRIMARY KEY auto_increment,
comentario text,
data_comentario varchar(80),
id_usuario integer,
id_reclamacao integer,
FOREIGN KEY(id_usuario) REFERENCES usuarios (id_usuario),
FOREIGN KEY(id_reclamacao) REFERENCES reclamacoes (id_reclamacao)
);

CREATE TABLE favoritos (
id_favorito integer PRIMARY KEY auto_increment,
data_salvo date,
id_usuario integer,
id_bairro integer,
FOREIGN KEY(id_usuario) REFERENCES usuarios (id_usuario),
FOREIGN KEY(id_bairro) REFERENCES bairros (id_bairro)
);

CREATE TABLE sentidovia (
id_sentidovia integer PRIMARY KEY auto_increment,
nome_sentidovia varchar(100)
);

CREATE TABLE classificacao (
id_classificacao integer PRIMARY KEY auto_increment,
nome_classifcacao varchar(100)
);

CREATE TABLE horario (
id_horario integer PRIMARY KEY auto_increment,
horario_time time,
id_bairro integer,
percurso_viagem varchar(255),
id_sentido integer,
FOREIGN KEY(id_sentido) REFERENCES sentidovia(id_sentidovia),
FOREIGN KEY(id_bairro) REFERENCES bairros (id_bairro)
);

CREATE TABLE classificacao_horario (
id_classificacao_horario integer PRIMARY KEY auto_increment,
id_horario integer,
id_classificacao integer,
FOREIGN KEY(id_horario) REFERENCES horario (id_horario),
FOREIGN KEY(id_classificacao) REFERENCES classificacao (id_classificacao)
);

ALTER TABLE pontos ADD FOREIGN KEY(id_bairro) REFERENCES bairros (id_bairro);
ALTER TABLE usuarios ADD FOREIGN KEY(id_tipo_usuario) REFERENCES tipo_de_usuario (id_tipo_usuario);
