/**
Renders a navigation component with a sticky header, containing a logo and a link to take a quiz.
@component
@returns {JSX.Element} The rendered navigation component.
*/

import Link from 'next/link'
import { Container } from '.'
import Image from 'next/image'
import { TbArrowBigRightFilled } from 'react-icons/tb'

export const Navigation = () => {
  return (
    <div className="sticky top-0 backdrop-blur-xl bg-[rgba(0,0,0,0.8)] border-b border-slate-800 z-50">
      <Container className="flex justify-between py-5">
        <Link href="/">
          <Image src="/logo.png" alt="Family Guy" width={70} height={50} />
        </Link>
        <Link
          href="/quiz"
          className="flex items-center justify-center gap-1 px-5 font-semibold text-black bg-blue-400 rounded-md transition-all hover:ease-in-out hover:bg-green-400 hover:duration-500"
        >
          <TbArrowBigRightFilled className="text-lg" />
          Take The Quiz
        </Link>
      </Container>
    </div>
  )
}
