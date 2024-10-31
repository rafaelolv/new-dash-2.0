import React from 'react';
import { BrowserRouter,  Route, Routes } from 'react-router-dom';

import './style/Global.module.css';

// import Header from './components/estrutura/Header';
import Main from './pages/Main';
import DashboardVendasReceitas from './pages/DashboardVendasReceitas';




export default props => {
	return (
			<BrowserRouter>
				{/* <Painel /> */}
				{/* <Dashboard />
				<PaginaGeraDadosJSON /> */}
				{/* <Header /> */}
				<Routes>
					<Route exact path='/main' element={<Main />} />
					{/* <Route exact path='/login' element={<Login />} /> */}
					<Route exact path={"/home"} element={<DashboardVendasReceitas />} />
				</Routes>
			</BrowserRouter>
	)
};