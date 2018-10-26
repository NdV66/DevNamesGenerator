import React from 'react';
import {BaseSectionPage} from './BaseSectionPage';
import SECTION_NAMES from '../../../sectionNames.json';

export class GeneratedNamesPage extends React.Component {
    constructor(props) {
        super(props);
    }

    _prepareUrl(name) {
        return `${this.props.path}/${this.props.api}/${name}`;
    }

    _prepareSectionsData() {
        return Object.keys(SECTION_NAMES);
    }

    _renderSection(sectionKey, index) {
        const sectionName = SECTION_NAMES[sectionKey];
        return <BaseSectionPage
            key={sectionName}
            sectionKey={sectionKey}
            url={this._prepareUrl(sectionName)}
            name={sectionName}
            generatedName={this.props.generatedNames && this.props.generatedNames[sectionKey] || this.props.defaultName}
            className={index % 2 ? 'bg-light' : 'bg-dark'}
            onClick={this.props.onClick}
            isLoading={this.props.loadingStates && this.props.loadingStates[sectionKey]}
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
