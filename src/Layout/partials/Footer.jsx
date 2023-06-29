const Footer = () => {
  return (
    <div className="w-full max-w-screen-xl mx-auto p-4 md:py-5 bg-slate-50">
      <hr className="my-3 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-4 w-6/12" />
      <span className="block text-sm text-gray-500 text-center  dark:text-gray-400">
        © 2023{' '}
        <a
          href="https://www.linkedin.com/in/jerry-asare-comforter/"
          className="hover:underline"
        >
          Coded By: Jerry Asare
        </a>{' '}
        || All Rights Reserved.
      </span>
    </div>
  )
}
export default Footer
