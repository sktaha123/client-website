import React from 'react'
import Herosection from '../components/home/herosection.jsx'
import Trust  from '../components/home/trust.jsx'
import { AboutSection } from '../components/home/AboutSection.jsx'
import { ServicesSection } from '../components/home/ServicesSection.jsx'
import { ProcessSection } from '@/components/home/ProcessSection.jsx'


const homepage = () => {
  return (
    <div>
        <Herosection/>
        <Trust/>
        <AboutSection/>
        <ServicesSection/>
        <ProcessSection/>
        
    </div>
  )
}

export default homepage
