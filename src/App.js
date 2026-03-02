import Auditor from "./components/auditor/Auditor";
import Banner from "./components/banner/Banner";
import Favorit from "./components/favorit/Favorit";
import Footerbtm from "./components/footerbtm/Footerbtm";
import Footertop from "./components/footertop/Footertop";
import Navbar from "./components/navbar/Navbar";
import Service from "./components/services/Service";
import "./style.css";

function App() {
  return(
    <>
    <Navbar/>
    <Banner/>
    <Service/>
    <Favorit/>
    <Auditor/>
    <Footertop/>
    <Footerbtm/>
    </>
  )
}

export default App;
