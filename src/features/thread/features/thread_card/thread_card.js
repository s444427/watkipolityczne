// General React imports
import * as React from 'react';

// Project specific files
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import PartyLogo from "./features/party_logo/party_logo";



// CSS files


export const ThreadCard = (props) => {

    return (
        <Row>
            <Col sm={"2"} style={{border: "solid", padding: "10px", paddingLeft: "20px"}}>
                <PartyLogo party={"PO"}/>

            </Col>
            <Col sm={2}>
                12.11.2022
            </Col>
            <Col sm={{span: 8}} >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Semper quis lectus nulla at volutpat. Orci a scelerisque purus semper eget duis at. Imperdiet proin fermentum leo vel orci. Consectetur a erat nam at lectus urna duis convallis. Sit amet venenatis urna cursus eget. Proin nibh nisl condimentum id. Arcu non sodales neque sodales ut etiam sit. Hendrerit gravida rutrum quisque non tellus orci. Ultrices gravida dictum fusce ut. Convallis tellus id interdum velit laoreet id donec ultrices tincidunt. Natoque penatibus et magnis dis parturient montes nascetur.
            </Col>
        </Row>
    );
}

export default ThreadCard;