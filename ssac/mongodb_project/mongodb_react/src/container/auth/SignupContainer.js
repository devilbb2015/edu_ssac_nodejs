import React, { useEffect, useState } from "react";
import SignUpComponent from "../../components/auth/SignUpComponent";
import { axios } from "axios";

function SignUpContainer() {
  const baseURL = "http://localhost:3000";

  const [userArray, setUserArray] = useState([]);

  const [userInfo, setUserInfo] = useState({
    userId: "",
    name: "",
    password: "",
  });

  // const { info } = userInfo;

  const onChangeInput = (event) => {
    const { name, value } = event.target;
  };

  // const onSubmit = async () => {
  //   await axios({});
  // };

  useEffect(() => {
    console.log("최초1회 실행");
    axios({
      method: "GET",
      url: `${baseURL}/signup`,
    }).then((response) => {
      const result = response.data;
      console.log(result);
    });
  }, []);

  return <SignUpComponent onChangeInput={onChangeInput}></SignUpComponent>;
}

export default SignUpContainer;
