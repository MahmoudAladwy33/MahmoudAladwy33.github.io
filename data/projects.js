var PROJECTS_DATA = [
  {
    id: "linguaquest",
    title: "LinguaQuest",
    tagline: "Gamified, AI-powered language-learning iOS app",
    category: "mobile",
    featured: true,
    badges: ["Swift", "SwiftUI", "Clean Arch", "Gemini AI"],
    themeColor: "#98C1D9",
    githubUrl: "https://github.com/LinguaQuest-AI-Powered/LinguaQuest-Ios-App",
    youtubeUrl: "",
    coverImage: "assets/projects/linguaquest/292shots_so.png",
    gallery: [],
    techStack: ["Swift", "SwiftUI", "Clean Architecture", "Swinject DI", "REST APIs", "WebSockets", "Gemini AI"],
    summary: "Collaborated with a team to build a gamified, AI-powered language-learning iOS app featuring real-time voice role-play.",
    highlights: [
      "Integrated Gemini AI for real-time word insights and image validation.",
      "Implemented a localized, rewards-based UI.",
      "Utilized WebSockets for real-time features."
    ],
    architecture: {
      pattern: "Clean Architecture",
      layers: "Presentation -> Domain -> Data",
      keyDecisions: "Used Swinject for Dependency Injection."
    }
  },
  {
    id: "shopify-ios",
    title: "Shopify Storefront",
    tagline: "Modular e-commerce iOS app",
    category: "mobile",
    featured: true,
    badges: ["Swift", "MVVM-C", "GraphQL", "Firebase"],
    themeColor: "#EE6C4D",
    githubUrl: "https://github.com/Shopify-iOS-WorkShop/Shopify",
    youtubeUrl: "",
    coverImage: "assets/projects/shopify-ios/1784056262868.jpg",
    gallery: [],
    techStack: ["Swift", "SwiftUI", "Clean Architecture", "MVVM-C (Coordinator)", "GraphQL (Apollo)", "Firebase", "Stripe", "Apple Pay", "SwiftData", "Swinject", "Lottie"],
    summary: "Built a custom Shopify storefront featuring GraphQL data fetching, AI-powered shopping assistance, and secure payments.",
    highlights: [
      "Integrated Stripe and Apple Pay for secure checkout.",
      "Implemented EN/AR localization for global reach.",
      "Utilized MVVM-C for clean navigation and state management."
    ],
    architecture: {
      pattern: "Clean Architecture + MVVM-C",
      layers: "UI -> ViewModel -> Coordinator -> Domain -> Data",
      keyDecisions: "Adopted Coordinator pattern (MVVM-C) for decoupled navigation. Used Apollo GraphQL for efficient data fetching."
    }
  },
  {
    id: "sportmob",
    title: "Sport Mob",
    tagline: "Premium sports app with live tracking & offline support",
    category: "mobile",
    featured: false,
    badges: ["Swift", "UIKit", "RxSwift", "MVP"],
    themeColor: "#3D5A80",
    githubUrl: "https://github.com/MahmoudAladwy33/Sport-App",
    youtubeUrl: "",
    coverImage: "assets/projects/sportmob/459shots_so.png",
    gallery: [],
    techStack: ["Swift", "UIKit", "RxSwift", "Alamofire", "MVP", "Core Data", "REST APIs", "XCTest"],
    summary: "Built a premium UIKit sports application featuring live data tracking and offline persistence.",
    highlights: [
      "Implemented complete multilingual support.",
      "Architected with a decoupled MVP pattern.",
      "Ensured robust code quality with XCTest."
    ],
    architecture: {
      pattern: "MVP (Model-View-Presenter)",
      layers: "View -> Presenter -> Model (Repository)",
      keyDecisions: "Used MVP for clean separation in UIKit, RxSwift for reactive bindings, and Core Data for offline persistence."
    }
  }
];

if (typeof window !== "undefined") {
  window.PROJECTS_DATA = PROJECTS_DATA;
}
