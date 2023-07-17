import React, { useState } from "react";
import { styled } from "styled-components";
import Button from "../Button/Button";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "https://fingraph-6yev.onrender.com/api/v1/login",
        {
          email,
          password,
        }
      );
      console.log(response.data);
      if (response.data.success) {
        navigate("/dashboard");
        toast.success(response.data.message, {
          position: "top-right",
          autoClose: 3000,
          theme: "light",
        });
      }
    } catch (error) {
      toast.error(error.response.data, {
        position: "top-center",
        autoClose: 3000,
        theme: "light",
      });
    }
  };
  return (
    <>
      <BoxStyle>
        <h1>Login</h1>
        <form className="mt-4" onSubmit={handleLogin}>
          <label className="text-md">Email</label>
          <input
            className="w-full rounded-md p-2 mb-4"
            placeholder="example@xyz.com"
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
          <div className=" mx-auto justify-center items-center mt-6">
            <Button
              type="submit"
              name={"Log In"}
              bPad={".8rem 1.6rem"}
              bRad={"30px"}
              bg={"var(--color-accent"}
              color={"#fff"}
            />
          </div>
        </form>
      </BoxStyle>
    </>
  );
};
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
export default Login;
