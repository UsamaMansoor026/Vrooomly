import { Header } from "./components";
import { Route, Routes } from "react-router-dom";
import { Home } from "./pages";

const App = () => {
  return (
    <>
      <Header />

      <Routes>
        <Route index element={<Home />} />
      </Routes>
    </>
  );
};

export default App;
