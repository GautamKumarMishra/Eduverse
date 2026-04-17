import Login from "./pages/Login";
import HeroSection from "./pages/student/HeroSection";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./Layout/MainLayout";
import Courses from "./pages/student/Courses";
// Eduverse – A play on “education” and “universe,” suggesting a vast learning ecosystem.

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: (
          <>
            <HeroSection />
            <Courses />
          </>
        ),
      },
      {
        path: "login",
        element: (
          <>
            <Login />
          </>
        ),
      },
    ],
  },
]);
function App() {
  // RTK Query and react-toolkit Learn this in depth

  return (
    <main>
      <RouterProvider router={appRouter} />
    </main>
  );
}

export default App;
