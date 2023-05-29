import React, { useState } from "react";
import Header from "./Header";
import ComFooter from "./Common/ComFooter";
import { useNavigate } from "react-router-dom";

const inputData = {
  username: "",
  password: "",
};

const errorMsg = {
  emailError: "",
  passError: "",
};

function Login() {
  const [input, setInput] = useState(inputData);
  const [error, SetError] = useState(errorMsg);
  const navigate = useNavigate();

  const formSubmitHandler = (e) => {
    e.preventDefault();
    console.log("input");
    console.log(inputData);
    let regId, u_type, email, category;

    if (input.username.length <= 0) {
      SetError({ emailError: "Please enter a valid email" });
      return;
    }
    if (input.password.length <= 0) {
      SetError({ passError: "Please enter a valid password" });
      return;
    }
    const fetchData = async () => {
      const response = await fetch(
        "http://localhost:5000/api/v1/login/" +
          input.username +
          "/" +
          input.password
      );
      const data = await response.json();
      console.log(data);
      data.map((data) => {
        regId = data.reg_id;
        u_type = data.type;
        email = data.email;
        category = data.category;

        localStorage.setItem("userID", regId);
        localStorage.setItem("userType", u_type);
        localStorage.setItem("email", email);
        console.log(email);
        localStorage.setItem("category", category);
      });

      if (input.username === "" || input.password === "") {
        return;
      } else if (
        input.username === "admin@gmail.com" &&
        input.password === "admin"
      ) {
        localStorage.setItem("email", "admin@gmail.com");
        console.log("email"+email);
        alert("Login Success");
        navigate("/Admin/adminHome");
      } else if (u_type === "USER") {
        alert("Login Success");
        navigate("/Public/publicHome");
      } else {
        alert("Login Failed");
      }

      return console.log(regId + "#" + u_type + "#" + category);
    };
    fetchData();
  };
  return (
    <div>
      <Header />
      <br />
      <br />
      <br />
      <br />
      <section className="w3l-contacts-12 py-5" id="contact">
        <div className="container py-md-3">
          <div className="contacts12-main">
            <div className="title-section">
              <h3 className="main-title-w3 mb-3">
                <span></span> Login
              </h3>
              <h3 className="main-title-w3 mb-5"></h3>
            </div>
            <form method="POST" className="" onSubmit={formSubmitHandler}>
              <div className="main-input">
                <input
                  type="email"
                  name="w3lName"
                  placeholder="Username"
                  className="contact-input"
                  required=""
                  value={input.username}
                  onChange={(e) => {
                    setInput((prevState) => {
                      console.log(prevState);
                      return { ...prevState, username: e.target.value };
                    });
                  }}
                />
                <span className="error-msg">{error.emailError}</span>
                <input
                  type="password"
                  name="w3lSender"
                  placeholder="Password"
                  className="contact-input"
                  required=""
                  value={input.password}
                  onChange={(e) => {
                    setInput((prevState) => {
                      console.log(prevState);
                      return { ...prevState, password: e.target.value };
                    });
                  }}
                />
                <span className="error-msg">{error.passError}</span>
              </div>
              <div className="text-center">
                <button type="submit" className="btn-primary btn btn-style">
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
      <br />
      <br />
      <br />
      <br />
      <ComFooter />
    </div>
  );
}

export default Login;
