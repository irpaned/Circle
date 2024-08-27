import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { api } from "../libraries/api";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
// import { EditProfileSchema } from '../features/profile/validators/edit-form';
// import { useDispatch, useSelector } from 'react-redux';
// import { RootState } from '../redux/store';
import { useEffect } from "react";
// import { SET_USER } from '../redux/slices/auth';
import { ThreadEntity } from "../features/home/entities/thread-entity";
import { UpdateThread } from "../features/home/types/thread";
import { createThreadSchemaZod } from "../features/home/validators/thread-schema";

export const EditThread = (id: number) => {
  const queryClient = useQueryClient();

  const { data: newThread, refetch } = useQuery<ThreadEntity[]>({
    queryKey: ["EditThread"],
    queryFn: getThread,
  });

  async function getThread() {
    const response = await api.get("/thread/" + id, {
      headers: {
        Authorization: `Bearer ${localStorage.token}`,
      },
    });
    return response.data;
  }

  useEffect(() => {
    getThread();
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UpdateThread>({
    mode: "onSubmit",
    resolver: zodResolver(createThreadSchemaZod),
  });

  const { mutateAsync } = useMutation({
    mutationFn: async (newThread) => {
      console.log(newThread);
      const response = await api.patch("/thread/" + id, newThread, {
        headers: {
          Authorization: `Bearer ${localStorage.token}`,
        },
      });
      return response;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["threadsKey"] });
      queryClient.invalidateQueries({ queryKey: ["mythreads"] });
      queryClient.invalidateQueries({ queryKey: ["detailThreadsKey"] });
    },
  });

  const onSubmit: SubmitHandler<UpdateThread> = async (data) => {
    try {
      console.log("menjalankan update threads");
      await mutateAsync(data as any);
      refetch();
    } catch (error) {
      console.log(error);
    }
  };

  return {
    newThread,
    onSubmit,
    register,
    handleSubmit,
    errors,
  };
};
