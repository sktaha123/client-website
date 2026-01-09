import React from 'react'
import Herosection from '../components/home/herosection.jsx'
import Trust  from '../components/home/trust.jsx'
import { AboutSection } from '../components/home/AboutSection.jsx'
import { ServicesSection } from '../components/home/ServicesSection.jsx'
import { ProcessSection } from '@/components/home/ProcessSection.jsx'
import { WhyChooseSection } from '@/components/home/WhyChooseSection.jsx'
import { PhilosophySection } from '@/components/home/PhilosophySection.jsx'
import { IndustriesSection } from '@/components/home/IndustriesSection.jsx'
import { FinalCTA } from '@/components/home/FinalCTA.jsx'


const homepage = () => {
  return (
    <div className='bg-[#ffffff]'>
      
        <Herosection/>
        <Trust/>
        <AboutSection/>
        <ServicesSection/>
        <ProcessSection/>
        <WhyChooseSection/>
        <PhilosophySection/>
        <IndustriesSection/>
        <FinalCTA/>
        
    </div>
  )
}

export default homepage
