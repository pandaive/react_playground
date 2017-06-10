import React, {Component} from 'react';
import MessageList from './MessageList.jsx';
import MessageForm from './MessageForm.jsx';

class MessageSection extends Component {
    render() {
        return (
            <div className='my slack panel-primary'>
                <div className='panel-heading'>
                    <strong>Messages</strong>
                </div>
                <div className='panel-body messages'>
                    <MessageList {...this.props}/>
                    <MessageForm {...this.props}/>
                </div>
            </div>
        )
    }
}

MessageSection.propTypes = {
    messages: React.PropTypes.array.isRequired,
    addMessage: React.PropTypes.func.isRequired,
    activeChannel: React.PropTypes.object.isRequired
}

export default MessageSection