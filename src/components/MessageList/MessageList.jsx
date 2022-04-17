import {Message} from "../Message/Message";
import {AUTHORS} from "../../utils/constants";
import './MessageList.styles.css';
import {Container} from "@mui/material";
import PropTypes from "prop-types";

export const MessageList = ({messages}) => {
    MessageList.prototype = {
        messages: PropTypes.array
    }
    return (
        <Container maxWidth={"sm"}>
            <div className="messageArea">
                {messages.map((message) => (<Message key={message.id} msgText={message.text} author={message.author}
                                                     robotName={AUTHORS.robotName}/>))}
            </div>
        </Container>)
}