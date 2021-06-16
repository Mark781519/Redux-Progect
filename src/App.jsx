import { lazy, Suspense } from "react";
import { Router } from "@reach/router";
import { FullSpinner } from "./styles/app";
import Header from "./components/common/Header";
import HomePage from "./components/home/HomePage";

const CoursesPage = lazy(() => import("./components/courses/CoursesPage"));
const AboutPage = lazy(() => import("./components/about/AboutPage"));
const PageNotFound = lazy(() => import("./components/common/PageNotFound"));

const App = (props) => (
  <div className="container">
    <Suspense fallback={<FullSpinner />}>
      <Header />
      <Router>
        <HomePage path="/" />
        <CoursesPage path="courses" />
        <AboutPage path="about" />
        <PageNotFound default />
      </Router>
    </Suspense>
  </div>
);

export default App;
