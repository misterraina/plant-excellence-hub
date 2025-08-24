import Navbar from '@/components/Navbar'
import React from 'react'
import Footer from '@/components/Footer'
import AboutSection from '@/components/About'

export default function About() {
  return (
    <div className='min-h-screen'>
    <Navbar/>
    <AboutSection/>
    <Footer/>
    </div>
  )
}
