import React from 'react';
import {Container, Col, Row, Button} from 'reactstrap';
import LangController from '../../lang/langController';
import IconElement from '../elements/IconElement';

const LANG = LangController.getDefaultLang();

export const BaseSectionPage = (props) =>  {
    const _prepareHeaderName = () => {
        let name = props.name;
        name = name.charAt(0).toUpperCase() + name.slice(1);
        return name;
    };

    return <Container fluid className={`no-margin p-3 ${props.className || ''}`}>
        <Container>
            <Row>
                <Col className='mb-3 mt-3'>
                    <h1>{LANG.ABOUT_TITLE}</h1>
                </Col>
            </Row>
            <Row>
                <Col>
                    <div className='generatedName-desc'>
                        <h3 className='d-inline-block'>{_prepareHeaderName()}</h3>
                        <Button className='float-right' onClick={() => props.onClick(props.name)}>
                            <IconElement icon='location-arrow' className='d-none d-md-inline-block'/>
                            {LANG.GENERATE_ONE}
                        </Button>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col>
                    <div className='generated-name'>{props.isLoading ? LANG.LOADING_MESSAGE : props.generatedName}</div>
                </Col>
            </Row>
        </Container>
    </Container>;
}

