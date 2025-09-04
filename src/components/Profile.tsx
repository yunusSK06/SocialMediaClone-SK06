import React, { useState } from 'react';
import { Settings, Grid3X3, Bookmark, Tag, User } from 'lucide-react';
import { User as UserType, Post } from '../types';
import { currentUser, posts } from '../data/mockData';

interface ProfileProps {
  user?: UserType;
  onFollow?: (userId: string) => void;
}

export default function Profile({ user = currentUser, onFollow }: ProfileProps) {
  const [activeTab, setActiveTab] = useState('posts');
  const userPosts = posts.filter(post => post.user.id === user.id);

  const isCurrentUser = user.id === currentUser.id;

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Profile Header */}
      <div className="flex items-start space-x-8 mb-8">
        <div className="flex-shrink-0">
          <div className="w-32 h-32 rounded-full bg-gradient-to-br from-purple-400 to-pink-400 p-1">
            <img
              src={user.avatar}
              alt={user.username}
              className="w-full h-full rounded-full object-cover"
            />
          </div>
        </div>

        <div className="flex-1">
          <div className="flex items-center space-x-4 mb-4">
            <h1 className="text-2xl font-light">{user.username}</h1>
            {user.isVerified && (
              <div className="w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center">
                <svg className="w-2.5 h-2.5 text-white fill-current" viewBox="0 0 20 20">
                  <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                </svg>
              </div>
            )}
            
            {isCurrentUser ? (
              <div className="flex space-x-2">
                <button className="px-4 py-1.5 text-sm font-semibold bg-gray-200 hover:bg-gray-300 rounded transition-colors">
                  Edit profile
                </button>
                <button className="p-1.5 text-gray-600 hover:text-black transition-colors">
                  <Settings className="w-5 h-5" />
                </button>
              </div>
            ) : (
              <div className="flex space-x-2">
                <button
                  onClick={() => onFollow?.(user.id)}
                  className={`px-6 py-1.5 text-sm font-semibold rounded transition-colors ${
                    user.isFollowing
                      ? 'bg-gray-200 hover:bg-gray-300 text-black'
                      : 'bg-blue-500 hover:bg-blue-600 text-white'
                  }`}
                >
                  {user.isFollowing ? 'Following' : 'Follow'}
                </button>
                <button className="px-4 py-1.5 text-sm font-semibold bg-gray-200 hover:bg-gray-300 rounded transition-colors">
                  Message
                </button>
              </div>
            )}
          </div>

          {/* Stats */}
          <div className="flex space-x-8 mb-4">
            <div className="text-center">
              <div className="font-semibold text-lg">{user.postCount}</div>
              <div className="text-gray-500 text-sm">posts</div>
            </div>
            <button className="text-center hover:opacity-75 transition-opacity">
              <div className="font-semibold text-lg">{user.followerCount.toLocaleString()}</div>
              <div className="text-gray-500 text-sm">followers</div>
            </button>
            <button className="text-center hover:opacity-75 transition-opacity">
              <div className="font-semibold text-lg">{user.followingCount.toLocaleString()}</div>
              <div className="text-gray-500 text-sm">following</div>
            </button>
          </div>

          {/* Bio */}
          <div>
            <h2 className="font-semibold mb-1">{user.fullName}</h2>
            {user.bio && (
              <p className="text-sm text-gray-700 whitespace-pre-line">{user.bio}</p>
            )}
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="border-t border-gray-200">
        <div className="flex justify-center space-x-16">
          <button
            onClick={() => setActiveTab('posts')}
            className={`flex items-center space-x-1 py-3 text-sm font-medium border-t-2 transition-colors ${
              activeTab === 'posts'
                ? 'border-black text-black'
                : 'border-transparent text-gray-500 hover:text-gray-700'
            }`}
          >
            <Grid3X3 className="w-4 h-4" />
            <span>POSTS</span>
          </button>
          
          {isCurrentUser && (
            <button
              onClick={() => setActiveTab('saved')}
              className={`flex items-center space-x-1 py-3 text-sm font-medium border-t-2 transition-colors ${
                activeTab === 'saved'
                  ? 'border-black text-black'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              <Bookmark className="w-4 h-4" />
              <span>SAVED</span>
            </button>
          )}
          
          <button
            onClick={() => setActiveTab('tagged')}
            className={`flex items-center space-x-1 py-3 text-sm font-medium border-t-2 transition-colors ${
              activeTab === 'tagged'
                ? 'border-black text-black'
                : 'border-transparent text-gray-500 hover:text-gray-700'
            }`}
          >
            <Tag className="w-4 h-4" />
            <span>TAGGED</span>
          </button>
        </div>
      </div>

      {/* Posts Grid */}
      <div className="mt-6">
        {activeTab === 'posts' && (
          <>
            {userPosts.length > 0 ? (
              <div className="grid grid-cols-3 gap-1 md:gap-6">
                {userPosts.map((post) => (
                  <button
                    key={post.id}
                    className="aspect-square bg-gray-100 hover:opacity-75 transition-opacity group relative"
                  >
                    <img
                      src={post.image}
                      alt="Post"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="flex items-center space-x-4 text-white">
                        <div className="flex items-center space-x-1">
                          <span className="font-semibold">{post.likes}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <span className="font-semibold">{post.comments.length}</span>
                        </div>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full border-2 border-black flex items-center justify-center">
                  <User className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-light mb-1">No Posts Yet</h3>
                <p className="text-gray-500">When you share photos, they will appear on your profile.</p>
              </div>
            )}
          </>
        )}

        {activeTab === 'saved' && (
          <div className="text-center py-12">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full border-2 border-black flex items-center justify-center">
              <Bookmark className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-light mb-1">Save</h3>
            <p className="text-gray-500">Save photos and videos that you want to see again.</p>
          </div>
        )}

        {activeTab === 'tagged' && (
          <div className="text-center py-12">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full border-2 border-black flex items-center justify-center">
              <Tag className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-light mb-1">Photos of you</h3>
            <p className="text-gray-500">When people tag you in photos, they'll appear here.</p>
          </div>
        )}
      </div>
    </div>
  );
}