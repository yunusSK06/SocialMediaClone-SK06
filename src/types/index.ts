export interface User {
  id: string;
  username: string;
  fullName: string;
  avatar: string;
  isFollowing?: boolean;
  followerCount: number;
  followingCount: number;
  postCount: number;
  bio?: string;
  isVerified?: boolean;
}

export interface Post {
  id: string;
  user: User;
  image: string;
  caption: string;
  likes: number;
  isLiked: boolean;
  isSaved: boolean;
  comments: Comment[];
  timestamp: string;
  location?: string;
}

export interface Comment {
  id: string;
  user: User;
  text: string;
  timestamp: string;
  likes: number;
}

export interface Story {
  id: string;
  user: User;
  image: string;
  isViewed: boolean;
}

export interface CurrentUser extends User {
  email: string;
}