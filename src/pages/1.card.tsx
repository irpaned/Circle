// import {
//   Avatar,
//   Box,
//   Button,
//   Flex,
//   Heading,
//   HStack,
//   Icon,
//   Input,
//   WrapItem,
//   Image,
//   IconButton,
// } from "@chakra-ui/react";
// import { FaImage } from "react-icons/fa";
// import { useSelector } from "react-redux";
// import { ThreadCard } from "../features/home/component/thread-card";
// import { useHomePage } from "../hooks/use-home-page";
// import { RootState } from "../redux/store";
// import { ChangeEvent, useState } from "react";
// import { CloseIcon } from "@chakra-ui/icons";

import {
  Avatar,
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Icon,
  Input,
  WrapItem,
  Image,
} from "@chakra-ui/react";
import { FaImage, FaTimesCircle } from "react-icons/fa";
import { ThreadCard } from "../features/home/component/thread-card";
import { useSelector } from "react-redux";
import { useState } from "react";
import { RootState } from "../redux/store";
import { useHomePage } from "../hooks/use-home-page";

// export function CardBeranda() {
//   const currentUser = useSelector((state: RootState) => state.auth.user);

//   const { threads, BoxCSS, ButtonPost, onSubmit, register, handleSubmit } =
//     useHomePage();

//   const [selectedImage, setSelectedImage] = useState<string | null>(null);

//   const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
//     const file = event.target.files?.[0];
//     if (file) {
//       const imageUrl = URL.createObjectURL(file);
//       setSelectedImage(imageUrl);
//     }
//   };

//   const scrollbar = {
//     "overflow-x": "hidden",
//     "::-webkit-scrollbar": {
//       width: "10px",
//     },
//     "::-webkit-scrollbar-track": {
//       border: "7px solid black",
//     },
//     "::-webkit-scrollbar-thumb": {
//       background: "linear-gradient(transparent,green)",
//       borderRadius: "6px",
//     },
//   };

//   return (
//     <>
//       <Box
//         overflow="scroll"
//         sx={scrollbar}
//         w="600px"
//         m="0"
//         bg="black"
//         h="703px"
//         border="1px solid rgb(47, 51, 54)"
//         borderTop="none"
//         borderBottom="none"
//         paddingTop="10px"
//       >
//         <Box sx={BoxCSS}>
//           <Heading bg="black" color="white">
//             Home
//           </Heading>
//           <Box sx={BoxCSS}>
//             <Flex bg="black" mt="0">
//               {/* <HStack> */}
//               <WrapItem>
//                 <Avatar
//                   position={"relative"}
//                   bottom={"2"}
//                   size="md"
//                   name="Ryan Florence"
//                   src={currentUser.photoProfile}
//                 />{" "}
//               </WrapItem>
//               <form onSubmit={handleSubmit(onSubmit)}>
//                 <Input
//                   {...register("content")}
//                   w="475px"
//                   placeholder="What is Happening?"
//                   border="none"
//                   color="white"
//                   _active={{
//                     border: "none",
//                   }}
//                   style={{ marginLeft: 20 }}
//                 />

//                 <Input
//                   hidden
//                   id="fileupload"
//                   {...register("image")}
//                   type="file"
//                   onChange={handleImageChange}
//                   accept="image/*"
//                 />
//                 {selectedImage && (
//                   <Box mt={4} ml={"0x"} position="relative">
//                     <Image
//                       src={selectedImage}
//                       alt="Preview"
//                       maxWidth="100%" // Atur sesuai kebutuhan
//                       borderRadius="md"
//                       boxShadow="lg"
//                     />
//                     <IconButton
//                       aria-label="Hapus gambar"
//                       icon={<CloseIcon />}
//                       position="absolute"
//                       top="0"
//                       borderRadius="full"
//                       bg="#04A51E"
//                       right="0"
//                       m={2}
//                       size="xs"
//                       onClick={() => setSelectedImage(null)} // Fungsi untuk menghapus gambar
//                     />
//                   </Box>
//                 )}
//                 <Box
//                   className="w-full"
//                   display={"flex"}
//                   justifyContent={"end"}
//                   // borderTop={"1px solid grey"}
//                 >
//                   <HStack>
//                     <label htmlFor="fileupload">
//                       <Icon
//                         cursor={"pointer"}
//                         position={"relative"}
//                         top={2.5}
//                         paddingLeft={"5px"}
//                         color="brand.900"
//                         fontSize={35}
//                         ml={"5px"}
//                         _hover={{
//                           color: "white",
//                         }}
//                         as={FaImage}
//                       />
//                     </label>
//                     <Button
//                       position={"relative"}
//                       top={2.5}
//                       type="submit"
//                       sx={ButtonPost}
//                     >
//                       Post
//                     </Button>
//                   </HStack>
//                 </Box>
//               </form>
//               {/* </HStack> */}
//             </Flex>
//           </Box>
//           {threads?.map((thread) => (
//             <ThreadCard thread={thread} />
//           ))}
//         </Box>
//       </Box>
//     </>
//   );
// }

// import {
//   Avatar,
//   Box,
//   Button,
//   Flex,
//   Heading,
//   HStack,
//   Icon,
//   Input,
//   WrapItem,
// } from "@chakra-ui/react";
// import { FaImage } from "react-icons/fa";
// import { useSelector } from "react-redux";
// import { ThreadCard } from "../features/home/component/thread-card";
// import { useHomePage } from "../hooks/use-home-page";
// import { RootState } from "../redux/store";

// export function CardBeranda() {
//   const currentUser = useSelector((state: RootState) => state.auth.user);

//   const { threads, BoxCSS, ButtonPost, onSubmit, register, handleSubmit } =
//     useHomePage();

//   const scrollbar = {
//     "overflow-x": "hidden",
//     "::-webkit-scrollbar": {
//       width: "10px",
//     },
//     "::-webkit-scrollbar-track": {
//       border: "7px solid black",
//     },
//     "::-webkit-scrollbar-thumb": {
//       background: "linear-gradient(transparent,green)",
//       borderRadius: "6px",
//     },
//   };

//   return (
//     <>
//       <Box
//         overflow="scroll"
//         sx={scrollbar}
//         w="600px"
//         m="0"
//         bg="black"
//         h="703px"
//         border="1px solid rgb(47, 51, 54)"
//         borderTop="none"
//         borderBottom="none"
//         paddingTop="10px"
//       >
//         <Box sx={BoxCSS}>
//           <Heading bg="black" color="white">
//             Home
//           </Heading>
//           <Box sx={BoxCSS}>
//             <Flex bg="black" mt="0">
//               <HStack>
//                 <WrapItem>
//                   <Avatar
//                     size="md"
//                     name={currentUser.fullName}
//                     src={currentUser.photoProfile}
//                   />{" "}
//                 </WrapItem>
//                 <form onSubmit={handleSubmit(onSubmit)}>
//                   <Input
//                     {...register("content")}
//                     w="360px"
//                     placeholder="What is Happening?"
//                     border="none"
//                     color="white"
//                     _active={{
//                       border: "none",
//                     }}
//                   />

//                   <label htmlFor="fileupload">
//                     <Icon
//                       cursor={"pointer"}
//                       position={"relative"}
//                       top={2.5}
//                       paddingLeft={"5px"}
//                       color="brand.900"
//                       fontSize={35}
//                       ml={"5px"}
//                       _hover={{
//                         color: "white",
//                       }}
//                       as={FaImage}
//                     />
//                   </label>

//                   <Input
//                     hidden
//                     id="fileupload"
//                     {...register("image")}
//                     type="file"
//                     w="380px"
//                     border="none"
//                     color="white"
//                   ></Input>
//                   <Button
//                     position={"relative"}
//                     bottom={"1"}
//                     ml="8px"
//                     type="submit"
//                     sx={ButtonPost}
//                   >
//                     Post
//                   </Button>
//                 </form>
//               </HStack>
//             </Flex>
//           </Box>
//           {threads?.map((thread) => (
//             <ThreadCard thread={thread} />
//           ))}
//         </Box>
//       </Box>
//     </>
//   );
// }

// import {
//   Avatar,
//   Box,
//   Button,
//   Flex,
//   Heading,
//   HStack,
//   Icon,
//   Image,
//   Input,
//   WrapItem,
// } from "@chakra-ui/react";
// import { FaImage, FaTimesCircle } from "react-icons/fa";
// import { useSelector } from "react-redux";
// import { ThreadCard } from "../features/home/component/thread-card";
// import { useHomePage } from "../hooks/use-home-page";
// import { RootState } from "../redux/store";
// import { useState } from "react";

// export function CardBeranda() {
//   const currentUser = useSelector((state: RootState) => state.auth.user);
//   const { threads, BoxCSS, ButtonPost, onSubmit, register, handleSubmit } =
//     useHomePage();

//   const [imagePreview, setImagePreview] = useState<string | null>(null);

//   const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const file = e.target.files?.[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         setImagePreview(reader.result as string);
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   const handleRemoveImage = () => {
//     setImagePreview(null);
//   };

//   const scrollbar = {
//     "overflow-x": "hidden",
//     "::-webkit-scrollbar": {
//       width: "10px",
//     },
//     "::-webkit-scrollbar-track": {
//       border: "7px solid black",
//     },
//     "::-webkit-scrollbar-thumb": {
//       background: "linear-gradient(transparent,green)",
//       borderRadius: "6px",
//     },
//   };

//   return (
//     <Box
//       overflow="scroll"
//       sx={scrollbar}
//       w="600px"
//       m="0"
//       bg="black"
//       h="703px"
//       border="1px solid rgb(47, 51, 54)"
//       borderTop="none"
//       borderBottom="none"
//       paddingTop="10px"
//     >
//       <Box sx={BoxCSS}>
//         <Heading bg="black" color="white">
//           Home
//         </Heading>
//         <Box sx={BoxCSS}>
//           <Flex bg="black" mt="0">
//             <HStack>
//               <WrapItem>
//                 <Avatar
//                   size="md"
//                   name={currentUser.fullName}
//                   src={currentUser.photoProfile}
//                 />
//               </WrapItem>
//               <form onSubmit={handleSubmit(onSubmit)}>
//                 <Input
//                   {...register("content")}
//                   w="360px"
//                   placeholder="What is Happening?"
//                   border="none"
//                   color="white"
//                   _active={{
//                     border: "none",
//                   }}
//                 />

//                 <label htmlFor="fileupload">
//                   <Icon
//                     cursor={"pointer"}
//                     position={"relative"}
//                     top={2.5}
//                     paddingLeft={"5px"}
//                     color="brand.900"
//                     fontSize={35}
//                     ml={"5px"}
//                     _hover={{
//                       color: "white",
//                     }}
//                     as={FaImage}
//                   />
//                 </label>

//                 <Input
//                   hidden
//                   id="fileupload"
//                   {...register("image")}
//                   type="file"
//                   w="380px"
//                   border="none"
//                   color="white"
//                   onChange={handleImageChange}
//                 />

//                 {imagePreview && (
//                   <Box position="relative" mt={2}>
//                     <Image
//                       src={imagePreview}
//                       alt="Image Preview"
//                       borderRadius="md"
//                     />
//                     <Icon
//                       as={FaTimesCircle}
//                       color="red.500"
//                       position="absolute"
//                       top="5px"
//                       right="5px"
//                       boxSize={6}
//                       cursor="pointer"
//                       onClick={handleRemoveImage}
//                     />
//                   </Box>
//                 )}

//                 <Button
//                   position={"relative"}
//                   bottom={"1"}
//                   ml="8px"
//                   type="submit"
//                   sx={ButtonPost}
//                 >
//                   Post
//                 </Button>
//               </form>
//             </HStack>
//           </Flex>
//         </Box>
//         {threads?.map((thread) => (
//           <ThreadCard key={thread.id} thread={thread} />
//         ))}
//       </Box>
//     </Box>
//   );
// }

// import {
//   Avatar,
//   Box,
//   Button,
//   Flex,
//   Heading,
//   HStack,
//   Icon,
//   Image,
//   Input,
//   WrapItem,
// } from "@chakra-ui/react";
// import { FaImage, FaTimesCircle } from "react-icons/fa";
// import { useSelector } from "react-redux";
// import { ThreadCard } from "../features/home/component/thread-card";
// import { useHomePage } from "../hooks/use-home-page";
// import { RootState } from "../redux/store";
// import React, { useState } from "react";

// export function CardBeranda() {
//   const currentUser = useSelector((state: RootState) => state.auth.user);
//   const {
//     threads,
//     BoxCSS,
//     ButtonPost,
//     onSubmit,
//     register,
//   } = useHomePage();

//   const [imagePreview, setImagePreview] = useState<string | null>(null);
//   const [selectedImage, setSelectedImage] = useState<File | null>(null);

//   const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const file = e.target.files?.[0];
//     if (file) {
//       setSelectedImage(file);
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         setImagePreview(reader.result as string);
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   const handleRemoveImage = () => {
//     setSelectedImage(null);
//     setImagePreview(null);
//   };

//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();

//     const formData = new FormData();
//     const content = (
//       e.currentTarget.elements.namedItem("content") as HTMLInputElement
//     ).value;

//     formData.append("content", content);
//     if (selectedImage) {
//       formData.append("image", selectedImage);
//     }

//     // Kirim FormData ke onSubmit asli
//     onSubmit(formData);
//   };

//   const scrollbar = {
//     "overflow-x": "hidden",
//     "::-webkit-scrollbar": {
//       width: "10px",
//     },
//     "::-webkit-scrollbar-track": {
//       border: "7px solid black",
//     },
//     "::-webkit-scrollbar-thumb": {
//       background: "linear-gradient(transparent,green)",
//       borderRadius: "6px",
//     },
//   };

//   return (
//     <Box
//       overflow="scroll"
//       sx={scrollbar}
//       w="600px"
//       m="0"
//       bg="black"
//       h="703px"
//       border="1px solid rgb(47, 51, 54)"
//       borderTop="none"
//       borderBottom="none"
//       paddingTop="10px"
//     >
//       <Box sx={BoxCSS}>
//         <Heading bg="black" color="white">
//           Home
//         </Heading>
//         <Box sx={BoxCSS}>
//           <Flex bg="black" mt="0">
//             <HStack>
//               <WrapItem>
//                 <Avatar
//                   size="md"
//                   name={currentUser.fullName}
//                   src={currentUser.photoProfile}
//                 />
//               </WrapItem>
//               <form onSubmit={handleSubmit}>
//                 <Input
//                   {...register("content")}
//                   name="content"
//                   w="360px"
//                   placeholder="What is Happening?"
//                   border="none"
//                   color="white"
//                   _active={{
//                     border: "none",
//                   }}
//                 />

//                 <label htmlFor="fileupload">
//                   <Icon
//                     cursor={"pointer"}
//                     position={"relative"}
//                     top={2.5}
//                     paddingLeft={"5px"}
//                     color="brand.900"
//                     fontSize={35}
//                     ml={"5px"}
//                     _hover={{
//                       color: "white",
//                     }}
//                     as={FaImage}
//                   />
//                 </label>

//                 <Input
//                   hidden
//                   id="fileupload"
//                   type="file"
//                   w="380px"
//                   border="none"
//                   color="white"
//                   onChange={handleImageChange}
//                 />

//                 {imagePreview && (
//                   <Box position="relative" mt={2}>
//                     <Image
//                       src={imagePreview}
//                       alt="Image Preview"
//                       borderRadius="md"
//                     />
//                     <Icon
//                       as={FaTimesCircle}
//                       color="red.500"
//                       position="absolute"
//                       top="5px"
//                       right="5px"
//                       boxSize={6}
//                       cursor="pointer"
//                       onClick={handleRemoveImage}
//                     />
//                   </Box>
//                 )}

//                 <Button
//                   position={"relative"}
//                   bottom={"1"}
//                   ml="8px"
//                   type="submit"
//                   sx={ButtonPost}
//                 >
//                   Post
//                 </Button>
//               </form>
//             </HStack>
//           </Flex>
//         </Box>
//         {threads?.map((thread) => (
//           <ThreadCard key={thread.id} thread={thread} />
//         ))}
//       </Box>
//     </Box>
//   );
// }

// import { useState } from "react";
// import { CreateThreadDTO } from "../features/home/types/thread";
// import { useSelector } from "react-redux";
// import { RootState } from "../redux/store";
// import { useHomePage } from "../hooks/use-home-page";

// export function CardBeranda() {
//   const currentUser = useSelector((state: RootState) => state.auth.user);
//   const { threads, BoxCSS, ButtonPost, onSubmit, register } = useHomePage();

//   const [imagePreview, setImagePreview] = useState<string | null>(null);
//   const [selectedImage, setSelectedImage] = useState<File | null>(null);

//   const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const file = e.target.files?.[0];
//     if (file) {
//       setSelectedImage(file);
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         setImagePreview(reader.result as string);
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   const handleRemoveImage = () => {
//     setSelectedImage(null);
//     setImagePreview(null);
//   };

//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();

//     // Buat objek DTO sesuai tipe yang dibutuhkan
//     const createThreadDTO: CreateThreadDTO = {
//       content: (
//         e.currentTarget.elements.namedItem("content") as HTMLInputElement
//       ).value,
//       image: selectedImage, // Sesuaikan ini jika tipe `image` berbeda di DTO Anda
//     };

//     // Kirim objek DTO ke fungsi onSubmit
//     onSubmit(createThreadDTO);
//   };

//   // Konfigurasi tampilan scroll
//   const scrollbar = {
//     "overflow-x": "hidden",
//     "::-webkit-scrollbar": {
//       width: "10px",
//     },
//     "::-webkit-scrollbar-track": {
//       border: "7px solid black",
//     },
//     "::-webkit-scrollbar-thumb": {
//       background: "linear-gradient(transparent,green)",
//       borderRadius: "6px",
//     },
//   };

//   return (
//     <Box
//       overflow="scroll"
//       sx={scrollbar}
//       w="600px"
//       m="0"
//       bg="black"
//       h="703px"
//       border="1px solid rgb(47, 51, 54)"
//       borderTop="none"
//       borderBottom="none"
//       paddingTop="10px"
//     >
//       <Box sx={BoxCSS}>
//         <Heading bg="black" color="white">
//           Home
//         </Heading>
//         <Box sx={BoxCSS}>
//           <Flex bg="black" mt="0">
//             <HStack>
//               <WrapItem>
//                 <Avatar
//                   size="md"
//                   name={currentUser.fullName}
//                   src={currentUser.photoProfile}
//                 />
//               </WrapItem>
//               <form onSubmit={handleSubmit}>
//                 <Input
//                   {...register("content")}
//                   name="content"
//                   w="360px"
//                   placeholder="What is Happening?"
//                   border="none"
//                   color="white"
//                   _active={{
//                     border: "none",
//                   }}
//                 />

//                 <label htmlFor="fileupload">
//                   <Icon
//                     cursor={"pointer"}
//                     position={"relative"}
//                     top={2.5}
//                     paddingLeft={"5px"}
//                     color="brand.900"
//                     fontSize={35}
//                     ml={"5px"}
//                     _hover={{
//                       color: "white",
//                     }}
//                     as={FaImage}
//                   />
//                 </label>

//                 <Input
//                   hidden
//                   id="fileupload"
//                   type="file"
//                   w="380px"
//                   border="none"
//                   color="white"
//                   onChange={handleImageChange}
//                 />

//                 {imagePreview && (
//                   <Box position="relative" mt={2}>
//                     <Image
//                       src={imagePreview}
//                       alt="Image Preview"
//                       borderRadius="md"
//                     />
//                     <Icon
//                       as={FaTimesCircle}
//                       color="red.500"
//                       position="absolute"
//                       top="5px"
//                       right="5px"
//                       boxSize={6}
//                       cursor="pointer"
//                       onClick={handleRemoveImage}
//                     />
//                   </Box>
//                 )}

//                 <Button
//                   position={"relative"}
//                   bottom={"1"}
//                   ml="8px"
//                   type="submit"
//                   sx={ButtonPost}
//                 >
//                   Post
//                 </Button>
//               </form>
//             </HStack>
//           </Flex>
//         </Box>
//         {threads?.map((thread) => (
//           <ThreadCard key={thread.id} thread={thread} />
//         ))}
//       </Box>
//     </Box>
//   );
// }

export function CardBeranda() {
  const currentUser = useSelector((state: RootState) => state.auth.user);
  const { threads, BoxCSS, ButtonPost, onSubmit, register } = useHomePage();

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

    // Buat FileList sementara
    const dataTransfer = new DataTransfer();
    if (selectedImage) {
      dataTransfer.items.add(selectedImage);
    }

    const createThreadDTO = {
      content: content,
      image: dataTransfer.files, // Masukkan FileList ke dalam DTO
    };

    onSubmit(createThreadDTO);
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
      <Box sx={BoxCSS}>
        <Heading bg="black" color="white">
          Home
        </Heading>
        <Box sx={BoxCSS}>
          <Flex bg="black" mt="0">
            <HStack>
              <WrapItem>
                <Avatar
                  position={"relative"}
                  bottom={"1"}
                  size="md"
                  name={currentUser.fullName}
                  src={currentUser.photoProfile}
                />
              </WrapItem>
              <form onSubmit={handleSubmit}>
                <Input
                  {...register("content")}
                  name="content"
                  w="350px"
                  placeholder="What is Happening?"
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

                <Button
                  position={"relative"}
                  bottom={"1"}
                  ml="8px"
                  type="submit"
                  sx={ButtonPost}
                >
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
        {threads?.map((thread) => (
          <ThreadCard key={thread.id} thread={thread} />
        ))}
      </Box>
    </Box>
  );
}
