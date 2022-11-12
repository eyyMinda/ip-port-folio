import React from 'react';
import { EnvelopeIcon } from '@heroicons/react/24/solid';
import { useForm, SubmitHandler } from 'react-hook-form';

type Inputs = {
  name: string,
  email: string,
  subject: string,
  message: string
}

type Props = { dark: boolean, screenWidth: number }

export default function Contact({ dark, screenWidth }: Props) {

  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (formData) => console.log(formData);

  return <div className='section'>
    <h3 className='sectionHeading'>Contact</h3>

    <div className='flex flex-col space-y-10 text-center mx-auto'>
      <h4 className={`${dark ? '' : 'light'} h4`}>Feel free to <span>Contact</span> me!</h4>

      <div className='contactIconWrap'>
        <EnvelopeIcon className={`${dark ? '' : 'light'} contactIcon`} />
        <p className='text-lg sm:text-2xl'>sublimemindrite@gmail.com</p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className={`${dark ? '' : 'light'}
         flex flex-col space-y-2 w-[85%] sm:w-fit mx-auto`}>

        <div className='flex space-x-2'>
          <input {...register('name')} placeholder='Name' className='contactInput' type="text" />

          {screenWidth >= 640 ? <input {...register('email')} placeholder='Email'
            className='contactInput' type="email" /> : ''}
        </div>
        {screenWidth < 640 ? <input {...register('email')} placeholder='Email'
          className='contactInput' type="email" /> : ''}

        <input {...register('subject')} placeholder='Subject' className='contactInput' type="text" />
        <textarea {...register('message')} placeholder='Message' className='contactInput' />

        <button type='submit' className={`py-5 px-10 rounded-md font-bold
          ${dark ? 'bg-primary-500' : 'bg-secondary-400'}`}>Submit</button>
      </form>
    </div>
  </div >
}