import { Link } from 'react-router-dom'

export const Header = () => {
  return (
    <header className="text-white body-font w-full bg-black">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link to="/" className="flex title-font font-medium items-center mb-4 md:mb-0" title='Dog-CEO Challenge'>
          <span className="ml-3 text-xl">Dog-CEO Challenge</span>
          <img width="48" height="48" src="https://img.icons8.com/fluency/48/doge.png" alt="doge"/>
        </Link>
      </div>
    </header>
  )
}