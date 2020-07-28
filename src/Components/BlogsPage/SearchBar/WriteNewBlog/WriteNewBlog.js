import React from 'react';
import './WriteNewBlog.css';
import WriteNewBlogIcon from './WriteNewBlogIcon.png';

const WriteNewBlogButton = () => {

    return(
        <div className="writeNewBlog-container-BLogsPage">
            <button type="button" className="writeNewBlog-button-BlogsPage">
                <div className="writeNewBlog-button-title-BlogsPage">
                    <img src={WriteNewBlogIcon} alt="Write-icon" />
                    <div>Write New Blog</div>
                </div>
            </button>
        </div>
    );

};

export default WriteNewBlogButton;