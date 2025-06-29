import { set } from "better-auth";
import { ChangeEvent, useRef, useState } from "react";

export const useFileInput = (maxSize: number) => {
  const [file, setFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState("");
  const [duration, setDuration] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (!selectedFile) return;

    // Reject if file is too big
    if (selectedFile.size > maxSize) return;

    // Revoke previous preview
    if (previewUrl) {
      URL.revokeObjectURL(previewUrl);
    }

    // Save new file
    setFile(selectedFile);

    const objectUrl = URL.createObjectURL(selectedFile);
    setPreviewUrl(objectUrl);

    // Extract duration if it's a video
    if (selectedFile.type.startsWith("video/")) {
      const video = document.createElement("video");
      video.preload = "metadata";

      video.onloadedmetadata = () => {
        if (isFinite(video.duration)) {
          setDuration(Math.round(video.duration));
        } else {
          setDuration(0);
        }

        //URL.revokeObjectURL(video.src);
      };

      video.src = objectUrl;
    }
  };

  const resetFile = () => {
    if (previewUrl) URL.revokeObjectURL(previewUrl);

    setFile(null);
    setPreviewUrl("");
    setDuration(0);

    if (inputRef.current) inputRef.current.value = "";
  };

  return {
    file,
    previewUrl,
    duration,
    inputRef,
    handleFileChange,
    resetFile,
  };
};
