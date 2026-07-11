import { Layout } from "lucide-react";
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
    {
      id: "minimal",
      name: "Minimal",
      preview: "Ultra-clean design that puts your front and center",
    },
  ];

  return (
    <div className="relative">
      <button className="flex items-center gap-1 text-sm text-blue-600 bg-gradient-to-br from-blue-50 to-blue-100 ring-blue-300 hover:ring transition-all px-3 py-2 rounded-lg">
        <Layout size={14} /> <span className="max-sm:hidden">Template</span>
      </button>
    </div>
  );
};

export default TemplateSelector;
