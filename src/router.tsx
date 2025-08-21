import App from "./App.tsx";
import { Routes, Route, BrowserRouter } from "react-router";
import { Login } from "./pages/Login.tsx";
import { Home } from "./pages/Home.tsx";
import { Signup } from "./pages/Signup.tsx";
import { Profile } from "./pages/Profile.tsx";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="profile" element={<Profile />} />
          <Route path="*" element={
            <div className="flex flex-col items-center justify-center h-screen">
            <div className="text-2xl">404 Page Error</div>
            <div className="text-xl">Not found</div>
            </div>
            } />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
