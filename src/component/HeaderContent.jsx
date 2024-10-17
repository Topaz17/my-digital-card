import { IoIosMail } from "react-icons/io";
import { IoLogoLinkedin } from "react-icons/io";
const HeaderContent = () => {
  return (
    <div>
      <h1>Susanne Peter </h1>
      <h3>Frontend Developer</h3>
      <div className="btn">
        <button className="email">
          <IoIosMail className="icon" />
          Email
        </button>
        <button className="linkedIn">
          <IoLogoLinkedin className="icon" />
          LinkedIn
        </button>
      </div>
    </div>
  );
};
export default HeaderContent;
