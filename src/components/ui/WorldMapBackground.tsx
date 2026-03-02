import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import worldMapImg from '../../assets/world-map.jpg';

/* ─────────────────────────────────────────────────────────────
   Simplified continent paths mapped to a 1000×500 viewBox.
   These are stylised outlines — minimal / futuristic feel.
───────────────────────────────────────────────────────────── */
const CONTINENTS = [
    // North America
    {
        id: 'na',
        d: 'M 120,60 L 100,80 L 95,110 L 105,140 L 120,160 L 145,175 L 155,190 L 165,200 L 175,195 L 185,180 L 200,170 L 215,148 L 220,130 L 210,110 L 195,90 L 185,75 L 170,68 L 155,62 L 140,58 Z',
    },
    // South America
    {
        id: 'sa',
        d: 'M 195,210 L 185,220 L 178,240 L 175,265 L 178,290 L 165,310 L 158,330 L 162,350 L 170,355 L 182,345 L 190,325 L 198,300 L 200,275 L 205,255 L 210,240 L 208,220 Z',
    },
    // Europe
    {
        id: 'eu',
        d: 'M 455,50 L 445,65 L 450,80 L 465,85 L 480,80 L 490,70 L 510,65 L 520,72 L 530,70 L 525,58 L 510,50 L 492,45 L 472,48 Z M 505,88 L 495,98 L 500,108 L 515,110 L 520,100 L 515,90 Z',
    },
    // Africa
    {
        id: 'af',
        d: 'M 480,108 L 468,120 L 460,140 L 455,165 L 455,190 L 460,215 L 468,240 L 475,265 L 490,280 L 510,288 L 530,282 L 548,265 L 558,240 L 560,215 L 558,190 L 550,168 L 545,145 L 548,128 L 540,112 L 525,105 L 508,102 Z',
    },
    // Asia
    {
        id: 'as',
        d: 'M 545,48 L 560,55 L 590,50 L 625,45 L 665,48 L 700,55 L 730,60 L 755,70 L 770,85 L 760,100 L 740,110 L 720,108 L 700,115 L 680,120 L 665,110 L 645,105 L 620,110 L 598,120 L 580,130 L 565,125 L 550,115 L 540,100 L 538,85 L 542,70 Z',
    },
    // Southeast Asia islands
    {
        id: 'sea',
        d: 'M 730,160 L 725,170 L 735,178 L 748,174 L 752,162 L 742,157 Z M 760,155 L 755,168 L 768,172 L 775,160 L 768,152 Z',
    },
    // Australia
    {
        id: 'au',
        d: 'M 740,270 L 728,280 L 720,298 L 722,318 L 732,335 L 748,345 L 768,342 L 782,330 L 790,312 L 788,292 L 778,278 L 762,268 Z',
    },
];

// Connection arcs: [x1, y1, cx, cy, x2, y2]  — SVG cubic bezier control points
// All routes originate from Tunis (≈ 510, 107)
const CONNECTION_ARCS = [
    { id: 'tunis-ny', d: 'M 510,107 C 420,60 280,60 185,160', delay: 0 },
    { id: 'tunis-sg', d: 'M 510,107 C 600,50 700,80 752,165', delay: 1.5 },
    { id: 'tunis-eu', d: 'M 510,107 C 500,80 490,70 480,75', delay: 0.8 },
    { id: 'tunis-dxb', d: 'M 510,107 C 540,110 570,120 585,135', delay: 2.2 },
];

// Tunis SVG position
const TUNIS = { x: 510, y: 107 };

const WorldMapBackground: React.FC = () => {
    const mapRef = useRef<SVGSVGElement>(null);
    const parallaxRef = useRef<HTMLDivElement>(null);

    // Subtle parallax on mouse move
    useEffect(() => {
        const handleMouse = (e: MouseEvent) => {
            if (!parallaxRef.current) return;
            const dx = (e.clientX / window.innerWidth - 0.5) * 16;
            const dy = (e.clientY / window.innerHeight - 0.5) * 10;
            parallaxRef.current.style.transform = `translate(${dx}px, ${dy}px)`;
        };
        window.addEventListener('mousemove', handleMouse, { passive: true });
        return () => window.removeEventListener('mousemove', handleMouse);
    }, []);

    return (
        <div className="fixed inset-0 z-[1] overflow-hidden pointer-events-none bg-[#0B1120]" aria-hidden="true">
            {/* Background Image Layer */}
            <div
                className="absolute inset-0 w-full h-full scale-105"
                style={{
                    backgroundImage: `url(${worldMapImg})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    filter: 'blur(1.5px) brightness(0.6)',
                }}
            />

            {/* Dark Overlay with custom opacity */}
            <div
                className="absolute inset-0"
                style={{ backgroundColor: 'rgba(8, 12, 20, 0.70)' }}
            />

            {/* Neural grid overlay (CSS animated) */}
            <div className="absolute inset-0 opacity-[0.05] animate-pulse-slow">
                <div
                    className="absolute inset-0 w-full h-full"
                    style={{
                        backgroundImage: `radial-gradient(circle, rgba(245,158,11,0.2) 1px, transparent 1px)`,
                        backgroundSize: '40px 40px',
                    }}
                />
            </div>

            {/* Parallax wrapper */}
            <div
                ref={parallaxRef}
                className="absolute inset-[-2%] w-[104%] h-[104%] transition-transform duration-700 ease-out"
            >
                {/* Main SVG world map */}
                <svg
                    ref={mapRef}
                    viewBox="0 0 1000 500"
                    preserveAspectRatio="xMidYMid slice"
                    className="absolute inset-0 w-full h-full"
                    style={{ opacity: 0.15 }}
                >
                    <defs>
                        {/* Gradient for connection lines - Warm Amber to Gold */}
                        <linearGradient id="wm-line-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#F59E0B" stopOpacity="0" />
                            <stop offset="50%" stopColor="#FBBF24" stopOpacity="1" />
                            <stop offset="100%" stopColor="#3B82F6" stopOpacity="0" />
                        </linearGradient>

                        {/* Pulse glow filter */}
                        <filter id="wm-glow" x="-100%" y="-100%" width="300%" height="300%">
                            <feGaussianBlur stdDeviation="3" result="blur" />
                            <feMerge>
                                <feMergeNode in="blur" />
                                <feMergeNode in="SourceGraphic" />
                            </feMerge>
                        </filter>

                        {/* Continent glow filter */}
                        <filter id="wm-continent-glow" x="-20%" y="-20%" width="140%" height="140%">
                            <feGaussianBlur stdDeviation="1" result="blur" />
                            <feMerge>
                                <feMergeNode in="blur" />
                                <feMergeNode in="SourceGraphic" />
                            </feMerge>
                        </filter>
                    </defs>

                    {/* Geographic grid lines — horizontal (latitude) */}
                    {[60, 120, 180, 240, 310, 375, 440].map((y) => (
                        <line
                            key={`lat-${y}`}
                            x1="0" y1={y} x2="1000" y2={y}
                            stroke="#F59E0B" strokeWidth="0.2" strokeOpacity="0.1"
                        />
                    ))}
                    {/* Geographic grid lines — vertical (longitude) */}
                    {[80, 180, 275, 370, 460, 555, 650, 745, 840, 930].map((x) => (
                        <line
                            key={`lon-${x}`}
                            x1={x} y1="0" x2={x} y2="500"
                            stroke="#F59E0B" strokeWidth="0.2" strokeOpacity="0.1"
                        />
                    ))}

                    {/* Continent outlines */}
                    {CONTINENTS.map((c) => (
                        <path
                            key={c.id}
                            d={c.d}
                            fill="rgba(245,158,11,0.01)"
                            stroke="rgba(245,158,11,0.3)"
                            strokeWidth="0.4"
                            strokeLinejoin="round"
                            filter="url(#wm-continent-glow)"
                        />
                    ))}

                    {/* Connection arcs */}
                    {CONNECTION_ARCS.map((arc) => (
                        <g key={arc.id}>
                            {/* Static faint baseline */}
                            <path
                                d={arc.d}
                                fill="none"
                                stroke="#FBBF24"
                                strokeWidth="0.3"
                                strokeOpacity="0.1"
                                strokeDasharray="3 5"
                            />
                            {/* Animated traveling dash */}
                            <path
                                d={arc.d}
                                fill="none"
                                stroke="url(#wm-line-grad)"
                                strokeWidth="0.8"
                                strokeOpacity="0.7"
                                strokeDasharray="30 300"
                                style={{
                                    animation: `wm-dash-travel 6s linear ${arc.delay}s infinite`,
                                }}
                            />
                        </g>
                    ))}

                    {/* Tunis origin — pulsing rings - Cyan for AI accent */}
                    <circle cx={TUNIS.x} cy={TUNIS.y} r="3" fill="#22D3EE" filter="url(#wm-glow)" />
                    <circle
                        cx={TUNIS.x} cy={TUNIS.y} r="8"
                        fill="none" stroke="#22D3EE" strokeWidth="0.8"
                        style={{ animation: 'wm-continent-pulse 3s ease-out 0s infinite' }}
                    />
                    <circle
                        cx={TUNIS.x} cy={TUNIS.y} r="8"
                        fill="none" stroke="#FBBF24" strokeWidth="0.5"
                        style={{ animation: 'wm-continent-pulse 3s ease-out 1.5s infinite' }}
                    />

                    {/* Small node dots at continental hubs */}
                    {[
                        { x: 185, y: 160, label: 'SF' },    // Silicon Valley (approx)
                        { x: 752, y: 165, label: 'SG' },    // Singapore
                        { x: 480, y: 75, label: 'LDN' },   // London
                        { x: 585, y: 135, label: 'DXB' },   // Dubai
                    ].map((hub) => (
                        <g key={hub.label}>
                            <circle cx={hub.x} cy={hub.y} r="1.5" fill="#3B82F6" opacity="0.6" filter="url(#wm-glow)" />
                        </g>
                    ))}
                </svg>

                {/* Cinematic horizontal light sweep - Warm Amber tone */}
                <div
                    className="absolute inset-0"
                    style={{
                        background: 'linear-gradient(105deg, transparent 30%, rgba(245,158,11,0.02) 50%, rgba(180,83,9,0.01) 60%, transparent 75%)',
                        animation: 'wm-map-sweep 22s ease-in-out infinite',
                    }}
                />
            </div>

            {/* Deep radial vignette to push map to edges */}
            <div
                className="absolute inset-0"
                style={{
                    background: 'radial-gradient(ellipse 80% 80% at 50% 50%, transparent 20%, rgba(8,12,20,0.85) 100%)',
                }}
            />

            {/* Tunis region soft glow pulse (larger, CSS-only) */}
            <motion.div
                className="absolute rounded-full"
                style={{
                    left: '51%',
                    top: '21%',
                    width: 220,
                    height: 220,
                    marginLeft: -110,
                    marginTop: -110,
                    background: 'radial-gradient(circle, rgba(245,158,11,0.04) 0%, transparent 70%)',
                }}
                animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            />
        </div>
    );
};

export default WorldMapBackground;
