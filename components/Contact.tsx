import React from 'react';
import { EnvelopeIcon } from '@heroicons/react/24/solid';
type Props = { dark: boolean }

export default function Contact({ dark }: Props) {
  return <div className='section'>
    <h3 className='sectionHeading'>Contact</h3>

    <div className='flex flex-col space-y-10 text-center mx-auto'>
      <h4 className={`${dark ? '' : 'light'} h4`}>Feel free to <span>Contact</span> me!</h4>

      <div className='contactIconWrap'>
        <EnvelopeIcon className={`${dark ? '' : 'light'} contactIcon`} />
        <p className='text-lg sm:text-2xl'>sublimemindrite@gmail.com</p>
      </div>

      <form className={`${dark ? '' : 'light'} flex flex-col space-y-2 w-[85%] sm:w-fit mx-auto`}>
        <div className='flex space-x-2'>
          <input placeholder='Name' className='contactInput' type="text" />
          <input placeholder='Email' className='contactInput hidden sm:block' type="email" />
        </div>
        <input placeholder='Email' className='contactInput sm:hidden' type="email" />

        <input placeholder='Subject' className='contactInput' type="text" />

        <textarea placeholder='Message' className='contactInput' />

        <button type='submit' className={`py-5 px-10 rounded-md font-bold
          ${dark ? 'bg-primary-500' : 'bg-secondary-400'}`}>Submit</button>
      </form>
    </div>
  </div >
}