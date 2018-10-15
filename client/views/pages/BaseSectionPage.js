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
        fetch(this.props.url)
            .then(res => res.json())
            .then(
                result => {
                    this.setState({generatedName: 'Anastazja'});
                },
                error => {
                    console.log('PANIC', error);
                }
            );
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
                            <h3 className='d-inline-block'>{this._prepareHeaderName()}</h3>
                            <Button className='float-right' onClick={() => this._onClick()}>
                                <IconElement icon='location-arrow' className='d-none d-md-inline-block'/>
                                {LANG.GENERATE_ONE}
                            </Button>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className='generated-name'>{this.state.generatedName}</div>
                    </Col>
                </Row>
            </Container>
        </Container>;
    }
}

