import React from 'react';
import { Article } from '../../components';
import { blog01, blog02, blog03, blog04, blog05 } from './imports';
import './blog.css';

const Blog = () => {
  return (
    <div className="newageux__blog section__padding" id="blog">
        <div className="newageux__blog-heading">
            <h1 className="gradient__text">A lot is happening, We are blogging about it.</h1>
        </div>
        <div className="newageux__blog-container">
            <div className="newageux__blog-container_groupA">
                <Article imgUrl={blog01} date="Dec 29, 2022" title="NewAgeUX and Open  AI is the future. Let us exlore how it is?" />
            </div>
            <div className="newageux__blog-container_groupB">
                <Article imgUrl={blog02} date="Dec 29, 2022" title="Are the Possibilities Endless with NewAgeUX and Open  AI?" />
                <Article imgUrl={blog03} date="Dec 29, 2022" title="How safe is NewAgeUX and Open  AI?" />
                <Article imgUrl={blog04} date="Dec 29, 2022" title="The magic behind NewAgeUX and Open  AI" />
                <Article imgUrl={blog05} date="Dec 29, 2022" title="How much AI Is Too Much AI?" />
            </div>
        </div>
    </div>
  )
}

export default Blog