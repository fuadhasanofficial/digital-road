import { createBrowserRouter } from "react-router-dom";
import GovServicePage from "./Components/Home";
import Main from "./Components/Layout/Main";
import NewCarRegistrationForm from "./Components/Services/NewCarRegistrationForm";
import SearchComponent from "./Components/Services/Search";
import AdditionalServices from "./Components/Services/Services";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      { path: "/", element: <GovServicePage /> },
      { path: "/services", element: <AdditionalServices /> },
      { path: "/add-new-car", element: <NewCarRegistrationForm /> },
      { path: "/search", element: <SearchComponent /> },
    ],
  },
]);
