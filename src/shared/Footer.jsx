import { Link } from "react-router-dom";
import { getFullYear } from "../helpers";

export const Footer = () => {

  return (
    <footer className="body-font fixed bottom-0 bg-black w-full text-white">
      <div className="container p-2 mx-auto flex items-center sm:flex-row flex-col">
        <Link to="https://mobdev.cl" target="_blank" className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
          <svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 0 24 24" width="48px" fill="#FFFFFF"><path d="M0 0h24v24H0z" fill="none"/><circle cx="4.5" cy="9.5" r="2.5"/><circle cx="9" cy="5.5" r="2.5"/><circle cx="15" cy="5.5" r="2.5"/><circle cx="19.5" cy="9.5" r="2.5"/><path d="M17.34 14.86c-.87-1.02-1.6-1.89-2.48-2.91-.46-.54-1.05-1.08-1.75-1.32-.11-.04-.22-.07-.33-.09-.25-.04-.52-.04-.78-.04s-.53 0-.79.05c-.11.02-.22.05-.33.09-.7.24-1.28.78-1.75 1.32-.87 1.02-1.6 1.89-2.48 2.91-1.31 1.31-2.92 2.76-2.62 4.79.29 1.02 1.02 2.03 2.33 2.32.73.15 3.06-.44 5.54-.44h.18c2.48 0 4.81.58 5.54.44 1.31-.29 2.04-1.31 2.33-2.32.31-2.04-1.3-3.49-2.61-4.8z"/></svg>
          <span className="ml-3 text-xl text-white">MobDev</span>
        </Link>
        <p className="text-sm sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">© {getFullYear()} Copyright —
          <Link to="https://www.linkedin.com/in/edvalenzuelap/" className="ml-1" rel="noopener noreferrer" target="_blank">by Eduardo Valenzuela</Link>
        </p>
      </div>
    </footer>
  )
}