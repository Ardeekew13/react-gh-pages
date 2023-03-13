import React from 'react'

function Contact() {
  return (
    <section id="contact" className='lg:pb-80 md:pb-60 sm:pb-50 xs:pb-40'>
    <div className='text-center mt-2 h-screen'>
      <h2 className='text-3xl  sm:text-5xl flex gap-2 pt-14 justify-center font-bold md:flex md:justify-center md:items-center xs:flex xs:justify-center xs:items-center sm:justify-center sm:items-center sm:mx-auto flex-col'>Contact <h2 className='text-[#90CCF3]'> Me</h2></h2>
      <div className='mt-16 flex md:flex-row sm:flex-row flex-col gap-6 max-w-5xl p-6  mx-auto pb-10 w-[600px] xs:w-auto xs:px-4 '>
      <form className='flex flex-col flex-1 gap-5 rounded-lg outline-8 md:w-auto sm:mx-auto md:mx-auto xs:flex xs:flex-col xs:px-4 '>
        <input className=' w-full h-12 rounded-lg border-[2px] pl-2 border-b-white bg-gray-900 hover:border-[#7441b9]' type="text" placeholder="Your Name"/>
        <input className=' w-full h-12 rounded-lg border-[2px] pl-2 border-b-white bg-gray-900 hover:border-[#7441b9]' type="Email" placeholder="Your Email Address"/>
        <textarea className='w-full h-32 rounded-lg border-[2px] pl-2 border-b-white bg-gray-900 hover:border-[#7441b9]' placeholder='Your Message'></textarea>
        <button className='border-white border-2 px-6 py-3 hover:bg-[#7441b9] hover:border-[#7441b9]'>Send Message</button>
      </form>
<div></div>
      </div>
    </div>
    <div></div>
    </section>
  )
}

export default Contact
