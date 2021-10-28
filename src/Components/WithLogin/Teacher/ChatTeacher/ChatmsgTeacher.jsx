import React from 'react'

function ChatmsgTeacher({message}) {
    return (
        // <div className="chatmsg">
            <div className="chat__message__my">
              <h6>{message.data?.name}</h6>
              <div className="chat__message_div">
              <h5>
                 {message.data?.message}
              </h5>
              <p>{message.data?.date}</p>
              </div>
              </div>
        // </div>
    )
}

export default ChatmsgTeacher;
