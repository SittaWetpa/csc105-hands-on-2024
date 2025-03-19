import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";
import { object, string, number } from "zod";
const schema = object({
  number: number()
    .min(1, { message: "Number must be at least 1" })
    .max(100, { message: "Number must be at most 100" }),
  q: string().refine((value) => value !== "select", { message: "Please select one" }),
  size: string().refine((value) => value !== "select", { message: "Please select one" }) ,
});

const FavouritesPage = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: { number: "", q: "select", size: "select" },
  });

  const onSubmit = (data) => {
    navigate(`/fav/${data.number}?q=${data.q}&size=${data.size}`);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 shadow-lg rounded-xl w-96">
        <h1 className="text-2xl font-semibold text-center mb-4">Favourites Page</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="block text-gray-700 font-medium">Number:</label>
            <input 
              type="number" 
              {...register("number", { valueAsNumber: true })} 
              className="w-full p-2 border rounded-md focus:ring focus:ring-blue-300 outline-none"
            />
            <p className="text-red-500 text-sm mt-1">{errors.number?.message}</p>
          </div>
          <div>
            <label className="block text-gray-700 font-medium">Q:</label>
            <select 
              {...register("q")}
              className="w-full p-2 border rounded-md focus:ring focus:ring-blue-300 outline-none"
            >
              <option value="love">Love</option>
              <option value="like">Like</option>
            </select>
            <p className="text-red-500 text-sm mt-1">{errors.q?.message}</p>
          </div>
          <div>
            <label className="block text-gray-700 font-medium">Size:</label>
            <select 
              {...register("size")}
              className="w-full p-2 border rounded-md focus:ring focus:ring-blue-300 outline-none"
            >
              <option value="small">Small</option>
              <option value="medium">Medium</option>
              <option value="large">Large</option>
            </select>
            <p className="text-red-500 text-sm mt-1">{errors.size?.message}</p>
          </div>
          <button 
            type="submit" 
            className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition duration-300"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default FavouritesPage;
