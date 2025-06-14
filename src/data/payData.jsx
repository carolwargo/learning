//src/data/payData.jsx
import article1 from '../components/Paylocity/pay-articles/article1';
import article2 from '../components/Paylocity/pay-articles/article2'; 
import article3 from '../components/Paylocity/pay-articles/article3';
import article4 from '../components/Paylocity/pay-articles/article4';
import PayHero from '../assets/images/PayHero.png';
import PaySignup from '../assets/images/PaySignup.jpg';

const cardData = [
  {
    id: '1',
     img: 'https://picsum.photos/800/450?random=1',
    tag: 'Payroll',
    title: 'Automate & Customize Payroll Workflows',
    description: ' Payroll process guides automation and customizable workflows.',
    fullContent: article1,
    authors: [
      { name: 'AI Assisted', avatar: '/static/images/avatar/grok.jpg' },
    ],
  },
  {
    id: '2',
    img: 'https://picsum.photos/800/450?random=2',
    tag: 'Employment',
    title: 'Understanding Maryland Employment Laws: Leave Policies',
    description: 'Key Maryland employment laws on leave.',
    fullContent: article2, // if article2 exists
    authors: [
      { name: 'AI Assisted', avatar: '/static/images/avatar/grok.jpg' },
    ],
  },
    {
    id: '3',
    img: PayHero,
    tag: 'Employment',
    title: 'Manage Your Paylocity Profile: What You Can Update',
    description: 'Self-Service portal lets you update your personal information, tax settings, payment preferences, benefits, and more, all from the web or mobile app.',
    fullContent: article3, 
    authors: [
      { name: 'AI Assisted', avatar: '/static/images/avatar/grok.jpg' },
    ],
  },
     {
    id: '4',
    img: PaySignup,
    tag: 'Employment',
    title: '  New Employees: Start Here!',
    description: 'Welcome Aboard! Things to know before you start.',
    fullContent: article4, 
    authors: [
      { name: 'AI Assisted', avatar: '/static/images/avatar/grok.jpg' },
    ],
  },
];

export default cardData;
