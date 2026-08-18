import { useEffect, useRef } from "react";
import gsap from "gsap";
import { site } from "../lib/site";

const MARQUEE = Array.from({ length: 10 }, () => "BUILDING WITH DATA • ").join("");

export default function ContactFooter() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);
  const rootRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // hls.js is ~400kB and the video is decoration — keep it out of the main
    // bundle and pull it in once the page is up.
    let hls: { destroy: () => void } | undefined;
    let cancelled = false;

    import("hls.js").then(({ default: Hls }) => {
      if (cancelled || !videoRef.current) return;
      if (Hls.isSupported()) {
        const instance = new Hls({ enableWorker: true });
        instance.loadSource(site.heroVideo);
        instance.attachMedia(videoRef.current);
        // Autoplay can be deferred when the source attaches after mount.
        instance.on(Hls.Events.MANIFEST_PARSED, () => {
          videoRef.current?.play().catch(() => {});
        });
        hls = instance;
      } else if (videoRef.current.canPlayType("application/vnd.apple.mpegurl")) {
        videoRef.current.src = site.heroVideo;
        videoRef.current.play().catch(() => {});
      }
    });

    return () => {
      cancelled = true;
      hls?.destroy();
    };
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(marqueeRef.current, {
        xPercent: -50,
        duration: 40,
        ease: "none",
        repeat: -1,
      });
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <footer
      id="contact"
      ref={rootRef}
      className="relative overflow-hidden bg-bg pb-8 pt-16 md:pb-12 md:pt-20"
    >
      <div className="absolute inset-0 overflow-hidden">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="absolute left-1/2 top-1/2 min-h-full min-w-full -translate-x-1/2 -translate-y-1/2 scale-y-[-1] object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-bg to-transparent" />
      </div>

      <div className="relative z-10">
        <div className="overflow-hidden py-6">
          <div ref={marqueeRef} className="flex w-max whitespace-nowrap">
            <span className="font-display text-5xl italic text-text-primary/70 md:text-7xl lg:text-8xl">
              {MARQUEE}
            </span>
            <span className="font-display text-5xl italic text-text-primary/70 md:text-7xl lg:text-8xl" aria-hidden>
              {MARQUEE}
            </span>
          </div>
        </div>

        <div className="mx-auto max-w-[1200px] px-6 py-16 text-center md:px-10 md:py-24 lg:px-16">
          <p className="mb-6 text-xs uppercase tracking-[0.3em] text-muted">
            Get in touch
          </p>
          <h2 className="mb-10 text-4xl leading-tight tracking-tight text-text-primary md:text-6xl">
            Have a dataset that needs{" "}
            <span className="font-display italic">answers?</span>
          </h2>

          <a
            href={`mailto:${site.email}`}
            className="group relative inline-block rounded-full text-sm transition-transform duration-300 hover:scale-105"
          >
            <span
              className="accent-gradient absolute rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              style={{ inset: "-2px" }}
            />
            <span className="relative block rounded-full bg-text-primary px-8 py-4 text-bg transition-colors duration-300 group-hover:bg-bg group-hover:text-text-primary">
              {site.email} ↗
            </span>
          </a>
        </div>

        <div className="mx-auto flex max-w-[1200px] flex-col items-center gap-6 border-t border-stroke px-6 pt-8 md:flex-row md:justify-between md:px-10 lg:px-16">
          <div className="flex flex-wrap items-center justify-center gap-6">
            {site.socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target={social.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="text-sm text-muted transition-colors duration-200 hover:text-text-primary"
              >
                {social.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2.5">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
            </span>
            <span className="text-sm text-muted">Available for projects</span>
          </div>
        </div>

        <p className="mt-8 text-center text-xs text-muted">
          © {new Date().getFullYear()} {site.name}
        </p>
      </div>
    </footer>
  );
}
