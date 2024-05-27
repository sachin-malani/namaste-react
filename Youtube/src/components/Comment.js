import React from "react";

const Comment = ({ data }) => {
  const { name, comment, replies } = data;
  return (
    <div className="flex gap-2 my-2">
      <div>
        <img
          width="45"
          height="45"
          src="https://img.icons8.com/ios-filled/40/user-male-circle.png"
          alt="user-male-circle"
        />
      </div>
      <div>
        <p>{name}</p>
        <p>{comment}</p>
      </div>
    </div>
  );
};

export const CommentList = ({ comments }) => {
  return comments.map((comment, index) => (
    <div key={index}>
      <Comment  data={comment} />
      <div className="px-4 mx-2 border-l border-black">
        <CommentList comments = {comment.replies}/>
      </div>
    </div>
  ));
};

export default Comment;
