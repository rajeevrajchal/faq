import { useState } from "react";
import { map } from "lodash";
import { callAxios } from "../../plugins/call.axios";

export interface searchFaqTitle {
  value: string;
  label: string;
  id: string;
}

const apiUrl = `faq/search`;
const useSearchParams = () => {
  const [searchFaqTitle, setSearchFaqTitle] = useState<searchFaqTitle[]>([]);

  const getSearchFaqTitle = async (query: string) => {
    const result = await callAxios({
      url: `${apiUrl}?query=${query}`,
      method: "GET",
    });
    if (result.status === "success") {
      map(result.faqs || [], item => {
        setSearchFaqTitle([
          ...searchFaqTitle,
          { value: item.slug, label: item.title, id: item._id },
        ]);
      });
    } else {
      setSearchFaqTitle([]);
    }
  };

  const clearSearchFaqTitle = async () => {
    setSearchFaqTitle([]);
  };

  return {
    getSearchFaqTitle,
    clearSearchFaqTitle,
    searchFaqTitle,
  };
};

export default useSearchParams;
