import { useParams } from "react-router-dom";
const Dashboard = () => {
  const {name} = useParams();
  return <h1> Welcome to Dashboard page: {name} </h1>;
};

export default Dashboard;
