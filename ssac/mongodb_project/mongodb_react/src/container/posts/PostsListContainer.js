import axios from "axios";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import PostsListComponent from "../../components/posts/PostsListComponent";

const baseURL = "http://localhost:3000";

function PostsListContainer() {
  const history = useHistory();
  let [postsList, setPostsList] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // axios 통신 - async await 사용
    async function getData() {
      setLoading(true);
      try {
        const response = await axios({
          method: "GET",
          url: `${baseURL}/ssac/board`,
        });

        console.log(response);
        if (response.status === 200) {
          const result = response.data.data;
          // console.log(result);
          setPostsList(result);
          setLoading(false);
        } else {
        }
      } catch (error) {
        console.log(error);
      }
    }
    getData();
    // Promise 사용
    // axios({
    //   method: "GET",
    //   url: `${baseURL}/ssac/board`,
    // })
    //   .then((response) => {
    //     console.log(response.data);
    //     const result = response.data.data;
    //     setPostList(result);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
  }, []);

  const onClickPost = (postId) => {
    console.log(postId);
    history.push(`/post/${postId}`);
  };

  return (
    <>
      <PostsListComponent
        loading={loading}
        onClickPost={onClickPost}
        postsList={postsList}
      ></PostsListComponent>
    </>
  );
}

export default PostsListContainer;
