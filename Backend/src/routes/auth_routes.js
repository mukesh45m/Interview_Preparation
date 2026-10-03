const {Router} = require("express")
const authConntroller  = require("../controllers/auth_controller")
const {authUser} = require("../middleware/auth_middle")


const authRouter = Router()

/**
 * @route Post /api/auth/register
 */

authRouter.post("/register",authConntroller.registerUserController)
authRouter.post("/login",authConntroller.loginUserController)
authRouter.post("/logout",authConntroller.logoutUser)

/**
 * @route get /api/auth/profile
 * @description get user profile
 * @access private
 */
authRouter.get("/profile",authUser,authConntroller.getUserProfile)




module.exports = authRouter


