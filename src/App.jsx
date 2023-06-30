import './App.css'
import PageLayout from './Layout/Layout'
import Dashboard from './Pages/Dashboard/Dashboard'
import Entry from './Pages/Entry/EntryPage'
import CreateTicket from './Pages/New Ticket/CreateTicket'

function App() {
  return (
    <div className="app">
      {/* <Entry /> */}
      <PageLayout>
        {/* <Dashboard /> */}
        <CreateTicket />
      </PageLayout>
    </div>
  )
}

export default App
