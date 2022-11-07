import { Routes, Route, Navigate } from "react-router-dom";
import TemplateOne from "./components/TemplateOne";
import TemplateTwo from "./components/TemplateTwo";
import TemplateThree from "./components/TemplateThree";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<TemplateOne />} />
        <Route path="/templatetwo" element={<TemplateTwo />} />
        <Route path="/templatethree" element={<TemplateThree />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
}

export default App;
