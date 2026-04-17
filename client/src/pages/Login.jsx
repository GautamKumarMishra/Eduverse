import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  useLoginUserMutation,
  useRegisterUserMutation,
} from "@/features/api/authAPI";
import { Loader2 } from "lucide-react";
import { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { toast } from "sonner";

export default function Login() {
  const [signup, setSignup] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });
  const [
    registerUser,
    {
      data: registerData,
      error: registerError,
      isLoading: registerIsLoading,
      isSuccess: registerIsSuccess,
    },
  ] = useRegisterUserMutation();
  const [
    loginUser,
    {
      data: loginData,
      error: loginError,
      isLoading: loginIsLoading,
      isSuccess: loginIsSuccess,
    },
  ] = useLoginUserMutation();

  const Navigate = useNavigate();

  const inputHandler = (e, type) => {
    // console.log(e);
    // console.log(type);
    // console.log(name);
    // console.log(value);
    if (type === "signup") {
      setSignup({ ...signup, [e.target.name]: e.target.value });
      // console.log("SignUp successfully");
    } else if (type === "login") {
      setLogin({ ...login, [e.target.name]: e.target.value });
      // console.log("Login Successfully")
    }
  };

  const submitHandler = async (e, type) => {
    e.preventDefault();
    const inputData = type === "register" ? signup : login;
    const isEmpty = Object.values(inputData).some((val) => val.trim() === "");
    if (isEmpty) {
      alert("Please fill in all fields.");
      return;
    }
    const action = type === "register" ? registerUser : loginUser;
    await action(inputData);
    console.log(inputData);
  };

  useEffect(() => {
    if (registerIsSuccess && registerData) {
      toast.success(registerData.message || "Signup successfully");
      Navigate("/");
    } 
    if(registerError){
      toast.error( "Signup failed");

    }
    else if (loginIsSuccess && loginData) {
      toast.success(loginData.message || "Login successfully");
      Navigate("/");
    }
    else if(loginError){
      toast.error( "Login Fail");
    }
  }, [
    loginData,
    registerData,
    loginError,
    registerError,
    loginIsLoading,
    registerIsLoading,
  ]);

  return (
    <div className="flex items-center justify-center mt-20">
      <Tabs defaultValue="account" className="w-[400px] ">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="Signup">Signup</TabsTrigger>
          <TabsTrigger value="Login">Login</TabsTrigger>
        </TabsList>
        <TabsContent value="Signup">
          <Card>
            <CardHeader>
              <CardTitle>Signup</CardTitle>
              <CardDescription>Signup to create new account.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="space-y-1">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Gautam"
                  name="name"
                  value={signup.name}
                  onChange={(e) => {
                    inputHandler(e, "signup");
                  }}
                  required={true}
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor="email">email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="abc@gmail.com"
                  name="email"
                  value={signup.email}
                  onChange={(e) => {
                    inputHandler(e, "signup");
                  }}
                  required={true}
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor="passowrd">Password</Label>
                <Input
                  type="password"
                  placeholder="********"
                  name="password"
                  value={signup.password}
                  onChange={(e) => {
                    inputHandler(e, "signup");
                  }}
                  required={true}
                />
              </div>
            </CardContent>
            <CardFooter>
              <Button
                disabled={registerIsLoading}
                onClick={(e) => {
                  submitHandler(e, "register");
                }}
              >
                {registerIsLoading ? (
                  <>
                    <Loader2 className="mr 4 h-4 w-4 animate-spin" />
                    Please Wait
                  </>
                ) : (
                  "Register"
                )}
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="Login">
          <Card>
            <CardHeader>
              <CardTitle>Login</CardTitle>
              <CardDescription>
                Login here If you already registered
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="space-y-1">
                <Label htmlFor="email">email</Label>
                <Input
                  type="text"
                  placeholder="abc@gmail.com"
                  name="email"
                  value={login.email}
                  onChange={(e) => {
                    inputHandler(e, "login");
                  }}
                  required={true}
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor="new">Password</Label>
                <Input
                  id="new"
                  type="password"
                  placeholder="********"
                  name="password"
                  value={login.password}
                  onChange={(e) => {
                    inputHandler(e, "login");
                  }}
                  required={true}
                />
              </div>
            </CardContent>
            <CardFooter>
              <Button
                disabled={loginIsLoading}
                onClick={(e) => {
                  submitHandler(e, "login");
                }}
              >
                {loginIsLoading ? (
                  <>
                    <Loader2 className="mr 4 h-4 w-4 animate-spin" />
                    Please Wait
                  </>
                ) : (
                  "Login"
                )}
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
