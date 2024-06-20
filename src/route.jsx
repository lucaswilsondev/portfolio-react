import { BrowserRouter, Route, Routes } from 'react-router-dom'
import PageBase from './pages/PaginaBase'
import Home from './pages/home'
import Sobre from './pages/sobre'
import Projetos from './pages/projetos'
import Contatos from './pages/contatos'
import Page404 from './pages/Page404'
import Header from './compoents/header'
import Footer from './compoents/Footer'
import Container from './compoents/Container'

function AppRoutes() {
    return (
        <>
            <BrowserRouter>
                <Header />
                <Container>
                    <Routes>
                        <Route path='/' element={<PageBase />}>
                            <Route path="/" element={<Home />}></Route>
                            <Route path="/sobre" element={<Sobre />}></Route>
                            <Route path="/projetos" element={<Projetos />}></Route>
                            <Route path="/contatos" element={<Contatos />}></Route>
                            <Route path="*" element={<Page404 />}></Route>
                        </Route>
                    </Routes>
                </Container>
                <Footer />
            </BrowserRouter>
        </>
    )
}

export default AppRoutes
