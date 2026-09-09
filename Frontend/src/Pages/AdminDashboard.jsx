import React from 'react'

const AdminDashboard = () => {
  return (
    <div className="min-h-screen bg-slate-900 text-white flex flex-col items-center justify-center p-8">
      <div className="text-center">
        {/* Shield Icon */}
        <div className="text-6xl mb-4">🛡️</div>
        
        {/* Main Title */}
        <h1 className="text-5xl font-black tracking-wider text-red-500 mb-4">
          ADMIN DASHBOARD
        </h1>
        
        <p className="text-slate-400 text-lg">
          For Admins only
        </p>
      </div>
    </div>
  )
}

export default AdminDashboard
