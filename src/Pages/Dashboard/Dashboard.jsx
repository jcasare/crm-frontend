import TicketTable from '../../components/TicketTable'
import ticketData from '../../assets/data/tickets.json'
import Breadcrumb from '../../components/Breadcrumb'
const Dashboard = () => {
  return (
    <div className="container mx-auto flex flex-col mb-1">
      <div>
        <Breadcrumb page={'Dashboard'} />
      </div>
      <div className="button-container flex mt-2  mx-auto">
        <button
          type="button "
          className="text-blue-400 hover:text-white border border-blue-400 hover:bg-blue-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800"
        >
          New Ticket
        </button>
      </div>
      <div className="ticket-count mx-auto mb-2">
        <div className="">Total Tickets: 50</div>
        <div className="">Pending Tickets: 100</div>
      </div>
      <div className="mb-4 ml-4">Recently Added Tickets</div>
      <hr className="" />
      <div className="recent-tickets ">
        <TicketTable tickets={ticketData} />
      </div>
    </div>
  )
}
export default Dashboard
