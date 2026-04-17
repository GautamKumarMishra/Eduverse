import { Button } from '@/components/ui/button'
import React from 'react'

const HeroSection = () => {
  return (
    <div className='relative bg-gradient-to-r from-blue-400 to-indigo-700 dark:from-gray-700 dark:to-gray-900 py-16 px-4 text-center '>
        <div className="max-w-2xl mx-auto">
        <div className="text-white text-4xl font-bold text-center pt-3 ">Find Best Courses design for you</div>
        <p className="text-gray-200 text-lg mt-3">Discover the perfect course to match your learning style and goals</p>
        <form action="" className="flex mt-4 items-center dark:bg-gray-800 rounded-full shadow-lg overflow-hidden max-w-xl mx-auto mb-6">
          <input
            type="text"
            // placeholder="Search for courses..."
            className="flex-grow border-none focus-visible:ring-0 text-black bg-white rounded-l-full px-6 py-3 text-lg shadow-lg dark:text-gray-100 placeholder:text-gray-500"
          />
          <button className='bg-blue-600 dark:bg-gray-700 text-white py-3 px-6 rounded-r-full text-lg hover:bg-blue-800 dark:hover:bg-gray-800 cursor-pointer'>Search</button>
        </form>
        <Button className="bg-white text-gray-700 font-medium hover:bg-gray-200 cursor-pointer">Explore Courses</Button>

        </div>
      
    </div>
  )
}

export default HeroSection
