import React from 'react';
import SideBar from '../../Shared/SideBar/SideBar';
import BlogCard from '../BlogCard/BlogCard';
import './Blogs.css'

const Blogs = () => {
    return (
        <div className="bg-eee">
            <div className="container mx-auto row pt-4">
                <div className="col-12 col-md-9 px-0">
                    <BlogCard></BlogCard>
                    <BlogCard></BlogCard>
                    <BlogCard></BlogCard>
                    <BlogCard></BlogCard>
                    <div className="text-center pb-4">
                        <button className="btn btn-outline-danger px-3 rounded-pill py-1 mx-2">1</button>
                        <button className="btn btn-danger px-3 rounded-pill py-1 mx-2">2</button>
                        <button className="btn btn-outline-danger px-3 rounded-pill py-1 mx-2">3</button>
                    </div>
                </div>
                {/* sidebar */}
                <div className="col-12 col-md-3">
                    <SideBar></SideBar>
                </div>
            </div>
        </div>
    );
};

export default Blogs;