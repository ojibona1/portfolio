import Header from '../component/Header'
import Info from '../component/Info'
import About from '../component/About'
import Projects from '../component/Projects'
import Contact from '../component/Contact'
import Tech from '../component/Tech'
import BackgroundCanvas from '../component/BackgroundCanvas'
import { ScrollProvider } from '../context/ScrollContext'

export default function Layout() {
  return (
    <ScrollProvider>
      <div className='flex flex-col justify-center items-center w-full min-h-screen text-white relative'>
        <BackgroundCanvas />
        <Header />
        <div className='flex flex-col w-full max-w-[1440px] px-4 md:px-10 lg:px-20 pb-20'>
          <Info />
          <About />
          <Tech />
          <Projects />
          <Contact />
        </div>
      </div>
    </ScrollProvider>
  )
}
