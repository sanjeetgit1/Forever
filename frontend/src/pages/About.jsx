import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const About = () => {

  return (
    <div >
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'} />
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, aperiam rerum quibusdam impedit recusandae quidem illum dolorum et veniam atque inventore unde soluta mollitia aut minima dolores cumque voluptatibus eos.</p>
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam voluptatum quis at similique aut soluta amet harum culpa, nulla molestias expedita!
         </p>
         <b className=' text-gray-800'>Our Mission</b>
         <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis illum sit, ab architecto nesciunt atque nostrum minima! Illo, neque delectus rerum magnam enim fugit molestiae tempora eos quo suscipit corporis laborum harum nobis, dignissimos adipisci fugiat repellendus praesentium ipsa beatae.</p>

        </div>
      </div>
      <div className=' text-4xl py-4'>
        <Title  text1={'WHY'} text2={'CHOOSE US'} />
      </div>

      <div className='flex flex-col md:flex-row text-sm gap-2 mb-20'>
        <div className=' border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>

        
        <b className='text-2xl'>Quality Assurance:</b>
        <p  className=' text-gray-600'  >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus impedit quod ipsa praesentium quaerat at quo harum. Officiis, ut et.</p>
</div>
      
<div className=' border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
        <b className='text-2xl'>Convenience:</b>
        <p className=' text-gray-600'  >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus impedit quod ipsa praesentium quaerat at quo harum. Officiis, ut et.</p>

      </div>
      <div className=' border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
        <b className='text-2xl'>Exceptional Customer Service:</b>
        <p  className=' text-gray-600' >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus impedit quod ipsa praesentium quaerat at quo harum. Officiis, ut et.</p>

      </div>
      </div>
      <NewsletterBox/>
      
      
    </div>
  )
}

export default About
