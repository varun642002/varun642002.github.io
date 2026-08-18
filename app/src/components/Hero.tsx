import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { site } from "../lib/site";
import { scrollToSection } from "./Navbar";

export default function Hero() {
  const rootRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [roleIndex, setRoleIndex] = useState(0);

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
    const id = window.setInterval(
      () => setRoleIndex((i) => (i + 1) % site.roles.length),
      2000
    );
    return () => window.clearInterval(id);
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.from(".name-reveal", { opacity: 0, y: 50, duration: 1.2, delay: 0.1 });
      tl.from(
        ".blur-in",
        {
          opacity: 0,
          filter: "blur(10px)",
          y: 20,
          duration: 1,
          stagger: 0.1,
        },
        0.3
      );
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="home"
      ref={rootRef}
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="absolute left-1/2 top-1/2 min-h-full min-w-full -translate-x-1/2 -translate-y-1/2 object-cover"
        />
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-bg to-transparent" />
      </div>

      <div className="relative z-10 flex flex-col items-center px-6 text-center">
        <div className="blur-in relative mb-8 h-24 w-24 md:h-28 md:w-28">
          <span className="accent-gradient absolute inset-0 rounded-full" />
          <img
            src={site.photo}
            alt={`Portrait of ${site.name}`}
            width={224}
            height={224}
            className="absolute inset-[2px] rounded-full object-cover"
            style={{ width: "calc(100% - 4px)", height: "calc(100% - 4px)" }}
          />
        </div>

        <span className="blur-in mb-6 text-xs uppercase tracking-[0.3em] text-muted">
          {site.eyebrow}
        </span>

        <h1 className="name-reveal mb-6 font-display text-6xl italic leading-[0.9] tracking-tight text-text-primary md:text-8xl lg:text-9xl">
          {site.name}
        </h1>

        <p className="blur-in mb-6 text-sm text-muted md:text-base" aria-live="polite">
          A{" "}
          <span
            key={roleIndex}
            className="inline-block animate-role-fade-in font-display italic text-text-primary"
          >
            {site.roles[roleIndex]}
          </span>{" "}
          who turns data into decisions.
        </p>

        <p className="blur-in mb-12 max-w-md text-sm text-muted md:text-base">
          {site.description}
        </p>

        <div className="blur-in inline-flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={() => scrollToSection("work")}
            className="group relative rounded-full text-sm transition-transform duration-300 hover:scale-105"
          >
            <span
              className="accent-gradient absolute rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              style={{ inset: "-2px" }}
            />
            <span className="relative block rounded-full bg-text-primary px-7 py-3.5 text-bg transition-colors duration-300 group-hover:bg-bg group-hover:text-text-primary">
              See Works
            </span>
          </button>

          <a
            href={`mailto:${site.email}`}
            className="group relative rounded-full text-sm transition-transform duration-300 hover:scale-105"
          >
            <span
              className="accent-gradient absolute rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              style={{ inset: "-2px" }}
            />
            <span className="relative block rounded-full border-2 border-stroke bg-bg px-7 py-3.5 text-text-primary transition-colors duration-300 group-hover:border-transparent">
              Reach out...
            </span>
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-3">
        <span className="text-xs uppercase tracking-[0.2em] text-muted">Scroll</span>
        <span className="relative block h-10 w-px overflow-hidden bg-stroke">
          <span className="accent-gradient absolute inset-x-0 h-4 animate-scroll-down" />
        </span>
      </div>
    </section>
  );
}
