import React from 'react';
import { EnvelopeIcon } from '@heroicons/react/24/solid';
import emailjs from 'emailjs-com';

type Props = { dark: boolean, screenWidth: number }

export default function Contact({ dark, screenWidth }: Props) {
  const sendEmail = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    emailjs.sendForm('service_jshvqpd', 'template_p4hn2il', e.currentTarget, '3oJEuimazmiLWmPDH')
      .then((result) => {
        alert('You have succesfully sent an email');
      }, (error) => {
        console.log(error.text);
      });
    e.currentTarget.reset();
  };

  return <div className='section'>
    <h3 className='sectionHeading'>Contact</h3>

    <div className='flex flex-col space-y-10 text-center mx-auto'>
      <h4 className={`${dark ? '' : 'light'} h4`}>Feel free to <span>Contact</span> me!</h4>

      <div className='contactIconWrap'>
        <EnvelopeIcon className={`${dark ? '' : 'light'} contactIcon`} />
        <p className='text-lg sm:text-2xl'>sublimemindrite@gmail.com</p>
      </div>


      <form onSubmit={sendEmail} className={`${dark ? '' : 'light'}
         flex flex-col space-y-2 w-[85%] sm:w-fit mx-auto`}>

        <div className='flex space-x-2'>
          <input placeholder='Name' className='contactInput' type="text" name="name" />
          {screenWidth >= 640 ? <input placeholder='Email'
            className='contactInput' type="email" name="email" /> : ''}
        </div>
        {screenWidth < 640 ? <input placeholder='Email'
          className='contactInput' type="email" name="email" /> : ''}

        <input placeholder='Subject' className='contactInput' type="text" name="subject" />
        <textarea placeholder='Message' className='contactInput' name="message" />

        <button type='submit' className={`py-5 px-10 rounded-md font-bold
          ${dark ? 'bg-primary-500' : 'bg-secondary-400'}`}>Submit</button>
      </form>
    </div>
  </div >
}