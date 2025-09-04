import React from 'react';
import { Story } from '../types';
import { Plus } from 'lucide-react';
import { currentUser } from '../data/mockData';

interface StoriesProps {
  stories: Story[];
  onStoryView: (storyId: string) => void;
}

export default function Stories({ stories, onStoryView }: StoriesProps) {
  return (
    <div className="bg-white border-b border-gray-200 p-4">
      <div className="max-w-2xl mx-auto">
        <div className="flex space-x-4 overflow-x-auto scrollbar-hide">
          {/* Add Story */}
          <div className="flex-shrink-0 flex flex-col items-center space-y-2">
            <div className="relative">
              <img
                src={currentUser.avatar}
                alt="Your story"
                className="w-16 h-16 rounded-full object-cover border-2 border-gray-200"
              />
              <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center border-2 border-white">
                <Plus className="w-3 h-3 text-white" />
              </div>
            </div>
            <span className="text-xs text-gray-800 font-medium">Your story</span>
          </div>

          {/* Stories */}
          {stories.map((story) => (
            <button
              key={story.id}
              onClick={() => onStoryView(story.id)}
              className="flex-shrink-0 flex flex-col items-center space-y-2 hover:opacity-75 transition-opacity"
            >
              <div className={`p-0.5 rounded-full ${story.isViewed ? 'bg-gray-300' : 'bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-500'}`}>
                <div className="p-0.5 bg-white rounded-full">
                  <img
                    src={story.image}
                    alt={story.user.username}
                    className="w-14 h-14 rounded-full object-cover"
                  />
                </div>
              </div>
              <span className="text-xs text-gray-800 max-w-16 truncate">
                {story.user.username}
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}