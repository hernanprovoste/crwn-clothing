import HomePage from "./pages/homepage/homepage.component";
import { Route } from "react-router-dom";

const App = () => {
  return <Route exact path="/" component={HomePage} />;
};

export default App;
