import React from 'react'

type Props = { dark: boolean }

export default function Contact({ dark }: Props) {
  return <div className='section'>
    <h3 className='sectionHeading'>Contact</h3>

    <div className='flex flex-col space-y-10'>
      <h4 className={`${dark ? '' : 'light'} h4`}>Feel free to <span>Contact</span> me!</h4>

      <div className=''>

      </div>
    </div>
  </div>
}