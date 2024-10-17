import lady from "./lady.jpg";

const Photo = () => {
  return (
    <div>
      <div className="App">
        <img src={lady} alt="A lady" className="photo" />
      </div>
    </div>
  );
};
export default Photo;
