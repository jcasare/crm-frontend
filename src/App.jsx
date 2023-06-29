import './App.css'
import PageLayout from './Layout/Layout'
import Dashboard from './Pages/Dashboard/Dashboard'
import Entry from './Pages/Entry/EntryPage'

function App() {
  return (
    <div className="app">
      {/* <Entry /> */}
      <PageLayout>
        <Dashboard />
      </PageLayout>
    </div>
  )
}

export default App
