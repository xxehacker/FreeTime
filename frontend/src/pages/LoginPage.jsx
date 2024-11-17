import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/freetime.png";
import { useAuthStore } from "../store/authUser";
import { Loader } from "lucide-react";
import Footer from "@/components/Footer";

function LoginPage() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const { login, isLoggingIn } = useAuthStore();

  const handleLogin = async (e) => {
    e.preventDefault();
    console.log(email, password);

    if (!email || !password) {
      alert("Please fill all the fields");
    }

    login({ email, password });

    setEmail("");
    setPassword("");
  };

  if (isLoggingIn) {
    return (
      <div className="h-screen">
        <div className="flex justify-center items-center bg-black h-full w-full">
          <Loader size="50" className="animate-spin text-red-600" />
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="h-screen w-full hero-bg ">
        <header className="max-w-6xl mx-auto flex items-center justify-between p-4">
          <Link to={"/"}>
            <img src={logo} alt="logo" className="w-52" />
          </Link>
        </header>

        <div className="flex items-center justify-center mt-20 mx-3 h-1/2">
          <div
            className="w-full max-w-md p-8 space-y-6
        bg-black/60 rounded-lg shadow-md"
          >
            <h1 className="text-center text-white text-2xl font-bold mb-4">
              Login
            </h1>

            <form className="space-y-4" onSubmit={handleLogin}>
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
                onClick={handleLogin}
              >
                Login
              </button>

              <div className="flex items-center justify-center">
                <Link
                  to={"/signup"}
                  className="text-sm font-medium text-gray-300 block"
                >
                  Don't have an account ?{" "}
                  <span className="text-white">Signup</span>
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

export default LoginPage;
