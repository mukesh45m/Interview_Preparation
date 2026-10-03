import React, { useEffect, useMemo } from "react";
import { Link } from "react-router-dom";
import { useInterview } from "../../interview/hooks/useinterview";
import { useAuth } from "../hooks/useauth";

const Dashboard = () => {
  const { reports, report, loading, getReports } = useInterview();
  const { handleLogout, user } = useAuth();

  useEffect(() => {
    getReports();
  }, []);

  // ================= LATEST REPORT =================

  const latestReport = useMemo(() => {
    if (!reports || reports.length === 0) {
      return null;
    }

    return [...reports].sort(
      (a, b) => new Date(b.createdAt) - new Date(a.createdAt),
    )[0];
  }, [reports]);

  // ================= DASHBOARD STATS =================

  const stats = useMemo(() => {
    if (!latestReport) {
      return {
        matchScore: 0,
        skillGaps: 0,
        questions: 0,
        interviews: reports?.length || 0,
      };
    }

    const skillGaps = report?.skillGaps?.length || 0;

    const technicalQuestions = latestReport.technicalQuestions?.length || 0;

    const behavioralQuestions = latestReport.behavioralQuestions?.length || 0;

    return {
      matchScore: latestReport.matchScore || 0,
      skillGaps,
      questions: technicalQuestions + behavioralQuestions,
      interviews: reports?.length || 0,
    };
  }, [latestReport, reports]);

  // ================= LOADING =================

  if (loading) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-stone-100">
        <div className="text-center">
          <div className="mx-auto h-10 w-10 animate-spin rounded-full border-4 border-stone-300 border-t-orange-600"></div>

          <p className="mt-4 text-sm font-medium text-slate-600">
            Loading dashboard...
          </p>
        </div>
      </main>
    );
  }
  // console.log(user);

  return (
    <main className="min-h-screen bg-stone-100 text-slate-900">
      {/* =====================================================
          NAVBAR
      ===================================================== */}

      <header className="border-b border-stone-200 bg-white">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 lg:px-8">
          {/* LOGO */}

          <Link to="/" className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-orange-600 font-bold text-white">
              ↯
            </div>

            <span className="text-lg font-bold text-slate-900">
              InterviewPrep
            </span>
          </Link>

          {/* PROFILE + LOGOUT */}

          <div className="flex items-center gap-3">
            <div className="hidden text-right sm:block">
              <p className="text-sm font-semibold text-slate-900">
                {user?.username || "Candidate"}
              </p>

              <p className="text-xs text-slate-500">Interview Preparation</p>
            </div>

            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-orange-600 font-semibold text-white">
              C
            </div>

            <button
              onClick={handleLogout}
              className="rounded-lg border border-stone-200 px-3 py-2 text-sm font-semibold text-slate-600 transition hover:border-red-200 hover:bg-red-50 hover:text-red-600"
            >
              Logout
            </button>
          </div>
        </div>
      </header>

      {/* =====================================================
          DASHBOARD WRAPPER
      ===================================================== */}

      <div className="mx-auto flex max-w-7xl">
        {/* ===================================================
            SIDEBAR
        =================================================== */}

        <aside className="hidden w-60 shrink-0 border-r border-stone-200 bg-white lg:block">
          <div className="sticky top-0 p-5">
            <p className="mb-4 px-3 text-xs font-bold uppercase tracking-wider text-slate-400">
              Dashboard
            </p>

            {/* OVERVIEW */}

            <Link
              to="/dashboard"
              className="mb-1 flex items-center gap-3 rounded-xl bg-orange-50 px-3 py-3 text-sm font-semibold text-orange-600"
            >
              <span>⌂</span>
              Overview
            </Link>

            {/* ANALYZE */}

            <Link
              to="/home"
              className="mb-1 flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-medium text-slate-600 transition hover:bg-stone-100"
            >
              <span>✦</span>
              Analyze Job
            </Link>

            {/* QUESTIONS */}

            <Link
              to="/questions"
              className="mb-1 flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-medium text-slate-600 transition hover:bg-stone-100"
            >
              <span>?</span>
              Interview Questions
            </Link>

            {/* MOCK INTERVIEW */}

            <Link
              to="/mock-interview"
              className="mb-1 flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-medium text-slate-600 transition hover:bg-stone-100"
            >
              <span>◉</span>
              Mock Interview
            </Link>

            {/* HISTORY */}

            <Link
              to="/interview"
              className="mb-1 flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-medium text-slate-600 transition hover:bg-stone-100"
            >
              <span>◷</span>
              History
            </Link>

            <div className="my-6 border-t border-stone-200"></div>

            {/* ACCOUNT */}

            <p className="mb-4 px-3 text-xs font-bold uppercase tracking-wider text-slate-400">
              Account
            </p>

            {/* PROFILE */}

            <Link
              to="/profile"
              className="mb-1 flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-medium text-slate-600 transition hover:bg-stone-100"
            >
              <span>◎</span>
              Profile
            </Link>

            {/* SETTINGS */}

            <Link
              to="/settings"
              className="mb-1 flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-medium text-slate-600 transition hover:bg-stone-100"
            >
              <span>⚙</span>
              Settings
            </Link>

            {/* LOGOUT */}

            <button
              onClick={handleLogout}
              className="mt-1 flex w-full items-center gap-3 rounded-xl px-3 py-3 text-sm font-medium text-red-600 transition hover:bg-red-50"
            >
              <span>↪</span>
              Logout
            </button>
          </div>
        </aside>

        {/* ===================================================
            MAIN CONTENT
        =================================================== */}

        <section className="min-w-0 flex-1 p-5 lg:p-8">
          {/* =================================================
              WELCOME
          ================================================= */}

          <div className="mb-7">
            <p className="mb-1 text-sm font-semibold text-orange-600">
              DASHBOARD
            </p>

            <h1 className="text-3xl font-bold text-slate-900">
              Welcome back 👋
            </h1>

            <p className="mt-2 text-sm text-slate-500">
              Track your interview preparation and improve your job readiness.
            </p>
          </div>

          {/* =================================================
              QUICK ACTION
          ================================================= */}

          <div className="mb-7 rounded-2xl bg-orange-600 p-6 text-white shadow-lg">
            <div className="flex flex-col justify-between gap-5 md:flex-row md:items-center">
              <div>
                <p className="mb-2 text-sm font-semibold text-orange-100">
                  READY TO PREPARE?
                </p>

                <h2 className="text-2xl font-bold">Analyze a new job</h2>

                <p className="mt-2 max-w-xl text-sm text-orange-100">
                  Add a job description and your resume to get your job match
                  score, skill gaps and personalized interview questions.
                </p>
              </div>

              <Link
                to="/home"
                className="inline-flex shrink-0 items-center justify-center rounded-xl bg-white px-5 py-3 text-sm font-bold text-orange-600 transition hover:bg-orange-50"
              >
                Analyze Job →
              </Link>
            </div>
          </div>

          {/* =================================================
              STATS
          ================================================= */}

          <div className="mb-7 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {/* JOB MATCH */}

            <div className="rounded-2xl border border-stone-200 bg-white p-5 shadow-sm">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-orange-100 text-orange-600">
                %
              </div>

              <p className="text-sm text-slate-500">Latest Job Match</p>

              <p className="mt-1 text-3xl font-bold text-slate-900">
                {stats.matchScore}%
              </p>
            </div>

            {/* SKILL GAPS */}

            <div className="rounded-2xl border border-stone-200 bg-white p-5 shadow-sm">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-red-50 text-red-500">
                !
              </div>

              <p className="text-sm text-slate-500">Skill Gaps</p>

              <p className="mt-1 text-3xl font-bold text-slate-900">
                {stats.skillGaps}
              </p>
            </div>

            {/* QUESTIONS */}

            <div className="rounded-2xl border border-stone-200 bg-white p-5 shadow-sm">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                ?
              </div>

              <p className="text-sm text-slate-500">Questions</p>

              <p className="mt-1 text-3xl font-bold text-slate-900">
                {stats.questions}
              </p>
            </div>

            {/* REPORTS */}

            <div className="rounded-2xl border border-stone-200 bg-white p-5 shadow-sm">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-green-50 text-green-600">
                ✓
              </div>

              <p className="text-sm text-slate-500">Interview Reports</p>

              <p className="mt-1 text-3xl font-bold text-slate-900">
                {stats.interviews}
              </p>
            </div>
          </div>

          {/* =================================================
              NO REPORT STATE
          ================================================= */}

          {!latestReport ? (
            <div className="rounded-2xl border border-stone-200 bg-white p-10 text-center shadow-sm">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-100 text-2xl text-orange-600">
                ✦
              </div>

              <h2 className="mt-5 text-xl font-bold text-slate-900">
                Start your first job analysis
              </h2>

              <p className="mx-auto mt-2 max-w-md text-sm text-slate-500">
                Upload your resume and add a job description. InterviewPrep will
                analyze your profile and generate personalized interview
                preparation.
              </p>

              <Link
                to="/analyze"
                className="mt-6 inline-flex rounded-xl bg-orange-600 px-5 py-3 text-sm font-bold text-white transition hover:bg-orange-700"
              >
                Analyze Your First Job →
              </Link>
            </div>
          ) : (
            <>
              {/* =============================================
                  LATEST REPORT + QUICK PRACTICE
              ============================================= */}

              <div className="grid gap-6 lg:grid-cols-3">
                {/* LATEST REPORT */}

                <div className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm lg:col-span-2">
                  <div className="mb-6 flex items-center justify-between">
                    <div>
                      <h2 className="text-lg font-bold text-slate-900">
                        Latest Job Analysis
                      </h2>

                      <p className="mt-1 text-xs text-slate-500">
                        Your most recent interview report
                      </p>
                    </div>

                    <Link
                      to="/interview"
                      className="text-xs font-semibold text-orange-600 hover:text-orange-700"
                    >
                      View History
                    </Link>
                  </div>

                  <div className="rounded-xl bg-stone-50 p-5">
                    <div className="flex flex-col justify-between gap-5 sm:flex-row">
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wide text-orange-600">
                          Interview Report
                        </p>

                        <h3 className="mt-1 text-xl font-bold text-slate-900">
                          {latestReport.title || "Job Analysis"}
                        </h3>

                        <p className="mt-2 text-xs text-slate-500">
                          Created on{" "}
                          {new Date(
                            latestReport.createdAt,
                          ).toLocaleDateString()}
                        </p>
                      </div>

                      {/* MATCH SCORE */}

                      <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full border-4 border-orange-500 text-xl font-bold text-slate-900">
                        {latestReport.matchScore || 0}%
                      </div>
                    </div>

                    {/* PROGRESS */}

                    <div className="mt-6">
                      <div className="mb-2 flex justify-between text-xs">
                        <span className="font-medium text-slate-600">
                          Job compatibility
                        </span>

                        <span className="font-semibold text-orange-600">
                          {latestReport.matchScore || 0}%
                        </span>
                      </div>

                      <div className="h-2 rounded-full bg-stone-200">
                        <div
                          className="h-2 rounded-full bg-orange-600"
                          style={{
                            width: `${Math.min(
                              latestReport.matchScore || 0,
                              100,
                            )}%`,
                          }}
                        ></div>
                      </div>
                    </div>

                    {/* SKILL GAPS */}

                    {latestReport.skillGaps?.length > 0 && (
                      <div className="mt-5 flex flex-wrap gap-2">
                        {latestReport.skillGaps
                          .slice(0, 4)
                          .map((skill, index) => (
                            <span
                              key={index}
                              className="rounded-full bg-red-50 px-3 py-1 text-xs font-medium text-red-600"
                            >
                              {skill.skill ||
                                skill.name ||
                                skill.title ||
                                "Skill Gap"}
                            </span>
                          ))}
                      </div>
                    )}

                    {/* VIEW REPORT */}

                    <Link
                      to={`/interview/${latestReport._id}`}
                      className="mt-6 inline-flex rounded-xl bg-orange-600 px-5 py-3 text-sm font-bold text-white transition hover:bg-orange-700"
                    >
                      View Full Report →
                    </Link>
                  </div>
                </div>

                {/* =========================================
                    QUICK PRACTICE
                ========================================= */}

                <div className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm">
                  <h2 className="text-lg font-bold text-slate-900">
                    Quick Practice
                  </h2>

                  <p className="mt-1 text-xs text-slate-500">
                    Continue preparing for your interview
                  </p>

                  <div className="mt-5 space-y-3">
                    {/* QUESTIONS */}

                    <Link
                      to={`/interview/${latestReport._id}`}
                      className="block rounded-xl border border-stone-200 p-4 transition hover:border-orange-300 hover:bg-orange-50"
                    >
                      <p className="text-sm font-semibold text-slate-900">
                        Interview Questions
                      </p>

                      <p className="mt-1 text-xs text-slate-500">
                        Practice your generated questions
                      </p>
                    </Link>

                    {/* MOCK */}

                    <Link
                      to={`/interview/${latestReport._id}/mock`}
                      className="block rounded-xl border border-stone-200 p-4 transition hover:border-orange-300 hover:bg-orange-50"
                    >
                      <p className="text-sm font-semibold text-slate-900">
                        AI Mock Interview
                      </p>

                      <p className="mt-1 text-xs text-slate-500">
                        Start a realistic interview
                      </p>
                    </Link>

                    {/* HISTORY */}

                    <Link
                      to="/history"
                      className="block rounded-xl border border-stone-200 p-4 transition hover:border-orange-300 hover:bg-orange-50"
                    >
                      <p className="text-sm font-semibold text-slate-900">
                        Previous Reports
                      </p>

                      <p className="mt-1 text-xs text-slate-500">
                        Review your interview history
                      </p>
                    </Link>
                  </div>
                </div>
              </div>

              {/* =============================================
                  SKILL GAPS
              ============================================= */}

              {latestReport.skillGaps?.length > 0 && (
                <div className="mt-6 rounded-2xl border border-stone-200 bg-white p-6 shadow-sm">
                  <div className="mb-5 flex items-center justify-between">
                    <div>
                      <h2 className="text-lg font-bold text-slate-900">
                        Your Skill Gaps
                      </h2>

                      <p className="mt-1 text-xs text-slate-500">
                        Skills identified from your latest job analysis
                      </p>
                    </div>
                  </div>

                  <div className="grid gap-4 md:grid-cols-3">
                    {latestReport.skillGaps.slice(0, 3).map((skill, index) => {
                      const level = skill.level || skill.priority || "Medium";

                      const skillName =
                        skill.skill || skill.name || skill.title || "Skill";

                      const isHigh = level.toLowerCase() === "high";

                      return (
                        <div
                          key={index}
                          className={
                            isHigh
                              ? "rounded-xl bg-red-50 p-4"
                              : "rounded-xl bg-orange-50 p-4"
                          }
                        >
                          <div className="flex items-center justify-between">
                            <p className="text-sm font-semibold text-slate-900">
                              {skillName}
                            </p>

                            <span
                              className={
                                isHigh
                                  ? "text-xs font-bold text-red-600"
                                  : "text-xs font-bold text-orange-600"
                              }
                            >
                              {level}
                            </span>
                          </div>

                          <div className="mt-3 h-2 rounded-full bg-white">
                            <div
                              className={
                                isHigh
                                  ? "h-2 w-1/4 rounded-full bg-red-500"
                                  : "h-2 w-2/5 rounded-full bg-orange-500"
                              }
                            ></div>
                          </div>

                          <p className="mt-2 text-xs text-slate-500">
                            Needs preparation
                          </p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </>
          )}
        </section>
      </div>
    </main>
  );
};

export default Dashboard;
