import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./Layout/MainLayout";
import Body from "./Components/Body";
import Shop from "./Components/Shop";
import AuthLayout from "./Layout/AuthLayout";
import Register from "./Pages/Auth/Register";
import DashLayout from "./Layout/DashLayout";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Login from "./Pages/Auth/Login";
import Task from "./Pages/Task";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Body />} />
            <Route path="shop" element={<Shop />} />
            <Route path="/Pages/task" element={<Task />} />
          </Route>
          <Route path="/Auth" element={<AuthLayout />}>
            <Route path="register" element={<Register />} />
            <Route path="login" element={<Login />} />
          </Route>
          <Route path="/Dashboard" element={<DashLayout />}>
            <Route path="dashboard" element={<Dashboard />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
