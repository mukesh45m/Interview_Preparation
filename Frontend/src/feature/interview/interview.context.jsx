import {  createContext, useState } from "react";


export const InterviewContext= createContext()

export const InterviewProvider = ({ children})=>{
    const [loading, setLoading] = useState(false);
    const [Report, setReport] = useState(null);
    const [reports, setReports] = useState();
    return(
        <InterviewContext.Provider value={{loading,setLoading,Report,setReport,reports,setReports}}>
            {children}
        </InterviewContext.Provider>
    )
}