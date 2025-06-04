//src/data/cardData.jsx
const cardData = [
  {
    id: '1',
    img: 'https://picsum.photos/800/450?random=1',
    tag: 'Engineering',
    title: 'Revolutionizing software development with cutting-edge tools',
    description:
      'Our latest engineering tools are designed to streamline workflows and boost productivity. Discover how these innovations are transforming the software development landscape.',
    fullContent:
      'This article dives into the latest engineering tools that are revolutionizing software development. Learn about advanced IDEs, CI/CD pipelines, and AI-driven code assistants that enhance productivity. Explore case studies of teams that have transformed their workflows with these innovations...',
    authors: [
      { name: 'Remy Sharp', avatar: '/static/images/avatar/1.jpg' },
      { name: 'Travis Howard', avatar: '/static/images/avatar/2.jpg' },
    ],
  },
  {
    id: '2',
    img: 'https://picsum.photos/800/450?random=2',
    tag: 'Product',
    title: 'Innovative product features that drive success',
    description:
      'Explore the key features of our latest product release that are helping businesses achieve their goals. From user-friendly interfaces to robust functionality, learn why our product stands out.',
    fullContent:
      'Discover the innovative features of our latest product release, including intuitive UI, scalable architecture, and seamless integrations. This article covers how these features empower businesses to achieve their goals, with insights from real-world use cases...',
    authors: [{ name: 'Erica Johns', avatar: '/static/images/avatar/6.jpg' }],
  },
  {
    id: '3',
    img: 'https://picsum.photos/800/450?random=3',
    tag: 'Design',
    title: 'Designing for the future: trends and insights',
    description:
      'Stay ahead of the curve with the latest design trends and insights. Our design team shares their expertise on creating intuitive and visually stunning user experiences.',
    fullContent:
      'This article explores the future of design, covering emerging trends like minimalism, 3D elements, and inclusive design. Gain insights from our design team on crafting user experiences that are both intuitive and visually captivating, with practical tips for implementation...',
    authors: [{ name: 'Kate Morrison', avatar: '/static/images/avatar/7.jpg' }],
  },
  {
    id: '4',
    img: 'https://picsum.photos/800/450?random=4',
    tag: 'Company',
    title: 'Your journey: milestones and achievements',
    description:
      'Take a look at your journey and the milestones achieved along the way. From humble beginnings to industry leader, discover our story of growth and success.',
    fullContent:
      'Join us on a journey through our company’s milestones, from its founding to becoming an industry leader. This article highlights key achievements, strategic pivots, and the vision driving our success, with reflections from our leadership team...',
    authors: [{ name: 'Cindy Baker', avatar: '/static/images/avatar/3.jpg' }],
  },
  {
    id: '5',
    img: 'https://picsum.photos/800/450?random=6',
    tag: 'Product',
    title: 'Maximizing efficiency with our latest product updates',
    description:
      'Our recent product updates are designed to help you maximize efficiency and achieve more. Get a detailed overview of the new features and improvements that can elevate your workflow.',
    fullContent:
      'Learn how our latest product updates can maximize your team’s efficiency. This article details new features like automated workflows, enhanced analytics, and improved user onboarding, with examples of how they streamline operations...',
    authors: [{ name: 'Travis Howard', avatar: '/static/images/avatar/2.jpg' }],
  },
];

export default cardData;


/* src/data/cardData.js
 {
    tag: 'Startup',
    title: 'Masterclass: How to Start Your Own Beauty Business',
    description:
      'Learn the essential steps to launch your beauty business—from legal setup and licensing to finding your niche and building your service menu.',
    authors: [
      { name: 'Remy Sharp', avatar: '/static/images/avatar/1.jpg' },
      { name: 'Travis Howard', avatar: '/static/images/avatar/2.jpg' },
    ],
    rating: 4.5,
  },
  {
    tag: 'Marketing',
    title: 'Course: Social Media Marketing for Beauty Entrepreneurs',
    description:
      'Discover how to grow your client base with powerful content strategies, hashtags, reels, and paid ads tailored for beauty brands.',
    authors: [{ name: 'Erica Johns', avatar: '/static/images/avatar/6.jpg' }],
    rating: 4.7 // Added rating
  },
  {
    tag: 'Branding',
    title: 'Workshop: Build a Beauty Brand That Stands Out',
    description:
      'This workshop will teach you how to define your brand identity, choose the right colors and fonts, and design a logo that captures your style.',
    authors: [{ name: 'Kate Morrison', avatar: '/static/images/avatar/7.jpg' }],
    rating: 4.3 // Added rating
  },
  {
    tag: 'Growth',
    title: 'Bootcamp: Scaling Your Beauty Business',
    description:
      'Ready to grow beyond the chair? Learn how to expand your team, open a second location, or launch a product line.',
    authors: [{ name: 'Cindy Baker', avatar: '/static/images/avatar/3.jpg' }],
    rating: 4.6 // Added rating
  },
  {
    tag: 'Finance',
    title: 'Class: Bookkeeping & Budgeting for Beauty Pros',
    description:
      'Understand your numbers! This course covers bookkeeping, setting service prices, tracking expenses, and planning for taxes.',
    authors: [
      { name: 'Agnes Walker', avatar: '/static/images/avatar/4.jpg' },
      { name: 'Trevor Henderson', avatar: '/static/images/avatar/5.jpg' },
    ],
    rating: 4.2 // Added rating
  },
  {
    tag: 'Technology',
    title: 'Course: Leveraging AI & Automation in Your Beauty Business',
    description:
      'Learn how to use AI tools for scheduling, email marketing, chatbots, and personalized beauty recommendations to save time and impress clients.',
    authors: [{ name: 'Travis Howard', avatar: '/static/images/avatar/2.jpg' }],
    rating: 4.8 // Added rating
  },
  {
    tag: 'Sustainability',
    title: 'Workshop: Going Green in Your Beauty Biz',
    description:
      'This class explores eco-friendly practices in product sourcing, salon operations, and packaging to help you attract conscious clients.',
    authors: [
      { name: 'Agnes Walker', avatar: '/static/images/avatar/4.jpg' },
      { name: 'Trevor Henderson', avatar: '/static/images/avatar/5.jpg' },
    ],
    rating: 4.4 // Added rating
  },
  {
    tag: 'Efficiency',
    title: 'Mini-Course: Productivity Tools for Solo Beauty Entrepreneurs',
    description:
      'Maximize your time with tools for booking, reminders, inventory, and client follow-up—perfect for those running a one-person show.',
    authors: [{ name: 'Travis Howard', avatar: '/static/images/avatar/2.jpg' }],
    rating: 4.1 // Added rating
  },
  {
    tag: 'Trends',
    title: 'Webinar: 2025 Beauty Business Trends to Know',
    description:
      'Stay ahead of the curve with insights on what clients want, new service trends, digital tools, and how to adapt your offerings.',
    authors: [{ name: 'Kate Morrison', avatar: '/static/images/avatar/7.jpg' }],
    rating: 4.0 // Added rating
  },
  {
    tag: 'Success Stories',
    title: 'Panel: Beauty Entrepreneurs Share Their Journey',
    description:
      'Hear from successful beauty pros about their path from startup to sustainability—plus tips you can apply to your own journey.',
    authors: [{ name: 'Cindy Baker', avatar: '/static/images/avatar/3.jpg' }],
    rating: 4.6 // Added rating
  },
 
  */
