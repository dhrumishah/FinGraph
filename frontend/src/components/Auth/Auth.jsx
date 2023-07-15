import React, { useState, useMemo } from "react";
import { styled } from "styled-components";
import Button from "../Button/Button";
import axios from "axios";
import Login from "./Login";
import Orb from "../Orb/Orb";
import bg from "../../img/bg.png";
import { useNavigate } from "react-router-dom";

const Auth = () => {
  const [login, setLogin] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/api/v1/register",
        {
          name,
          email,
          password,
        }
      );
      console.log(response.data);
      if (response.data.success) {
        navigate("/dashboard");
      }
    } catch (error) {
      alert(error.response.data.message);
    }
  };
  const orbMemo = useMemo(() => {
    return <Orb />;
  }, []);

  return (
    <AppStyled bg={bg}>
      {orbMemo}
      <div className="flex justify-center items-center min-h-screen">
        {!login ? (
          <BoxStyle>
            <h1>Sign In</h1>
            <form className="mt-4" onSubmit={handleRegister}>
              <label className="text-md">Name</label>
              <input
                className="w-full rounded-md p-2 mb-4"
                placeholder="John Doe"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <label className="text-md">Email</label>
              <input
                className="w-full rounded-md p-2 mb-4"
                placeholder="johndoe@xyz.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <label className="text-md">Password</label>
              <input
                className="w-full rounded-md p-2 mb-6"
                placeholder="********"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <p>
                Already a user?{" "}
                <a
                  className="cursor-pointer underline"
                  onClick={() => {
                    setLogin(!login);
                  }}
                >
                  Login
                </a>
              </p>
              <div className=" mx-auto justify-center items-center mt-6">
                <Button
                  type="submit"
                  name={"Sign In"}
                  bPad={".8rem 1.6rem"}
                  bRad={"30px"}
                  bg={"var(--color-accent"}
                  color={"#fff"}
                />
              </div>
            </form>
          </BoxStyle>
        ) : (
          <Login />
        )}
      </div>
    </AppStyled>
  );
};

const AppStyled = styled.div`
  height: 100vh;
  background-image: url(${(props) => props.bg});
  position: relative;
`;

const BoxStyle = styled.div`
  padding: 2rem 3rem;
  width: 500px;
  height: 100%;
  background: rgba(252, 246, 249, 0.78);
  border: 3px solid #ffffff;
  backdrop-filter: blur(4.5px);
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export default Auth;
