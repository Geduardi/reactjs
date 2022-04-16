import {Message} from "../Message/Message";
import {AUTHORS} from "../../utils/constants";
import './MessageList.styles.css';
import {Container} from "@mui/material";

export const MessageList = ({messages}) => {
    return (
        <Container maxWidth={"sm"}>
            <div className="messageArea">
                {messages.map((message)=>(<Message key={message.id} msgText={message.text} author={message.author} robotName={AUTHORS.robotName} />))}
            </div>
        </Container>)
}