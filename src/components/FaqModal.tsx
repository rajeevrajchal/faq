import {
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalHeader,
	ModalOverlay,
} from "@chakra-ui/react";

interface FaqModalProps {
	isOpen: boolean;
	title: string;
	children: React.ReactNode | JSX.Element | JSX.Element[];
	onClose: () => void;
}
const FaqModal = ({ isOpen, title, onClose, children }: FaqModalProps) => {
	return (
		<Modal isOpen={isOpen} onClose={onClose}>
			<ModalOverlay />
			<ModalContent>
				<ModalHeader>{title}</ModalHeader>
				<ModalCloseButton />
				<ModalBody>{children}</ModalBody>
			</ModalContent>
		</Modal>
	);
};

export default FaqModal;
