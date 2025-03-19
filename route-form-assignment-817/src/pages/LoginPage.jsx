import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link } from "react-router-dom";
//base schema for checking the user's inputs
const schema = z.object({
  email: z.string().email("Invalid email address"), // if the email is invalid
  password: z.string().min(6, "Password must be at least 6 characters long"), // if the password is less than 6 chars.
});

export default function LoginPage() {
  const { register, handleSubmit, formState: { errors } } = useForm({ resolver: zodResolver(schema) });

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 shadow-lg rounded-xl w-96">
        <h2 className="text-2xl font-semibold text-center mb-4">Login</h2>
        <form onSubmit={handleSubmit(console.log)} className="space-y-4">
          <div>
            <label className="block text-gray-700 font-bold">Email</label>
            <input 
              type="email" 
              {...register("email")} 
              placeholder="Enter your email" 
              className="w-full p-2 border rounded-md focus:ring focus:ring-blue-300 outline-none"
            />
            <p className="text-red-500 text-sm mt-1">{errors.email?.message}</p>
          </div>
          <div>
            <label className="block text-gray-700 font-bold">Password</label>
            <input 
              type="password" 
              {...register("password")} 
              placeholder="Enter your password" 
              className="w-full p-2 border rounded-md focus:ring focus:ring-blue-300 outline-none"
            />
            <p className="text-red-500 text-sm mt-1">{errors.password?.message}</p>
          </div>
          <button 
            type="submit" 
            className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition duration-300"
          >
            Login
          </button>
          <p className="text-center text-gray-700 text-sm mt-3">
            Don't have an account? 
            <Link to="/signup" className="text-blue-500 hover:underline ml-1">
              Sign up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
