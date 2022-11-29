import React from 'react';
import moment from 'moment';

const MessageBubble = ({preset, message}) => {

  if (!preset) {
    return (
      <div className="chat chat-end">
        <div className="chat-bubble chat-bubble-info break-words">{message}</div>
      </div>
    )
  }

  return (
    <div className="chat chat-start">
      <div className="chat-bubble bg-zinc-800 break-words">{message}</div>
    </div>
  )
}

export default MessageBubble;