import React from 'react';
import './WriteNewBlog.css';
import WriteNewBlogIcon from './WriteNewBlogIcon.png';

const WriteNewBlogButton = () => {
  const onClickHandler = () => {
    window.open(`${process.env.REACT_APP_BASE_URL}/blog/auth/google`, '_blank');
  };

  return (
    <div className="writeNewBlog-container-BLogsPage">
      <button
        type="button"
        className="writeNewBlog-button-BlogsPage"
        onClick={onClickHandler}
      >
        <div className="writeNewBlog-button-title-BlogsPage">
          <img src={WriteNewBlogIcon} alt="Write-icon" />
          <div>Write New Blog</div>
        </div>
      </button>
    </div>
  );
};

export default WriteNewBlogButton;
