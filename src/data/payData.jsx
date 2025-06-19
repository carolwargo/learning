//src/data/payData.jsx
import article1 from '../components/Paylocity/pay-articles/article1';
import article2 from '../components/Paylocity/pay-articles/article2'; 
import article3 from '../components/Paylocity/pay-articles/article3';
import article4 from '../components/Paylocity/pay-articles/article4';
import article5 from '../components/Paylocity/pay-articles/article5';
import article6 from '../components/Paylocity/pay-articles/article6';
import article7 from '../components/Paylocity/pay-articles/article7'; 
//import EmployeeBenefits from '../assets/images/EmployeeBenefits.png';
import PayProfile from '../assets/images/PayProfile.png';
import PaySignup from '../assets/images/PaySignup.jpg';
//import AI from '../assets/images/AI.png';
//import AIPAY from '../assets/images/AIPAY.png';

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
    img: PayProfile,
    tag: 'Employment',
    title: 'New Employees: Manage Your Paylocity Profile',
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
       {
    id: '5',
    tag: 'Benefits',
    title: 'Overview: Top Employee Benefits to Attract and Retain Talent',
    description: 'Welcome Aboard! Things to know before you start.',
    fullContent: article5, 
    authors: [
      { name: 'AI Assisted', avatar: '/static/images/avatar/grok.jpg' },
    ],
  },
         {
    id: '6',
    tag: 'Training',
    title: ' Leverage AI with Paylocity for Hospitality HR Management',
    description: 'Welcome Aboard! Things to know before you start.',
    fullContent: article6, 
    authors: [
      { name: 'AI Assisted', avatar: '/static/images/avatar/grok.jpg' },
    ],
  },
          {
    id: '7',
    tag: 'Training',
    title: 'Advanced AI Applications for Hospitality HR Beyond Paylocity',
    description: 'Welcome Aboard! Things to know before you start.',
    fullContent: article7, 
    authors: [
      { name: 'AI Assisted', avatar: '/static/images/avatar/grok.jpg' },
    ],
  },
];

export default cardData;



   