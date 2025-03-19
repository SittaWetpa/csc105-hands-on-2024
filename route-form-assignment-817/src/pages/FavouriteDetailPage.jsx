import React from "react";
import { useParams, useSearchParams } from "react-router-dom";

const FavouriteDetailPage = () => {
  const { number } = useParams();
  const [searchParams] = useSearchParams();

  const q = searchParams.get("q");
  const size = searchParams.get("size");

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 shadow-lg rounded-xl w-96 text-center">
        <h1 className="text-2xl font-semibold text-blue-600">Favourite Detail Page</h1>
        <p className="mt-3 text-gray-700 text-lg">
          <span className="font-semibold">Your favourite post:</span> {q}
        </p>
        <p className="text-gray-700 text-lg">
          <span className="font-semibold">Post ID:</span> {number}
        </p>
        <p className="text-gray-700 text-lg">
          <span className="font-semibold">Size:</span> {size}
        </p>
      </div>
    </div>
  );
};

export default FavouriteDetailPage;
