import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import logo from "../assets/icons/logo.png";
import bg from "../assets/images/bg.png";
import { useNavigate } from "react-router-dom";
const RegisterPage = () => {
  const [mode, setMode] = useState("signup");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const isSignup = mode === "signup";
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen bg-[#0A0D14] text-white flex flex-col md:flex-row items-center justify-center p-6">
      <div
        className="absolute inset-0 bg-no-repeat bg-cover bg-center -z-10"
        style={{ backgroundImage: `url(${bg})` }}
      />
      {/* Left Side */}
      <div className="w-full md:w-1/2 max-w-[600px] space-y-8 mb-12 md:mb-0">
        <div>
          <img src={logo} alt="" />

          <h1 className="mt-6 text-3xl md:text-4xl font-bold text-white leading-tight">
            Join the{" "}
            <span className="text-[#A78BFA]">QFIsecure Revolution</span>
          </h1>
          <p className="mt-4 text-[#8FA2BC] text-base">
            Create your account and start securing your digital future with
            quantum-powered financial technology.
          </p>
        </div>

        <div className="space-y-5">
          <div className="flex items-start gap-4">
            <div className="text-yellow-400 text-xl">🛡️</div>
            <div>
              <h4 className="text-white font-semibold">Bank-Grade Security</h4>
              <p className="text-[#8FA2BC] text-sm">
                Your data is protected with quantum encryption
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="text-cyan-400 text-xl">⚡</div>
            <div>
              <h4 className="text-white font-semibold">Instant Access</h4>
              <p className="text-[#8FA2BC] text-sm">
                Start trading immediately after verification
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="text-purple-400 text-xl">🎉</div>
            <div>
              <h4 className="text-white font-semibold">Free to Join</h4>
              <p className="text-[#8FA2BC] text-sm">
                No hidden fees or setup costs
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side Form */}
      <div className="w-full md:w-1/2 max-w-md bg-[#0E111A] p-8 rounded-xl shadow-lg">
        <h2 className="text-2xl font-semibold mb-2 text-white">
          {isSignup ? "Create Account" : "Login"}
        </h2>
        <p className="text-sm text-[#AEB5C3] mb-6">
          {isSignup
            ? "Join thousands of neural trading professionals"
            : "Welcome back! Enter your credentials"}
        </p>

        <form className="space-y-5">
          {isSignup && (
            <div>
              <label className="text-sm mb-1 block">FullName</label>
              <input
                type="text"
                placeholder="John"
                className="w-full p-3 rounded-md bg-[#1A1F2E] border border-[#2A2F45] focus:outline-none focus:ring-2 focus:ring-violet-600"
              />
            </div>
          )}

          <div>
            <label className="text-sm mb-1 block">Email Address</label>
            <input
              type="email"
              placeholder="john.doe@example.com"
              className="w-full p-3 rounded-md bg-[#1A1F2E] border border-[#2A2F45] focus:outline-none focus:ring-2 focus:ring-violet-600"
            />
          </div>

          <div className="relative">
            <label className="text-sm mb-1 block">Password</label>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              className="w-full p-3 pr-10 rounded-md bg-[#1A1F2E] border border-[#2A2F45] focus:outline-none focus:ring-2 focus:ring-violet-600"
            />
            <span
              onClick={() => setShowPassword(!showPassword)}
              className="absolute top-9 right-3 cursor-pointer text-[#8FA2BC]"
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </span>
          </div>

          {isSignup && (
            <>
              <div className="relative">
                <label className="text-sm mb-1 block">Confirm Password</label>
                <input
                  type={showConfirm ? "text" : "password"}
                  placeholder="Confirm your password"
                  className="w-full p-3 pr-10 rounded-md bg-[#1A1F2E] border border-[#2A2F45] focus:outline-none focus:ring-2 focus:ring-violet-600"
                />
                <span
                  onClick={() => setShowConfirm(!showConfirm)}
                  className="absolute top-9 right-3 cursor-pointer text-[#8FA2BC]"
                >
                  {showConfirm ? <EyeOff size={18} /> : <Eye size={18} />}
                </span>
              </div>

              <div className="flex items-start space-x-2 text-sm">
                <input type="checkbox" className="accent-violet-600 mt-1" />
                <label>
                  I agree to the{" "}
                  <a href="#" className="text-violet-500 underline">
                    Terms of Service
                  </a>{" "}
                  and{" "}
                  <a href="#" className="text-violet-500 underline">
                    Privacy Policy
                  </a>
                </label>
              </div>

              <div className="flex items-start space-x-2 text-sm">
                <input type="checkbox" className="accent-violet-600 mt-1" />
                <label>
                  Send me updates about new features and neural trading insights
                </label>
              </div>
            </>
          )}

          <button
            type="submit"
            onClick={() => navigate("/dashboard")}
            className="w-full py-3 bg-gradient-to-r from-violet-600 to-purple-500 text-white rounded-md font-semibold transition hover:opacity-90"
          >
            {isSignup ? "Create Account →" : "Login →"}
          </button>

          <p className="text-sm text-center text-[#AEB5C3] mt-4">
            {isSignup ? (
              <>
                Already have an account?{" "}
                <button
                  type="button"
                  className="text-violet-500 underline"
                  onClick={() => setMode("login")}
                >
                  Login here
                </button>
              </>
            ) : (
              <>
                Don't have an account?{" "}
                <button
                  type="button"
                  className="text-violet-500 underline"
                  onClick={() => setMode("signup")}
                >
                  Sign up
                </button>
              </>
            )}
          </p>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
