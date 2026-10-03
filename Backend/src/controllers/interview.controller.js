const { PDFParse } = require("pdf-parse");
const genrateInterviewReport = require("../services/ai.service");
const interviewReportModel = require("../models/interviewReportmodel");

// async function generateInterviewReportControler(req, res) {


//     const pdfData = await new PDFParse(
//         Uint8Array.from(req.file.buffer)
//     ).getText();

//     const resumeContent = pdfData.text;

//     const { selfDescription, jobDescription } = req.body;

//     const interViewReportByAi = await genrateInterviewReport(
//     resumeContent,
//     selfDescription,
//     jobDescription
// );

// console.log("AI REPORT:", JSON.stringify(interViewReportByAi, null, 2));

//     const interviewReport = await interviewReportModel.create({
//         user: req.user.id,
//         resume: resumeContent,
//         selfDescription,
//         jobDescription,
//         ...interViewReportByAi
//     });

//     res.status(201).json({
//         message: "interview report generate successfully",
//         interviewReport
//     });
// }
async function generateInterviewReportControler(req, res) {
  try {

    // Resume check missing tha
    if (!req.file) {
      return res.status(400).json({
        message: "Resume file is required",
      });
    }

    const pdfData = await new PDFParse(
      Uint8Array.from(req.file.buffer)
    ).getText();

    const resumeContent = pdfData.text;

    const { selfDescription, jobDescription } = req.body;

    const interViewReportByAi = await genrateInterviewReport(
      resumeContent,
      selfDescription,
      jobDescription
    );

    console.log(
      "AI REPORT:",
      JSON.stringify(interViewReportByAi, null, 2)
    );

    // AI report ko MongoDB mein save karo
    const interviewReport = await interviewReportModel.create({
      user: req.user.id,
      resume: resumeContent,
      selfDescription,
      jobDescription,
      ...interViewReportByAi,
    });

    // console.log("✅ REPORT SAVED:", interviewReport._id);

    //  Ab MongoDB wala document return hoga
    return res.status(201).json({
      message: "Interview report generated successfully",
      interviewReport,
    });

  } catch (error) {
    console.error(" Generate Interview Report Error:", error);

    return res.status(500).json({
      message: "Failed to generate interview report",
      error: error.message,
    });
  }
}

async function getInterviewReportByIdController(req, res) {
  try {
    const { interviewId } = req.params;

    const interviewReport = await interviewReportModel.findOne({
      _id: interviewId,
      user: req.user.id,
    });

    if (!interviewReport) {
      return res.status(404).json({
        message: "Interview report not found",
      });
    }

    return res.status(200).json({
      message: "Interview report fetched successfully",
      interviewReport,
    });
  } catch (error) {
    console.error("Error fetching interview report:", error);

    return res.status(500).json({
      message: "Failed to fetch interview report",
      error: error.message,
    });
  }
}

async function getAllInterviewReportController(req, res) {
  try {
    const interviewReports = await interviewReportModel
      .find({
        user: req.user.id,
      })
      .sort({ createdAt: -1 }).select(
        "-resume -selfDescription -jobDescription -technicalQuestions -behavioralQuestions -skillGaps -preparationSkills"
      )

    return res.status(200).json({
      message: "Interview reports fetched successfully",
      interviewReports,
    });
  } catch (error) {
    console.error("Error fetching interview reports:", error);

    return res.status(500).json({
      message: "Failed to fetch interview reports",
      error: error.message,
    });
  }
}

module.exports = {
  generateInterviewReportControler,
  getInterviewReportByIdController,
  getAllInterviewReportController
};