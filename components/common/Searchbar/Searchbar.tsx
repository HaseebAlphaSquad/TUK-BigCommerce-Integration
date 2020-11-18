import { FC, useEffect, useMemo } from 'react'
import cn from 'classnames'
import s from './Searchbar.module.css'
import { useRouter } from 'next/router'

interface Props {
  className?: string
  id?: string
}

const Searchbar: FC<Props> = ({ className, id = 'search', ...props }) => {
  let whiteHeader: boolean = props.whiteHeader
  const router = useRouter()

  useEffect(() => {
    router.prefetch('/search')
  }, [])

  return useMemo(
    () => (
      <div
        className={cn(
          'relative text-sm bg-accents-1 text-base w-full transition-colors duration-150',
          className
        )}
      >
        <label className="hidden" htmlFor={id}>
          Search
        </label>
        <input
          id={id}
          className={s.input}
          placeholder="Search for products..."
          defaultValue={router.query.q}
          onKeyUp={(e) => {
            e.preventDefault()

            if (e.key === 'Enter') {
              const q = e.currentTarget.value

              router.push(
                {
                  pathname: `/search`,
                  query: q ? { q } : {},
                },
                undefined,
                { shallow: true }
              )
            }
          }}
        />
        <div className={s.iconContainer}>
              <svg xmlns="http://www.w3.org/2000/svg" className={"icon icon-tabler icon-tabler-search" + (whiteHeader ? " text-black" : "text-white")} width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" />
                        <circle cx={10} cy={10} r={7} />
                        <line x1={21} y1={21} x2={15} y2={15} />
                    </svg>
          {/* <svg className={s.icon} fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
            />
          </svg> */}
        </div>
      </div>
    ),
    []
  )
}

export default Searchbar
