import { useState } from "react";
import { motion } from "framer-motion";
import {
  Gamepad2,
  Search,
  ShoppingCart,
  MapPin,
  UtensilsCrossed,
  ExternalLink,
  LayoutDashboard,
  BarChart3,
  FileText,
  Bell,
  SearchIcon,
  Activity,
  TrendingUp,
  Users,
  Globe,
} from "lucide-react";
import oplusLogo from "@/assets/oplus-logo.png";
import yourelLogo from "@/assets/yourel-logo.png";
import maplixLogo from "@/assets/maplix-logo.png";

interface Product {
  name: string;
  tagline: string;
  url: string;
  icon: React.ReactNode;
  logo?: string;
  color: string;
  status: string;
  stat: string;
  statLabel: string;
}

const products: Product[] = [
  {
    name: "Oplus",
    tagline: "AI social gaming platform",
    url: "https://games.aitoyz.in",
    icon: <Gamepad2 className="w-5 h-5" />,
    logo: oplusLogo,
    color: "from-violet-500 to-purple-600",
    status: "Live",
    stat: "2.1K",
    statLabel: "Players",
  },
  {
    name: "Yourel",
    tagline: "Hidden web search engine",
    url: "https://search.aitoyz.in",
    icon: <Search className="w-5 h-5" />,
    logo: yourelLogo,
    color: "from-cyan-500 to-blue-600",
    status: "Invite Only",
    stat: "50K+",
    statLabel: "Pages Indexed",
  },
  {
    name: "EUvsIN",
    tagline: "Food checker + group shopping",
    url: "https://shop.aitoyz.in",
    icon: <ShoppingCart className="w-5 h-5" />,
    color: "from-emerald-400 to-teal-600",
    status: "Live",
    stat: "340",
    statLabel: "Products",
  },
  {
    name: "Maplix",
    tagline: "AI discovery map",
    url: "https://maps.aitoyz.in",
    icon: <MapPin className="w-5 h-5" />,
    logo: maplixLogo,
    color: "from-orange-400 to-red-500",
    status: "Live",
    stat: "1.8K",
    statLabel: "Locations",
  },
  {
    name: "SwapEat",
    tagline: "Hyperlocal food sharing",
    url: "https://food.aitoyz.in",
    icon: <UtensilsCrossed className="w-5 h-5" />,
    color: "from-pink-400 to-rose-500",
    status: "Coming Soon",
    stat: "--",
    statLabel: "Launching",
  },
];

const sidebarItems = [
  { icon: <LayoutDashboard className="w-5 h-5" />, label: "Dashboard", active: true },
  { icon: <Gamepad2 className="w-5 h-5" />, label: "Gaming" },
  { icon: <Search className="w-5 h-5" />, label: "Search" },
  { icon: <ShoppingCart className="w-5 h-5" />, label: "Shopping" },
  { icon: <MapPin className="w-5 h-5" />, label: "Maps" },
  { icon: <UtensilsCrossed className="w-5 h-5" />, label: "Food" },
];

const Index = () => {
  const [activeProduct, setActiveProduct] = useState<number | null>(null);

  const handleVisit = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="h-screen w-screen flex bg-gradient-to-br from-[hsl(240,30%,95%)] via-[hsl(260,25%,93%)] to-[hsl(300,20%,94%)] overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-gradient-to-br from-purple-300/30 to-pink-200/20 blur-3xl pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] rounded-full bg-gradient-to-br from-blue-300/20 to-cyan-200/20 blur-3xl pointer-events-none" />

      {/* Sidebar - hidden on mobile */}
      <aside className="hidden md:flex flex-col w-20 lg:w-64 h-full glass-card rounded-none border-r border-l-0 border-t-0 border-b-0 py-6 px-2 lg:px-4 shrink-0">
        {/* Logo */}
        <div className="flex items-center gap-3 px-2 mb-8">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
            <Globe className="w-5 h-5 text-white" />
          </div>
          <div className="hidden lg:block">
            <h1 className="font-display text-xl font-bold tracking-wide text-foreground">AITOYZ</h1>
          </div>
        </div>

        {/* Nav items */}
        <nav className="flex-1 flex flex-col gap-1">
          {sidebarItems.map((item, i) => (
            <button
              key={i}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all text-sm ${
                item.active
                  ? "bg-primary/10 text-primary font-medium"
                  : "text-muted-foreground hover:bg-muted hover:text-foreground"
              }`}
            >
              {item.icon}
              <span className="hidden lg:inline">{item.label}</span>
            </button>
          ))}
        </nav>
      </aside>

      {/* Main content */}
      <main className="flex-1 flex flex-col h-full overflow-hidden">
        {/* Top bar */}
        <header className="flex items-center justify-between px-4 md:px-8 py-4 shrink-0">
          {/* Mobile logo */}
          <div className="flex md:hidden items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
              <Globe className="w-4 h-4 text-white" />
            </div>
            <span className="font-display text-lg font-bold tracking-wide">AITOYZ</span>
          </div>

          <div className="hidden md:block">
            <h2 className="text-lg font-semibold text-foreground">Welcome to AIToyz</h2>
            <p className="text-xs text-muted-foreground">Your AI product ecosystem</p>
          </div>

          {/* Search + actions */}
          <div className="flex items-center gap-3">
            <div className="hidden sm:flex items-center gap-2 glass-card rounded-full px-4 py-2">
              <SearchIcon className="w-4 h-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search products..."
                className="bg-transparent border-none outline-none text-sm w-32 lg:w-48 placeholder:text-muted-foreground"
              />
            </div>
            <div className="flex gap-2">
              {["Dashboard", "Analytics", "Reports"].map((tab, i) => (
                <button
                  key={tab}
                  className={`hidden lg:block px-3 py-1.5 rounded-lg text-sm transition-all ${
                    i === 0 ? "bg-primary/10 text-primary font-medium" : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
            <button className="relative w-9 h-9 rounded-full glass-card flex items-center justify-center">
              <Bell className="w-4 h-4 text-muted-foreground" />
              <span className="absolute -top-0.5 -right-0.5 w-3 h-3 bg-red-500 rounded-full border-2 border-background" />
            </button>
            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-purple-400 to-pink-400" />
          </div>
        </header>

        {/* Dashboard grid */}
        <div className="flex-1 px-4 md:px-8 pb-4 overflow-hidden">
          {/* Title */}
          <motion.div
            className="mb-4"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <h1 className="font-display text-2xl md:text-4xl font-bold text-foreground">
              Our Product Ecosystem
            </h1>
          </motion.div>

          {/* Grid layout */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-4 h-[calc(100%-3rem)]">
            {products.map((product, index) => (
              <motion.div
                key={product.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="relative group cursor-pointer"
                onMouseEnter={() => setActiveProduct(index)}
                onMouseLeave={() => setActiveProduct(null)}
                onClick={() => handleVisit(product.url)}
              >
                <div className="glass-card rounded-2xl h-full p-4 flex flex-col justify-between hover:scale-[1.02] transition-all duration-300 relative overflow-hidden">
                  {/* Gradient accent */}
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${product.color} opacity-60 group-hover:opacity-100 transition-opacity`} />

                  {/* Top section */}
                  <div>
                    {/* Icon + Status */}
                    <div className="flex items-start justify-between mb-3">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${product.color} flex items-center justify-center shadow-lg`}>
                        {product.logo ? (
                          <img src={product.logo} alt={product.name} className="w-7 h-7 object-contain" />
                        ) : (
                          <span className="text-white">{product.icon}</span>
                        )}
                      </div>
                      <span className={`text-[10px] px-2 py-0.5 rounded-full font-medium ${
                        product.status === "Live"
                          ? "bg-emerald-100 text-emerald-700"
                          : product.status === "Coming Soon"
                          ? "bg-amber-100 text-amber-700"
                          : "bg-blue-100 text-blue-700"
                      }`}>
                        {product.status}
                      </span>
                    </div>

                    {/* Name + tagline */}
                    <h3 className="font-display text-lg md:text-xl font-bold text-foreground tracking-wide">
                      {product.name}
                    </h3>
                    <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                      {product.tagline}
                    </p>
                  </div>

                  {/* Bottom section */}
                  <div className="mt-auto pt-4">
                    {/* Stat */}
                    <div className="flex items-end justify-between mb-3">
                      <div>
                        <p className="text-2xl md:text-3xl font-bold text-foreground">{product.stat}</p>
                        <p className="text-[10px] text-muted-foreground">{product.statLabel}</p>
                      </div>
                      <TrendingUp className={`w-4 h-4 ${product.status === "Coming Soon" ? "text-muted-foreground/30" : "text-emerald-500"}`} />
                    </div>

                    {/* Mini chart placeholder */}
                    <div className="flex items-end gap-0.5 h-8">
                      {[40, 65, 45, 80, 55, 70, 90, 60, 75].map((h, i) => (
                        <div
                          key={i}
                          className={`flex-1 rounded-sm bg-gradient-to-t ${product.color} transition-all duration-300`}
                          style={{
                            height: `${product.status === "Coming Soon" ? 10 : h}%`,
                            opacity: product.status === "Coming Soon" ? 0.15 : (activeProduct === index ? 0.8 : 0.3),
                          }}
                        />
                      ))}
                    </div>

                    {/* Visit button */}
                    <div className="flex items-center justify-between mt-3 pt-3 border-t border-border/50">
                      <span className="text-xs text-muted-foreground truncate">
                        {product.url.replace("https://", "")}
                      </span>
                      <ExternalLink className="w-3.5 h-3.5 text-muted-foreground group-hover:text-primary transition-colors" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
