import { EnvelopeIcon } from '@heroicons/react/24/solid';
import emailjs from 'emailjs-com';
import { PageInfo } from '../typings';

type Props = {
  dark: boolean;
  pageInfo: PageInfo;
}

export default function Contact({ dark, pageInfo }: Props) {
  const sendEmail = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    emailjs.sendForm('service_jshvqpd', 'template_p4hn2il', e.currentTarget, {
        publicKey: process.env.NEXT_PUBLIC_EMAILJS_ID,
      })
      .then((result) => {
        alert('You have succesfully sent an email');
      }, (error) => {
        alert('We have encountered an issue on our website.' +
          'Click on an email link to redirect you to the mailing service.');
        console.log(error.text);
      });
    e.currentTarget.reset();
  };

  return <div className='section'>
    <h3 className='sectionHeading'>Contact</h3>

    <div className='flex flex-col items-center space-y-4 mt-20 sm:mt-0 text-center mx-auto'>
      <h4 className={`${!dark && 'light'} h4
      max-w-[340px] sm:max-w-[100%]`}>Feel free to <span>Contact</span> me!</h4>

      <a className='contactIconWrap text-lg sm:text-2xl'
        href={`mailto:${pageInfo.email}?subject=Message%20from%20a%20visitor` +
          '&body=Hello%20from%20...'}>
        <EnvelopeIcon className={`${!dark && 'light'} contactIcon`} />
        {pageInfo.email}
      </a>

      <form onSubmit={sendEmail} className={`${!dark && 'light'}
         flex flex-col space-y-2 w-[85%] sm:w-fit mx-auto`}>

        <div className='flex flex-wrap space-y-2 md:space-y-0 md:space-x-2 md:flex-nowrap'>
          <input placeholder='Name' className='contactInput' type="text" name="name" required />
          <input placeholder='Email' className='contactInput m-0' type="email" name="email" required />
        </div>

        <input placeholder='Subject' className='contactInput' type="text" name="subject" required/>
        <textarea placeholder='Message' className='contactInput' name="message" required/>

        <button type='submit' className={`py-5 px-10 rounded-md font-bold ${dark ? 'bg-primary-500' : 'bg-secondary-400'}`}>Submit</button>
      </form>
    </div>
  </div >
}
