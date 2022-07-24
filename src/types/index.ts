export interface UserEntity {
  id: string;
}

export interface GithubUser extends UserEntity {
  github_email: string;
  avatar: string;
  name: string;
  url: string;
  introduce: string;
}

export type ProfileProps = {
  github_email: string;
  github_avatar: string;
  github_username: string;
};

export type LikeProps = {
  _id: string;
  title: string;
  like: number;
  description: string;
  used_language: string[];
  thumbnail: string;
  created_at: string;
};

export interface PostEntity {
  id: string;
  title: string;
  post_like?: number;
  description: string;
  hashtag?: string;
  thumbnail?: string;
  created_at: string;
}

export interface GithubPost extends PostEntity {
  id: string;
  stars: number;
  author: string;
  url: string;
  used_language: string;
}

export interface RepositoryforDropdown {
  id: string;
  name: string;
  url: string;
  description: string;
  user: string;
}

export interface ImageEntity {}

export interface PostCreateForm {
  author: string;
  github_repository_id: string;
  title: string;
  description: string;
  hashtag: string;
}

export interface PostUpdateForm {
  id: string;
}

export interface PostDeleteForm {
  id: string;
}
