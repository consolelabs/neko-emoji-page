import About from '@components/LandingPage/About'
import Banner from '@components/LandingPage/Banner'
import CTA from '@components/LandingPage/CTA'
import Gallery from '@components/LandingPage/Gallery'

export default function Page() {
  return (
    <div className="">
      <Banner />
      <Gallery />
      <About />
      <CTA />
    </div>
  )
}
