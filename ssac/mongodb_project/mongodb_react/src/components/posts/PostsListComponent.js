import React from "react";
import styled from "styled-components";
import PostItemComponent from "../post/PostItemComponent";

const PostListWrap = styled.div`
  padding-top: 8rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function PostsListComponent({ postsList, onClickPost }) {
  //console.log(postsList);
  return (
    <PostListWrap>
      {postsList.map((item, index) => (
        <PostItemComponent key={index} post={item} onClickPost={onClickPost} />
      ))}
    </PostListWrap>
  );
}

export default PostsListComponent;
