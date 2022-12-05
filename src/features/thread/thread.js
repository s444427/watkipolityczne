// General React imports
import * as React from 'react';

// Project specific files
import  {ThreadCard} from "./features/thread_card/thread_card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


// CSS files


export const Thread = (props) => {

    return (
        <Container style={{minWidth: "100%"}}>
            <Row className="justify-content-md-center">
                <Col sm={8}>
                    <ThreadCard/>
                </Col>
            </Row>
        </Container>
    );
}

export default Thread;