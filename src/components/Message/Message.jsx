import './Message.styles.css';
export const Message = ({msgText, author, robotName}) => {

    return (
        <div className={"message" + ((author === robotName) ? " bot" : "")}>
            <span className="message-author">{author}:</span>
            <span>{msgText}</span>
        </div>
    );
};