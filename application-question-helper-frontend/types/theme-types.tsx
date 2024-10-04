// Credit to "The Dev Logger" for the original code https://www.youtube.com/@TheDevLogger

type ThemeColors = "Zinc" | "Rose" | "Blue" | "Green" | "Orange";

interface ThemeColorStateParams {
  themeColor: ThemeColors;
  setThemeColor: React.Dispatch<React.SetStateAction<ThemeColors>>;
}
