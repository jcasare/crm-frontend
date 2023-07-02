import { useFormik } from 'formik'

const TicketReply = ({ onReply, handleReplySubmit }) => {
  const formik = useFormik({
    initialValues: {
      reply: '',
    },
    onSubmit: (values, { resetForm }) => {
      console.log(values)
      resetForm()
    },
  })
  const handleReplyChange = (e) => {
    formik.handleChange(e)
    const newReply = e.target.value
    console.log(newReply)
    onReply(newReply)
  }
  return (
    <form
      className="space-y-8 w-full mx-auto float-left"
      onSubmit={handleReplySubmit}
    >
      <div className="sm:col-span-2">
        <label
          htmlFor="reply"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
        >
          Reply
        </label>
        <textarea
          id="reply"
          rows="6"
          className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
          placeholder="Reply to the ticket..."
          onChange={handleReplyChange}
          value={formik.values.reply}
        ></textarea>
      </div>
      <button
        type="submit"
        className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-blue-700 sm:w-fit hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
        onClick={formik.handleSubmit}
      >
        Reply
      </button>
    </form>
  )
}
export default TicketReply
