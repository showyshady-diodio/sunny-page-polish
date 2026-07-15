import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ArrowUpRight, Clock, Users, DollarSign, Play, Sparkles, Globe, TrendingUp } from "lucide-react";

export const Route = createFileRoute("/")({
  component: Index,
});

const NAV = [
  { id: "vision", label: "Vision" },
  { id: "capabilities", label: "Capabilities" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];

function scrollTo(id: string) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

function Index() {
  const [active, setActive] = useState("vision");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      const y = window.scrollY + 120;
      let cur = "vision";
      for (const n of NAV) {
        const el = document.getElementById(n.id);
        if (el && el.offsetTop <= y) cur = n.id;
      }
      setActive(cur);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-background text-foreground">
      {/* Ambient background — sits BEHIND content, cannot block clicks */}
      <div aria-hidden className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute left-1/2 top-[10%] h-[720px] w-[720px] -translate-x-1/2 rounded-full opacity-70"
             style={{ background: "radial-gradient(circle, oklch(0.45 0.15 265 / 0.35), transparent 65%)" }} />
        <div className="absolute -left-40 top-1/3 h-[420px] w-[420px] rounded-full opacity-40"
             style={{ background: "radial-gradient(circle, oklch(0.5 0.14 20 / 0.25), transparent 70%)" }} />
        <div className="absolute -right-40 top-2/3 h-[520px] w-[520px] rounded-full opacity-40"
             style={{ background: "radial-gradient(circle, oklch(0.5 0.15 190 / 0.25), transparent 70%)" }} />
        <div className="absolute inset-0 opacity-[0.04]"
             style={{ backgroundImage: "linear-gradient(oklch(1 0 0) 1px, transparent 1px), linear-gradient(90deg, oklch(1 0 0) 1px, transparent 1px)", backgroundSize: "56px 56px" }} />
      </div>

      {/* NAV */}
      <header className={`fixed inset-x-0 top-4 z-50 flex justify-center px-4 transition-all ${scrolled ? "top-2" : "top-4"}`}>
        <div className="flex w-full max-w-5xl items-center justify-between gap-3">
          <button onClick={() => scrollTo("vision")} className="pill flex h-11 w-11 items-center justify-center font-display text-lg">
            ZW
          </button>
          <nav className="pill hidden items-center gap-1 px-2 py-1.5 md:flex">
            {NAV.map((n) => (
              <button
                key={n.id}
                onClick={() => scrollTo(n.id)}
                className={`rounded-full px-4 py-2 text-sm transition-colors ${
                  active === n.id ? "bg-white/10 text-foreground" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {n.label}
              </button>
            ))}
            <button
              onClick={() => scrollTo("contact")}
              className="ml-1 inline-flex items-center gap-1.5 rounded-full bg-white px-4 py-2 text-sm font-medium text-primary-foreground transition-transform hover:scale-[1.03]"
            >
              Let's Connect <ArrowUpRight className="h-3.5 w-3.5" />
            </button>
          </nav>
          <button
            onClick={() => scrollTo("contact")}
            className="pill inline-flex items-center gap-1.5 px-4 py-2 text-sm md:hidden"
          >
            Connect <ArrowUpRight className="h-3.5 w-3.5" />
          </button>
        </div>
      </header>

      {/* Content wrapper above bg */}
      <main className="relative z-10">
        {/* HERO / VISION */}
        <section id="vision" className="relative flex min-h-screen items-center justify-center px-6 pt-32 pb-24">
          <div className="mx-auto max-w-4xl text-center">
            <div className="pill mx-auto mb-10 inline-flex items-center gap-3 px-4 py-2 text-xs tracking-wider">
              <span className="rounded-full bg-white/10 px-2.5 py-0.5 text-[10px] font-medium uppercase">AI Commerce</span>
              <span className="text-muted-foreground">Brand Growth · Creator Ecosystem · Global Commerce</span>
            </div>

            <h1 className="font-display text-5xl leading-[1.05] tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
              Building the future of<br />
              AI-powered commerce.
            </h1>

            <p className="mt-8 text-sm text-muted-foreground">用 AI 重构品牌增长与商业连接</p>

            <p className="mx-auto mt-8 max-w-xl text-base leading-relaxed text-foreground/85">
              Connecting AI, brands and creator ecosystems<br />
              to unlock the next generation of commerce.
            </p>

            <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-foreground/85">
              8 years in brand commercialization.<br />
              1000+ creator partnerships.<br />
              100M+ GMV experience.
            </p>

            <p className="mt-6 text-xs text-muted-foreground">
              8 年品牌商业化实战 · 1000+ 达人生态合作 · 累计操盘过亿 GMV
            </p>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              <button
                onClick={() => scrollTo("experience")}
                className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-medium text-primary-foreground transition-transform hover:scale-[1.03]"
              >
                Explore My Work <ArrowUpRight className="h-4 w-4" />
              </button>
              <button
                onClick={() => scrollTo("capabilities")}
                className="pill inline-flex items-center gap-2 px-5 py-2.5 text-sm"
              >
                <Play className="h-3.5 w-3.5" /> AI Capabilities
              </button>
            </div>

            {/* Stats */}
            <div className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-3">
              {[
                { icon: Clock, big: "8 Years", label: "Commercial Experience", sub: "Brand Growth & Business Development" },
                { icon: Users, big: "1000+", label: "Creator Ecosystem", sub: "Creator Partnerships Built" },
                { icon: DollarSign, big: "100M+", label: "GMV Experience", sub: "Commerce Growth Impact" },
              ].map((s) => (
                <div key={s.label} className="glass-card p-6 text-left transition-transform hover:-translate-y-1">
                  <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/5">
                    <s.icon className="h-4 w-4" />
                  </div>
                  <div className="font-display text-4xl">{s.big}</div>
                  <div className="mt-2 text-sm font-medium">{s.label}</div>
                  <div className="mt-1 text-xs text-muted-foreground">{s.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CAPABILITIES */}
        <section id="capabilities" className="relative px-6 py-32">
          <div className="mx-auto max-w-6xl">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Capabilities</p>
              <h2 className="mt-4 font-display text-4xl sm:text-5xl md:text-6xl">
                Connecting AI, Brands<br />and Global Commerce
              </h2>
              <p className="mt-4 text-sm text-muted-foreground">
                用 AI 连接品牌、达人与消费者，探索下一代商业增长模式。
              </p>
            </div>

            <div className="mt-16 grid gap-6 md:grid-cols-3">
              {[
                {
                  icon: Sparkles,
                  tags: ["AI Workflow", "AI Strategy", "Automation"],
                  title: "AI Commercialization",
                  zh: "AI 商业化落地",
                  body: "Applying AI tools and workflows to optimize business processes, commercial strategy and growth execution.",
                },
                {
                  icon: TrendingUp,
                  tags: ["Brand Strategy", "Creator Ecosystem", "E-commerce"],
                  title: "Brand & Creator Growth",
                  zh: "品牌与达人增长",
                  body: "Building connections between brands, creators and consumers through commercial partnerships and ecosystem growth.",
                },
                {
                  icon: Globe,
                  tags: ["Cross-border", "Southeast Asia", "Expansion"],
                  title: "Global Commerce",
                  zh: "全球商业探索",
                  body: "Exploring global business opportunities through cross-border commerce and international market insights.",
                },
              ].map((c) => (
                <article key={c.title} className="glass-card group relative p-7 transition-all hover:-translate-y-1 hover:border-white/20">
                  <div className="mb-6 inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/5">
                    <c.icon className="h-4.5 w-4.5" />
                  </div>
                  <div className="mb-4 flex flex-wrap gap-1.5">
                    {c.tags.map((t) => (
                      <span key={t} className="rounded-full border border-white/10 px-2.5 py-0.5 text-[10px] text-muted-foreground">
                        {t}
                      </span>
                    ))}
                  </div>
                  <h3 className="font-display text-3xl">{c.title}</h3>
                  <p className="mt-1 text-xs text-muted-foreground">{c.zh}</p>
                  <p className="mt-4 text-sm leading-relaxed text-foreground/80">{c.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* EXPERIENCE */}
        <section id="experience" className="relative px-6 py-32">
          <div className="mx-auto max-w-6xl">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Experience</p>
              <h2 className="mt-4 font-display text-4xl sm:text-5xl md:text-6xl">Selected Projects</h2>
              <p className="mt-4 text-sm text-muted-foreground">累计操盘品牌商业化项目，实现 GMV 超亿元规模。</p>
            </div>

            <div className="mt-16 space-y-6">
              <div className="glass-card p-8 md:p-10">
                <div className="flex flex-wrap items-baseline justify-between gap-4">
                  <div>
                    <p className="text-xs uppercase tracking-widest text-muted-foreground">Luxury Brand Commerce Growth</p>
                    <h3 className="mt-2 font-display text-4xl md:text-5xl">千万级品牌达播项目操盘</h3>
                  </div>
                  <div className="text-right">
                    <div className="font-display text-3xl md:text-4xl">100M+ RMB</div>
                    <div className="text-xs text-muted-foreground">Cumulative GMV</div>
                  </div>
                </div>
                <p className="mt-6 max-w-3xl text-sm leading-relaxed text-foreground/80">
                  累计操盘品牌商业化项目，实现 GMV 超亿元规模。深度操盘国际品牌达播项目。
                </p>
                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  <div className="rounded-lg border border-white/10 bg-white/[0.02] p-4 text-sm">
                    川久保玲墨镜 — <span className="text-muted-foreground">GMV 2000 万元+</span>
                  </div>
                  <div className="rounded-lg border border-white/10 bg-white/[0.02] p-4 text-sm">
                    Folli Follie 手表 — <span className="text-muted-foreground">GMV 4000 万元+</span>
                  </div>
                </div>
              </div>

              <div className="grid gap-6 md:grid-cols-3">
                {[
                  {
                    tag: "Universal Beijing Resort",
                    title: "Brand × Creator × Platform",
                    zh: "品牌 × 达人 × 平台生态项目",
                    body: "整合品牌方、平台、达人资源，推动大型商业项目落地。",
                  },
                  {
                    tag: "Kangol",
                    title: "Multi-channel Brand Growth",
                    zh: "品牌全渠道商业化",
                    body: "围绕品牌增长，探索线上渠道、达人生态与商业合作模式。",
                  },
                  {
                    tag: "PINKO · Bulgari",
                    title: "Luxury Brand Campaigns",
                    zh: "国际品牌商业合作项目",
                    body: "参与国际时尚与奢侈品牌商业推广，通过达人合作提升品牌商业价值。",
                  },
                ].map((p) => (
                  <div key={p.tag} className="glass-card p-6 transition-transform hover:-translate-y-1">
                    <p className="text-[10px] uppercase tracking-widest text-muted-foreground">{p.tag}</p>
                    <h4 className="mt-3 font-display text-2xl">{p.title}</h4>
                    <p className="mt-1 text-xs text-muted-foreground">{p.zh}</p>
                    <p className="mt-4 text-sm leading-relaxed text-foreground/80">{p.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="relative px-6 py-32">
          <div className="mx-auto max-w-3xl">
            <div className="glass-card p-10 text-center md:p-16">
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Contact</p>
              <h2 className="mt-4 font-display text-4xl sm:text-5xl md:text-6xl">Let's build something.</h2>
              <p className="mt-4 text-sm text-muted-foreground">
                欢迎交流品牌商业化、达人生态与 AI 落地机会。
              </p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                <a
                  href="mailto:hello@zhangxinwen.com"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-medium text-primary-foreground transition-transform hover:scale-[1.03]"
                >
                  hello@zhangxinwen.com <ArrowUpRight className="h-4 w-4" />
                </a>
                <button onClick={() => scrollTo("vision")} className="pill inline-flex items-center gap-2 px-5 py-2.5 text-sm">
                  Back to top
                </button>
              </div>
            </div>
            <p className="mt-10 text-center text-xs text-muted-foreground">
              © {new Date().getFullYear()} Zhang Xinwen · AI × Brand × Commerce
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
