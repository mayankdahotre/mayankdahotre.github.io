import { EMAIL, GITHUB, LINKEDIN } from "../config/site";
import { useTheme } from "../context/ThemeContext";

const socials = [
  { name: "GitHub", url: GITHUB },
  { name: "LinkedIn", url: LINKEDIN },
  { name: "Email", url: `mailto:${EMAIL}` },
];

export default function Footer() {
  const { theme } = useTheme();

  return (
    <footer className={`border-t px-6 py-10 sm:px-10 ${theme.footer}`}>
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-4 sm:flex-row sm:justify-between">
        <p className="text-sm">
          © {new Date().getFullYear()} Mayank Dahotre
        </p>
        <div className="flex gap-5 text-sm">
          {socials.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`transition-colors ${theme.accentHover}`}
            >
              {social.name}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
