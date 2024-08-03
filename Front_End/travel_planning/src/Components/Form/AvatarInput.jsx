import React, { useState, useRef } from "react";
import AvatarPlaceholder from "../../Assets/avatarPlaceholder.png";

const AvatarInput = ({ register }) => {
  const [avatar, setAvatar] = useState(null);
  const fileInputRef = useRef(null);
  const placeholderImage = AvatarPlaceholder; //Image đầu tiên

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setAvatar(reader.result);
        register("avatar", { value: file });
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="flex items-center justify-center">
      <label className="w-48 h-48 cursor-pointer">
        <input
          type="file"
          accept="image/*"
          onChange={(e) => {
            handleAvatarChange(e);
          }}
          className="hidden"
          ref={fileInputRef}
        />
        <div
          className="w-48 h-48 rounded-full overflow-hidden border border-gray-300"
          onClick={() => fileInputRef.current.click()}
        >
          <img
            src={avatar || placeholderImage}
            alt="Avatar"
            className="w-full h-full object-cover"
          />
        </div>
      </label>
    </div>
  );
};

export default AvatarInput;