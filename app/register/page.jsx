
'use client'

import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function SignupForm() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    email: '',
    fullName: '',
    password: '',
    confirmPassword: ''
  })
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)


  const isLoggedIn = false 

  useEffect(() => {
    if (isLoggedIn) {
      router.push('/profile')
    }
  }, [isLoggedIn, router])

  const validateForm = () => {
    let errors = {}
    if (!formData.email) {
      errors.email = '* Email is required'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = '* Email is invalid'
    }
    if (!formData.fullName) {
      errors.fullName = '* Full name is required'
    }
    if (!formData.password) {
      errors.password = '* Password is required'
    } else if (formData.password.length < 8) {
      errors.password = '* Password must be at least 8 characters'
    } else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}/.test(formData.password)) {
      errors.password = '* Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character'
    }
    if (formData.password !== formData.confirmPassword) {
      errors.confirmPassword = '* Passwords do not match'
    }
    return errors
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    const formErrors = validateForm()
    setErrors(formErrors)

    if (Object.keys(formErrors).length === 0) {
      try {
        
        await new Promise(resolve => setTimeout(resolve, 1000))
        console.log('Form submitted successfully', formData)
        alert('Account created successfully!') 
        router.push('/login')
      } catch (error) {
        console.error('Error submitting form:', error)
        alert('An error occurred during signup') 
      }
    }
    setIsSubmitting(false)
  }

  return (
    <div className="min-h-screen flex items-center justify-center    sm:px-6 lg:px-8  bg-image  bg-no-repeat  selection:bg-indigo-600">
      <div className=" w-[350px] items-center justify-center bg-blur  border-2 rounded-xl backdrop-blur  border-gray-500 pl-2" >
        <div>
          <h2 className="mt-6  text-center text-3xl font-extrabold text-gray-900">
            Register 
          </h2>
        </div>
        <form className="mt-8 space-y-6 " onSubmit={handleSubmit}>
          <div className="rounded-md shadow-sm -space-y-px ">
            <div>
              <label htmlFor="email" className="sr-only bg-black bg-opacity-0">Email address</label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="bg-black bg-opacity-0 relative block w-72 px-3 py-2 border-b border-black placeholder-black text-black focus:outline-none focus:ring-indigo-500 duration-500 focus:border-indigo-500 focus:z-10 sm:text-sm m-4 "
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && <p className=" bg-red-600 bg-opacity-40  text-sm text-red-600 border-2 rounded-md px-2 border-red-600">{errors.email}</p>}
            </div>
            <div >
              <label htmlFor="fullName" className="sr-only bg-black bg-opacity-0">Full name</label>
              <input
                id="fullName"
                name="fullName"
                type="text"
                autoComplete="name"
                required
                className=" bg-black  bg-opacity-0 relative block w-72 px-3 py-2 border-b border-black placeholder-black text-black focus:outline-none focus:ring-indigo-500 duration-500 focus:border-indigo-500 focus:z-10 sm:text-sm m-4 "
                placeholder="Full name"
                value={formData.fullName}
                onChange={handleChange}
              />
              {errors.fullName && <p className="ml-2 mr-32 bg-red-600 bg-opacity-40  text-sm text-red-600 border-2 rounded-md px-2 border-red-600">{errors.fullName}</p>}
            </div>
            <div>
              <label htmlFor="password" className="sr-only bg-black bg-opacity-0">Password</label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="new-password"
                required
                className="bg-black bg-opacity-0 relative block w-72 px-3 py-2 border-b border-black placeholder-black text-black focus:outline-none focus:ring-indigo-500 duration-500 focus:border-indigo-500 focus:z-10 sm:text-sm m-4 "
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
              />
              {errors.password && <p className="ml-2 mr-32 bg-red-600 bg-opacity-40  text-sm text-red-600 border-2 rounded-md px-2 border-red-600">{errors.password}</p>}
            </div>
            <div>
              <label htmlFor="confirmPassword" className="sr-only bg-black bg-opacity-0">Confirm password</label>
              <input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                autoComplete="new-password"
                required
                className="bg-black bg-opacity-0 relative block w-72 px-3 py-2 border-b border-black placeholder-black text-black focus:outline-none focus:ring-indigo-500 duration-500 focus:border-indigo-500 focus:z-10 sm:text-sm m-4 "
                placeholder="Confirm password"
                value={formData.confirmPassword}
                onChange={handleChange}
              />
              {errors.confirmPassword && <p className="ml-2 mr-32 bg-red-600 bg-opacity-40  text-sm text-red-600 border-2 rounded-md px-2 border-red-600">{errors.confirmPassword}</p>}
            </div>
          </div>

          <div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="group relative w-72 flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 m-4"
            >
              {isSubmitting ? 'Signing up...' : 'Sign up'}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}