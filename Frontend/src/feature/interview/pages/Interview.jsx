
import { useInterview } from "../hooks/useinterview";
import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";

const Interview = () => {
  const { interviewId } = useParams();

  const { report, loading, getReportById } = useInterview();

  useEffect(() => {
    if (interviewId) {
      getReportById(interviewId);
    }
  }, [interviewId]);

  // =========================================================
  // LOADING
  // =========================================================

  if (loading || !report) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-stone-100">
        <div className="text-center">

          <div className="mx-auto h-10 w-10 animate-spin rounded-full border-4 border-stone-300 border-t-orange-600"></div>

          <p className="mt-4 text-sm font-semibold text-slate-700">
            Generating your interview report...
          </p>

          <p className="mt-1 text-xs text-slate-400">
            AI is analyzing your profile
          </p>

        </div>
      </main>
    );
  }

  const skillGaps = report.skillGaps || [];
  const technicalQuestions = report.technicalQuestions || [];
  const behavioralQuestions = report.behavioralQuestions || [];
  const preparationSkills = report.preparationSkills || [];

  const matchScore = report.matchScore || 0;

  return (
    <main className="min-h-screen bg-stone-100 text-slate-900">

      {/* =====================================================
          NAVBAR
      ===================================================== */}

      <header className="border-b border-stone-200 bg-white">

        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 lg:px-8">

          {/* LOGO */}

          <Link
            to="/dashboard"
            className="flex items-center gap-2"
          >

            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-orange-600 font-bold text-white">
              ↯
            </div>

            <span className="text-lg font-bold text-slate-900">
              InterviewPrep
            </span>

          </Link>

          {/* NAV ACTIONS */}

          <div className="flex items-center gap-3">

            <button
              onClick={() => window.print()}
              className="hidden rounded-lg border border-stone-200 px-4 py-2 text-sm font-medium text-slate-600 transition hover:bg-stone-50 sm:block"
            >
              Print Report
            </button>

            <Link
              to="/dashboard"
              className="rounded-lg bg-orange-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-orange-700"
            >
              Dashboard
            </Link>

          </div>

        </div>

      </header>

      {/* =====================================================
          PAGE CONTENT
      ===================================================== */}

      <div className="mx-auto max-w-7xl px-5 py-8 lg:px-8">

        {/* ===================================================
            HEADER
        =================================================== */}

        <div className="mb-8">

          <div className="mb-3 flex items-center gap-2">

            <div className="h-px w-8 bg-orange-600"></div>

            <span className="text-xs font-bold uppercase tracking-widest text-orange-600">
              AI Interview Analysis
            </span>

          </div>

          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">

            <div>

              <h1 className="text-4xl font-bold text-slate-900 md:text-5xl">
                Interview Report
              </h1>

              <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-500">
                Your personalized interview preparation report based on your
                job description, resume and background.
              </p>

            </div>

            <div className="rounded-xl border border-stone-200 bg-white px-4 py-3">

              <p className="text-xs font-medium text-slate-400">
                REPORT ID
              </p>

              <p className="mt-1 max-w-40 truncate text-xs font-semibold text-slate-700">
                {interviewId}
              </p>

            </div>

          </div>

        </div>

        {/* ===================================================
            MATCH SCORE
        =================================================== */}

        <section className="mb-6 overflow-hidden rounded-2xl bg-orange-600 p-6 text-white shadow-lg md:p-8">

          <div className="flex flex-col gap-8 md:flex-row md:items-center">

            {/* SCORE */}

            <div className="flex shrink-0 items-center justify-center">

              <div className="flex h-36 w-36 flex-col items-center justify-center rounded-full border-8 border-orange-400 bg-orange-700">

                <span className="text-4xl font-bold">
                  {matchScore}%
                </span>

                <span className="mt-1 text-xs text-orange-100">
                  JOB MATCH
                </span>

              </div>

            </div>

            {/* CONTENT */}

            <div className="flex-1">

              <p className="text-xs font-bold uppercase tracking-widest text-orange-100">
                Profile Match
              </p>

              <h2 className="mt-2 text-2xl font-bold md:text-3xl">
                Your current job compatibility
              </h2>

              <p className="mt-3 max-w-2xl text-sm leading-6 text-orange-100">
                This score represents how closely your current profile matches
                the requirements of the analyzed role.
              </p>

              {/* PROGRESS */}

              <div className="mt-6 max-w-xl">

                <div className="mb-2 flex justify-between text-xs">

                  <span className="text-orange-100">
                    Match strength
                  </span>

                  <span className="font-bold">
                    {matchScore}%
                  </span>

                </div>

                <div className="h-2 rounded-full bg-orange-800">

                  <div
                    className="h-2 rounded-full bg-white"
                    style={{
                      width: `${Math.min(matchScore, 100)}%`,
                    }}
                  ></div>

                </div>

              </div>

            </div>

          </div>

        </section>

        {/* ===================================================
            OVERVIEW CARDS
        =================================================== */}

        <div className="mb-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

          {/* MATCH */}

          <div className="rounded-2xl border border-stone-200 bg-white p-5 shadow-sm">

            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-orange-100 font-bold text-orange-600">
              %
            </div>

            <p className="text-xs text-slate-500">
              Match Score
            </p>

            <p className="mt-1 text-2xl font-bold text-slate-900">
              {matchScore}%
            </p>

          </div>

          {/* GAPS */}

          <div className="rounded-2xl border border-stone-200 bg-white p-5 shadow-sm">

            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-red-50 font-bold text-red-600">
              !
            </div>

            <p className="text-xs text-slate-500">
              Skill Gaps
            </p>

            <p className="mt-1 text-2xl font-bold text-slate-900">
              {skillGaps.length}
            </p>

          </div>

          {/* TECHNICAL */}

          <div className="rounded-2xl border border-stone-200 bg-white p-5 shadow-sm">

            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 font-bold text-blue-600">
              ?
            </div>

            <p className="text-xs text-slate-500">
              Technical Questions
            </p>

            <p className="mt-1 text-2xl font-bold text-slate-900">
              {technicalQuestions.length}
            </p>

          </div>

          {/* BEHAVIORAL */}

          <div className="rounded-2xl border border-stone-200 bg-white p-5 shadow-sm">

            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-green-50 font-bold text-green-600">
              ✓
            </div>

            <p className="text-xs text-slate-500">
              HR Questions
            </p>

            <p className="mt-1 text-2xl font-bold text-slate-900">
              {behavioralQuestions.length}
            </p>

          </div>

        </div>

        {/* ===================================================
            SKILL GAPS
        =================================================== */}

        <section className="mb-6 rounded-2xl border border-stone-200 bg-white p-6 shadow-sm lg:p-7">

          <div className="mb-6">

            <p className="text-xs font-bold uppercase tracking-widest text-orange-600">
              01
            </p>

            <h2 className="mt-2 text-2xl font-bold text-slate-900">
              Skill Gaps
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              Areas that may need additional preparation.
            </p>

          </div>

          {skillGaps.length === 0 ? (

            <div className="rounded-xl bg-green-50 p-5 text-sm font-medium text-green-700">
              No major skill gaps were identified.
            </div>

          ) : (

            <div className="grid gap-4 md:grid-cols-2">

              {skillGaps.map((gap, index) => (

                <div
                  key={index}
                  className="flex items-center justify-between rounded-xl border border-stone-200 bg-stone-50 p-5"
                >

                  <div className="flex items-center gap-4">

                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-sm font-bold text-orange-600 shadow-sm">
                      {index + 1}
                    </div>

                    <div>

                      <h3 className="font-bold text-slate-900">
                        {gap.skill}
                      </h3>

                      <p className="mt-1 text-xs text-slate-500">
                        Preparation priority
                      </p>

                    </div>

                  </div>

                  <span
                    className={`rounded-full px-3 py-1 text-xs font-bold capitalize ${
                      gap.severity === "high"
                        ? "bg-red-100 text-red-700"
                        : gap.severity === "medium"
                          ? "bg-yellow-100 text-yellow-700"
                          : "bg-green-100 text-green-700"
                    }`}
                  >
                    {gap.severity}
                  </span>

                </div>

              ))}

            </div>

          )}

        </section>

        {/* ===================================================
            TECHNICAL QUESTIONS
        =================================================== */}

        <section className="mb-6 rounded-2xl border border-stone-200 bg-white p-6 shadow-sm lg:p-7">

          <div className="mb-7">

            <p className="text-xs font-bold uppercase tracking-widest text-orange-600">
              02
            </p>

            <h2 className="mt-2 text-2xl font-bold text-slate-900">
              Technical Questions
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              Questions generated from your skills and job requirements.
            </p>

          </div>

          {technicalQuestions.length === 0 ? (

            <div className="rounded-xl bg-stone-50 p-5 text-sm text-slate-500">
              No technical questions available.
            </div>

          ) : (

            <div className="space-y-4">

              {technicalQuestions.map((item, index) => (

                <div
                  key={index}
                  className="rounded-2xl border border-stone-200 bg-stone-50 p-5 md:p-6"
                >

                  <div className="flex gap-4">

                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-orange-600 text-sm font-bold text-white">
                      {index + 1}
                    </div>

                    <div className="min-w-0 flex-1">

                      <h3 className="text-base font-bold leading-6 text-slate-900 md:text-lg">
                        {item.question}
                      </h3>

                      {/* INTERVIEWER INTENTION */}

                      <div className="mt-5 border-l-2 border-orange-300 pl-4">

                        <p className="text-xs font-bold uppercase tracking-wider text-orange-600">
                          Interviewer Intention
                        </p>

                        <p className="mt-2 text-sm leading-6 text-slate-600">
                          {item.intention}
                        </p>

                      </div>

                      {/* ANSWER */}

                      <div className="mt-5 rounded-xl border border-stone-200 bg-white p-5">

                        <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                          Suggested Answer
                        </p>

                        <p className="mt-2 text-sm leading-6 text-slate-700">
                          {item.answer}
                        </p>

                      </div>

                    </div>

                  </div>

                </div>

              ))}

            </div>

          )}

        </section>

        {/* ===================================================
            BEHAVIORAL QUESTIONS
        =================================================== */}

        <section className="mb-6 rounded-2xl bg-slate-900 p-6 text-white shadow-lg lg:p-7">

          <div className="mb-7">

            <p className="text-xs font-bold uppercase tracking-widest text-orange-400">
              03
            </p>

            <h2 className="mt-2 text-2xl font-bold">
              Behavioral & HR Questions
            </h2>

            <p className="mt-1 text-sm text-slate-400">
              Prepare structured answers for your HR interview.
            </p>

          </div>

          {behavioralQuestions.length === 0 ? (

            <div className="rounded-xl bg-slate-800 p-5 text-sm text-slate-400">
              No behavioral questions available.
            </div>

          ) : (

            <div className="space-y-4">

              {behavioralQuestions.map((item, index) => (

                <div
                  key={index}
                  className="rounded-2xl border border-slate-700 bg-slate-800 p-5 md:p-6"
                >

                  <div className="flex gap-4">

                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-orange-600 text-sm font-bold text-white">
                      {index + 1}
                    </div>

                    <div className="min-w-0 flex-1">

                      <h3 className="text-base font-bold leading-6 md:text-lg">
                        {item.question}
                      </h3>

                      <div className="mt-5">

                        <p className="text-xs font-bold uppercase tracking-wider text-orange-400">
                          Interviewer Intention
                        </p>

                        <p className="mt-2 text-sm leading-6 text-slate-400">
                          {item.intention}
                        </p>

                      </div>

                      <div className="mt-5 rounded-xl bg-slate-900 p-5">

                        <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
                          Suggested Answer
                        </p>

                        <p className="mt-2 text-sm leading-6 text-slate-300">
                          {item.answer}
                        </p>

                      </div>

                    </div>

                  </div>

                </div>

              ))}

            </div>

          )}

        </section>

        {/* ===================================================
            PREPARATION ROADMAP
        =================================================== */}

        <section className="mb-6 rounded-2xl border border-stone-200 bg-white p-6 shadow-sm lg:p-7">

          <div className="mb-7">

            <p className="text-xs font-bold uppercase tracking-widest text-orange-600">
              04
            </p>

            <h2 className="mt-2 text-2xl font-bold text-slate-900">
              Preparation Roadmap
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              Follow these preparation steps based on your identified gaps.
            </p>

          </div>

          {preparationSkills.length === 0 ? (

            <div className="rounded-xl bg-stone-50 p-5 text-sm text-slate-500">
              No preparation roadmap available.
            </div>

          ) : (

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">

              {preparationSkills.map((day, index) => (

                <div
                  key={index}
                  className="rounded-xl border border-stone-200 bg-stone-50 p-5 transition hover:border-orange-300 hover:bg-orange-50"
                >

                  <div className="flex items-center justify-between">

                    <span className="text-xs font-bold uppercase tracking-wider text-orange-600">
                      {day.day}
                    </span>

                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-orange-100 text-xs font-bold text-orange-600">
                      {index + 1}
                    </span>

                  </div>

                  <h3 className="mt-4 font-bold text-slate-900">
                    {day.focus}
                  </h3>

                  <div className="my-4 h-px bg-stone-200"></div>

                  <p className="text-xs leading-5 text-slate-600">
                    {day.task}
                  </p>

                </div>

              ))}

            </div>

          )}

        </section>

        {/* ===================================================
            NEXT ACTION
        =================================================== */}

        <section className="mb-8 rounded-2xl bg-orange-600 p-6 text-white">

          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-center">

            <div>

              <p className="text-xs font-bold uppercase tracking-widest text-orange-100">
                NEXT STEP
              </p>

              <h2 className="mt-1 text-xl font-bold">
                Ready to practice?
              </h2>

              <p className="mt-1 text-sm text-orange-100">
                Use your personalized questions to start preparing for the
                interview.
              </p>

            </div>

            <Link
              to={`/interview/${interviewId}/mock`}
              className="inline-flex items-center justify-center rounded-xl bg-white px-5 py-3 text-sm font-bold text-orange-600 transition hover:bg-orange-50"
            >
              Start Mock Interview →
            </Link>

          </div>

        </section>

        {/* ===================================================
            FOOTER
        =================================================== */}

        <footer className="flex flex-col justify-between gap-3 border-t border-stone-200 pt-5 text-xs text-slate-400 sm:flex-row">

          <span>
            AI-powered interview preparation
          </span>

          <div className="flex gap-5">

            <button
              onClick={() => window.print()}
              className="font-medium hover:text-orange-600"
            >
              Print Report
            </button>

            <Link
              to="/dashboard"
              className="font-medium hover:text-orange-600"
            >
              Back to Dashboard
            </Link>

          </div>

        </footer>

      </div>

    </main>
  );
};

export default Interview;