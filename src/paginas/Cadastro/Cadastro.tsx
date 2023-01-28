import React from 'react';
import './Cadastro.css';

export const PaginaCadastro = () => {
	return (
		<div className="pagina_cadastro">
			<div className="container_cadastro">
				<div className="imagem_cadastro">
					<img src="/imagens/cadastro.jpg" />
				</div>
				<div className="formulario_cadastro">
					<div className="formulario_topo">
						<h1>Cadastrar-se</h1>
						<img src="/imagens/logo.png" />
					</div>
					<div className="formulario_corpo">
						<input
							type="text"
							placeholder="Digite seu nome"
							className="input"
						/>
						<input
							type="email"
							placeholder="Digite seu melhor email"
							className="input"
						/>
						<input
							type="password"
							placeholder="Crie uma senha"
							className="input"
						/>
						<div className="nascimento">
							<span>Digite sua data de nascimento</span>
							<input type="date" className="input"></input>
						</div>
						<a href="#" className="btn">
							Cadastrar
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};
