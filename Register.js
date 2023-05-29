import React, { useState } from "react";
import Header from "./Header";
import ComFooter from "./Common/ComFooter";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const UserData = {
  fullname: "",
  email: "",
  phone: "",
  address: "",
  category: "Public ",
  password: "",
};

const errorMsg = {
  fullnameError: "",
  emailError: "",
  phoneError: "",
  adddressError: "",
  categoryError: "",
  passError: "",
};
function Register() {
  const [input, setInput] = useState(UserData);
  const [error, setError] = useState(errorMsg);
  const navigate = useNavigate();

  const formSubmitHandler = (e) => {
    e.preventDefault();
    console.log("input");
    console.log(UserData);
    console.log(errorMsg);

    if (input.fullname.length <= 0) {
      setError({ fullnameError: "Please enter your name" });
      return;
    } else if (input.email.length <= 0) {
      setError({ emailError: "Please enter a valid Email" });
      return;
    } else if (input.phone.length <= 0) {
      setError({ phoneError: "Please enter valid phone number" });
      return;
    } else if (input.address.length <= 0) {
      setError({ adddressError: "Enter Address" });
      return;
    } else if (input.category.length <= 0) {
      setError({ categoryError: "Choose Category" });
      return;
    } else {
      axios
        .post("http://localhost:5000/api/v1/user", input)
        .then((response) => {
          console.log(response);
          console.log("Response ", response.data.Qstatus);
          let Warning = response.data.Qstatus;
          let UserId = response.data.u_id;
          console.log(UserId);
          alert("sucess");
          if (Warning == "success") {
            console.log("login query");
          }
          setInput(UserData);
          navigate("/login", { replace: true });
        })
        .catch((error) => console.log(error));
    }
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
                <span></span> Register
              </h3>
              <h3 className="main-title-w3 mb-5"></h3>
            </div>
            <form method="post" className="" onSubmit={formSubmitHandler}>
              <div className="main-input">
                <input
                  type="text"
                  name="w3lName"
                  placeholder="Fullname"
                  className="contact-input"
                  required=""
                  value={input.fullname}
                  onChange={(e) => {
                    setInput((prevState) => {
                      console.log(prevState);
                      return { ...prevState, fullname: e.target.value };
                    });
                  }}
                />
                <span className="error-msg">{error.fullnameError}</span>
                <input
                  type="email"
                  name="w3lSender"
                  placeholder="Email"
                  className="contact-input"
                  required=""
                  value={input.email}
                  onChange={(e) => {
                    setInput((prevState) => {
                      console.log(prevState);
                      return { ...prevState, email: e.target.value };
                    });
                  }}
                />
                <span className="error-msg">{error.emailError}</span>
                <select
                  value={input.category}
                  onChange={(e) => {
                    setInput((prevState) => {
                      console.log(prevState);
                      return { ...prevState, category: e.target.value };
                    });
                  }}
                >
                  <option value="" disabled selected >
                    Choose Category
                  </option>
                  <option value="Student">Student</option>
                  <option value="Farmer">Farmer</option>
                  <option value="Public">Public</option>
                </select>
                <span className="error-msg">{error.categoryError}</span>
                <input
                  type="text"
                  name="w3lPhone"
                  placeholder="Your phone number"
                  className="contact-input"
                  maxLength={10}
                  pattern="[789][0-9]{9}"
                  required=""
                  value={input.phone}
                  onChange={(e) => {
                    setInput((prevState) => {
                      console.log(prevState);
                      return { ...prevState, phone: e.target.value };
                    });
                  }}
                />
                <span className="error-msg">{error.phoneError}</span>
                <input
                  type="password"
                  name="w3lPhone"
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
                <textarea
                  className="contact-textarea contact-input"
                  name="w3lMessage"
                  placeholder="Enter your Address"
                  required=""
                  value={input.address}
                  onChange={(e) => {
                    setInput((prevState) => {
                      console.log(prevState);
                      return { ...prevState, address: e.target.value };
                    });
                  }}
                ></textarea>
                <span className="error-msg">{error.adddressError}</span>
              </div>
              <div className="text-center">
                <button type="submit" className="btn-primary btn btn-style">
                  Register
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

export default Register;
