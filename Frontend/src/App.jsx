import React, { useState } from 'react'
import UserDashboard from './Pages/UserDashboard'
import AdminDashboard from './Pages/AdminDashboard'
import LoginPage from './Pages/LoginPage'
import { Routes, Route, Navigate } from 'react-router-dom';

// -------------------------------------------------------------
// 🛡️ PROTECTED ROUTE (Route Guard Component)
// Acts as a security checkpoint before rendering protected pages:
// 1. Checks if the user is authenticated (user !== null).
// 2. Checks if the user's role is authorized (allowedRoles.includes).
// -------------------------------------------------------------
const ProtectedRoute = ({ user, allowedRoles, children }) => {

  // Check 1: If user is not logged in, redirect them to the Login page
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  // Check 2: If user's role is not authorized, redirect to their user dashboard
  if (allowedRoles && !allowedRoles.includes(user.role)) {
    return <Navigate to="/user" replace />;
  }

  // Both checks passed -> Render the requested page
  return children;
};


const App = () => {
  // Central authentication state stored in memory (RAM)
  const [user, setUser] = useState(null);

  return (
    <Routes>

      {/* 
        ROUTE 1: PUBLIC ENTRY ROUTE (/login)
        - Access: Public (Accessible by everyone).
        - Purpose: Landing page where users select a role and sign in.
        - Callback Prop: onLogin passes user data back to App.jsx to update the auth state.
      */}
      <Route
        path='/login'
        element={<LoginPage onLogin={(userData) => setUser(userData)} />}
      />

      {/* 
        ROUTE 2: ADMIN PROTECTED ROUTE (/admin)
        - Access: Strictly restricted to 'admin' (allowedRoles={['admin']}).
        - Purpose: Displays the restricted Admin Dashboard.
        - Security: If a standard user attempts access, ProtectedRoute redirects them to /user.
      */}
      <Route
        path='/admin'
        element={
          <ProtectedRoute user={user} allowedRoles={['admin']} >
            <AdminDashboard />
          </ProtectedRoute>
        }
      />

      {/* 
        ROUTE 3: USER SHOPPING CATALOG ROUTE (/user)
        - Access: Accessible by both 'user' and 'admin' (allowedRoles={['user', 'admin']}).
        - Purpose: Displays product catalog by passing dummy data to ProductCard via Props.
        - Security: Unauthenticated guests are blocked and redirected to /login.
      */}
      <Route
        path='/user'
        element={
          <ProtectedRoute user={user} allowedRoles={['user', 'admin']} >
            <UserDashboard />
          </ProtectedRoute>
        }
      />

      {/* 
        ROUTE 4: DEFAULT FALLBACK ROUTE (*)
        - Purpose: Catches any unmatched or invalid URL and redirects the user back to /login.
      */}
      <Route path='*' element={<Navigate to="/login" replace />} />

    </Routes>
  )
}

export default App