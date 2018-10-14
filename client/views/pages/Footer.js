import React from 'react';
import {Container, Col, Row} from 'reactstrap';
import LangController from '../../lang/langController';
import Icon from '../elements/IconElement';

const LANG = LangController.getDefaultLang();

const Footer = () =>
    <Container fluid className='no-margin p-3'>
        <Container>
            <Row>
                <Col>
                    desgned by NdV66, 2018
                </Col>
                <Col>
                    {LANG.EMAIL_ADDRESS}
                </Col>
            </Row>
        </Container>
    </Container>;

export default Footer;
