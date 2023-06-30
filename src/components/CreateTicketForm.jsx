import { useFormik } from 'formik'
import { validationSchema } from '../helper/validation'

const CreateTicketForm = () => {
  const currentDate = new Date().toISOString().slice(0, 10) // Get current date in yyyy-mm-dd format

  const formik = useFormik({
    initialValues: {
      subject: '',
      issueDate: currentDate,
      details: '',
    },
    validationSchema,
    onSubmit: (values, { resetForm }) => {
      console.log(values)
      resetForm()
    },
  })
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-10">
        <h1 className="font-medium text-slate-800">Add New Ticket</h1>
        <form className="p-10 max-w-4xl mx-auto" onSubmit={formik.handleSubmit}>
          <div className="mb-6">
            <label
              htmlFor="subject"
              className="block float-left mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Subject
            </label>
            <input
              type="subject"
              id="subject"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              placeholder="Ticket Subject"
              required
              minLength={3}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.subject}
            />
            {formik.touched.subject && formik.errors.subject && (
              <div className="text-red-500">{formik.errors.subject}</div>
            )}
          </div>
          <div className="mb-6">
            <label
              htmlFor="issueDate"
              className="block float-left mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Started At
            </label>
            <input
              type="date"
              id="issueDate"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              required
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.issueDate}
            />
            {formik.touched.issueDate && formik.errors.issueDate && (
              <div className="text-red-500">{formik.errors.issueDate}</div>
            )}
          </div>
          <div className="mb-6">
            <label
              htmlFor="details"
              className="block float-left mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Details
            </label>
            <textarea
              id="details"
              rows="4"
              required
              minLength={3}
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Give a detailed description of the issue....."
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.details}
            ></textarea>
            {formik.touched.details && formik.errors.details && (
              <div className="text-red-500">{formik.errors.details}</div>
            )}
          </div>
          <div className="flex  mb-6"></div>
          <button
            type="submit"
            onClick={formik.handleSubmit}
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 "
          >
            Create Ticket
          </button>
        </form>
      </div>
    </section>
  )
}
export default CreateTicketForm
