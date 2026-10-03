const express = require('express');
const { authUser } = require('../middleware/auth_middle');
const { generateInterviewReportControler, getInterviewReportByIdController, getAllInterviewReportController } = require("../controllers/interview.controller")
const upload = require("../middleware/file.middle")



const interviewRouter = express.Router()


/***
 * @routr post /api/intervire
 * @access private 
 */

interviewRouter.post("/generate", authUser, upload.single("resume"), generateInterviewReportControler)

interviewRouter.get("/report/:interviewId", authUser, getInterviewReportByIdController)


interviewRouter.get("/", authUser, getAllInterviewReportController)




module.exports = interviewRouter