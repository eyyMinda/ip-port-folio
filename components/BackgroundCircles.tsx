import { motion } from 'framer-motion';

type Props = {
  dark: boolean,
}

export default function BackgroundCircles({ dark }: Props) {
  return (
    <motion.div initial={{ opacity: 0 }}
      animate={{
        scale: [1, 2, 2, 3, 1],
        opacity: [0.1, 0.2, 0.4, 0.6, 0.1, 0.8],
        borderRadius: ["20%", "20%", "50%", "80%", "20%"]
      }}
      transition={{ duration: 2.5 }}
      className={`relative flex justify-center items-center ${!dark && 'light'}`}>
      <div className='h-[200px] w-[200px] ping' />
      <div className='h-[300px] w-[300px] ping' />
      <div className='h-[500px] w-[500px] ping' />
      <div className='h-[650px] w-[650px] pulse' />
      <div className='h-[800px] w-[800px] ping' />
    </motion.div>
  )
}
