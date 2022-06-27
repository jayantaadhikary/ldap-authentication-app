import Header from "./components/Header";
import Card from "./components/shared/Card";
import Login from "./components/Login";
import { useState } from "react";
import PropTypes from "prop-types";

function App() {
  // const [details, setDetails] = useState([]);

  // const getData = (data) => {
  //   setDetails(data);
  //   console.log(details);
  // };



  return (
    <>
      <Header />
      <Login /> 
      {/* getData={getData} */}
    </>
  );
}

Card.propTypes = {
  children: PropTypes.node.isRequired,
  reverse: PropTypes.bool,
};

export default App;
