import { BrowserRouter as Router,Routes,Route } from "react-router-dom"
import Routers from "./components/Routes/Router"
function App() {

  return (
    <>
   <Router>
   <Routes>
<Route path="/*" element={<Routers/>}/>
   </Routes>
   </Router>
    </>
  )
}

export default App
