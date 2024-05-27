import React from "react";
import { CommentList } from "./Comment";

const commentsData = [
  {
    name: "Sachin Jain",
    comment: "Jaldi se LIKE aur SHARE kardo #TGFamily!!!",
    replies: [],
  },
  {
    name: "Sachin Jain",
    comment: "Jaldi se LIKE aur SHARE kardo #TGFamily!!!",
    replies: [
      {
        name: "Rohit Jain",
        comment: "Liked and subscribed",
        replies: [
          {
            name: "Akshay Kumawat",
            comment: "Subscribed",
            replies: [
              {
                name: "Akshay Kumawat",
                comment: "Subscribed",
                replies: [
                  {
                    name: "Pritesh Kumawat",
                    comment: "Liked",
                    replies: [],
                  },
                ],
              },
              {
                name: "Rahul Sharma",
                comment: "Picture quality low",
                replies: [
                  {
                    name: "Kapil Sharma",
                    comment: "Yes, it's low for me also",
                    replies: [],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
];

const CommentsContainer = () => {
  return (
    <div className="my-4">
      <div className="font-bold text-xl">Comments</div>
      <CommentList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
