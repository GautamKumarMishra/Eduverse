import jwt from "jsonwebtoken";

export const generateToken = (res, user, message) => {
  const token = jwt.sign({ userID: user._id }, process.env.SECRET_KEY, {
    expiresIn: "2d",
  });
  return res.status(201).cookie("token", token, {
      httpOnly: true,
      sameSite: "strict",
      maxAge: 2 * 24 * 60 * 60 * 1000,
    })
    .json({
      success: true,
      message,
      user,
    });
};
