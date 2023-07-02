const ChatBox = ({ chat }) => {
  if (!chat) return null

  return chat.map((msg) => (
    <div
      key={msg.id}
      className={`chat-box mt-2 flex flex-row justify-between ${
        msg.author === 'operator' ? 'flex-row-reverse justify-between' : ''
      }`}
    >
      <div className="send-msg">
        <div className="sender font-medium"> {msg.author}</div>
        <div className="date font-medium"> {msg.date}</div>
      </div>
      <div className="chat p-4 w-4/5 rounded  border border-slate-300  border-solid">
        {chat[0].message}
      </div>
    </div>
  ))
}
export default ChatBox
