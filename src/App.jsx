import './App.css'
import PageLayout from './Layout/Layout'
import Dashboard from './Pages/Dashboard/Dashboard'
import Entry from './Pages/Entry/EntryPage'
import CreateTicket from './Pages/New Ticket/CreateTicket'
import Ticket from './Pages/Ticket/Ticket'
import TicketList from './Pages/TicketList/TicketList'

function App() {
  return (
    <div className="app">
      {/* <Entry /> */}
      <PageLayout>
        {/* <Dashboard /> */}
        {/* <CreateTicket /> */}
        {/* <TicketList /> */}
        <Ticket />
      </PageLayout>
    </div>
  )
}

export default App
