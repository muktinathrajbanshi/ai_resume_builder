import { useEffect, useState } from "react";
import { dummyResumeData } from "../assets/assets";
import { useParams } from "react-router-dom";

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

  return (
    <div>
      <h1>Preview Page</h1>
    </div>
  );
};

export default Preview;
