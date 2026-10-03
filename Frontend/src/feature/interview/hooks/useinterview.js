import { useContext } from "react";
import { getAllInterviewReports, generateInterviewReport, getInterviewReportById } from "../services/Interview.api";
import { InterviewContext } from "../interview.context";




export const useInterview = () => {

    const context = useContext(InterviewContext)
    if (!context) {
        throw new Error("useInterview must be used within an InterviewProvider")

    }
    const { loading, setLoading, Report, setReport, reports, setReports } = context

    // const generateReport = async (jobDescription, selfDescription, resumeFile) => {
    //     setLoading(true);
    //     let response = null

    //     try {
    //         const response = await generateInterviewReport(jobDescription, selfDescription, resumeFile);

    //         setReport(response.data.interviewReport);

    //     } catch (error) {
    //         console.log(error)
    //     } finally {
    //         setLoading(false);
    //     }
    //     return response.data.interviewReport


    // }

    const generateReport = async (
        jobDescription,
        selfDescription,
        resumeFile
    ) => {
        setLoading(true);
        // setError(null);

        try {
            const response = await generateInterviewReport(
                jobDescription,
                selfDescription,
                resumeFile
            );

            console.log("API RESPONSE:", response);

            setReport(response.interviewReport);

            return response.interviewReport;
        } catch (error) {
            console.error("Generate Report Error:", error);
            // setError(error);
            return null;
        } finally {
            setLoading(false);
        }
    };

const getReportById = async (interviewId) => {
    setLoading(true);

    try {
        const response = await getInterviewReportById(interviewId);

        console.log(" REPORT RESPONSE:", response);

        setReport(response.interviewReport);

        return response.interviewReport;

    } catch (error) {
        console.error(" Get Report By ID Error:", error);
        return null;

    } finally {
        setLoading(false);
    }
};

const getReports = async () => {
    setLoading(true);

    try {
        const response = await getAllInterviewReports();

        setReports(response.interviewReports);

        return response.interviewReports;
    } catch (error) {
        console.error("Get All Reports Error:", error);
        return null;
    } finally {
        setLoading(false);
    }
};
    return { loading, reports,    report: Report, generateReport, getReportById, getReports }
}


