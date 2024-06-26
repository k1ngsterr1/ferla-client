"use client";
import React, { ChangeEvent, FormEvent, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage } from "@fortawesome/free-solid-svg-icons";
import { useChangePhoto } from "@shared/lib/hooks/useChangePhoto";
import { useUserData } from "@shared/lib/hooks/useUserData";

import styles from "./styles.module.scss";
import Button from "@shared/ui/Button";

interface IImageForm {
  onClick: (e: React.SyntheticEvent) => void;
  componentId: string;
}

export const ImageForm: React.FC<IImageForm> = ({ onClick, componentId }) => {
  const [fileName, setFileName] = useState("");
  const { userData } = useUserData();
  const { postImage } = useChangePhoto();

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const files = e.dataTransfer.files;
    if (files.length > 0) {
      const file = files[0];
      setFileName(file.name);
      postImage(file, componentId);
      console.log("Files dropped:", files);
    }
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.stopPropagation();
    const file = e.target.files?.[0];
    if (file) {
      setFileName(file.name);
      // postImage({
      //   file,
      //   userId: userData!.userId,
      //   websiteId: "89d6700c-288d-46c6-b463-60aae8b1b830_5",
      //   url: "ferla-backend-production.up.railway.app/api/components/upload-image",
      //   componentId,
      // });
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>, componentId: string) => {
    e.preventDefault(); // Prevent the default form submission
    const fileInput = document.querySelector(
      'input[type="file"]'
    ) as HTMLInputElement;
    if (fileInput && fileInput.files) {
      const file = fileInput.files[0];
      if (file) {
        const data = {
          editable_image: file,
          userId: userData!.id,
          websiteId: "89d6700c-288d-46c6-b463-60aae8b1b830",
          url: "https://ferla-backend-production.up.railway.app/api/components/upload-image", // Assuming this URL is a placeholder
          componentId: componentId,
        };
        console.log(userData);
        postImage(data);
      }
    }
  };

  const stopPropagation = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <div className={styles.layout} onClick={onClick}>
      <div className={styles.image_container} onClick={stopPropagation}>
        <span className={styles.image_container__heading}>
          Change Your Image
        </span>
        <form
          className={styles.image_container__field}
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          onSubmit={(e: FormEvent<HTMLFormElement>) =>
            handleSubmit(e, componentId)
          }
        >
          <input
            type="file"
            required
            onChange={handleFileChange} // Add the onChange event listener
            className="w-full h-full absolute "
            style={{ opacity: 0, position: "absolute", zIndex: 1000 }}
          />
          <FontAwesomeIcon
            icon={faImage}
            className={styles.image_container__field__icon}
          />
          {fileName ? (
            <div className={styles.image_container__field__text}>
              {fileName}
            </div>
          ) : (
            <span className={styles.image_container__field__text}>
              Upload your image here
            </span>
          )}
          {/* <Button
            text="Save"
            type="submit"
            buttonType="filled"
            margin="mt-8 !z-[99999999]"
          /> */}
          <button type="submit" className={styles.image_container__button}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};
