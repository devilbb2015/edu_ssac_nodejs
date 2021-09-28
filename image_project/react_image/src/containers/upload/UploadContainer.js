import React, { useState } from "react";
import UploadComponents from "../../components/upload/UploadComponents";
import axios from "axios";
import { Redirect, useHistory } from "react-router";

function UploadContainer() {
    const history = useHistory();

    const baseURL = "http://localhost:3000";
    const [fileUrl, setFileUrl] = useState(null);
    const [imgUrl, setImgUrl] = useState(null);
    const [gender, setGender] = useState(0);
    const [title, setTitle] = useState("");

    const onChangeImg = async (event) => {
        const imageFile = event.target.files[0];
        const imageUrl = URL.createObjectURL(imageFile);
        setFileUrl(imageUrl);

        const formData = new FormData();
        formData.append("img", imageFile);

        const response = await axios({
            method: "POST",
            url: `${baseURL}/membership/images`,
            header: { "Content-type": "multipart/form-data" },
            data: formData,
        });

        if (response.status === 200) {
            const result = response.data;
            console.log(result);
            const resultImgUrl = result.imgUrl;
            console.log(resultImgUrl);
            setImgUrl(resultImgUrl);
        } else {
            console.log("업로드 싫패");
        }
    };

    const onChangeGender = (event) => {
        const { value } = event.target;
        setGender(value);
        console.log(value);
    };

    const onChangeTitle = (event) => {
        const { value } = event.target;
        setTitle(value);
        console.log(value);
    };

    const onSubmitMembership = async (event) => {
        const response = await axios({
            method: "POST",
            url: `${baseURL}/membership`,
            data: {
                gender: gender,
                title: title,
                img: imgUrl,
            },
        });

        if (response.status === 200) {
            console.log("생성 완료");
            history.push("/");
        } else {
            console.log("생성 실패");
        }
    };

    return (
        <UploadComponents
            onChangeImg={onChangeImg}
            fileUrl={fileUrl}
            gender={gender}
            onChangeGender={onChangeGender}
            title={title}
            onChangeTitle={onChangeTitle}
            onSubmitMembership={onSubmitMembership}
        />
    );
}

export default UploadContainer;
