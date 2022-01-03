import { Box, Stack } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import AutoSearch from "../../../components/AutoSearch";
import { useAppData } from "../../../context/useAppData";
import { searchFaqTitle } from "../../../context/actions/useSearchParams";

const SearchBox = () => {
  const {
    search: { getSearchFaqTitle, searchFaqTitle, clearSearchFaqTitle },
  } = useAppData();
  const navigator = useNavigate();

  const handleQuery = (query: string) => {
    if (query.length > 2) {
      getSearchFaqTitle(query);
    } else {
      clearSearchFaqTitle();
    }
  };

  const handleQueryOptionSelected = (item: searchFaqTitle) => {
    console.log("the query option selected", item);
    navigator(`/fag/${item.value}`);
  };

  return (
    <Stack
      direction={["column", "row"]}
      bg="tomato"
      padding={3}
      alignItems="center"
    >
      {/* <Box width={["100%", "30%"]}>
        <AutoSearch
          options={options}
          isMulti={true}
          placeholder="Choose Category"
          onChange={handleCategoryChange}
          type="category"
          defaultValue={category}
          onInputChnage={() => {}}
        />
      </Box> */}
      <Box flex={1} width="100%">
        <AutoSearch
          options={searchFaqTitle}
          isMulti={false}
          placeholder="Search for a question (must enter 3 key letters e.g Lorem) "
          onChange={handleQueryOptionSelected}
          type="category"
          onInputChnage={handleQuery}
        />
      </Box>
    </Stack>
  );
};

export default SearchBox;
