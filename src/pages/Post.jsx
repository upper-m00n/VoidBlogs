import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import appwriteService from "../appwrite/config";
import { Button, Container } from "../components";
import parse from "html-react-parser";
import { useSelector } from "react-redux";

export default function Post() {
    const [post, setPost] = useState(null);
    const { slug } = useParams();
    const navigate = useNavigate();

    const userData = useSelector((state) => state.auth.userData);
    const isAuthor = post && userData ? post.userId === userData.$id : false;

    useEffect(() => {
        if (slug) {
            appwriteService.getPost(slug).then((post) => {
                if (post) setPost(post);
                else navigate("/");
            });
        } else navigate("/");
    }, [slug, navigate]);

    const deletePost = () => {
        appwriteService.deletePost(post.$id).then((status) => {
            if (status) {
                appwriteService.deleteFile(post.featuredImage);
                navigate("/");
            }
        });
    };

    return post ? (
        <div className="py-12 bg-gradient-to-br from-blue-200 via-white to-blue-100 min-h-screen">
            <Container>
                <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden">
                    <div className="relative">
                        <img
                            src={appwriteService.getFilePreview(post.featuredImage)}
                            alt={post.title}
                            className="w-full h-[500px] object-cover rounded-t-3xl"
                        />
                        {isAuthor && (
                            <div className="absolute right-6 top-6 flex space-x-4">
                                <Link to={`/edit-post/${post.$id}`}>
                                    <Button
                                        bgColor="bg-green-500 hover:bg-green-600"
                                        className="px-5 py-2 text-white font-semibold rounded-lg shadow hover:shadow-lg transition-all duration-200"
                                    >
                                        Edit
                                    </Button>
                                </Link>
                                <Button
                                    bgColor="bg-red-500 hover:bg-red-600"
                                    onClick={deletePost}
                                    className="px-5 py-2 text-white font-semibold rounded-lg shadow hover:shadow-lg transition-all duration-200"
                                >
                                    Delete
                                </Button>
                            </div>
                        )}
                    </div>

                    <div className="p-10">
                        <h1 className="text-5xl font-bold text-gray-800 mb-4 text-center">{post.title}</h1>
                        <p className="text-gray-500 text-lg italic text-center mb-8">
                            by {post.author || "Unknown Author"}
                        </p>

                        <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed mx-auto">
                            {parse(post.content)}
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    ) : null;
}
 