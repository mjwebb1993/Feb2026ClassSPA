import { userName, greeting } from "./feature1.js";
import { userGreeting, default as anonFunction } from "./feature2.js";

// Invoke userGreeting and pass userName and greeting as arguments
userGreeting(userName, greeting);
anonFunction();
