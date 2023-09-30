import { IMessage } from "./models";

function Typing(props: IMessage) {
    const { from, time } = props;
    return(
        <>
            <>
                <div className="message-data">
                    <span className="message-data-name"><i className="fa fa-circle online"></i> {from.name}</span>
                    <span className="message-data-time">{time}</span>
                </div>
                <div>
                    <span className="dot dot-one"></span>
                    <span className="dot dot-two"></span>
                    <span className="dot dot-three"></span>
                </div>
            </>            
        </>
    )
}

export default Typing;