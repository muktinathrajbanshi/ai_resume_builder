import { useEffect, useState } from "react";
import { dummyResumeData } from "../assets/assets";
import { useParams } from "react-router-dom";
import ResumePreview from "../components/ResumePreview";

const Preview = () => {
  const { resumeId } = useParams();
  const [resumeData, setResumeData] = useState(null);

  const loadResume = async () => {
    setResumeData(
      dummyResumeData.find((resume) => resume._id === resumeId || null),
    );
  };

  useEffect(() => {
    loadResume();
  }, []);



  return resumeData ? (
    <div className="bg-slate-100">
      <div className="max-w-3xl mx-auto py-10">
        <ResumePreview />
      </div>
    </div>
  ) : (

  )
};

export default Preview;
