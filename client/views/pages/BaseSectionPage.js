import React from 'react';
import {Container, Col, Row, Button} from 'reactstrap';
import LangController from '../../lang/langController';
import IconElement from '../elements/IconElement';

const LANG = LangController.getDefaultLang();
const defaultName = 'Click button to generate this name';

export class BaseSectionPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            generatedName: props.generatedName || defaultName,
        };
    }

    _onClick() {

    }

    _prepareHeaderName() {
        let name = this.props.name;
        name = name.charAt(0).toUpperCase() + name.slice(1);
        return name;
    }

    render() {
        return <Container fluid className={`no-margin p-3 ${this.props.className || ''}`}>
            <Container>
                <Row>
                    <Col className='mb-3 mt-3'>
                        <h1>{LANG.ABOUT_TITLE}</h1>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className='generatedName-desc'>
                            <h3 className='d-inl0ine-block'>{this._prepareHeaderName()}</h3>
                            <Button className='float-right' onClick={() => this._onClick()}>
                                <IconElement icon='location-arrow' />
                                {LANG.GENERATE_ONE}
                            </Button>
                        </div>
                        <div className='generated-name'>{this.state.generatedName}</div>
                    </Col>
                </Row>
            </Container>
        </Container>;
    }
}

