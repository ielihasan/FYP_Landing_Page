import {
  people01,
  people02,
  people03,
  facebook,
  instagram,
  linkedin,
  twitter,
  airbnb,
  binance,
  coinbase,
  dropbox,
  send,
  shield,
  star,
} from "@/public/assets";

export const navLinks = [
  {
    id: "home",
    title: "Home",
  },
  {
    id: "features",
    title: "Features",
  },
  {
    id: "product",
    title: "Product",
  },
  {
    id: "clients",
    title: "Clients",
  },
];

export const features = [
  {
    id: "feature-1",
    icon: star,
    title: "AI-Powered Notes",
    content:
      "Generate structured study notes instantly using GPT-4 technology from topics or handwritten inputs with OCR integration.",
  },
  {
    id: "feature-2",
    icon: shield,
    title: "Secure Printing",
    content:
      "Token-based authentication ensures safe and traceable delivery of your printed materials at nearby print shops.",
  },
  {
    id: "feature-3",
    icon: send,
    title: "Quick Delivery",
    content:
      "Real-time print queue management connects you with local print shops for fast and reliable document delivery.",
  },
];

export const feedback = [
  {
    id: "feedback-1",
    content:
      "AI StudyStation has completely transformed how I organize my study materials. The AI-generated notes are comprehensive and save me hours of work!",
    name: "Sarah Ahmed",
    title: "Computer Science Student",
    img: people01,
  },
  {
    id: "feedback-2",
    content:
      "The token-based printing system is brilliant! I can upload my notes and pick them up from the nearest print shop without any hassle.",
    name: "Ali Hassan",
    title: "Engineering Student",
    img: people02,
  },
  {
    id: "feedback-3",
    content:
      "As an educator, this platform helps me quickly create structured study materials for my students. The OCR feature is incredibly accurate!",
    name: "Dr. Fatima Khan",
    title: "University Lecturer",
    img: people03,
  },
];

export const stats = [
  {
    id: "stats-1",
    title: "Active Users",
    value: "3800+",
  },
  {
    id: "stats-2",
    title: "Print Shops",
    value: "230+",
  },
  {
    id: "stats-3",
    title: "Notes Generated",
    value: "50K+",
  },
];

export const footerLinks = [
  {
    id: "footerLinks-1",
    title: "Useful Links",
    links: [
      {
        name: "Features",
        link: "https://www.aistudystation.com/features/",
      },
      {
        name: "How it Works",
        link: "https://www.aistudystation.com/how-it-works/",
      },
      {
        name: "Mobile App",
        link: "https://www.aistudystation.com/mobile-app/",
      },
      {
        name: "Admin Dashboard",
        link: "https://www.aistudystation.com/admin/",
      },
      {
        name: "Terms & Services",
        link: "https://www.aistudystation.com/terms-and-services/",
      },
    ],
  },
  {
    id: "footerLinks-2",
    title: "Community",
    links: [
      {
        name: "Help Center",
        link: "https://www.aistudystation.com/help-center/",
      },
      {
        name: "Print Partners",
        link: "https://www.aistudystation.com/partners/",
      },
      {
        name: "Feedback",
        link: "https://www.aistudystation.com/feedback/",
      },
      {
        name: "Blog",
        link: "https://www.aistudystation.com/blog/",
      },
      {
        name: "Updates",
        link: "https://www.aistudystation.com/updates/",
      },
    ],
  },
  {
    id: "footerLinks-3",
    title: "Partner",
    links: [
      {
        name: "Our Partners",
        link: "https://www.aistudystation.com/our-partners/",
      },
      {
        name: "Become a Print Shop Partner",
        link: "https://www.aistudystation.com/become-a-partner/",
      },
    ],
  },
];

export const socialMedia = [
  {
    id: "social-media-1",
    icon: instagram,
    link: "https://www.instagram.com/",
  },
  {
    id: "social-media-2",
    icon: facebook,
    link: "https://www.facebook.com/",
  },
  {
    id: "social-media-3",
    icon: twitter,
    link: "https://www.twitter.com/",
  },
  {
    id: "social-media-4",
    icon: linkedin,
    link: "https://www.linkedin.com/",
  },
];

export const clients = [
  {
    id: "client-1",
    logo: airbnb,
  },
  {
    id: "client-2",
    logo: binance,
  },
  {
    id: "client-3",
    logo: coinbase,
  },
  {
    id: "client-4",
    logo: dropbox,
  },
];
