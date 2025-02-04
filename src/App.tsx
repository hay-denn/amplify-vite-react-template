import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Button, useAuthenticator } from "@aws-amplify/ui-react";
import Navbar from "./Navbar";
import About from "./About";
import Login from "./Login";

function Home() {
  const { user } = useAuthenticator();
  return (
   <main>
         <h1>Welcome to Our App</h1>
         {user ? (
           <div className="text-center">
             <p className="text-lg mb-4">
               Logged in as: <strong>{user?.signInDetails?.loginId}</strong>
             </p>
           </div>
         ) : (
           <Button variation="primary" onClick={() => window.location.href = "/login"}>
             Sign In
           </Button>
         )}
     </main>
  );
}

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
