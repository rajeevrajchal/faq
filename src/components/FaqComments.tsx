import React from "react";

import {
  Stack,
  Button,
  Textarea,
  Center,
  Alert,
  AlertTitle,
  AlertDescription,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";

import { useAuth } from "../context/useAuth";
import { useAppData } from "../context/useAppData";

const FaqComments = ({ faq }: any) => {
  const { isUserLoggedIn, loggedUser } = useAuth();
  const navigate = useNavigate();

  const {
    faqReducer: { createComment },
  } = useAppData();

  const formik = useFormik({
    initialValues: {
      description: "",
    },
    validationSchema: Yup.object().shape({
      description: Yup.string().required("Description is required"),
    }),
    onSubmit: async (values, { setSubmitting, resetForm }) => {
      await createComment(
        {
          description: values.description,
          userID: loggedUser._id,
          faqID: faq._id,
        },
        faq.slug
      );
      resetForm();
      setSubmitting(false);
    },
  });
  if (!isUserLoggedIn) {
    return (
      <Alert status="error" width="100%" borderRadius="md">
        <Center display="flex" flexDir="column" width="100%">
          <AlertTitle mr={2}>Write your ans ? </AlertTitle>
          <AlertDescription margin="10px 0">
            You have to logged in to write your answer.
          </AlertDescription>
          <Button colorScheme="teal" onClick={() => navigate("/login")}>
            Login
          </Button>
        </Center>
      </Alert>
    );
  }
  return (
    <Stack spacing={4} border="1px solid gray" padding="8" borderRadius="lg">
      <Textarea
        placeholder="Your answer"
        size="lg"
        value={formik.values.description}
        onChange={formik.handleChange}
        name="description"
        isInvalid={Boolean(
          formik.errors.description && formik.touched.description
        )}
      />
      <Stack direction="row" spacing={2}>
        <Button
          colorScheme="teal"
          variant="outline"
          onClick={() => formik.resetForm()}
          isDisabled={formik.isSubmitting}
          isLoading={formik.isSubmitting}
        >
          Cancel
        </Button>
        <Button
          colorScheme="teal"
          onClick={() => formik.handleSubmit()}
          isDisabled={formik.isSubmitting}
          isLoading={formik.isSubmitting}
        >
          Save
        </Button>
      </Stack>
    </Stack>
  );
};

export default FaqComments;
