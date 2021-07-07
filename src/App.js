import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Loading from "./components/Loading/Loading";

// bootstrap styles
import "./App.scss";

// routes (Code Splitting and Pre-fetching)
const Cart = lazy(() => import("./routes/Cart"));
const Home = lazy(() => import("./routes/Home"));
const NotFound = lazy(() => import("./routes/NotFound"));

function App() {
  return (
    <>
      <Router>
        <Suspense fallback={<Loading />}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/cart" component={Cart} />
            <Route path="*" component={NotFound} />
          </Switch>
        </Suspense>
      </Router>
    </>
  );
}

export default App;
