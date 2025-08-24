import React from 'react'
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TestingLabsComponent from '@/components/TestingLabs';

export default function TestingLabs() {
  return (
    <div className="min-h-screen">
      <Navbar />

    <TestingLabsComponent />
      <Footer />
    </div>
  )
}
