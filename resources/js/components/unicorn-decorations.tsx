import React from 'react';

export function FloatingUnicorns() {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {/* Floating mini unicorns */}
            <div className="absolute top-20 left-10 float-animation">
                <MiniFloatingUnicorn />
            </div>
            <div className="absolute top-40 right-16 float-animation" style={{ animationDelay: '1s' }}>
                <MiniFloatingUnicorn />
            </div>
            <div className="absolute bottom-32 left-20 float-animation" style={{ animationDelay: '2s' }}>
                <MiniFloatingUnicorn />
            </div>
            <div className="absolute bottom-20 right-10 float-animation" style={{ animationDelay: '0.5s' }}>
                <MiniFloatingUnicorn />
            </div>
            <div className="absolute top-1/2 left-1/4 float-animation" style={{ animationDelay: '1.5s' }}>
                <MiniFloatingUnicorn />
            </div>
            <div className="absolute top-1/3 right-1/4 float-animation" style={{ animationDelay: '2.5s' }}>
                <MiniFloatingUnicorn />
            </div>
        </div>
    );
}

function MiniFloatingUnicorn() {
    return (
        <div className="opacity-20 hover:opacity-60 transition-all duration-300 unicorn-hover">
            <svg 
                className="w-6 h-6" 
                viewBox="0 0 30 30" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
            >
                <path d="M15 5 L16.5 10 L13.5 10 Z" fill="url(#miniHornGradient)" />
                <circle cx="15" cy="15" r="6" fill="url(#miniUnicornGradient)" />
                <circle cx="13" cy="13" r="1" fill="#1E293B" />
                <circle cx="17" cy="13" r="1" fill="#1E293B" />
                <circle cx="13.5" cy="12.5" r="0.3" fill="#F8FAFC" />
                <circle cx="17.5" cy="12.5" r="0.3" fill="#F8FAFC" />
                <path d="M13 17 Q15 18 17 17" stroke="#E879F9" strokeWidth="0.5" fill="none" />
                <path d="M10 12 Q8 8 12 6" stroke="#C4B5FD" strokeWidth="1" fill="none" />
                <path d="M20 12 Q22 8 18 6" stroke="#F9A8D4" strokeWidth="1" fill="none" />
                
                <defs>
                    <linearGradient id="miniHornGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#FDE68A" />
                        <stop offset="100%" stopColor="#F59E0B" />
                    </linearGradient>
                    <linearGradient id="miniUnicornGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#FECACA" />
                        <stop offset="100%" stopColor="#F87171" />
                    </linearGradient>
                </defs>
            </svg>
        </div>
    );
}

export function UnicornStars() {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {/* Twinkling stars */}
            <div className="absolute top-16 left-1/4 twinkle-animation">
                <Star className="text-yellow-300" />
            </div>
            <div className="absolute top-32 right-1/3 twinkle-animation" style={{ animationDelay: '0.7s' }}>
                <Star className="text-pink-300" />
            </div>
            <div className="absolute bottom-40 left-1/3 twinkle-animation" style={{ animationDelay: '1.5s' }}>
                <Star className="text-purple-300" />
            </div>
            <div className="absolute bottom-24 right-1/4 twinkle-animation" style={{ animationDelay: '0.3s' }}>
                <Star className="text-blue-300" />
            </div>
            <div className="absolute top-1/2 left-12 twinkle-animation" style={{ animationDelay: '1.2s' }}>
                <Star className="text-green-300" />
            </div>
            <div className="absolute top-1/3 right-12 twinkle-animation" style={{ animationDelay: '0.9s' }}>
                <Star className="text-orange-300" />
            </div>
            <div className="absolute top-3/4 left-1/2 twinkle-animation" style={{ animationDelay: '2s' }}>
                <Star className="text-rose-300" />
            </div>
            <div className="absolute top-1/4 left-3/4 twinkle-animation" style={{ animationDelay: '1.8s' }}>
                <Star className="text-cyan-300" />
            </div>
        </div>
    );
}

function Star({ className }: { className?: string }) {
    return (
        <svg 
            className={`w-3 h-3 ${className}`} 
            viewBox="0 0 20 20" 
            fill="currentColor"
        >
            <path d="M10 2 L11.5 7 L16.5 7 L12.5 10 L14 15 L10 12 L6 15 L7.5 10 L3.5 7 L8.5 7 Z" />
        </svg>
    );
}

export function RainbowTrail() {
    return (
        <>
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-300 via-orange-300 via-yellow-300 via-green-300 via-blue-300 via-indigo-300 to-purple-300 opacity-40"></div>
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-purple-300 via-indigo-300 via-blue-300 via-green-300 via-yellow-300 via-orange-300 to-red-300 opacity-40"></div>
        </>
    );
}