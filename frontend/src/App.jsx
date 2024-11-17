import { useEffect } from "react";
import "./index.css";
import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./pages/home/HomePage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import SignupPage from "./pages/SignupPage.jsx";
import { Toaster } from "react-hot-toast";
import { useAuthStore } from "./store/authUser.js";
import { Loader } from "lucide-react";
import WatchPage from "./pages/WatchPage.jsx";
import NotFoundPage from "./pages/404Page.jsx";


function App() {
  const { user, isCheckingAuth, authCheck } = useAuthStore();

  useEffect(() => {
    authCheck();
  }, [authCheck]);
  
  if(isCheckingAuth) {
    return <div className="h-screen">
      <div className="flex justify-center items-center bg-black h-full w-full">
        <Loader size="50" className="animate-spin text-red-600"/>
      </div>
    </div>
  }

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={!user ? <LoginPage /> : <Navigate to="/" />} />
        <Route path="/signup" element={!user ? <SignupPage /> : <Navigate to="/" />} />
        <Route path="/watch/:id" element={user ? <WatchPage /> : <LoginPage />} />
        <Route path='/*' element={<NotFoundPage />} />
      </Routes>
      <Toaster position="top-center" reverseOrder={true}  />
    </>
  );
}

export default App;
