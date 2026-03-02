import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Battery, BatteryCharging, Clock, MapPin, Globe } from 'lucide-react';

const InfoCard: React.FC = () => {
    const [time, setTime] = useState<Date>(new Date());
    const [batteryLevel, setBatteryLevel] = useState<number | null>(null);
    const [isCharging, setIsCharging] = useState<boolean>(false);
    const [userLocation, setUserLocation] = useState<string>('Detecting...');

    useEffect(() => {
        const timer = setInterval(() => setTime(new Date()), 1000);

        if ('getBattery' in navigator) {
            (navigator as any).getBattery().then((battery: any) => {
                setBatteryLevel(battery.level * 100);
                setIsCharging(battery.charging);
                battery.addEventListener('levelchange', () => setBatteryLevel(battery.level * 100));
                battery.addEventListener('chargingchange', () => setIsCharging(battery.charging));
            });
        }

        if ('geolocation' in navigator) {
            navigator.geolocation.getCurrentPosition(
                async (position) => {
                    try {
                        const { latitude, longitude } = position.coords;
                        const res = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`);
                        const data = await res.json();
                        const city = data.address.city || data.address.town || data.address.village || 'Unknown City';
                        const country = data.address.country_code?.toUpperCase() || '';
                        setUserLocation(`${city}, ${country}`);
                    } catch {
                        setUserLocation('Loc. Access Granted');
                    }
                },
                () => setUserLocation('Loc. Undisclosed')
            );
        } else {
            setUserLocation('Not Supported');
        }

        return () => clearInterval(timer);
    }, []);

    const formatTime = (date: Date, timeZone?: string) =>
        date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', timeZone, hour12: false });

    const userTime = formatTime(time);
    const tunisTime = formatTime(time, 'Africa/Tunis');

    return (
        <motion.div
            initial={{ opacity: 0, x: 30, y: 10 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.9, delay: 0.7, ease: "easeOut" }}
            className="fixed top-24 right-4 md:right-8 z-50 pointer-events-none"
        >
            <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="pointer-events-auto group"
            >
                <div className="
                    relative overflow-hidden
                    bg-white/[0.03] backdrop-blur-xl
                    border border-white/10
                    rounded-2xl
                    p-4 md:p-5
                    flex flex-col gap-3.5
                    shadow-[0_8px_32px_rgba(0,0,0,0.5),0_0_1px_rgba(255,255,255,0.08)]
                    transition-all duration-500
                    hover:bg-white/[0.06]
                    hover:border-tech-purple/30
                    hover:shadow-[0_8px_32px_rgba(0,0,0,0.6),0_0_25px_rgba(123,92,255,0.15)]
                    min-w-[210px]
                ">
                    {/* Corner accent */}
                    <div className="absolute top-0 right-0 w-12 h-12 rounded-bl-2xl rounded-tr-2xl overflow-hidden pointer-events-none">
                        <div className="absolute inset-0 bg-gradient-to-bl from-tech-purple/20 to-transparent" />
                    </div>

                    {/* === Visitor Section === */}
                    <div className="relative z-10 flex flex-col gap-2.5">
                        <div className="flex items-center gap-1.5 mb-0.5">
                            <div className="w-1.5 h-1.5 rounded-full bg-tech-purple animate-pulse" />
                            <span className="text-[9px] uppercase tracking-[0.2em] text-white/35 font-semibold">User Context</span>
                        </div>

                        <InfoRow
                            icon={<Clock className="w-3.5 h-3.5 text-tech-purple" />}
                            label="Your Time"
                            value={userTime}
                        />

                        <InfoRow
                            icon={<MapPin className="w-3.5 h-3.5 text-tech-purple" />}
                            label="Location"
                            value={userLocation}
                            truncate
                        />

                        <InfoRow
                            icon={
                                isCharging
                                    ? <BatteryCharging className="w-3.5 h-3.5 text-green-400" />
                                    : <Battery className={`w-3.5 h-3.5 ${batteryLevel !== null && batteryLevel < 20 ? 'text-red-400 animate-pulse' : 'text-tech-purple'}`} />
                            }
                            label="Battery"
                            value={batteryLevel !== null ? `${Math.round(batteryLevel)}%` : '---'}
                        />
                    </div>

                    <div className="relative z-10 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

                    {/* === HQ Section === */}
                    <div className="relative z-10 flex flex-col gap-2.5">
                        <div className="flex items-center gap-1.5 mb-0.5">
                            <div className="w-1.5 h-1.5 rounded-full bg-electric-cyan animate-pulse" />
                            <span className="text-[9px] uppercase tracking-[0.2em] text-white/35 font-semibold">System Node</span>
                        </div>

                        <InfoRow
                            icon={<Globe className="w-3.5 h-3.5 text-electric-cyan" />}
                            label="Tunis HQ"
                            value={tunisTime}
                            valueColor="text-tech-purple"
                        />
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
};

interface InfoRowProps {
    icon: React.ReactNode;
    label: string;
    value: string;
    truncate?: boolean;
    valueColor?: string;
}

const InfoRow: React.FC<InfoRowProps> = ({ icon, label, value, truncate, valueColor = 'text-white/80' }) => (
    <div className="flex items-center justify-between gap-6 text-white/60 group/row hover:text-white/90 transition-colors duration-200 cursor-default">
        <div className="flex items-center gap-2">
            <span className="transition-transform duration-200 group-hover/row:scale-110 flex-shrink-0">
                {icon}
            </span>
            <span className="text-[11px] font-medium text-white/55 group-hover/row:text-white/80 transition-colors duration-200">{label}</span>
        </div>
        <span className={`font-mono text-[11px] font-medium ${valueColor} ${truncate ? 'max-w-[100px] truncate text-right' : ''}`}>
            {value}
        </span>
    </div>
);

export default InfoCard;
