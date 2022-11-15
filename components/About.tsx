import { motion } from 'framer-motion';
import { urlFor } from '../sanity';
import { PageInfo } from '../typings';

type Props = {
  dark: boolean;
  pageInfo: PageInfo;
}

export default function About({ dark, pageInfo }: Props) {
  return (
    <motion.div initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }} transition={{ duration: 1.5 }}
      className='section justify-center sm:space-y-10 text-center md:text-left max-w-7xl p-2 md:p-10'>

      <h3 className='sectionHeading'>About</h3>

      <motion.img initial={{ x: -200, opacity: 0 }} transition={{ duration: 1.4 }}
        whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
        src={urlFor(pageInfo?.profilePic).url()}
        className='flex-shrink-0 hidden xs:block w-32 h-32 sm:w-52 sm:h-52 rounded-full mt-24 sm:mt-0
        object-cover md:rounded-lg md:w-64 md:h-96 xl:w-[500px] xl:h-[600px]' />

      <div className='space-y-4 sm:space-y-10 px-0 md:px-10 drop-shadow-2xl'>

        <h4 className={`${dark ? '' : 'light'} h4`}>Know <span>Thy</span> Author</h4>

        <p className='text-base tracking-wide'>
          {pageInfo?.bgInformation}
        </p>
      </div>
    </motion.div>)
}