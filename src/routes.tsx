import { createBrowserRouter } from 'react-router-dom';
import { PaginaCadastro } from './paginas/Cadastro/Cadastro';
import { PaginaLogin } from './paginas/Login/Login';

export const routes = createBrowserRouter([
	{ path: '/', element: <PaginaLogin /> },
	{ path: '/cadastro', element: <PaginaCadastro /> },
]);
