import React from 'react';

const MessageBubble = ({preset, message, status}) => {

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