// import React, { useEffect } from "react";

// import { useNavigate } from "react-router-dom";
// import { useInterview } from "../hooks/useinterview";

// const AllInterviewReport = () => {
//   const navigate = useNavigate();

//   const {
//     reports,
//     loading,
//     getReports,
//   } = useInterview();

//   useEffect(() => {
//     getReports();
//   }, []);

//   if (loading) {
//     return (
//       <div className="min-h-screen flex items-center justify-center bg-[#f5f3ef] font-[Times_New_Roman]">
//         Loading interview reports...
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-[#f5f3ef] px-6 py-12 font-[Times_New_Roman]">
//       <div className="mx-auto max-w-6xl">

//         {/* Header */}
//         <div className="mb-10 border-b border-black/15 pb-6">
//           <p className="mb-2 text-sm uppercase tracking-[0.2em] text-gray-500">
//             Interview Preparation
//           </p>

//           <h1 className="text-4xl font-semibold text-[#222]">
//             Your Interview Reports
//           </h1>

//           <p className="mt-3 text-gray-600">
//             Review your previously generated interview reports.
//           </p>
//         </div>

//         {/* No reports */}
//         {!reports || reports.length === 0 ? (
//           <div className="border border-black/10 bg-white p-10 text-center">
//             <h2 className="text-2xl text-[#222]">
//               No interview reports yet
//             </h2>

//             <p className="mt-3 text-gray-500">
//               Generate your first interview report to see it here.
//             </p>
//           </div>
//         ) : (
//           <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
//             {reports.map((report) => (
//               <div
//                 key={report._id}
//                 className="border border-black/10 bg-white p-6 transition hover:-translate-y-1 hover:shadow-md"
//               >
//                 <div className="mb-6 flex items-start justify-between">
//                   <span className="text-sm text-gray-500">
//                     Interview Report
//                   </span>

//                   <span className="text-2xl font-semibold text-[#222]">
//                     {report.matchScore}%
//                   </span>
//                 </div>

//                 <h2 className="mb-3 text-xl font-semibold text-[#222]">
//                   {report.title}
//                 </h2>

//                 <p className="text-sm text-gray-500">
//                   Created on{" "}
//                   {new Date(report.createdAt).toLocaleDateString()}
//                 </p>

//                 <button
//                   onClick={() =>
//                     navigate(`/interview/${report._id}`)
//                   }
//                   className="mt-6 w-full border border-[#222] px-4 py-3 text-sm font-medium text-[#222] transition hover:bg-[#222] hover:text-white"
//                 >
//                   View Report
//                 </button>
//               </div>
//             ))}
//           </div>
//         )}

//       </div>
//     </div>
//   );
// };

// export default AllInterviewReport;

import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useInterview } from "../hooks/useinterview";

const AllInterviewReport = () => {
  const navigate = useNavigate();

  const {
    reports,
    loading,
    getReports,
  } = useInterview();

  useEffect(() => {
    getReports();
  }, []);

  if (loading) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-stone-100">
        <div className="text-center">

          <div className="mx-auto h-10 w-10 animate-spin rounded-full border-4 border-stone-300 border-t-orange-600"></div>

          <p className="mt-4 text-sm font-medium text-slate-600">
            Loading interview reports...
          </p>

        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-stone-100 text-slate-900">

      {/* ================= NAVBAR ================= */}

      <header className="border-b border-stone-200 bg-white">

        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 lg:px-8">

          {/* LOGO */}

          <div className="flex items-center gap-2">

            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-orange-600 font-bold text-white">
              ↯
            </div>

            <span className="text-lg font-bold text-slate-900">
              InterviewPrep
            </span>

          </div>


          {/* DASHBOARD */}

          <button
            onClick={() => navigate("/dashboard")}
            className="text-sm font-medium text-slate-600 transition hover:text-orange-600"
          >
            ← Back to Dashboard
          </button>

        </div>

      </header>


      {/* ================= CONTENT ================= */}

      <div className="mx-auto max-w-7xl px-5 py-8 lg:px-8">


        {/* ================= HEADER ================= */}

        <div className="mb-8">

          <div className="mb-3 flex items-center gap-2">

            <div className="h-px w-8 bg-orange-600"></div>

            <span className="text-xs font-bold uppercase tracking-widest text-orange-600">
              Interview Preparation
            </span>

          </div>

          <h1 className="text-3xl font-bold text-slate-900 md:text-4xl">
            Your Interview Reports
          </h1>

          <p className="mt-2 text-sm text-slate-500">
            Review your previously generated interview reports.
          </p>

        </div>


        {/* ================= NO REPORTS ================= */}

        {!reports || reports.length === 0 ? (

          <div className="rounded-2xl border border-stone-200 bg-white p-10 text-center shadow-sm">

            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-100 text-xl text-orange-600">
              ✦
            </div>

            <h2 className="mt-5 text-xl font-bold text-slate-900">
              No interview reports yet
            </h2>

            <p className="mt-2 text-sm text-slate-500">
              Generate your first interview report to see it here.
            </p>

            <button
              onClick={() => navigate("/analyze")}
              className="mt-5 rounded-xl bg-orange-600 px-5 py-3 text-sm font-bold text-white transition hover:bg-orange-700"
            >
              Analyze a Job →
            </button>

          </div>

        ) : (

          /* ================= REPORT GRID ================= */

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">

            {reports.map((report) => (

              <div
                key={report._id}
                className="rounded-2xl border border-stone-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >

                {/* TOP */}

                <div className="mb-5 flex items-start justify-between">

                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-100 text-sm font-bold text-orange-600">
                    AI
                  </div>

                  <div className="text-right">

                    <p className="text-xs text-slate-400">
                      Match
                    </p>

                    <p className="text-2xl font-bold text-orange-600">
                      {report.matchScore}%
                    </p>

                  </div>

                </div>


                {/* TITLE */}

                <p className="mb-1 text-xs font-bold uppercase tracking-wider text-orange-600">
                  Interview Report
                </p>

                <h2 className="line-clamp-2 text-lg font-bold text-slate-900">
                  {report.title}
                </h2>


                {/* DATE */}

                <div className="mt-4 flex items-center gap-2 text-xs text-slate-500">

                  <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-stone-100">
                    ◷
                  </span>

                  <span>
                    Created on{" "}
                    {new Date(report.createdAt).toLocaleDateString()}
                  </span>

                </div>


                {/* SCORE BAR */}

                <div className="mt-5">

                  <div className="mb-2 flex justify-between text-xs">

                    <span className="text-slate-500">
                      Job compatibility
                    </span>

                    <span className="font-semibold text-orange-600">
                      {report.matchScore}%
                    </span>

                  </div>

                  <div className="h-2 rounded-full bg-stone-200">

                    <div
                      className="h-2 rounded-full bg-orange-600"
                      style={{
                        width: `${report.matchScore}%`,
                      }}
                    ></div>

                  </div>

                </div>


                {/* BUTTON */}

                <button
                  onClick={() =>
                    navigate(`/interview/${report._id}`)
                  }
                  className="mt-5 w-full rounded-xl bg-orange-600 px-4 py-3 text-sm font-bold text-white transition hover:bg-orange-700"
                >
                  View Report →
                </button>

              </div>

            ))}

          </div>

        )}

      </div>

    </main>
  );
};

export default AllInterviewReport;