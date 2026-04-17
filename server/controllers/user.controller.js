import { User } from "../Models/user.models.js";
import bcrypt from "bcrypt";
import { generateToken } from "../utils/generateToken.js";

export const register = async (req, res) => {
  try{
    const { name, email, password } = req.body;
  if (!name || !email || !password) {
    return res.status(400).json({
      success: false,
      message: "All fields are required",
    });
  }
  const hashedPassword =  bcrypt.hashSync(password,12);
  const user = await User.findOne({ email });
  if (user) {
    return res.status(400).json({
      success: false,
      message: "This email already exist",
    });
  }
  await User.create({
    name,
    email,
    password: hashedPassword
  });
  return res.status(201).json({
    success: true,
    message: "Account created Successfully."
  })
  }
  catch(error){
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Can't register User"
    })
  }
}


export const login = async (req, res) => {
  console.log("Login API called");
  try{
    const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({
      success: false,
      message: "All fields are required",
    });
  }
  // const hashedPassword =  bcrypt.hashSync(password,12);
  const user = await User.findOne({ email });
  if (!user) {
    return res.status(400).json({
      success: false,
      message: "Incorrect email or password",
    });
  }
  const isPassword =  bcrypt.compareSync(password, user.password);

  if(!isPassword){
    return res.status(400).json({
      success: false,
      message: "Incorrect email or password",
    });
  }
  console.log(user);  
  // Help in authorization 
  return generateToken(res, user,`Welcome back ${user.name}`);
  // return res.status(201).json({
  //   success: true,
  //   message: "Login Successfully."
  // })
  }
  catch(error){
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Failed to Login"
    })
  }
}


// export default register;
