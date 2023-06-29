import Tix from '../../../src/assets/TIX.png'
const Header = () => {
  return (
    <div>
      <nav className=" border-gray-200 dark:bg-gray-900">
        <div className="flex flex-wrap justify-between mx-auto max-w-fit-xl p-3">
          <a href="/dashboard" className="flex items-center">
            <img src={Tix} className="h-8 mr-1" alt="TicketXpress Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              TicketXpress
            </span>
          </a>
          <div className="flex justify-end max-w-fit align-middle gap-1  text-center float-right">
            <a
              href="tel:233546942929"
              className="mr-1 text-sm my-auto text-gray-500 dark:text-white hover:underline"
            >
              (233) 54 694-2929
            </a>
            <a
              href="/logout"
              className="text-sm  text-blue-600 dark:text-blue-500 hover:underline"
            >
              <button
                type="button"
                className="text-red-700 my-auto hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-4 py-2 text-center  dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900"
              >
                Logout
              </button>
            </a>
          </div>
        </div>
      </nav>
      <nav className="bg-gray-50 dark:bg-gray-700 flex">
        <div className="max-w-screen-xl px-4 py-3 mx-auto">
          <div className="flex max-w-fit">
            <ul className="flex flex-row font-medium mt-0 mr-6 space-x-8 text-sm">
              <li>
                <a
                  href="/dashboard"
                  className="text-gray-900 dark:text-white hover:underline"
                  aria-current="page"
                >
                  Dashboard
                </a>
              </li>
              <li>
                <a
                  href="/tickets"
                  className="text-gray-900 dark:text-white hover:underline"
                >
                  Tickets
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Header
