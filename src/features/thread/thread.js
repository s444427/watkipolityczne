// General React imports
import * as React from 'react';

// Project specific files
import  {ThreadCard} from "./features/thread_card/thread_card";



// CSS files


export const Thread = (props) => {

    return (
        <div style={{height: "98vh", background: "gray"}}>
            <div style={{background: "white"}}>
                <ThreadCard/>
            </div>
        </div>
    );
}

export default Thread;