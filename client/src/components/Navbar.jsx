import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "./ui/dropdown-menu";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { Menu, School } from "lucide-react";
import { Link } from "react-router-dom";
import React from "react";
import { DropdownMenuTrigger } from "./ui/dropdown-menu";
import { Button } from "./ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import DarkMode from "@/pages/DarkMode";
import { useNavigate } from "react-router-dom";
import { Separator } from "@radix-ui/react-dropdown-menu";

function Navbar() {
  let user = true;

  return (
    <div className="dark:bg-[#0A0A0A] h-16 bg-white border-b dark:border-b-gray-800 fixed top-0 left-0 right-0 duration-300 z-20">
      {/* Desktop */}
      <div className="max-w-7xl mx-auto md:flex hidden justify-between items-center gap-10 h-full">
        <div className="flex items-center gap-2">
          <School size={30} className="" />
          <h1 className="hidden md:block font-extrabold text-2xl">Eduverse</h1>
        </div>
        {/* User icons and dark mode icons */}
        <div className="flex items-center gap-6">
          {user ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                {/* <Button varient = "outline" >Open</Button> */}
                <Avatar>
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt="@shadcn"
                  />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                  <DropdownMenuItem>
                    {/* <Link to="my-learning">My learning</Link> */}
                    My learning
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    {" "}
                    {/* <Link to="profile">Edit Profile</Link>{" "} */}
                    Edit Profile
                  </DropdownMenuItem>
                  <DropdownMenuItem>Setting</DropdownMenuItem>
                  <DropdownMenuItem>Log Out</DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Dashboard</DropdownMenuItem>
                {/* {user?.role === "instructor" && (
        <>
          <DropdownMenuSeparator />
          <DropdownMenuItem><Link to="/admin/dashboard">Dashboard</Link></DropdownMenuItem>
        </>
      )} */}
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <div className="flex items-center gap-2">
              <Button className="outline">Login</Button>
              <Button>Signup</Button>
            </div>
          )}
          <DarkMode />
        </div>
      </div>
      {/* <MobileNavbar user={{role:"instructor"}}/>  */}
      <div className="md:hidden">
        <MobileNavbar user={{ role: "instructor" }} />
      </div>
    </div>
  );
}

export default Navbar;

export const MobileNavbar = ({ user }) => {
  return (
    <Sheet>
      {/* Trigger */}
      <SheetTrigger asChild>
        <Button size="icon" variant="outline" className="rounded-full">
          <Menu size={20} />
        </Button>
      </SheetTrigger>

      {/* Drawer */}
      <SheetContent side="left" className="flex flex-col px-4">
        {/* Header */}
        <SheetHeader className="flex flex-row items-center justify-between p-0 mx-0 pt-4">
          <SheetTitle>
            <Link to="/" className="font-bold text-lg ">
              Eduverse
            </Link>
          </SheetTitle>
          <DarkMode />
        </SheetHeader>

        {/* <Separator className="my-1" /> */}

        {/* Navigation */}
        <nav className="flex flex-col gap-4 text-sm font-medium">
          <SheetClose asChild>
            <Link
              to="/my-learning"
              className="hover:text-primary transition"
            >
              My Learning
            </Link>
          </SheetClose>

          <SheetClose asChild>
            <Link
              to="/profile"
              className="hover:text-primary transition"
            >
              Edit Profile
            </Link>
          </SheetClose>

          
        </nav>

  

        
        {user?.role === "instructor" && (
          // <SheetFooter>
            <SheetClose asChild>
              <Button className="w-full">Go to Dashboard</Button>
            </SheetClose>
          // </SheetFooter>
        )}

        {/* Push footer to bottom */}
        <div className="flex-1" />

        {/* Footer */}

        <SheetClose asChild>
            <Link
              to="/logout"
              className="text-white bg-red-500 hover:bg-red-600 transition px-3 py-2 rounded-md text-center my-3 mb-5 "
            >
              Log Out
            </Link>
          </SheetClose>

      </SheetContent>

      
    </Sheet>
  );
};
