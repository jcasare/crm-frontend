import Breadcrumb from '../../components/Breadcrumb'
import ticketData from '../../assets/data/tickets.json'
import ChatBox from '../../components/ChatBox'
import TicketReply from '../../components/TicketReply'
import { useState } from 'react'
const ticket = ticketData[0]
const Ticket = () => {
  const [reply, setReply] = useState('')
  const handleReply = (newReply) => {
    setReply(newReply)
  }
  const handleReplySubmit = () => {}
  return (
    <div className="container ">
      <div className="">
        <Breadcrumb page={'Ticket'} />
      </div>
      <div className="grid grid-cols-5 grid-rows-1 gap-5 my-2 px-5">
        <div className=" col-span-3 font-medium  text-slate-600 chat-header ">
          <div className="scope">Scope: {ticket.scope}</div>
          <div className="date">Start Date: {ticket.addedAt}</div>
          <div className="status">Status: {ticket.status}</div>
        </div>
        <div className="col-start-4 col-span-2  chat-close">
          <button
            type="button"
            className="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800 float-right"
          >
            Close Ticket
          </button>
        </div>
        <div className="row-start-2 col-span-5">
          <ChatBox chat={ticket.chatBox} />
        </div>
        <hr />
        <div className="mt-3 col-span-5">
          <TicketReply
            reply={reply}
            onReply={handleReply}
            onReplySubmit={handleReplySubmit}
          />
        </div>
      </div>
    </div>
  )
}
export default Ticket
