import React from 'react';
import { Post as PostType, Story } from '../types';
import Stories from './Stories';
import Post from './Post';

interface FeedProps {
  posts: PostType[];
  stories: Story[];
  onLike: (postId: string) => void;
  onSave: (postId: string) => void;
  onFollow: (userId: string) => void;
  onStoryView: (storyId: string) => void;
}

export default function Feed({ posts, stories, onLike, onSave, onFollow, onStoryView }: FeedProps) {
  return (
    <main className="max-w-2xl mx-auto">
      <Stories stories={stories} onStoryView={onStoryView} />
      <div className="space-y-0">
        {posts.map((post) => (
          <Post
            key={post.id}
            post={post}
            onLike={onLike}
            onSave={onSave}
            onFollow={onFollow}
          />
        ))}
      </div>
    </main>
  );
}