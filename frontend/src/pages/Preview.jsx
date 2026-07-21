import { useState } from "react";
import { dummyResumeData } from "../assets/assets";

const Preview = () => {
  const { resumeId } = useParams();
  const [resumeData, setResumeData] = useState(null);

  const loadResume = async () => {
    setResumeData(
      dummyResumeData.find((resume) => resume._id === resumeId || null),
    );
  };

  return (
    <div>
      <h1>Preview Page</h1>
    </div>
  );
};

export default Preview;
