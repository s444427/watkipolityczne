// General React imports
import * as React from 'react';
import PO from "./assets/PO_crop.png";
import {ChatLeft} from "react-bootstrap-icons";

// Project specific files

// CSS files




export const PartyLogo = (props) => {


    return (
        <div style={{ height: "60px", width: "60px", display:"flex", margin: "auto"}}>
            {
                props.party === "PO"?
                    <img src={PO} alt={"logo"}/>:
                props.party === "PIS"?
                    <img src={PO} alt={"logo"}/>:
                    <ChatLeft size={"40"}/>
            }


        </div>
    );
}

export default PartyLogo;