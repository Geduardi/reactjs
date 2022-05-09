import {Message} from "../Message/Message";
import './MessageList.styles.css';
import {Container} from "@mui/material";
import PropTypes from "prop-types";

export const MessageList = ({messages}) => {
    MessageList.prototype = {
        messages: PropTypes.array
    }

    return (
        <Container maxWidth={"sm"}>
            <div className={"messageArea " + (messages.length ? "messageArea-bordered" : "")}>
                {messages.map((message) => (<Message key={message.id} msgText={message.text} author={message.author}/>))}
            </div>
        </Container>)
}