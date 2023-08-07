import React from "react";
import "./styles.css";
import ChatBubbleIcon from "@mui/icons-material/ChatBubbleOutline";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import FreeBreakfastIcon from "@mui/icons-material/FreeBreakfast";
import { Users } from "../App/fakeData";
import { useState } from "react";

const Post = ({ post, onQuote }) => {
  const [tea, setTea] = useState(post.tea);
  const [isTead, setIsTead] = useState(false);

  const teaHandler = () => {
    setTea(isTead ? tea - 1 : tea + 1);
    setIsTead(!isTead);
  };

  const [comment, setComment] = useState(post.comment);
  const [isCommented, setIsCommented] = useState(false);

  const commentHandler = () => {
    setComment(isCommented ? comment - 1 : comment + 1);
    setIsCommented(!isCommented);
  };

  const [quote, setQuote] = useState(post.quote);
  const [isQuoted, setIsQuoted] = useState(false);

  const quoteHandler = () => {
    setQuote(isQuoted ? quote - 1 : quote + 1);
    setIsQuoted(!isQuoted);
    onQuote(post.desc);
  };

  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postCenter">
          <span className="postText">{post?.desc}</span>
          <div className="postImg"></div>
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <div className="postProfileImg"></div>
            <span className="postUsername">
              {Users.filter((u) => u.id === post.userId)[0].username}
            </span>
          </div>
          <div className="postBottomRight">
            <ChatBubbleIcon className="commentIcon" onClick={commentHandler} />
            <span className="commentCounter"> {comment}</span>
            <FormatQuoteIcon className="quoteIcon" onClick={quoteHandler} />
            <span className="quoteCounter"> {quote}</span>
            <FreeBreakfastIcon className="teaIcon" onClick={teaHandler} />
            <span className="teaCounter"> {tea}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
