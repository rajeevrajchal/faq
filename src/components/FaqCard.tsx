import { Stack, Heading, Text, Button, Box } from "@chakra-ui/react";
import { AiOutlineShareAlt } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import useClipboard from "../context/useClipboard";

const FaqCard = () => {
  const navigate = useNavigate();
  const { copyToClipboard } = useClipboard();
  const handleFaqButtons = (e: any, id: string | number, key: string) => {
    e.stopPropagation();
    switch (key) {
      case "share":
        console.log("the share button was clicked");
        const shareUrl = window.location.href + "how-do-i-use-this";
        copyToClipboard(shareUrl);
        return;
      default:
        return;
    }
  };

  return (
    <Stack
      padding={4}
      spacing={2}
      cursor="pointer"
      _hover={{
        boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.125)",
        borderRadius: "lg",
      }}
      onClick={() => navigate(`/how-do-i-use-this`)}
    >
      <Heading as="h3" size="lg" textAlign="justify">
        How do I use this?
      </Heading>
      <Text fontSize="sm" color="gray.500" noOfLines={3} textAlign="justify">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque libero
        animi aperiam qui temporibus id enim maxime fuga repellat unde!Lorem
        ipsum dolor sit amet, consectetur adipisicing elit. Cumque libero animi
        aperiam qui temporibus id enim maxime fuga repellat unde!
      </Text>
      <Box marginLeft="-17px !important">
        <Stack
          direction="row"
          spacing={2}
          alignItems="center"
          alignContent="center"
          justifyitem="center"
        >
          <Button
            colorScheme="blue"
            variant="ghost"
            rightIcon={<AiOutlineShareAlt />}
            onClick={e => handleFaqButtons(e, 12, "share")}
          >
            Share
          </Button>
        </Stack>
      </Box>
    </Stack>
  );
};

export default FaqCard;
