import React from 'react';
import './About.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faSearch,faExclamation,faDesktop,faCloud,faUserShield } from '@fortawesome/free-solid-svg-icons'
import { Col, Container, Jumbotron, Row } from 'react-bootstrap';
import Happy from '../assets/images/Happy.jpg';
library.add(faSearch,faExclamation,faDesktop,faCloud,faUserShield)

function About() {
  function orangeContainer (e) {
    e.preventDefault();
    console.log('The link was clicked.');
  }
  return (
    <>
      <Jumbotron className="text-center my-jumbotron">
        <Container>
          <Row>
            <Col>
              <button onClick={orangeContainer} className=" btn orange-link" type="button" data-target="#orange"  data-toggle="collapse" aria-label="Toggle navigation"></button>
              <button onClick={orangeContainer} className=" btn yellow-link" type="button" data-target="#yellow"  data-toggle="collapse" aria-label="Toggle navigation"></button>
              <button onClick={orangeContainer} className=" btn blue-link" type="button" data-target="#blue"  data-toggle="collapse" aria-label="Toggle navigation"></button>
            </Col>
          </Row>
          <Row>
            <Col>
              <h1 className="text-lindir">LinDir</h1>
              <p className=" text-uppercase">protection</p>
            </Col>
          </Row>
        </Container>
      </Jumbotron>
      <div className="container-fluid mt-n4 mb-5 bg-color-mean" id="containerColor">
            <div className="container accordion" id="accordionParent">
                <div className="collapse" id="orange" aria-labelledby="title-one" data-parent="#accordionParent">
                    <blockquote className="blockquote text-center py-4">
                        <h1>"Kami mengutamakann kebahagiaan pengguna dalam semua pemakaian produk kami"</h1>
                        <footer className="blockquote-footer"><cite title="Source Title">Orange</cite></footer>
                    </blockquote>
                </div>
                <div className="collapse" id="yellow"  aria-labelledby="title-two" data-parent="#accordionParent">
                    <blockquote className="blockquote text-center py-4">
                        <h1>"Kami mengutamakann kebahagiaan pengguna dalam semua pemakaian produk kami"</h1>
                        <footer className="blockquote-footer"><cite title="Source Title">Orange</cite></footer>
                    </blockquote>
                </div>
                <div className="collapse" id="blue" aria-labelledby="title-three" data-parent="#accordionParent">
                    <blockquote className="blockquote text-center py-4">
                        <h1>"Kami mengutamakann kebahagiaan pengguna dalam semua pemakaian produk kami"</h1>
                        <footer className="blockquote-footer"><cite title="Source Title">Orange</cite></footer>
                    </blockquote>
                </div>
            </div>
        </div>
      <section className="introduce-contain">
            <div className="container">
                <div className="row">
                    <div className="col-lg-5 col-sm-12 text-center">
                        <p className="title-me">Make Your Family, Happines Everyday</p>
                        <p className="lead text-center text-capitalize">Lindir Always Beside You, Always Protect you, Make You and Your Family Happy Everyday</p>
                    </div>
                    <div className="col-lg-7 col-sm-12">
                        <img src={Happy} className="img-fluid" alt="Responsive" />
                    </div>
                </div>
            </div>
      </section>
    </>
    );
}

export default About;
