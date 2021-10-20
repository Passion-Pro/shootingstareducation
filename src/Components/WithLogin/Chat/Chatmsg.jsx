import React from 'react'

function Chatmsg({name,msg,date}) {
    return (
        // <div className="chatmsg">
            <div className="chat__message__my">
              <h6>{name?name:"name"}</h6>
              <div className="chat__message_div">
              <h5>
                 {msg?msg:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, sed reiciendis voluptates illo exercitationem officiis voluptatum atque numquam ea porro dolorem non dolore consequuntur neque, modi nam quidem dolor expedita?"}
              </h5>
              <p>{date?date:"test"}</p>
              </div>
              </div>
        // </div>
    )
}

export default Chatmsg;
