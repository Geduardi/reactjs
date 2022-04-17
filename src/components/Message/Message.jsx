import './Message.styles.css';
import {AUTHORS} from "../../utils/constants";
import {useEffect, useRef} from "react";
import PropTypes from 'prop-types';

export const Message = ({msgText, author, robotName}) => {
    const messageRef = useRef();

    Message.prototype = {
        msgText: PropTypes.string,
        author: PropTypes.string,
        robotName: PropTypes.string
    }

    useEffect(() => {
        messageRef.current?.scrollIntoView();
    })

    return (
        <div className={"message" + ((author === AUTHORS.robotName) ? " bot" : "")} ref={messageRef}>
            <span className="message-author">{author}:</span>
            <span>{msgText}</span>
        </div>
    );
};