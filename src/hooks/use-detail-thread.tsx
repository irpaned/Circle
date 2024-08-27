import { useQuery } from "@tanstack/react-query";
import { ThreadEntity } from "../features/home/entities/thread-entity";
import { api } from "../libraries/api";

export const useDetailThread = (id: number) => {
  const { data: thread } = useQuery<ThreadEntity>({
    queryKey: ["detailThreadsKey"],
    queryFn: async () => {
      const response = await api.get(`/detail-thread/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.token}`,
        },
      });
      console.log("BBBBBBBBB", response.data);
      return response.data;
    },
  });

  // async function getDetailThreads(id: number) {
  //   const response = await api.get(`/detail-thread/${id}`, {
  //     headers: {
  //       Authorization: `Bearer ${localStorage.token}`,
  //     },
  //   });
  //   console.log("RESSSSSPONSE", response.data);

  //   return response.data;
  // }

  const BoxCSS = {
    border: "1px solid rgb(47, 51, 54)",
    borderTop: "none",
    borderRight: "none",
    borderLeft: "none",
    p: "20px 15px 20px 15px",
  };

  const ButtonPost = {
    bg: "brand.900",
    color: "white",
    borderRadius: 30,
    p: "0px 20px 1px 20px",
    ":hover": {
      bg: "white",
      color: "black",
    },
    ":active": {
      color: "black",
      bg: "#ACACAC",
    },
  };

  return {
    thread,
    BoxCSS,
    ButtonPost,
  };
};

// import { useQuery } from "@tanstack/react-query";
// import { ThreadEntity } from "../features/home/entities/thread-entity";
// import { api } from "../libraries/api";

// export const useDetailThread = (id: number) => {
//   const getDetailThreads = async () => {
//     const response = await api.get(`/detail-thread/${id}`, {
//       headers: {
//         Authorization: `Bearer ${localStorage.token}`,
//       },
//     });
//     console.log("RESSSSSPONSE", response.data);
//     return response.data;
//   };

//   const { data: thread } = useQuery<ThreadEntity>({
//     queryKey: ["detailThreadsKey", id],
//     queryFn: getDetailThreads,
//     enabled: !!id, // Hanya akan fetch jika id ada
//   });

//   const BoxCSS = {
//     border: "1px solid rgb(47, 51, 54)",
//     borderTop: "none",
//     borderRight: "none",
//     borderLeft: "none",
//     padding: "20px 15px",
//   };

//   const ButtonPost = {
//     backgroundColor: "brand.900",
//     color: "white",
//     borderRadius: 30,
//     padding: "0px 20px 1px 20px",
//     ":hover": {
//       backgroundColor: "white",
//       color: "black",
//     },
//     ":active": {
//       color: "black",
//       backgroundColor: "#ACACAC",
//     },
//   };

//   return {
//     thread,
//     BoxCSS,
//     ButtonPost,
//   };
// };
