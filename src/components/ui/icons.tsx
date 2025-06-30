import { ArrowLeft, LogOut, LucideProps } from "lucide-react";

export const Icons = {
  arrowLeft: ArrowLeft,
  logOut: LogOut,

  logo: (props: LucideProps) => (
    <svg
      {...props}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="48" height="48" rx="8" fill="#0F172A" />
      <path
        d="M24 14L19 24L24 34L29 24L24 14Z"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),

  github: (props: LucideProps) => (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.3.8-.6v-2.2c-3.2.7-3.9-1.4-3.9-1.4-.5-1.2-1.2-1.6-1.2-1.6-1-.7.1-.7.1-.7 1.1.1 1.7 1.2 1.7 1.2 1 .1 2.1-.8 2.4-1 .1-.7.4-1.2.7-1.5-2.6-.3-5.3-1.3-5.3-5.7 0-1.3.5-2.4 1.2-3.3-.1-.3-.5-1.6.1-3.2 0 0 1-.3 3.3 1.2a11.2 11.2 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.6.2 2.9.1 3.2.7.9 1.2 2 1.2 3.3 0 4.4-2.8 5.4-5.4 5.7.4.3.8.9.8 1.9v2.8c0 .3.2.7.8.6a11.5 11.5 0 0 0 7.9-10.9C23.5 5.65 18.35.5 12 .5Z" />
    </svg>
  ),

  google: (props: LucideProps) => (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 533.5 544.3"
    >
      <path
        fill="#4285F4"
        d="M533.5 278.4c0-17.4-1.5-34.1-4.3-50.3H272v95.1h146.9c-6.4 34.6-25.8 63.8-54.9 83.4v69.3h88.8c52-47.9 81.7-118.5 81.7-197.5z"
      />
      <path
        fill="#34A853"
        d="M272 544.3c73.5 0 135-24.4 180-66.1l-88.8-69.3c-24.6 16.5-56.2 26.3-91.2 26.3-70 0-129.4-47.3-150.5-111.2H29.6v69.9c44.6 88.3 136.4 150.4 242.4 150.4z"
      />
      <path
        fill="#FBBC05"
        d="M121.5 323.9c-10-29.6-10-61.3 0-90.9V163H29.6a272.1 272.1 0 000 218.3l91.9-57.4z"
      />
      <path
        fill="#EA4335"
        d="M272 107.7c39.9 0 75.7 13.7 103.9 40.7l77.9-77.9C407 24.4 345.5 0 272 0 166 0 74.2 62.1 29.6 150.4l91.9 69.9C142.6 155 202 107.7 272 107.7z"
      />
    </svg>
  ),
};
