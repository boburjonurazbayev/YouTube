import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Home from "./Pages/Home/Home";
import Channel from "./Pages/Channel/Channel";
import Video from "./Pages/Video/Video";
import Error from "./Pages/Error/Error";

function AuthenticatedApp() {
  return (
    <main className="main">
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/video/:photo_id" element={<Video />} />
          <Route path="/channel/:user_id" element={<Channel />} />
          <Route path="/*" element={<Error />} />
        </Routes>
      </div>
    </main>
  );
}

export default AuthenticatedApp;
