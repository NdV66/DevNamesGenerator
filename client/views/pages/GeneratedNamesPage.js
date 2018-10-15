import React from 'react';
import {Container, Col, Row, Button} from 'reactstrap';
import LangController from '../../lang/langController';
import {BaseSectionPage} from './BaseSectionPage';
import SECTION_NAMES from '../../../sectionNames.json';

export class GeneratedNamesPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }
    _prepareUrl(name) {
        const path = 'http://localhost:8080';
        const api = 'get-name';
        return `${path}/${api}/${name}`;
    }

    _prepareSectionsData() {
        return (Object.keys(SECTION_NAMES)).map(element => SECTION_NAMES[element]);
    }

    _renderSection(sectionName, index) {
        return <BaseSectionPage
            key={sectionName}
            url={this._prepareUrl(sectionName)}
            name={sectionName}
            generatedName={this.props.generatedNames && this.props.generatedNames[sectionName]}
            className={index % 2 ? 'bg-light' : 'bg-dark'}
        />;
    }

    _renderSections() {
        return this._prepareSectionsData().map((element, index) => this._renderSection(element, index));
    }

    render() {
        return <React.Fragment>
            {this._renderSections()}
        </React.Fragment>;
    }
}

