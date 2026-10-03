const usermodel = require("../models/user_model")
const userModel = require("../models/user_model")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

/**
 * 
 * @route post /api/auth/register 
 * @description register new user 
 * @acces public
 */
async function registerUserController(req, res) {
    const { username, email, password } = req.body
    // check if username,email and password is provided or not

    if (!username || !email || !password) {
        return res.status(400).json({
            message: "Please Provide username,email and password"
        })
    }
    // check if user already exist with the same email or username

    const isUserAlreadyExist = await userModel.findOne({
        $or: [{ username }, { email }]
    })


    if (isUserAlreadyExist) {
        return res.status(400).json({
            message: "Email or username is already registered "
        })
    }
    // hash the password and create new user
    const hash = await bcrypt.hash(password, 10)

    const user = await usermodel.create({
        username,
        email,
        password: hash
    })
    // generate jwt token and send it to the client
    const token = jwt.sign(
        { id: user._id, username: user.username },
        process.env.JWT_SECRET,
        { expiresIn: "1d" }

    )
    // set the token in the cookie and send the response to the client

    res.cookie("token", token, {
        httpOnly: true,
        maxAge: 24 * 60 * 60 * 1000,
        secure: true,
        sameSite: "none"
    })
    res.status(201).json({
        message: "User registered successfully",
        user: {
            id: user._id,
            username: user.username,
            email: user.email,

        }
    })


}

/**
 * @login login user
 */

async function loginUserController(req, res) {

    // console.log("========== LOGIN START ==========");
    // console.log("REQ BODY:", req.body);

    const { user_id, password } = req.body
    //  find email or username in the database
    const user = await userModel.findOne({
        $or: [{ username: user_id }, { email: user_id }]
    })
    // check if user not found
    if (!user) {
        return res.status(400).json({
            message: "Invalid email or password"
        })
    }
    // check if password is correct
    const isPasswordMatch = await bcrypt.compare(password, user.password)
    if (!isPasswordMatch) {
        return res.status(400).json({
            message: "Invalid email or password"
        })
    }
    const token = jwt.sign(
        { id: user._id, username: user.username },
        process.env.JWT_SECRET,
        { expiresIn: "1d" })


    res.cookie("token", token, {
        httpOnly: true,
        maxAge: 24 * 60 * 60 * 1000,
        secure: true,
        sameSite: "none"
    })
    res.status(200).json({
        message: "User logged in successfully",
        user: {
            id: user._id,
            username: user.username,
            email: user.email,
        }
    })
}


/**
 * @logout logout user
 */
async function logoutUser(req, res) {
    // Logout
    res.clearCookie("token", {
        httpOnly: true,
        secure: true,
        sameSite: "none"
    });

    return res.status(200).json({
        message: "User logged out successfully"
    });

}


async function getUserProfile(req, res) {
    const user = await userModel.findById(req.user.id)
    res.status(200).json({
        message: "User profile fetched successfully",
        user: {
            id: user._id,
            username: user.username,
            email: user.email,
        }
    })
}

module.exports = {
    registerUserController,
    loginUserController,
    getUserProfile,
    logoutUser
}