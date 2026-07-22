import { useEffect, useState } from "react";
import { dummyResumeData } from "../assets/assets";
import { useParams } from "react-router-dom";
import ResumePreview from "../components/ResumePreview";
import Loader from "../components/loader";
import { ArrowLeftIcon } from "lucide-react";

const Preview = () => {
  const { resumeId } = useParams();

  const [isLoading, setIsLoading] = useState(true);
  const [resumeData, setResumeData] = useState(null);

  const loadResume = async () => {
    setResumeData(
      dummyResumeData.find((resume) => resume._id === resumeId || null),
      setIsLoading(false),
    );
  };

  useEffect(() => {
    loadResume();
  }, []);

  return resumeData ? (
    <div className="bg-slate-100">
      <div className="max-w-3xl mx-auto py-10">
        <ResumePreview
          data={resumeData}
          template={resumeData.template}
          accentColor={resumeData.accent_color}
          classes="py-4 bg-white"
        />
      </div>
    </div>
  ) : (
    <div>
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          <p>Resume not found</p>
          <a href="">
            <ArrowLeftIcon className="mr-2 size-4" /> go to home page
          </a>
        </div>
      )}
    </div>
  );
};

export default Preview;
