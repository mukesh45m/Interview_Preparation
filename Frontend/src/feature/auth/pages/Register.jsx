import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../hooks/useauth";

const Register = () => {
  const { loading, handleRegister, error } = useAuth();

  const handelSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    const email = formData.get("email");
    const username = formData.get("userId");
    const password = formData.get("password");

    await handleRegister({
      username,
      email,
      password,
    });
  };

  /* ================= LOADING ================= */

  if (loading) {
    return (
      <main className="flex h-screen items-center justify-center bg-stone-100">
        <div className="text-center">
          <div className="mx-auto h-10 w-10 animate-spin rounded-full border-4 border-stone-300 border-t-orange-600"></div>

          <p className="mt-4 text-sm font-medium text-slate-600">
            Creating your account...
          </p>
        </div>
      </main>
    );
  }

  return (
    <main className="flex h-screen flex-col overflow-hidden bg-stone-100">

      {/* =================================================
          NAVBAR
      ================================================= */}

      <header className="h-16 shrink-0 border-b border-stone-200 bg-white">
        <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-5 lg:px-8">

          {/* LOGO */}

          <Link to="/" className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-orange-600 font-bold text-white">
              ↯
            </div>

            <span className="text-lg font-bold text-slate-900">
              InterviewPrep
            </span>
          </Link>

          {/* BACK TO HOME */}

          <Link
            to="/"
            className="text-sm font-medium text-slate-600 transition hover:text-orange-600"
          >
            ← Back to Home
          </Link>

        </div>
      </header>


      {/* =================================================
          REGISTER AREA
      ================================================= */}

      <section className="flex min-h-0 flex-1 items-center justify-center px-5 py-4">

        <div className="grid w-full max-w-5xl overflow-hidden rounded-3xl border border-stone-200 bg-white shadow-xl lg:grid-cols-2">


          {/* =================================================
              LEFT SIDE
          ================================================= */}

          <div className="relative hidden overflow-hidden bg-orange-600 p-8 lg:flex lg:flex-col lg:justify-between">

            {/* Decorative Circle */}

            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-orange-500 opacity-50"></div>

            <div className="absolute -bottom-24 -left-20 h-72 w-72 rounded-full bg-orange-700 opacity-40"></div>


            {/* CONTENT */}

            <div className="relative z-10">

              {/* LABEL */}

              <div className="mb-6 inline-flex rounded-full bg-white px-3 py-1 text-xs font-semibold text-orange-700">
                ✦ AI-Powered Interview Preparation
              </div>


              {/* HEADING */}

              <h1 className="font-serif text-4xl font-bold leading-tight text-white">
                Start your
                <br />

                <span className="text-orange-100">
                  journey.
                </span>
              </h1>


              {/* DESCRIPTION */}

              <p className="mt-4 max-w-md text-sm leading-6 text-orange-50">
                Create your account and start preparing for the job you
                actually want.
              </p>


              {/* FEATURES */}

              <div className="mt-7 space-y-3">

                {/* FEATURE 1 */}

                <div className="flex items-center gap-3">

                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white text-orange-600">
                    ✓
                  </div>

                  <span className="text-sm text-orange-50">
                    Analyze your job match
                  </span>

                </div>


                {/* FEATURE 2 */}

                <div className="flex items-center gap-3">

                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white text-orange-600">
                    ✓
                  </div>

                  <span className="text-sm text-orange-50">
                    Identify your skill gaps
                  </span>

                </div>


                {/* FEATURE 3 */}

                <div className="flex items-center gap-3">

                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white text-orange-600">
                    ✓
                  </div>

                  <span className="text-sm text-orange-50">
                    Practice personalized questions
                  </span>

                </div>

              </div>

            </div>


            {/* BOTTOM TEXT */}

            <div className="relative z-10">

              <p className="text-xs text-orange-100">
                Secure • Personalized • AI Powered
              </p>

            </div>

          </div>


          {/* =================================================
              RIGHT SIDE
          ================================================= */}

          <div className="flex items-center px-6 py-5 sm:px-10 lg:px-12">

            <div className="mx-auto w-full max-w-md">


              {/* =================================================
                  HEADING
              ================================================= */}

              <div className="mb-4">

                <p className="mb-1 text-xs font-bold tracking-widest text-orange-600">
                  GET STARTED
                </p>

                <h2 className="font-serif text-3xl font-bold text-slate-900">
                  Create an account
                </h2>

                <p className="mt-2 text-sm leading-5 text-slate-500">
                  Create your account and start your personalized interview
                  preparation.
                </p>

              </div>


              {/* =================================================
                  FORM
              ================================================= */}

              <form
                onSubmit={handelSubmit}
                className="space-y-3"
              >


                {/* EMAIL */}

                <div>

                  <label
                    htmlFor="email"
                    className="mb-1 block text-sm font-semibold text-slate-700"
                  >
                    Email Address
                  </label>

                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="you@example.com"
                    required
                    className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-orange-500 focus:ring-4 focus:ring-orange-100"
                  />

                </div>


                {/* USERNAME */}

                <div>

                  <label
                    htmlFor="userId"
                    className="mb-1 block text-sm font-semibold text-slate-700"
                  >
                    Username
                  </label>

                  <input
                    type="text"
                    id="userId"
                    name="userId"
                    placeholder="Choose your username"
                    required
                    className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-orange-500 focus:ring-4 focus:ring-orange-100"
                  />

                </div>


                {/* PASSWORD */}

                <div>

                  <label
                    htmlFor="password"
                    className="mb-1 block text-sm font-semibold text-slate-700"
                  >
                    Password
                  </label>

                  <input
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Create a password"
                    required
                    className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-orange-500 focus:ring-4 focus:ring-orange-100"
                  />

                </div>


                {/* TERMS */}

                <div className="flex items-start gap-2 py-1">

                  <input
                    type="checkbox"
                    id="terms"
                    required
                    className="mt-1 h-4 w-4 accent-orange-600"
                  />

                  <label
                    htmlFor="terms"
                    className="text-xs leading-5 text-slate-600"
                  >
                    I agree to the{" "}

                    <a
                      href="#"
                      className="font-medium text-orange-600"
                    >
                      Terms & Conditions
                    </a>

                  </label>

                </div>


                {/* ERROR */}

                {error && (
                  <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-2">

                    <p className="text-sm font-medium text-red-600">
                      {error}
                    </p>

                  </div>
                )}


                {/* REGISTER BUTTON */}

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full rounded-xl bg-orange-600 py-3 text-sm font-bold text-white shadow-lg transition hover:bg-orange-700 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  Create Account →
                </button>

              </form>


              {/* =================================================
                  LOGIN LINK
              ================================================= */}

              <p className="mt-4 text-center text-sm text-slate-500">

                Already have an account?{" "}

                <Link
                  to="/login"
                  className="font-semibold text-orange-600 hover:text-orange-700"
                >
                  Login
                </Link>

              </p>


              {/* =================================================
                  BOTTOM INFO
              ================================================= */}

              <div className="mt-4 rounded-xl bg-stone-50 p-3">

                <div className="flex gap-3">

                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-orange-100 text-sm text-orange-600">
                    ✦
                  </div>

                  <div>

                    <p className="text-xs font-semibold text-slate-700">
                      Prepare for your actual job
                    </p>

                    <p className="mt-1 text-xs leading-4 text-slate-500">
                      Add your profile and job description to get personalized
                      AI interview preparation.
                    </p>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
};

export default Register;