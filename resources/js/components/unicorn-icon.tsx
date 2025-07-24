import React from 'react';

interface UnicornIconProps {
    className?: string;
    size?: 'sm' | 'md' | 'lg' | 'xl';
}

export function UnicornIcon({ className = '', size = 'md' }: UnicornIconProps) {
    const sizeClasses = {
        sm: 'w-6 h-6',
        md: 'w-8 h-8',
        lg: 'w-12 h-12',
        xl: 'w-16 h-16'
    };

    return (
        <svg 
            className={`${sizeClasses[size]} ${className}`} 
            viewBox="0 0 100 100" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
        >
            {/* Unicorn horn */}
            <path 
                d="M50 15 L55 35 L45 35 Z" 
                fill="url(#hornGradient)" 
                stroke="#E879F9" 
                strokeWidth="1"
            />
            
            {/* Horn spiral */}
            <path 
                d="M48 20 Q52 25 48 30 Q52 35 48 35" 
                stroke="#F3E8FF" 
                strokeWidth="1.5" 
                fill="none"
            />
            
            {/* Head */}
            <ellipse 
                cx="50" 
                cy="50" 
                rx="20" 
                ry="18" 
                fill="url(#unicornGradient)"
                stroke="#E879F9" 
                strokeWidth="1"
            />
            
            {/* Ears */}
            <ellipse cx="42" cy="38" rx="3" ry="6" fill="#F8FAFC" stroke="#E879F9" strokeWidth="1" transform="rotate(-20 42 38)" />
            <ellipse cx="58" cy="38" rx="3" ry="6" fill="#F8FAFC" stroke="#E879F9" strokeWidth="1" transform="rotate(20 58 38)" />
            
            {/* Eyes */}
            <circle cx="45" cy="48" r="3" fill="#1E293B" />
            <circle cx="55" cy="48" r="3" fill="#1E293B" />
            <circle cx="46" cy="47" r="1" fill="#F8FAFC" />
            <circle cx="56" cy="47" r="1" fill="#F8FAFC" />
            
            {/* Eyelashes */}
            <path d="M42 45 L40 43" stroke="#E879F9" strokeWidth="1" strokeLinecap="round" />
            <path d="M43 44 L41 41" stroke="#E879F9" strokeWidth="1" strokeLinecap="round" />
            <path d="M58 45 L60 43" stroke="#E879F9" strokeWidth="1" strokeLinecap="round" />
            <path d="M57 44 L59 41" stroke="#E879F9" strokeWidth="1" strokeLinecap="round" />
            
            {/* Nose */}
            <ellipse cx="50" cy="55" rx="2" ry="1.5" fill="#F472B6" />
            
            {/* Mouth */}
            <path d="M48 58 Q50 60 52 58" stroke="#E879F9" strokeWidth="1.5" fill="none" strokeLinecap="round" />
            
            {/* Mane */}
            <path 
                d="M35 45 Q25 35 30 25 Q40 30 35 40 Q30 45 35 50 Q25 55 30 65 Q40 60 35 55" 
                fill="url(#maneGradient)" 
                stroke="#E879F9" 
                strokeWidth="1"
            />
            <path 
                d="M65 45 Q75 35 70 25 Q60 30 65 40 Q70 45 65 50 Q75 55 70 65 Q60 60 65 55" 
                fill="url(#maneGradient2)" 
                stroke="#E879F9" 
                strokeWidth="1"
            />
            
            {/* Stars decoration */}
            <g fill="#FDE68A" stroke="#F59E0B" strokeWidth="0.5">
                <path d="M25 25 L26 27 L28 27 L26.5 28.5 L27 30.5 L25 29 L23 30.5 L23.5 28.5 L22 27 L24 27 Z" />
                <path d="M75 20 L76 22 L78 22 L76.5 23.5 L77 25.5 L75 24 L73 25.5 L73.5 23.5 L72 22 L74 22 Z" />
                <path d="M20 60 L21 62 L23 62 L21.5 63.5 L22 65.5 L20 64 L18 65.5 L18.5 63.5 L17 62 L19 62 Z" />
            </g>
            
            {/* Gradients */}
            <defs>
                <linearGradient id="hornGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#FDE68A" />
                    <stop offset="50%" stopColor="#F59E0B" />
                    <stop offset="100%" stopColor="#D97706" />
                </linearGradient>
                
                <linearGradient id="unicornGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#FECACA" />
                    <stop offset="50%" stopColor="#FCA5A5" />
                    <stop offset="100%" stopColor="#F87171" />
                </linearGradient>
                
                <linearGradient id="maneGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#DDD6FE" />
                    <stop offset="33%" stopColor="#C4B5FD" />
                    <stop offset="66%" stopColor="#A78BFA" />
                    <stop offset="100%" stopColor="#8B5CF6" />
                </linearGradient>
                
                <linearGradient id="maneGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#FBCFE8" />
                    <stop offset="33%" stopColor="#F9A8D4" />
                    <stop offset="66%" stopColor="#F472B6" />
                    <stop offset="100%" stopColor="#EC4899" />
                </linearGradient>
            </defs>
        </svg>
    );
}

export function MiniUnicornIcon({ className = '' }: { className?: string }) {
    return (
        <svg 
            className={`w-4 h-4 ${className}`} 
            viewBox="0 0 50 50" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
        >
            {/* Simple unicorn head */}
            <path d="M25 10 L27 20 L23 20 Z" fill="#FDE68A" stroke="#F59E0B" strokeWidth="0.5" />
            <circle cx="25" cy="25" r="10" fill="#FECACA" stroke="#E879F9" strokeWidth="0.5" />
            <circle cx="22" cy="23" r="1.5" fill="#1E293B" />
            <circle cx="28" cy="23" r="1.5" fill="#1E293B" />
            <ellipse cx="25" cy="27" rx="1" ry="0.5" fill="#F472B6" />
            <path d="M23 29 Q25 30 27 29" stroke="#E879F9" strokeWidth="0.5" fill="none" />
        </svg>
    );
}