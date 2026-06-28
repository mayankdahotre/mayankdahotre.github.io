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
    navShell: "",
    navBar: "border-b border-white/10 bg-gta-dark/85 backdrop-blur-md",
    navMobileToggle: "border-white/15 text-white/80",
    navMobileDrawer: "border-white/10 bg-gta-dark/95 backdrop-blur-md",
    megaBackdrop: "bg-black/40 backdrop-blur-sm",
    megaPanel: "border-white/10 bg-gta-dark/95 backdrop-blur-xl",
    megaHeading: "text-white/45",
    megaFeaturedLink: "text-base font-emphasis text-white hover:text-gta-yellow",
    megaLink: "text-sm text-white/70 hover:text-gta-yellow",
    megaDescription: "text-white/45",
    sliderBtn:
      "border-white/15 bg-gta-purple/20 text-white/80 hover:border-gta-orange/50 hover:text-gta-yellow",
  },
  luxury: {
    id: "luxury",
    label: "Gold",
    pageBg: "luxury-bg",
    heading: "text-white",
    accent: "text-white",
    accentHover: "hover:text-white/80",
    subheading: "text-white",
    body: "text-white/80",
    muted: "text-luxury-muted",
    skillTag:
      "rounded-sm border border-white/35 bg-luxury-card-bg px-4 py-2 text-sm text-white transition-colors hover:border-white/60 hover:luxury-glow",
    projectCard:
      "group flex flex-col rounded-sm border border-white/25 luxury-card-bg p-6 transition-all hover:border-white/50 hover:luxury-glow",
    projectTitle: "font-display text-2xl tracking-wide text-white",
    projectTag:
      "rounded-sm border border-white/25 bg-black px-2 py-1 text-xs text-white/90",
    projectLink: "text-white transition-colors hover:text-white/80",
    socialBtn:
      "flex h-14 w-14 items-center justify-center rounded-sm border border-white/35 bg-black text-white transition-all hover:border-white/60 hover:text-white hover:luxury-glow",
    primaryBtn:
      "inline-block rounded-md border border-white bg-white px-10 py-4 font-display text-xl tracking-wider text-black transition-transform hover:scale-105 hover:luxury-glow",
    secondaryBtn:
      "inline-block rounded-md border border-white/50 bg-black px-10 py-4 font-display text-xl tracking-wider text-white transition-all hover:border-white hover:luxury-glow hover:scale-105",
    sectionOverlay: "luxury-section-glow",
    footer: "border-white/25 text-luxury-muted",
    navShell: "",
    navBar: "border-b border-white/20 bg-black/85 backdrop-blur-md",
    navMobileToggle: "border-white/35 text-white",
    navMobileDrawer: "border-white/20 bg-black/95 backdrop-blur-md",
    megaBackdrop: "bg-black/50 backdrop-blur-sm",
    megaPanel: "border-white/20 bg-black/95 backdrop-blur-xl",
    megaHeading: "text-luxury-muted",
    megaFeaturedLink: "text-base font-emphasis text-white hover:text-white/80",
    megaLink: "text-sm text-luxury-muted hover:text-white",
    megaDescription: "text-luxury-muted/80",
    sliderBtn:
      "border-white/35 bg-black text-white hover:border-white/60 hover:luxury-glow",
  },
};

export const THEME_STORAGE_KEY = "portfolio-theme";
