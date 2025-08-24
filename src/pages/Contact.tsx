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


// https://claude.ai/chat/34b29cf6-1e4d-49eb-b5ce-8749f009d9d9