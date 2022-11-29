import React, { useState } from 'react';
import { IoArrowUpOutline } from 'react-icons/io5';
import MessageBubble from './MessageBubble';
import emailjs from '@emailjs/browser';
import moment from 'moment/moment';

const Message = () => {
  const [messages, setMessages] = useState([
    {preset: true, msg: {name: 'phil', notes: "Hey, I'm currently based in the Fraser Valley but open to relocation"}},
    {preset: true, msg: {name: 'phil', notes: "Do you need a website? or maybe you're looking for a developer to add to your team?"}},
    {preset: true, msg: {name: 'phil', notes: "If so, I would love to hear from you! Send me a message here and I will get back to you ASAP. Don't forget to include your email!!"}},
  ]);

  const [templateParams, setTemplateParams] = useState({
    preset: false,
    msg: {
      name: 'from portfolio',
      notes: ''
    },
  });

  const handleInputChange = (e) => {
    const notes = e.target.value;
    setTemplateParams(prev => ({
      prev,
      msg: {
        ...prev.msg,
        notes,
      },
    }));
  };

  const sendHandler = () => {
    emailjs.send(`${process.env.REACT_APP_SERVICE_ID}`, `${process.env.REACT_APP_TEMPLATE_ID}`, templateParams.msg, `${process.env.REACT_APP_PUBLIC_KEY}`)
      .then((result) => {
        console.log('success', result.status, result.text);
        setMessages(prev => [...prev, templateParams]);
        setTemplateParams({
          preset: false,
          msg: {
            name: 'from portfolio',
            notes: '',
          }
        });
      })
      .catch((err) => console.log('err', err));
  }; 

  const mappedMsgs = messages.map((msg, index) => {
    return (
      <MessageBubble
        key={index+768979463746}
        message={msg.msg.notes}
        preset={msg.preset}
      />
    )
  });

  return (
    <div className="mockup-phone shadow-lg">
      <div className="camera"></div> 
      <div className="display">
        <div className="artboard artboard-demo phone-1 bg-neutral overflow-y-auto justify-start w-full">
          <div className="bg-zinc-700/80 backdrop-blur-sm text-neutral-content w-full sticky top-0 self-center min-h-[15%] flex flex-col items-center justify-end pb-1">
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
          </div>
          <div className="w-full bg-neutral/70 backdrop-blur-sm sticky bottom-0 flex justify-center pb-5 pt-1">
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