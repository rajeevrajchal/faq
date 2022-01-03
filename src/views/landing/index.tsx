import { Stack } from "@chakra-ui/react";
import React from "react";
import SearchBox from "./components/SearchBox";

const Landing = () => {
  React.useEffect(() => {
    console.log("calling on initial page render");
  }, []);
  return (
    <Stack spacing={8} marginBottom={100}>
      <SearchBox />
    </Stack>
  );
};

export default Landing;
