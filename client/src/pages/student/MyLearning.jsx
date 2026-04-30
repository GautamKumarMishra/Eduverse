import React from 'react'

const myLearning = () => {
    const loading = false;
    const myLearningCourses = [];
  return (
    <>
    <div className='mx-4xl mx-auto my-20 md:px-0'>
        <h1 className='font-bold text-2xl text-center mt-10'>My Learning</h1>
        {loading ? (<VideoSkeleton/>) : (
            myLearningCourses.length === 0 ? (
                <div className='text-center mt-20'>
                    <h2 className='text-lg font-medium'>You haven't enrolled in any courses yet.</h2>
                </div>
            ) : (
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10'>
                {/* Map through enrolled courses */}
                <div className='bg-white rounded-xl shadow-md p-4'>
                    <div className='w-full h-40 bg-gray-300 rounded-lg mb-4'></div>
                    <h2 className='font-semibold text-lg mb-2'>Course Title</h2>
                </div>
            </div>
        )
    )}
    </div>
    </>
  )
}

// SkeletonCard.jsx
 export function VideoSkeleton({ count = 7 }) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {Array.from({ length: count }).map((_, i) => (
          <div
            key={i}
            className="bg-white rounded-xl shadow-md overflow-hidden"
          >
            {/* Thumbnail */}
            <div className="relative h-48 bg-gray-300">
              <div className="absolute inset-0 overflow-hidden">
                <div className="w-full h-full animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/60 to-transparent"></div>
              </div>
            </div>

            {/* Content */}
            <div className="p-4 space-y-3">
              {/* Title */}
              <div className="relative h-5 bg-gray-300 rounded w-3/4 overflow-hidden">
                <div className="absolute inset-0 animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/60 to-transparent"></div>
              </div>

              {/* Description */}
              <div className="relative h-4 bg-gray-300 rounded w-full overflow-hidden">
                <div className="absolute inset-0 animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/60 to-transparent"></div>
              </div>

              <div className="relative h-4 bg-gray-300 rounded w-5/6 overflow-hidden">
                <div className="absolute inset-0 animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/60 to-transparent"></div>
              </div>

              {/* Footer */}
              <div className="flex items-center justify-between pt-2">
                <div className="relative h-4 bg-gray-300 rounded w-1/3 overflow-hidden">
                  <div className="absolute inset-0 animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/60 to-transparent"></div>
                </div>

                <div className="relative h-6 bg-gray-300 rounded w-12 overflow-hidden">
                  <div className="absolute inset-0 animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/60 to-transparent"></div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default myLearning
