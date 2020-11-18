import { FC } from 'react'
import cn from 'classnames'
import Link from 'next/link'
import { useRouter } from 'next/router'
import type { Page } from '@bigcommerce/storefront-data-hooks/api/operations/get-all-pages'
import getSlug from '@lib/get-slug'
import { Github } from '@components/icons'
import { Logo, Container } from '@components/ui'
import { I18nWidget } from '@components/common'
import s from './Footer.module.css'

interface Props {
  className?: string
  children?: any
  pages?: Page[]
}

const LEGAL_PAGES = ['terms-of-use', 'shipping-returns', 'privacy-policy']

const Footer: FC<Props> = ({ className, pages }) => {
  const { sitePages, legalPages } = usePages(pages)
  const rootClassName = cn(className)

  return (
    <footer className={rootClassName}>
      <Container>
      <div className="bottom-0 p-20">
            <h1 className="mx-auto text-lg font-bold text-center montserrat pt-10">SIGN UP FOR MORE UPDATES</h1>
            <h1 className="mx-auto text-center text-sm montserrat pt-2">Sign up for exclusive early sale access and tailored new arrivals.</h1>
            <div className="flex pb-3 mb-5 items-end justify-center">
                <form className="flex flex-col border-b">
                    <label htmlFor="email" className="montserrat mb-2 text-white">
                        Sign Up to Receive Product Updates and More
                            </label>
                    <input className="bg-transparent montserrat outline-none focus:outline-none text-black placeholder-gray-600  focus:bg-transparent appearance-none" type="text" name="email" id="email" placeholder="Your email address" />
                </form>
                <div className="cursor-pointer flex">
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chevron-right" width={24} height={24} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#8C8C8C" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" />
                        <polyline points="9 6 15 12 9 18" />
                    </svg>
                </div>
            </div>

            <div className="container mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 pt-12 gap-8 justify-center">

                <div className="rounded">
                    <h1 className="text-lg montserrat font-bold pb-3">CUSTOMER SERVICES</h1>
                    <ul className="montserrat text-gray-700 pt-2 text-sm">
                        <li className="pb-3">CONTACT</li>
                        <li className="pb-3">TRACK ORDER</li>
                        <li className="pb-3">DELIVERY & RETURNS</li>
                        <li className="pb-3">PAYMENT</li>
                        <li className="pb-3">MAKE A RETURN</li>
                        <li className="pb-3">FAQ</li>
                    </ul>
                </div>

                <div className="rounded">
                    <h1 className="text-lg montserrat font-bold pb-3">INFO</h1>
                    <ul className="montserrat text-gray-700 pt-2 text-sm">
                        <li className="pb-3">GIFT VOUCHERS</li>
                        <li className="pb-3">SIZE GUIDE</li>
                        <li className="pb-3">CAREERS AT ALPHASQUAD</li>
                        <li className="pb-3">ABOUT US</li>
                        <li className="pb-3">LEGAL POLICIES</li>
                    </ul>
                </div>

                <div className="rounded">
                    <h1 className="text-lg montserrat font-bold pb-3">FOLLOW US</h1>
                    <ul className="text-gray-700 montserrat pt-2 text-sm">
                        <li className="pb-3">FACEBOOK</li>
                        <li className="pb-3">INSTAGRAM</li>
                    </ul>
                </div>

                <div className="rounded">
                    <h1 className="text-lg montserrat font-bold pb-3">CONTACT US</h1>
                    <ul className="montserrat text-gray-700 pt-2 text-sm">
                        <li className="pb-3">hello@alphasquad.com</li>
                        <li className="pb-3">+92 0900 78601</li>
                        <li className="pb-3">Visit us at Alpha Squad, NSTP, H-12 Islamabad</li>

                    </ul>
                </div>
            </div>
        </div>
        {/* <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 border-b border-accents-2 py-12 text-primary bg-primary transition-colors duration-150">
          <div className="col-span-1 lg:col-span-2">
            <Link href="/">
              <a className="flex flex-initial items-center font-bold md:mr-24">
                <span className="rounded-full border border-gray-700 mr-2">
                  <Logo />
                </span>
                <span>ACME</span>
              </a>
            </Link>
          </div>
          <div className="col-span-1 lg:col-span-2">
            <ul className="flex flex-initial flex-col md:flex-1">
              <li className="py-3 md:py-0 md:pb-4">
                <Link href="/">
                  <a className="text-primary hover:text-accents-6 transition ease-in-out duration-150">
                    Home
                  </a>
                </Link>
              </li>
              <li className="py-3 md:py-0 md:pb-4">
                <Link href="/">
                  <a className="text-primary hover:text-accents-6 transition ease-in-out duration-150">
                    Careers
                  </a>
                </Link>
              </li>
              <li className="py-3 md:py-0 md:pb-4">
                <Link href="/blog">
                  <a className="text-primary hover:text-accents-6 transition ease-in-out duration-150">
                    Blog
                  </a>
                </Link>
              </li>
              {sitePages.map((page) => (
                <li key={page.url} className="py-3 md:py-0 md:pb-4">
                  <Link href={page.url!}>
                    <a className="text-primary hover:text-accents-6 transition ease-in-out duration-150">
                      {page.name}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-span-1 lg:col-span-2">
            <ul className="flex flex-initial flex-col md:flex-1">
              {legalPages.map((page) => (
                <li key={page.url} className="py-3 md:py-0 md:pb-4">
                  <Link href={page.url!}>
                    <a className="text-primary hover:text-accents-6 transition ease-in-out duration-150">
                      {page.name}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-span-1 lg:col-span-6 flex items-start lg:justify-end text-primary">
            <div className="flex space-x-6 items-center h-10">
              <a
                aria-label="Github Repository"
                href="https://github.com/vercel/commerce"
                className={s.link}
              >
                <Github />
              </a>
              <I18nWidget />
            </div>
          </div>
        </div>
        <div className="py-12 flex flex-col md:flex-row justify-between items-center space-y-4">
          <div>
            <span>&copy; 2020 ACME, Inc. All rights reserved.</span>
          </div>
          <div className="flex items-center">
            <span className="text-primary">Crafted by</span>
            <a href="https://vercel.com" aria-label="Vercel.com Link">
              <img
                src="/vercel.svg"
                alt="Vercel.com Logo"
                className="inline-block h-6 ml-4 text-primary"
              />
            </a>
          </div>
        </div> */}
      </Container>
    </footer>
  )
}

function usePages(pages?: Page[]) {
  const { locale } = useRouter()
  const sitePages: Page[] = []
  const legalPages: Page[] = []

  if (pages) {
    pages.forEach((page) => {
      const slug = page.url && getSlug(page.url)

      if (!slug) return
      if (locale && !slug.startsWith(`${locale}/`)) return

      if (isLegalPage(slug, locale)) {
        legalPages.push(page)
      } else {
        sitePages.push(page)
      }
    })
  }

  return {
    sitePages: sitePages.sort(bySortOrder),
    legalPages: legalPages.sort(bySortOrder),
  }
}

const isLegalPage = (slug: string, locale?: string) =>
  locale
    ? LEGAL_PAGES.some((p) => `${locale}/${p}` === slug)
    : LEGAL_PAGES.includes(slug)

// Sort pages by the sort order assigned in the BC dashboard
function bySortOrder(a: Page, b: Page) {
  return (a.sort_order ?? 0) - (b.sort_order ?? 0)
}

export default Footer
