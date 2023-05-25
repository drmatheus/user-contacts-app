import { ToastContainer } from "react-toastify";
import { GlobalStyles } from "./App";
import { MyRoutes as Routes } from "./routes";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <div>
      <ToastContainer autoClose={2000} />
      <GlobalStyles />
      <Routes />
    </div>
  );
}

export default App;
