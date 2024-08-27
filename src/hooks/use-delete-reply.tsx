import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { SubmitHandler } from "react-hook-form";
import { ThreadEntity } from "../features/home/entities/thread-entity";
import { api } from "../libraries/api";
import { useEffect } from "react";

export const DeleteReply = (id: number) => {
  const queryClient = useQueryClient();

  const { data: deleteThread, refetch } = useQuery<ThreadEntity[]>({
    queryKey: ["DeleteThreads"],
    queryFn: getThreads,
  });

  async function getThreads() {
    const response = await api.get("/thread/" + id, {
      headers: {
        Authorization: `Bearer ${localStorage.token}`,
      },
    });
    return response.data;
  }

  useEffect(() => {
    getThreads();
  }, []);

  const { mutateAsync } = useMutation({
    mutationFn: async () => {
      const response = await api.delete("/threads/" + id, {
        headers: {
          Authorization: `Bearer ${localStorage.token}`,
        },
      });
      return response;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["threadsKey"] });
      queryClient.invalidateQueries({ queryKey: ["detailThreadsKey"] });
      // queryClient.invalidateQueries({ queryKey: ["mythreads"] });
    },
  });

  const onDelete: SubmitHandler<any> = async (data) => {
    try {
      await mutateAsync(data as any);
      refetch();
    } catch (error) {
      console.log(error);
    }
  };

  return {
    deleteThread,
    onDelete,
  };
};
