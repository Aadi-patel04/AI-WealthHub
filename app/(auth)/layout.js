import React from 'react'

const AuthLayout = ({ children }) => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center  bg-gray-100 p-4">
      {children}
    </div>
  )
}

export default AuthLayout
