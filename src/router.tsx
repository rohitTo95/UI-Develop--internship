import App from "./App.tsx";
import { Routes, Route, BrowserRouter } from "react-router";
import { Login } from "./pages/Login.tsx";
import { Home } from "./pages/Home.tsx";
import { Signup } from "./pages/Signup.tsx";
import { Profile } from "./pages/Profile.tsx";
import { NotFound } from "./pages/NotFound.tsx";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="profile" element={<Profile />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
