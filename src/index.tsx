import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { ToastContainer } from "react-toastify";

// styles
import "react-toastify/dist/ReactToastify.css";

import App from "./App";
import { AuthProvider } from "./context/useAuth";
import reportWebVitals from "./reportWebVitals";
import { ApolloProvider } from "@apollo/client";

// client
import apolloClient from "./plugins/apollo.plugin";

const app = (
	<React.StrictMode>
		<BrowserRouter>
			<ToastContainer />
			<ApolloProvider client={apolloClient}>
				<ChakraProvider>
					<AuthProvider>
						<App />
					</AuthProvider>
				</ChakraProvider>
			</ApolloProvider>
		</BrowserRouter>
	</React.StrictMode>
);

ReactDOM.render(app, document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
