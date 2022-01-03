import { Box, Button, Input, Stack, Textarea, Heading } from "@chakra-ui/react";
import { useFormik } from "formik";
import * as Yup from "yup";
import React from "react";

import { useAppData } from "../../context/useAppData";
import { useAuth } from "../../context/useAuth";

const CreateFaq = () => {
  const {
    faqReducer: { createFaq },
  } = useAppData();
  const { loggedUser } = useAuth();

  const formik = useFormik({
    initialValues: {
      title: "",
      description: "",
      userID: loggedUser._id,
    },

    validationSchema: Yup.object().shape({
      title: Yup.string().required("Title is required"),
      description: Yup.string().required("Description is required"),
    }),

    onSubmit: async (values, { setSubmitting, resetForm }) => {
      await createFaq(values);
      resetForm();
      setSubmitting(false);
    },
  });

  React.useEffect(() => {
    console.log("calling on initial page render");
  }, []);
  return (
    <Stack spacing={8}>
      <Box textAlign="center">
        <Heading as="h3" fontSize="md">
          Create Your Question
        </Heading>
      </Box>
      <Stack spacing={8}>
        <Box>
          <Input
            placeholder="Your question"
            value={formik.values.title}
            onChange={formik.handleChange}
            name="title"
            isInvalid={Boolean(formik.errors.title && formik.touched.title)}
          />
        </Box>
        <Box>
          <Textarea
            placeholder="Description...."
            size="lg"
            value={formik.values.description}
            onChange={formik.handleChange}
            name="description"
            isInvalid={Boolean(
              formik.errors.description && formik.touched.description
            )}
          />
        </Box>
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
    </Stack>
  );
};

export default CreateFaq;
