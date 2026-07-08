import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';

export default function App() {
  const [screen, setScreen] = useState('welcome');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [agree, setAgree] = useState(false);

  const SocialNetworks = () => (
    <div className="flex flex-col items-center my-4 w-full">
      <span className="text-xs text-indigo-500 font-semibold tracking-wide mb-3">
        Enter via Social Networks
      </span>
      <div className="flex gap-4 mb-4">
        {/* Facebook Button with Custom SVG */}
        <button className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center text-[#3b5998] hover:scale-105 transition-transform">
          <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
            <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z"/>
          </svg>
        </button>
        {/* Twitter/X Button with Custom SVG */}
        <button className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center text-[#1da1f2] hover:scale-105 transition-transform">
          <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
          </svg>
        </button>
      </div>
      <div className="w-1/2 flex flex-col items-center mb-4">
        <span className="text-xs font-bold text-gray-700">or login with</span>
        <span className="text-xs font-bold text-gray-700">email</span>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-[#E0E7FF] via-[#EEF2F6] to-[#E0E7FF] flex items-center justify-center p-6 font-sans">
      <div className="w-full max-w-sm bg-white rounded-[40px] shadow-2xl p-8 flex flex-col justify-between min-h-[640px] border border-gray-100 transition-all duration-300">
        
        {/* ================= WELCOME SCREEN ================= */}
        {screen === 'welcome' && (
          <div className="flex flex-col items-center flex-grow justify-between animate-fadeIn">
            <div className="w-full text-left">
              <h1 className="text-3xl font-extrabold text-[#5C62E6] mb-2">Welcome</h1>
              <p className="text-xs text-gray-400 font-medium leading-relaxed max-w-[220px]">
                Please login or sign up to continue using our app.
              </p>
            </div>

            {/* Simplified CSS Illustration Layout */}
            <div className="my-6 w-full flex justify-center">
              <div className="relative w-52 h-40 bg-slate-50 rounded-3xl flex items-center justify-center overflow-hidden border border-slate-100 shadow-inner">
                {/* Abstract Blobs */}
                <div className="absolute -top-6 -left-6 w-24 h-24 bg-pink-400/20 rounded-full blur-xl"></div>
                <div className="absolute -bottom-8 -right-8 w-28 h-28 bg-indigo-400/20 rounded-full blur-xl"></div>
                
                {/* Smartphone Device Frame */}
                <div className="relative w-20 h-32 bg-[#4338CA] border-2 border-[#818CF8] rounded-xl p-2 flex flex-col justify-between shadow-md">
                  <div className="w-6 h-1 bg-indigo-900 mx-auto rounded-full"></div>
                  <div className="space-y-1.5 my-auto">
                    <div className="w-full h-2 bg-sky-300 rounded-sm"></div>
                    <div className="w-10 h-1.5 bg-indigo-900 rounded-sm opacity-60"></div>
                    <div className="w-full h-3 bg-indigo-950 rounded-sm border border-indigo-800"></div>
                    <div className="w-full h-3 bg-indigo-950 rounded-sm border border-indigo-800"></div>
                  </div>
                  <div className="w-8 h-0.5 bg-indigo-400/40 mx-auto rounded-full"></div>
                </div>

                {/* Accent Floating Circles */}
                <div className="absolute top-8 left-8 w-3 h-3 bg-pink-400 rounded-full opacity-60"></div>
                <div className="absolute bottom-10 right-8 w-4 h-4 bg-indigo-400 rounded-sm rotate-12 opacity-50"></div>
              </div>
            </div>

            <SocialNetworks />
            
            <div className="w-full mt-auto">
              <button onClick={() => setScreen('signup')} className="w-full py-3.5 bg-[#6C72F5] text-white font-bold rounded-xl shadow-lg shadow-indigo-200 hover:bg-[#5A60E2] transition-colors mb-4">
                Sign up
              </button>
              <p className="text-center text-xs text-gray-500 font-medium">
                Already have an account?{' '}
                <button onClick={() => setScreen('login')} className="text-[#6C72F5] font-bold underline">Login</button>
              </p>
            </div>
          </div>
        )}

        {/* ================= SIGN UP SCREEN ================= */}
        {screen === 'signup' && (
          <div className="flex flex-col flex-grow animate-fadeIn">
            <div className="w-full text-left mb-4">
              <h1 className="text-3xl font-extrabold text-[#5C62E6] mb-2">Sign Up</h1>
              <p className="text-xs text-gray-400 font-medium leading-relaxed">Please register with your email and sign up to continue using our app.</p>
            </div>
            <SocialNetworks />
            <form onSubmit={(e) => e.preventDefault()} className="space-y-4 w-full">
              <input type="email" placeholder="jhon.doe@gmail.com" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full px-4 py-3.5 bg-[#F8FAFC] border border-gray-100 rounded-xl text-sm focus:outline-none focus:border-indigo-400 focus:bg-white shadow-inner text-gray-700 font-medium" />
              <div className="w-full relative">
                <input type={showPassword ? "text" : "password"} placeholder="••••••••" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full px-4 py-3.5 bg-[#F8FAFC] border border-gray-100 rounded-xl text-sm focus:outline-none focus:border-indigo-400 focus:bg-white shadow-inner tracking-widest text-gray-700 font-medium" />
                <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-indigo-500">
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
              <div className="flex items-center gap-2 pt-1">
                <input type="checkbox" id="privacy" checked={agree} onChange={(e) => setAgree(e.target.checked)} className="w-4 h-4 rounded border-gray-300 text-[#6C72F5] focus:ring-[#6C72F5]" />
                <label htmlFor="privacy" className="text-xs text-gray-500 font-medium cursor-pointer">I agree with privacy policy</label>
              </div>
              <button type="submit" className="w-full py-3.5 bg-[#6C72F5] text-white font-bold rounded-xl shadow-lg shadow-indigo-200 hover:bg-[#5A60E2] transition-colors mt-4">Sign up</button>
            </form>
            <p className="text-center text-xs text-gray-500 font-medium mt-auto pt-4">
              Already have an account?{' '}
              <button onClick={() => setScreen('login')} className="text-[#6C72F5] font-bold underline">Login</button>
            </p>
          </div>
        )}

        {/* ================= LOGIN NOW SCREEN ================= */}
        {screen === 'login' && (
          <div className="flex flex-col flex-grow animate-fadeIn">
            <div className="w-full text-left mb-4">
              <h1 className="text-3xl font-extrabold text-[#5C62E6] mb-2">Login Now</h1>
              <p className="text-xs text-gray-400 font-medium leading-relaxed">Please login to continue using our app.</p>
            </div>
            <SocialNetworks />
            <form onSubmit={(e) => e.preventDefault()} className="space-y-4 w-full">
              <input type="email" placeholder="jhon.doe@gmail.com" className="w-full px-4 py-3.5 bg-[#F8FAFC] border border-gray-100 rounded-xl text-sm focus:outline-none focus:border-indigo-400 focus:bg-white shadow-inner text-gray-700 font-medium" />
              <div className="w-full relative">
                <input type={showPassword ? "text" : "password"} placeholder="••••••••" className="w-full px-4 py-3.5 bg-[#F8FAFC] border border-gray-100 rounded-xl text-sm focus:outline-none focus:border-indigo-400 focus:bg-white shadow-inner tracking-widest text-gray-700 font-medium" />
                <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-indigo-500">
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
              <div className="flex justify-end pt-1">
                <a href="#forgot" className="text-xs text-gray-500 font-bold hover:text-indigo-500 transition-colors">Forgot Password?</a>
              </div>
              <button type="submit" className="w-full py-3.5 bg-[#6C72F5] text-white font-bold rounded-xl shadow-lg shadow-indigo-200 hover:bg-[#5A60E2] transition-colors mt-4">Login</button>
            </form>
            <p className="text-center text-xs text-gray-500 font-medium mt-auto pt-4">
              Don't have an account?{' '}
              <button onClick={() => setScreen('signup')} className="text-[#6C72F5] font-bold underline">Sign up</button>
            </p>
          </div>
        )}

      </div>
    </div>
  );
}