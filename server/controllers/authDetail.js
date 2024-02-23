import User from "../Models/authModel.js";
import bcrypt from "bcrypt";
import sendCookie from "../middlewares/sendCookie.js";

export const print = async (req, res) => {
  await res.send("authenticated");
  console.log(req.decodedUser);
};

export const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    let user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "invalid email or password",
      });
    }
    console.log('hello')

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(404).json({
        sucess: false,
        message: "invalid email or password",
      });
    }
    sendCookie(user, res, `welcome back ${user.name}`, 200);
    console.log(user)
  } catch (error) {
    console.error("Error logging in user:", error);
    res.status(500).send("Internal server error");
  }
};

export const register = async (req, res) => {
  const { name, email, collegeId, password } = req.body;
  let user = await User.findOne({ email });

  if (user) {
    return res.status(404).json({
      success: false,
      message: "user already exist",
    });
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  user = await User.create({
    name,
    email,
    collegeId,
    password: hashedPassword,
  });
  sendCookie(user, res, "registered successfully", 201);
};

export const logout = async (req, res) => {
  res
    .status(200)
    .cookie("token", "", {
      expires: new Date(Date.now()),
      // sameSite: process.env.NODE_ENV === 'devleopment' ? 'lax' : 'none',
      // secure: process.env.NODE_ENV === 'devleopment' ? false : true
    })
    .redirect("/")
};
