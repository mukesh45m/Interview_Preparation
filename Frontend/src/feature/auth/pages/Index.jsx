import React from "react";
import { Link } from "react-router-dom";

const features = [
  {
    icon: "↗",
    title: "Job Match Score",
    text: "Compare your resume with the job description and get an AI-powered compatibility score.",
    bg: "bg-orange-100",
    color: "text-orange-600",
  },
  {
    icon: "⌁",
    title: "Skill Gap Analysis",
    text: "Find the skills you already have and the important skills missing for the target role.",
    bg: "bg-emerald-100",
    color: "text-emerald-600",
  },
  {
    icon: "?",
    title: "Personalized Questions",
    text: "Get interview questions generated specifically from your job and profile.",
    bg: "bg-amber-100",
    color: "text-amber-600",
  },
  {
    icon: "◉",
    title: "AI Interview Feedback",
    text: "Practice realistic interviews and receive AI-powered feedback on your answers.",
    bg: "bg-violet-100",
    color: "text-violet-600",
  },
];

const steps = [
  {
    number: "01",
    title: "Add Job Description",
    text: "Paste the job description of the role you want to apply for.",
  },
  {
    number: "02",
    title: "Add Your Profile",
    text: "Upload your resume or describe your skills and experience.",
  },
  {
    number: "03",
    title: "AI Finds the Gap",
    text: "AI compares the job requirements with your profile and finds skill gaps.",
  },
  {
    number: "04",
    title: "Practice Interview",
    text: "Get personalized questions and improve your answers with AI feedback.",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-stone-100 text-slate-900">
      {/* ================= NAVBAR ================= */}

      <header className="border-b border-stone-200 bg-white/90 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 lg:px-8">
          {/* LOGO */}
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-orange-600 font-bold text-white">
              ↯
            </div>

            <span className="text-lg font-bold">InterviewPrep</span>
          </div>

          {/* NAVIGATION */}
          <nav className="hidden items-center gap-7 md:flex">
            <a href="#home" className="font-medium text-orange-600">
              Home
            </a>

            <a
              href="#features"
              className="text-sm text-slate-600 transition hover:text-orange-600"
            >
              Features
            </a>

            <a
              href="#how-it-works"
              className="text-sm text-slate-600 transition hover:text-orange-600"
            >
              How it works
            </a>

            <a
              href="#analysis"
              className="text-sm text-slate-600 transition hover:text-orange-600"
            >
              AI Analysis
            </a>

            <a
              href="#pricing"
              className="text-sm text-slate-600 transition hover:text-orange-600"
            >
              Pricing
            </a>
          </nav>

          {/* BUTTONS */}
          <div className="flex items-center gap-2">
            <Link
              to="/login"
              className="rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-semibold transition hover:bg-slate-50"
            >
              Login
            </Link>

            <Link
            to="/register"

            className="rounded-lg bg-orange-600 px-4 py-2 text-sm font-bold text-white shadow-md shadow-orange-200 transition hover:bg-orange-700">
              Get Started →
            </Link>
          </div>
        </div>
      </header>

      {/* ================= HERO ================= */}

      <section
        id="home"
        className="mx-auto grid max-w-7xl overflow-hidden lg:grid-cols-2"
      >
        {/* LEFT */}

        <div className="flex flex-col justify-center px-6 py-16 sm:px-10 lg:px-12">
          {/* BADGE */}

          <div className="mb-5 w-fit rounded-full bg-orange-100 px-4 py-2 text-xs font-semibold text-slate-700">
            <span className="mr-2 text-orange-600">✦</span>
            AI-Powered Interview Preparation
          </div>

          {/* HEADING */}

          <h1 className="font-serif text-5xl font-bold leading-tight tracking-tight sm:text-6xl">
            Prepare For
            <br />
            <span className="text-orange-600">Your Actual Job.</span>
          </h1>

          {/* DESCRIPTION */}

          <p className="mt-6 max-w-xl text-base leading-7 text-slate-600">
            Give us the job description and your resume or self-description. Our
            AI analyzes your profile, finds your skill gaps, calculates your job
            match score, and prepares interview questions specifically for you.
          </p>

          {/* BUTTONS */}

          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <button className="rounded-lg bg-orange-600 px-6 py-3 font-semibold text-white shadow-lg shadow-orange-200 transition hover:bg-orange-700">
              Analyze My Job →
            </button>

            <button className="rounded-lg border border-slate-300 bg-white px-6 py-3 font-semibold transition hover:bg-slate-50">
              See How It Works
            </button>
          </div>

          {/* STATS */}

          <div className="mt-10 flex">
            <div className="border-r border-slate-300 pr-6">
              <strong className="block text-xl text-orange-600">JD</strong>

              <span className="text-xs text-slate-500">Job Analysis</span>
            </div>

            <div className="border-r border-slate-300 px-6">
              <strong className="block text-xl text-orange-600">AI</strong>

              <span className="text-xs text-slate-500">Skill Matching</span>
            </div>

            <div className="pl-6">
              <strong className="block text-xl text-orange-600">1:1</strong>

              <span className="text-xs text-slate-500">Personalized Prep</span>
            </div>
          </div>
        </div>

        {/* RIGHT */}

        <div className="relative min-h-480px overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1400&q=85"
            alt="Interview preparation"
            className="absolute inset-0 h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-linear-to-r from-stone-100/20 to-black/20" />

          {/* AI JOB SCORE */}

          <div className="absolute left-6 top-8 z-10 w-60 rounded-2xl bg-white p-5 shadow-2xl">
            <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
              AI Job Analysis
            </p>

            <h3 className="mt-1 font-bold">Frontend Developer</h3>

            <div className="mt-5 flex items-center gap-4">
              <div className="flex h-20 w-20 items-center justify-center rounded-full border-8 border-orange-500 bg-white">
                <div className="text-center">
                  <strong className="block text-lg">78%</strong>

                  <span className="text-[10px] text-slate-500">Match</span>
                </div>
              </div>

              <div className="space-y-2 text-xs">
                <div>🟢 Strong Skills</div>

                <div>🟡 Partial Match</div>

                <div>🔴 Skill Gap</div>
              </div>
            </div>
          </div>

          {/* SKILL GAP */}

          <div className="absolute bottom-8 left-6 z-10 w-64 rounded-xl bg-slate-900 p-5 text-white shadow-2xl">
            <p className="text-xs font-bold uppercase tracking-widest text-slate-400">
              Skill Gap Detected
            </p>

            <div className="mt-4 space-y-4">
              <div>
                <div className="mb-1 flex justify-between text-xs">
                  <span>React</span>
                  <span className="text-green-400">Strong</span>
                </div>

                <div className="h-1.5 rounded-full bg-slate-700">
                  <div className="h-full w-11/12 rounded-full bg-green-400" />
                </div>
              </div>

              <div>
                <div className="mb-1 flex justify-between text-xs">
                  <span>TypeScript</span>
                  <span className="text-yellow-400">Improve</span>
                </div>

                <div className="h-1.5 rounded-full bg-slate-700">
                  <div className="h-full w-1/2 rounded-full bg-yellow-400" />
                </div>
              </div>

              <div>
                <div className="mb-1 flex justify-between text-xs">
                  <span>Testing</span>
                  <span className="text-red-400">Gap</span>
                </div>

                <div className="h-1.5 rounded-full bg-slate-700">
                  <div className="h-full w-1/3 rounded-full bg-red-400" />
                </div>
              </div>
            </div>
          </div>

          {/* QUESTIONS */}

          <div className="absolute right-5 top-64 z-10 w-56 rotate--3deg rounded-lg bg-yellow-100 p-4 shadow-xl">
            <p className="text-xs font-bold uppercase text-slate-500">
              AI Questions
            </p>

            <div className="mt-3 space-y-2 text-xs leading-5">
              <p>01. Explain how you would optimize a React application.</p>

              <p>02. Tell me about a difficult project you solved.</p>

              <p>03. How would you handle API errors?</p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= FEATURES ================= */}

      <section
        id="features"
        className="mx-auto grid max-w-7xl gap-3 bg-stone-200 p-4 sm:grid-cols-2 lg:grid-cols-4"
      >
        {features.map((feature) => (
          <div
            key={feature.title}
            className="rounded-xl border border-stone-200 bg-white p-5 transition hover:-translate-y-1 hover:shadow-lg"
          >
            <div
              className={`mb-4 flex h-10 w-10 items-center justify-center rounded-lg text-lg font-bold ${feature.bg} ${feature.color}`}
            >
              {feature.icon}
            </div>

            <h3 className="font-bold">{feature.title}</h3>

            <p className="mt-2 text-sm leading-5 text-slate-500">
              {feature.text}
            </p>
          </div>
        ))}
      </section>

      {/* ================= AI ANALYSIS ================= */}

      <section
        id="analysis"
        className="mx-auto max-w-7xl bg-white px-6 py-20 lg:px-12"
      >
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-xs font-bold tracking-widest text-orange-600">
            YOUR AI CAREER ANALYST
          </span>

          <h2 className="mt-3 font-serif text-4xl font-bold sm:text-5xl">
            One job.
            <br />
            One profile.
            <br />
            <span className="text-orange-600">Personalized preparation.</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-7 text-slate-600">
            InterviewPrep doesn't give you random interview questions. It
            understands the specific job you are applying for and compares it
            with your actual skills and experience.
          </p>
        </div>

        {/* INPUT CARDS */}

        <div className="mx-auto mt-12 grid max-w-5xl gap-5 lg:grid-cols-3">
          {/* JOB */}

          <div className="rounded-2xl border border-slate-200 bg-stone-50 p-6">
            <div className="mb-5 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-orange-100 font-bold text-orange-600">
                JD
              </div>

              <div>
                <h3 className="font-bold">Your Job</h3>

                <p className="text-xs text-slate-500">Job Description</p>
              </div>
            </div>

            <div className="rounded-lg border border-dashed border-slate-300 bg-white p-4 text-sm leading-6 text-slate-500">
              "We are looking for a React Developer with experience in
              JavaScript, TypeScript, REST APIs, Git and testing..."
            </div>
          </div>

          {/* AI */}

          <div className="flex items-center justify-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-orange-600 font-bold text-white shadow-xl shadow-orange-200">
              AI
            </div>
          </div>

          {/* RESUME */}

          <div className="rounded-2xl border border-slate-200 bg-stone-50 p-6">
            <div className="mb-5 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-violet-100 font-bold text-violet-600">
                CV
              </div>

              <div>
                <h3 className="font-bold">Your Profile</h3>

                <p className="text-xs text-slate-500">
                  Resume / Self Description
                </p>
              </div>
            </div>

            <div className="rounded-lg border border-dashed border-slate-300 bg-white p-4 text-sm leading-6 text-slate-500">
              "Frontend developer with React, JavaScript and experience building
              REST API based applications..."
            </div>
          </div>
        </div>

        {/* RESULT */}

        <div className="mx-auto mt-5 max-w-5xl rounded-2xl bg-slate-900 p-6 text-white">
          <div className="grid gap-6 sm:grid-cols-3">
            <div>
              <p className="text-xs uppercase tracking-widest text-slate-400">
                Job Match
              </p>

              <p className="mt-2 text-4xl font-bold text-orange-500">78%</p>

              <p className="mt-1 text-xs text-slate-400">
                Overall compatibility
              </p>
            </div>

            <div>
              <p className="text-xs uppercase tracking-widest text-slate-400">
                Skill Gaps
              </p>

              <div className="mt-3 flex flex-wrap gap-2">
                <span className="rounded-full bg-red-500/10 px-3 py-1 text-xs text-red-300">
                  Testing
                </span>

                <span className="rounded-full bg-yellow-500/10 px-3 py-1 text-xs text-yellow-300">
                  TypeScript
                </span>

                <span className="rounded-full bg-yellow-500/10 px-3 py-1 text-xs text-yellow-300">
                  CI/CD
                </span>
              </div>
            </div>

            <div>
              <p className="text-xs uppercase tracking-widest text-slate-400">
                AI Preparation
              </p>

              <p className="mt-2 text-xl font-bold">15 Questions</p>

              <p className="mt-1 text-xs text-slate-400">
                Generated for this specific role
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= HOW IT WORKS ================= */}

      <section
        id="how-it-works"
        className="mx-auto max-w-7xl bg-stone-50 px-6 py-20 lg:px-12"
      >
        <div className="text-center">
          <span className="text-xs font-bold tracking-widest text-orange-600">
            HOW IT WORKS
          </span>

          <h2 className="mt-3 font-serif text-4xl font-bold sm:text-5xl">
            From job description
            <br />
            <span className="text-orange-600">to interview ready.</span>
          </h2>
        </div>

        <div className="mx-auto mt-12 grid max-w-5xl gap-4 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <div
              key={step.number}
              className="rounded-xl border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:shadow-md"
            >
              <span className="text-xs font-bold text-orange-600">
                {step.number}
              </span>

              <h3 className="mt-7 font-bold">{step.title}</h3>

              <p className="mt-2 text-sm leading-5 text-slate-500">
                {step.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= CTA ================= */}

      <section
        id="pricing"
        className="mx-auto flex max-w-7xl flex-col justify-between gap-8 bg-orange-50 px-6 py-14 sm:px-10 lg:flex-row lg:items-center"
      >
        <div>
          <span className="text-xs font-bold tracking-widest text-orange-600">
            YOUR NEXT INTERVIEW
          </span>

          <h2 className="mt-2 max-w-2xl font-serif text-4xl font-bold">
            Stop preparing for generic interviews.
            <span className="text-orange-600"> Prepare for your job.</span>
          </h2>

          <p className="mt-3 max-w-xl text-sm leading-6 text-slate-600">
            Upload your resume, add the job description, and let AI build your
            personalized interview preparation.
          </p>
        </div>

        <button className="w-fit shrink-0 rounded-lg bg-orange-600 px-7 py-4 font-bold text-white shadow-lg shadow-orange-200 transition hover:bg-orange-700">
          Start My Preparation →
        </button>
      </section>

      {/* ================= FOOTER ================= */}

      <footer className="mx-auto flex max-w-7xl flex-col justify-between gap-2 bg-slate-900 px-7 py-6 text-xs text-slate-400 sm:flex-row">
        <span>© 2026 InterviewPrep</span>

        <span>AI-powered preparation for your next opportunity.</span>
      </footer>
    </div>
  );
};

export default Index;
