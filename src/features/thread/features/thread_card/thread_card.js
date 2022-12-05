// General React imports
import * as React from 'react';

// Project specific files
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {Card} from "react-bootstrap";

import PO from "./PO.png"


// CSS files


export const ThreadCard = (props) => {

    return (
        <Row>
            <Col sm={"auto"} style={{border: "solid", padding: 0}}>
                <img src={PO} alt={"logo"} style={{height: "100px", maxWidth: "100%"}}/>
            </Col>
            <Col sm={{span: 4}} style={{border: "solid"}}>
                Hello
            </Col>
        </Row>
    );
}

export default ThreadCard;