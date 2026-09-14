var PROJECTS_DATA = [
  {
    id: "linguaquest",
    title: "LinguaQuest",
    tagline: "Gamified, AI-powered language-learning iOS app",
    category: "ios",
    featured: true,
    badges: ["Swift", "SwiftUI", "Clean Arch"],
    githubUrl: "https://github.com/LinguaQuest-AI-Powered/LinguaQuest-Ios-App",
    coverImage: "assets/projects/linguaquest/292shots_so.png",
    videoUrl: "assets/projects/linguaquest/WhatsApp Video 2026-09-14 at 10.43.54.mp4",
    techStack: ["Swift", "SwiftUI", "Clean Architecture", "Swinject DI", "REST APIs", "WebSockets", "Gemini AI"],
    overview: "LinguaQuest is a gamified iOS application designed to revolutionize language learning through interactive, real-time AI role-play.",
    keyHighlights: [
      "Integrated Gemini AI for real-time conversational role-play and word insights.",
      "Architected with Clean Architecture and Swinject for robust dependency injection.",
      "Utilized WebSockets for low-latency, real-time features."
    ],
    architecture: {
      pattern: "Clean Architecture",
      dataFlow: "UI (SwiftUI) -> Domain (UseCases) -> Data (Repositories/Network)",
      keyDecisions: "Decoupled the presentation layer from business logic using Swinject for seamless testing."
    }
  },
  {
    id: "shopify-ios",
    title: "Shopify Storefront",
    tagline: "Modular e-commerce iOS app with GraphQL",
    category: "ios",
    featured: true,
    badges: ["Swift", "MVVM-C", "GraphQL"],
    githubUrl: "https://github.com/Shopify-iOS-WorkShop/Shopify",
    coverImage: "assets/projects/shopify-ios/1784056262868.jpg",
    techStack: ["Swift", "SwiftUI", "MVVM-C (Coordinator)", "GraphQL (Apollo)", "Firebase", "Stripe", "Apple Pay", "SwiftData"],
    overview: "A custom, high-performance Shopify storefront built natively for iOS. It leverages Apollo GraphQL for efficient data fetching and features AI-powered shopping assistance.",
    keyHighlights: [
      "Architected real-time Shopify Storefront GraphQL query pipeline.",
      "Integrated Stripe and Apple Pay for secure checkout flows.",
      "Utilized MVVM-C for clean navigation and state management."
    ],
    architecture: {
      pattern: "MVVM-C (Coordinator)",
      dataFlow: "UI -> ViewModel -> Coordinator -> Apollo Client -> Shopify GraphQL",
      keyDecisions: "Adopted the Coordinator pattern for decoupled navigation and SwiftData for fast local caching."
    }
  },
  {
    id: "sportmob",
    title: "Sport Mob",
    tagline: "Premium sports app with live tracking",
    category: "ios",
    featured: true,
    badges: ["Swift", "UIKit", "RxSwift"],
    githubUrl: "https://github.com/MahmoudAladwy33/Sport-App",
    coverImage: "assets/projects/sportmob/459shots_so.png",
    techStack: ["Swift", "UIKit", "RxSwift", "Alamofire", "MVP", "Core Data", "REST APIs", "XCTest"],
    overview: "A premium UIKit sports application featuring live data tracking, complete multilingual support, and offline persistence.",
    keyHighlights: [
      "Implemented complete multilingual support and dynamic UI scaling.",
      "Architected with a decoupled MVP pattern for maximum testability.",
      "Ensured robust code quality with comprehensive XCTest suites."
    ],
    architecture: {
      pattern: "MVP (Model-View-Presenter)",
      dataFlow: "View (UIKit) -> Presenter -> Model (Repository/CoreData)",
      keyDecisions: "Used RxSwift for reactive bindings and Core Data to ensure the app works flawlessly offline."
    }
  },
  {
    id: "eventhub",
    title: "EventHub",
    tagline: "Discover and manage events seamlessly",
    category: "flutter",
    featured: false,
    badges: ["Flutter", "BLoC", "Retrofit"],
    githubUrl: "https://github.com/MahmoudAladwy33/EventHub",
    coverImage: "assets/projects/eventhub/813shots_so.png",
    techStack: ["Flutter", "Dart", "BLoC", "Dio", "Retrofit"],
    overview: "A Flutter-based event management application designed to help users discover, book, and organize events.",
    keyHighlights: [
      "Architected a scalable event discovery engine.",
      "Integrated remote API data fetching via Dio and Retrofit.",
      "Implemented a seamless state management flow using BLoC."
    ],
    architecture: {
      pattern: "Clean Architecture / BLoC",
      dataFlow: "UI -> BLoC -> Repository -> Network (Dio/Retrofit)",
      keyDecisions: "Adopted BLoC for predictable state management and Retrofit for type-safe API calls."
    }
  },
  {
    id: "carenest",
    title: "CareNest",
    tagline: "AI-powered infant cry analysis",
    category: "flutter",
    featured: false,
    badges: ["Flutter", "BLoC", "Firebase"],
    githubUrl: "https://github.com/Advanced-Infant-Care-Technology/Flutter",
    coverImage: "assets/projects/carenest/WhatsApp Image 2026-09-14 at 10.43.54 (1).jpeg",
    techStack: ["Flutter", "Dart", "BLoC", "Firebase", "Dio", "Retrofit"],
    overview: "A Flutter-based healthcare application leveraging Firebase and custom APIs for infant care management.",
    keyHighlights: [
      "Built a cross-platform mobile interface using Flutter.",
      "Integrated Firebase for real-time data sync and authentication.",
      "Developed robust remote networking layer using Dio."
    ],
    architecture: {
      pattern: "BLoC Pattern",
      dataFlow: "UI -> BLoC -> Repository -> API/Firebase",
      keyDecisions: "Decoupled the presentation layer using BLoC to ensure scalability."
    }
  },
  {
    id: "ghyom-ios",
    title: "Ghyom iOS",
    tagline: "Accurate weather forecasting at your fingertips",
    category: "ios",
    featured: false,
    badges: ["Swift", "UIKit/SwiftUI"],
    githubUrl: "https://github.com/MahmoudAladwy33/Ghyom_IOS",
    coverImage: "assets/projects/ghyom-ios/736shots_so.png",
    techStack: ["Swift", "UIKit", "SwiftUI"],
    overview: "A native iOS application providing weather updates and forecasts.",
    keyHighlights: [
      "Designed dynamic weather views based on current conditions.",
      "Structured for future API integration."
    ],
    architecture: {
      pattern: "MVC/MVVM",
      dataFlow: "View -> Controller/ViewModel",
      keyDecisions: "Native Swift implementation focusing on performance."
    }
  },
  {
    id: "caredent",
    title: "CareDent",
    tagline: "Comprehensive dental care management",
    category: "flutter",
    featured: false,
    badges: ["Flutter", "BLoC", "Retrofit"],
    githubUrl: "https://github.com/MahmoudAladwy33/CareDent",
    coverImage: "assets/projects/caredent/WhatsApp Image 2026-09-14 at 10.43.54.jpeg",
    techStack: ["Flutter", "Dart", "BLoC", "Dio", "Retrofit"],
    overview: "A dental clinic management application built with Flutter that simplifies appointment booking and medical record tracking.",
    keyHighlights: [
      "Developed a responsive patient interface with Flutter.",
      "Implemented networking layer utilizing Retrofit and Dio.",
      "Managed complex UI states seamlessly with BLoC."
    ],
    architecture: {
      pattern: "BLoC Pattern",
      dataFlow: "UI -> BLoC -> API Client",
      keyDecisions: "Used Retrofit for generating type-safe API clients in Dart."
    }
  },
  {
    id: "yummy",
    title: "Yummy",
    tagline: "Discover delicious recipes and food delivery",
    category: "android",
    featured: false,
    badges: ["Android", "Java", "Room DB"],
    githubUrl: "https://github.com/MahmoudAladwy33/Yummy",
    coverImage: "assets/projects/yummy/WhatsApp Image 2026-09-14 at 10.43.54 (3).jpeg",
    techStack: ["Java", "Android SDK", "Retrofit", "Room DB", "RxJava3", "Navigation Component"],
    overview: "A robust native Android recipe and food discovery app utilizing RxJava for reactive programming and Room for local database management.",
    keyHighlights: [
      "Architected a scalable native UI using Navigation Component.",
      "Integrated Room DB with DAOs for local caching of meals.",
      "Utilized RxJava3 and Retrofit for reactive network calls."
    ],
    architecture: {
      pattern: "MVVM / Repository Pattern",
      dataFlow: "Fragment -> ViewModel -> Repository -> Room/Retrofit",
      keyDecisions: "Adopted Room DB and RxJava3 for highly responsive, reactive local caching."
    }
  },
  {
    id: "ghyom",
    title: "Ghyom",
    tagline: "Modern Android weather forecasting app",
    category: "android",
    featured: false,
    badges: ["Kotlin", "Compose", "Koin"],
    githubUrl: "https://github.com/MahmoudAladwy33/Ghyom",
    coverImage: "assets/projects/ghyom/WhatsApp Image 2026-09-14 at 10.43.54 (2).jpeg",
    techStack: ["Kotlin", "Jetpack Compose", "Koin (DI)", "Retrofit", "Room DB", "Navigation Compose"],
    overview: "A modern native Android weather application using the latest Jetpack Compose UI toolkit and offline caching via Room.",
    keyHighlights: [
      "Built a fully declarative UI with Jetpack Compose.",
      "Implemented Dependency Injection using Koin.",
      "Integrated Room DB for offline weather data persistence."
    ],
    architecture: {
      pattern: "MVVM with Clean Architecture",
      dataFlow: "Compose UI -> ViewModel -> Repository -> Network/Database",
      keyDecisions: "Adopted Jetpack Compose and Koin for modern, scalable, and highly testable Android development."
    }
  },
  {
    id: "xo-game",
    title: "XO Game",
    tagline: "Multiplayer Tic-Tac-Toe with real-time sync",
    category: "desktop",
    featured: false,
    badges: ["JavaFX", "Sockets", "Gaming"],
    githubUrl: "https://github.com/OmarRamadan20/Client-XO-Game",
    coverImage: "assets/projects/xo-game/Screenshot 2026-09-14 at 3.01.36 PM.png",
    videoUrl: "assets/projects/xo-game/WhatsApp Video 2026-09-14 at 10.41.48.mp4",
    techStack: ["Java", "JavaFX", "Java Sockets (java.net)"],
    overview: "A real-time multiplayer Tic-Tac-Toe game featuring a JavaFX client and a dedicated Java Server Architecture. It allows players to compete online with low latency synchronization.",
    keyHighlights: [
      "Architected a real-time game state synchronization engine using raw Sockets.",
      "Developed a custom multithreaded Java Server.",
      "Built a responsive desktop GUI utilizing JavaFX."
    ],
    architecture: {
      pattern: "Client-Server / MVC",
      dataFlow: "JavaFX Controllers -> Socket Client -> Socket Server -> Game Logic",
      keyDecisions: "Used raw Java Sockets for custom binary communication protocols between the client and server."
    }
  }
];

if (typeof window !== "undefined") {
  window.PROJECTS_DATA = PROJECTS_DATA;
}
