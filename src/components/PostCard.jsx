import React from "react";
import appwriteService from "../appwrite/config";
import { Link } from "react-router-dom";

function PostCard({ $id, title, featuredImage }) {
  return (
    <Link to={`/post/${$id}`}>
      <div className="w-full max-w-xs mx-auto bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl p-4 shadow-md transition-transform duration-300 hover:shadow-lg hover:-translate-y-1">
        <div className="w-full flex justify-center mb-4 rounded-lg overflow-hidden">
          <img
            src={appwriteService.getFilePreview(featuredImage)}
            alt={title}
            className="w-full h-40 sm:h-48 md:h-64 object-cover rounded-lg"
          />
        </div>
        <h2 className="text-lg md:text-xl font-semibold text-indigo-800 mb-2 text-center">{title}</h2>
        <p className="text-gray-600 text-sm md:text-base text-center">Read more...</p>
      </div>
    </Link>
  );
}

export default PostCard;
