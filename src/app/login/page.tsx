'use client'
import React, { useState } from 'react'
import '@/styles/login.scss'
import { PickBazar } from '@/constants/logo'
import { FaEye, FaEyeSlash } from 'react-icons/fa6'
import { useForm } from 'react-hook-form'
import { Login } from '@/types/login.type'
import { useRouter } from 'next/navigation'
import { useLoginMutation } from '@/services/user/user.rtk'

const Login = () => {
  const router = useRouter();
  const [login] = useLoginMutation();
  const isLogged = false;
  const [isVisible, setIsVisible] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Login>()

  const onSubmit = async (values: Login) => {
    // async request which may result error
    try {
      const res = await login(values).unwrap()
      console.log(res)
    } catch (err) {
      console.log(err)
      // handle your error
    }
  }

  if (isLogged) {
    router.push('/user')
  } else {
    return (
      <main className='bg'>
        <form onSubmit={handleSubmit(onSubmit)} className='login_container'>
          <div className='login_header'>
            <img src={PickBazar} className='login_logo' alt="pickbazar logo" />
            <p>Log in to admin</p>
          </div>

          <div className='input_box'>
            <label htmlFor="username">Username</label>
            <input type="email" placeholder='Ex: demo@demo.com'
              {...register('username', { required: 'Username is Required!' })}
            />
            {errors.username && <span className='input_error'>{errors.username.message}</span>}
          </div>

          <div className='input_box'>
            <label htmlFor="password">Password</label>
            <div className='password_box'>
              <input type={isVisible ? 'text' : 'password'} placeholder='Ex: demo'
                {...register('password', { required: 'Password is Required!' })}
              />
              <button onClick={() => setIsVisible(!isVisible)} className='icon'>{isVisible ? <FaEyeSlash /> :
                <FaEye />}
              </button>
            </div>
            {errors.password && <span className='input_error'>{errors.password.message}</span>}
          </div>

          <button className='submit'>Submit</button>

        </form>
      </main>
    )
  }
}

export default Login