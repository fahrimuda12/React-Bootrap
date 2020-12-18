import React from 'react';
import {Container, Row, Col, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import LogoFooter from '../assets/images/logo-tp2.png'; 
function LinkDynamic(props) {
    return (
        <>
        {props.posts.map((post) =>
                
                    <li key={post.id} class="mb-3">
                        <Link key={post.id} to={post.link}>{post.title}</Link>
                    </li>
            )}
        </>
    );
}

const posts = [
    {id: 1, link: '/about', title: 'About'},
    {id: 2, link: '/about', title: 'Certification'},
    {id: 3, link: '/about', title: 'Partnership'},
    {id: 4, link: '/about', title: 'Awards'},
    {id: 5, link: '/about', title: 'Management'}
];
const posts2 = [
    {id: 1, link: '/about', title: 'Categories Sells'},
    {id: 2, link: '/about', title: 'Track System'},
    {id: 3, link: '/about', title: 'House Security'},
    {id: 4, link: '/about', title: 'Smart Home'},
    {id: 5, link: '/about', title: 'Online Report'}
];
const posts3 = [
    {id: 1, link: '/about', title: 'Big Project'},
    {id: 2, link: '/about', title: 'Goself'},
    {id: 3, link: '/about', title: 'Hansip Keep'},
    {id: 4, link: '/about', title: 'Detector Maling'},
    {id: 5, link: '/about', title: 'AI Home'}
];

class Footer extends React.Component {
    render() {
        return (
            <Container fluid className="bg-bluetray text-white pt-5">
                <Container>
                    <Row className="my-footer border-bottom">
                        <Col md={3} sm={12}>
                            <h5 class="mb-4">Kontak Kami</h5>
                            <Image src={LogoFooter} alt="LogoFooter" />
                            <p>Alamat :</p>
                            <p>Penerbangan Street No.8 Medan, North Sumatera 20219</p>
                            <p>Call Center :</p>
                            <p>(+62) 821 6578 7290</p>
                        </Col>
                        <Col md={3} sm={12}>
                            <h5>COMPANY</h5>
                            <ul className="flex-column nav">
                                <LinkDynamic posts={posts} />
                            </ul>
                        </Col>
                        <Col md={3} sm={12}>
                            <h5>PRODUCT</h5>
                            <ul className="flex-column nav">
                                <LinkDynamic posts={posts2} />
                            </ul>
                        </Col>
                        <Col md={3} sm={12}>
                            <h5>SPECIAL PRODUCT</h5>
                            <ul className="flex-column nav">
                                <LinkDynamic posts={posts3} />
                            </ul>
                        </Col>
                    </Row>
                    <div class="row mt-4">
                        <div class="col-lg-10 col-sm-6">
                            <p>© 2019 Lindir International GmbH. All rights reserved.</p>
                        </div>
                        <div class="col-lg-10 col-sm-6">

                        </div>
                    </div>
                </Container>
            </Container>
        );
    }
}

export default Footer;