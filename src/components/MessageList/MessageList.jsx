import {Message} from "../Message/Message";
import {AUTHORS} from "../../utils/constants";

export const MessageList = ({messages}) => {
    return <div className="messageArea">
        {messages.map((message)=>(<Message msgText={message.text} author={message.author} robotName={AUTHORS.robotName} />))}
    </div>
}