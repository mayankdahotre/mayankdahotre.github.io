export const themes = {
  gta: {
    id: "gta",
    label: "GTA V",
    pageBg: "bg-gta-dark",
    heading: "gta-gradient-text",
    accent: "text-gta-yellow",
    accentHover: "hover:text-gta-yellow",
    subheading: "text-gta-yellow",
    body: "text-white/75",
    muted: "text-white/70",
    skillTag:
      "rounded-sm border border-gta-pink/30 bg-gta-purple/30 px-4 py-2 text-sm text-white/90 backdrop-blur-sm transition-colors hover:border-gta-orange/50 hover:bg-gta-magenta/20",
    projectCard:
      "group flex flex-col rounded-sm border border-white/10 bg-gta-purple/20 p-6 backdrop-blur-sm transition-all hover:border-gta-orange/40 hover:gta-glow",
    projectTitle: "font-display text-2xl tracking-wide text-gta-yellow",
    projectTag: "rounded-sm bg-gta-magenta/20 px-2 py-1 text-xs text-gta-pink",
    projectLink: "text-gta-orange transition-colors hover:text-gta-yellow",
    socialBtn:
      "flex h-14 w-14 items-center justify-center rounded-sm border border-white/10 bg-gta-purple/30 text-white/80 transition-all hover:border-gta-orange/50 hover:text-gta-yellow hover:gta-glow",
    primaryBtn:
      "gta-gradient inline-block rounded-sm px-10 py-4 font-display text-xl tracking-wider text-white transition-transform hover:scale-105",
    secondaryBtn:
      "inline-block rounded-sm border border-gta-orange/50 px-10 py-4 font-display text-xl tracking-wider text-gta-yellow transition-all hover:border-gta-yellow hover:bg-gta-purple/30 hover:scale-105",
    sectionOverlay: "gta-gradient opacity-5",
    footer: "border-white/10 text-white/40",
  },
  luxury: {
    id: "luxury",
    label: "Gold",
    pageBg: "luxury-bg",
    heading: "luxury-gradient-text",
    accent: "text-luxury-gold-muted",
    accentHover: "hover:text-luxury-gold-light",
    subheading: "luxury-gradient-text",
    body: "text-white/75",
    muted: "text-white/55",
    skillTag:
      "rounded-sm border border-luxury-gold/30 bg-luxury-card-bg px-4 py-2 text-sm text-luxury-gold-light transition-colors hover:border-luxury-gold/55 hover:luxury-glow",
    projectCard:
      "group flex flex-col rounded-sm border border-luxury-gold/20 luxury-card-bg p-6 transition-all hover:border-luxury-gold/45 hover:luxury-glow",
    projectTitle: "font-display text-2xl tracking-wide luxury-gradient-text",
    projectTag:
      "rounded-sm border border-luxury-gold/20 bg-luxury-bronze/30 px-2 py-1 text-xs text-luxury-gold-light",
    projectLink:
      "text-luxury-gold-muted transition-colors hover:text-luxury-gold-light",
    socialBtn:
      "flex h-14 w-14 items-center justify-center rounded-sm border border-luxury-gold/25 luxury-card-bg text-luxury-gold-light transition-all hover:border-luxury-gold/55 hover:text-luxury-gold hover:luxury-glow",
    primaryBtn:
      "luxury-gradient inline-block rounded-sm px-10 py-4 font-display text-xl tracking-wider text-black transition-transform hover:scale-105 hover:luxury-glow",
    secondaryBtn:
      "inline-block rounded-sm border border-luxury-gold/50 px-10 py-4 font-display text-xl tracking-wider luxury-gradient-text transition-all hover:border-luxury-gold hover:luxury-glow hover:scale-105",
    sectionOverlay: "luxury-section-glow",
    footer: "border-luxury-gold/20 text-white/35",
  },
};

export const THEME_STORAGE_KEY = "portfolio-theme";
