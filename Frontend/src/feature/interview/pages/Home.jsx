import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useInterview } from "../hooks/useinterview";

const Home = () => {
  const { loading, generateReport } = useInterview();

  const [jobDescription, setJobDescription] = useState("");
  const [resume, setResume] = useState(null);
  const [selfDescription, setSelfDescription] = useState("");

  const resumeInputRef = useRef(null);
  const navigate = useNavigate();

  const handleGenerateReport = async () => {
    console.log("JOB:", jobDescription);
    console.log("ABOUT:", selfDescription);
    console.log("RESUME:", resume);

    if (!jobDescription.trim()) {
      alert("Please enter the job description.");
      return;
    }

    if (!resume) {
      alert("Please upload your resume.");
      return;
    }

    const data = await generateReport(
      jobDescription,
      selfDescription,
      resume
    );

    if (!data) {
      return;
    }

    navigate(`/interview/${data._id}`);
  };

  return (
    <main className="min-h-screen bg-stone-100 text-slate-900">

      {/* =================================================
          NAVBAR
      ================================================= */}

      <header className="border-b border-stone-200 bg-white">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 lg:px-8">

          {/* LOGO */}

          <div className="flex items-center gap-2">

            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-orange-600 font-bold text-white">
              ↯
            </div>

            <span className="text-lg font-bold">
              InterviewPrep
            </span>

          </div>


          {/* BACK */}

          <button
            onClick={() => navigate("/dashboard")}
            className="text-sm font-medium text-slate-600 transition hover:text-orange-600"
          >
            ← Back to Dashboard
          </button>

        </div>
      </header>


      {/* =================================================
          PAGE CONTENT
      ================================================= */}

      <div className="mx-auto max-w-7xl px-5 py-8 lg:px-8">


        {/* =================================================
            HEADER
        ================================================= */}

        <div className="mb-8">

          <div className="mb-3 flex items-center gap-2">

            <div className="h-px w-8 bg-orange-600"></div>

            <span className="text-xs font-bold uppercase tracking-widest text-orange-600">
              New Analysis
            </span>

          </div>


          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">

            <div>

              <h1 className="text-3xl font-bold text-slate-900 md:text-4xl">
                Analyze a New Job
              </h1>

              <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500">
                Add the job description and your profile. AI will analyze the
                role, find your skill gaps and generate personalized interview
                questions.
              </p>

            </div>


            {/* STEP INDICATOR */}

            <div className="flex items-center gap-2 text-xs font-medium text-slate-400">

              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-orange-600 text-white">
                1
              </span>

              <span className="h-px w-6 bg-stone-300"></span>

              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-stone-200">
                2
              </span>

              <span className="h-px w-6 bg-stone-300"></span>

              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-stone-200">
                3
              </span>

            </div>

          </div>

        </div>


        {/* =================================================
            MAIN GRID
        ================================================= */}

        <div className="grid gap-6 lg:grid-cols-2">


          {/* =================================================
              JOB DESCRIPTION
          ================================================= */}

          <section className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm lg:p-7">

            {/* HEADER */}

            <div className="mb-5 flex items-start justify-between">

              <div className="flex gap-3">

                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-orange-100 font-bold text-orange-600">
                  01
                </div>

                <div>

                  <h2 className="text-lg font-bold text-slate-900">
                    Job Description
                  </h2>

                  <p className="mt-1 text-xs text-slate-500">
                    Paste the job you're applying for
                  </p>

                </div>

              </div>

              <span className="rounded-full bg-orange-50 px-3 py-1 text-xs font-semibold text-orange-600">
                Required
              </span>

            </div>


            {/* TEXTAREA */}

            <textarea
              value={jobDescription}
              onChange={(e) => setJobDescription(e.target.value)}
              name="jobDescription"
              id="jobDescription"
              placeholder={`Paste the job description here...

Include things like:
• Responsibilities
• Required skills
• Qualifications
• Experience
• Preferred skills`}
              className="h-80 w-full resize-none rounded-xl border border-stone-200 bg-stone-50 p-4 text-sm leading-6 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-orange-500 focus:bg-white focus:ring-4 focus:ring-orange-100"
            />

            <div className="mt-3 flex items-center justify-between">

              <p className="text-xs text-slate-400">
                More details = more accurate analysis
              </p>

              <span className="text-xs text-slate-400">
                {jobDescription.length} characters
              </span>

            </div>

          </section>


          {/* =================================================
              PROFILE SECTION
          ================================================= */}

          <section className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm lg:p-7">


            {/* RESUME */}

            <div className="mb-6">

              <div className="mb-5 flex gap-3">

                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-orange-100 font-bold text-orange-600">
                  02
                </div>

                <div>

                  <h2 className="text-lg font-bold text-slate-900">
                    Your Resume
                  </h2>

                  <p className="mt-1 text-xs text-slate-500">
                    Upload the resume you're using
                  </p>

                </div>

              </div>


              {/* UPLOAD */}

              <label className="flex h-36 cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-dashed border-stone-300 bg-stone-50 px-5 text-center transition hover:border-orange-400 hover:bg-orange-50">

                <input
                  ref={resumeInputRef}
                  type="file"
                  name="resume"
                  accept=".pdf,.doc,.docx"
                  className="hidden"
                  onChange={(e) => {
                    setResume(e.target.files[0]);
                  }}
                />

                <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-orange-100 text-lg text-orange-600">
                  ↑
                </div>

                {resume ? (
                  <>
                    <p className="text-sm font-semibold text-slate-900">
                      {resume.name}
                    </p>

                    <p className="mt-1 text-xs text-green-600">
                      Resume selected ✓
                    </p>
                  </>
                ) : (
                  <>
                    <p className="text-sm font-semibold text-slate-700">
                      Upload your resume
                    </p>

                    <p className="mt-1 text-xs text-slate-400">
                      PDF, DOC or DOCX · Maximum 5MB
                    </p>
                  </>
                )}

              </label>

            </div>


            {/* =================================================
                ABOUT YOU
            ================================================= */}

            <div>

              <div className="mb-4 flex gap-3">

                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-orange-100 font-bold text-orange-600">
                  03
                </div>

                <div>

                  <h2 className="text-lg font-bold text-slate-900">
                    About You
                  </h2>

                  <p className="mt-1 text-xs text-slate-500">
                    Tell AI about your background
                  </p>

                </div>

              </div>


              <textarea
                value={selfDescription}
                onChange={(e) => setSelfDescription(e.target.value)}
                name="selfDescription"
                id="selfDescription"
                placeholder="Tell us about your skills, projects, experience, strengths and career goals..."
                className="h-32 w-full resize-none rounded-xl border border-stone-200 bg-stone-50 p-4 text-sm leading-6 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-orange-500 focus:bg-white focus:ring-4 focus:ring-orange-100"
              />

            </div>

          </section>

        </div>


        {/* =================================================
            ANALYSIS PREVIEW
        ================================================= */}

        <section className="mt-6 rounded-2xl bg-orange-600 p-6 text-white shadow-lg">

          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-center">

            <div>

              <p className="mb-1 text-xs font-bold uppercase tracking-widest text-orange-100">
                AI ANALYSIS
              </p>

              <h2 className="text-xl font-bold">
                What you'll get
              </h2>

              <div className="mt-3 flex flex-wrap gap-2">

                <span className="rounded-full bg-white px-3 py-1 text-xs font-medium text-orange-600">
                  Job Match Score
                </span>

                <span className="rounded-full bg-white px-3 py-1 text-xs font-medium text-orange-600">
                  Skill Gaps
                </span>

                <span className="rounded-full bg-white px-3 py-1 text-xs font-medium text-orange-600">
                  Interview Questions
                </span>

                <span className="rounded-full bg-white px-3 py-1 text-xs font-medium text-orange-600">
                  Personalized Analysis
                </span>

              </div>

            </div>


            {/* GENERATE */}

            <button
              onClick={handleGenerateReport}
              disabled={loading}
              type="button"
              className="flex shrink-0 items-center justify-between gap-8 rounded-xl bg-white px-5 py-3 text-sm font-bold text-orange-600 transition hover:bg-orange-50 disabled:cursor-not-allowed disabled:opacity-60"
            >

              {loading ? "Analyzing..." : "Generate Interview Report"}

              <span className="text-xl">
                →
              </span>

            </button>

          </div>

        </section>


        {/* =================================================
            FOOTER
        ================================================= */}

        <div className="mt-5 flex justify-between text-xs text-slate-400">

          <span>
            AI-powered interview preparation
          </span>

          <span>
            01 — 03
          </span>

        </div>

      </div>

    </main>
  );
};

export default Home;