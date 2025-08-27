import React from 'react'
import ContactComponent from '@/components/Contact'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function Contact() {
  return (
    <div className="min-h-screen">
      <Navbar/>
    <ContactComponent/>
    <Footer/>
    </div>
  )
}

