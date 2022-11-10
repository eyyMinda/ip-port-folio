import React from 'react'
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from '@heroicons/react/24/solid';
type Props = { dark: boolean }

export default function Contact({ dark }: Props) {
  return <div className='section'>
    <h3 className='sectionHeading'>Contact</h3>

    <div className='flex flex-col space-y-10'>
      <h4 className={`${dark ? '' : 'light'} h4`}>Feel free to <span>Contact</span> me!</h4>

      <div className='space-y-2'>
        <div className='contactIconWrap'>
          <PhoneIcon className={`${dark ? '' : 'light'} contactIcon`} />
          <p className='text-2xl'>+123456789</p>
        </div>

        <div className='contactIconWrap'>
          <EnvelopeIcon className={`${dark ? '' : 'light'} contactIcon`} />
          <p className='text-2xl'>sublimemindrite@gmail.com</p>
        </div>
      </div>

      <form className={`${dark ? '' : 'light'} flex flex-col space-y-2 w-fit mx-auto`}>
        <div className='flex space-x-2'>
          <input className='contactInput' type="text" />
          <input className='contactInput' type="text" />
        </div>

        <input className='contactInput' type="text" />

        <textarea className='contactInput' />

        <button>Submit</button>
      </form>
    </div>
  </div >
}