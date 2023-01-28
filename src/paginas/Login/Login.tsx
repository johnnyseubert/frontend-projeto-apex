import React from 'react';
import './Login.css';

export const PaginaLogin = () => {
	return (
		<div className="pagina_login">
			<div className="container_login">
				<div className='formulario_login'>
					<div className='formulario_topo'>
						<h1>Entrar</h1>
						<img src="/imagens/logo.png"/>
					</div>
					<div className='formulario_corpo'>
						<input type="text" className='input' placeholder='email'/>
						<input type="text" className='input' placeholder='senha'/>
						<div className='entrar_linha'>
							<button className='btn'>Entrar</button>
							<a className='link' href="/esqueci_senha">Esqueci a senha</a>
						</div>
						<a className='btn' href="/cadastro">Cadastrar-se</a>
					</div>
				</div>
				<div className='imagem_login'>
					<img src="/imagens/login.jpg"/>
				</div>
			</div>
		</div>
	);
};
