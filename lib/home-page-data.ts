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
