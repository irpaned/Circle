import { Flex } from "@chakra-ui/react";
import { LeftBar } from "../pages/2.left-bar";
import { RightBar } from "../pages/3.right-bar";
import { DetailThread } from "../pages/1.detaill-card";

export default function Detailthread() {
  return (
    <Flex justify={"center"} position={"relative"} right={"20"}>
      <LeftBar />
      <DetailThread />
      <RightBar />
    </Flex>
  );
}
