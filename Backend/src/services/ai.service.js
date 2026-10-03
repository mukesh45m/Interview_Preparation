const { GoogleGenAI, Type } = require("@google/genai");
const { z } = require("zod");

const ai = new GoogleGenAI({
    apiKey: process.env.GOOGLE_API_KEY,
});

const interviewReportSchema = z.object({
    technicalQuestions: z.array(
        z.object({
            question: z.string(),
            intention: z.string(),
            answer: z.string(),
        })
    ),

    behavioralQuestions: z.array(
        z.object({
            question: z.string(),
            intention: z.string(),
            answer: z.string(),
        })
    ),

    skillGaps: z.array(
        z.object({
            skill: z.string(),
            severity: z.enum(["low", "medium", "high"]),
        })
    ),

    preparationSkills: z.array(
        z.object({
            day: z.string(),
            focus: z.string(),
            task: z.string(),
        })
    ),
    title: z.string().describe("The title of the job for the interview report is generated"),

    matchScore: z
        .number()
        .min(0)
        .max(100),

});

async function generateInterviewReport(
    resume,
    selfDescription,
    jobDescription
) {
    const prompt = `
You are an AI interview preparation assistant.

Analyze the candidate's resume, self-description, and job description.

Generate actual interview preparation data based specifically on the candidate.

Requirements:

1. Generate exactly 5 technical interview questions.
2. Generate exactly 3 behavioral/HR interview questions.
3. Generate relevant skill gaps based on the job description and candidate profile.
4. Generate exactly 5 preparation days.
5. Generate a realistic matchScore between 0 and 100.

Technical questions must be relevant to:
- candidate's skills
- candidate's projects
- candidate's experience
- technologies mentioned in the resume
- requirements mentioned in the job description

Each technical question must contain:
- question
- intention
- answer

Each behavioral question must contain:
- question
- intention
- answer

Each skill gap must contain:
- skill
- severity

Severity must be exactly one of:
- low
- medium
- high

Each preparation day must contain:
- day
- focus
- task

Do not use placeholder values.
Do not return field names as values.
Generate real content based on the candidate.

RESUME:
${resume}

SELF DESCRIPTION:
${selfDescription}

JOB DESCRIPTION:
${jobDescription}
`;

    try {
        const response = await ai.models.generateContent({
            model: "gemini-3.5-flash-lite",


            contents: prompt,

            config: {
                responseMimeType: "application/json",

                responseJsonSchema: {
                    type: Type.OBJECT,

                    properties: {
                        title: {
                            type: Type.STRING,
                        },
                        technicalQuestions: {
                            type: Type.ARRAY,
                            items: {
                                type: Type.OBJECT,
                                properties: {
                                    question: {
                                        type: Type.STRING,
                                    },
                                    intention: {
                                        type: Type.STRING,
                                    },
                                    answer: {
                                        type: Type.STRING,
                                    },
                                },
                                required: [
                                    "question",
                                    "intention",
                                    "answer",
                                ],
                            },
                        },

                        behavioralQuestions: {
                            type: Type.ARRAY,
                            items: {
                                type: Type.OBJECT,
                                properties: {
                                    question: {
                                        type: Type.STRING,
                                    },
                                    intention: {
                                        type: Type.STRING,
                                    },
                                    answer: {
                                        type: Type.STRING,
                                    },
                                },
                                required: [
                                    "question",
                                    "intention",
                                    "answer",
                                ],
                            },
                        },

                        skillGaps: {
                            type: Type.ARRAY,
                            items: {
                                type: Type.OBJECT,
                                properties: {
                                    skill: {
                                        type: Type.STRING,
                                    },
                                    severity: {
                                        type: Type.STRING,
                                        enum: [
                                            "low",
                                            "medium",
                                            "high",
                                        ],
                                    },
                                },
                                required: [
                                    "skill",
                                    "severity",
                                ],
                            },
                        },

                        preparationSkills: {
                            type: Type.ARRAY,
                            items: {
                                type: Type.OBJECT,
                                properties: {
                                    day: {
                                        type: Type.STRING,
                                    },
                                    focus: {
                                        type: Type.STRING,
                                    },
                                    task: {
                                        type: Type.STRING,
                                    },
                                },
                                required: [
                                    "day",
                                    "focus",
                                    "task",
                                ],
                            },
                        },

                        matchScore: {
                            type: Type.NUMBER,
                        },
                    },

                    required: [
                        "title",
                        "technicalQuestions",
                        "behavioralQuestions",
                        "skillGaps",
                        "preparationSkills",
                        "matchScore",
                    ],
                },
            },
        });



        // console.log(response.text);


        const result = JSON.parse(response.text);

        // Extra validation using Zod
        const validatedResult =
            interviewReportSchema.parse(result);

        // Validate exact counts
        if (validatedResult.technicalQuestions.length !== 5) {
            throw new Error(
                "Gemini returned invalid number of technical questions."
            );
        }

        if (validatedResult.behavioralQuestions.length !== 3) {
            throw new Error(
                "Gemini returned invalid number of behavioral questions."
            );
        }

        if (validatedResult.preparationSkills.length !== 5) {
            throw new Error(
                "Gemini returned invalid number of preparation days."
            );
        }

        return validatedResult;

    } catch (error) {
        console.error("❌ GEMINI ERROR");
        console.error("STATUS:", error.status);
        console.error("MESSAGE:", error.message);
        console.error("FULL ERROR:", error);

        throw error;
    }
}

module.exports = generateInterviewReport;