import { Routes as ReactRouterRoutes, Route } from "react-router-dom"
import Login from "../pages/Login"
import Signup from "../pages/Signup"

function Routes() {
  return (
    <ReactRouterRoutes>
        <Route path="/login" element={<Login />}/>
        <Route path="/signup" element={<Signup />}/>
    </ReactRouterRoutes>
  )
}

export default Routes