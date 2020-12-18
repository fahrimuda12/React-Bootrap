import React from 'react';
import CardMe from '../component/CardMe';
import CollapseForm from '../component/CollapseForm';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.scss';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faSearch,faExclamation,faDesktop,faCloud,faUserShield } from '@fortawesome/free-solid-svg-icons'
import { Button, Col, Container, Jumbotron, Row, Carousel, ResponsiveEmbed, CardDeck } from 'react-bootstrap';
import Banner from '../component/Banner';
import Produk2 from '../assets/images/produk2.jpg'; 
library.add(faSearch,faExclamation,faDesktop,faCloud,faUserShield)

function Text(props){
    return <h1>{props.pesan}</h1>;
}
function Home() {
  return (
    <>
    <Jumbotron className="text-center">
            <Container>
                <Text pesan="Lets Join Us" />
                <p>
                    <Button variant="primary">Join Us</Button>
                </p>
            </Container>
    </Jumbotron>
    <Container className="my-5 shadow-lg">
        <Banner title="feature"/>
            <Carousel className="row py-5 bg-whiteman text-dark">
                <Carousel.Item>
                    <Row>
                        <Col md={4} sm={6} className="shadow-sm text-center">
                            <h1 className="text-capitalize" variant="primary">Home Smart</h1>
                        </Col>
                        <Col md={8} sm={6} className="px-2">
                            <ResponsiveEmbed aspectRatio="16by9">
                                <iframe src="https://www.youtube.com/embed/i2jFN_QEcS4" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            </ResponsiveEmbed>
                        </Col>
                    </Row>
                </Carousel.Item>
                <Carousel.Item>
                    <Row>
                        <Col md={4} sm={6} className="shadow-sm text-center">
                            <h1 className="text-capitalize" variant="primary">Home Smart</h1>
                        </Col>
                        <Col md={8} sm={6} className="px-2">
                            <ResponsiveEmbed aspectRatio="16by9">
                                <iframe src="https://www.youtube.com/embed/i2jFN_QEcS4" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            </ResponsiveEmbed>
                        </Col>
                    </Row>
                </Carousel.Item>
            </Carousel>
    </Container>
    <Container className="my-5 shadow text-dark text-center">
        <Banner title="Categories Sell" />
        <CardDeck ClassName="row row-cols-1 row-cols-md-3 row-cols-sm-1 bg-whiteman pb-5">
                <Col className="pt-5">
                    <CardMe src={Produk2} title="Protect Yourself" alt="Produk2" name="You don't worry if you go alone because Lindir can protect yourself from criminal, One time police help you from danger situation" desc="Lindir always protect you and always beside you. You just push one button and we will protect you."/>
                </Col>
                <Col className="pt-5">
                    <CardMe src={Produk2} title="Protect Yourhome" alt="Produk2" name="You don't worry if you leave home because Lindir can protect yourhome from criminal and send ther report for your device, One time police go to your home and caught the thief. So your home clear from steal" desc="You don't worry if you go alone because Lindir can protect yourself from criminal, One time police help you from danger situation"/>
                </Col>
                <Col className="pt-5">
                    <CardMe src={Produk2} title="Smart Home" alt="Produk2" name="Lindir can make your family everyday feel happy. Lindir make you home be smarthome. AI support to be autonomus home. Make the happy stories" desc="We have more device support by google and amazon. All device from your home can your configure from your smarthpone. Always easy to configure"/>
                </Col>
        </CardDeck>
    </Container>
    <Container className="my-5 shadow text-dark text-center">
        <Banner title="Price List" />
        <CardDeck className="mt-5">
            <CardMe title="Standard Protection" name="You don't worry if you go alone because Lindir can protect yourself from criminal, One time police help you from danger situation"
            dbutton="bottom" dtitle="top text-center"/>
            <CardMe title="Standard Protection" name="You don't worry if you go alone because Lindir can protect yourself from criminal, One time police help you from danger situation"
            dbutton="bottom" dtitle="top text-center"/>
            <CardMe title="Standard Protection" name="You don't worry if you go alone because Lindir can protect yourself from criminal, One time police help you from danger situation"
            dbutton="bottom" dtitle="top text-center"/>
            <CardMe title="Standard" name="You don't worry if you go alone because Lindir can protect yourself from criminal, One time police help you from danger situation"
            dbutton="bottom" dtitle="top py-4 text-center"/>
        </CardDeck>
    </Container>
    <Container className="my-5 shadow text-dark text-center">
        <Banner title="Step By Step" />
        <Row className="py-5 bg-whiteman text-black-50">
            <Col className="shadow-sm text-center border">
                <div>
                    <CollapseForm  icon="desktop" contain="Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident."/>
                    <CollapseForm  icon="exclamation" contain="Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident."/>
                    <CollapseForm  icon="cloud" contain="Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident."/>
                    <CollapseForm  icon="user-shield" contain="Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident."/>
                </div>
            </Col>
        </Row>
    </Container>
    </>
    );
}

export default Home;
