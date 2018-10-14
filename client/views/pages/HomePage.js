import React from 'react';
import {Jumbotron, Container, Row, Col, Button} from 'reactstrap';
import IconElement from '../elements/IconElement';
import LangController from '../../lang/langController';

const LANG = LangController.getDefaultLang();

const HomePage = () =>
    <Container fluid className='no-padding no-margin' id={LANG.HOME_ROUTE}>
        <Jumbotron fluid className='logo-background-jumbotron no-margin'>
            <Container fluid>
                <Row>
                    <Col>
                        <h2 className='text-center font-italic mt-3'>{LANG.MOTTO}</h2>
                    </Col>
                </Row>
                <Row className='name-secion'>
                    <Col className='text-center'>
                        <h1 className='mb-3'>{LANG.NAME}</h1>
                        <Button color='primary' className='mt-3'>
                            <IconElement icon='location-arrow' />
                            {LANG.TRY_IT}
                        </Button>
                    </Col>
                </Row>
            </Container>
        </Jumbotron>
    </Container>;

export default HomePage;
