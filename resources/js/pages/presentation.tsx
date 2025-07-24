import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { router } from '@inertiajs/react';
import { ChevronLeft, ChevronRight, Code, CheckCircle, Eye } from 'lucide-react';

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
                <div className="text-center space-y-8">
                    <div className="mx-auto w-24 h-24 bg-gradient-to-br from-red-500 to-orange-600 rounded-xl flex items-center justify-center">
                        <Code className="w-12 h-12 text-white" />
                    </div>
                    <div className="space-y-4">
                        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                            Discover the powerful features that make Laravel development faster, more reliable, and enjoyable.
                        </p>
                        <div className="flex justify-center space-x-6 text-sm text-gray-500 dark:text-gray-400">
                            <span>• Code Generation</span>
                            <span>• Quality Assurance</span>
                            <span>• Best Practices</span>
                        </div>
                    </div>
                </div>
            )
        },
        {
            id: 2,
            title: "Template-based Code Generation",
            content: (
                <div className="space-y-8">
                    <div className="text-center">
                        <div className="mx-auto w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center mb-6">
                            <Code className="w-10 h-10 text-white" />
                        </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="space-y-4">
                            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">Key Features</h3>
                            <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                                <li className="flex items-start space-x-3">
                                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                                    <span>Consistent code patterns across projects</span>
                                </li>
                                <li className="flex items-start space-x-3">
                                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                                    <span>Pre-built templates for common Laravel structures</span>
                                </li>
                                <li className="flex items-start space-x-3">
                                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                                    <span>Automated model, controller, and migration generation</span>
                                </li>
                                <li className="flex items-start space-x-3">
                                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                                    <span>React/TypeScript component scaffolding</span>
                                </li>
                            </ul>
                        </div>
                        <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                            <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-200">Benefits</h3>
                            <div className="space-y-3 text-sm text-gray-600 dark:text-gray-300">
                                <p>✨ Reduce development time by 70%</p>
                                <p>🛡️ Eliminate common coding mistakes</p>
                                <p>📱 Ensure responsive, accessible interfaces</p>
                                <p>🔄 Maintain consistency across teams</p>
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
                <div className="space-y-8">
                    <div className="text-center">
                        <div className="mx-auto w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center mb-6">
                            <CheckCircle className="w-10 h-10 text-white" />
                        </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="space-y-6">
                            <div>
                                <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3">Code Quality</h3>
                                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                                    <li>• PHPStan static analysis</li>
                                    <li>• Laravel Pint code formatting</li>
                                    <li>• TypeScript strict mode enforcement</li>
                                    <li>• ESLint configuration for React</li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3">Architecture Tests</h3>
                                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                                    <li>• Controller method validation</li>
                                    <li>• Model documentation requirements</li>
                                    <li>• Migration syntax enforcement</li>
                                    <li>• REST API compliance checks</li>
                                </ul>
                            </div>
                        </div>
                        <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-6 rounded-lg border border-green-200 dark:border-green-800">
                            <h3 className="text-lg font-semibold mb-4 text-green-800 dark:text-green-200">Quality Metrics</h3>
                            <div className="space-y-4">
                                <div className="flex justify-between items-center">
                                    <span className="text-sm text-green-700 dark:text-green-300">Code Coverage</span>
                                    <span className="font-bold text-green-800 dark:text-green-200">95%+</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-sm text-green-700 dark:text-green-300">PHPStan Level</span>
                                    <span className="font-bold text-green-800 dark:text-green-200">Max</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-sm text-green-700 dark:text-green-300">Type Safety</span>
                                    <span className="font-bold text-green-800 dark:text-green-200">Strict</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-sm text-green-700 dark:text-green-300">Error Rate</span>
                                    <span className="font-bold text-green-800 dark:text-green-200">&lt;0.1%</span>
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
                <div className="text-center space-y-8">
                    <div className="mx-auto w-24 h-24 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center">
                        <Eye className="w-12 h-12 text-white" />
                    </div>
                    <div className="space-y-6">
                        <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-8 rounded-xl border border-purple-200 dark:border-purple-800">
                            <h3 className="text-2xl font-bold text-purple-800 dark:text-purple-200 mb-2">
                                Final Slide Views
                            </h3>
                            <div className="text-6xl font-bold text-purple-600 dark:text-purple-400 mb-4">
                                {viewCount}
                            </div>
                            <p className="text-purple-700 dark:text-purple-300">
                                Times this slide has been viewed
                            </p>
                        </div>
                        <div className="max-w-2xl mx-auto">
                            <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
                                Thank you for exploring Laravel app.build agent features!
                            </p>
                            <p className="text-gray-500 dark:text-gray-400">
                                This counter increments each time someone reaches this final slide, 
                                demonstrating real-time data persistence with Laravel and Inertia.js.
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
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
            <div className="container mx-auto px-4 py-8 max-w-6xl">
                {/* Header */}
                <div className="text-center mb-8">
                    <div className="flex items-center justify-center space-x-4 mb-4">
                        <div className="flex space-x-1">
                            {slides.map((_, index) => (
                                <div
                                    key={index}
                                    className={`w-3 h-3 rounded-full transition-colors ${
                                        index === currentSlide
                                            ? 'bg-blue-500'
                                            : index < currentSlide
                                            ? 'bg-green-500'
                                            : 'bg-gray-300 dark:bg-gray-600'
                                    }`}
                                />
                            ))}
                        </div>
                        <span className="text-sm text-gray-500 dark:text-gray-400">
                            {currentSlide + 1} of {slides.length}
                        </span>
                    </div>
                </div>

                {/* Slide Content */}
                <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 md:p-12 min-h-[600px]">
                    <div className="text-center mb-8">
                        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-gray-200">
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
                        className="flex items-center space-x-2"
                    >
                        <ChevronLeft className="w-4 h-4" />
                        <span>Back</span>
                    </Button>

                    <div className="text-center">
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                            Use navigation buttons to explore all slides
                        </p>
                    </div>

                    <Button
                        onClick={nextSlide}
                        disabled={currentSlide === slides.length - 1}
                        className="flex items-center space-x-2"
                    >
                        <span>Next</span>
                        <ChevronRight className="w-4 h-4" />
                    </Button>
                </div>
            </div>
        </div>
    );
}