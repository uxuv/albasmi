import React from 'react'
import '../../../../src/index.css'
import CountUp from './imports/CountUp'
import { motion } from 'framer-motion'
import img from '../../../assets/images/img.jpg'
import img3 from '../../../assets/images/img22.jpg'
import img2 from '../../../assets/images/img33.jpg'

function HeroSection() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: -20, filter: "blur(10px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.7 }}
        className="relative mt-40 flex flex-row-reverse justify-between max-[700px]:flex-col">

        <div className='relative overflow-hidden'>
          <img src={img3} className='md:size-110 w-full max-[770px]:px-4 rounded-4xl object-cover' alt="" />

          <motion.div
            initial={{ opacity: 0, y: -20, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className='absolute top-2 left-2 z-60 flex-col w-fit h-fit bg-[#D1D1D1]/20 backdrop-blur-xl border border-white/50 rounded-2xl justify-center flex'>
            <div className='flex pr-5 pl-8 py-2.5'>
              <div className='bg-white rounded-xl size-10'></div>
              <div className='flex flex-col pr-4'>
                <p className='font-medium text-[13px]'>عنوان النص</p>
                <p className='text-[13px] leading-4 w-32'>
                  لوريم ايبسوم هو ببساطة نص شكلي
                </p>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -20, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.7 }}
            className='absolute bottom-2 right-2 z-60 flex-col w-fit h-fit bg-[#D1D1D1]/20 backdrop-blur-xl border border-white/50 rounded-2xl justify-center flex'>
            <div className='flex pr-5 pl-8 py-2'>
              <div className='bg-white rounded-xl size-10'></div>
              <div className='flex flex-col pr-4'>
                <p className='font-medium text-[12px]'>عنوان النص</p>
                <p className='text-[12px] leading-4 w-32'>
                  لوريم ايبسوم هو ببساطة نص شكلي
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        <div className='flex flex-col'>
          <div className='mt-7 flex flex-col '>
            <h1 className='text-6xl font-semibold'>الفلوس عليك <br /> والتصميم علينا</h1>
            <p className='mt-6 sm:w-sm text-[#595374]'>في عالم تصميم المواقع والطباعة، دائماً ما نبحث عن وسيلة لملء الفراغات بنصوص جميلة، ولكن تفتقر هذه النصوص إلى المعنى الحقيقي لها. حيث يأتي "مولد النص العربي لوريم إيبسوم" لحل المشكلة بسرعة، </p>
            <div className='mt-8 flex items-center gap-4'>
              <a href=""><button className=' cursor-pointer bg-[#0A1973] text-white px-12 py-4 rounded-full duration-300 hover:px-14 active:scale-[0.97]'>لوريم ايبسوم</button></a>
              <a href=""><button className=' cursor-pointer bg-white text-black border border-gray-300 px-12 py-4 rounded-full duration-300 hover:px-14 active:scale-[0.97]'>لوريم ايبسوم</button></a>
            </div>
          </div>

        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: -20, filter: "blur(10px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.7 }}
        className='flex items-center justify-center gap-30 max-[550px]:gap-15 max-[450px]:flex-col mt-25'>
        <div className=' max-[450px]:flex max-[450px]:items-center max-[450px]:justify-center max-[450px]:flex-col max-[450px]:gap-3 '>
          <h1 className='font-kurd text-3xl'>
            <CountUp
              from={0}
              to={12}
              separator=","
              direction="up"
              duration={5}
              className="count-up-text font-kurd text-3xl"

            />
            +
          </h1>
          <h1 className='font-medium text-2xl -mt-1'>سنوات الخبرة</h1>
        </div>
        <div className='max-[450px]:flex max-[450px]:items-center max-[450px]:justify-center max-[450px]:flex-col max-[450px]:gap-3'>
          <h1 className='font-kurd text-3xl'>
            <CountUp
              from={0}
              to={2500}
              separator=","
              direction="up"
              duration={1}
              className="count-up-text font-kurd text-3xl"
            />
            +
          </h1>
          <h1 className='font-medium text-2xl -mt-1'>تصميم</h1>
        </div>

        <div className='max-[450px]:flex max-[450px]:items-center max-[450px]:justify-center max-[450px]:flex-col max-[450px]:gap-3'>
          <h1 className='font-kurd text-3xl'>
            <CountUp
              from={0}
              to={1300}
              separator=","
              direction="up"
              duration={1}
              className="count-up-text font-kurd text-3xl"
            />
            +
          </h1>
          <h1 className='font-medium text-2xl -mt-1'>عميل</h1>
        </div>
      </motion.div>

      {/* <motion.div
        initial={{ opacity: 0, y: -20, filter: "blur(10px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.7 }}
        className='absolute flex-col top-60 max-w-5xl left-0 right-50 mx-auto w-fit h-fit bg-[#D1D1D1]/20 backdrop-blur-xl border border-white/50 rounded-2xl justify-center flex'>
          <div className='flex pr-5 pl-18 py-4 '>
            <div className='bg-white rounded-xl size-12'></div>
            <div className='flex flex-col pr-4'>
              <p className='font-medium'>عنوان النص</p>
              <p>نص فرعي</p>
            </div>
          </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: -20, filter: "blur(10px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.7 }}
        className='absolute flex-col top-110 max-w-5xl left-0 right-250 mx-auto w-fit h-fit bg-[#D1D1D1]/20 backdrop-blur-xl border border-white/50 rounded-2xl justify-center flex'>
          <div className='flex pr-5 pl-18 py-4 '>
            <div className='bg-white rounded-xl size-12'></div>
            <div className='flex flex-col pr-4'>
              <p className='font-medium'>عنوان النص</p>
              <p>نص فرعي</p>
            </div>
          </div>
      </motion.div> */}

    </>
  )
}

export default HeroSection

