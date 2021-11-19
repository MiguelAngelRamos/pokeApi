import { useContext } from "react";
// tomamos la informacion
import { AuthContext } from "../context/AuthContext";

// con el arrow function indicamos que cuando se use este hook
// se tenga que ejecutar useAuth()
export default () => useContext(AuthContext);