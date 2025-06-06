import React from 'react'
import Link from 'next/link'

function ContactPage(){
  return(
    <div>
      <div
        className="relative w-full min-h-screen bg-cover bg-center flex flex-col items-center justify-center px-4 py-12"
        style={{ backgroundImage: "url('/home.jpg')" }}
      >
        <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold drop-shadow-lg font-sans text-center text-shadow-[0_1.2px_1.2px_rgba(0.8,0,0,0.8)]">
          Contact Us
        </h1>

        <p className="mt-4 text-white text-base sm:text-lg md:text-xl font-sans text-center max-w-2xl text-shadow-[0_1.2px_1.2px_rgba(0.8,0,0,0.8)]">
          Let us know if you face any problems!
        </p>

        <div className="mt-8">
          <button
            type="button"
            className="py-2.5 px-6 text-sm sm:text-base font-medium text-white bg-gray-800 rounded-full border border-gray-200 hover:bg-gray-700 hover:text-blue-300 focus:outline-none focus:ring-4 focus:ring-gray-100"
          >
            <Link href="/product-listing" className="text-white cursor-pointer">
              Send us an email
            </Link>
          </button>
        </div>
      </div>
      <br/>
      <br/>
      <div className='grid grid-cols-4 gap-4'>
        <div className='justify-center text-center'>
          <h3><strong>CUSTOMER SERVICE TEAM</strong></h3><br/>
          <div>
            <p>General inquiries, product questions, warranties</p>
            <p><strong>Email Customer Service</strong></p>
            <p><strong>Warranty Claim</strong></p>
            <p>Monday - Friday</p>
            <p>7:00AM - 8:00PM</p>
            <p>Saturday and Sunday</p>
            <p>9:00AM - 6:00PM</p>
            <p><strong>0424-9876-543</strong></p>
            <p>Toll Free: <strong>0420-4567-234</strong></p>
          </div>
        </div>
        <div className='justify-center text-center'>
          <h3><strong>CORPORATE OFFICE</strong></h3>
          <br/>
          <div>
            <p>7601 Southwest Parkway,</p>
            <p>Austin, TX 78775</p>
          </div>
        </div>
        <div className='justify-center text-center'>
          <h3><strong>CORPORATE SALES TEAM</strong></h3>
          <br/>
          <div>
            <p>Business to Business</p>
            <p><strong>Request a Quote</strong></p>
            <p>Monday - Friday</p>
            <p>7:00AM - 8:00PM</p>
            <p><strong>0424-9876-543</strong></p>
          </div>
        </div>
        <div className='justify-center text-center'>
          <h3><strong>CONNECT WITH US</strong></h3>
          <br/>
          <div>
            <span className="flex justify-center gap-4 mt-2">
              <Link href="#">
                <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <path fill="currentColor" fillRule="evenodd" d="M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8Zm5-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H8Zm7.597 2.214a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1ZM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z" clipRule="evenodd"/>
                </svg>
              </Link>
              <Link href="#">
                <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M13.135 6H15V3h-1.865a4.147 4.147 0 0 0-4.142 4.142V9H7v3h2v9.938h3V12h2.021l.592-3H12V6.591A.6.6 0 0 1 12.592 6h.543Z" clipRule="evenodd"/>
                </svg>
              </Link>
              <Link href="#">
                <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M22 5.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.343 8.343 0 0 1-2.605.981A4.13 4.13 0 0 0 15.85 4a4.068 4.068 0 0 0-4.1 4.038c0 .31.035.618.105.919A11.705 11.705 0 0 1 3.4 4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 6.1 13.635a4.192 4.192 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 2 18.184 11.732 11.732 0 0 0 8.291 20 11.502 11.502 0 0 0 19.964 8.5c0-.177 0-.349-.012-.523A8.143 8.143 0 0 0 22 5.892Z" clipRule="evenodd"/>
                </svg>
              </Link>
            </span>
          </div>
        </div>
      </div>
      <br/>
      <br/>
    </div>
  )
}

export default ContactPage