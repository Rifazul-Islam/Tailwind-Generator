import ToolsGenaretor from "../ToolsGenaretor/ToolsGenaretor";
import Banner from "./Banner/Banner";

const Home = () => {
  return (
    <div className="mt-20">
      <Banner></Banner>
      <ToolsGenaretor></ToolsGenaretor>
    </div>
  );
};

export default Home;
