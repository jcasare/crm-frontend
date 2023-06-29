import Footer from './partials/Footer'
import Header from './partials/Header'
import './partials/pagelayout.modules.css'
const PageLayout = ({ children }) => {
  return (
    <div className="page-layout h-screen flex flex-col">
      <header className="header bg-blue-50 mb-4">
        <Header />
      </header>
      <main className="main-content bg-[url('./assets/dashboard-background.jpg')]  overflow-y-auto flex-1">
        {children}
      </main>
      <footer className=" sticky bg-blue-100 bottom-0">
        <Footer />
      </footer>
    </div>
  )
}
export default PageLayout
