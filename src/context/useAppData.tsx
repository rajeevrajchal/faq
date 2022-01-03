import React, { useContext, createContext } from "react";
import useFaq from "./actions/useFaq";
import useSearchParams from "./actions/useSearchParams";

const appDataContext = createContext<any>({});
const { Provider } = appDataContext;

// setting up the state (reducers)
const useAppDataProvider = () => {
  const search = useSearchParams();
  const faqReducer = useFaq();
  return {
    search,
    faqReducer,
  };
};

// setup provider
export const AppDataProvider = ({
  children,
}: {
  children: React.ReactNode | JSX.Element | JSX.Element[];
}) => {
  const data = useAppDataProvider();
  return <Provider value={data}>{children}</Provider>;
};

export const useAppData = () => useContext(appDataContext);
