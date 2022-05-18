import "./App.css";
import Home from "./pages/Home/Home";
import AuthProvider from "./context/AuthProvider";
import { Route, Routes } from "react-router-dom";
import Admin from "./components/Admin/Admin";
import Result from "./components/Result/Result";



function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/admin" element={<Admin></Admin>}></Route>
          <Route path="/result" element={<Result></Result>}></Route>
        </Routes>
        
        
      </AuthProvider>
    </div>
  );
}

export default App;
