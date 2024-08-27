import { UserEntity } from "./user-entity";

export type ThreadEntity = {
  id: number;
  content: string;
  image: string;
  user: UserEntity;
  createdAt: Date;
  updatedAt: Date;
  TotalLikes: number;
  TotalReplies: number;
  isLiked: boolean;
  replies: [
    {
      id: number;
      userId: number;
      content: string;
      image: string;
      createdAt: Date;
      user: {
        likes: {
          id: number;
          userId: number;
          threadId: number;
          createdAt: Date;
          updateAt: Date;
        };
        photoProfile: string;
        userName: string;
        fullName: string;
        createdAt: Date;
      };
    }
  ];
};
