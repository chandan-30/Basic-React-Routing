import { useNavigate } from "react-router-dom";
import TextComp from "./HomeComponents/TextComp";
const Home = () => {
  const history = useNavigate();
  return (
    <>
      <h1> Welcome to Home page </h1>
      <button onClick={() => history("/dashboard")}>Click to redirect </button>
      <br />
      <TextComp />
    </>
  );
};

export default Home;
