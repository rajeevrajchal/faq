import { useState } from "react";
import { toast } from "react-toastify";
import { callAxios } from "../../plugins/call.axios";

interface FaqType {
  _id: string;
  title: string;
  description: string;
  userID: string;
  category?: string[] | number[] | null;
  slug?: string;
  createdAt?: string;
}

const useFaq = () => {
  const [faqDetail, setFaqDetail] = useState<any>({});
  const [loading, setLoading] = useState<boolean>(false);

  const createFaq = async (faq: FaqType) => {
    const result = await callAxios({
      url: "faq/create",
      method: "POST",
      data: faq,
    });
    if (result.status === "success") {
      toast.success("Create Faq Successful");
    } else {
      toast.error("Create Faq Failed");
    }
  };

  const getFaqByDetail = async (slug: string) => {
    setLoading(true);
    console.log("fetching data");
    const result = await callAxios({
      url: `faq/${slug}`,
      method: "GET",
    });
    console.log("the data on hooks", result.faq);
    setFaqDetail(result.faq);
    setLoading(false);
  };

  const createComment = async (comment: any, faqSlug: string) => {
    const result = await callAxios({
      url: `comment/create`,
      method: "POST",
      data: {
        description: comment.description,
        faqID: comment.faqID,
        userID: comment.userID,
      },
    });
    if (result.status === "success") {
      toast.success("Create Comment Successful");
    } else {
      toast.error("Create Comment Failed");
    }
    getFaqByDetail(faqSlug);
  };

  const voteComment = async (
    operator: string,
    commentID: string,
    faqSlug: string
  ) => {
    const result = await callAxios({
      url: `comment/vote/${commentID}`,
      method: "PUT",
      data: {
        operator,
      },
    });
    if (result.status === "success") {
      toast.success(`${operator} Successful`);
    } else {
      toast.error("Voting failed");
    }
    getFaqByDetail(faqSlug);
  };

  return {
    createFaq,
    getFaqByDetail,
    voteComment,
    createComment,
    faqDetail,
    loading,
  };
};

export default useFaq;
