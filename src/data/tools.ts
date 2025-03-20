import { Tool } from '../types';

export const categories = [
  'All',
  'Text Generation',
  'Image Generation',
  'Audio & Speech',
  'Video Creation',
  'Code Assistant',
  'Productivity',
  'Research',
  'Education',
];

export const tools: Tool[] = [
  {
    id: '1',
    name: 'ChatGPT',
    description: 'Advanced language model for conversation and content generation',
    logo: 'MessageSquare',
    tags: ['Writing', 'Coding', 'Analysis'],
    pricing: 'Freemium',
    rating: 4.8,
    url: 'https://chat.openai.com',
    category: 'Text Generation',
  },
  {
    id: '2',
    name: 'DALL·E',
    description: 'AI system that creates realistic images from text descriptions',
    logo: 'Image',
    tags: ['Art', 'Design', 'Creative'],
    pricing: 'Paid',
    rating: 4.7,
    url: 'https://openai.com/dall-e-2',
    category: 'Image Generation',
  },
  {
    id: '3',
    name: 'GitHub Copilot',
    description: 'AI pair programmer that helps you write better code',
    logo: 'Code2',
    tags: ['Development', 'Productivity'],
    pricing: 'Paid',
    rating: 4.9,
    url: 'https://github.com/features/copilot',
    category: 'Code Assistant',
  },
  // Add more tools as needed
];