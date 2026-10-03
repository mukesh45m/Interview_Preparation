const mongoose  = require("mongoose")
/**
 * job description
 * resume
 * self description
 * matchscore:{number
 * }
 * 
 * interview questions :[{
 * questiom:""
 * intension:""
 * answer:""
 * 
 * }]
 * 
 * Behaviour Questions:[{
 * questiom:""
 * intension:""
 * answer:""
 * 
 * }]
 * 
 * Skill gaps:[{
 * skill:""
 * serverty{
 * enum{low,medium ,high}}
 * 
 * }]
 * 
 * preparation plan:[{
 * day: Number
 * focus:""
 * tasks:[]
 * 
 * }]
 * 
 */



const behaviourQuestionSchema = new mongoose.Schema(
  {
    question: {
      type: String,
      required: [true, "Behavioral question is required"],
    },

    intention: {
      type: String,
      required: [true, "Intention is required"],
    },

    answer: {
      type: String,
      required: [true, "Answer is required"],
    },
  },{
    _id: false,
  }
);

const technicalQuestionSchema = new mongoose.Schema(
  {
    question: {
      type: String,
      required: [true, "Technical question is required"],
    },

    intention: {
      type: String,
      required: [true, "Intention is required"],
    },

    answer: {
      type: String,
      required: [true, "Answer is required"],
    },
  },
  {
    _id: false,
  }
);

const skillGapSchema = new mongoose.Schema(
  {
    skill: {
      type: String,
      required: [true, "Skill is required"],
    },

    severity: {
      type: String,
      enum: ["low", "medium", "high"],
      required: [true, "Severity is required"],
    },
  },
  {
    _id: false,
  }
);

const preparationSkillSchema = new mongoose.Schema({
  day: {
    type: String,
    required: [true, "Day is required"],
  },

  focus: {
    type: String,
    required: [true, "Focus is required"],
  },

  task: {
    type: String,
    required: [true, "Task is required"],
  },
},{
    _id: false,
});

const interviewReportSchema = new mongoose.Schema(
  {
    jobDescription: {
      type: String,
      required: [true, "Job description is required"],
    },

    resume: {
      type: String,
    },

    selfDescription: {
      type: String,
    },

    matchScore: {
      type: Number,
      min: 0,
      max: 100,
    },

    technicalQuestions: [technicalQuestionSchema],

    behavioralQuestions: [behaviourQuestionSchema],

    skillGaps: [skillGapSchema],

    preparationSkills: [preparationSkillSchema],
    user:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"users"
  },
  title:{
    type:String,
    required:[true,"Job title is required"]
  },
  },
  
  {
    timestamps: true,
  }
);


const InterviewReportModel = mongoose.model(
  "InterviewReport",
  interviewReportSchema
);

module.exports = InterviewReportModel;