import { User, Post, Story, Comment } from '../types';

export const currentUser: User = {
  id: 'current-user',
  username: 'john_doe',
  fullName: 'John Doe',
  avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150',
  followerCount: 1205,
  followingCount: 743,
  postCount: 89,
  bio: '📸 Photography enthusiast | 🌍 Travel lover | ☕ Coffee addict',
  isVerified: true
};

export const users: User[] = [
  {
    id: '1',
    username: 'sarah_wilson',
    fullName: 'Sarah Wilson',
    avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150',
    isFollowing: true,
    followerCount: 2431,
    followingCount: 892,
    postCount: 156,
    bio: '🎨 Artist & Designer | NYC 🗽',
    isVerified: true
  },
  {
    id: '2',
    username: 'alex_photo',
    fullName: 'Alex Rodriguez',
    avatar: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=150',
    isFollowing: false,
    followerCount: 5621,
    followingCount: 234,
    postCount: 289,
    bio: '📷 Professional Photographer | Available for bookings',
    isVerified: true
  },
  {
    id: '3',
    username: 'emma_travel',
    fullName: 'Emma Thompson',
    avatar: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=150',
    isFollowing: true,
    followerCount: 3891,
    followingCount: 1567,
    postCount: 234,
    bio: '✈️ Digital Nomad | 🌎 37 countries and counting',
  },
  {
    id: '4',
    username: 'mike_fitness',
    fullName: 'Mike Johnson',
    avatar: 'https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=150',
    isFollowing: false,
    followerCount: 12456,
    followingCount: 456,
    postCount: 567,
    bio: '💪 Fitness Coach | Transform your life | DM for coaching',
  }
];

const comments: Comment[] = [
  {
    id: '1',
    user: users[0],
    text: 'Amazing shot! 😍',
    timestamp: '2h',
    likes: 12
  },
  {
    id: '2',
    user: users[1],
    text: 'Love the composition!',
    timestamp: '1h',
    likes: 8
  }
];

export const posts: Post[] = [
  {
    id: '1',
    user: users[0],
    image: 'https://images.pexels.com/photos/1591447/pexels-photo-1591447.jpeg?auto=compress&cs=tinysrgb&w=600',
    caption: 'Golden hour magic ✨ There\'s nothing quite like that perfect light just before sunset. Shot this beauty in Central Park yesterday! #goldenhour #photography #nyc',
    likes: 1247,
    isLiked: true,
    isSaved: false,
    comments: comments,
    timestamp: '3h',
    location: 'Central Park, New York'
  },
  {
    id: '2',
    user: users[1],
    image: 'https://images.pexels.com/photos/1323550/pexels-photo-1323550.jpeg?auto=compress&cs=tinysrgb&w=600',
    caption: 'Morning coffee and good vibes ☕️ Starting the week right with this perfect brew from my favorite local café. What\'s your go-to morning ritual?',
    likes: 892,
    isLiked: false,
    isSaved: true,
    comments: [],
    timestamp: '5h',
    location: 'Brooklyn, NY'
  },
  {
    id: '3',
    user: users[2],
    image: 'https://images.pexels.com/photos/1591056/pexels-photo-1591056.jpeg?auto=compress&cs=tinysrgb&w=600',
    caption: 'Adventures in Bali 🌴 This place never fails to amaze me. The culture, the food, the people - everything is just perfect. Already planning my next visit! #bali #travel #wanderlust',
    likes: 2156,
    isLiked: true,
    isSaved: true,
    comments: comments,
    timestamp: '8h',
    location: 'Ubud, Bali'
  },
  {
    id: '4',
    user: users[3],
    image: 'https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=600',
    caption: 'Push your limits 💪 Another intense session done! Remember, the only bad workout is the one that didn\'t happen. What\'s your fitness goal for this week? #fitness #motivation #training',
    likes: 743,
    isLiked: false,
    isSaved: false,
    comments: [],
    timestamp: '12h',
    location: 'Gold\'s Gym'
  },
  {
    id: '5',
    user: currentUser,
    image: 'https://images.pexels.com/photos/1386604/pexels-photo-1386604.jpeg?auto=compress&cs=tinysrgb&w=600',
    caption: 'Sunday sunset vibes 🌅 Nothing beats ending the week with nature\'s most beautiful show. Grateful for moments like these that remind us to slow down and appreciate the simple things.',
    likes: 456,
    isLiked: false,
    isSaved: false,
    comments: [],
    timestamp: '1d',
    location: 'Malibu Beach'
  }
];

export const stories: Story[] = [
  {
    id: '1',
    user: currentUser,
    image: 'https://images.pexels.com/photos/1386604/pexels-photo-1386604.jpeg?auto=compress&cs=tinysrgb&w=150',
    isViewed: false
  },
  {
    id: '2',
    user: users[0],
    image: 'https://images.pexels.com/photos/1591447/pexels-photo-1591447.jpeg?auto=compress&cs=tinysrgb&w=150',
    isViewed: true
  },
  {
    id: '3',
    user: users[1],
    image: 'https://images.pexels.com/photos/1323550/pexels-photo-1323550.jpeg?auto=compress&cs=tinysrgb&w=150',
    isViewed: false
  },
  {
    id: '4',
    user: users[2],
    image: 'https://images.pexels.com/photos/1591056/pexels-photo-1591056.jpeg?auto=compress&cs=tinysrgb&w=150',
    isViewed: true
  },
  {
    id: '5',
    user: users[3],
    image: 'https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=150',
    isViewed: false
  }
];