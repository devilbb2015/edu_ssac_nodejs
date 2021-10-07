import axios from "axios";
import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import DetailComponent from "../../components/post/DetailComponent";

const baseURL = "http://localhost:3000";

function DetailContainer({ profile }) {
  const history = useHistory();

  const params = useParams();
  const { postId } = params;

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  // const [deletePost, setDeletePost] = useState(false);

  const token = localStorage.getItem("accessToken");

  useEffect(() => {
    // axios
    async function getDetailData() {
      setLoading(true);
      try {
        const response = await axios({
          method: "GET",
          url: `${baseURL}/ssac/board/${postId}`,
        });
        console.log(response);
        if (response.status === 200) {
          const result = response.data.data;
          console.log(result);
          setData(result);
          setLoading(false);
        } else {
        }
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    }
    getDetailData();
  }, []);

  const deletePost = async function onClickTrashIcon() {
    try {
      const response = await axios({
        method: "DELETE",
        url: `${baseURL}/ssac/board/${postId}`,
        headers: { Authorization: token },
      });
      console.log(response);
      if (response.status === 200) {
        alert("삭제되었습니다.");
        history.goBack();
      } else {
      }
    } catch (error) {
      console.log(error);
      alert("삭제 권한이 없습니다");
    }
  };

  const onClickBack = () => {
    history.goBack();
  };

  const updatePost = async function onClickGearIcon() {
    const boardPw = "1234";
    // const axiosBody = {
    //   title: title,
    //   content: body,
    //   boardPw: boardPw,
    // };

    try {
      const response = await axios({
        method: "PUT",
        url: `${baseURL}/ssac/board/${postId}`,
        headers: { Authorization: token },
      });
      console.log(response);
      if (response.status === 200) {
        alert("수정되었습니다.");
        history.goBack();
      } else {
      }
    } catch (error) {
      console.log(error);
      alert("수정 권한이 없습니다");
    }
  };

  return (
    <DetailComponent
      loading={loading}
      data={data}
      deletePost={deletePost}
      onClickBack={onClickBack}
      updatePost={updatePost}
      profile={profile}
    ></DetailComponent>
  );
}

export default DetailContainer;
