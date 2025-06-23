import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.scss";
import { publicRoutesData } from "./Routes/RoutingData.jsx";
import PublicRoute from "./Routes/PublicRoutes";
import { Suspense } from "react";
import { rootName } from "./Utilis/Constent";
import Loader from "./Components/Loader/Loader.js";
import Home from "./Pages/Home/Home.jsx";

function App() {
  // return<Loader/>
  return (
    <div className="App">
      <BrowserRouter>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path={rootName} element={<PublicRoute />}>
              {publicRoutesData.map((ele, idx) => {
                return (
                  <Route
                    index
                    key={idx}
                    path={`${rootName}${ele.path}`}
                    element={ele.component}
                  />
                );
              })}
            </Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;
