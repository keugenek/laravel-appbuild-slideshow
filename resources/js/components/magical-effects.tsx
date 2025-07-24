import React from 'react';

export function MagicalSparkles({ children, className = '' }: { children: React.ReactNode; className?: string }) {
    return (
        <div className={`relative ${className}`}>
            {children}
            <div className="absolute -inset-2 pointer-events-none">
                <div className="absolute top-0 left-0 w-1 h-1 bg-yellow-300 rounded-full animate-ping" style={{ animationDelay: '0s' }}></div>
                <div className="absolute top-2 right-0 w-1 h-1 bg-pink-300 rounded-full animate-ping" style={{ animationDelay: '0.5s' }}></div>
                <div className="absolute bottom-0 left-2 w-1 h-1 bg-purple-300 rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
                <div className="absolute bottom-2 right-2 w-1 h-1 bg-blue-300 rounded-full animate-ping" style={{ animationDelay: '1.5s' }}></div>
            </div>
        </div>
    );
}

export function GlowingBorder({ children, className = '', glowColor = 'pink' }: { 
    children: React.ReactNode; 
    className?: string; 
    glowColor?: 'pink' | 'purple' | 'blue' | 'green' | 'yellow';
}) {
    const glowClasses = {
        pink: 'shadow-lg shadow-pink-200/50 hover:shadow-pink-300/70',
        purple: 'shadow-lg shadow-purple-200/50 hover:shadow-purple-300/70',
        blue: 'shadow-lg shadow-blue-200/50 hover:shadow-blue-300/70',
        green: 'shadow-lg shadow-green-200/50 hover:shadow-green-300/70',
        yellow: 'shadow-lg shadow-yellow-200/50 hover:shadow-yellow-300/70',
    };

    return (
        <div className={`transition-all duration-300 ${glowClasses[glowColor]} ${className}`}>
            {children}
        </div>
    );
}

export function FloatingHearts() {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-1/4 left-1/6 opacity-20 animate-bounce" style={{ animationDelay: '0s', animationDuration: '3s' }}>
                <Heart className="text-pink-400" />
            </div>
            <div className="absolute top-1/2 right-1/6 opacity-20 animate-bounce" style={{ animationDelay: '1s', animationDuration: '3s' }}>
                <Heart className="text-rose-400" />
            </div>
            <div className="absolute bottom-1/3 left-1/3 opacity-20 animate-bounce" style={{ animationDelay: '2s', animationDuration: '3s' }}>
                <Heart className="text-purple-400" />
            </div>
            <div className="absolute top-3/4 right-1/3 opacity-20 animate-bounce" style={{ animationDelay: '0.5s', animationDuration: '3s' }}>
                <Heart className="text-pink-300" />
            </div>
        </div>
    );
}

function Heart({ className }: { className?: string }) {
    return (
        <svg className={`w-4 h-4 ${className}`} viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
        </svg>
    );
}