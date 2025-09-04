import React, { useState } from 'react';
import { Heart, MessageCircle, Send, Bookmark, MoreHorizontal } from 'lucide-react';
import { Post as PostType } from '../types';

interface PostProps {
  post: PostType;
  onLike: (postId: string) => void;
  onSave: (postId: string) => void;
  onFollow: (userId: string) => void;
}

export default function Post({ post, onLike, onSave, onFollow }: PostProps) {
  const [showFullCaption, setShowFullCaption] = useState(false);
  const [comment, setComment] = useState('');

  const handleSubmitComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (comment.trim()) {
      // Handle comment submission
      setComment('');
    }
  };

  const captionPreview = post.caption.length > 100 ? 
    post.caption.substring(0, 100) + '...' : 
    post.caption;

  return (
    <article className="bg-white border-b border-gray-200">
      {/* Header */}
      <header className="flex items-center justify-between p-4">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-400 to-pink-400 p-0.5">
            <img
              src={post.user.avatar}
              alt={post.user.username}
              className="w-full h-full rounded-full object-cover"
            />
          </div>
          <div className="flex items-center space-x-2">
            <h3 className="font-semibold text-sm text-gray-900">
              {post.user.username}
            </h3>
            {post.user.isVerified && (
              <div className="w-3 h-3 bg-blue-500 rounded-full flex items-center justify-center">
                <svg className="w-2 h-2 text-white fill-current" viewBox="0 0 20 20">
                  <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                </svg>
              </div>
            )}
            <span className="text-gray-400">•</span>
            <span className="text-sm text-gray-500">{post.timestamp}</span>
            {post.location && (
              <>
                <span className="text-gray-400">•</span>
                <span className="text-sm text-gray-500">{post.location}</span>
              </>
            )}
          </div>
        </div>
        <button className="p-1 hover:bg-gray-100 rounded-full transition-colors">
          <MoreHorizontal className="w-5 h-5 text-gray-600" />
        </button>
      </header>

      {/* Image */}
      <div className="relative">
        <img
          src={post.image}
          alt="Post content"
          className="w-full aspect-square object-cover"
        />
      </div>

      {/* Actions */}
      <div className="p-4">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center space-x-4">
            <button
              onClick={() => onLike(post.id)}
              className={`transition-colors ${post.isLiked ? 'text-red-500' : 'text-gray-700 hover:text-gray-500'}`}
            >
              <Heart className={`w-6 h-6 ${post.isLiked ? 'fill-current' : ''}`} />
            </button>
            <button className="text-gray-700 hover:text-gray-500 transition-colors">
              <MessageCircle className="w-6 h-6" />
            </button>
            <button className="text-gray-700 hover:text-gray-500 transition-colors">
              <Send className="w-6 h-6" />
            </button>
          </div>
          <button
            onClick={() => onSave(post.id)}
            className={`transition-colors ${post.isSaved ? 'text-black' : 'text-gray-700 hover:text-gray-500'}`}
          >
            <Bookmark className={`w-6 h-6 ${post.isSaved ? 'fill-current' : ''}`} />
          </button>
        </div>

        {/* Likes */}
        <div className="mb-2">
          <button className="font-semibold text-sm text-gray-900 hover:underline">
            {post.likes.toLocaleString()} likes
          </button>
        </div>

        {/* Caption */}
        <div className="mb-2">
          <span className="font-semibold text-sm text-gray-900 mr-2">
            {post.user.username}
          </span>
          <span className="text-sm text-gray-900">
            {showFullCaption ? post.caption : captionPreview}
          </span>
          {post.caption.length > 100 && (
            <button
              onClick={() => setShowFullCaption(!showFullCaption)}
              className="text-sm text-gray-500 hover:text-gray-700 ml-1"
            >
              {showFullCaption ? 'less' : 'more'}
            </button>
          )}
        </div>

        {/* Comments */}
        {post.comments.length > 0 && (
          <div className="mb-2">
            <button className="text-sm text-gray-500 hover:text-gray-700 mb-1">
              View all {post.comments.length} comments
            </button>
            {post.comments.slice(0, 2).map((comment) => (
              <div key={comment.id} className="text-sm mb-1">
                <span className="font-semibold text-gray-900 mr-2">
                  {comment.user.username}
                </span>
                <span className="text-gray-900">{comment.text}</span>
              </div>
            ))}
          </div>
        )}

        {/* Add Comment */}
        <form onSubmit={handleSubmitComment} className="flex items-center">
          <input
            type="text"
            placeholder="Add a comment..."
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            className="flex-1 text-sm placeholder-gray-400 border-none outline-none"
          />
          {comment.trim() && (
            <button
              type="submit"
              className="text-sm font-semibold text-blue-500 hover:text-blue-700 ml-2"
            >
              Post
            </button>
          )}
        </form>
      </div>
    </article>
  );
}