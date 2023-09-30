import { IMessage } from "./models";
import './MessageHistory.css';
import Message from "./Message";
import Response from "./Response";
import Typing from './Typing';

interface IMessageHistoryProps {
    list: IMessage[]
}

function MessageHistory(props: IMessageHistoryProps) {
    const { list } = props;
    if(!list) return;    

    return(
        <div className="clearfix container clearfix">
            <div className="chat">
                <div className="chat-history">
                    <ul className="chatList">
                        { list.map(mes => {
                            let item = null;
                            let itemClass = '';
                            if(mes.type === 'message') item = Message(mes);
                            if(mes.type === 'response') {
                                item = Response(mes);
                                itemClass = 'clearfix';
                            }
                            if(mes.type === 'typing') item = Typing(mes);
                        
                            return <li className={itemClass} key={mes.id}>{item}</li>
                        }) }
                    </ul>
                </div>
            </div>  
        </div>        
    )
}

export default MessageHistory;