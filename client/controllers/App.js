import React from 'react';
import {HashRouter as Router} from 'react-router-dom';
import {Container} from 'reactstrap';
import HomePage from '../views/pages/HomePage';
import Footer from '../views/pages/Footer';
import {GeneratedNamesPage} from '../views/pages/GeneratedNamesPage';
import SECTION_NAMES from '../../sectionNames.json';
import {Lang} from '../lang/langController';

const path = 'https://dev-names-generator.herokuapp.com';
const api = 'get-name';
const defaultName = Lang.DEFAULT_NAME;
const errorName = Lang.ERROR_NAME;

class AppWrapperController extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            generatedNames: {},
            loadingStates: {},
        };
    }

    _setValueForAllSections(valuesHolder, value = defaultName) {
        const sectionNames = Object.keys(SECTION_NAMES);
        sectionNames.forEach(sectionName => valuesHolder[sectionName] = value);
        return valuesHolder;
    }

    _onFetchGeneratedNamesOk(response) {
        this.setState({generatedNames: response.generatedNames});
    }

    _onFetchGeneratedNamesError(error) {
        const generatedNames = this._setValueForAllSections(this.state.generatedNames, errorName);
        this.setState({generatedNames});
    }

    _prepareUrl() {
        return `${path}/${api}`;
    }

    _onClickLoadFullNamesButton() {
        this._turnOnAllLoading();
        fetch(this._prepareUrl())
            .then(res => res.json())
            .then(
                result => this._onFetchGeneratedNamesOk(result),
                error => this._onFetchGeneratedNamesError(error)
            )
            .then(() => this._turnOffAllLoading());
    }

    _onFetchGeneratedNameOk(response, currentName) {
        const newName = response.generatedName;
        const generatedNames = this.state.generatedNames;
        generatedNames[currentName] = newName || defaultName;
        this.setState({generatedNames});
    }

    _onFetchGeneratedNameError(error, currentName) {
        const {generatedNames} = this.state;
        generatedNames[currentName] = errorName;
        this.setState({generatedNames});
    }

    _getCurrentNameUrl(name) {
        return `${this._prepareUrl()}/${name}`;
    }

    _setLoadingByName(name, isLoading) {
        const {loadingStates} = this.state;
        loadingStates[name] = isLoading;
        this.setState({loadingStates});
    }

    _turnOnLoading(name) {
        this._setLoadingByName(name, true);
    }

    _turnOffLoading(name) {
        this._setLoadingByName(name, false);
    }

    _setLoadingForAllElements(value) {
        const loadingStates = this._setValueForAllSections(this.state.loadingStates, value);
        this.setState({loadingStates});
    }

    _turnOffAllLoading() {
        this._setLoadingForAllElements(false);
    }

    _turnOnAllLoading() {
        this._setLoadingForAllElements(true);
    }

    _onClick(name) {
        this._turnOnLoading(name);
        fetch(this._getCurrentNameUrl(name))
            .then(res => res.json())
            .then(
                result => this._onFetchGeneratedNameOk(result, name),
                error => this._onFetchGeneratedNameError(error, name)
            )
            .then(() => this._turnOffLoading(name));
    }

    render() {
        return <React.Fragment>
            <header>
                <HomePage onClickButton={() => this._onClickLoadFullNamesButton()}/>
            </header>
            <main>
                <GeneratedNamesPage
                    path={path}
                    api={api}
                    generatedNames={this.state.generatedNames}
                    onClick={(name) => this._onClick(name)}
                    defaultName={defaultName}
                    loadingStates={this.state.loadingStates}
                />
            </main>
        </React.Fragment>;
    }
}

const App = () =>
    <Router>
        <Container fluid className='no-padding no-margin'>
            <AppWrapperController />
            <footer className='footer'>
                <Footer />
            </footer>
        </Container>
    </Router>;

export default App;
