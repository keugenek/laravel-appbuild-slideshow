import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { router } from '@inertiajs/react';
import { ChevronLeft, ChevronRight, Code, CheckCircle, Eye } from 'lucide-react';
import { UnicornIcon, MiniUnicornIcon } from '@/components/unicorn-icon';
import { FloatingUnicorns, UnicornStars, RainbowTrail } from '@/components/unicorn-decorations';
import { MagicalSparkles, GlowingBorder, FloatingHearts } from '@/components/magical-effects';

interface Props {
    viewCount: number;
    [key: string]: unknown;
}

interface Slide {
    id: number;
    title: string;
    content: React.ReactNode;
}

export default function Presentation({ viewCount }: Props) {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [hasViewedFinalSlide, setHasViewedFinalSlide] = useState(false);

    const slides: Slide[] = [
        {
            id: 1,
            title: "Laravel app.build Agent Features",
            content: (
                <div className="text-center space-y-8 relative">
                    <MagicalSparkles>
                        <GlowingBorder glowColor="pink">
                            <div className="mx-auto w-32 h-32 bg-gradient-to-br from-pink-200 via-purple-200 to-indigo-200 rounded-full flex items-center justify-center shadow-lg border-4 border-white unicorn-hover">
                                <UnicornIcon size="xl" />
                            </div>
                        </GlowingBorder>
                    </MagicalSparkles>
                    <div className="space-y-6">
                        <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
                            Discover the powerful features that make Laravel development faster, more reliable, and ✨ magical ✨.
                        </p>
                        <div className="flex justify-center items-center space-x-8 text-sm bg-gradient-to-r from-pink-50 to-purple-50 dark:from-pink-900/20 dark:to-purple-900/20 p-4 rounded-xl border border-pink-200 dark:border-pink-800">
                            <div className="flex items-center space-x-2 text-pink-600 dark:text-pink-400">
                                <MiniUnicornIcon />
                                <span>Code Generation</span>
                            </div>
                            <div className="flex items-center space-x-2 text-purple-600 dark:text-purple-400">
                                <MiniUnicornIcon />
                                <span>Quality Assurance</span>
                            </div>
                            <div className="flex items-center space-x-2 text-indigo-600 dark:text-indigo-400">
                                <MiniUnicornIcon />
                                <span>Best Practices</span>
                            </div>
                        </div>
                    </div>
                </div>
            )
        },
        {
            id: 2,
            title: "Template-based Code Generation",
            content: (
                <div className="space-y-8 relative">
                    <div className="text-center">
                        <GlowingBorder glowColor="blue">
                            <div className="mx-auto w-24 h-24 bg-gradient-to-br from-cyan-200 via-blue-200 to-indigo-200 rounded-2xl flex items-center justify-center mb-6 shadow-lg border-4 border-white transform rotate-3 unicorn-hover">
                                <Code className="w-12 h-12 text-indigo-600" />
                            </div>
                        </GlowingBorder>
                    </div>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="space-y-4">
                            <h3 className="text-xl font-semibold text-slate-700 dark:text-slate-200 flex items-center space-x-2">
                                <MiniUnicornIcon className="text-pink-500" />
                                <span>Key Features</span>
                            </h3>
                            <ul className="space-y-3 text-slate-600 dark:text-slate-300">
                                <li className="flex items-start space-x-3">
                                    <CheckCircle className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" />
                                    <span>Consistent code patterns across projects</span>
                                </li>
                                <li className="flex items-start space-x-3">
                                    <CheckCircle className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" />
                                    <span>Pre-built templates for common Laravel structures</span>
                                </li>
                                <li className="flex items-start space-x-3">
                                    <CheckCircle className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" />
                                    <span>Automated model, controller, and migration generation</span>
                                </li>
                                <li className="flex items-start space-x-3">
                                    <CheckCircle className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" />
                                    <span>React/TypeScript component scaffolding</span>
                                </li>
                            </ul>
                        </div>
                        <div className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-blue-900/20 dark:via-indigo-900/20 dark:to-purple-900/20 p-6 rounded-2xl border-2 border-blue-200 dark:border-blue-800 shadow-inner">
                            <h3 className="text-lg font-semibold mb-4 text-indigo-700 dark:text-indigo-200 flex items-center space-x-2">
                                <MiniUnicornIcon className="text-indigo-500" />
                                <span>Benefits</span>
                            </h3>
                            <div className="space-y-3 text-sm text-indigo-600 dark:text-indigo-300">
                                <p className="flex items-center space-x-2">
                                    <span className="text-lg">🚀</span>
                                    <span>Reduce development time by 70%</span>
                                </p>
                                <p className="flex items-center space-x-2">
                                    <span className="text-lg">🛡️</span>
                                    <span>Eliminate common coding mistakes</span>
                                </p>
                                <p className="flex items-center space-x-2">
                                    <span className="text-lg">📱</span>
                                    <span>Ensure responsive, accessible interfaces</span>
                                </p>
                                <p className="flex items-center space-x-2">
                                    <span className="text-lg">🔄</span>
                                    <span>Maintain consistency across teams</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            )
        },
        {
            id: 3,
            title: "Opinionated Linters and Checks",
            content: (
                <div className="space-y-8 relative">
                    <div className="text-center">
                        <GlowingBorder glowColor="green">
                            <div className="mx-auto w-24 h-24 bg-gradient-to-br from-emerald-200 via-teal-200 to-cyan-200 rounded-2xl flex items-center justify-center mb-6 shadow-lg border-4 border-white transform -rotate-2 unicorn-hover">
                                <CheckCircle className="w-12 h-12 text-emerald-600" />
                            </div>
                        </GlowingBorder>
                    </div>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="space-y-6">
                            <div>
                                <h3 className="text-lg font-semibold text-slate-700 dark:text-slate-200 mb-3 flex items-center space-x-2">
                                    <MiniUnicornIcon className="text-emerald-500" />
                                    <span>Code Quality</span>
                                </h3>
                                <ul className="space-y-2 text-slate-600 dark:text-slate-300 pl-6">
                                    <li className="flex items-center space-x-2">
                                        <span className="w-2 h-2 bg-emerald-400 rounded-full"></span>
                                        <span>PHPStan static analysis</span>
                                    </li>
                                    <li className="flex items-center space-x-2">
                                        <span className="w-2 h-2 bg-teal-400 rounded-full"></span>
                                        <span>Laravel Pint code formatting</span>
                                    </li>
                                    <li className="flex items-center space-x-2">
                                        <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
                                        <span>TypeScript strict mode enforcement</span>
                                    </li>
                                    <li className="flex items-center space-x-2">
                                        <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                                        <span>ESLint configuration for React</span>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-slate-700 dark:text-slate-200 mb-3 flex items-center space-x-2">
                                    <MiniUnicornIcon className="text-purple-500" />
                                    <span>Architecture Tests</span>
                                </h3>
                                <ul className="space-y-2 text-slate-600 dark:text-slate-300 pl-6">
                                    <li className="flex items-center space-x-2">
                                        <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                                        <span>Controller method validation</span>
                                    </li>
                                    <li className="flex items-center space-x-2">
                                        <span className="w-2 h-2 bg-pink-400 rounded-full"></span>
                                        <span>Model documentation requirements</span>
                                    </li>
                                    <li className="flex items-center space-x-2">
                                        <span className="w-2 h-2 bg-rose-400 rounded-full"></span>
                                        <span>Migration syntax enforcement</span>
                                    </li>
                                    <li className="flex items-center space-x-2">
                                        <span className="w-2 h-2 bg-orange-400 rounded-full"></span>
                                        <span>REST API compliance checks</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 dark:from-emerald-900/20 dark:via-teal-900/20 dark:to-cyan-900/20 p-6 rounded-2xl border-2 border-emerald-200 dark:border-emerald-800 shadow-inner">
                            <h3 className="text-lg font-semibold mb-4 text-emerald-700 dark:text-emerald-200 flex items-center space-x-2">
                                <MiniUnicornIcon className="text-emerald-500" />
                                <span>Quality Metrics</span>
                            </h3>
                            <div className="space-y-4">
                                <div className="flex justify-between items-center p-2 bg-white/50 dark:bg-black/10 rounded-lg">
                                    <span className="text-sm text-emerald-600 dark:text-emerald-300">Code Coverage</span>
                                    <span className="font-bold text-emerald-700 dark:text-emerald-200">95%+</span>
                                </div>
                                <div className="flex justify-between items-center p-2 bg-white/50 dark:bg-black/10 rounded-lg">
                                    <span className="text-sm text-teal-600 dark:text-teal-300">PHPStan Level</span>
                                    <span className="font-bold text-teal-700 dark:text-teal-200">Max</span>
                                </div>
                                <div className="flex justify-between items-center p-2 bg-white/50 dark:bg-black/10 rounded-lg">
                                    <span className="text-sm text-cyan-600 dark:text-cyan-300">Type Safety</span>
                                    <span className="font-bold text-cyan-700 dark:text-cyan-200">Strict</span>
                                </div>
                                <div className="flex justify-between items-center p-2 bg-white/50 dark:bg-black/10 rounded-lg">
                                    <span className="text-sm text-blue-600 dark:text-blue-300">Error Rate</span>
                                    <span className="font-bold text-blue-700 dark:text-blue-200">&lt;0.1%</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        },
        {
            id: 4,
            title: "Presentation Statistics",
            content: (
                <div className="text-center space-y-8 relative">
                    <MagicalSparkles>
                        <GlowingBorder glowColor="purple">
                            <div className="mx-auto w-32 h-32 bg-gradient-to-br from-purple-200 via-pink-200 to-rose-200 rounded-full flex items-center justify-center shadow-lg border-4 border-white unicorn-hover">
                                <div className="relative">
                                    <Eye className="w-16 h-16 text-purple-600" />
                                    <div className="absolute -top-2 -right-2">
                                        <MiniUnicornIcon />
                                    </div>
                                </div>
                            </div>
                        </GlowingBorder>
                    </MagicalSparkles>
                    <div className="space-y-6">
                        <div className="bg-gradient-to-br from-purple-50 via-pink-50 to-rose-50 dark:from-purple-900/20 dark:via-pink-900/20 dark:to-rose-900/20 p-8 rounded-2xl border-2 border-purple-200 dark:border-purple-800 shadow-inner">
                            <div className="flex items-center justify-center space-x-3 mb-4">
                                <MiniUnicornIcon className="text-purple-500" />
                                <h3 className="text-2xl font-bold text-purple-700 dark:text-purple-200">
                                    Final Slide Views
                                </h3>
                                <MiniUnicornIcon className="text-pink-500" />
                            </div>
                            <div className="text-6xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-rose-600 bg-clip-text text-transparent mb-4">
                                {viewCount}
                            </div>
                            <p className="text-purple-600 dark:text-purple-300">
                                Times this magical slide has been viewed ✨
                            </p>
                        </div>
                        <div className="max-w-2xl mx-auto bg-gradient-to-r from-pink-50 to-purple-50 dark:from-pink-900/20 dark:to-purple-900/20 p-6 rounded-xl border border-pink-200 dark:border-pink-800">
                            <p className="text-lg text-slate-600 dark:text-slate-300 mb-4 flex items-center justify-center space-x-2">
                                <MiniUnicornIcon className="text-pink-500" />
                                <span>Thank you for exploring Laravel app.build agent features!</span>
                                <MiniUnicornIcon className="text-purple-500" />
                            </p>
                            <p className="text-slate-500 dark:text-slate-400">
                                This counter increments each time someone reaches this final slide, 
                                demonstrating real-time data persistence with Laravel and Inertia.js magic! 🦄
                            </p>
                        </div>
                    </div>
                </div>
            )
        }
    ];

    useEffect(() => {
        if (currentSlide === slides.length - 1 && !hasViewedFinalSlide) {
            setHasViewedFinalSlide(true);
            router.post(route('presentation.store'), {}, {
                preserveState: true,
                preserveScroll: true
            });
        }
    }, [currentSlide, hasViewedFinalSlide]);

    const nextSlide = () => {
        if (currentSlide < slides.length - 1) {
            setCurrentSlide(currentSlide + 1);
        }
    };

    const prevSlide = () => {
        if (currentSlide > 0) {
            setCurrentSlide(currentSlide - 1);
        }
    };

    const currentSlideData = slides[currentSlide];

    return (
        <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 via-blue-50 to-cyan-50 dark:from-slate-900 dark:via-purple-900/20 dark:to-blue-900/20 relative overflow-hidden">
            <RainbowTrail />
            <FloatingUnicorns />
            <UnicornStars />
            <FloatingHearts />
            
            <div className="container mx-auto px-4 py-8 max-w-6xl relative z-10">
                {/* Header */}
                <div className="text-center mb-8">
                    <div className="flex items-center justify-center space-x-4 mb-4">
                        <div className="flex space-x-2">
                            {slides.map((_, index) => (
                                <div
                                    key={index}
                                    className={`w-4 h-4 rounded-full transition-all duration-300 transform ${
                                        index === currentSlide
                                            ? 'bg-gradient-to-r from-pink-400 to-purple-500 scale-125 shadow-lg'
                                            : index < currentSlide
                                            ? 'bg-gradient-to-r from-emerald-400 to-teal-500 shadow-md'
                                            : 'bg-slate-300 dark:bg-slate-600'
                                    }`}
                                />
                            ))}
                        </div>
                        <span className="text-sm text-slate-500 dark:text-slate-400 bg-white/50 dark:bg-black/20 px-3 py-1 rounded-full">
                            {currentSlide + 1} of {slides.length}
                        </span>
                    </div>
                </div>

                {/* Slide Content */}
                <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-3xl shadow-2xl p-8 md:p-12 min-h-[600px] border border-white/50 dark:border-slate-700/50 relative">
                    <div className="text-center mb-8">
                        <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-rose-600 bg-clip-text text-transparent">
                            {currentSlideData.title}
                        </h1>
                    </div>
                    
                    <div className="flex-1">
                        {currentSlideData.content}
                    </div>
                </div>

                {/* Navigation */}
                <div className="flex justify-between items-center mt-8">
                    <Button
                        onClick={prevSlide}
                        disabled={currentSlide === 0}
                        variant="outline"
                        className="flex items-center space-x-2 bg-white/80 hover:bg-white/90 border-pink-200 hover:border-pink-300 text-pink-600 hover:text-pink-700 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        <ChevronLeft className="w-4 h-4" />
                        <span>Back</span>
                    </Button>

                    <div className="text-center bg-white/50 dark:bg-black/20 px-4 py-2 rounded-full">
                        <p className="text-sm text-slate-500 dark:text-slate-400 flex items-center space-x-2">
                            <MiniUnicornIcon className="text-purple-500" />
                            <span>Use navigation buttons to explore all slides</span>
                            <MiniUnicornIcon className="text-pink-500" />
                        </p>
                    </div>

                    <Button
                        onClick={nextSlide}
                        disabled={currentSlide === slides.length - 1}
                        className="flex items-center space-x-2 bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        <span>Next</span>
                        <ChevronRight className="w-4 h-4" />
                    </Button>
                </div>
            </div>
        </div>
    );
}