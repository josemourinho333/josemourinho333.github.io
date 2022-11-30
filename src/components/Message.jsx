import React, { useState, useEffect } from 'react';
import { IoArrowUpOutline } from 'react-icons/io5';
import MessageBubble from './MessageBubble';
import emailjs from '@emailjs/browser';
import moment from 'moment/moment';

//default msgs
const defaultMsgs = [
  {preset: true, msg: {name: 'phil', notes: "Hey, I'm currently based in the Fraser Valley but open to relocation"}, status: true},
  {preset: true, msg: {name: 'phil', notes: "Are you looking for a developer to add to your team? Or maybe you just need a website?"}, status: true},
  {preset: true, msg: {name: 'phil', notes: "I would love to connect! Send me a message here and I will get back to you ASAP. Don't forget to include your email!!"}, status: true},
];

const Message = () => {
  const [messages, setMessages] = useState(() => {
    return JSON.parse(localStorage.getItem('portfolioMsgs')) || defaultMsgs
  });

  // input state
  const [templateParams, setTemplateParams] = useState({
    preset: false,
    msg: {
      name: 'from portfolio',
      notes: ''
    },
    status: true,
  });

  const [msgStatus, setMsgStatus] = useState(null);

  const handleInputChange = (e) => {
    const notes = e.target.value;
    setTemplateParams(prev => ({
      ...prev,
      msg: {
        ...prev.msg,
        notes,
      },
    }));
  };

  const sendHandler = () => {
    // new logic
    // make a copy of msg thats' being sent 
    const latestMsg = {
      ...templateParams
    };

    // clear the input area before the actual sending logic
    setTemplateParams({
      preset: false,
      msg: {
        name: 'from portfolio',
        notes: '',
      },
      status: true
    });

    // call the email.send function
    emailjs.send(`${process.env.REACT_APP_SERVICE_ID}`, `${process.env.REACT_APP_TEMPLATE_ID}`, templateParams.msg, `${process.env.REACT_APP_PUBLIC_KEY}`)
      .then((result) => {
        // setstate so it shows up in the phone
        setMessages(prev => [...prev, latestMsg]);
        // setMsgStatus state after 1 second for footer
        setTimeout(() => setMsgStatus(true), 1000);
      })
      .catch((err) => {
        // set state so it shows up on phone but with status: false with copy msg
        const updatedMsg = {
          ...latestMsg,
          status: false,
        };

        setMessages(prev => [...prev, updatedMsg]);
        // setMsgStatus state after 1 second for footer
        setTimeout(() => setMsgStatus(false), 1000);
      });
  }; 

  useEffect(() => {
    localStorage.setItem('portfolioMsgs', JSON.stringify(messages));
  }, [messages]);



  const mappedMsgs = messages.map((msg, index) => {
    return (
      <MessageBubble
        key={index+768979463746}
        message={msg.msg.notes}
        preset={msg.preset}
        status={msg.status}
      />
    )
  });

  return (
    <div className="mockup-phone shadow-lg">
      <div className="camera"></div> 
      <div className="display">
        <div className="artboard artboard-demo phone-1 bg-neutral overflow-y-auto justify-start w-full">
          <div className="bg-zinc-700 text-neutral-content w-full sticky top-0 self-center min-h-[15%] flex flex-col items-center justify-end pb-1">
            <div className="avatar placeholder">
              <div className="bg-zinc-600 text-neutral-content rounded-full w-8">
                <span>P</span>
              </div>
            </div> 
            <h2 className="text-xs inline-block">Phil</h2>
          </div>
          <div className="flex-shrink-1 overflow-y-auto bg-neutral w-full h-full flex flex-col justify-end p-2">
            <div className="text-gray-500 text-xs text-center mb-2">Today {moment().format('LT')}</div>
            {mappedMsgs}
            {
              msgStatus === null
                ? <></>
                : msgStatus === false
                ? <div className="text-right pr-3 chat-footer text-red-500 text-sm">Not Delivered</div>
                : msgStatus === true
                ? <div className="text-right pr-3 chat-footer text-gray-500 text-sm">Delivered</div>
                : <></>
            }
          </div>
          <div className="w-full bg-neutral sticky bottom-0 flex justify-center pb-5 pt-1">
            <div className="form-control w-full">
              <div className="input-group items-center relative">
                <input 
                  type="text" 
                  placeholder="Send me a msg and include your email" 
                  className="w-full h-8 !rounded-full px-3 text-neutral-content border border-zinc-600 focus:outline-none bg-inherit" 
                  value={templateParams.msg.notes}
                  onChange={(e) => handleInputChange(e)}
                />
                <button className="" onClick={sendHandler}>
                  <IoArrowUpOutline className="w-6 h-6 bg-inherit text-white rounded-full bg-info absolute z-50 top-1 right-1" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Message;