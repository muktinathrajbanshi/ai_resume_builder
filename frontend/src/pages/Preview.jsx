import { useState } from "react";

const Preview = () => {
  const { resumeId } = useParams();
  const [resumeData, setResumeData] = useState(null);
  return (
    <div>
      <h1>Preview Page</h1>
    </div>
  );
};

export default Preview;
