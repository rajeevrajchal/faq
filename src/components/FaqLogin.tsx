import {
	Box,
	Button,
	Stack,
	Input,
	InputGroup,
	InputRightElement,
} from "@chakra-ui/react";
import { useFormik } from "formik";
import * as Yup from "yup";

import { useState } from "react";

import { useAuth } from "../context/useAuth";

interface FaqLoginProps {
	onLoginSucess: () => void;
}
const FaqLogin = ({ onLoginSucess }: FaqLoginProps) => {
	const { signIn } = useAuth();
	const [show, setShow] = useState(false);
	const handleClick = () => setShow(!show);

	const formik = useFormik({
		initialValues: {
			email: "",
			password: "",
		},
		validationSchema: Yup.object().shape({
			email: Yup.string().email("Invalid email").required("Email is required"),
			password: Yup.string()
				.min(8, "Password is short!")
				.required("Password is required"),
		}),
		onSubmit: async (values, { setSubmitting }) => {
			console.log("the values", values);
			await signIn(values);
			onLoginSucess();
			setSubmitting(false);
		},
	});
	return (
		<Stack spacing={4} padding="8" borderRadius="lg">
			<Box>
				<Input
					placeholder="example@gmail.com"
					value={formik.values.email}
					onChange={formik.handleChange}
					name="email"
					isInvalid={Boolean(formik.errors.email && formik.touched.email)}
				/>
			</Box>
			<Box>
				<InputGroup size="md">
					<Input
						pr="4.5rem"
						type={show ? "text" : "password"}
						placeholder="Enter password"
						value={formik.values.password}
						onChange={formik.handleChange}
						name="password"
						isInvalid={Boolean(
							formik.errors.password && formik.touched.password
						)}
					/>
					<InputRightElement width="4.5rem">
						<Button h="1.75rem" size="sm" onClick={handleClick}>
							{show ? "Hide" : "Show"}
						</Button>
					</InputRightElement>
				</InputGroup>
			</Box>
			<Button
				colorScheme="teal"
				width="100%"
				onClick={() => formik.handleSubmit()}
				isDisabled={formik.isSubmitting}
				isLoading={formik.isSubmitting}
			>
				Login
			</Button>
		</Stack>
	);
};

export default FaqLogin;
