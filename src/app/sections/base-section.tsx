"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "motion/react";
import { Carousel, Card } from "../components/ui/apple-cards-carousel";
import ProjectBadge from "../components/ProjectBadge";
import Button from "../components/Button";

const galleryData = [
  {
    category: "CHRONOTOMI / HAUTE HORLOGERIE",
    title: "Precision Timepiece Showcase & Dial Inspection",
    src: "/assets/portfolio/chronotomi_collection.png",
    link: "http://www.chronotomi.com/",
    projectName: "Chronotomi",
    content: (
      <div className="space-y-6 text-white/90 leading-relaxed">
        <p className="text-lg md:text-xl font-normal text-white/90 [font-family:'Satoshi',_sans-serif]">
          Crafted for high-end timepiece collectors, Chronotomi combines macro horological photography with kinetic typography and precision micro-animations.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
          <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
            <span className="text-[#D4AF37] [font-family:'Satoshi',_sans-serif] text-xs font-bold uppercase tracking-wider block mb-2">
              01 / Horological Mastery
            </span>
            <p className="text-sm text-white/80 [font-family:'Satoshi',_sans-serif]">
              Curated showcases for Submariner Date, Patek Philippe Nautilus, and Audemars Piguet Royal Oak.
            </p>
          </div>
          <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
            <span className="text-[#D4AF37] [font-family:'Satoshi',_sans-serif] text-xs font-bold uppercase tracking-wider block mb-2">
              02 / Kinetic Movement
            </span>
            <p className="text-sm text-white/80 [font-family:'Satoshi',_sans-serif]">
              Dynamic scroll choreography and spring physics that mimic the mechanical escapement of fine timepieces.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap gap-4 pt-4">
          <Button href="http://www.chronotomi.com/" variant="gold">
            Visit Live Site (Chronotomi)
          </Button>
        </div>
      </div>
    ),
  },
  {
    category: "LUMINA LIVING / SPATIAL ARCHITECTURE",
    title: "Curated Interior Identity & Signature Living",
    src: "/assets/portfolio/lumina_signature_living.png",
    link: "http://www.lumina-living.net/",
    projectName: "Lumina Living",
    content: (
      <div className="space-y-6 text-white/90 leading-relaxed">
        <p className="text-lg md:text-xl font-normal text-white/90 [font-family:'Satoshi',_sans-serif]">
          Lumina Living redefines modern architectural estate platforms through seamless spatial storytelling, immersive editorial layouts, and high-fidelity media viewers.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
          <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
            <span className="text-[#D4AF37] [font-family:'Satoshi',_sans-serif] text-xs font-bold uppercase tracking-wider block mb-2">
              01 / Materiality & Light
            </span>
            <p className="text-sm text-white/80 [font-family:'Satoshi',_sans-serif]">
              Editorial typography featuring Satoshi and clean modern hierarchy matched with tactile interior photography.
            </p>
          </div>
          <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
            <span className="text-[#D4AF37] [font-family:'Satoshi',_sans-serif] text-xs font-bold uppercase tracking-wider block mb-2">
              02 / Spatial Platform
            </span>
            <p className="text-sm text-white/80 [font-family:'Satoshi',_sans-serif]">
              Interactive floorplan navigation with panoramic viewpoint transitions and seamless inquiry concierge.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap gap-4 pt-4">
          <Button href="http://www.lumina-living.net/" variant="gold">
            Visit Live Site (Lumina Living)
          </Button>
        </div>
      </div>
    ),
  },
  {
    category: "QUIETIDE / WEBGL EXPERIENCE",
    title: "Contemplative Pacing & WebGL Shaders",
    src: "/assets/portfolio/quietide_capture_space.png",
    link: "https://qu4rk.github.io/quietide-website/",
    projectName: "QuieTide",
    content: (
      <div className="space-y-6 text-white/90 leading-relaxed">
        <p className="text-lg md:text-xl font-normal text-white/90 [font-family:'Satoshi',_sans-serif]">
          The QuieTide capture space was engineered to eliminate digital cognitive friction. Using real-time GLSL fragment shaders, we generated ambient water caustics that subtly shift with daylight.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
          <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
            <span className="text-[#D4AF37] [font-family:'Satoshi',_sans-serif] text-xs font-bold uppercase tracking-wider block mb-2">
              01 / Visual Architecture
            </span>
            <p className="text-sm text-white/80 [font-family:'Satoshi',_sans-serif]">
              Warm terracotta and sea-mist color palettes paired with smooth cubic-bezier micro-interactions.
            </p>
          </div>
          <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
            <span className="text-[#D4AF37] [font-family:'Satoshi',_sans-serif] text-xs font-bold uppercase tracking-wider block mb-2">
              02 / Shader Performance
            </span>
            <p className="text-sm text-white/80 [font-family:'Satoshi',_sans-serif]">
              60 FPS GPU-accelerated canvas with adaptive resolution scaling for seamless mobile responsiveness.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap gap-4 pt-4">
          <Button href="https://qu4rk.github.io/quietide-website/" variant="gold">
            Visit Live Site (QuieTide)
          </Button>
        </div>
      </div>
    ),
  },
  {
    category: "CHRONOTOMI / THE STANDARD",
    title: "The Standard of Precision & Advisory",
    src: "/assets/portfolio/chronotomi_standard.png",
    link: "http://www.chronotomi.com/",
    projectName: "Chronotomi",
    content: (
      <div className="space-y-6 text-white/90 leading-relaxed">
        <p className="text-lg md:text-xl font-normal text-white/90 [font-family:'Satoshi',_sans-serif]">
          An editorial standard for luxury watch curation, combining deep technical specifications with private client advisory and provenance verification.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
          <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
            <span className="text-[#D4AF37] [font-family:'Satoshi',_sans-serif] text-xs font-bold uppercase tracking-wider block mb-2">
              01 / Editorial Layouts
            </span>
            <p className="text-sm text-white/80 [font-family:'Satoshi',_sans-serif]">
              Harmonious contrast between high-contrast obsidian backgrounds and warm champagne typography.
            </p>
          </div>
          <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
            <span className="text-[#D4AF37] [font-family:'Satoshi',_sans-serif] text-xs font-bold uppercase tracking-wider block mb-2">
              02 / Collector Concierge
            </span>
            <p className="text-sm text-white/80 [font-family:'Satoshi',_sans-serif]">
              Private acquisition inquiries and encrypted concierge communication for rare timepieces.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap gap-4 pt-4">
          <Button href="http://www.chronotomi.com/" variant="gold">
            Visit Live Site (Chronotomi)
          </Button>
        </div>
      </div>
    ),
  },
  {
    category: "LUMINA LIVING / RESIDENTIAL SANCTUARY",
    title: "Atmospheric Lighting & Spatial Harmony",
    src: "/assets/portfolio/lumina_atmosphere.png",
    link: "http://www.lumina-living.net/",
    projectName: "Lumina Living",
    content: (
      <div className="space-y-6 text-white/90 leading-relaxed">
        <p className="text-lg md:text-xl font-normal text-white/90 [font-family:'Satoshi',_sans-serif]">
          Capturing the transition between dawn and dusk in luxury residential design, translating physical architectural volumes into the digital realm.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
          <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
            <span className="text-[#D4AF37] [font-family:'Satoshi',_sans-serif] text-xs font-bold uppercase tracking-wider block mb-2">
              01 / Panoramic Discovery
            </span>
            <p className="text-sm text-white/80 [font-family:'Satoshi',_sans-serif]">
              Full-bleed photography integrated with smooth inertia scrolling and subtle parallax depth layers.
            </p>
          </div>
          <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
            <span className="text-[#D4AF37] [font-family:'Satoshi',_sans-serif] text-xs font-bold uppercase tracking-wider block mb-2">
              02 / Architectural Purity
            </span>
            <p className="text-sm text-white/80 [font-family:'Satoshi',_sans-serif]">
              Uncluttered navigation allowing the spaces and materiality to command full attention.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap gap-4 pt-4">
          <Button href="http://www.lumina-living.net/" variant="gold">
            Visit Live Site (Lumina Living)
          </Button>
        </div>
      </div>
    ),
  },
  {
    category: "QUIETIDE / COASTAL STILLNESS",
    title: "Quiet Seas, Clear Mind Experience",
    src: "/assets/portfolio/quietide_hero.png",
    link: "https://qu4rk.github.io/quietide-website/",
    projectName: "QuieTide",
    content: (
      <div className="space-y-6 text-white/90 leading-relaxed">
        <p className="text-lg md:text-xl font-normal text-white/90 [font-family:'Satoshi',_sans-serif]">
          The flagship experience of QuieTide immerses the visitor in a meditative sunset atmosphere with dynamic particle clouds and tranquil soundscape integration.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
          <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
            <span className="text-[#D4AF37] [font-family:'Satoshi',_sans-serif] text-xs font-bold uppercase tracking-wider block mb-2">
              01 / Fluid Shaders
            </span>
            <p className="text-sm text-white/80 [font-family:'Satoshi',_sans-serif]">
              Subtle wave oscillations and horizon reflection mapping built with Three.js and custom GLSL code.
            </p>
          </div>
          <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
            <span className="text-[#D4AF37] [font-family:'Satoshi',_sans-serif] text-xs font-bold uppercase tracking-wider block mb-2">
              02 / Aesthetic Restraint
            </span>
            <p className="text-sm text-white/80 [font-family:'Satoshi',_sans-serif]">
              Generous whitespace and serene layout balance designed to induce calm and focus.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap gap-4 pt-4">
          <Button href="https://qu4rk.github.io/quietide-website/" variant="gold">
            Visit Live Site (QuieTide)
          </Button>
        </div>
      </div>
    ),
  },
];

/** Studio Snapshot Gallery & Visual Archive using Aceternity Apple Cards Carousel with 3D Scroll Depth. */
export default function BaseSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const smoothProgress = useSpring(scrollYProgress, { damping: 20, stiffness: 80 });
  const galleryScale = useTransform(smoothProgress, [0, 0.45, 0.85, 1], [0.92, 1, 1, 0.94]);
  const galleryRotateX = useTransform(smoothProgress, [0, 0.45, 0.85, 1], [10, 0, 0, -8]);
  const galleryY = useTransform(smoothProgress, [0, 0.45, 1], [40, 0, -30]);

  const cards = galleryData.map((card, index) => (
    <Card key={card.src + index} card={card} index={index} layout={true} />
  ));

  return (
    <section ref={sectionRef} className="block bg-background py-20 md:py-28 px-4 sm:px-6 max-md:py-16 overflow-hidden [perspective:1400px]" id="journal">
      <div className="flex flex-col gap-10 mx-auto w-full max-w-screen">
        {/* Header with ProjectBadge and Studio Journal Heading */}
        <div data-reveal className="flex flex-col items-center gap-4 text-center max-w-3xl mx-auto">
          <ProjectBadge label="VISUAL ARCHIVE / SNAPSHOT GALLERY & CRAFT ESSAYS" />
          
          <div className="[font-family:'Satoshi',_sans-serif] text-4xl sm:text-5xl md:text-6xl font-normal leading-tight tracking-tight text-foreground mt-2" data-component="heading">
            <p className="block">
              Snapshot Gallery
            </p>
          </div>
          <div className="[font-family:'Satoshi',_sans-serif] font-normal text-base md:text-lg text-foreground/75 leading-relaxed max-w-xl">
            <p className="block">
              An interactive visual archive of curated digital sanctuaries, spatial architectures, and kinetic flagships. Click any snapshot to inspect details.
            </p>
          </div>
        </div>

        {/* Aceternity Apple Cards Carousel in 3D Perspective */}
        <div className="w-full [perspective:1200px]">
          <motion.div
            style={{
              scale: galleryScale,
              rotateX: galleryRotateX,
              y: galleryY,
              transformOrigin: "center center",
            }}
            data-reveal
            className="w-full"
          >
            <Carousel items={cards} />
          </motion.div>
        </div>

        <div data-reveal className="flex justify-center mt-4">
          <Button href="#inquire" variant="primary-purple">
            Start a Conversation
          </Button>
        </div>
      </div>
    </section>
  );
}
