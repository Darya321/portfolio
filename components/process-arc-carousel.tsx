"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { withBasePath } from "@/lib/base-path";

type ProcessArcSlot = {
  id: string;
  image: string;
};

type ProcessArcCarouselProps = {
  slots: ProcessArcSlot[];
};

const VISIBLE_CARD_COUNT = 10;

export function ProcessArcCarousel({ slots }: ProcessArcCarouselProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const cardRefs = useRef<Array<HTMLDivElement | null>>([]);
  const sizeRef = useRef({ width: 0, height: 0 });

  useEffect(() => {
    const container = containerRef.current;

    if (!container) {
      return;
    }

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const updateSize = () => {
      const rect = container.getBoundingClientRect();
      sizeRef.current = {
        width: rect.width,
        height: rect.height
      };
    };

    updateSize();

    const resizeObserver = new ResizeObserver(updateSize);
    resizeObserver.observe(container);

    let frameId = 0;

    const renderArc = (time = 0) => {
      updateSize();

      const { width, height } = sizeRef.current;
      const cards = cardRefs.current;

      if (!width || !height) {
        if (!reduceMotion) {
          frameId = window.requestAnimationFrame(renderArc);
        }

        return;
      }

      const progress = reduceMotion ? 0 : (time / 66000) % 1;
      const radiusX = Math.min(Math.max(width * 0.72, 360), 1040);
      const radiusY = Math.min(Math.max(width * 0.58, 360), 700);
      const centerY = height * 0.8;
      const startAngle = 150;
      const endAngle = 30;
      const samples = Array.from({ length: 96 }, (_, sampleIndex) => {
        const sampleProgress = sampleIndex / 95;
        const angle = startAngle + (endAngle - startAngle) * sampleProgress;
        const radians = (angle * Math.PI) / 180;

        return {
          angle,
          distance: 0,
          x: Math.cos(radians) * radiusX,
          y: centerY - Math.sin(radians) * radiusY - height * 0.5
        };
      });

      let totalDistance = 0;

      for (let sampleIndex = 1; sampleIndex < samples.length; sampleIndex += 1) {
        const previous = samples[sampleIndex - 1];
        const current = samples[sampleIndex];

        totalDistance += Math.hypot(current.x - previous.x, current.y - previous.y);
        current.distance = totalDistance;
      }

      cards.forEach((card, index) => {
        if (!card) {
          return;
        }

        const pathProgress = (index / cards.length + progress) % 1;
        const targetDistance = pathProgress * totalDistance;
        const foundSegmentIndex = samples.findIndex((sample) => sample.distance >= targetDistance);
        const segmentIndex = foundSegmentIndex === -1 ? samples.length - 1 : Math.max(1, foundSegmentIndex);
        const previous = samples[segmentIndex - 1];
        const current = samples[segmentIndex];
        const segmentLength = current.distance - previous.distance || 1;
        const segmentProgress = (targetDistance - previous.distance) / segmentLength;
        const x = previous.x + (current.x - previous.x) * segmentProgress;
        const y = previous.y + (current.y - previous.y) * segmentProgress;
        const angle = previous.angle + (current.angle - previous.angle) * segmentProgress;
        const rotation = (90 - angle) * 0.4;
        card.style.opacity = "1";
        card.style.transform = `translate(-50%, -50%) translate3d(${x}px, ${y}px, 0) rotate(${rotation}deg)`;
      });

      if (!reduceMotion) {
        frameId = window.requestAnimationFrame(renderArc);
      }
    };

    renderArc();

    if (!reduceMotion) {
      frameId = window.requestAnimationFrame(renderArc);
    }

    return () => {
      window.cancelAnimationFrame(frameId);
      resizeObserver.disconnect();
    };
  }, []);

  const visibleSlots = slots.slice(0, VISIBLE_CARD_COUNT);

  return (
    <div ref={containerRef} className="absolute inset-0 z-10 overflow-visible" aria-hidden="true">
      {visibleSlots.map((slot, index) => (
        <div
          key={slot.id}
          ref={(node) => {
            cardRefs.current[index] = node;
          }}
          className="process-arc-live-card absolute left-1/2 top-1/2 h-[86px] w-[86px] overflow-hidden rounded-[14px] border border-white/28 bg-[linear-gradient(135deg,rgba(255,255,255,0.96),rgba(255,255,255,0.14))] shadow-[0_18px_45px_rgba(0,0,0,0.2)] sm:h-[112px] sm:w-[112px] sm:rounded-[16px]"
        >
          <Image
            src={withBasePath(slot.image)}
            alt=""
            fill
            sizes="120px"
            unoptimized={slot.image.endsWith(".svg")}
            className={slot.image.endsWith(".svg") ? "bg-paper object-contain p-2" : "object-cover"}
          />
        </div>
      ))}
    </div>
  );
}
