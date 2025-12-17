import React, { useState, useEffect } from 'react';
import { Users, Shield, Target, CheckCircle, Lock, Zap, BookOpen, Music, Tv, Dumbbell, Code, Coffee, Smartphone, Heart, X, MessageCircle, Briefcase, Trophy, Rocket, Globe, Brain, Sun, Apple, Plus, Bell, Search, UserCheck, MessageSquare, PenTool, CreditCard, Guitar, Sparkles, Fingerprint, Calendar, MapPin, ArrowRight, Menu, Loader, Database, Server, FileText, Cpu, Layout, Atom, Hash, Box, Terminal, Layers, Cloud } from 'lucide-react';
import { signInAnonymously, onAuthStateChanged, signInWithCustomToken } from "firebase/auth";
import { collection, addDoc, serverTimestamp, query, where, getDocs } from "firebase/firestore";
import { auth, db, appId, initialAuthToken } from './firebase';

// --- Component: Vertical Icon Stream ---
const IconStream = ({ speed = "normal", direction = "left" }) => {
    // Unique list of niches
    const uniqueIcons = [
        { Icon: Code, color: "text-blue-400", bg: "bg-blue-900/30", label: "LeetCode Hard" },
        { Icon: Atom, color: "text-cyan-400", bg: "bg-cyan-900/30", label: "React / Next" },
        { Icon: Database, color: "text-pink-400", bg: "bg-pink-900/30", label: "System Design" },
        { Icon: Terminal, color: "text-green-400", bg: "bg-green-900/30", label: "Node.js" },
        { Icon: MessageSquare, color: "text-purple-400", bg: "bg-purple-900/30", label: "Mock Interview" },
        { Icon: Hash, color: "text-yellow-400", bg: "bg-yellow-900/30", label: "Python/AI" },
        { Icon: Server, color: "text-orange-400", bg: "bg-orange-900/30", label: "Backend Prep" },
        { Icon: Box, color: "text-blue-500", bg: "bg-blue-900/30", label: "Docker/K8s" },
        { Icon: Users, color: "text-green-400", bg: "bg-green-900/30", label: "Behavioral" },
        { Icon: Cpu, color: "text-indigo-400", bg: "bg-indigo-900/30", label: "OS Concepts" },
        { Icon: Cloud, color: "text-orange-300", bg: "bg-orange-900/30", label: "AWS Cert" },
        { Icon: Trophy, color: "text-teal-400", bg: "bg-teal-900/30", label: "Salary Neg." },
        { Icon: Layers, color: "text-emerald-400", bg: "bg-emerald-900/30", label: "Microservices" },
        { Icon: Layout, color: "text-red-400", bg: "bg-red-900/30", label: "Frontend System" },
        { Icon: Brain, color: "text-amber-400", bg: "bg-amber-900/30", label: "Dynamic Prog." },
        { Icon: FileText, color: "text-emerald-400", bg: "bg-emerald-900/30", label: "Resume Review" },
        { Icon: Zap, color: "text-cyan-400", bg: "bg-cyan-900/30", label: "Speed Run" },
        { Icon: Target, color: "text-rose-400", bg: "bg-rose-900/30", label: "FAANG Goal" },
    ];

    // Double the list for seamless scrolling
    const icons = [...uniqueIcons, ...uniqueIcons];

    return (
        <div className="h-[200%] relative overflow-hidden w-full opacity-30 md:opacity-50 hover:opacity-100 transition-opacity duration-500">
            <div className={`flex flex-col gap-4 absolute w-full items-center ${speed === 'slow' ? 'animate-scroll-y-slow' : 'animate-scroll-y'}`}>
                {icons.map((item, idx) => (
                    <div key={idx} className={`flex flex-col items-center justify-center p-3 lg:p-4 w-12 lg:w-20 rounded-2xl ${item.bg} backdrop-blur-sm border border-white/5 shadow-lg`}>
                        <item.Icon className={`w-5 h-5 lg:w-8 lg:h-8 ${item.color} mb-1`} />
                        <span className="text-[7px] lg:text-[10px] uppercase font-bold tracking-wider text-slate-300 text-center leading-tight">{item.label}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

// --- Component: Dynamic Match Simulation ---
const MatchSimulation = () => {
    const [step, setStep] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setStep((prev) => (prev + 1) % 4);
        }, 4000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="relative w-full max-w-[320px] md:max-w-sm h-[480px] bg-slate-900 rounded-[3rem] border-8 border-slate-800 shadow-2xl overflow-hidden animate-pulse-glow mx-auto transform hover:scale-105 transition-transform duration-500">
            {/* Notch */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-slate-800 rounded-b-xl z-20"></div>

            {/* Content Area */}
            <div className="h-full w-full bg-slate-950 relative p-4 flex flex-col pt-12">

                {/* Header */}
                <div className="flex justify-between items-center mb-6">
                    <div className="flex items-center gap-2">
                        <img src="/klique-icon.png" alt="Klique" className="w-6 h-6 rounded-lg grayscale opacity-50" />
                        <span className="font-bold text-slate-300">Klique</span>
                    </div>
                    <div className="h-2 w-16 bg-slate-800 rounded-full"></div>
                </div>

                {/* Dynamic Screen Content */}
                <div className="flex-1 relative">

                    {/* Step 0: Raise Request */}
                    <div className={`absolute w-full transition-all duration-500 ${step === 0 ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
                        <div className="bg-slate-900/50 p-4 rounded-2xl border border-slate-800 mb-4">
                            <h3 className="text-white font-bold mb-1">Create Request</h3>
                            <p className="text-slate-500 text-xs mb-4">Find an accountability partner.</p>

                            <div className="space-y-3">
                                <div className="h-10 bg-slate-800 rounded-lg w-full flex items-center px-3 text-xs text-slate-400">
                                    <Code className="w-4 h-4 mr-2" /> System Design Mock
                                </div>
                                <div className="h-10 bg-slate-800 rounded-lg w-full flex items-center px-3 text-xs text-slate-400">
                                    <Zap className="w-4 h-4 mr-2" /> Daily DSA Streak
                                </div>
                            </div>
                        </div>
                        <button className="w-full py-3 bg-blue-600 rounded-xl text-white font-bold text-sm shadow-lg shadow-blue-900/20 flex items-center justify-center gap-2 animate-pulse">
                            <Plus className="w-4 h-4" /> Find Partner
                        </button>
                    </div>

                    {/* Step 1: Receiving Profiles */}
                    <div className={`absolute w-full transition-all duration-500 ${step === 1 ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
                        <div className="flex justify-between items-end mb-4">
                            <div>
                                <h3 className="text-white font-bold text-lg">My Request</h3>
                                <p className="text-blue-400 text-xs font-mono">#DSA #SystemDesign</p>
                            </div>
                            <span className="text-xs bg-slate-800 px-2 py-1 rounded text-slate-400">2/3 Applied</span>
                        </div>

                        <div className="space-y-3">
                            {/* Incoming Profile 1 */}
                            <div className="bg-slate-800/80 p-3 rounded-xl border border-slate-700 flex items-center gap-3 animate-slide-up" style={{ animationDelay: '0.2s' }}>
                                <div className="w-10 h-10 rounded-full bg-purple-500/20 text-purple-400 flex items-center justify-center font-bold text-xs">SK</div>
                                <div className="flex-1">
                                    <h4 className="text-white text-sm font-bold">Sarah K.</h4>
                                    <p className="text-[10px] text-slate-400">Streak: 45 Days • Ex-Amazon</p>
                                </div>
                                <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                            </div>

                            {/* Incoming Profile 2 */}
                            <div className="bg-slate-800/80 p-3 rounded-xl border border-slate-700 flex items-center gap-3 animate-slide-up" style={{ animationDelay: '0.6s' }}>
                                <div className="w-10 h-10 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-xs">RJ</div>
                                <div className="flex-1">
                                    <h4 className="text-white text-sm font-bold">Raj J.</h4>
                                    <p className="text-[10px] text-slate-400">Streak: 12 Days • Student</p>
                                </div>
                                <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                            </div>
                        </div>

                        <div className="mt-4 flex justify-center">
                            <div className="flex items-center gap-2 px-3 py-1 bg-blue-500/10 rounded-full border border-blue-500/20">
                                <Bell className="w-3 h-3 text-blue-400 animate-bounce" />
                                <span className="text-[10px] text-blue-300">New interest received</span>
                            </div>
                        </div>
                    </div>

                    {/* Step 2: Select Profile */}
                    <div className={`absolute w-full transition-all duration-500 ${step === 2 ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
                        <h3 className="text-slate-400 text-xs font-bold uppercase mb-4 tracking-wider">Reviewing Applicant</h3>

                        {/* Selected Card Highlighted */}
                        <div className="bg-slate-800 p-4 rounded-2xl border-2 border-blue-500 shadow-xl shadow-blue-900/20 relative overflow-hidden">
                            <div className="absolute top-0 right-0 bg-blue-500 text-white text-[10px] font-bold px-2 py-1 rounded-bl-lg">
                                RECOMMENDED
                            </div>
                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-14 h-14 rounded-full bg-gradient-to-tr from-purple-400 to-purple-600 flex items-center justify-center text-white font-bold text-lg shadow-lg">SK</div>
                                <div>
                                    <h4 className="text-white font-bold">Sarah K.</h4>
                                    <div className="flex items-center gap-1 mt-1">
                                        <Shield className="w-3 h-3 text-emerald-400" />
                                        <span className="text-xs text-slate-300">Identity Verified</span>
                                    </div>
                                </div>
                            </div>
                            <p className="text-slate-400 text-xs mb-4 leading-relaxed bg-slate-900/50 p-2 rounded-lg">
                                "Hey! Consistent for 45 days. I do System Design mocks every Sat at 8 PM. Join?"
                            </p>
                            <div className="flex gap-2">
                                <button className="flex-1 py-2 rounded-lg border border-slate-600 text-slate-400 text-xs font-bold">Skip</button>
                                <button className="flex-1 py-2 rounded-lg bg-blue-600 text-white text-xs font-bold hover:bg-blue-500 transition shadow-lg shadow-blue-600/20">
                                    Accept Challenge
                                </button>
                            </div>

                            {/* Cursor Simulation */}
                            <div className="absolute bottom-4 right-12 w-6 h-6 bg-white/20 rounded-full animate-ping pointer-events-none"></div>
                        </div>
                    </div>

                    {/* Step 3: Match Created */}
                    <div className={`absolute w-full h-full flex flex-col items-center justify-center transition-all duration-500 ${step === 3 ? 'opacity-100 scale-100' : 'opacity-0 scale-110'}`}>
                        <div className="relative mb-6">
                            <div className="absolute inset-0 bg-green-500/20 blur-xl rounded-full"></div>
                            <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-green-400 to-emerald-600 flex items-center justify-center text-white shadow-2xl relative z-10">
                                <Zap className="w-10 h-10 fill-current" />
                            </div>
                            <div className="absolute -bottom-2 -right-2 bg-white text-emerald-600 rounded-full p-1.5 shadow-lg z-20">
                                <CheckCircle className="w-5 h-5" />
                            </div>
                        </div>

                        <h2 className="text-2xl font-bold text-white mb-2">It's a Match!</h2>
                        <p className="text-slate-400 text-center text-sm px-4 mb-8">
                            You and <span className="text-white font-bold">Sarah</span> are now partners.
                        </p>

                        <div className="w-full bg-slate-800/50 rounded-xl p-3 border border-slate-700 animate-slide-up">
                            <div className="flex items-center gap-3 mb-2">
                                <div className="w-6 h-6 rounded-full bg-purple-500/20 text-purple-400 flex items-center justify-center text-[10px]">SK</div>
                                <span className="text-xs text-slate-300">Sarah is typing...</span>
                            </div>
                            <div className="bg-slate-700/50 rounded-lg p-2 rounded-tl-none ml-2">
                                <p className="text-xs text-white">Hey! I almost skipped today. Thanks for the nudge!</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

const Navbar = () => (
    <nav className="fixed top-0 w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-900">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
            <div className="flex items-center gap-2">
                <img src="/klique-icon.png" alt="Klique Logo" className="w-8 h-8 rounded-lg shadow-lg shadow-blue-500/20 transform rotate-3 hover:rotate-6 transition-all" />
                <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400">
                    Klique
                </span>
            </div>
            <div className="hidden md:flex items-center gap-8">
                <button onClick={() => document.getElementById('how-it-works').scrollIntoView({ behavior: 'smooth' })} className="text-slate-400 hover:text-white font-medium transition text-sm">How it Works</button>
                <button onClick={() => document.getElementById('join').scrollIntoView({ behavior: 'smooth' })} className="px-5 py-2.5 bg-white text-slate-950 rounded-lg text-sm font-bold hover:bg-slate-200 transition">
                    Join Wishlist
                </button>
            </div>
            {/* Mobile Menu Icon */}
            <div className="md:hidden">
                <button onClick={() => document.getElementById('join').scrollIntoView({ behavior: 'smooth' })} className="text-white text-xs font-bold bg-blue-600 px-3 py-2 rounded-lg">Join Wishlist</button>
            </div>
        </div>
    </nav>
);

const Hero = () => {
    return (
        <section className="relative min-h-screen pt-24 pb-12 overflow-hidden bg-slate-950 flex flex-col lg:flex-row items-center">
            {/* Background Ambient Light */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>

            {/* Right Column: Icons Stream */}
            <div className="absolute right-0 top-0 h-full w-16 lg:w-32 flex justify-around bg-gradient-to-l from-slate-950 to-transparent z-10 pr-1 lg:pr-4 pointer-events-none">
                <IconStream speed="normal" />
            </div>
            <div className="absolute right-32 top-0 h-full w-32 hidden lg:flex justify-around bg-gradient-to-l from-slate-950 to-transparent z-0 opacity-40 pointer-events-none">
                <IconStream speed="slow" />
            </div>

            <div className="container mx-auto px-6 relative z-20 grid lg:grid-cols-2 gap-12 items-center">
                <div className="text-center lg:text-left pt-8 lg:pt-0">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold mb-6">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                        </span>
                        Accepting Early Users
                    </div>

                    <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white leading-[1.1] mb-6 tracking-tight">
                        Consistency is the <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">Hardest Algorithm.</span>
                    </h1>

                    <p className="text-base md:text-lg text-slate-400 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                        Most fail technical interviews not because of IQ, but because they lose motivation alone. Match with a verified partner for <span className="text-white font-semibold">Daily Mock Interviews</span>, <span className="text-white font-semibold">System Design</span>, and <span className="text-white font-semibold">Unbreakable Accountability</span>.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                        <button
                            onClick={() => document.getElementById('join').scrollIntoView({ behavior: 'smooth' })}
                            className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-bold text-sm shadow-lg shadow-blue-900/20 transition-all hover:scale-105 flex items-center justify-center gap-2"
                        >
                            <Zap className="w-4 h-4" /> Find Accountability Partner
                        </button>
                        <button
                            onClick={() => document.getElementById('how-it-works').scrollIntoView({ behavior: 'smooth' })}
                            className="px-8 py-4 glass-panel hover:bg-slate-800 text-slate-300 rounded-xl font-bold text-sm transition-all flex items-center justify-center gap-2"
                        >
                            How it works
                        </button>
                    </div>

                    <div className="mt-12 flex flex-wrap justify-center lg:justify-start gap-4 text-xs text-slate-500 font-medium">
                        <div className="flex items-center gap-1"><Shield className="w-4 h-4 text-emerald-500" /> Verified Users</div>
                        <div className="hidden sm:block w-1 h-1 bg-slate-700 rounded-full"></div>
                        <div className="flex items-center gap-1"><Lock className="w-4 h-4 text-emerald-500" /> Privacy First</div>
                    </div>
                </div>

                <div className="relative flex justify-center">
                    <MatchSimulation />
                </div>
            </div>
        </section>
    );
};

const MeaningfulConnections = () => (
    <section className="py-24 bg-slate-950 relative overflow-hidden border-t border-slate-900">
        {/* Decorative Background */}
        <div className="absolute top-1/2 left-0 w-64 h-64 bg-blue-600/10 rounded-full blur-[80px] -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-600/10 rounded-full blur-[100px]"></div>

        <div className="container mx-auto px-6 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
                {/* Left Content */}
                <div>
                    <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                        Discipline <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Over Motivation</span>
                    </h2>
                    <p className="text-lg text-slate-400 mb-8 leading-relaxed">
                        Motivation comes in waves. Discipline stays. Connect with people who show up even when they don't feel like it.
                    </p>
                    <div className="space-y-6">
                        {/* Feature 1 */}
                        <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-slate-900/50 transition-colors border border-transparent hover:border-slate-800">
                            <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center shrink-0">
                                <Fingerprint className="w-5 h-5 text-blue-400" />
                            </div>
                            <div>
                                <h3 className="text-white font-bold mb-1">Verified Identity</h3>
                                <p className="text-sm text-slate-500">Every user is verified via video. No bots, no fakes, just real people.</p>
                            </div>
                        </div>

                        {/* Feature 2 */}
                        <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-slate-900/50 transition-colors border border-transparent hover:border-slate-800">
                            <div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center shrink-0">
                                <Target className="w-5 h-5 text-purple-400" />
                            </div>
                            <div>
                                <h3 className="text-white font-bold mb-1">Active Recall</h3>
                                <p className="text-sm text-slate-500">Stop passively watching tutorials. Explain your code out loud to a partner.</p>
                            </div>
                        </div>

                        {/* Feature 3 */}
                        <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-slate-900/50 transition-colors border border-transparent hover:border-slate-800">
                            <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center shrink-0">
                                <Sparkles className="w-5 h-5 text-emerald-400" />
                            </div>
                            <div>
                                <h3 className="text-white font-bold mb-1">Privacy Focused</h3>
                                <p className="text-sm text-slate-500">Your details are safe. Personal info is only revealed after you match.</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Visual (Static Card) */}
                <div className="relative">
                    {/* Abstract Glow */}
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-3xl blur-3xl opacity-20"></div>

                    <div className="relative bg-slate-950/80 backdrop-blur-xl border border-slate-800 rounded-3xl p-8 shadow-2xl">
                        {/* Top Badge */}
                        <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 bg-emerald-500 rounded-full text-white text-xs font-bold shadow-lg shadow-emerald-500/20 flex items-center gap-2">
                            <CheckCircle className="w-3 h-3 fill-current text-white" />
                            Connection Established
                        </div>

                        {/* Profiles Connected */}
                        <div className="flex items-center justify-center gap-6 mb-8 mt-4">
                            {/* User 1 */}
                            <div className="text-center">
                                <div className="w-16 h-16 rounded-full bg-slate-800 border-2 border-slate-700 mb-2 overflow-hidden mx-auto relative">
                                    <div className="absolute inset-0 bg-gradient-to-br from-slate-700 to-slate-800"></div>
                                    <span className="absolute inset-0 flex items-center justify-center font-bold text-slate-400">YOU</span>
                                </div>
                            </div>

                            {/* Connection Line */}
                            <div className="flex-1 h-px bg-gradient-to-r from-slate-800 via-blue-500 to-slate-800 relative">
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center shadow-lg shadow-blue-500/50">
                                    <Zap className="w-4 h-4 text-white fill-current" />
                                </div>
                            </div>

                            {/* User 2 */}
                            <div className="text-center">
                                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 p-0.5 mb-2 mx-auto shadow-lg shadow-purple-500/20">
                                    <div className="w-full h-full bg-slate-900 rounded-full flex items-center justify-center border-2 border-transparent">
                                        <span className="font-bold text-white">SK</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Match Details Card */}
                        <div className="bg-slate-900 rounded-2xl p-6 border border-slate-800/50">
                            <div className="flex items-center justify-between mb-4 pb-4 border-b border-slate-800">
                                <div>
                                    <h4 className="text-white font-bold">Sarah K.</h4>
                                    <div className="flex items-center gap-1.5 mt-1">
                                        <Shield className="w-3 h-3 text-emerald-500" />
                                        <span className="text-xs text-slate-400">Identity Verified</span>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <span className="block text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">98%</span>
                                    <span className="text-[10px] text-slate-500 uppercase tracking-wider font-bold">Match Score</span>
                                </div>
                            </div>

                            <div className="space-y-3">
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center">
                                        <Code className="w-4 h-4 text-blue-400" />
                                    </div>
                                    <div>
                                        <span className="block text-xs text-slate-500">Target Role</span>
                                        <span className="text-sm text-slate-200 font-medium">Google L4 / SDE-2</span>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-lg bg-purple-500/10 flex items-center justify-center">
                                        <Calendar className="w-4 h-4 text-purple-400" />
                                    </div>
                                    <div>
                                        <span className="block text-xs text-slate-500">Availability</span>
                                        <span className="text-sm text-slate-200 font-medium">Evenings (8 PM IST)</span>
                                    </div>
                                </div>
                            </div>

                            <button className="w-full mt-6 py-3 bg-white text-slate-950 rounded-xl font-bold text-sm hover:bg-slate-200 transition-colors shadow-lg shadow-white/5">
                                Start Chatting
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

const HowItWorks = () => (
    <section id="how-it-works" className="py-24 bg-slate-950 relative border-t border-slate-900 overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
            <div className="absolute top-[10%] left-[20%] w-72 h-72 bg-blue-600/5 rounded-full blur-[100px]"></div>
            <div className="absolute bottom-[10%] right-[20%] w-72 h-72 bg-purple-600/5 rounded-full blur-[100px]"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
            <div className="text-center mb-24">
                <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">Your Roadmap to <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">Offer Letter</span></h2>
                <p className="text-slate-400 max-w-2xl mx-auto text-lg">Three simple steps to find your interview partner.</p>
            </div>

            <div className="relative max-w-4xl mx-auto">
                {/* Central Line (Desktop) / Left Line (Mobile) */}
                <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500 via-purple-500 to-emerald-500 opacity-30 md:-translate-x-1/2"></div>

                <div className="space-y-12 md:space-y-24">
                    {/* Step 1 */}
                    <div className="relative flex flex-col md:flex-row items-center">
                        {/* Mobile Icon Wrapper (Left aligned) */}
                        <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-slate-950 border-4 border-slate-900 ring-2 ring-blue-500/50 flex items-center justify-center z-10 shadow-[0_0_20px_rgba(59,130,246,0.5)]">
                            <span className="text-blue-400 font-bold text-sm">1</span>
                        </div>

                        {/* Content Card */}
                        <div className="ml-20 md:ml-0 md:w-1/2 md:pr-16 md:text-right">
                            <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-blue-500/30 transition-all hover:-translate-y-1 duration-300 group">
                                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-blue-500/10 text-blue-400 mb-4 md:ml-auto md:mr-0 group-hover:scale-110 transition-transform">
                                    <Plus className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-2">Post Buddy Request</h3>
                                <p className="text-slate-400 text-sm leading-relaxed">
                                    Create a request for a specific topic (e.g. System Design). Each request accepts a <span className="text-blue-300">maximum of 3 applicants</span>.
                                </p>
                            </div>
                        </div>
                        <div className="hidden md:block md:w-1/2"></div>
                    </div>

                    {/* Step 2 */}
                    <div className="relative flex flex-col md:flex-row items-center">
                        {/* Mobile Icon Wrapper */}
                        <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-slate-950 border-4 border-slate-900 ring-2 ring-purple-500/50 flex items-center justify-center z-10 shadow-[0_0_20px_rgba(168,85,247,0.5)]">
                            <span className="text-purple-400 font-bold text-sm">2</span>
                        </div>

                        <div className="hidden md:block md:w-1/2"></div>

                        {/* Content Card */}
                        <div className="ml-20 md:ml-0 md:w-1/2 md:pl-16 md:text-left">
                            <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-purple-500/30 transition-all hover:-translate-y-1 duration-300 group">
                                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-purple-500/10 text-purple-400 mb-4 group-hover:scale-110 transition-transform">
                                    <Search className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-2">Receive 3 Profiles</h3>
                                <p className="text-slate-400 text-sm leading-relaxed">
                                    Peers apply to your slot. The request <span className="text-purple-300">automatically expires</span> after the 3rd application. No spam, just 3 focused options.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Step 3 */}
                    <div className="relative flex flex-col md:flex-row items-center">
                        {/* Mobile Icon Wrapper */}
                        <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-slate-950 border-4 border-slate-900 ring-2 ring-emerald-500/50 flex items-center justify-center z-10 shadow-[0_0_20px_rgba(16,185,129,0.5)]">
                            <span className="text-emerald-400 font-bold text-sm">3</span>
                        </div>

                        {/* Content Card */}
                        <div className="ml-20 md:ml-0 md:w-1/2 md:pr-16 md:text-right">
                            <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-emerald-500/30 transition-all hover:-translate-y-1 duration-300 group">
                                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-emerald-500/10 text-emerald-400 mb-4 md:ml-auto md:mr-0 group-hover:scale-110 transition-transform">
                                    <MessageSquare className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-2">Approve & Practice</h3>
                                <p className="text-slate-400 text-sm leading-relaxed">
                                    Review the candidates. <span className="text-emerald-300">Approve</span> the best fit to unlock the chat and start your mock interview.
                                </p>
                            </div>
                        </div>
                        <div className="hidden md:block md:w-1/2"></div>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

const WhyDifferent = () => (
    <section className="py-24 bg-slate-950 relative overflow-hidden">
        {/* Header */}
        <div className="container mx-auto px-6 mb-16 text-center">
            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">Why This Beats "Solo Grinding"</h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg">We aren't just a discord server. We are an infrastructure for discipline.</p>
        </div>

        <div className="container mx-auto px-6 grid gap-12 max-w-6xl">
            {/* Row 1: The Comparisons */}
            <div className="grid lg:grid-cols-2 gap-8">
                {/* Not a Habit Tracker */}
                <div className="bg-slate-900/50 border border-slate-800 rounded-3xl p-8 hover:border-red-500/30 transition-colors duration-300">
                    <div className="flex items-center gap-3 mb-8">
                        <div className="p-3 rounded-xl bg-red-500/10 text-red-400 border border-red-500/20"><Target className="w-6 h-6" /></div>
                        <div>
                            <h3 className="text-2xl font-bold text-white">Not a "Study Group"</h3>
                            <p className="text-sm text-slate-500">Groups are noisy and distracting. This is 1:1 focused work.</p>
                        </div>
                    </div>
                    <div className="space-y-4">
                        <div className="flex justify-between text-xs font-semibold uppercase tracking-wider border-b border-slate-800 pb-3 mb-2">
                            <span className="text-slate-500">Solo Grinding</span>
                            <span className="text-blue-400">Klique Partner</span>
                        </div>
                        {/* Rows */}
                        <div className="grid grid-cols-2 gap-4 text-sm items-center">
                            <span className="text-slate-500 flex items-center gap-2"><X className="w-3 h-3 text-red-500" /> Silent Solving</span>
                            <span className="text-white flex items-center gap-2"><CheckCircle className="w-3 h-3 text-emerald-500" /> Verbal Practice</span>
                        </div>
                        <div className="grid grid-cols-2 gap-4 text-sm items-center">
                            <span className="text-slate-500 flex items-center gap-2"><X className="w-3 h-3 text-red-500" /> Give up easily</span>
                            <span className="text-white flex items-center gap-2"><CheckCircle className="w-3 h-3 text-emerald-500" /> Social Pressure</span>
                        </div>
                        <div className="grid grid-cols-2 gap-4 text-sm items-center">
                            <span className="text-slate-500 flex items-center gap-2"><X className="w-3 h-3 text-red-500" /> False Confidence</span>
                            <span className="text-white flex items-center gap-2"><CheckCircle className="w-3 h-3 text-emerald-500" /> Real Feedback</span>
                        </div>
                    </div>
                </div>

                {/* Not Social Media */}
                <div className="bg-slate-900/50 border border-slate-800 rounded-3xl p-8 hover:border-purple-500/30 transition-colors duration-300">
                    <div className="flex items-center gap-3 mb-8">
                        <div className="p-3 rounded-xl bg-purple-500/10 text-purple-400 border border-purple-500/20"><Smartphone className="w-6 h-6" /></div>
                        <div>
                            <h3 className="text-2xl font-bold text-white">Not a Dating App</h3>
                            <p className="text-sm text-slate-500">Optimizes for coding skills, not appearances.</p>
                        </div>
                    </div>
                    <div className="space-y-4">
                        <div className="flex justify-between text-xs font-semibold uppercase tracking-wider border-b border-slate-800 pb-3 mb-2">
                            <span className="text-slate-500">Random Discords</span>
                            <span className="text-blue-400">Klique Partner</span>
                        </div>
                        {/* Rows */}
                        <div className="grid grid-cols-2 gap-4 text-sm items-center">
                            <span className="text-slate-500 flex items-center gap-2"><X className="w-3 h-3 text-red-500" /> Ghosting & Flakes</span>
                            <span className="text-white flex items-center gap-2"><CheckCircle className="w-3 h-3 text-emerald-500" /> Streak Score</span>
                        </div>
                        <div className="grid grid-cols-2 gap-4 text-sm items-center">
                            <span className="text-slate-500 flex items-center gap-2"><X className="w-3 h-3 text-red-500" /> Zero Context</span>
                            <span className="text-white flex items-center gap-2"><CheckCircle className="w-3 h-3 text-emerald-500" /> Matched by Role</span>
                        </div>
                        <div className="grid grid-cols-2 gap-4 text-sm items-center">
                            <span className="text-slate-500 flex items-center gap-2"><X className="w-3 h-3 text-red-500" /> Chaos</span>
                            <span className="text-white flex items-center gap-2"><CheckCircle className="w-3 h-3 text-emerald-500" /> Scheduled Slots</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Row 2: The Core Values (Bento Grid) */}
            <div className="grid md:grid-cols-3 gap-6">
                {/* Purpose Bound */}
                <div className="p-8 bg-slate-900/30 border border-slate-800 rounded-3xl hover:border-blue-500/30 transition-all hover:-translate-y-1">
                    <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center mb-6 text-blue-400">
                        <Target className="w-6 h-6" />
                    </div>
                    <h4 className="text-xl font-bold text-white mb-3">Mock Interviews</h4>
                    <p className="text-slate-400 text-sm leading-relaxed">The only way to clear SDE-2 interviews is practice. Simulate the pressure before the real day.</p>
                </div>

                {/* Trust by Design */}
                <div className="p-8 bg-slate-900/30 border border-slate-800 rounded-3xl hover:border-emerald-500/30 transition-all hover:-translate-y-1">
                    <div className="w-12 h-12 bg-emerald-500/10 rounded-xl flex items-center justify-center mb-6 text-emerald-400">
                        <Shield className="w-6 h-6" />
                    </div>
                    <h4 className="text-xl font-bold text-white mb-3">Trust by Design</h4>
                    <p className="text-slate-400 text-sm leading-relaxed">No personal info displayed before matching. Mandatory video verification prevents spam, scams, and superficial engagement.</p>
                </div>

                {/* Conversation Product */}
                <div className="p-8 bg-slate-900/30 border border-slate-800 rounded-3xl hover:border-purple-500/30 transition-all hover:-translate-y-1">
                    <div className="w-12 h-12 bg-purple-500/10 rounded-xl flex items-center justify-center mb-6 text-purple-400">
                        <MessageCircle className="w-6 h-6" />
                    </div>
                    <h4 className="text-xl font-bold text-white mb-3">Conversation First</h4>
                    <p className="text-slate-400 text-sm leading-relaxed">Core value is talking, sharing, and understanding. No feeds, no likes, no follower economy. Just one-to-one depth.</p>
                </div>
            </div>

            {/* Row 3: Positioning Statement */}
            <div className="mt-16 text-center">
                <div className="inline-block p-1 rounded-3xl bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-blue-500/20">
                    <div className="px-8 py-10 rounded-[22px] bg-slate-950/80 backdrop-blur-xl border border-white/5 relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-50"></div>
                        <p className="text-xl md:text-2xl font-medium text-slate-200 italic leading-relaxed">
                            "A privacy-first community to find a dedicated partner for System Design & DSA mocks — not random discord spam."
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

const FooterCTA = ({ user }) => {
    const [email, setEmail] = useState('');
    const [goal, setGoal] = useState('');

    const [status, setStatus] = useState('idle'); // idle, loading, success, error
    const [errorMessage, setErrorMessage] = useState('');

    const isValidEmail = (email) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!email || !goal) {
            setErrorMessage("Please enter both a goal and an email.");
            setStatus('error');
            setTimeout(() => { setStatus('idle'); setErrorMessage(''); }, 3000);
            return;
        }

        if (!isValidEmail(email)) {
            setErrorMessage("Please enter a valid email address.");
            setStatus('error');
            setTimeout(() => { setStatus('idle'); setErrorMessage(''); }, 3000);
            return;
        }

        setStatus('loading');
        setErrorMessage('');

        if (!user) {
            console.error("Firebase Auth not ready or user is null.");
            setStatus('error');
            return;
        }

        try {


            // Anti-Spam Check 2: Max 5 per device (UID)
            const deviceQuery = query(
                collection(db, 'artifacts', appId, 'wishlists'),
                where("uid", "==", user.uid)
            );
            const deviceSnapshot = await getDocs(deviceQuery);
            console.log("Anti-Spam Check - Device Count:", deviceSnapshot.size);

            if (deviceSnapshot.size >= 5) {
                setErrorMessage("Limit reached: Maximum 5 requests per device.");
                setStatus('error');
                return;
            }

            // Valid request - save to flat collection
            await addDoc(collection(db, 'artifacts', appId, 'wishlists'), {
                uid: user.uid,
                email,
                goal,
                createdAt: serverTimestamp()
            });
            setStatus('success');
            setEmail('');
            setGoal('');

            setTimeout(() => setStatus('idle'), 3000);
        } catch (error) {
            console.error("Error adding document to Firestore: ", error);
            setStatus('error');
        }
    };



    return (
        <section id="join" className="py-24 bg-slate-950 flex flex-col items-center text-center px-6 border-t border-slate-900">
            <div className="max-w-2xl mx-auto w-full">
                {/* Social Proof Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-sm font-semibold mb-8 animate-pulse-glow">
                    <Users className="w-4 h-4" />
                    <span>3,000+ people have already joined</span>
                </div>

                <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">Find Your Consistency.</h2>
                <p className="text-slate-400 text-lg mb-10 max-w-lg mx-auto">
                    Find a buddy to master specific topics together. Enter your focus area and email to get matched.
                </p>

                <div className="w-full bg-slate-900 p-2 rounded-3xl border border-slate-800 shadow-2xl mb-8">
                    {status === 'success' ? (
                        <div className="h-32 flex flex-col items-center justify-center text-emerald-400 animate-slide-up">
                            <CheckCircle className="w-12 h-12 mb-2" />
                            <h3 className="text-xl font-bold text-white">You're on the list!</h3>
                            <p className="text-slate-400">We'll notify you when your match is ready.</p>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="p-2 flex flex-col md:flex-row gap-2 relative">
                            {/* Error Message Toast */}
                            {status === 'error' && errorMessage && (
                                <div className="absolute -top-16 left-0 right-0 mx-auto w-max max-w-full bg-red-500/90 text-white text-sm py-2 px-4 rounded-full flex items-center justify-center gap-2 animate-bounce">
                                    <Shield className="w-4 h-4" />
                                    {errorMessage}
                                </div>
                            )}
                            <div className="flex-1 relative group">
                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                    <Target className="h-5 w-5 text-slate-500 group-focus-within:text-blue-500 transition-colors" />
                                </div>
                                <input
                                    type="text"
                                    value={goal}
                                    onChange={(e) => setGoal(e.target.value)}
                                    placeholder="Topic to improve? (e.g. Graphs)"
                                    className="w-full h-14 pl-12 pr-4 bg-slate-950/50 rounded-2xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 border border-transparent focus:border-blue-500/50 transition-all"
                                />
                            </div>

                            <div className="flex-1 relative group">
                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                    <Users className="h-5 w-5 text-slate-500 group-focus-within:text-purple-500 transition-colors" />
                                </div>
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="email@address.com"
                                    className="w-full h-14 pl-12 pr-4 bg-slate-950/50 rounded-2xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 border border-transparent focus:border-purple-500/50 transition-all"
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={status === 'loading'}
                                className="h-14 px-8 bg-white text-slate-950 rounded-2xl font-bold hover:bg-blue-50 transition-all hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-white/10 whitespace-nowrap disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                            >
                                {status === 'loading' ? <Loader className="w-5 h-5 animate-spin" /> : 'Find My Partner'}
                            </button>
                        </form>
                    )}
                </div>

                <p className="mt-6 text-slate-500 text-xs flex items-center justify-center gap-2">
                    <Lock className="w-3 h-3" /> No spam. Unsubscribe anytime.
                </p>
            </div>
        </section>
    );
};

const Footer = () => (
    <footer className="bg-slate-950 py-8 border-t border-slate-900">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-slate-600 text-sm flex items-center gap-2">
                <span>&copy; {new Date().getFullYear()} Klique. All rights reserved.</span>
                <span className="bg-slate-900 px-1.5 py-0.5 rounded text-[10px] font-mono border border-slate-800">v0.1.1</span>
            </div>
            <div className="flex gap-6 text-sm font-medium text-slate-600">
                <a href="#" className="hover:text-slate-400 transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-slate-400 transition-colors">Terms of Service</a>
                <a href="#" className="hover:text-slate-400 transition-colors">Contact</a>
            </div>
        </div>
    </footer>
);

export default function App() {
    const [user, setUser] = useState(null);

    useEffect(() => {
        if (!auth) {
            console.warn('Firebase not configured. Running in demo mode without authentication.');
            return;
        }

        const initAuth = async () => {
            try {
                if (initialAuthToken) {
                    await signInWithCustomToken(auth, initialAuthToken);
                } else {
                    await signInAnonymously(auth);
                }
            } catch (e) {
                console.error("Initial Firebase authentication failed:", e);
                await signInAnonymously(auth).catch(err => console.error("Anonymous sign in failed:", err));
            }
        };
        initAuth();
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
                setUser(currentUser);
            } else {
                signInAnonymously(auth).then(cred => setUser(cred.user)).catch(err => console.error("Re-auth failed:", err));
            }
        });
        return () => unsubscribe();
    }, []);

    return (
        <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-blue-500/30">
            <Navbar />
            <Hero />
            <HowItWorks />
            <MeaningfulConnections />
            <WhyDifferent />
            <FooterCTA user={user} />
            <Footer />
        </div>
    );
}
