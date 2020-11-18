import { FC, useState, useEffect } from 'react'
import Link from 'next/link'
import s from './Navbar.module.css'
import { Logo, Container } from '@components/ui'
import { Searchbar, UserNav } from '@components/common'
import cn from 'classnames'
import throttle from 'lodash.throttle'

const Navbar: FC = () => {
  var whiteHeader: boolean = true

  const [open, setOpen] = useState(false)
  const [hasScrolled, setHasScrolled] = useState(false)
  const [search, setSearch] = useState(false)

  const [drawer, setDrawer] = useState(false)

  const handleScroll = () => {
    const offset = 0
    const { scrollTop } = document.documentElement
    const scrolled = scrollTop > offset
    setHasScrolled(scrolled)
  }

  useEffect(() => {
    document.addEventListener('scroll', throttle(handleScroll, 200))
    return () => {
      document.removeEventListener('scroll', handleScroll)
    }
  }, [handleScroll])

  return (
    <Container>
      <div className={cn(s.root, { 'shadow-magical': hasScrolled })}>
        <nav className="w-full navp">
          <div className="container px-6 h-16 flex justify-between items-center lg:items-stretch mx-auto">
            <div className="flex items-center justify-between w-full">
              <div className="mr-10 flex items-center">
                <Link href="/">
                  <a aria-label="Logo">
                    <Logo whiteHeader />
                  </a>
                </Link>

                {/* <svg aria-label="Home" id="logo" enableBackground="new 0 0 300 300" height={44} viewBox="0 0 300 300" width={43} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                <g>
                    <path
                        fill={whiteHeader ? "#000000" : "#FFFFFF"}
                        d="m234.735 35.532c-8.822 0-16 7.178-16 16s7.178 16 16 16 16-7.178 16-16-7.178-16-16-16zm0 24c-4.412 0-8-3.588-8-8s3.588-8 8-8 8 3.588 8 8-3.588 8-8 8zm-62.529-14c0-2.502 2.028-4.53 4.53-4.53s4.53 2.028 4.53 4.53c0 2.501-2.028 4.529-4.53 4.529s-4.53-2.027-4.53-4.529zm89.059 60c0 2.501-2.028 4.529-4.53 4.529s-4.53-2.028-4.53-4.529c0-2.502 2.028-4.53 4.53-4.53s4.53 2.029 4.53 4.53zm-40.522-5.459-88-51.064c-1.242-.723-2.773-.723-4.016 0l-88 51.064c-1.232.715-1.992 2.033-1.992 3.459v104c0 1.404.736 2.705 1.938 3.428l88 52.936c.635.381 1.35.572 2.062.572s1.428-.191 2.062-.572l88-52.936c1.201-.723 1.938-2.023 1.938-3.428v-104c0-1.426-.76-2.744-1.992-3.459zm-90.008-42.98 80.085 46.47-52.95 31.289-23.135-13.607v-21.713c0-2.209-1.791-4-4-4s-4 1.791-4 4v21.713l-26.027 15.309c-1.223.719-1.973 2.029-1.973 3.447v29.795l-52 30.727v-94.688zm0 198.707-80.189-48.237 51.467-30.412 24.723 14.539v19.842c0 2.209 1.791 4 4 4s4-1.791 4-4v-19.842l26.027-15.307c1.223-.719 1.973-2.029 1.973-3.447v-31.667l52-30.728v94.729z"
                    />
                </g>
            </svg>
            <h3 className={"text-base montserrat font-bold tracking-normal leading-tight ml-3 hidden lg:block" + (whiteHeader ? " text-black" : " text-white")}>
                <Link href="/"><a>
                    NEXTCOM</a></Link></h3> */}
              </div>
              <div className="w-auto flex items-center"></div>
              <ul className="hidden xl:flex items-center h-full">
                <li
                  className={
                    'cursor-pointer montserrat h-full flex items-center text-sm mx-10 tracking-normal' +
                    (whiteHeader ? ' text-black' : ' text-white')
                  }
                >
                  <div className="flex-1 justify-center hidden lg:flex">
                    <Searchbar whiteHeader />
                  </div>
                  {/* <span className="mr-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className={"icon icon-tabler icon-tabler-search" + (whiteHeader ? " text-black" : "text-white")} width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" />
                        <circle cx={10} cy={10} r={7} />
                        <line x1={21} y1={21} x2={15} y2={15} />
                    </svg>
                </span> */}
                </li>
                <li
                  className={
                    'cursor-pointer montserrat h-full flex items-center text-sm tracking-normal' +
                    (whiteHeader ? ' text-black' : ' text-white')
                  }
                >
                  <Link href="/search">
                    <a>NEW ARRIVALS</a>
                  </Link>
                </li>
                <li
                  className={
                    'cursor-pointer montserrat h-full flex items-center text-sm mx-10 tracking-normal' +
                    (whiteHeader ? ' text-black' : ' text-white')
                  }
                >
                  <Link href="/search">
                    <a>SHOP</a>
                  </Link>
                </li>
                <li
                  className={
                    'cursor-pointer montserrat h-full flex items-center text-sm mr-10 tracking-normal' +
                    (whiteHeader ? ' text-black' : ' text-white')
                  }
                >
                  SIGN IN
                </li>
                <li
                  onClick={() => setDrawer(!drawer)}
                  className={
                    'cursor-pointer montserrat h-full flex items-center text-sm tracking-normal' +
                    (whiteHeader ? ' text-black' : ' text-white')
                  }
                >
                  BAG (2)
                </li>
                <li
                  className={
                    'cursor-pointer h-full flex montserrat items-center text-sm mx-10 tracking-normal' +
                    (whiteHeader ? ' text-black' : ' text-white')
                  }
                >
                  <span className="">
                    <svg
                      width="24"
                      height="24"
                      xmlns="http://www.w3.org/2000/svg"
                      fill={whiteHeader ? '#000000' : '#FFFFFF'}
                      fillRule="evenodd"
                      clipRule="evenodd"
                    >
                      <path d="M12 21.593c-5.63-5.539-11-10.297-11-14.402 0-3.791 3.068-5.191 5.281-5.191 1.312 0 4.151.501 5.719 4.457 1.59-3.968 4.464-4.447 5.726-4.447 2.54 0 5.274 1.621 5.274 5.181 0 4.069-5.136 8.625-11 14.402m5.726-20.583c-2.203 0-4.446 1.042-5.726 3.238-1.285-2.206-3.522-3.248-5.719-3.248-3.183 0-6.281 2.187-6.281 6.191 0 4.661 5.571 9.429 12 15.809 6.43-6.38 12-11.148 12-15.809 0-4.011-3.095-6.181-6.274-6.181" />
                    </svg>
                  </span>
                </li>
              </ul>
            </div>

            <div className="visible xl:hidden flex items-center relative">
              {open ? (
                <ul className="p-2 w-64 border-r bg-white absolute top-0 -ml-2 rounded right-0 shadow mt-12 lg:mt-16">
                  <li className="cursor-pointer text-gray-600 montserrat text-sm leading-3 tracking-normal py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none">
                    <div className="flex items-center">
                      <span className="ml-2">
                        <Link href="/collections">
                          <a>NEW ARRIVALS</a>
                        </Link>
                      </span>
                    </div>
                  </li>
                  <li className="flex xl:hidden cursor-pointer text-gray-600 montserrat text-sm leading-3 tracking-normal mt-2 py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none">
                    <div className="flex items-center">
                      <span className="ml-2">
                        <Link href="/products">
                          <a>SHOP</a>
                        </Link>
                      </span>
                    </div>
                  </li>
                  <li className="xl:hidden  cursor-pointer text-gray-600 montserrat text-sm leading-3 tracking-normal mt-2 py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none flex items-center">
                    <span className="ml-2">SIGN IN</span>
                  </li>
                  <li className="xl:hidden cursor-pointer text-gray-600 montserrat text-sm leading-3 tracking-normal mt-2 py-2 hover:text-indigo-700 flex items-center focus:text-indigo-700 focus:outline-none">
                    <span className="ml-2">BAG(3)</span>
                  </li>
                </ul>
              ) : (
                ''
              )}
              <svg
                onClick={() => setOpen(!open)}
                aria-haspopup="true"
                aria-label="Main Menu"
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-menu"
                width={32}
                height={32}
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="#2c3e50"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" />
                <line x1={4} y1={8} x2={20} y2={8} />
                <line x1={4} y1={16} x2={20} y2={16} />
              </svg>
            </div>
          </div>
        </nav>
        {/* <div className="flex justify-between align-center flex-row py-4 md:py-6 relative">
          <div className="flex flex-1 items-center">
            <Link href="/">
              <a className={s.logo} aria-label="Logo">
                <Logo />
              </a>
            </Link>
            <nav className="space-x-4 ml-6 hidden lg:block">
              <Link href="/">
                <a className={s.link}>All</a>
              </Link>
              <Link href="/search?q=clothes">
                <a className={s.link}>Clothes</a>
              </Link>
              <Link href="/search?q=accessories">
                <a className={s.link}>Accessories</a>
              </Link>
            </nav>
          </div>

          <div className="flex-1 justify-center hidden lg:flex">
            <Searchbar />
          </div>

          <div className="flex flex-1 justify-end space-x-8">
            <UserNav />
          </div>
        </div>

        <div className="flex pb-4 lg:px-6 lg:hidden">
          <Searchbar id="mobile-search" />
        </div> */}
      </div>
    </Container>
  )
}

export default Navbar
