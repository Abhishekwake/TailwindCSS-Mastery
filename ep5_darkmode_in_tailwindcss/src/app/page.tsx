export default function Home() {
  const icons = [
    {
      title: "Claude",
      icon: <ClaudeLogo className="h-12 w-12" />,
    },
    {
      title: "Copilot",
      icon: <CopilotLogo className="h-12 w-12" />,
    },
    {
      title: "OpenAI",
      icon: <OpenAILogo className="h-12 w-12" />,
    },
    {
      title: "Meta",
      icon: <MetaLogo className="h-12 w-12" />,
    },
    {
      title: "Gemini",
      icon: <GeminiLogo className="h-12 w-12" />,
    },
  ];

  return (
    <div className="relative h-full w-full flex justify-center items-center">
      {/* CLIPPING CONTAINER */}
      <div className="relative h-80 w-60 overflow-hidden rounded-2xl  border-neutral-400 border-4 ">
        {/* CARD (NOW VISIBLE) */}
        <div className="absolute inset-0  bg-neutral-200 shadow-2xl z-10 " />

        {/* ICONS */}
        <div className="absolute inset-0 flex justify-center items-center gap-4 z-20 animate-me mask-r-from-50 mask-l-from-50">
          {icons.map((item) => (
            <div
              key={item.title}
              className="size-12 rounded-full bg-neutral-300 flex items-center justify-center"
            >
              {item.icon}
            </div>
          ))}
        </div>
      </div>

      <Pattern />
    </div>
  );
}
const Pattern = () => {
  return (
    <div
      className="absolute inset-0 z-0 rounded-lg m-auto
      bg-[image:repeating-linear-gradient(315deg,_var(--pattern-fg)_0,_var(--pattern-fg)_1px,transparent_0,_transparent_50%)] bg-[size:10px_10px] bg-fixed"
    ></div>
  );
};

// ================= OFFICIAL BRAND ICONS =================

const ClaudeLogo = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    className={className}
    fill="none"
  >
    <rect width="512" height="512" rx="104" fill="#CC9B7A" />
    <path
      fill="#1F1F1E"
      d="M318.66 149.78h-43.37l78.95 212.43h43.37L318.66 149.78Zm-125.33 0-78.95 212.43h44.26l15.93-44.61h82.85l16.11 44.61h44.26l-79.13-212.43h-45.32Zm-4.25 128.34 26.91-74.7 27.08 74.7h-53.99Z"
    />
  </svg>
);

const OpenAILogo = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    fill="currentColor"
  >
    <path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.872zm16.5963 3.8558L13.1038 8.364 15.1192 7.2a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997Z" />
  </svg>
);

const GeminiLogo = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    fill="none"
  >
    <defs>
      <linearGradient id="gemini-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#4285F4" />
        <stop offset="50%" stopColor="#9B72CB" />
        <stop offset="100%" stopColor="#D96570" />
      </linearGradient>
    </defs>
    <circle cx="12" cy="12" r="10" fill="url(#gemini-gradient)" />
  </svg>
);

const MetaLogo = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 36 36"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    fill="none"
  >
    <defs>
      <linearGradient id="meta-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#0081FB" />
        <stop offset="100%" stopColor="#0064D2" />
      </linearGradient>
    </defs>
    <path
      fill="url(#meta-gradient)"
      d="M34.5 18c0-9.11-7.39-16.5-16.5-16.5S1.5 8.89 1.5 18 8.89 34.5 18 34.5 34.5 27.11 34.5 18zm-16.97 9.24c-1.07 0-2.06-.61-2.88-1.77-.88-1.24-1.64-3.09-2.33-5.64-.35-1.29-.69-2.66-1-4.05-.38 1.46-.78 2.86-1.16 4.14-.7 2.35-1.44 4.13-2.27 5.45-.78 1.23-1.66 1.87-2.62 1.87-1.51 0-2.64-1.39-3.54-4.35C1.1 19.97.78 16.78.78 13.36c0-1.71.18-2.92.56-3.8.35-.81.87-1.22 1.59-1.22.89 0 1.51.58 1.85 1.72.3 1.01.45 2.43.45 4.21 0 2.27.14 4.33.43 6.11.26 1.61.61 2.92 1.04 3.88.27-.75.56-1.66.87-2.71.71-2.39 1.47-4.96 2.12-7.38.25-.92.66-1.67 1.23-2.24.53-.54 1.17-.81 1.9-.81.68 0 1.28.25 1.78.74.54.53.94 1.26 1.19 2.17.65 2.4 1.41 4.96 2.13 7.37.31 1.05.6 1.96.87 2.71.43-.96.78-2.27 1.04-3.88.29-1.78.43-3.84.43-6.11 0-1.78.15-3.2.45-4.21.34-1.14.96-1.72 1.85-1.72.72 0 1.24.41 1.59 1.22.38.88.56 2.09.56 3.8 0 3.42-.32 6.61-.95 9.53-.9 2.96-2.03 4.35-3.54 4.35z"
    />
  </svg>
);

const CopilotLogo = ({ className }: { className?: string }) => {
  return (
    <svg
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      fill="none"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.268 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.293 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z"
        fill="currentColor"
      />
    </svg>
  );
};
