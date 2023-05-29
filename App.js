import { Route, Routes } from "react-router-dom";
import Home from "././Components/Home";
import Login from "./Components/Login";
import Register from "./Components/Register";
import AdminHome from "./Components/Admin/AdminHome";
import UserHome from "./Components/Public/UserHome";
import Profile from "./Components/Public/Profile";
import AddNotification from "./Components/Admin/AddNotification";
import ViewNotifications from "./Components/Public/ViewNotifications";
import AddService from "./Components/Admin/AddService";
import ViewServices from "./Components/Public/ViewServices";
import ApplyService from "./Components/Public/ApplyService";
import ViewRequest from "./Components/Admin/ViewRequest";
import ViewStatus from "./Components/Public/ViewStatus";
function App() {
  return (
    <Routes>
      {/*----------------- Routing -------------------- */}
      <Route exact path="/" element={<Home />}></Route>
      <Route exact path="/login" element={<Login />}></Route>
      <Route exact path="/register" element={<Register />}></Route>

      {/* ----------------- Admin ------------------------------------- */}
      <Route exact path="/Admin/adminHome" element={<AdminHome />}></Route>
      <Route
        exact
        path="/Admin/addNotification"
        element={<AddNotification />}
      ></Route>
      <Route exact path="/Admin/addService" element={<AddService />}></Route>
      <Route exact path="/Admin/viewRequest" element={<ViewRequest />}></Route>

      {/* ----------------- User ------------------------------------- */}
      <Route exact path="/Public/publicHome" element={<UserHome />}></Route>
      <Route exact path="/Public/viewProfile" element={<Profile />}></Route>
      <Route
        exact
        path="/Public/ViewNotification"
        element={<ViewNotifications />}
      ></Route>
      <Route
        exact
        path="/Public/viewServices"
        element={<ViewServices />}
      ></Route>
      <Route
        exact
        path="/Public/applyService"
        element={<ApplyService />}
      ></Route>
      <Route exact path="/Public/viewStatus" element={<ViewStatus />}></Route>
    </Routes>
  );
}

export default App;
