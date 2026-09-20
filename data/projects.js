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
    badges: ["Swift", "GraphQL", "MVVM-C"],
    githubUrl: "https://github.com/Shopify-iOS-WorkShop/Shopify",
    coverImage: "assets/projects/shopify-ios/1784056262868.jpg",
    techStack: ["Swift", "SwiftUI", "MVVM-C (Coordinator)", "GraphQL (Apollo)", "Firebase", "Stripe", "Apple Pay", "SwiftData", "Swinject", "Lottie"],
    overview: "A production-ready Shopify iOS e-commerce application backed by Shopify's Storefront & Admin GraphQL APIs. It features an Agentic RAG Pipeline with a custom AI Assistant powering Smart Chat, Product Comparison, Image Search, and Outfit Generation.",
    keyHighlights: [
      "Engineered a Highly Modular Ecosystem with independent Swift Packages (SPM) and Swinject DI.",
      "Implemented State-of-the-Art Navigation using the Coordinator Pattern for stateless SwiftUI flows.",
      "Integrated a custom, actor-based AI Assistant powering multiple intelligent features."
    ],
    architecture: {
      pattern: "MVVM-C (Coordinator) & Clean Architecture",
      dataFlow: "Decentralized SPM Modules -> Swinject DI -> Coordinator -> UI",
      keyDecisions: "Decoupled the codebase via independent Swift Packages and adopted the Coordinator Pattern to keep SwiftUI views fully stateless."
    }
  },
  {
    id: "sportmob",
    title: "Sport Mob",
    tagline: "Premium sports app with live tracking",
    category: "ios",
    featured: true,
    badges: ["Swift", "UIKit", "MVP"],
    githubUrl: "https://github.com/MahmoudAladwy33/Sport-App",
    coverImage: "assets/projects/sportmob/459shots_so.png",
    techStack: ["Swift", "UIKit", "RxSwift", "MVP", "Alamofire", "Core Data", "XCTest", "SDWebImage"],
    overview: "A premium UIKit sports application built from scratch for tracking Football, Basketball, Tennis, and Cricket. It features dynamic grid layouts, live sports data, and full English/Arabic localization.",
    keyHighlights: [
      "Developed custom Teams Tracker and League Details screens with dynamic horizontal/vertical scrolling.",
      "Utilized UICollectionViewCompositionalLayout for modern, dynamic grid layouts.",
      "Implemented comprehensive Unit Testing to ensure a robust and decoupled codebase."
    ],
    architecture: {
      pattern: "MVP (Model-View-Presenter)",
      dataFlow: "View (UIKit) -> Presenter (RxSwift) -> Network (Alamofire) / Local (Core Data)",
      keyDecisions: "Adopted MVP architecture coupled with RxSwift for reactive streams and asynchronous data binding to maintain clean UI layers."
    }
  },
  {
    id: "eventhub",
    title: "Event Hub",
    tagline: "Clean, scalable event management",
    category: "flutter",
    featured: false,
    badges: ["Flutter", "BLoC", "Clean Arch"],
    githubUrl: "https://github.com/MahmoudAladwy33/EventHub",
    coverImage: "assets/projects/eventhub/813shots_so.png",
    techStack: ["Flutter", "Dart", "BLoC", "GetIt", "Dio", "Retrofit", "GoRouter", "Freezed", "Sqflite"],
    overview: "Event Hub is a Flutter application built with a strong focus on clean architecture, scalability, and maintainability. It features map integrations, localization, and a responsive UI.",
    keyHighlights: [
      "Integrated Maps and robust location services for accurate event discovery.",
      "Utilized Freezed & JSON Serializable for generating immutable models.",
      "Ensured a highly responsive UI across devices using ScreenUtil."
    ],
    architecture: {
      pattern: "Clean Architecture / BLoC",
      dataFlow: "UI -> BLoC -> GetIt (DI) -> Retrofit/Sqflite",
      keyDecisions: "Leveraged GetIt for decoupled Dependency Injection and GoRouter for robust declarative navigation."
    }
  },
  {
    id: "carenest",
    title: "CareNest",
    tagline: "AI-powered infant cry analysis",
    category: "flutter",
    featured: false,
    badges: ["Flutter", "AI/ML", "Node.js"],
    githubUrl: "https://github.com/Advanced-Infant-Care-Technology/Flutter",
    coverImage: "assets/projects/carenest/WhatsApp Image 2026-09-14 at 10.43.54 (1).jpeg",
    techStack: ["Flutter", "Dart", "BLoC", "Firebase", "Node.js", "Express", "Dio", "Retrofit"],
    overview: "CareNest is a capstone mobile app designed to empower new mothers by turning every baby's cry into actionable insights. It features AI cry analysis, growth tracking, a local care finder, and a smart EN/AR chatbot.",
    keyHighlights: [
      "Engineered an AI cry analysis engine capable of detecting hunger, fatigue, discomfort, and colic.",
      "Developed a custom Node.js + Express backend hosted on Azure with a Vercel frontend.",
      "Integrated Firebase for real-time community chat and smart notifications."
    ],
    architecture: {
      pattern: "Clean Architecture / BLoC",
      dataFlow: "UI -> Bloc/Cubit -> get_it -> Dio Client -> Azure Node.js Backend",
      keyDecisions: "Invested heavily in a decoupled UI and modular code, using fl_chart for complex growth graphs and go_router for navigation."
    }
  },
  {
    id: "ghyom-ios",
    title: "Ghyom iOS",
    tagline: "Dynamic SwiftUI weather application",
    category: "ios",
    featured: false,
    badges: ["SwiftUI", "MVVM", "SwiftData"],
    githubUrl: "https://github.com/MahmoudAladwy33/Ghyom_IOS",
    coverImage: "assets/projects/ghyom-ios/736shots_so.png",
    techStack: ["Swift", "SwiftUI", "MVVM", "Alamofire", "SwiftData", "Core Location"],
    overview: "Ghyom (غيوم) is a weather application built purely with SwiftUI. It delivers a smooth, localized, and weather-aware experience featuring a dynamic day/night interface that adapts to real-time conditions.",
    keyHighlights: [
      "Implemented a responsive, debounced search for cities worldwide.",
      "Utilized Swift Concurrency (async/await) with Alamofire for clean, asynchronous networking.",
      "Adopted the new Observation framework in SwiftUI for seamless state tracking."
    ],
    architecture: {
      pattern: "MVVM with Layered Architecture",
      dataFlow: "SwiftUI View -> ViewModel -> Repository -> Network / Local Storage",
      keyDecisions: "Kept the ViewModel independent of networking and storage by routing all operations through a Repository layer, ensuring simple testing and high flexibility."
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
    tagline: "Complete recipe discovery & meal planner",
    category: "android",
    featured: false,
    badges: ["Android", "Java", "MVP"],
    githubUrl: "https://github.com/MahmoudAladwy33/Yummy",
    coverImage: "assets/projects/yummy/WhatsApp Image 2026-09-14 at 10.43.54 (3).jpeg",
    techStack: ["Java", "Android SDK", "Retrofit", "Room Database", "RxJava", "Firebase", "Material UI"],
    overview: "Yummy provides a complete cooking experience, from discovering global recipes and exploring categories to planning weekly dishes. It offers a powerful offline-first experience.",
    keyHighlights: [
      "Engineered a Weekly Meal Planner with seamless Firebase synchronization.",
      "Implemented an offline-first architecture utilizing Room Database for saving favorite meals.",
      "Integrated Firebase Authentication supporting both Email and Google Sign-In."
    ],
    architecture: {
      pattern: "MVP Architecture",
      dataFlow: "Activity/Fragment -> Presenter -> Retrofit/Room -> UI Update (RxJava streams)",
      keyDecisions: "Combined MVP with RxJava for highly responsive UI updates and reliable async data handling from the Room Database."
    }
  },
  {
    id: "ghyom",
    title: "Ghyom",
    tagline: "Retro Pixel-Art weather tracker",
    category: "android",
    featured: false,
    badges: ["Kotlin", "Coroutines", "Koin"],
    githubUrl: "https://github.com/MahmoudAladwy33/Ghyom",
    coverImage: "assets/projects/ghyom/WhatsApp Image 2026-09-14 at 10.43.54 (2).jpeg",
    techStack: ["Kotlin", "MVVM", "Coroutines", "Flow", "Koin (DI)", "Retrofit", "Room", "AlarmManager"],
    overview: "Ghyom (غُيوم) is an Android project that blends high-precision weather tracking with a unique Retro Pixel-Art aesthetic, featuring scanline effects and digital typography.",
    keyHighlights: [
      "Engineered an Advanced Weather Alerts system using AlarmManager & WorkManager for proactive background monitoring.",
      "Developed a Smart Location Engine with automatic GPS detection, an interactive Map Picker, and Autocomplete.",
      "Provided full native RTL (Arabic) and LTR (English) localization support."
    ],
    architecture: {
      pattern: "MVVM Architecture",
      dataFlow: "UI -> ViewModel (Flow) -> Repository -> Retrofit/Room",
      keyDecisions: "Utilized Kotlin Coroutines & Flow for fluid asynchronous data streams, paired with Koin for lightweight Dependency Injection."
    }
  },
  {
    id: "xo-game",
    title: "XO Game",
    tagline: "Client-Server Tic-Tac-Toe network",
    category: "desktop",
    featured: false,
    badges: ["JavaFX", "Sockets", "JDBC"],
    githubUrl: "https://github.com/OmarRamadan20/Client-XO-Game",
    coverImage: "assets/projects/xo-game/Screenshot 2026-09-14 at 3.01.36 PM.png",
    videoUrl: "assets/projects/xo-game/WhatsApp Video 2026-09-14 at 10.41.48.mp4",
    techStack: ["Java SE", "JavaFX", "Socket Programming", "Java I/O Streams", "JDBC", "JSON", "Multithreading"],
    overview: "A complete Client–Server Network Tic-Tac-Toe application. This inaugural ITI project focuses on real-time communication, stability, and clean architecture without relying on modern web frameworks.",
    keyHighlights: [
      "Engineered robust real-time communication using raw Java Networking and Socket programming.",
      "Implemented a highly stable Multithreading architecture to handle concurrent multiplayer sessions.",
      "Integrated JDBC for persistent database connectivity and player records."
    ],
    architecture: {
      pattern: "Client-Server Architecture",
      dataFlow: "JavaFX UI -> I/O Streams (JSON) -> Socket Server -> JDBC Database",
      keyDecisions: "Chose raw Sockets and JSON parsing over high-level frameworks to ensure deep understanding and maximum control over the network pipeline."
    }
  }
];

if (typeof window !== "undefined") {
  window.PROJECTS_DATA = PROJECTS_DATA;
}
