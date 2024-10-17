import "./App.css";
import About from "./component/About";
import Photo from "./component/Photo";
import Interest from "./component/Interest";
import HeaderContent from "./component/HeaderContent";
import Footer from "./component/Footer";
function App() {
  return (
    <div className="container">
      <Photo />
      <div className="text-content">
        <HeaderContent />
        <About />
        <Interest />
      </div>
      <Footer />
    </div>
  );
}

export default App;
