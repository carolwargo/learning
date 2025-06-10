//src/data/payData.jsx
import article1 from '../components/Paylocity/pay-articles/article1';
import article2 from '../components/Paylocity/pay-articles/article2'; // Optional if article2 exists

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
];

export default cardData;
