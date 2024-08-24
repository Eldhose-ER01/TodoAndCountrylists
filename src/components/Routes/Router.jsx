import { Routes, Route } from "react-router-dom";
import Home from "../Home";
import Todo from "../Todo";
import Countries from "../Countries";
import Page404notfind from "../PageNotfound";
export default function Router() {
  return (
    <div>
      <Routes>
        <Route path="/*" element={<Page404notfind />} />
        <Route path="/" element={<Home />} />
        <Route path="/todolist" element={<Todo />} />
        <Route path="/countries" element={<Countries />} />
      </Routes>
    </div>
  );
}
