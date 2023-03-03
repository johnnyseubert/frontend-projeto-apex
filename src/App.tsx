import { PaginaCadastro } from './paginas/Cadastro/Cadastro';
import { PaginaLogin } from './paginas/Login/Login';

export const App = () => {
	return (
		<div>
			<PaginaLogin />
			<PaginaCadastro />
		</div>
	);
};
