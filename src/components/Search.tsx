import React, { useState } from 'react';
import { Search as SearchIcon, X } from 'lucide-react';
import { users, posts } from '../data/mockData';
import { User, Post } from '../types';

interface SearchProps {
  onUserSelect: (user: User) => void;
}

export default function Search({ onUserSelect }: SearchProps) {
  const [query, setQuery] = useState('');
  const [activeTab, setActiveTab] = useState('top');

  const filteredUsers = users.filter(user =>
    user.username.toLowerCase().includes(query.toLowerCase()) ||
    user.fullName.toLowerCase().includes(query.toLowerCase())
  );

  const filteredPosts = posts.filter(post =>
    post.caption.toLowerCase().includes(query.toLowerCase()) ||
    post.location?.toLowerCase().includes(query.toLowerCase())
  );

  const explorePosts = posts.slice().sort(() => Math.random() - 0.5);

  return (
    <div className="max-w-4xl mx-auto px-4 py-6">
      {/* Search Header */}
      <div className="relative mb-6">
        <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
        <input
          type="text"
          placeholder="Search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full pl-10 pr-10 py-3 bg-gray-100 rounded-lg border-none outline-none focus:bg-white focus:ring-2 focus:ring-gray-300 transition-all"
        />
        {query && (
          <button
            onClick={() => setQuery('')}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>

      {query ? (
        <div>
          {/* Search Results Tabs */}
          <div className="flex space-x-8 mb-6 border-b border-gray-200">
            <button
              onClick={() => setActiveTab('top')}
              className={`pb-3 text-sm font-medium border-b-2 transition-colors ${
                activeTab === 'top'
                  ? 'border-black text-black'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              Top
            </button>
            <button
              onClick={() => setActiveTab('accounts')}
              className={`pb-3 text-sm font-medium border-b-2 transition-colors ${
                activeTab === 'accounts'
                  ? 'border-black text-black'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              Accounts
            </button>
            <button
              onClick={() => setActiveTab('tags')}
              className={`pb-3 text-sm font-medium border-b-2 transition-colors ${
                activeTab === 'tags'
                  ? 'border-black text-black'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              Tags
            </button>
            <button
              onClick={() => setActiveTab('places')}
              className={`pb-3 text-sm font-medium border-b-2 transition-colors ${
                activeTab === 'places'
                  ? 'border-black text-black'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              Places
            </button>
          </div>

          {/* Search Results */}
          {activeTab === 'top' && (
            <div className="space-y-6">
              {/* Users */}
              {filteredUsers.length > 0 && (
                <div>
                  <h3 className="text-sm font-semibold text-gray-600 mb-3">People</h3>
                  <div className="space-y-2">
                    {filteredUsers.map((user) => (
                      <button
                        key={user.id}
                        onClick={() => onUserSelect(user)}
                        className="w-full flex items-center space-x-3 p-2 hover:bg-gray-50 rounded-lg transition-colors text-left"
                      >
                        <img
                          src={user.avatar}
                          alt={user.username}
                          className="w-12 h-12 rounded-full object-cover"
                        />
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center space-x-1">
                            <p className="font-semibold text-sm text-gray-900">
                              {user.username}
                            </p>
                            {user.isVerified && (
                              <div className="w-3 h-3 bg-blue-500 rounded-full flex items-center justify-center">
                                <svg className="w-2 h-2 text-white fill-current" viewBox="0 0 20 20">
                                  <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                                </svg>
                              </div>
                            )}
                          </div>
                          <p className="text-sm text-gray-500 truncate">{user.fullName}</p>
                          <p className="text-xs text-gray-400">
                            {user.followerCount.toLocaleString()} followers
                          </p>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {activeTab === 'accounts' && (
            <div className="space-y-2">
              {filteredUsers.map((user) => (
                <button
                  key={user.id}
                  onClick={() => onUserSelect(user)}
                  className="w-full flex items-center space-x-3 p-2 hover:bg-gray-50 rounded-lg transition-colors text-left"
                >
                  <img
                    src={user.avatar}
                    alt={user.username}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center space-x-1">
                      <p className="font-semibold text-sm text-gray-900">
                        {user.username}
                      </p>
                      {user.isVerified && (
                        <div className="w-3 h-3 bg-blue-500 rounded-full flex items-center justify-center">
                          <svg className="w-2 h-2 text-white fill-current" viewBox="0 0 20 20">
                            <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                          </svg>
                        </div>
                      )}
                    </div>
                    <p className="text-sm text-gray-500 truncate">{user.fullName}</p>
                    <p className="text-xs text-gray-400">
                      {user.followerCount.toLocaleString()} followers
                    </p>
                  </div>
                </button>
              ))}
            </div>
          )}
        </div>
      ) : (
        <div>
          {/* Explore Grid */}
          <div className="grid grid-cols-3 gap-1 md:gap-3">
            {explorePosts.map((post) => (
              <button
                key={post.id}
                className="aspect-square bg-gray-100 hover:opacity-75 transition-opacity group relative"
              >
                <img
                  src={post.image}
                  alt="Explore post"
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
        </div>
      )}
    </div>
  );
}