import { useQuery } from "@tanstack/react-query";
import {
  FollowersEntity,
  FollowingsEntity,
} from "../features/home/entities/follow-entity";
import { api } from "../libraries/api";

export const useFollowingPage = (userId: number) => {
  const { data: listFollowings } = useQuery<FollowingsEntity>({
    queryKey: ["followingKey"],
    queryFn: getFollowing,
  });

  async function getFollowing() {
    const response = await api.get("/get-followings/" + userId, {
      headers: {
        Authorization: `Bearer ${localStorage.token}`,
      },
    });
    return response.data[0];
  }

  return {
    listFollowings,
  };
};

export const useFollowerPage = (userId: number) => {
  const { data: listFollowers } = useQuery<FollowersEntity>({
    queryKey: ["followerKey"],
    queryFn: getFollowers,
  });

  async function getFollowers() {
    const response = await api.get("/get-followers/" + userId, {
      headers: {
        Authorization: `Bearer ${localStorage.token}`,
      },
    });
    return response.data[0];
  }

  return {
    listFollowers,
  };
};
