import Breadcrumb from '../../components/Breadcrumb'
import SearchForm from '../../components/SearchForm'
import TicketTable from '../../components/TicketTable'
import ticketData from '../../assets/data/tickets.json'
import { useState } from 'react'
const TicketList = () => {
  const [filteredTickets, setFilteredTickets] = useState(ticketData)

  const updateFilteredTickets = (searchQuery) => {
    const filtered = ticketData.filter((ticket) => {
      return (
        ticket.id.toString().includes(searchQuery) ||
        ticket.status.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (ticket.scope &&
          ticket.scope.toLowerCase().includes(searchQuery.toLowerCase()))
      )
    })
    setFilteredTickets(filtered)
  }

  return (
    <div className="container ">
      <div>
        <Breadcrumb page={'Ticket List'} />
      </div>
      <div className=" px-2 button-container my-2 flex  sm:px-0 lg:px-3 lg:ml-2 ">
        <div className="new-ticket-btn">
          <button
            type="button"
            className=" min-h-full text-blue-400  hover:text-white border border-blue-400 hover:bg-blue-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800"
          >
            New Ticket
          </button>
        </div>
        <SearchForm onUpdateSearch={updateFilteredTickets} />
      </div>
      <hr className="" />
      <div className="recent-tickets ">
        <TicketTable tickets={filteredTickets} />
      </div>
    </div>
  )
}
export default TicketList
