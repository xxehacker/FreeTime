import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/freetime.png";
import { useAuthStore } from "../store/authUser";
import toast from "react-hot-toast";
import Footer from "@/components/Footer";

function SignupPage() {
  const { searchParams } = new URL(document.location);
  const emailFromURL = searchParams.get("email");
  const [email, setEmail] = React.useState(emailFromURL || "");
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  // const navigate = useNavigate();
  // signup function is extracted from the store
  const { signup } = useAuthStore();

  const handleSignup = async (e) => {
    e.preventDefault();
    console.log(email, username, password);

    if (!email || !username || !password) {
      toast.error("Please fill all the fields");
      return;
    }

    // signup function is called from the store
    signup({ username, email, password });

    setEmail("");
    setUsername("");
    setPassword("");
    // setTimeout(() => {
    //   navigate("/login");
    // }, 2000);
  };

  return (
    <>
    
    
    <div className="h-screen w-full hero-bg">
      <header className="max-w-6xl mx-auto flex items-center justify-between p-4">
        <Link to={"/"}>
          <img src={logo} alt="logo" className="w-52" />
        </Link>
      </header>

      <div className="flex items-center justify-center mt-20 mx-3">
        <div
          className="w-full max-w-md p-8 space-y-6
        bg-black/60 rounded-lg shadow-md"
        >
          <h1 className="text-center text-white text-2xl font-bold mb-4">
            Signup
          </h1>

          <form className="space-y-4" onSubmit={handleSignup}>
            <div>
              <label
                htmlFor="username"
                className="text-sm font-medium text-gray-300 block"
              >
                Username
              </label>
              <input
                type="email"
                name="email"
                placeholder="mridupawan"
                className="w-full py-2 mt-1 px-3 border border-gray-700 bg-transparent rounded-md focus:outline-none focus:ring focus:ring-opacity-40 text-white"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="text-sm font-medium text-gray-300 block"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                placeholder="example@gmail.com"
                className="w-full py-2 mt-1 px-3 border border-gray-700 bg-transparent rounded-md focus:outline-none focus:ring focus:ring-opacity-40 text-white"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="text-sm font-medium text-gray-300 block"
              >
                Password
              </label>
              <input
                type="password"
                name="password"
                placeholder="password..."
                className="w-full py-2 mt-1 px-3 border border-gray-700 bg-transparent rounded-md focus:outline-none focus:ring focus:ring-opacity-40 text-white"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <button
              className="w-full py-2 mt-4 bg-red-600 hover:bg-red-700 text-white rounded-md"
              onClick={handleSignup}
            >
              Signup
            </button>

            <div className="flex items-center justify-center">
              <Link
                to={"/login"}
                className="text-sm font-medium text-gray-300 block"
              >
                Already have an account?{" "}
                <span className="text-white">Login</span>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>

    <Footer />
    </>
  );
}

export default SignupPage;
