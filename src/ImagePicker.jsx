import React, { useState } from "react";

const ImagePicker = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setSelectedImage(file);
  };

  return (
    <div>
      {selectedImage === null ? (
        <div className="imagePick">
          <span>&nbsp;</span>
          <p></p>
          <h3>Upload a cover image</h3>
          <p>
            Images help to display the message better, hence a better understanding
          </p>
        </div>
      ) : (
        <div className="image-picker">
          <img
            src={URL.createObjectURL(selectedImage)}
            alt="Event"
            style={{ width: "80%", height: "auto" ,borderRadius:"5px" }}
          />
        </div>
      )}
      <input className="file-ipt" type="file" accept="image/*" onChange={handleImageChange} />
    </div>
  );
};

export default ImagePicker;

