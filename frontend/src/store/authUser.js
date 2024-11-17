import { create } from "zustand";
import axios from "axios";
import toast from "react-hot-toast";

// {message from my side: i have mentioned comment to understand the code easily. you can remove it if you want. i have mention it because i am new to zustand . so in future i can understand it easily.}

export const useAuthStore = create((set) => ({
  user: null, // Holds the user object if logged in; otherwise, null. This is the initial state.
  isSigningUp: false, // Tracks the loading state of the signup process
  isCheckingAuth: true, // Tracks the loading state of the authentication check
  isLoggingOut: false,
  isLoggingIn: false,

  signup: async (credentials) => {
    set({ isSigningUp: true }); // Set loading state to true to prevent multiple requests during signup
    try {
      const response = await axios.post("/api/v1/auth/signup", credentials); // Make a POST request to the signup endpoint
      set({ user: response.data.user, isSigningUp: false }); // Set the user object and loading state to false
      toast.success("Account created Successfully");
    } catch (error) {
      toast.error(error.response.data.message || "An error occurred");
      set({ isSigningUp: false, user: null }); // Set loading state to false and user to null
    }
  },
  login: async (credentials) => {
    set({ isLoggingIn: true });
    try {
      const response = await axios.post("/api/v1/auth/login",credentials);
      set({ user: response.data.user, isLoggingIn: false });
      toast.success("Login Successfully");
    } catch {
      set({ isLoggingIn: false, user: null });
      toast.error("Login Failed");
    }
  },
  logout: async () => {
    set({ isLoggingOut: true });
    try {
      await axios.post("/api/v1/auth/logout");
      set({ user: null, isLoggingOut: false });
      toast.success("Logout Successfully");
    } catch (error) {
      set({ isLoggingOut: false, user: null });
      toast.error(error.response.data.message || "Logout Failed");
    }
  },
  authCheck: async () => {
    set({ isCheckingAuth: true });
    try {
      const response = await axios.get(
        "/api/v1/auth/authcheck"
        // { withCredentials: true }
      );
      set({ user: response.data.user, isCheckingAuth: false });
    } catch (error) {
      set({ isCheckingAuth: false, user: null });
    }
  },
}));
