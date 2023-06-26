import './entrypage.modules.css'
import Login from '../../components/Login'
import ResetPassword from '../../components/ResetPassword'
import { useState } from 'react'
const Entry = () => {
  const [page, setPage] = useState('login')
  return (
    <div className="entry-page ">
      <div className="w-full  max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
        {page === 'login' && (
          <Login onToggle={() => setPage('resetPassword')} />
        )}
        {page === 'resetPassword' && (
          <ResetPassword onToggle={() => setPage('login')} />
        )}
      </div>
    </div>
  )
}
export default Entry
