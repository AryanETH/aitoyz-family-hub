import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import oplusLogo from "@/assets/oplus-logo.png";
import yourelLogo from "@/assets/yourel-logo.png";
import maplixLogo from "@/assets/maplix-logo.png";

const products = [
  {
    name: "Oplus",
    tagline: "AI social gaming platform",
    url: "games.aitoyz.in",
    logo: oplusLogo,
    key: "oplus",
  },
  {
    name: "Yourel",
    tagline: "Hidden web search engine",
    url: "search.aitoyz.in",
    logo: yourelLogo,
    key: "yourel",
  },
  {
    name: "EUvsIN",
    tagline: "Food checker + group shopping",
    url: "shop.aitoyz.in",
    logo: null,
    key: "euvsin",
  },
  {
    name: "Maplix",
    tagline: "AI discovery map",
    url: "maps.aitoyz.in",
    logo: maplixLogo,
    key: "maplix",
  },
  {
    name: "SwapEat",
    tagline: "Hyperlocal food sharing",
    url: "food.aitoyz.in",
    logo: null,
    key: "swapeat",
  },
];

const Index = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % products.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const activeProduct = products[activeIndex];

  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center bg-background overflow-hidden relative">
      {/* Header */}
      <motion.div
        className="absolute top-8 left-8 md:top-12 md:left-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-foreground text-xl md:text-2xl font-bold tracking-[0.3em] uppercase">
          AIToyz
        </h1>
        <p className="text-muted-foreground text-[10px] md:text-xs tracking-[0.2em] mt-1">
          AI product ecosystem
        </p>
      </motion.div>

      {/* Product nav dots */}
      <motion.div
        className="absolute top-8 right-8 md:top-12 md:right-12 flex gap-3 items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        {products.map((p, i) => (
          <button
            key={p.name}
            onClick={() => setActiveIndex(i)}
            className={`w-2 h-2 rounded-full transition-all duration-500 ${
              i === activeIndex
                ? "bg-foreground w-6"
                : "bg-muted-foreground/40 hover:bg-muted-foreground"
            }`}
          />
        ))}
      </motion.div>

      {/* MacBook Frame */}
      <motion.div
        className="relative w-[90vw] max-w-[900px]"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        {/* Screen bezel */}
        <div className="relative bg-[hsl(0,0%,12%)] rounded-t-2xl p-[6px] md:p-2 border border-[hsl(var(--border))]">
          {/* Notch */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 md:w-24 h-3 md:h-4 bg-[hsl(0,0%,12%)] rounded-b-lg z-10 flex items-center justify-center">
            <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-[hsl(0,0%,22%)] border border-[hsl(0,0%,28%)]" />
          </div>

          {/* Screen */}
          <div className="relative bg-background rounded-lg overflow-hidden aspect-[16/10]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ x: "100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: "-100%", opacity: 0 }}
                transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="absolute inset-0 flex flex-col items-center justify-center p-6 md:p-12"
              >
                <div className="flex flex-col items-center gap-4 md:gap-6">
                  {activeProduct.logo ? (
                    <img
                      src={activeProduct.logo}
                      alt={activeProduct.name}
                      className="w-16 h-16 md:w-24 md:h-24 object-contain brightness-0 invert opacity-90"
                    />
                  ) : (
                    <div className="w-16 h-16 md:w-24 md:h-24 rounded-2xl border border-[hsl(var(--border))] flex items-center justify-center">
                      <span className="text-foreground text-2xl md:text-4xl font-bold">
                        {activeProduct.name[0]}
                      </span>
                    </div>
                  )}

                  <h2 className="text-foreground text-3xl md:text-6xl font-bold tracking-[0.2em] uppercase">
                    {activeProduct.name}
                  </h2>

                  <p className="text-muted-foreground text-xs md:text-sm tracking-[0.15em]">
                    {activeProduct.tagline}
                  </p>

                  <span className="text-muted-foreground/60 text-[10px] md:text-xs tracking-widest mt-2">
                    {activeProduct.url}
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Progress bar */}
            <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-[hsl(var(--border))]">
              <motion.div
                className="h-full bg-foreground/40"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 5, ease: "linear" }}
                key={activeIndex}
              />
            </div>
          </div>
        </div>

        {/* MacBook hinge */}
        <div className="relative h-3 md:h-4 bg-gradient-to-b from-[hsl(0,0%,14%)] to-[hsl(0,0%,10%)] rounded-b-sm mx-[2%]" />

        {/* Keyboard body */}
        <div className="relative bg-[hsl(0,0%,11%)] rounded-b-2xl pt-2 pb-3 px-3 md:pt-3 md:pb-4 md:px-6 border border-t-0 border-[hsl(var(--border))]">
          {/* Keyboard rows */}
          <div className="flex flex-col gap-[3px] md:gap-1">
            {/* Row 1 - Function keys with product names on first 5 */}
            <div className="flex gap-[2px] md:gap-[3px]">
              {Array.from({ length: 14 }).map((_, i) => {
                const isProductKey = i >= 1 && i <= 5;
                const productIndex = i - 1;
                const product = isProductKey ? products[productIndex] : null;
                const isActive = isProductKey && productIndex === activeIndex;

                return isProductKey ? (
                  <button
                    key={i}
                    onClick={() => setActiveIndex(productIndex)}
                    className={`h-3 md:h-5 flex-1 rounded-[2px] flex items-center justify-center cursor-pointer transition-all duration-300 ${
                      isActive
                        ? "bg-[hsl(0,0%,28%)] shadow-[0_0_8px_rgba(255,255,255,0.15)]"
                        : "bg-[hsl(0,0%,16%)] hover:bg-[hsl(0,0%,22%)] hover:shadow-[0_0_6px_rgba(255,255,255,0.08)]"
                    }`}
                  >
                    <span className="text-[4px] md:text-[6px] text-foreground/70 uppercase tracking-wider font-medium select-none">
                      {product!.name}
                    </span>
                  </button>
                ) : (
                  <div
                    key={i}
                    className={`h-3 md:h-5 rounded-[2px] bg-[hsl(0,0%,16%)] ${
                      i === 0 ? "flex-[0.8]" : "flex-1"
                    }`}
                  />
                );
              })}
            </div>
            {/* Row 2 */}
            <div className="flex gap-[2px] md:gap-[3px]">
              {Array.from({ length: 14 }).map((_, i) => (
                <div
                  key={i}
                  className={`h-4 md:h-6 rounded-[2px] bg-[hsl(0,0%,16%)] ${
                    i === 0 || i === 13 ? "flex-[1.3]" : "flex-1"
                  }`}
                />
              ))}
            </div>
            {/* Row 3 */}
            <div className="flex gap-[2px] md:gap-[3px]">
              {Array.from({ length: 13 }).map((_, i) => (
                <div
                  key={i}
                  className={`h-4 md:h-6 rounded-[2px] bg-[hsl(0,0%,16%)] ${
                    i === 0 ? "flex-[1.6]" : i === 12 ? "flex-[1.6]" : "flex-1"
                  }`}
                />
              ))}
            </div>
            {/* Row 4 */}
            <div className="flex gap-[2px] md:gap-[3px]">
              {Array.from({ length: 12 }).map((_, i) => (
                <div
                  key={i}
                  className={`h-4 md:h-6 rounded-[2px] bg-[hsl(0,0%,16%)] ${
                    i === 0 ? "flex-[2]" : i === 11 ? "flex-[2]" : "flex-1"
                  }`}
                />
              ))}
            </div>
            {/* Row 5 - Bottom with spacebar */}
            <div className="flex gap-[2px] md:gap-[3px]">
              {Array.from({ length: 3 }).map((_, i) => (
                <div
                  key={`l-${i}`}
                  className="h-4 md:h-6 flex-1 rounded-[2px] bg-[hsl(0,0%,16%)]"
                />
              ))}
              <div className="h-4 md:h-6 flex-[5] rounded-[2px] bg-[hsl(0,0%,16%)]" />
              {Array.from({ length: 4 }).map((_, i) => (
                <div
                  key={`r-${i}`}
                  className={`rounded-[2px] bg-[hsl(0,0%,16%)] ${
                    i >= 1 ? "h-[8px] md:h-3 flex-[0.7] self-end" : "h-4 md:h-6 flex-1"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Trackpad */}
          <div className="mt-2 md:mt-3 mx-auto w-[40%] h-10 md:h-16 rounded-lg bg-[hsl(0,0%,14%)] border border-[hsl(0,0%,20%)]" />
        </div>
      </motion.div>

      {/* Bottom product name list */}
      <motion.div
        className="absolute bottom-6 md:bottom-10 flex gap-6 md:gap-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        {products.map((p, i) => (
          <button
            key={p.name}
            onClick={() => setActiveIndex(i)}
            className={`text-[10px] md:text-xs tracking-[0.2em] uppercase transition-all duration-500 ${
              i === activeIndex
                ? "text-foreground"
                : "text-muted-foreground/30 hover:text-muted-foreground/60"
            }`}
          >
            {p.name}
          </button>
        ))}
      </motion.div>
    </div>
  );
};

export default Index;
