import React from 'react';
import {HashRouter as Router} from 'react-router-dom';
import {Container} from 'reactstrap';
import HomePage from '../views/pages/HomePage';
import LangController from '../lang/langController';
import Footer from '../views/pages/Footer';
import {GeneratedNamesPage} from '../views/pages/GeneratedNamesPage';

const LANG = LangController.getDefaultLang();

const App = () =>
    <Router>
        <Container fluid className='no-padding no-margin'>
            <header>
                <HomePage />
            </header>
            <main>
                <GeneratedNamesPage />
            </main>
            <footer className='footer'>
                <Footer />
            </footer>
        </Container>
    </Router>;

export default App;
