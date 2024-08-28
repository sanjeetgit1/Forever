import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const Contact = () => {
  return (
    <div>
      <div className='text-center text-2xl pt-10 border-t'>
        <Title text1={'CONTACT'} text2={'US'} />
      </div>
      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28'>
        <img  className='w-full md:max-w-[480px]' src={assets.contact_img} alt="" />
        <div className=' flex flex-col justify-self-center items-start gap-6'>
          <p className='font-semibold text-xl text-gray-600'>Our Store</p>
          <p className=' text-gray-500'>siwan <br />Bihar</p>
          <p className=' text-gray-500'> Tel:(415) <br /> 555-0923</p>

          <p className=' font-semibold text-xl text-gray-600'>Carreers at Forever</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore repellat similique ut  Quas adipisci repellendus suscipit quidem.</p>
          <p className=' text-gray-500 mt-[-5px]'> Email:admin@gmail.com</p>

          <button className='border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500'>Explore Job</button>

        </div>

      </div>
      <NewsletterBox/>
    </div>
  )
}

export default Contact
