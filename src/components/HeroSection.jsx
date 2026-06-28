import heroGold from "../assets/hero-gold.jpg";

export default function HeroSection() {
  return (
    <section className="relative flex min-h-screen flex-col luxury-bg pt-14">
      <div className="flex flex-1 items-center justify-center px-6 pb-16 sm:px-12">
        <div className="relative h-60 w-[min(100%,20rem)] overflow-hidden rounded-sm luxury-glow sm:h-96 sm:w-[min(55vw,32rem)]">
          <img
            src={heroGold}
            alt="Mayank Dahotre"
            className="h-full w-full object-cover object-[center_38%]"
            loading="eager"
            fetchPriority="high"
            decoding="async"
          />

          <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center">
            <p className="mb-1 text-sm text-white sm:text-base">
              Hi! I&apos;m
            </p>
            <h1 className="font-display text-4xl tracking-wide text-white drop-shadow-md sm:text-5xl md:text-6xl">
              Daho
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
}
