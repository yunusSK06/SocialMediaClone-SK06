import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Feed from './components/Feed';
import Profile from './components/Profile';
import Search from './components/Search';
import { posts as initialPosts, stories as initialStories, users } from './data/mockData';
import { Post, Story, User } from './types';
import { useLocalStorage } from './hooks/useLocalStorage';

function App() {
  const [currentView, setCurrentView] = useState('home');
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  
  // Use localStorage to persist likes, saves, and follows
  const [posts, setPosts] = useLocalStorage<Post[]>('instagram-posts', initialPosts);
  const [stories, setStories] = useLocalStorage<Story[]>('instagram-stories', initialStories);
  const [userFollows, setUserFollows] = useLocalStorage<Record<string, boolean>>('instagram-follows', {});

  // Update posts when initialPosts change (in case we add new posts)
  useEffect(() => {
    const existingPostIds = posts.map(p => p.id);
    const newPosts = initialPosts.filter(p => !existingPostIds.includes(p.id));
    if (newPosts.length > 0) {
      setPosts([...newPosts, ...posts]);
    }
  }, []);

  const handleLike = (postId: string) => {
    setPosts(posts.map(post => 
      post.id === postId 
        ? { 
            ...post, 
            isLiked: !post.isLiked,
            likes: post.isLiked ? post.likes - 1 : post.likes + 1
          }
        : post
    ));
  };

  const handleSave = (postId: string) => {
    setPosts(posts.map(post => 
      post.id === postId 
        ? { ...post, isSaved: !post.isSaved }
        : post
    ));
  };

  const handleFollow = (userId: string) => {
    setUserFollows(prev => ({
      ...prev,
      [userId]: !prev[userId]
    }));
  };

  const handleStoryView = (storyId: string) => {
    setStories(stories.map(story => 
      story.id === storyId 
        ? { ...story, isViewed: true }
        : story
    ));
  };

  const handleUserSelect = (user: User) => {
    setSelectedUser({
      ...user,
      isFollowing: userFollows[user.id] || user.isFollowing || false
    });
    setCurrentView('profile');
  };

  const handleViewChange = (view: string) => {
    if (view !== 'profile') {
      setSelectedUser(null);
    }
    setCurrentView(view);
  };

  // Update user following status
  const updatedUsers = users.map(user => ({
    ...user,
    isFollowing: userFollows[user.id] ?? user.isFollowing
  }));

  return (
    <div className="min-h-screen bg-white">
      <Header currentView={currentView} onViewChange={handleViewChange} />
      
      <div className="pt-16">
        {currentView === 'home' && (
          <Feed
            posts={posts}
            stories={stories}
            onLike={handleLike}
            onSave={handleSave}
            onFollow={handleFollow}
            onStoryView={handleStoryView}
          />
        )}
        
        {currentView === 'search' && (
          <Search onUserSelect={handleUserSelect} />
        )}
        
        {currentView === 'profile' && (
          <Profile
            user={selectedUser || undefined}
            onFollow={handleFollow}
          />
        )}
      </div>
    </div>
  );
}

export default App;