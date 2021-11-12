import React from 'react';
import blogImg from '../../../images/blog-img.jpg'

const BlogCard = () => {
    return (
        <div className="bg-white mb-4 rounded">
            <img src={blogImg} alt="" className="img-fluid img-h rounded-top" />
            <div className="pb-4 px-5">
                <h2 className="py-4">Everything Your Pet Needs In One Place. Creating Relationtips.</h2>
                <p>a
                    July 19, 2019
                    By Alexa Jhonson 0 Lifestyle Healthcare, Pet
                    Everything Your Pet Needs In One Place. Creating Relationtips.
                    Te feugiat recteque eloquentiam est. Sed at audire ornatus incorrupte, mel ferri bonorum deserunt te. Accusata postulant mei eu, quot facilisis no eam. Quo in erat noster urbanitas, est quis possim oporteat te, his ut tempor recusabo salutatus. At perfecto maluisset vim, fugit insolens delicata pro id. Lorem ipsum dolor sit amet, mel cu nonumy fabulas, eripuit apeirian ea pro. Has conceptam accommodare eu, et pri meis illum conceptam. Ei invidunt prodesset sea, ad tollit vocibus quo. Ea lobortis tractatos eos.</p>
                <span className="fw-bold me-3">September 7, 2021</span>
                <span className="fw-bold">2 Comments</span>
            </div>
        </div>
    );
};

export default BlogCard;