import React, { useState } from "react";
import { storage } from "../../utils/firebase/firebase";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";

const TestForm = () => {
  const [imgUrl, setImgUrl] = useState(null);
  const [imgSaved, setImgSaved] = useState(false);
  const [progresspercent, setProgresspercent] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    const file = e.target[0]?.files[0];

    if (!file) return;

    const storageRef = ref(storage, `files/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgresspercent(progress);
      },
      (error) => {
        alert(error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setImgUrl(downloadURL);
          console.log(downloadURL);
        });
      }
    );
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <div className="container">
        <label htmlFor="upload">
          <img src={imgUrl} style={{ width: "250px" }} alt="" />
        </label>
        <input id="upload" className="" type="file" />
        <div className="container">
          <button type="submit" className="btn btn-primary">
            Save
          </button>
        </div>
      </div>
    </form>
  );
};

export default TestForm;
