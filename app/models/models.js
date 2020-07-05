class Models {
	constructor(connection){
		this.connection = connection;
	}
	bairros(callback){
		this.connection.query('select*from bairros,linha where  bairros.id_linha = linha.id_linha 	',callback);
	}
	horario(callback){
		this.connection.query('select*from horario',callback);
	}
	classificacao_horario(callback){
		this.connection.query('select * from classificacao',callback);
	}
	vias(callback){
		this.connection.query('select*from sentidovia', callback);
	}
	linhas(callback){
		this.connection.query('select*from linha',callback);
	}
	ruas(callback){
		this.connection.query('select*from ruas',callback);
	}
	usuarios(callback){
		this.connection.query('select*from usuarios',callback);
	}
	horarios(id_bairro,filter_time,callback){
		this.connection.query('SELECT * FROM horario,linha,bairros,sentidovia,classificacao,classificacao_horario where horario.id_sentido = sentidovia.id_sentidovia and horario.id_bairro = bairros.id_bairro and bairros.id_linha = linha.id_linha and classificacao_horario.id_horario = horario.id_horario and classificacao_horario.id_classificacao = classificacao.id_classificacao and bairros.id_bairro =?  and  classificacao.nome_classifcacao ="'+filter_time+'" ',id_bairro,callback);
	}
	horarios_bairro(id_bairro,callback){
		this.connection.query('SELECT * FROM horario,linha,bairros,sentidovia,classificacao,classificacao_horario where horario.id_sentido = sentidovia.id_sentidovia and horario.id_bairro = bairros.id_bairro and bairros.id_linha = linha.id_linha and classificacao_horario.id_horario = horario.id_horario and classificacao_horario.id_classificacao = classificacao.id_classificacao and bairros.id_bairro =? ',id_bairro,callback)
	}
	pontos(id_bairro,callback){
		this.connection.query('select*from bairros,linha,pontos,ruas where  bairros.id_linha = linha.id_linha and pontos.id_bairro = bairros.id_bairro and pontos.id_rua = ruas.id_rua and bairros.id_bairro="'+id_bairro+'" ',callback);
	}
	pontos_todos(callback){
		this.connection.query('select*from bairros,linha,pontos,ruas where  bairros.id_linha = linha.id_linha and pontos.id_bairro = bairros.id_bairro and pontos.id_rua = ruas.id_rua',callback);
	}
	salvar_reclamacao(dados,callback){
		this.connection.query('insert into reclamacoes set ?',dados,callback);
	}
	reclamacoes_usuario(id_usuario,busca,callback){
		this.connection.query('select*from reclamacoes,usuarios where reclamacoes.id_usuario = usuarios.id_usuario and usuarios.id_usuario="'+id_usuario+'" and reclamacoes.STATUS = "'+busca+'" order by id_reclamacao desc limit 3',callback);
	}
	reclamacoes_usuario_especifico(id_usuario,callback){
		this.connection.query('select*from reclamacoes,usuarios where reclamacoes.id_usuario = usuarios.id_usuario and usuarios.id_usuario=?',id_usuario,callback);
	}
	reclamacoes_status(busca,callback){
		this.connection.query('select*from reclamacoes,usuarios where reclamacoes.id_usuario = usuarios.id_usuario  and reclamacoes.STATUS = "'+busca+'" order by id_reclamacao desc ',callback);
	}
	reclamacoes(callback){
		this.connection.query('select*from reclamacoes,usuarios where reclamacoes.id_usuario = usuarios.id_usuario  order by id_reclamacao desc ',callback);
	}
	reclamacoes_comentarios(id_reclamacao,callback){
		this.connection.query('select*from reclamacoes,comentario,usuarios where comentario.id_reclamacao = reclamacoes.id_reclamacao and comentario.id_usuario = usuarios.id_usuario and comentario.id_reclamacao = ? order by reclamacoes.id_reclamacao desc ',id_reclamacao,callback);
	}
	new_comentar_reclamacao(comentario,callback){
		this.connection.query('insert into comentario set ?',comentario,callback);
	}
	new_favoritos(favorito,callback){
		this.connection.query('insert into favoritos set ?',favorito,callback);
	}
	favoritos(id_usuario,callback){
		this.connection.query('select*from favoritos,bairros,usuarios where favoritos.id_usuario = usuarios.id_usuario and favoritos.id_bairro = bairros.id_bairro and usuarios.id_usuario  =?',id_usuario,callback);	
	}
	logar(user,password,callback){
		this.connection.query('select*from usuarios,tipo_de_usuario where usuarios.id_tipo_usuario = tipo_de_usuario.id_tipo_usuario and  nome_usuario="'+user+'" and senha_usuario="'+password+'"',callback);
	}
	recuperar_senha(cpf_usuario,callback){
		this.connection.query('select*from usuarios where usuarios.cpf_usuario =?',cpf_usuario,callback);
	}
	update_dados_usuario(usuario,id_usuario,callback){
		this.connection.query('update usuarios set nome_usuario = "'+usuario.nome_usuario+'",email_usuario="'+usuario.email_usuario+'",senha_usuario="'+usuario.senha_usuario+'",telefone_usuario="'+usuario.telefone_usuario+'",cpf_usuario="'+usuario.cpf_usuario+'" where  id_usuario ="'+id_usuario+'"',callback);
	}
	status_update(id_reclamacao,status,callback){
		this.connection.query('update reclamacoes set STATUS ="'+status+'" where id_reclamacao =?',id_reclamacao,callback);
	}
	insert_bairro(bairros,callback){
		this.connection.query('insert into bairros set ?',bairros,callback);
	}
	insert_linha(linha,callback){
		this.connection.query('insert into linha set ?',linha,callback);
	}
	insert_Rua(rua,callback){
		this.connection.query('insert into ruas set ?',rua,callback);
	}
	insert_pontos(pontos,callback){
		this.connection.query('insert into pontos set ?',pontos,callback);
	}
	insert_usuario(usuario,callback){
		this.connection.query('insert into usuarios set ?',usuario,callback);
	}
	insert_via(via,callback){
		this.connection.query('insert into sentidovia set ?',via,callback);
	}
	insert_classificacao(classificacao,callback){
		this.connection.query('insert into classificacao set ?',classificacao,callback);
	}
	insert_horario(horario,callback){
		this.connection.query('insert into horario set ?',horario,callback);
	}
	insert_classificacao_horario(classificacao_horario,callback){
		this.connection.query('insert into classificacao_horario set ?',classificacao_horario,callback);
	}
}

module.exports = function(connection) {
	return new Models(connection);
}