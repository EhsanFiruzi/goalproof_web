import type { Dictionary } from "../types";

export const en: Dictionary = {
  meta: {
    title: "GoalProof – Gamified Goal Tracker with Streaks & Medals",
    description:
      "GoalProof is a gamified goal-tracking app for Android: set goals, show up daily, build streaks and unlock special medals. Download on Myket.",
    keywords: ["GoalProof", "goal tracker app", "habit tracker", "daily streak", "badges", "motivation app", "Android app", "Myket"],
    ogAlt: "GoalProof – gamified goal tracker with streaks and medals",
  },
  nav: { features: "Features", badges: "Medals", themes: "Themes", screens: "Screenshots", faq: "FAQ" },
  common: {
    downloadLabel: "Download GoalProof on Myket",
    downloadAlt: "Get it on Myket",
    otherLangLabel: "فارسی",
    skip: "Skip to content",
  },
  hero: {
    eyebrow: "Gamified goal tracking",
    title: "Build your goals,",
    highlight: "earn your medals",
    subtitle:
      "Take one step forward every day with GoalProof, build streaks and unlock special medals for every milestone. Progress finally feels like a game.",
    note: "Android only · Download on Myket",
  },
  features: {
    title: "Everything to keep you going",
    subtitle: "Tools that make the road to your goals more fun.",
    items: [
      { icon: "target", title: "Simple goal setting", desc: "Define your goals and follow their progress day by day." },
      { icon: "flame", title: "Daily streaks", desc: "Show up day after day and unlock 3, 7, 14 and 30-day streaks." },
      { icon: "trophy", title: "Special medals", desc: "From “First Goal” to “Night Owl”, every good habit earns a medal." },
      { icon: "palette", title: "19 color palettes", desc: "Make the app yours with colors that fit your mood." },
      { icon: "layout", title: "Persian & RTL ready", desc: "A Persian-first interface with full right-to-left design." },
      { icon: "moon", title: "Dark design", desc: "An easy-on-the-eyes dark look made for everyday use." },
    ],
  },
  badges: {
    eyebrow: "Medal system",
    title: "Every milestone earns a medal",
    subtitle:
      "Medals are the heart of GoalProof. Keep going, come back, and finish goals to unlock them and complete your collection.",
    streakTitle: "The streak ladder",
    streakSub: "The longer your streak, the brighter the medal.",
    specialTitle: "Special medals",
    specialSub: "For the memorable moments on your journey.",
    streak: [
      { id: "s3", file: "3_streak", name: "3-day streak", desc: "A great start!" },
      { id: "s7", file: "7_streak", name: "7-day streak", desc: "One full week." },
      { id: "s14", file: "14_streak", name: "14-day streak", desc: "Two weeks, no breaks." },
      { id: "s30", file: "30_streak", name: "30-day streak", desc: "A month of consistency." },
    ],
    special: [
      { id: "first", file: "first_goal", name: "First Goal", desc: "You created your first goal." },
      { id: "done", file: "goal_done", name: "Goal Done", desc: "You finished a goal." },
      { id: "back", file: "comback", name: "Comeback", desc: "You returned after a break." },
      { id: "morning", file: "morning_person", name: "Morning Person", desc: "You get things done early." },
      { id: "night", file: "night_owl", name: "Night Owl", desc: "You get things done late at night." },
      { id: "premium", file: "premium", name: "Premium", desc: "An exclusive medal for premium users." },
    ],
  },
  themes: {
    title: "Make it your color",
    subtitle: "19 ready-made palettes, from GoalProof’s purple and coral to sunset, ocean and aurora.",
    names: {
      goalproof: "GoalProof", sunset: "Sunset", ocean: "Ocean", aurora: "Aurora",
      midnight: "Midnight", cherry: "Cherry", forest: "Forest", violet: "Violet",
    },
  },
  screens: { title: "A look inside the app", subtitle: "Swipe to see more.", alt: "GoalProof app screenshot" },
  faq: {
    title: "Frequently asked questions",
    subtitle: "Short, direct answers.",
    items: [
      { q: "What is GoalProof?", a: "GoalProof is a gamified goal-tracking app for Android. You create goals, log your progress every day, build streaks and earn medals for your achievements." },
      { q: "Where can I download GoalProof?", a: "GoalProof is available on Myket. Use the “Get it on Myket” button on this page to install it." },
      { q: "What is a streak in GoalProof?", a: "A streak is the number of consecutive days you have been active in the app. Reaching 3, 7, 14 and 30 days unlocks streak medals." },
      { q: "How do I unlock medals?", a: "Medals unlock through specific actions: creating your first goal, finishing a goal, coming back after a break, being active in the morning or at night, and keeping a streak going." },
      { q: "Which devices does GoalProof support?", a: "GoalProof is built for Android phones and can be downloaded from Myket." },
      { q: "How do I contact support?", a: "Send feedback, suggestions or problems to ijaeyung1286@gmail.com." },
    ],
  },
  cta: { title: "Earn your first medal today", subtitle: "Install GoalProof and create your first goal." },
  footer: {
    tagline: "A gamified goal tracker with streaks and medals.",
    moreApps: "More apps",
    myket: "On Myket",
    bazaar: "On Cafe Bazaar",
    support: "Support & feedback",
    rights: "All rights reserved.",
  },
};
