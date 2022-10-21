import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Blog from "./routes/Blog";
import Contacto from "./routes/Contacto";
import Inicio from "./routes/Inicio";
import NotFound from "./routes/NotFound";
import RutaProtegida from "./routes/RutaProtegida";
import Post from "./routes/Post";
import UserProvider from "./context/UserProvider";



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
 
  <BrowserRouter>
    <UserProvider>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Inicio />} />
          <Route path="blog" element={<Blog />} />
          <Route path="blog/:id" element={<Post />} />
          <Route path="contacto" element={<Contacto />} />
          <Route path="protegida" element={<RutaProtegida />} />

          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
      </UserProvider>
    </BrowserRouter>
 
);
