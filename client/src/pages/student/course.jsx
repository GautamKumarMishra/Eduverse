import React from "react";
import {
  Card,
  CardContent
} from "@/components/ui/card";
import { Avatar, AvatarImage } from "@/components/ui/avatar";

const Course = () => {
  const courses = [
  {
    id: 1,
    title: "Mastering Docker: From Beginner",
    instructor: "Gautam Mishra",
    level: "Beginner",
    price: 499,
    image:
      "https://cdn.thenewstack.io/media/2022/01/61cc5844-docker.png",
    avatar: "https://i.pravatar.cc/150?img=1"
  },
  {
    id: 2,
    title: "Mastering Next.js: Full Stack",
    instructor: "GK Mishra",
    level: "Medium",
    price: 239,
    image:
      "https://nextjs.org/learn/twitter-image-r39hrb.jpg?twitter-image.0p875xkaecqkd.jpg",
    avatar: "https://i.pravatar.cc/150?img=2"
  },
  {
    id: 3,
    title: "Master HTML: The Complete Guide",
    instructor: "GKM MernStack",
    level: "Beginner",
    price: 199,
    image:
      "https://img-c.udemycdn.com/course/480x270/851712_fc61_6.jpg",
    avatar: "https://i.pravatar.cc/150?img=3"
  },
  {
    id: 4,
    title: "JavaScript Basics: From Zero",
    instructor: "Instructor MernStack",
    level: "Medium",
    price: 449,
    image:
      "https://img-c.udemycdn.com/course/480x270/2776760_f176_10.jpg",
    avatar: "https://i.pravatar.cc/150?img=4"
  },
  {
    id: 5,
    title: "React.js Complete Bootcamp",
    instructor: "Ankit Sharma",
    level: "Medium",
    price: 399,
    image:
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=800",
    avatar: "https://i.pravatar.cc/150?img=5"
  },
  {
    id: 6,
    title: "Node.js API Development Guide",
    instructor: "Rohit Verma",
    level: "Advanced",
    price: 549,
    image:
      "https://images.unsplash.com/photo-1627398242454-45a1465c2479?q=80&w=800",
    avatar: "https://i.pravatar.cc/150?img=6"
  },
  {
    id: 7,
    title: "MongoDB for Beginners",
    instructor: "Sneha Kapoor",
    level: "Beginner",
    price: 299,
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=800",
    avatar: "https://i.pravatar.cc/150?img=7"
  },
  {
    id: 8,
    title: "Tailwind CSS Mastery",
    instructor: "Amit Singh",
    level: "Beginner",
    price: 199,
    image:
      "https://images.unsplash.com/photo-1618477247222-acbdb0e159b3?q=80&w=800",
    avatar: "https://i.pravatar.cc/150?img=8"
  }
];

  return (
    <>
      {courses.map((course) => (
        <Card
          key={course.id}
          className="overflow-hidden hover:shadow-lg transition"
        >
          {/* Image */}
          <img
            src={course.image}
            alt={course.title}
            className="w-full h-36 object-cover"
          />

          <CardContent className="space-y-3">
            {/* Title */}
            <h3 className="font-semibold text-sm line-clamp-2">
              {course.title}
            </h3>

            {/* Instructor + Level */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Avatar className="h-6 w-6">
                  <AvatarImage src={course.avatar} />
                </Avatar>
                <span className="text-xs text-gray-600">
                  {course.instructor}
                </span>
              </div>

              <span
                className={`text-xs px-2 py-1 rounded-full ${
                  course.level === "Beginner"
                    ? "bg-blue-100 text-blue-600"
                    : "bg-purple-100 text-purple-600"
                }`}
              >
                {course.level}
              </span>
            </div>

            {/* Price */}
            <p className="font-bold text-sm">₹{course.price}</p>
          </CardContent>
        </Card>
      ))}
    </>
  );
};

export default Course;