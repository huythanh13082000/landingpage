import ButtonBlueTooth from './components/ButtonBlueTooth'
import HeroSection from './components/HeroSection'
import Section2 from './components/Section2'
import Section4 from './components/Section4'
import Section5 from './components/Section5'
import Section6 from './components/Section6'
import Section7 from './components/Section7'
import SmoothScroll from './components/SmoothScroll'

export default function Home() {
  return (
    <div className='overflow-x-hidden'>
      <ButtonBlueTooth />
      <SmoothScroll>
        <HeroSection />
        <Section2 />
        <Section7 />
        <Section4 />
        <Section5 />
        <Section6 />
      </SmoothScroll>
    </div>
  )
}
