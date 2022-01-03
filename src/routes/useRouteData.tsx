import { RouteObject, useNavigate } from "react-router-dom";
import { Navigate, useLocation } from "react-router-dom";

import { useAuth } from "../context/useAuth";

// layouts
import BlankLayout from "../layouts/BlankLayout";

// views
import CreateFaq from "../views/dashboard/CreateFaq";
import Landing from "../views/landing";
import FaqDetail from "../views/landing/views/FaqDetail";
import FaqModal from "../components/FaqModal";
import FaqLogin from "../components/FaqLogin";

interface RequireAuthProps {
  children: any;
  isUserLoggedIn: boolean;
  loading: boolean;
  isPublic?: boolean;
  isAuth?: boolean;
  location: any;
}

const RequireAuth = ({
  children,
  isUserLoggedIn,
  isPublic,
  isAuth,
  location,
  loading,
}: RequireAuthProps) => {
  // for route to redirect after checkAuthentication
  const privatePathNavigation: string = location.state
    ? location.state.from
    : "/";

  const publicPathNavigation: string = location.state
    ? location.state.from
    : "/login";

  if (loading) {
    return <p>Loading</p>;
  }

  if (isUserLoggedIn && isPublic) {
    return <Navigate to={privatePathNavigation} state={{ from: location }} />;
  }

  if (!isUserLoggedIn && isAuth) {
    return <Navigate to={publicPathNavigation} state={{ from: location }} />;
  }

  return children;
};

const useRoutesData = () => {
  const { isUserLoggedIn, loading } = useAuth();
  const location: any = useLocation();
  const navigate = useNavigate();

  const routes: RouteObject[] = [
    {
      path: "/",
      element: <BlankLayout />,
      children: [
        { index: true, element: <Landing /> },
        {
          path: "/fag/:slug",
          element: <FaqDetail />,
        },
        {
          path: "/create-question",
          element: (
            <RequireAuth
              isUserLoggedIn={isUserLoggedIn}
              location={location}
              loading={loading}
              isPublic={false}
              isAuth={true}
            >
              <CreateFaq />
            </RequireAuth>
          ),
        },
        {
          path: "/login",
          element: (
            <RequireAuth
              isUserLoggedIn={isUserLoggedIn}
              location={location}
              loading={loading}
              isPublic={true}
              isAuth={false}
            >
              <FaqModal
                isOpen={true}
                title={"Login"}
                onClose={() => navigate("/")}
              >
                <FaqLogin onLoginSucess={() => {}} />
              </FaqModal>
            </RequireAuth>
          ),
        },
      ],
    },
    { path: "*", element: <p>No Match</p> },
  ];
  return {
    routes,
  };
};
export default useRoutesData;
