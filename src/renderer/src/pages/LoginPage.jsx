// src/pages/LoginPage.jsx

import { useState } from 'react'
import { useLogin } from '../hooks/UseLogin'
import { useNavigate } from 'react-router'
import LoginForm from '../components/EssentialComponents/LoginForm'
import bgImage from '../assets/bgimage.jpg'
import logo from '../assets/images.jpg'

const LoginPage = () => {
  return (
    <main className="w-screen h-screen relative flex ">
      <div className="w-[70rem] bg-black ">
        <img className="w-full h-full opacity-25 blur-[1px]" src={bgImage} alt="" />
        {/* <div className="absolute bg-black block w-full h-full opacity-55" /> */}
      </div>
      <div
        className={`h-screen flex flex-col items-center justify-start pt-24 gap-10 bg-white shadow-2xl shadow-white w-[30rem] 
          fixed right-10 rounded-[5rem] overflow-hidden `}
      >
        <img src={logo} className="size-44" alt="" />
        <div className="text-center font-bold text-mainText text-lg e">
          <h1>العيادة المجمعة زاوية الدهماني</h1>
          <h1>قسم غسيل الكلى</h1>
        </div>

        <LoginForm />
      </div>
    </main>
  )
}

export default LoginPage
