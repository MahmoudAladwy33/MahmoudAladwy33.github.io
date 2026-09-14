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
    category: "ios",
    featured: false,
    badges: ["Swift", "CoreData", "Firebase"],
    githubUrl: "https://github.com/MahmoudAladwy33/EventHub",
    coverImage: "assets/projects/eventhub/813shots_so.png",
    techStack: ["Swift", "UIKit", "Firebase", "CoreData", "REST API"],
    overview: "EventHub is a comprehensive event management application designed to help users discover, book, and organize events.",
    keyHighlights: [
      "Architected a scalable event discovery engine",
      "Integrated real-time notifications for event updates",
      "Implemented a seamless booking and ticketing flow"
    ],
    architecture: {
      pattern: "MVVM / Clean Architecture",
      dataFlow: "UI -> ViewModel -> Repository -> Network/Local",
      keyDecisions: "Used CoreData for offline caching to improve performance during network unreliability."
    }
  },
  {
    id: "carenest",
    title: "CareNest",
    tagline: "AI-powered infant cry analysis",
    category: "flutter",
    featured: false,
    badges: ["Flutter", "Dart", "AI/ML"],
    githubUrl: "https://github.com/Advanced-Infant-Care-Technology/Flutter",
    coverImage: "assets/projects/carenest/WhatsApp Image 2026-09-14 at 10.43.54 (1).jpeg",
    techStack: ["Flutter", "Dart", "Python", "TensorFlow", "FastAPI"],
    overview: "An innovative health-tech application that leverages machine learning to analyze infant cries and determine their needs.",
    keyHighlights: [
      "Integrated a custom TensorFlow model for audio classification",
      "Built a cross-platform mobile interface using Flutter",
      "Developed a real-time audio processing pipeline"
    ],
    architecture: {
      pattern: "BLoC Pattern",
      dataFlow: "UI -> BLoC -> Audio Service -> ML API",
      keyDecisions: "Offloaded complex audio inference to a dedicated Python backend to preserve mobile battery life."
    }
  },
  {
    id: "ghyom-ios",
    title: "Ghyom iOS",
    tagline: "Accurate weather forecasting at your fingertips",
    category: "ios",
    featured: false,
    badges: ["Swift", "SwiftUI", "Combine"],
    githubUrl: "https://github.com/MahmoudAladwy33/Ghyom_IOS",
    coverImage: "assets/projects/ghyom-ios/736shots_so.png",
    techStack: ["Swift", "SwiftUI", "Combine", "CoreLocation", "Weather API"],
    overview: "A native iOS application providing real-time weather updates and forecasts. It delivers precise localized weather data with an elegant and intuitive user interface.",
    keyHighlights: [
      "Built a reactive UI using SwiftUI and Combine",
      "Integrated CoreLocation for precise local weather tracking",
      "Designed dynamic weather animations based on current conditions"
    ],
    architecture: {
      pattern: "MVVM",
      dataFlow: "View -> ViewModel -> Weather Service",
      keyDecisions: "Adopted Combine for handling asynchronous API calls and state updates seamlessly."
    }
  },
  {
    id: "caredent",
    title: "CareDent",
    tagline: "Comprehensive dental care management",
    category: "flutter", // Assuming Flutter/Android based on Kotlin in subagent, but let's classify broadly
    featured: false,
    badges: ["Kotlin", "Room", "Booking"],
    githubUrl: "https://github.com/MahmoudAladwy33/CareDent",
    coverImage: "assets/projects/caredent/WhatsApp Image 2026-09-14 at 10.43.54.jpeg",
    techStack: ["Kotlin", "Android SDK", "Room", "Retrofit", "Coroutines"],
    overview: "A dental clinic management application that connects patients with dental professionals. It simplifies appointment booking, medical record tracking, and follow-up care.",
    keyHighlights: [
      "Developed a secure patient record management system",
      "Implemented a calendar-based appointment booking system",
      "Integrated automated push notifications for appointment reminders"
    ],
    architecture: {
      pattern: "MVVM with Clean Architecture",
      dataFlow: "Fragment -> ViewModel -> UseCase -> Repository",
      keyDecisions: "Used Room database for secure local storage of sensitive patient schedules."
    }
  },
  {
    id: "yummy",
    title: "Yummy",
    tagline: "Discover delicious recipes and food delivery",
    category: "ios",
    featured: false,
    badges: ["Swift", "UIKit", "Delivery"],
    githubUrl: "https://github.com/MahmoudAladwy33/Yummy",
    coverImage: "assets/projects/yummy/WhatsApp Image 2026-09-14 at 10.43.54 (3).jpeg",
    techStack: ["Swift", "UIKit", "Kingfisher", "Alamofire", "AutoLayout"],
    overview: "A food discovery and delivery application offering a rich catalog of recipes and local restaurant options. It focuses on providing a visually appealing and smooth browsing experience.",
    keyHighlights: [
      "Architected a scalable modular UI for recipe browsing",
      "Integrated efficient image caching for fast load times",
      "Built a robust cart and checkout system"
    ],
    architecture: {
      pattern: "MVC",
      dataFlow: "Controller -> Network Manager -> Model",
      keyDecisions: "Utilized Kingfisher for aggressive image caching to ensure smooth scrolling in image-heavy feeds."
    }
  },
  {
    id: "ghyom",
    title: "Ghyom",
    tagline: "Cross-platform weather forecasting app",
    category: "flutter",
    featured: false,
    badges: ["Flutter", "Dart", "Provider"],
    githubUrl: "https://github.com/MahmoudAladwy33/Ghyom",
    coverImage: "assets/projects/ghyom/WhatsApp Image 2026-09-14 at 10.43.54 (2).jpeg",
    techStack: ["Flutter", "Dart", "Provider", "Dio", "Geolocator"],
    overview: "A cross-platform version of the Ghyom weather application. It ensures consistent features and performance across both iOS and Android platforms.",
    keyHighlights: [
      "Migrated native application logic to a unified Flutter codebase",
      "Implemented robust state management using Provider",
      "Integrated cross-platform geolocation services"
    ],
    architecture: {
      pattern: "Provider State Management",
      dataFlow: "Widget -> Provider -> API Client",
      keyDecisions: "Chose Provider for lightweight and scalable state management across the app."
    }
  },
  {
    id: "xo-game",
    title: "XO Game",
    tagline: "Multiplayer Tic-Tac-Toe with real-time sync",
    category: "flutter", // Classified broadly
    featured: false,
    badges: ["Java", "Socket.IO", "Gaming"],
    githubUrl: "https://github.com/OmarRamadan20/Client-XO-Game",
    coverImage: "assets/projects/xo-game/Screenshot 2026-09-14 at 3.01.36 PM.png",
    videoUrl: "assets/projects/xo-game/WhatsApp Video 2026-09-14 at 10.41.48.mp4",
    techStack: ["Java", "Android SDK", "Node.js", "Socket.IO", "Express"],
    overview: "A real-time multiplayer Tic-Tac-Toe game featuring a dedicated client and server architecture. It allows players to compete online with low latency synchronization.",
    keyHighlights: [
      "Architected a real-time game state synchronization engine",
      "Developed a custom Node.js backend using Socket.IO",
      "Implemented matchmaking and player session management"
    ],
    architecture: {
      pattern: "Client-Server / Event-Driven",
      dataFlow: "Client UI -> Socket Client -> Socket Server -> Game Logic",
      keyDecisions: "Used Socket.IO over standard WebSockets for built-in broadcasting and connection fallback support."
    }
  }
];

if (typeof window !== "undefined") {
  window.PROJECTS_DATA = PROJECTS_DATA;
}
