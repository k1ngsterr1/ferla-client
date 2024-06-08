"use client";

export const useHandleScroll = () => {
  const handleScroll = (targetId: string | undefined) => {
    if (targetId) {
      const element = document.getElementById(targetId);

      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return { handleScroll };
};
