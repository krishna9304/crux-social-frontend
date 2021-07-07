import { Flex, Text } from "@chakra-ui/layout";
import { Circle } from "@chakra-ui/react";
import { useSelector } from "react-redux";
const Message = ({ msgVal, me, profilePic }) => {
  let globalState = useSelector((state) => state);
  return me ? (
    <Flex wrap="wrap" m={1} h="auto" w="100%" justify="flex-end">
      <Text
        className="bg-gray-900"
        fontSize={12}
        p={1}
        maxW="50%"
        color="white"
        borderRadius="10px 10px 0 10px"
        border="1px solid grey"
      >
        {msgVal}
      </Text>
      <Circle
        style={{
          background: `url(${globalState.user.profilepPic})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "100% 100%",
        }}
        mt="auto"
        mx={1}
        size={6}
        bg="black"
      />
    </Flex>
  ) : (
    <Flex wrap="wrap" m={1} h="auto" w="100%" justify="flex-start">
      <Circle
        style={{
          background: `url(${profilePic})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "100% 100%",
        }}
        mt="auto"
        mx={1}
        size={6}
        bg="black"
      />
      <Text
        fontSize={12}
        p={1}
        maxW="50%"
        bg="#c4c4c4"
        color="black"
        borderRadius="10px 10px 10px 0"
        border="1px solid grey"
      >
        {msgVal}
      </Text>
    </Flex>
  );
};

export default Message;
