import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Battery, BatteryCharging, Clock, MapPin } from 'lucide-react';

const FloatingWidget: React.FC = () => {
    const [time, setTime] = useState<Date>(new Date());
    const [batteryLevel, setBatteryLevel] = useState<number | null>(null);
    const [isCharging, setIsCharging] = useState<boolean>(false);

    useEffect(() => {
        // Clock interval
        const timer = setInterval(() => setTime(new Date()), 1000);

        // Battery API (experimental, works in Chrome/Edge)
        if ('getBattery' in navigator) {
            (navigator as any).getBattery().then((battery: any) => {
                setBatteryLevel(battery.level * 100);
                setIsCharging(battery.charging);

                battery.addEventListener('levelchange', () => {
                    setBatteryLevel(battery.level * 100);
                });
                battery.addEventListener('chargingchange', () => {
                    setIsCharging(battery.charging);
                });
            });
        } else {
            // Fallback if not supported
            setBatteryLevel(100);
            setIsCharging(true);
        }

        return () => clearInterval(timer);
    }, []);

    const formatTime = (date: Date, timeZone?: string) => {
        return date.toLocaleTimeString('en-US', {
            hour: '2-digit',
            minute: '2-digit',
            timeZone: timeZone,
            hour12: false
        });
    };

    // Assuming the engineer is based in Silicon Valley (PST) for the aesthetic
    const localTime = formatTime(time);
    const svTime = formatTime(time, 'America/Los_Angeles');

    return (
        <motion.div
            initial={{ opacity: 0, y: -20, x: 20 }}
            animate={{ opacity: 1, y: 0, x: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="fixed top-6 right-6 z-50 hidden md:flex flex-col items-end gap-2 group"
        >
            <div className="glass-panel backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-3 flex flex-col gap-3 shadow-[0_4px_20px_rgba(0,0,0,0.3)] transition-all duration-300 group-hover:bg-white/10 group-hover:border-white/20">

                {/* Location */}
                <div className="flex items-center gap-2 text-white/70 group-hover:text-white transition-colors">
                    <MapPin className="w-4 h-4 text-electric-blue group-hover:scale-110 transition-transform" />
                    <span className="text-xs font-medium tracking-wide">Silicon Valley, CA</span>
                </div>

                {/* Times */}
                <div className="flex flex-col gap-2">
                    <div className="flex items-center justify-between gap-4 text-white/60">
                        <span className="text-[10px] uppercase tracking-wider">Local</span>
                        <div className="flex items-center gap-1.5 font-mono text-xs text-white/90">
                            <Clock className="w-3 h-3 text-white/60" />
                            {localTime}
                        </div>
                    </div>
                    <div className="flex items-center justify-between gap-4 text-white/60">
                        <span className="text-[10px] uppercase tracking-wider">System (PT)</span>
                        <div className="flex items-center gap-1.5 font-mono text-xs text-white/90 text-electric-blue">
                            <Clock className="w-3 h-3 text-electric-blue" />
                            {svTime}
                        </div>
                    </div>
                </div>

                {/* Battery */}
                <div className="flex items-center justify-between gap-4 pt-2 border-t border-white/10 text-white/60">
                    <span className="text-[10px] uppercase tracking-wider">System</span>
                    <div className="flex items-center gap-1.5 font-mono text-xs text-white/90">
                        {isCharging ? (
                            <BatteryCharging className="w-3.5 h-3.5 text-electric-blue" />
                        ) : (
                            <Battery className="w-3.5 h-3.5 text-muted-violet" />
                        )}
                        {batteryLevel !== null ? `${Math.round(batteryLevel)}%` : '---'}
                    </div>
                </div>

            </div>

            {/* Ambient subtle glow behind the widget */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-electric-blue/5 blur-2xl rounded-full z-[-1] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
        </motion.div>
    );
};

export default FloatingWidget;
