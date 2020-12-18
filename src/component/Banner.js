import React from 'react';
import { Row, Col } from 'react-bootstrap';

function Banner(props) {
        return(
            <Row className="py-5 bg-bluesky">
                <Col className="text-center">
                        <p className="h2">{props.title}</p>
                </Col>
            </Row>
        );
}
Banner.defaultProps = {
    title: "No Title"
}
export default Banner;