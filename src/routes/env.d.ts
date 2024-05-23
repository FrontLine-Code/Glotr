REACT_APP_API_URL = "https://api.example.com";

declare namespace NodeJS {
  interface ProcessEnv {
    REACT_APP_API_URL: string;
    // Add other custom environment variables here
  }
}
