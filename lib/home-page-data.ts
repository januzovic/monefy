// Problem Card Content

export type Problem = {
  id: number;
  title: string;
  text: string;
};

export const problems: Problem[] = [
  {
    id: 1,
    title: "Overspending",
    text: "Small daily purchases add up quickly, making it hard to understand your real spending.",
  },
  {
    id: 2,
    title: "No savings structure",
    text: "Without a system, saving money becomes random instead of intentional.",
  },
  {
    id: 3,
    title: "Hidden subscriptions",
    text: "Recurring payments quietly drain your account every month.",
  },
  {
    id: 4,
    title: "No clear overview",
    text: "Your finances are scattered across cards, cash, and apps.",
  },
];

export type PremiumCard = {
  id: number;
  title: string;
  subtitle: string;
  list: string[];
};

export const premiumCard: PremiumCard[] = [
  {
    id: 1,
    title: "Smart money management without the complexity",
    subtitle:
      "Stay organized with intuitive expense tracking, clear financial insights, and tools that help you build better habits over time.",
    list: [
      "Track expenses in seconds",
      "Set monthly budgets and goals",
      "Organize spending by category",
      "Understand where your money goes",
    ],
  },
];

export type Solution = {
  id: number;
  title: string;
  subtitle: string;
};

export const solutions: Solution[] = [
  {
    id: 1,
    title: "Expense Tracking",
    subtitle:
      "Quickly add and manage daily expenses with a clean and simple workflow.",
  },
  {
    id: 2,
    title: "Savings Goals",
    subtitle:
      "Create financial goals and stay motivated with visible progress tracking",
  },
  {
    id: 3,
    title: "Financial Insights",
    subtitle:
      "Get a better understanding of your habits through simple analytics and reports.",
  },
];
