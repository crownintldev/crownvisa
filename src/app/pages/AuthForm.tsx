'use client';
// components/AuthForm.tsx
import React, { useState } from 'react';
import Signup from '../../components/Auth/Signup';
import Login from '../../components/Auth/Login';
import HeaderComp from '../../components/Navbar/HeaderComp';
import FooterComp from '../../components/FooterComp';

type AuthFormProps = {
  // Define any props here if needed
};

const AuthForm: React.FC<AuthFormProps> = () => {
  const [activeTab, setActiveTab] = useState<'login' | 'signup'>('login');

  return (
    <>
      <HeaderComp />
      <div className="flex justify-center items-center h-screen">
        <div className="auth-form border border-black">
          <div className="tabs grid grid-cols-12 gap-6">
            <button
              className={`tab col-span-6 w-[100%] p-2 m-1 rounded-3xl transition ${
                activeTab === 'login' ? 'active bg-blue-700 text-white' : ''
              }`}
              onClick={() => setActiveTab('login')}
            >
              Login
            </button>
            <button
              className={`tab col-span-6 p-2 m-1 rounded-3xl transition ${
                activeTab === 'signup' ? 'active bg-blue-700 text-white' : ''
              }`}
              onClick={() => setActiveTab('signup')}
            >
              Signup
            </button>
          </div>

          {activeTab === 'login' ? (
            <div className="login-form p-5 transition duration-300 py-[100px] px-[50px]">
              <Login />
            </div>
          ) : (
            <div className="signup-form p-5 transition duration-300 py-[100px] px-[50px]">
              <Signup />
            </div>
          )}
        </div>
      </div>
      <FooterComp />
    </>
  );
};

export default AuthForm;
