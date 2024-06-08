"use client";
import React, { ChangeEvent, FormEvent, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage } from "@fortawesome/free-solid-svg-icons";
import { useChangePhoto } from "@shared/lib/hooks/useChangePhoto";

import styles from "./styles.module.scss";

interface IImageForm {
  onClick: (e: React.SyntheticEvent) => void;
}

export const ImageForm: React.FC<IImageForm> = ({ onClick }) => {
  const [fileName, setFileName] = useState("");
  const [componentId, setComponentId] = useState<string>("");
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

  const handleFileChange = (
    e: ChangeEvent<HTMLInputElement>,
    componentId: string
  ) => {
    e.stopPropagation();
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      setFileName(file.name);
      postImage(file, componentId);
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
        postImage(file, componentId);
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
            className="w-full h-full absolute "
            style={{ opacity: 0, position: "absolute", zIndex: 1000 }}
          />
          <FontAwesomeIcon
            icon={faImage}
            className={styles.image_container__field__icon}
          />
          {fileName ? (
            <div className={styles.imaeg_container__field__text}>
              {fileName}
            </div>
          ) : (
            <span className={styles.image_container__field__text}>
              Upload your image here
            </span>
          )}
        </form>
      </div>
    </div>
  );
};
