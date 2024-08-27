import { zodResolver } from "@hookform/resolvers/zod";
import {
  QueryClient,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import { AxiosError } from "axios";
import { SubmitHandler, useForm } from "react-hook-form";
import { ThreadEntity } from "../features/home/entities/thread-entity";
import { CreateThreadDTO } from "../features/home/types/thread";
import { createThreadSchemaZod } from "../features/home/validators/thread-schema";
import { api } from "../libraries/api";

export const useReplyThread = (id: number) => {
  const queryClient = useQueryClient();
  const { register, handleSubmit } = useForm<CreateThreadDTO>({
    mode: "onSubmit",
    resolver: zodResolver(createThreadSchemaZod),
  });

  const { mutateAsync } = useMutation<
    ThreadEntity,
    AxiosError,
    CreateThreadDTO
  >({
    mutationFn: (newThread) => {
      const formData = new FormData();
      formData.append("content", newThread.content);
      if (newThread.image[0]) {
        formData.append("image", newThread.image[0]);
      }
      return api.post("/threads/" + id, formData, {
        headers: {
          Authorization: `Bearer ${localStorage.token}`,
        },
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["detailThreadsKey"] });
    },
  });

  const onSubmit: SubmitHandler<CreateThreadDTO> = async (data) => {
    try {
      await mutateAsync(data);
    } catch (error) {
      console.log(error);
    }
  };

  // untuk bagian ambil data dari input />

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
    BoxCSS,
    ButtonPost,
    onSubmit,
    register,
    handleSubmit,
  };
};
