import "./App.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Routes, Route } from "react-router-dom";
import Landing from "./pages/landing";
import Profile from "./pages/Profile/profile";
import Gallary from "./pages/gallary";
import Posts from "./pages/posts";
import Todo from "./pages/todo";
import NotFound from "./component/NotFound";
import Loading from "./component/Loading";
import Dashboard from "./pages/dashboard";

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function data() {
      try {
        const res = await axios.get("https://panorbit.in/api/users.json");
        if (res !== undefined) {
          if (res.status === 200) {
            setData(res.data.users);
          }
        } else {
          console.log("Error occured");
        }
      } catch (err) {
        console.log(err);
      }
    }
    data();
  }, []);

  if (!data) return <Loading />;

  return (
    <div>
      <Routes>
        <Route path="/" element={<Landing data={data} />} />
        <Route
          path="/profile/:id"
          element={
            <Dashboard data={data}>
              <Profile data={data} />
            </Dashboard>
          }
        />
        <Route
          path="/posts"
          element={
            <Dashboard data={data}>
              <Posts />
            </Dashboard>
          }
        />
        <Route
          path="/gallary"
          element={
            <Dashboard data={data}>
              <Gallary />
            </Dashboard>
          }
        />
        <Route
          path="/todo"
          element={
            <Dashboard data={data}>
              <Todo />
            </Dashboard>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
