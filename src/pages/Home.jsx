import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import appwriteService from '../appwrite/config';
import { Container, PostCard } from '../components/index';

function Home() {
    const [posts, setPosts] = useState([]);
    const authStatus = useSelector((state) => state.auth.status);

    useEffect(() => {
        appwriteService.getPosts().then((posts) => {
            if (posts) {
                setPosts(posts.documents);
            }
        });
    }, []);

    if (posts.length === 0 && !authStatus) {
        return (
            <div className="w-full min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 to-purple-100">
                <Container>
                    <div className="text-center space-y-6 px-4">
                        <h1 className="text-4xl font-semibold text-gray-800">
                            ADD or Login to read posts
                        </h1>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            <strong className="text-xl text-gray-800">About VoidBlogs:</strong> VoidBlogs is a community-driven blogging platform where users can share ideas, stories, and creative writing. Whether you're a writer, reader, or both, VoidBlogs provides a space to engage with meaningful content and connect with like-minded individuals.
                        </p>
                    </div>
                </Container>
            </div>
        );
    }

    return (
        <div className="w-full py-8">
            <Container>
                <div className="flex flex-wrap gap-4 justify-center">
                    {posts.map((post) => (
                        <div key={post.$id} className="p-2 w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
                            <PostCard {...post} />
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    );
}

export default Home;
