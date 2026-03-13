// CLEAN, SELF-CONTAINED LOGO LOOP
// No example usage. No self-imports. No shadcn needed.
// Exports default LogoLoop.

import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  memo,
} from "react";

const ANIMATION_CONFIG = {
  SMOOTH_TAU: 0.25,
  MIN_COPIES: 2,
  COPY_HEADROOM: 2,
};

const toCssLength = (value) =>
  typeof value === "number" ? `${value}px` : value ?? undefined;

const cx = (...parts) => parts.filter(Boolean).join(" ");

const useResizeObserver = (callback, elements, dependencies) => {
  useEffect(() => {
    if (!window.ResizeObserver) {
      const handleResize = () => callback();
      window.addEventListener("resize", handleResize);
      callback();
      return () => window.removeEventListener("resize", handleResize);
    }

    const observers = elements.map((ref) => {
      if (!ref.current) return null;
      const observer = new ResizeObserver(callback);
      observer.observe(ref.current);
      return observer;
    });

    callback();
    return () => observers.forEach((o) => o?.disconnect());
  }, [callback, elements, dependencies]);
};

const useImageLoader = (seqRef, onLoad, dependencies) => {
  useEffect(() => {
    const images = seqRef.current?.querySelectorAll("img") ?? [];

    if (images.length === 0) {
      onLoad();
      return;
    }

    let remaining = images.length;
    const handle = () => {
      remaining -= 1;
      if (remaining === 0) onLoad();
    };

    images.forEach((img) => {
      if (img.complete) {
        handle();
      } else {
        img.addEventListener("load", handle, { once: true });
        img.addEventListener("error", handle, { once: true });
      }
    });

    return () =>
      images.forEach((img) => {
        img.removeEventListener("load", handle);
        img.removeEventListener("error", handle);
      });
  }, [onLoad, seqRef, dependencies]);
};

const useAnimationLoop = (
  trackRef,
  targetVelocity,
  seqWidth,
  seqHeight,
  isHovered,
  hoverSpeed,
  isVertical
) => {
  const rafRef = useRef(null);
  const lastTimestampRef = useRef(null);
  const offsetRef = useRef(0);
  const velocityRef = useRef(0);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const seqSize = isVertical ? seqHeight : seqWidth;

    if (seqSize > 0) {
      offsetRef.current = ((offsetRef.current % seqSize) + seqSize) % seqSize;
      const transformValue = isVertical
        ? `translate3d(0, ${-offsetRef.current}px, 0)`
        : `translate3d(${-offsetRef.current}px, 0, 0)`;
      track.style.transform = transformValue;
    }

    if (prefersReduced) {
      track.style.transform = "translate3d(0,0,0)";
      return () => {
        lastTimestampRef.current = null;
      };
    }

    const animate = (timestamp) => {
      if (lastTimestampRef.current === null) {
        lastTimestampRef.current = timestamp;
      }

      const dt = Math.max(0, timestamp - lastTimestampRef.current) / 1000;
      lastTimestampRef.current = timestamp;

      const target = isHovered && hoverSpeed !== undefined ? hoverSpeed : targetVelocity;

      const easing = 1 - Math.exp(-dt / ANIMATION_CONFIG.SMOOTH_TAU);
      velocityRef.current += (target - velocityRef.current) * easing;

      if (seqSize > 0) {
        let next = offsetRef.current + velocityRef.current * dt;
        next = ((next % seqSize) + seqSize) % seqSize;
        offsetRef.current = next;

        const transformValue = isVertical
          ? `translate3d(0, ${-offsetRef.current}px, 0)`
          : `translate3d(${-offsetRef.current}px, 0, 0)`;
        track.style.transform = transformValue;
      }

      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);

    return () => {
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
      lastTimestampRef.current = null;
    };
  }, [
    targetVelocity,
    seqWidth,
    seqHeight,
    isHovered,
    hoverSpeed,
    isVertical,
    trackRef,
  ]);
};

const LogoLoopCore = memo(
  ({
    logos,
    speed = 120,
    direction = "left",
    width = "100%",
    logoHeight = 28,
    gap = 32,
    pauseOnHover,
    hoverSpeed,
    fadeOut = false,
    fadeOutColor,
    scaleOnHover = false,
    renderItem,
    ariaLabel = "Logo loop",
    className,
    style,
  }) => {
    const containerRef = useRef(null);
    const trackRef = useRef(null);
    const seqRef = useRef(null);

    const [seqWidth, setSeqWidth] = useState(0);
    const [seqHeight, setSeqHeight] = useState(0);
    const [copyCount, setCopyCount] = useState(ANIMATION_CONFIG.MIN_COPIES);
    const [isHovered, setIsHovered] = useState(false);

    const effectiveHoverSpeed = useMemo(() => {
      if (hoverSpeed !== undefined) return hoverSpeed;
      if (pauseOnHover === true) return 0;
      if (pauseOnHover === false) return undefined;
      return 0;
    }, [hoverSpeed, pauseOnHover]);

    const isVertical = direction === "up" || direction === "down";

    const targetVelocity = useMemo(() => {
      const magnitude = Math.abs(speed);
      const directionMultiplier = isVertical
        ? direction === "up"
          ? 1
          : -1
        : direction === "left"
        ? 1
        : -1;

      return magnitude * directionMultiplier;
    }, [speed, direction, isVertical]);

    const updateDimensions = useCallback(() => {
      const containerWidth = containerRef.current?.clientWidth ?? 0;
      const rect = seqRef.current?.getBoundingClientRect?.();
      const w = rect?.width ?? 0;
      const h = rect?.height ?? 0;

      if (isVertical) {
        const parentHeight =
          containerRef.current?.parentElement?.clientHeight ?? 0;

        if (containerRef.current && parentHeight > 0) {
          containerRef.current.style.height = `${parentHeight}px`;
        }

        if (h > 0) {
          setSeqHeight(Math.ceil(h));
          const viewport =
            containerRef.current?.clientHeight ?? parentHeight ?? h;
          const copiesNeeded =
            Math.ceil(viewport / h) + ANIMATION_CONFIG.COPY_HEADROOM;
          setCopyCount(Math.max(ANIMATION_CONFIG.MIN_COPIES, copiesNeeded));
        }
      } else if (w > 0) {
        setSeqWidth(Math.ceil(w));
        const copiesNeeded =
          Math.ceil(containerWidth / w) + ANIMATION_CONFIG.COPY_HEADROOM;
        setCopyCount(Math.max(ANIMATION_CONFIG.MIN_COPIES, copiesNeeded));
      }
    }, [isVertical]);

    useResizeObserver(updateDimensions, [containerRef, seqRef], [
      logos,
      gap,
      logoHeight,
      isVertical,
    ]);

    useImageLoader(seqRef, updateDimensions, [
      logos,
      gap,
      logoHeight,
      isVertical,
    ]);

    useAnimationLoop(
      trackRef,
      targetVelocity,
      seqWidth,
      seqHeight,
      isHovered,
      effectiveHoverSpeed,
      isVertical
    );

    const cssVars = useMemo(
      () => ({
        "--logoloop-gap": `${gap}px`,
        "--logoloop-logoHeight": `${logoHeight}px`,
        ...(fadeOutColor && { "--logoloop-fadeColor": fadeOutColor }),
      }),
      [gap, logoHeight, fadeOutColor]
    );

    const rootClasses = cx(
      "relative group",
      isVertical ? "overflow-hidden h-full inline-block" : "overflow-x-hidden",
      scaleOnHover && "py-[calc(var(--logoloop-logoHeight)*0.1)]",
      className
    );

    const handleMouseEnter = () => {
      if (effectiveHoverSpeed !== undefined) setIsHovered(true);
    };
    const handleMouseLeave = () => {
      if (effectiveHoverSpeed !== undefined) setIsHovered(false);
    };

    const renderLogo = (item, key) => {
      const content =
        "node" in item ? (
          <span aria-hidden className="inline-flex items-center">
            {item.node}
          </span>
        ) : (
          <img
            src={item.src}
            alt={item.alt ?? ""}
            className="h-[var(--logoloop-logoHeight)] object-contain"
          />
        );

      return (
        <li
          key={key}
          className={cx(
            "flex-none text-[length:var(--logoloop-logoHeight)] leading-none",
            isVertical ? "mb-[var(--logoloop-gap)]" : "mr-[var(--logoloop-gap)]",
            scaleOnHover && "transition-transform duration-300 group-hover:scale-110"
          )}
        >
          {item.href ? (
            <a
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={item.title}
            >
              {content}
            </a>
          ) : (
            content
          )}
        </li>
      );
    };

    const logoLists = Array.from({ length: copyCount }, (_, idx) => (
      <ul
        key={idx}
        ref={idx === 0 ? seqRef : undefined}
        aria-hidden={idx > 0}
        className={cx(
          "flex items-center",
          isVertical && "flex-col"
        )}
      >
        {logos.map((logo, index) => renderLogo(logo, `${idx}-${index}`))}
      </ul>
    ));

    return (
      <div
        ref={containerRef}
        className={rootClasses}
        style={{ width: toCssLength(width), ...cssVars, ...style }}
        role="region"
        aria-label={ariaLabel}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div
          ref={trackRef}
          className={cx(
            "flex will-change-transform select-none",
            isVertical ? "flex-col h-max w-full" : "flex-row w-max"
          )}
        >
          {logoLists}
        </div>
      </div>
    );
  }
);

export default LogoLoopCore;
