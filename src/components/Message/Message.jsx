import './Message.styles.css';
import {AUTHORS} from "../../utils/constants";
import {useEffect, useRef} from "react";

export const Message = ({msgText, author, robotName}) => {
    const messageRef = useRef();

    useEffect(()=>{
        messageRef.current?.scrollIntoView();
    })

    return (
        <div className={"message" + ((author === robotName) ? " bot" : "")} ref={messageRef}>
            <span className="message-author">{author}:</span>
            <span>{msgText}</span>
        </div>
    );
};