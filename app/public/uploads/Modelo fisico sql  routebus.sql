
CREATE TABLE cidade (
id_cidade integer PRIMARY KEY auto_increment,
nome_cidade varchar(80)
);

CREATE TABLE Ruas (
id_rua integer PRIMARY KEY auto_increment,
nome_rua varchar(80)
);

CREATE TABLE usuarios (
id_usuario integer PRIMARY KEY auto_increment,
nome_usuario varchar(80),
email_usuario varchar(80),
senha_usuario char(8),
telefone_usuario char(11),
cpf_usuario char(11),
id_tipo_usuario integer
);

CREATE TABLE pontos (
id_ponto integer PRIMARY KEY auto_increment,
horario_bairro time,
lat_ponto varchar(15),
lng_ponto varchar(15),
id_bairro integer,
id_rua integer,
FOREIGN KEY(id_rua) REFERENCES Ruas (id_rua)
);

CREATE TABLE reclamações (
id_reclamação integer PRIMARY KEY auto_increment,
data_de_reclamação date,
desc_reclamação text,
tipo_reclamção varchar(100),
anexo_arquivo text,
id_usuario integer,
FOREIGN KEY(id_usuario) REFERENCES usuarios (id_usuario)
);

CREATE TABLE Tipo_de_usuario (
id_tipo_usuario integer PRIMARY KEY auto_increment,
nome_tipo_usuario varchar(80),
nivel_de_acesso integer
);

CREATE TABLE bairros (
id_bairro integer PRIMARY KEY auto_increment,
lat varchar(15),
lng varchar(15),
cep_rua char(8),
numero_linha char(4),
nome_bairro varchar(40),
id_cidade integer,
FOREIGN KEY(id_cidade) REFERENCES cidade (id_cidade)
);

CREATE TABLE favoritos (
id_favorito integer PRIMARY KEY auto_increment,
data_salvo date,
id_usuario integer,
id_bairro integer,
FOREIGN KEY(id_usuario) REFERENCES usuarios (id_usuario),
FOREIGN KEY(id_bairro) REFERENCES bairros (id_bairro)
);

CREATE TABLE comentario (
id_comentario integer PRIMARY KEY auto_increment,
comentario text,
id_reclamação integer,
FOREIGN KEY(id_reclamação) REFERENCES reclamações (id_reclamação)
);

ALTER TABLE usuarios ADD FOREIGN KEY(id_tipo_usuario) REFERENCES Tipo_de_usuario (id_tipo_usuario);
ALTER TABLE pontos ADD FOREIGN KEY(id_bairro) REFERENCES bairros (id_bairro);
