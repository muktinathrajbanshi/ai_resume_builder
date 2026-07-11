import { useState } from "react";

const TemplateSelector = ({ selectedTemplated, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  const templates = [
    {
      id: "classic",
      name: "Classic",
      preview:
        "A clean, traditional resume format with clear sections and professional typography",
    },
    {
      id: "modern",
      name: "Modern",
      preview:
        "Sleek design with strategic use of color and modern font choices",
    },
    {
      id: "minimal-image",
      name: "Minimal Image",
      preview: "Minimal design with a single image and clean typography",
    },
  ];

  return <div></div>;
};

export default TemplateSelector;
