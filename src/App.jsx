import { lazy, Suspense } from "react";
import { Router } from "@reach/router";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FullSpinner } from "./styles/app";
import Header from "./components/common/Header";
import HomePage from "./components/home/HomePage";

const CoursesPage = lazy(() => import("./components/courses/CoursesPage"));
const AboutPage = lazy(() => import("./components/about/AboutPage"));
const PageNotFound = lazy(() => import("./components/common/PageNotFound"));
const ManageCoursesPage = lazy(() =>
  import("./components/courses/ManageCoursesPage")
);

const App = (props) => (
  <div className="container">
    <Suspense fallback={<FullSpinner />}>
      <Header />
      <Router>
        <HomePage path="/" />
        <CoursesPage path="courses" />
        <ManageCoursesPage path="course/:slug" />
        <AboutPage path="about" />
        <PageNotFound default />
      </Router>
      <ToastContainer autoClose={3000} hideProgressBar />
    </Suspense>
  </div>
);

export default App;
