import React from "react";
import { Skeleton } from "@/components/ui/skeleton";
import Course from "./course";

const CourseSkeleton = () => {
  return (
    <div className="bg-gray-300 shadow-md hover:shadow-lg transition-shadow rounded-xl overflow-hidden">
      {/* Thumbnail */}
      <Skeleton className="w-full h-36" />

      <div className="px-5 py-4 space-y-3">
        {/* Title */}
        <Skeleton className="h-6 w-3/4" />

        {/* Instructor + level */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Skeleton className="h-6 w-6 rounded-full" />
            <Skeleton className="h-4 w-20" />
          </div>

          <Skeleton className="h-4 w-16" />
        </div>

        {/* Price */}
        <Skeleton className="h-4 w-1/4" />
      </div>
    </div>
  );
};

const Courses = () => {
  const isLoading = false;
  return (
    <div className="bg-gray-50">
      <div className="max-w-7xl mx-auto p-6">
        <h2 className="font-bold text-xl text-center">Our Courses</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
          {isLoading ? (
            Array.from({ length: 8 }).map((_, index) => (
              <CourseSkeleton key={index} />
            ))
          ) : (
            <Course />
          )}
        </div>
      </div>
    </div>
  );
};

export default Courses;
