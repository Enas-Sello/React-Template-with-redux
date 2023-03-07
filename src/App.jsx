import { RouterProvider } from "react-router-dom"
import "./App.css"
import Routs from "./router/Routs"

function App() {
  return (
    <div className="App">
      <RouterProvider router={Routs} />
    </div>
  )
}

export default App
