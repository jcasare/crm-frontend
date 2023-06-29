const TicketTable = ({ tickets }) => {
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              ID
            </th>
            <th scope="col" className="px-6 py-3">
              NAME
            </th>
            <th scope="col" className="px-6 py-3">
              STATUS
            </th>
            <th scope="col" className="px-6 py-3">
              START DATE
            </th>
          </tr>
        </thead>
        <tbody>
          {tickets.length ? (
            tickets.map((ticket) => {
              return (
                <tr
                  key={ticket.id}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                >
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {ticket.id}
                  </th>
                  <td className="px-6 py-4">{ticket.scope}</td>
                  <td className="px-6 py-4">{ticket.status}</td>
                  <td className="px-6 py-4">{ticket.addedAt}</td>
                </tr>
              )
            })
          ) : (
            <tr className="">
              <td colSpan={4} className="text-center ">
                No tickets available
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}
export default TicketTable
