import axios from "axios";


const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "http://localhost:3000/api",
  withCredentials: true
})

// export const generateInterviewReport = async (
//   jobDescription,
//   selfDescription,
//   resumeFile 
// ) => {
//   const formData = new FormData();

//   formData.append("jobDescription", jobDescription);
//   formData.append("selfDescription", selfDescription);
//   formData.append("resume", resumeFile);

//   const response = await api.post(
//     "/interview/generate",
//     formData,
//     {
//       headers: {
//         "Content-Type": "multipart/form-data",
//       },
//     }
//   );
//   return response.data
// };

export const generateInterviewReport = async (
  jobDescription,
  selfDescription,
  resumeFile
) => {
  const formData = new FormData();

  formData.append("jobDescription", jobDescription);
  formData.append("selfDescription", selfDescription);
  formData.append("resume", resumeFile);

  console.log("FORM RESUME:", formData.get("resume"));

  const response = await api.post(
    "/interview/generate",
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );

  return response.data;
};

export const getInterviewReportById = async (interviewId) => {
  const response = await api.get(`/interview/report/${interviewId}`);
  return response.data
};
export const getAllInterviewReports = async () => {
  const response = await api.get("/interview");
  return response.data
};
