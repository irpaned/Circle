import { useDetailThread } from "../hooks/use-detail-thread";
import { Link, useParams } from "react-router-dom";
import {
  Avatar,
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Flex,
  FormControl,
  Heading,
  HStack,
  Icon,
  IconButton,
  Image,
  Input,
  Menu,
  MenuButton,
  MenuList,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
  WrapItem,
} from "@chakra-ui/react";
import { BiChat } from "react-icons/bi";
import { BsThreeDots } from "react-icons/bs";
import { FaImage, FaRegHeart, FaTimesCircle } from "react-icons/fa";
import { MdOutlineModeEdit } from "react-icons/md";
import { RiDeleteBin5Line } from "react-icons/ri";
import { EditThread } from "../hooks/use-edit-thread";
import { DeleteThread } from "../hooks/use-delete-thread";
import { useLike } from "../hooks/use-like-thread";
import { dateFormatter } from "../utils/dateFormatter";
import { RootState } from "../redux/store";
import { useSelector } from "react-redux";
import { useReplyThread } from "../hooks/use-comment-thread";
import { useState } from "react";
import { IoIosArrowRoundBack } from "react-icons/io";

export function DetailThread() {
  const currentUser = useSelector((state: RootState) => state.auth.user);
  const { id } = useParams<{ id: string }>();
  const numbericId = Number(id);
  const { thread, BoxCSS, ButtonPost } = useDetailThread(numbericId);
  const { onDelete } = DeleteThread(numbericId);
  const {
    errors: editErrors,
    handleSubmit: handleEditSubmit,
    onSubmit: editOnSubmit,
    register: editRegister,
  } = EditThread(numbericId);
  const {
    handleSubmit: handleReplySubmit,
    register: replyRegister,
    onSubmit: replyOnSubmit,
  } = useReplyThread(numbericId);

  const { isOpen, onOpen, onClose } = useDisclosure();
  const { handleLikeThread } = useLike(numbericId);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [selectedImage, setSelectedImage] = useState<File | null>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedImage(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemoveImage = () => {
    setSelectedImage(null);
    setImagePreview(null);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const content = (
      e.currentTarget.elements.namedItem("content") as HTMLInputElement
    ).value;

    const dataTransfer = new DataTransfer();
    if (selectedImage) {
      dataTransfer.items.add(selectedImage);
    }

    const createThreadDTO = {
      content: content,
      image: dataTransfer.files,
    };

    replyOnSubmit(createThreadDTO);
  };

  const scrollbar = {
    "overflow-x": "hidden",
    "::-webkit-scrollbar": {
      width: "10px",
    },
    "::-webkit-scrollbar-track": {
      border: "7px solid black",
    },
    "::-webkit-scrollbar-thumb": {
      background: "linear-gradient(transparent,green)",
      borderRadius: "6px",
    },
  };

  return (
    <Box
      overflow="scroll"
      sx={scrollbar}
      w="600px"
      m="0"
      bg="black"
      h="703px"
      border="1px solid rgb(47, 51, 54)"
      borderTop="none"
      borderBottom="none"
      paddingTop="10px"
    >
      <Box h={"full"} sx={BoxCSS}>
        <Flex gap={2}>
          <Link to="/">
            <Icon
              color={"white"}
              fontSize={40}
              mt="2"
              as={IoIosArrowRoundBack}
            ></Icon>
          </Link>
          <Heading w={"full"} bg="black" color="white">
            Thread
          </Heading>
        </Flex>

        <Box sx={BoxCSS}>
          <Card maxW="100%" bg="black" color="white" padding="0 0 0 0">
            <CardHeader padding="0 0 0 0">
              <Flex letterSpacing={0.2}>
                <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
                  <Avatar src={thread?.user?.photoProfile} />

                  <Flex gap={2}>
                    <Heading size="sm">{thread?.user?.fullName}</Heading>
                    <Text color="grey">@{thread?.user?.userName}</Text>
                    <Text color="grey">●</Text>
                    <Text color="grey">
                      {dateFormatter(thread?.createdAt?.toString() || "")}
                    </Text>
                  </Flex>
                </Flex>

                <Menu>
                  <MenuButton
                    as={IconButton}
                    aria-label="Options"
                    icon={<BsThreeDots />}
                    variant="outline"
                    color={"white"}
                    border={"none"}
                    mt={"5px"}
                    _hover={{
                      color: "brand.900",
                    }}
                    _active={{
                      bg: "black",
                    }}
                  />
                  <MenuList
                    boxShadow={"0 0 7px 1px rgba(255, 255, 255, 0.5)"}
                    border={"none"}
                    bg={"black"}
                    p="10px 10px 10px 10px"
                    borderRadius={"10px"}
                  >
                    <Button
                      justifyContent={"start"}
                      gap={2}
                      color={"white"}
                      fontWeight={"bold"}
                      fontSize={"15px"}
                      bg={"black"}
                      onClick={() => {
                        onDelete({ id: thread?.id });
                        onClose();
                      }}
                      w="100%"
                      paddingLeft={"1.5"}
                      _hover={{
                        bg: "rgba(255, 255, 255, 0.2)",
                        borderRadius: "10px",
                      }}
                    >
                      <Icon as={RiDeleteBin5Line} fontSize={"18px"} />
                      <Text letterSpacing={0.5}>Delete</Text>
                    </Button>
                    <Button
                      justifyContent={"start"}
                      gap={2}
                      onClick={() => {
                        onOpen();
                      }}
                      color={"white"}
                      fontWeight={"bold"}
                      fontSize={"15px"}
                      bg={"black"}
                      w="100%"
                      paddingLeft={"1.5"}
                      _hover={{
                        bg: "rgba(255, 255, 255, 0.2)",
                        borderRadius: "10px",
                      }}
                    >
                      <Icon as={MdOutlineModeEdit} fontSize={"18px"} />
                      <Text>Edit</Text>
                    </Button>
                  </MenuList>
                </Menu>
              </Flex>
              <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent
                  color={"white"}
                  bg={"black"}
                  boxShadow={"0 0 7px 1px rgba(255, 255, 255, 0.5)"}
                  borderRadius="20px"
                >
                  <ModalHeader>Edit Thread</ModalHeader>
                  <ModalCloseButton />
                  <ModalBody>
                    <FormControl>
                      <Input
                        {...editRegister("content")}
                        defaultValue={thread?.content}
                        border="1px solid #8E8E8E"
                        placeholder="Content"
                      />
                    </FormControl>
                  </ModalBody>

                  <ModalFooter>
                    <Button
                      isDisabled={
                        !!(
                          editErrors.content?.message ||
                          editErrors.image?.message
                        )
                      }
                      bg={"brand.900"}
                      mr={3}
                      type="submit"
                      onClick={handleEditSubmit(editOnSubmit)}
                      color={"white"}
                      _hover={{
                        color: "brand.800",
                        bg: "#039B1C",
                      }}
                      _active={{
                        bg: "#05831A",
                      }}
                    >
                      Save
                    </Button>
                  </ModalFooter>
                </ModalContent>
              </Modal>
            </CardHeader>
            <CardBody p="8px 0 8px 5px">
              <Text>{thread?.content}</Text>
            </CardBody>
            <Image borderRadius="20px" objectFit="cover" src={thread?.image} />

            <CardFooter
              justify="space-between"
              flexWrap="wrap"
              sx={{
                "& > button": {
                  minW: "136px",
                },
              }}
              paddingBottom="0px"
              paddingTop="0px"
            >
              <Box flex="1" display={"flex"} justifyContent={"center"}>
                <Button
                  onClick={handleLikeThread}
                  color={thread?.isLiked ? "red" : "white"}
                  variant="white"
                  leftIcon={<FaRegHeart />}
                >
                  {thread?.TotalLikes}
                </Button>
              </Box>
              <Box flex="1" display={"flex"} justifyContent={"center"}>
                <Button flex="1" variant="white" leftIcon={<BiChat />}>
                  {thread?.TotalReplies}
                </Button>
              </Box>
            </CardFooter>
          </Card>
        </Box>
        <Box sx={BoxCSS}>
          <Flex bg="black" mt="0">
            <HStack>
              <WrapItem>
                <Avatar
                  position={"relative"}
                  size="md"
                  src={currentUser.photoProfile}
                />
              </WrapItem>
              <form onSubmit={handleSubmit}>
                <Input
                  {...replyRegister("content")}
                  name="content"
                  w="350px"
                  placeholder="Post your reply"
                  border="none"
                  color="white"
                  _active={{
                    border: "none",
                  }}
                />

                <label htmlFor="fileupload">
                  <Icon
                    cursor={"pointer"}
                    position={"relative"}
                    top={2.5}
                    left={1.5}
                    paddingLeft={"5px"}
                    color="brand.900"
                    fontSize={35}
                    ml={"5px"}
                    _hover={{
                      color: "white",
                    }}
                    as={FaImage}
                  />
                </label>

                <Input
                  hidden
                  id="fileupload"
                  type="file"
                  w="380px"
                  border="none"
                  color="white"
                  onChange={handleImageChange}
                />
                <Button type="submit" ml="20px" sx={ButtonPost}>
                  Post
                </Button>
              </form>
            </HStack>
          </Flex>
          {imagePreview && (
            <Box position="relative" mt={2}>
              <Image
                width="100%"
                src={imagePreview}
                alt="Image Preview"
                borderRadius="md"
              />
              <Icon
                as={FaTimesCircle}
                color="#04A51E"
                _hover={{
                  color: "#018f18",
                }}
                position="absolute"
                top="5px"
                right="5px"
                boxSize={6}
                cursor="pointer"
                onClick={handleRemoveImage}
              />
            </Box>
          )}
        </Box>
        {thread?.replies?.map((reply, index) => (
          <Box key={index} sx={BoxCSS}>
            <Card maxW="100%" bg="black" color="white" padding="0 0 0 0">
              <CardHeader padding="0 0 0 0">
                <Flex letterSpacing={0.2}>
                  <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
                    <Avatar src={reply.user?.photoProfile} />

                    <div>
                      <Flex gap={2}>
                        <Heading size="sm">{reply.user?.fullName}</Heading>
                        <Text color="grey">@{reply.user?.userName}</Text>
                        <Text color="grey">●</Text>
                        <Text color="grey">
                          {dateFormatter(reply.user?.createdAt.toString())}
                        </Text>
                      </Flex>

                      <Text color="grey">
                        Replying to{" "}
                        <span
                          style={{
                            color: "#04A51E",
                          }}
                        >
                          @{thread.user.userName}
                        </span>
                      </Text>
                    </div>
                  </Flex>
                </Flex>
              </CardHeader>
              <CardBody p="8px 0 8px 5px">
                <Text>{reply.content}</Text>
              </CardBody>
              <Image borderRadius="20px" objectFit="cover" src={reply.image} />
            </Card>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
