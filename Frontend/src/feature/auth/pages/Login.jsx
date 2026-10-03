import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../hooks/useauth";

const Login = () => {
  const { loading, handleLogin, error } = useAuth();

  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    const user_id = formData.get("userId");
    const passwordValue = formData.get("password");

    handleLogin({
      user_id,
      password: passwordValue,
    });
  };

  if (loading) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-stone-100">
        <div className="text-center">
          <div className="mx-auto h-10 w-10 animate-spin rounded-full border-4 border-stone-300 border-t-orange-600"></div>

          <p className="mt-4 text-sm font-medium text-slate-600">
            Signing you in...
          </p>
        </div>
      </main>
    );
  }

  return (
    <main className="h-screen overflow-hidden bg-stone-100">

      {/* ================= NAVBAR ================= */}

      <header className="h-16 border-b border-stone-200 bg-white">
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

      {/* ================= LOGIN AREA ================= */}

      <section className="flex h-screen items-center justify-center px-5 pb-16">

        <div className="grid w-full max-w-5xl overflow-hidden rounded-3xl border border-stone-200 bg-white shadow-xl lg:grid-cols-2">

          {/* ================= LEFT SIDE ================= */}

          <div className="relative hidden overflow-hidden bg-orange-600 p-8 lg:flex lg:flex-col lg:justify-between">

            {/* Decorative circles */}

            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-orange-500 opacity-50"></div>

            <div className="absolute -bottom-24 -left-20 h-72 w-72 rounded-full bg-orange-700 opacity-40"></div>

            <div className="relative z-10">

              {/* Small label */}

              <div className="mb-6 inline-flex rounded-full bg-white px-3 py-1 text-xs font-semibold text-orange-700">
                ✦ AI-Powered Interview Preparation
              </div>

              {/* Heading */}

              <h1 className="font-serif text-4xl font-bold leading-tight text-white">
                Welcome
                <br />
                <span className="text-orange-100">
                  back.
                </span>
              </h1>

              <p className="mt-4 max-w-md text-sm leading-6 text-orange-50">
                Continue your personalized interview preparation and get ready
                for the job you actually want.
              </p>

              {/* Features */}

              <div className="mt-7 space-y-3">

                <div className="flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white text-orange-600">
                    ✓
                  </div>

                  <span className="text-sm text-orange-50">
                    Analyze your job match
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white text-orange-600">
                    ✓
                  </div>

                  <span className="text-sm text-orange-50">
                    Find your skill gaps
                  </span>
                </div>

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

            <div className="relative z-10">
              <p className="text-xs text-orange-100">
                Secure • Personalized • AI Powered
              </p>
            </div>

          </div>

          {/* ================= RIGHT SIDE ================= */}

          <div className="flex items-center px-6 py-6 sm:px-10 lg:px-12">

            <div className="mx-auto w-full max-w-md">

              {/* Heading */}

              <div className="mb-5">

                <p className="mb-1 text-xs font-bold tracking-widest text-orange-600">
                  WELCOME BACK
                </p>

                <h2 className="font-serif text-3xl font-bold text-slate-900">
                  Sign in to your account
                </h2>

                <p className="mt-2 text-sm leading-5 text-slate-500">
                  Continue where you left off and prepare for your next
                  interview.
                </p>

              </div>

              {/* ================= FORM ================= */}

              <form
                onSubmit={handleSubmit}
                className="space-y-4"
              >

                {/* USER ID */}

                <div>
                  <label
                    htmlFor="userId"
                    className="mb-1 block text-sm font-semibold text-slate-700"
                  >
                    User ID
                  </label>

                  <input
                    type="text"
                    id="userId"
                    name="userId"
                    value={user}
                    onChange={(e) => setUser(e.target.value)}
                    placeholder="Enter your user ID"
                    required
                    className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-orange-500 focus:ring-4 focus:ring-orange-100"
                  />
                </div>

                {/* PASSWORD */}

                <div>

                  <div className="mb-1 flex items-center justify-between">

                    <label
                      htmlFor="password"
                      className="block text-sm font-semibold text-slate-700"
                    >
                      Password
                    </label>

                    <Link
                      to="/forgot-password"
                      className="text-xs font-semibold text-orange-600 hover:text-orange-700"
                    >
                      Forgot password?
                    </Link>

                  </div>

                  <input
                    type="password"
                    id="password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                    required
                    className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-orange-500 focus:ring-4 focus:ring-orange-100"
                  />

                </div>

                {/* ERROR */}

                {error && (
                  <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-2 text-sm text-red-600">
                    {error}
                  </div>
                )}

                {/* REMEMBER */}

                <div className="flex items-center">

                  <label className="flex cursor-pointer items-center gap-2 text-sm text-slate-600">

                    <input
                      type="checkbox"
                      name="remember"
                      className="h-4 w-4 accent-orange-600"
                    />

                    Remember me

                  </label>

                </div>

                {/* LOGIN BUTTON */}

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full rounded-xl bg-orange-600 py-3 text-sm font-bold text-white shadow-lg transition hover:bg-orange-700 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  Sign In →
                </button>

              </form>

              {/* DIVIDER */}

              <div className="my-4 flex items-center gap-4">

                <div className="h-px flex-1 bg-slate-200"></div>

                <span className="text-xs text-slate-400">
                  OR
                </span>

                <div className="h-px flex-1 bg-slate-200"></div>

              </div>

              {/* REGISTER */}

              <p className="text-center text-sm text-slate-500">

                Don't have an account?{" "}

                <Link
                  to="/register"
                  className="font-semibold text-orange-600 hover:text-orange-700"
                >
                  Create an account
                </Link>

              </p>

              {/* BOTTOM INFO */}

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
                      Add a job description and your resume to get personalized
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

export default Login;