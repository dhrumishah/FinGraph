import React, { useContext, useState } from "react";
import axios from "axios";

const BASE_URL = "http://localhost:5000/api/v1/";

const UserContext = React.createContext();

const UserProvider = () => {
  return <div>UserContext</div>;
};

export default UserProvider;
