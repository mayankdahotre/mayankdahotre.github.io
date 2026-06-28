import { useTheme } from "../context/ThemeContext";
import HeroSectionGta from "./HeroSectionGta";
import HeroSectionLuxury from "./HeroSectionLuxury";

export default function HeroSection(props) {
  const { themeId } = useTheme();
  return themeId === "luxury" ? (
    <HeroSectionLuxury {...props} />
  ) : (
    <HeroSectionGta {...props} />
  );
}
