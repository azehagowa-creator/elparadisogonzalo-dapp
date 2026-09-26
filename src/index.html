<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ElParadisoGonzalo — Decentralized Universe</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Space+Grotesk:wght@400;500;600;700&display=swap" rel="stylesheet">
    <script>
        tailwind.config = {
            theme: {
                extend: {
                    fontFamily: {
                        sans: ['Inter', 'sans-serif'],
                        display: ['Space Grotesk', 'sans-serif'],
                    },
                    colors: {
                        dark: { 900: '#020204', 800: '#0a0a12', 700: '#12121f', 600: '#1a1a2e' },
                        neon: { purple: '#a855f7', pink: '#d946ef', cyan: '#06b6d4', teal: '#10b981' },
                    }
                }
            }
        }
    </script>
    <style>
        :root {
            --purple-glow: rgba(168, 85, 247, 0.4);
            --cyan-glow: rgba(6, 182, 212, 0.4);
            --pink-glow: rgba(217, 70, 239, 0.4);
        }
        * { scrollbar-width: thin; scrollbar-color: #1a1a2e #020204; }
        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-track { background: #020204; }
        ::-webkit-scrollbar-thumb { background: #1a1a2e; border-radius: 3px; }
        
        body {
            background: #020204;
            color: #e2e8f0;
            font-family: 'Inter', sans-serif;
            overflow-x: hidden;
        }
        
        .glass {
            background: rgba(255, 255, 255, 0.03);
            backdrop-filter: blur(12px);
            border: 1px solid rgba(255, 255, 255, 0.06);
        }
        .glass-strong {
            background: rgba(255, 255, 255, 0.05);
            backdrop-filter: blur(20px);
            border: 1px solid rgba(255, 255, 255, 0.08);
        }
        .glass-hover:hover {
            background: rgba(255, 255, 255, 0.06);
            border-color: rgba(168, 85, 247, 0.3);
            box-shadow: 0 0 20px rgba(168, 85, 247, 0.1);
        }
        
        .neon-text {
            background: linear-gradient(135deg, #a855f7, #d946ef, #06b6d4);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
        }
        .neon-text-teal {
            background: linear-gradient(135deg, #10b981, #34d399);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
        }
        
        .glow-purple { box-shadow: 0 0 30px rgba(168, 85, 247, 0.3), inset 0 0 20px rgba(168, 85, 247, 0.1); }
        .glow-cyan { box-shadow: 0 0 30px rgba(6, 182, 212, 0.3), inset 0 0 20px rgba(6, 182, 212, 0.1); }
        .glow-pink { box-shadow: 0 0 30px rgba(217, 70, 239, 0.3), inset 0 0 20px rgba(217, 70, 239, 0.1); }
        
        .btn-gradient {
            background: linear-gradient(135deg, #a855f7, #d946ef);
            transition: all 0.3s ease;
        }
        .btn-gradient:hover {
            transform: translateY(-2px);
            box-shadow: 0 10px 40px rgba(168, 85, 247, 0.4);
        }
        .btn-teal {
            background: linear-gradient(135deg, #10b981, #34d399);
            transition: all 0.3s ease;
        }
        .btn-teal:hover {
            transform: translateY(-2px);
            box-shadow: 0 10px 40px rgba(16, 185, 129, 0.4);
        }
        
        .crystal {
            width: 140px;
            height: 180px;
            position: relative;
            transform-style: preserve-3d;
            animation: float 6s ease-in-out infinite;
        }
        .crystal::before {
            content: '';
            position: absolute;
            inset: 0;
            background: linear-gradient(135deg, rgba(168,85,247,0.6), rgba(6,182,212,0.6), rgba(217,70,239,0.6));
            clip-path: polygon(50% 0%, 100% 30%, 85% 100%, 15% 100%, 0% 30%);
            filter: blur(1px);
        }
        .crystal::after {
            content: '';
            position: absolute;
            inset: 4px;
            background: linear-gradient(135deg, rgba(168,85,247,0.3), rgba(6,182,212,0.2));
            clip-path: polygon(50% 5%, 95% 32%, 82% 96%, 18% 96%, 5% 32%);
        }
        .crystal-glow {
            position: absolute;
            inset: -20px;
            background: radial-gradient(circle, rgba(168,85,247,0.4) 0%, transparent 70%);
            animation: pulse 4s ease-in-out infinite;
        }
        @keyframes float {
            0%, 100% { transform: translateY(0) rotateY(0deg); }
            50% { transform: translateY(-20px) rotateY(10deg); }
        }
        @keyframes pulse {
            0%, 100% { opacity: 0.5; transform: scale(1); }
            50% { opacity: 1; transform: scale(1.1); }
        }
        
        .orbit {
            position: absolute;
            border: 1px solid rgba(168, 85, 247, 0.2);
            border-radius: 50%;
            animation: orbit-spin 20s linear infinite;
        }
        @keyframes orbit-spin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
        }
        
        .sidebar-item {
            transition: all 0.2s ease;
            border-radius: 10px;
            padding: 10px 14px;
            margin: 2px 8px;
            cursor: pointer;
            display: flex;
            align-items: center;
            gap: 12px;
            color: #94a3b8;
            font-size: 13px;
            font-weight: 500;
        }
        .sidebar-item:hover, .sidebar-item.active {
            background: rgba(168, 85, 247, 0.15);
            color: #e2e8f0;
            border: 1px solid rgba(168, 85, 247, 0.3);
        }
        .sidebar-item.active {
            background: linear-gradient(90deg, rgba(168,85,247,0.25), transparent);
            border-left: 3px solid #a855f7;
        }
        
        .stat-card {
            background: linear-gradient(135deg, rgba(168,85,247,0.1), rgba(6,182,212,0.05));
            border: 1px solid rgba(168, 85, 247, 0.2);
        }
        
        .live-dot {
            width: 8px;
            height: 8px;
            background: #10b981;
            border-radius: 50%;
            animation: live-pulse 2s infinite;
            display: inline-block;
        }
        @keyframes live-pulse {
            0%, 100% { opacity: 1; box-shadow: 0 0 0 0 rgba(16,185,129,0.7); }
            50% { opacity: 0.8; box-shadow: 0 0 0 6px rgba(16,185,129,0); }
        }
        
        .wave-canvas {
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 40%;
            opacity: 0.6;
        }
        
        .grid-bg {
            background-image: 
                linear-gradient(rgba(168,85,247,0.03) 1px, transparent 1px),
                linear-gradient(90deg, rgba(168,85,247,0.03) 1px, transparent 1px);
            background-size: 50px 50px;
        }
        
        .fade-in { animation: fadeIn 0.5s ease-out forwards; }
        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
        }
        
        .category-card {
            transition: all 0.3s ease;
            position: relative;
            overflow: hidden;
        }
        .category-card::before {
            content: '';
            position: absolute;
            top: -50%;
            left: -50%;
            width: 200%;
            height: 200%;
            background: radial-gradient(circle, rgba(168,85,247,0.1) 0%, transparent 60%);
            opacity: 0;
            transition: opacity 0.3s;
        }
        .category-card:hover::before { opacity: 1; }
        .category-card:hover {
            transform: translateY(-5px);
            border-color: rgba(168, 85, 247, 0.4);
        }
        
        input:focus {
            outline: none;
            border-color: #10b981;
            box-shadow: 0 0 0 3px rgba(16, 185, 129, 0.2);
        }
        
        .hidden-view { display: none !important; }
    </style>
</head>
<body>

<!-- ==================== LOGIN VIEW ==================== -->
<div id="loginView" class="min-h-screen flex items-center justify-center p-4 relative">
    <div class="w-full max-w-6xl h-[85vh] glass-strong rounded-3xl overflow-hidden flex shadow-2xl shadow-purple-900/20">
        <!-- Left Panel -->
        <div class="w-1/2 relative hidden lg:flex flex-col justify-between p-12 overflow-hidden" style="background: linear-gradient(180deg, #0f0f1a 0%, #050510 100%);">
            <canvas id="waveCanvas" class="wave-canvas"></canvas>
            <div class="relative z-10">
                <div class="flex items-center gap-3 mb-16">
                    <div class="w-10 h-10 rounded-xl bg-gradient-to-br from-teal-400 to-teal-600 flex items-center justify-center">
                        <i class="fas fa-network-wired text-white text-sm"></i>
                    </div>
                    <div>
                        <h1 class="text-xl font-bold text-white tracking-tight">El Paradiso</h1>
                        <p class="text-[10px] text-teal-400 tracking-[0.3em] uppercase font-semibold">Network</p>
                    </div>
                </div>
                <h2 class="text-5xl font-bold text-white mb-2 leading-tight">Real-time Insights.</h2>
                <h2 class="text-5xl font-bold neon-text-teal mb-6 leading-tight">On-chain Intelligence.</h2>
                <p class="text-slate-400 text-lg leading-relaxed max-w-md">
                    El Paradiso Network provides real-time blockchain metrics, analytics and network data you can trust. Built for transparency. Designed for the future.
                </p>
            </div>
            <div class="relative z-10 flex gap-10">
                <div>
                    <div class="flex items-center gap-2 mb-1">
                        <i class="fas fa-network-wired text-teal-400"></i>
                        <span class="text-2xl font-bold text-white">1,290</span>
                    </div>
                    <p class="text-slate-500 text-sm">Total Nodes</p>
                </div>
                <div>
                    <div class="flex items-center gap-2 mb-1">
                        <i class="fas fa-bolt text-teal-400"></i>
                        <span class="text-2xl font-bold text-white">4,903</span>
                    </div>
                    <p class="text-slate-500 text-sm">Network TPS</p>
                </div>
                <div>
                    <div class="flex items-center gap-2 mb-1">
                        <i class="fas fa-chart-bar text-teal-400"></i>
                        <span class="text-2xl font-bold text-white">$43.45M</span>
                    </div>
                    <p class="text-slate-500 text-sm">TVL (USD)</p>
                </div>
            </div>
        </div>
        
        <!-- Right Panel -->
        <div class="w-full lg:w-1/2 flex flex-col justify-center p-12 lg:p-16 relative">
            <div class="max-w-md mx-auto w-full">
                <h2 class="text-3xl font-bold text-white mb-2">Welcome Back</h2>
                <p class="text-slate-400 mb-10">Sign in to your El Paradiso account</p>
                
                <form id="loginForm" onsubmit="handleLogin(event)">
                    <div class="mb-6">
                        <label class="block text-sm font-medium text-slate-300 mb-2">Email Address</label>
                        <div class="relative">
                            <i class="fas fa-envelope absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"></i>
                            <input type="email" placeholder="you@example.com" class="w-full bg-dark-800 border border-white/10 rounded-xl py-3.5 pl-12 pr-4 text-white placeholder-slate-500 transition-all">
                        </div>
                    </div>
                    <div class="mb-6">
                        <label class="block text-sm font-medium text-slate-300 mb-2">Password</label>
                        <div class="relative">
                            <i class="fas fa-lock absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"></i>
                            <input type="password" id="loginPassword" placeholder="Enter your password" class="w-full bg-dark-800 border border-white/10 rounded-xl py-3.5 pl-12 pr-12 text-white placeholder-slate-500 transition-all">
                            <button type="button" onclick="togglePassword('loginPassword', this)" class="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 hover:text-white transition-colors">
                                <i class="fas fa-eye"></i>
                            </button>
                        </div>
                    </div>
                    <div class="flex items-center justify-between mb-8">
                        <label class="flex items-center gap-2 cursor-pointer">
                            <input type="checkbox" class="w-4 h-4 rounded border-white/20 bg-dark-800 text-teal-500 focus:ring-teal-500/20">
                            <span class="text-sm text-slate-400">Remember me</span>
                        </label>
                        <a href="#" class="text-sm text-teal-400 hover:text-teal-300 transition-colors">Forgot password?</a>
                    </div>
                    <button type="submit" class="w-full btn-teal text-white font-semibold py-3.5 rounded-xl mb-6">
                        Sign In
                    </button>
                </form>
                
                <div class="relative mb-6">
                    <div class="absolute inset-0 flex items-center">
                        <div class="w-full border-t border-white/10"></div>
                    </div>
                    <div class="relative flex justify-center">
                        <span class="bg-dark-700 px-4 text-sm text-slate-500">or</span>
                    </div>
                </div>
                
                <button class="w-full glass border border-white/10 text-white font-medium py-3.5 rounded-xl flex items-center justify-center gap-3 hover:bg-white/5 transition-all mb-8">
                    <i class="fab fa-github text-lg"></i>
                    Continue with GitHub
                </button>
                
                <p class="text-center text-slate-400 text-sm">
                    Don't have an account? 
                    <a href="#" onclick="showRegister()" class="text-teal-400 hover:text-teal-300 font-medium transition-colors">Create Account</a>
                </p>
            </div>
        </div>
    </div>
    <div class="absolute bottom-4 left-0 right-0 text-center">
        <p class="text-slate-600 text-xs">&copy; 2026 El Paradiso Network. All rights reserved. 
            <a href="#" class="text-teal-500/60 hover:text-teal-400 ml-2">Privacy Policy</a>
            <a href="#" class="text-teal-500/60 hover:text-teal-400 ml-2">Terms of Service</a>
        </p>
    </div>
</div>

<!-- ==================== DASHBOARD VIEW ==================== -->
<div id="dashboardView" class="hidden-view min-h-screen flex">
    <!-- Sidebar -->
    <aside id="sidebar" class="w-64 h-screen glass-strong border-r border-white/5 flex flex-col fixed left-0 top-0 z-50 transition-transform duration-300">
        <div class="p-5 flex items-center gap-3 border-b border-white/5">
            <div class="w-9 h-9 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                <i class="fas fa-gem text-white text-xs"></i>
            </div>
            <div>
                <h1 class="text-sm font-bold text-white tracking-wide">ELPARADISO</h1>
                <p class="text-[9px] text-slate-500 tracking-wider">GONZALO</p>
            </div>
        </div>
        
        <div class="flex-1 overflow-y-auto py-4">
            <div class="px-4 mb-2 text-[10px] font-semibold text-slate-600 uppercase tracking-wider">Command Navigation</div>
            <div class="sidebar-item active" onclick="setActive(this)">
                <i class="fas fa-home w-4 text-center"></i> Overview
            </div>
            <div class="sidebar-item" onclick="setActive(this)">
                <i class="fas fa-th w-4 text-center"></i> Apps
            </div>
            <div class="sidebar-item" onclick="setActive(this)">
                <i class="fas fa-server w-4 text-center"></i> Node Engines
            </div>
            <div class="sidebar-item" onclick="setActive(this)">
                <i class="fas fa-cubes w-4 text-center"></i> dApps
            </div>
            <div class="sidebar-item" onclick="setActive(this)">
                <i class="fas fa-chart-pie w-4 text-center"></i> DeFi
            </div>
            <div class="sidebar-item" onclick="setActive(this)">
                <i class="fas fa-briefcase w-4 text-center"></i> Portfolio
            </div>
            <div class="sidebar-item" onclick="setActive(this)">
                <i class="fas fa-coins w-4 text-center"></i> Assets
            </div>
            <div class="sidebar-item" onclick="setActive(this)">
                <i class="fas fa-image w-4 text-center"></i> NFTs
            </div>
            <div class="sidebar-item" onclick="setActive(this)">
                <i class="fas fa-store w-4 text-center"></i> Stores
            </div>
            <div class="sidebar-item" onclick="setActive(this)">
                <i class="fas fa-comments w-4 text-center"></i> Chats
            </div>
            <div class="sidebar-item" onclick="setActive(this)">
                <i class="fas fa-users w-4 text-center"></i> Community
            </div>
            <div class="sidebar-item" onclick="setActive(this)">
                <i class="fas fa-fingerprint w-4 text-center"></i> Identity
            </div>
            <div class="sidebar-item" onclick="setActive(this)">
                <i class="fas fa-wallet w-4 text-center"></i> Wallet
            </div>
            
            <div class="px-4 mt-4 mb-2 text-[10px] font-semibold text-slate-600 uppercase tracking-wider">Infrastructure</div>
            <div class="sidebar-item" onclick="setActive(this)">
                <i class="fab fa-ethereum w-4 text-center text-purple-400"></i> Ethereum
            </div>
            <div class="sidebar-item" onclick="setActive(this)">
                <i class="fas fa-link w-4 text-center text-yellow-400"></i> BNB Chain
            </div>
            <div class="sidebar-item" onclick="setActive(this)">
                <i class="fas fa-cube w-4 text-center text-blue-400"></i> IPFS / Kubo
            </div>
            <div class="sidebar-item" onclick="setActive(this)">
                <i class="fas fa-cloud w-4 text-center text-orange-400"></i> Cloudflare
            </div>
            <div class="sidebar-item" onclick="setActive(this)">
                <i class="fas fa-box w-4 text-center text-pink-400"></i> Packages
            </div>
            <div class="sidebar-item" onclick="setActive(this)">
                <i class="fas fa-rocket w-4 text-center text-cyan-400"></i> Releases
            </div>
            <div class="sidebar-item" onclick="setActive(this)">
                <i class="fas fa-file-contract w-4 text-center text-green-400"></i> Contracts
            </div>
            <div class="sidebar-item" onclick="setActive(this)">
                <i class="fas fa-chart-line w-4 text-center text-red-400"></i> Analytics
            </div>
            <div class="sidebar-item" onclick="setActive(this)">
                <i class="fas fa-cog w-4 text-center"></i> Settings
            </div>
        </div>
        
        <div class="p-4 border-t border-white/5">
            <div class="glass rounded-xl p-3">
                <div class="flex items-center gap-3 mb-2">
                    <div class="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                        <i class="fas fa-infinity text-white text-xs"></i>
                    </div>
                    <div>
                        <p class="text-xs font-bold text-white">$ELP</p>
                        <p class="text-[10px] text-emerald-400">$0.7132 <span class="text-emerald-500">+24.23%</span></p>
                    </div>
                </div>
                <div class="text-[10px] text-slate-500 font-mono">0x713a...elparadiso <i class="fas fa-check-circle text-emerald-500 ml-1"></i></div>
                <button class="w-full mt-2 py-1.5 rounded-lg bg-white/5 text-[11px] text-slate-300 hover:bg-white/10 transition-colors border border-white/5">
                    View on Explorer
                </button>
            </div>
        </div>
    </aside>
    
    <!-- Main Content -->
    <main class="flex-1 ml-64 min-h-screen">
        <!-- Top Header -->
        <header class="h-16 glass-strong border-b border-white/5 flex items-center justify-between px-6 sticky top-0 z-40">
            <div class="flex items-center gap-4">
                <button onclick="toggleSidebar()" class="lg:hidden w-9 h-9 rounded-lg glass flex items-center justify-center text-slate-400 hover:text-white">
                    <i class="fas fa-bars"></i>
                </button>
                <div class="relative">
                    <i class="fas fa-search absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 text-sm"></i>
                    <input type="text" placeholder="Search dApps, assets, contracts, wallets, people..." class="w-80 bg-dark-800 border border-white/10 rounded-xl py-2 pl-10 pr-4 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-purple-500/50 transition-all">
                </div>
            </div>
            <div class="flex items-center gap-4">
                <div class="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-lg glass text-xs text-slate-300">
                    <i class="fas fa-thermometer-half text-orange-400"></i>
                    <span>30 K</span>
                </div>
                <button class="flex items-center gap-2 px-3 py-1.5 rounded-lg glass text-xs text-slate-300 hover:bg-white/5 transition-colors">
                    <i class="fab fa-ethereum text-purple-400"></i>
                    <span>ETH Mainnet</span>
                    <i class="fas fa-chevron-down text-slate-500 text-[10px]"></i>
                </button>
                <button class="w-9 h-9 rounded-lg glass flex items-center justify-center text-slate-400 hover:text-white transition-colors relative">
                    <i class="fas fa-moon"></i>
                </button>
                <button class="w-9 h-9 rounded-lg glass flex items-center justify-center text-slate-400 hover:text-white transition-colors relative">
                    <i class="fas fa-bell"></i>
                    <span class="absolute top-1.5 right-2 w-2 h-2 bg-pink-500 rounded-full"></span>
                </button>
                <button class="btn-gradient text-white text-sm font-semibold px-5 py-2 rounded-xl flex items-center gap-2">
                    <i class="fas fa-wallet"></i>
                    Connect Wallet
                </button>
            </div>
        </header>
        
        <!-- Dashboard Content -->
        <div class="p-6 grid-bg">
            <!-- Hero Section -->
            <div class="glass rounded-2xl p-8 mb-6 relative overflow-hidden">
                <div class="absolute top-0 right-0 w-96 h-96 opacity-30">
                    <div class="crystal absolute top-10 right-20">
                        <div class="crystal-glow"></div>
                    </div>
                    <div class="orbit w-64 h-64 top-20 right-10"></div>
                    <div class="orbit w-80 h-80 top-10 right-0" style="animation-duration: 30s; animation-direction: reverse;"></div>
                </div>
                <div class="relative z-10 max-w-2xl">
                    <h2 class="text-sm text-slate-400 mb-2 tracking-wider uppercase">Welcome Home,</h2>
                    <h1 class="text-5xl font-bold neon-text mb-4 font-display">ELPARADISOGONZALO</h1>
                    <p class="text-slate-400 text-lg mb-6">Your decentralized universe. Everything you build, own and connect — in one place.</p>
                    <div class="flex flex-wrap gap-3 mb-8">
                        <div class="flex items-center gap-2 px-4 py-2 rounded-lg glass text-xs text-slate-300">
                            <i class="fas fa-shield-alt text-purple-400"></i> Decentralized — You own your data
                        </div>
                        <div class="flex items-center gap-2 px-4 py-2 rounded-lg glass text-xs text-slate-300">
                            <i class="fas fa-code text-cyan-400"></i> Open Source — Transparent & Verifiable
                        </div>
                        <div class="flex items-center gap-2 px-4 py-2 rounded-lg glass text-xs text-slate-300">
                            <i class="fas fa-rocket text-pink-400"></i> Built for the Future — Scalable. Secure. Limitless.
                        </div>
                    </div>
                    <div class="flex gap-4 mb-8">
                        <button class="btn-gradient text-white font-semibold px-6 py-3 rounded-xl flex items-center gap-2">
                            Explore Ecosystem <i class="fas fa-arrow-right"></i>
                        </button>
                        <button class="glass text-white font-medium px-6 py-3 rounded-xl flex items-center gap-2 hover:bg-white/5 transition-colors border border-white/10">
                            <i class="fas fa-book"></i> View Documentation
                        </button>
                    </div>
                    <div class="flex gap-10">
                        <div>
                            <p class="text-3xl font-bold text-white">16+</p>
                            <p class="text-xs text-slate-500 uppercase tracking-wider">Projects</p>
                        </div>
                        <div>
                            <p class="text-3xl font-bold text-white">8</p>
                            <p class="text-xs text-slate-500 uppercase tracking-wider">Chains</p>
                        </div>
                        <div>
                            <p class="text-3xl font-bold text-white">40+</p>
                            <p class="text-xs text-slate-500 uppercase tracking-wider">Modules</p>
                        </div>
                        <div>
                            <p class="text-3xl font-bold neon-text">∞</p>
                            <p class="text-xs text-slate-500 uppercase tracking-wider">Possibilities</p>
                        </div>
                    </div>
                </div>
            </div>
            
            <!-- Announcement Bar -->
            <div class="flex items-center gap-4 mb-6 overflow-x-auto pb-2">
                <div class="flex items-center gap-2 px-4 py-2 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-xs whitespace-nowrap">
                    <span class="live-dot"></span>
                    <span class="text-emerald-400 font-semibold">LIVE</span>
                    <span class="text-slate-400">ELP Staking v2 is live</span>
                    <span class="text-slate-600">2h ago</span>
                </div>
                <div class="flex items-center gap-2 px-4 py-2 rounded-lg glass text-xs whitespace-nowrap">
                    <i class="fas fa-leaf text-green-400"></i>
                    <span class="text-slate-300">New DeFi Pools Added</span>
                    <span class="text-slate-600">6h ago</span>
                </div>
                <div class="flex items-center gap-2 px-4 py-2 rounded-lg glass text-xs whitespace-nowrap">
                    <i class="fas fa-check-circle text-purple-400"></i>
                    <span class="text-slate-300">ELP Token Upgrade Completed</span>
                    <span class="text-slate-600">12h ago</span>
                </div>
                <div class="flex items-center gap-2 px-4 py-2 rounded-lg glass text-xs whitespace-nowrap">
                    <i class="fas fa-code-branch text-cyan-400"></i>
                    <span class="text-slate-300">v2.3.0 Release Deployed</span>
                    <span class="text-slate-600">1d ago</span>
                </div>
                <a href="#" class="text-xs text-purple-400 hover:text-purple-300 whitespace-nowrap ml-auto">View all announcements →</a>
            </div>

            <!-- Main Grid -->
            <div class="grid grid-cols-1 xl:grid-cols-4 gap-6 mb-6">
                <!-- Portfolio Overview -->
                <div class="xl:col-span-1 glass rounded-2xl p-5">
                    <div class="flex items-center justify-between mb-4">
                        <h3 class="text-sm font-semibold text-white flex items-center gap-2">
                            <i class="fas fa-eye text-purple-400"></i> Portfolio Overview
                        </h3>
                        <div class="flex gap-1">
                            <button class="px-2 py-1 rounded text-[10px] bg-purple-500/20 text-purple-300">24H</button>
                            <button class="px-2 py-1 rounded text-[10px] text-slate-500 hover:text-slate-300">7D</button>
                            <button class="px-2 py-1 rounded text-[10px] text-slate-500 hover:text-slate-300">30D</button>
                            <button class="px-2 py-1 rounded text-[10px] text-slate-500 hover:text-slate-300">ALL</button>
                        </div>
                    </div>
                    <p class="text-xs text-slate-500 mb-1">Total Portfolio Value</p>
                    <p class="text-2xl font-bold text-white mb-1">$ --,---.--</p>
                    <p class="text-xs text-emerald-400 mb-4">--% (24H)</p>
                    <canvas id="portfolioChart" height="120"></canvas>
                    <div class="grid grid-cols-3 gap-2 mt-4">
                        <div class="text-center">
                            <p class="text-[10px] text-slate-500">Holdings</p>
                            <p class="text-sm font-bold text-white">--</p>
                        </div>
                        <div class="text-center">
                            <p class="text-[10px] text-slate-500">P/L (24H)</p>
                            <p class="text-sm font-bold text-emerald-400">--%</p>
                        </div>
                        <div class="text-center">
                            <p class="text-[10px] text-slate-500">P/L (All)</p>
                            <p class="text-sm font-bold text-white">--%</p>
                        </div>
                    </div>
                </div>
                
                <!-- Asset Allocation -->
                <div class="xl:col-span-1 glass rounded-2xl p-5">
                    <h3 class="text-sm font-semibold text-white mb-4 flex items-center gap-2">
                        <i class="fas fa-chart-pie text-cyan-400"></i> Asset Allocation
                    </h3>
                    <div class="relative w-40 h-40 mx-auto mb-4">
                        <canvas id="allocationChart"></canvas>
                        <div class="absolute inset-0 flex items-center justify-center">
                            <div class="text-center">
                                <p class="text-xs text-slate-500">TOTAL</p>
                                <p class="text-lg font-bold text-white">--%</p>
                            </div>
                        </div>
                    </div>
                    <div class="space-y-2">
                        <div class="flex items-center justify-between text-xs">
                            <div class="flex items-center gap-2"><span class="w-2 h-2 rounded-full bg-purple-500"></span><span class="text-slate-400">Tokens</span></div>
                            <span class="text-white font-semibold">--%</span>
                        </div>
                        <div class="flex items-center justify-between text-xs">
                            <div class="flex items-center gap-2"><span class="w-2 h-2 rounded-full bg-pink-500"></span><span class="text-slate-400">DeFi</span></div>
                            <span class="text-white font-semibold">--%</span>
                        </div>
                        <div class="flex items-center justify-between text-xs">
                            <div class="flex items-center gap-2"><span class="w-2 h-2 rounded-full bg-cyan-500"></span><span class="text-slate-400">NFTs</span></div>
                            <span class="text-white font-semibold">--%</span>
                        </div>
                        <div class="flex items-center justify-between text-xs">
                            <div class="flex items-center gap-2"><span class="w-2 h-2 rounded-full bg-orange-500"></span><span class="text-slate-400">Stablecoins</span></div>
                            <span class="text-white font-semibold">--%</span>
                        </div>
                        <div class="flex items-center justify-between text-xs">
                            <div class="flex items-center gap-2"><span class="w-2 h-2 rounded-full bg-blue-500"></span><span class="text-slate-400">Cash</span></div>
                            <span class="text-white font-semibold">--%</span>
                        </div>
                    </div>
                </div>
                
                <!-- Portfolio Performance -->
                <div class="xl:col-span-1 glass rounded-2xl p-5">
                    <div class="flex items-center justify-between mb-4">
                        <h3 class="text-sm font-semibold text-white flex items-center gap-2">
                            <i class="fas fa-chart-line text-pink-400"></i> Portfolio Performance
                        </h3>
                        <select class="bg-dark-800 border border-white/10 rounded-lg text-xs text-slate-300 px-2 py-1">
                            <option>All Time</option>
                        </select>
                    </div>
                    <canvas id="performanceChart" height="140"></canvas>
                    <div class="grid grid-cols-4 gap-2 mt-4">
                        <div class="text-center">
                            <p class="text-[10px] text-slate-500">Best Day</p>
                            <p class="text-xs font-bold text-emerald-400">--%</p>
                        </div>
                        <div class="text-center">
                            <p class="text-[10px] text-slate-500">Worst Day</p>
                            <p class="text-xs font-bold text-red-400">--%</p>
                        </div>
                        <div class="text-center">
                            <p class="text-[10px] text-slate-500">Win Rate</p>
                            <p class="text-xs font-bold text-white">--%</p>
                        </div>
                        <div class="text-center">
                            <p class="text-[10px] text-slate-500">Profit Factor</p>
                            <p class="text-xs font-bold text-white">--</p>
                        </div>
                    </div>
                </div>
                
                <!-- Right Column -->
                <div class="xl:col-span-1 space-y-4">
                    <!-- Ecosystem Status -->
                    <div class="glass rounded-2xl p-5">
                        <div class="flex items-center justify-between mb-4">
                            <h3 class="text-sm font-semibold text-white">Ecosystem Status</h3>
                            <div class="flex items-center gap-2">
                                <span class="live-dot"></span>
                                <span class="text-xs text-emerald-400">All Systems Operational</span>
                            </div>
                        </div>
                        <div class="flex gap-3 mb-4 overflow-x-auto">
                            <div class="flex flex-col items-center gap-1 min-w-[50px]">
                                <div class="w-8 h-8 rounded-lg bg-purple-500/20 flex items-center justify-center"><i class="fab fa-ethereum text-purple-400 text-xs"></i></div>
                                <span class="text-[9px] text-slate-500">Ethereum</span>
                            </div>
                            <div class="flex flex-col items-center gap-1 min-w-[50px]">
                                <div class="w-8 h-8 rounded-lg bg-yellow-500/20 flex items-center justify-center"><i class="fas fa-link text-yellow-400 text-xs"></i></div>
                                <span class="text-[9px] text-slate-500">BNB Chain</span>
                            </div>
                            <div class="flex flex-col items-center gap-1 min-w-[50px]">
                                <div class="w-8 h-8 rounded-lg bg-purple-500/20 flex items-center justify-center"><i class="fas fa-draw-polygon text-purple-400 text-xs"></i></div>
                                <span class="text-[9px] text-slate-500">Polygon</span>
                            </div>
                            <div class="flex flex-col items-center gap-1 min-w-[50px]">
                                <div class="w-8 h-8 rounded-lg bg-red-500/20 flex items-center justify-center"><i class="fas fa-layer-group text-red-400 text-xs"></i></div>
                                <span class="text-[9px] text-slate-500">OP Stack</span>
                            </div>
                            <div class="flex flex-col items-center gap-1 min-w-[50px]">
                                <div class="w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center"><i class="fas fa-cube text-blue-400 text-xs"></i></div>
                                <span class="text-[9px] text-slate-500">Arbitrum</span>
                            </div>
                            <div class="flex flex-col items-center gap-1 min-w-[50px]">
                                <div class="w-8 h-8 rounded-lg bg-green-500/20 flex items-center justify-center"><i class="fas fa-sun text-green-400 text-xs"></i></div>
                                <span class="text-[9px] text-slate-500">Solana</span>
                            </div>
                        </div>
                        <div class="space-y-2">
                            <div class="flex justify-between text-xs">
                                <span class="text-slate-400">Smart Contracts</span>
                                <span class="text-white font-semibold">42 <span class="text-slate-500">+ Deployed</span></span>
                            </div>
                            <div class="flex justify-between text-xs">
                                <span class="text-slate-400">dApps</span>
                                <span class="text-white font-semibold">12 <span class="text-slate-500">+ Live</span></span>
                            </div>
                            <div class="flex justify-between text-xs">
                                <span class="text-slate-400">IPFS Objects</span>
                                <span class="text-white font-semibold">1,248 <span class="text-slate-500">Pinned</span></span>
                            </div>
                            <div class="flex justify-between text-xs">
                                <span class="text-slate-400">Community Members</span>
                                <span class="text-white font-semibold">3,256 <span class="text-slate-500">Active</span></span>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Watchlist -->
                    <div class="glass rounded-2xl p-5">
                        <div class="flex items-center justify-between mb-3">
                            <h3 class="text-sm font-semibold text-white">Watchlist</h3>
                            <button class="text-[10px] text-purple-400 hover:text-purple-300">Manage</button>
                        </div>
                        <div class="space-y-2">
                            <div class="flex items-center justify-between p-2 rounded-lg hover:bg-white/5 transition-colors cursor-pointer">
                                <div class="flex items-center gap-2">
                                    <i class="fab fa-ethereum text-purple-400"></i>
                                    <div>
                                        <p class="text-xs font-semibold text-white">ETH</p>
                                        <p class="text-[10px] text-slate-500">Ethereum</p>
                                    </div>
                                </div>
                                <span class="text-xs text-white">--%</span>
                            </div>
                            <div class="flex items-center justify-between p-2 rounded-lg hover:bg-white/5 transition-colors cursor-pointer">
                                <div class="flex items-center gap-2">
                                    <i class="fab fa-bitcoin text-yellow-400"></i>
                                    <div>
                                        <p class="text-xs font-semibold text-white">BNB</p>
                                        <p class="text-[10px] text-slate-500">BNB Chain</p>
                                    </div>
                                </div>
                                <span class="text-xs text-white">--%</span>
                            </div>
                            <div class="flex items-center justify-between p-2 rounded-lg hover:bg-white/5 transition-colors cursor-pointer">
                                <div class="flex items-center gap-2">
                                    <i class="fas fa-sun text-green-400"></i>
                                    <div>
                                        <p class="text-xs font-semibold text-white">SOL</p>
                                        <p class="text-[10px] text-slate-500">Solana</p>
                                    </div>
                                </div>
                                <span class="text-xs text-white">--%</span>
                            </div>
                            <div class="flex items-center justify-between p-2 rounded-lg hover:bg-white/5 transition-colors cursor-pointer">
                                <div class="flex items-center gap-2">
                                    <i class="fas fa-draw-polygon text-purple-400"></i>
                                    <div>
                                        <p class="text-xs font-semibold text-white">MATIC</p>
                                        <p class="text-[10px] text-slate-500">Polygon</p>
                                    </div>
                                </div>
                                <span class="text-xs text-white">--%</span>
                            </div>
                            <div class="flex items-center justify-between p-2 rounded-lg hover:bg-white/5 transition-colors cursor-pointer">
                                <div class="flex items-center gap-2">
                                    <i class="fas fa-infinity text-pink-400"></i>
                                    <div>
                                        <p class="text-xs font-semibold text-white">ELP</p>
                                        <p class="text-[10px] text-slate-500">ELP Token</p>
                                    </div>
                                </div>
                                <span class="text-xs text-white">--%</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Middle Grid -->
            <div class="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-5 gap-4 mb-6">
                <!-- My Wallet -->
                <div class="glass rounded-2xl p-5">
                    <h3 class="text-sm font-semibold text-white mb-3">My Wallet</h3>
                    <div class="flex items-center gap-3 mb-4">
                        <div class="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-400 to-yellow-500 flex items-center justify-center">
                            <i class="fas fa-wallet text-white"></i>
                        </div>
                        <div>
                            <p class="text-xs text-slate-400">Web3</p>
                            <p class="text-sm font-semibold text-white">Non-Custodial</p>
                        </div>
                    </div>
                    <button class="w-full py-2 rounded-lg bg-purple-500/20 text-purple-300 text-xs font-semibold hover:bg-purple-500/30 transition-colors">
                        Connect
                    </button>
                </div>
                
                <!-- My Domains -->
                <div class="glass rounded-2xl p-5">
                    <h3 class="text-sm font-semibold text-white mb-3">My Domains</h3>
                    <div class="space-y-2 mb-4">
                        <div class="flex items-center gap-2 text-xs text-slate-300">
                            <i class="fas fa-globe text-purple-400"></i> elparadisogonzalo.com
                        </div>
                        <div class="flex items-center gap-2 text-xs text-slate-300">
                            <i class="fas fa-globe text-cyan-400"></i> elparadisogonzalo.net
                        </div>
                    </div>
                    <button class="w-full py-2 rounded-lg bg-cyan-500/20 text-cyan-300 text-xs font-semibold hover:bg-cyan-500/30 transition-colors">
                        Manage Domains
                    </button>
                </div>
                
                <!-- Identity & Signing -->
                <div class="glass rounded-2xl p-5">
                    <h3 class="text-sm font-semibold text-white mb-3">Identity & Signing</h3>
                    <div class="flex items-center gap-3 mb-3">
                        <div class="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                            <i class="fas fa-fingerprint text-white text-sm"></i>
                        </div>
                        <div>
                            <p class="text-[10px] text-slate-400">SHA256 Fingerprint</p>
                            <p class="text-[10px] font-mono text-slate-500">bdf3 d123 f98f aa07</p>
                        </div>
                    </div>
                    <button class="w-full py-2 rounded-lg bg-pink-500/20 text-pink-300 text-xs font-semibold hover:bg-pink-500/30 transition-colors">
                        View Identity
                    </button>
                </div>
                
                <!-- Security Center -->
                <div class="glass rounded-2xl p-5">
                    <h3 class="text-sm font-semibold text-white mb-3">Security Center</h3>
                    <div class="flex items-center gap-3 mb-3">
                        <div class="w-10 h-10 rounded-lg bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center">
                            <i class="fas fa-shield-alt text-white text-sm"></i>
                        </div>
                        <div>
                            <p class="text-xs text-emerald-400 font-semibold">Active & Valid</p>
                            <p class="text-[10px] text-slate-500">Certificates & SSL</p>
                        </div>
                    </div>
                    <button class="w-full py-2 rounded-lg bg-emerald-500/20 text-emerald-300 text-xs font-semibold hover:bg-emerald-500/30 transition-colors">
                        View Certs
                    </button>
                </div>
                
                <!-- Live Network -->
                <div class="glass rounded-2xl p-5">
                    <div class="flex items-center justify-between mb-3">
                        <h3 class="text-sm font-semibold text-white">Live Network</h3>
                        <span class="live-dot"></span>
                    </div>
                    <div class="space-y-2">
                        <div class="flex justify-between text-xs">
                            <span class="text-slate-400">Active Nodes</span>
                            <span class="text-white font-semibold">128</span>
                        </div>
                        <div class="flex justify-between text-xs">
                            <span class="text-slate-400">TPS</span>
                            <span class="text-white font-semibold">1,248</span>
                        </div>
                        <div class="flex justify-between text-xs">
                            <span class="text-slate-400">Block Height</span>
                            <span class="text-white font-semibold">19,876,543</span>
                        </div>
                    </div>
                    <div class="mt-3 h-8 flex items-end gap-1">
                        <div class="flex-1 bg-purple-500/40 rounded-sm" style="height: 40%"></div>
                        <div class="flex-1 bg-purple-500/50 rounded-sm" style="height: 70%"></div>
                        <div class="flex-1 bg-purple-500/60 rounded-sm" style="height: 50%"></div>
                        <div class="flex-1 bg-purple-500/70 rounded-sm" style="height: 90%"></div>
                        <div class="flex-1 bg-purple-500/80 rounded-sm" style="height: 60%"></div>
                        <div class="flex-1 bg-cyan-500/60 rounded-sm" style="height: 80%"></div>
                        <div class="flex-1 bg-cyan-500/70 rounded-sm" style="height: 45%"></div>
                    </div>
                </div>
            </div>
            
            <!-- Data Tables Grid -->
            <div class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-5 gap-4 mb-6">
                <!-- Assets & Holdings -->
                <div class="glass rounded-2xl p-5">
                    <h3 class="text-sm font-semibold text-white mb-3 flex items-center gap-2">
                        <i class="fas fa-coins text-purple-400"></i> Assets & Holdings
                    </h3>
                    <div class="space-y-2">
                        <div class="flex items-center justify-between p-2 rounded-lg hover:bg-white/5 cursor-pointer group">
                            <div class="flex items-center gap-2">
                                <i class="fas fa-coins text-yellow-400 text-xs"></i>
                                <span class="text-xs text-slate-300">Tokens</span>
                            </div>
                            <div class="flex items-center gap-2">
                                <span class="text-xs text-white">--</span>
                                <i class="fas fa-arrow-right text-slate-600 group-hover:text-purple-400 text-[10px]"></i>
                            </div>
                        </div>
                        <div class="flex items-center justify-between p-2 rounded-lg hover:bg-white/5 cursor-pointer group">
                            <div class="flex items-center gap-2">
                                <i class="fas fa-image text-pink-400 text-xs"></i>
                                <span class="text-xs text-slate-300">NFTs</span>
                            </div>
                            <div class="flex items-center gap-2">
                                <span class="text-xs text-white">--</span>
                                <i class="fas fa-arrow-right text-slate-600 group-hover:text-purple-400 text-[10px]"></i>
                            </div>
                        </div>
                        <div class="flex items-center justify-between p-2 rounded-lg hover:bg-white/5 cursor-pointer group">
                            <div class="flex items-center gap-2">
                                <i class="fas fa-gem text-cyan-400 text-xs"></i>
                                <span class="text-xs text-slate-300">Collectibles</span>
                            </div>
                            <div class="flex items-center gap-2">
                                <span class="text-xs text-white">--</span>
                                <i class="fas fa-arrow-right text-slate-600 group-hover:text-purple-400 text-[10px]"></i>
                            </div>
                        </div>
                        <div class="flex items-center justify-between p-2 rounded-lg hover:bg-white/5 cursor-pointer group">
                            <div class="flex items-center gap-2">
                                <i class="fas fa-building text-orange-400 text-xs"></i>
                                <span class="text-xs text-slate-300">Physical Assets</span>
                            </div>
                            <div class="flex items-center gap-2">
                                <span class="text-xs text-white">--</span>
                                <i class="fas fa-arrow-right text-slate-600 group-hover:text-purple-400 text-[10px]"></i>
                            </div>
                        </div>
                    </div>
                </div>
                
                <!-- DeFi Positions -->
                <div class="glass rounded-2xl p-5">
                    <h3 class="text-sm font-semibold text-white mb-3 flex items-center gap-2">
                        <i class="fas fa-chart-pie text-pink-400"></i> DeFi Positions
                    </h3>
                    <div class="space-y-2">
                        <div class="flex items-center justify-between p-2 rounded-lg hover:bg-white/5 cursor-pointer">
                            <div class="flex items-center gap-2">
                                <i class="fas fa-lock text-purple-400 text-xs"></i>
                                <span class="text-xs text-slate-300">Staking</span>
                            </div>
                            <span class="text-xs text-emerald-400">--% APY</span>
                        </div>
                        <div class="flex items-center justify-between p-2 rounded-lg hover:bg-white/5 cursor-pointer">
                            <div class="flex items-center gap-2">
                                <i class="fas fa-water text-cyan-400 text-xs"></i>
                                <span class="text-xs text-slate-300">Liquidity Pools</span>
                            </div>
                            <span class="text-xs text-emerald-400">--% APY</span>
                        </div>
                        <div class="flex items-center justify-between p-2 rounded-lg hover:bg-white/5 cursor-pointer">
                            <div class="flex items-center gap-2">
                                <i class="fas fa-tractor text-green-400 text-xs"></i>
                                <span class="text-xs text-slate-300">Farms</span>
                            </div>
                            <span class="text-xs text-emerald-400">--% APY</span>
                        </div>
                        <div class="flex items-center justify-between p-2 rounded-lg hover:bg-white/5 cursor-pointer">
                            <div class="flex items-center gap-2">
                                <i class="fas fa-hand-holding-usd text-yellow-400 text-xs"></i>
                                <span class="text-xs text-slate-300">Lending</span>
                            </div>
                            <span class="text-xs text-emerald-400">--% APY</span>
                        </div>
                    </div>
                </div>
                
                <!-- Transactions -->
                <div class="glass rounded-2xl p-5">
                    <div class="flex items-center justify-between mb-3">
                        <h3 class="text-sm font-semibold text-white flex items-center gap-2">
                            <i class="fas fa-exchange-alt text-cyan-400"></i> Transactions
                        </h3>
                        <button class="text-[10px] text-purple-400 hover:text-purple-300">View All</button>
                    </div>
                    <div class="space-y-2">
                        <div class="flex items-center justify-between p-2 rounded-lg hover:bg-white/5 cursor-pointer">
                            <div class="flex items-center gap-2">
                                <div class="w-6 h-6 rounded bg-purple-500/20 flex items-center justify-center"><i class="fas fa-sync text-purple-400 text-[10px]"></i></div>
                                <div>
                                    <p class="text-xs text-white">Swap</p>
                                    <p class="text-[10px] text-slate-500 font-mono">0x1a3b...c4d5</p>
                                </div>
                            </div>
                            <span class="text-[10px] text-slate-500">2m ago</span>
                        </div>
                        <div class="flex items-center justify-between p-2 rounded-lg hover:bg-white/5 cursor-pointer">
                            <div class="flex items-center gap-2">
                                <div class="w-6 h-6 rounded bg-cyan-500/20 flex items-center justify-center"><i class="fas fa-coins text-cyan-400 text-[10px]"></i></div>
                                <div>
                                    <p class="text-xs text-white">Stake</p>
                                    <p class="text-[10px] text-slate-500 font-mono">0x8f7a...b1e9</p>
                                </div>
                            </div>
                            <span class="text-[10px] text-slate-500">12m ago</span>
                        </div>
                        <div class="flex items-center justify-between p-2 rounded-lg hover:bg-white/5 cursor-pointer">
                            <div class="flex items-center gap-2">
                                <div class="w-6 h-6 rounded bg-emerald-500/20 flex items-center justify-center"><i class="fas fa-gift text-emerald-400 text-[10px]"></i></div>
                                <div>
                                    <p class="text-xs text-white">Claim</p>
                                    <p class="text-[10px] text-slate-500 font-mono">0x2c9f...d7a2</p>
                                </div>
                            </div>
                            <span class="text-[10px] text-slate-500">31m ago</span>
                        </div>
                        <div class="flex items-center justify-between p-2 rounded-lg hover:bg-white/5 cursor-pointer">
                            <div class="flex items-center gap-2">
                                <div class="w-6 h-6 rounded bg-blue-500/20 flex items-center justify-center"><i class="fas fa-paper-plane text-blue-400 text-[10px]"></i></div>
                                <div>
                                    <p class="text-xs text-white">Send</p>
                                    <p class="text-[10px] text-slate-500 font-mono">0x9e3b...f1c6</p>
                                </div>
                            </div>
                            <span class="text-[10px] text-slate-500">1h ago</span>
                        </div>
                        <div class="flex items-center justify-between p-2 rounded-lg hover:bg-white/5 cursor-pointer">
                            <div class="flex items-center gap-2">
                                <div class="w-6 h-6 rounded bg-pink-500/20 flex items-center justify-center"><i class="fas fa-plus text-pink-400 text-[10px]"></i></div>
                                <div>
                                    <p class="text-xs text-white">Add Liquidity</p>
                                    <p class="text-[10px] text-slate-500 font-mono">0x7d4e...a9b3</p>
                                </div>
                            </div>
                            <span class="text-[10px] text-slate-500">2h ago</span>
                        </div>
                    </div>
                </div>
                
                <!-- Gas & Fees -->
                <div class="glass rounded-2xl p-5">
                    <div class="flex items-center justify-between mb-3">
                        <h3 class="text-sm font-semibold text-white flex items-center gap-2">
                            <i class="fas fa-fire text-orange-400"></i> Gas & Fees
                        </h3>
                        <span class="text-[10px] text-slate-500">24H</span>
                    </div>
                    <div class="text-center mb-4">
                        <p class="text-xs text-slate-500 mb-1">Total Spent</p>
                        <p class="text-2xl font-bold text-white">--</p>
                    </div>
                    <div class="flex justify-center mb-4">
                        <div class="w-16 h-16 rounded-full bg-gradient-to-br from-orange-400 to-red-500 flex items-center justify-center glow-purple">
                            <i class="fas fa-fire text-white text-xl"></i>
                        </div>
                    </div>
                    <div class="space-y-2">
                        <div class="flex justify-between text-xs">
                            <span class="text-slate-400">Average Gas</span>
                            <span class="text-white">-- Gwei</span>
                        </div>
                        <div class="flex justify-between text-xs">
                            <span class="text-slate-400">Total Tx</span>
                            <span class="text-white">--</span>
                        </div>
                    </div>
                </div>
                
                <!-- Contract Activity -->
                <div class="glass rounded-2xl p-5">
                    <div class="flex items-center justify-between mb-3">
                        <h3 class="text-sm font-semibold text-white flex items-center gap-2">
                            <i class="fas fa-file-contract text-green-400"></i> Contract Activity
                        </h3>
                        <button class="text-[10px] text-purple-400 hover:text-purple-300">View All</button>
                    </div>
                    <div class="space-y-2">
                        <div class="flex items-center gap-2 p-2 rounded-lg hover:bg-white/5 cursor-pointer">
                            <div class="w-2 h-2 rounded-full bg-emerald-400"></div>
                            <div class="flex-1">
                                <p class="text-xs text-white">Contract Deployed</p>
                                <p class="text-[10px] text-slate-500">2h ago</p>
                            </div>
                        </div>
                        <div class="flex items-center gap-2 p-2 rounded-lg hover:bg-white/5 cursor-pointer">
                            <div class="w-2 h-2 rounded-full bg-purple-400"></div>
                            <div class="flex-1">
                                <p class="text-xs text-white">New Pool Created</p>
                                <p class="text-[10px] text-slate-500">3h ago</p>
                            </div>
                        </div>
                        <div class="flex items-center gap-2 p-2 rounded-lg hover:bg-white/5 cursor-pointer">
                            <div class="w-2 h-2 rounded-full bg-pink-400"></div>
                            <div class="flex-1">
                                <p class="text-xs text-white">NFT Minted</p>
                                <p class="text-[10px] text-slate-500">5h ago</p>
                            </div>

          <!-- Category Cards -->
            <div class="grid grid-cols-2 md:grid-cols-5 lg:grid-cols-10 gap-3 mb-6">
                <div class="category-card glass rounded-xl p-4 text-center cursor-pointer border border-white/5">
                    <div class="w-10 h-10 mx-auto mb-2 rounded-lg bg-purple-500/20 flex items-center justify-center">
                        <i class="fas fa-th text-purple-400"></i>
                    </div>
                    <p class="text-xs font-semibold text-white mb-0.5">Apps</p>
                    <p class="text-[9px] text-slate-500">Web & Mobile</p>
                    <p class="text-[10px] text-purple-400 mt-2">Explore →</p>
                </div>
                <div class="category-card glass rounded-xl p-4 text-center cursor-pointer border border-white/5">
                    <div class="w-10 h-10 mx-auto mb-2 rounded-lg bg-cyan-500/20 flex items-center justify-center">
                        <i class="fas fa-cubes text-cyan-400"></i>
                    </div>
                    <p class="text-xs font-semibold text-white mb-0.5">dApps</p>
                    <p class="text-[9px] text-slate-500">Decentralized</p>
                    <p class="text-[10px] text-cyan-400 mt-2">Launch →</p>
                </div>
                <div class="category-card glass rounded-xl p-4 text-center cursor-pointer border border-white/5">
                    <div class="w-10 h-10 mx-auto mb-2 rounded-lg bg-pink-500/20 flex items-center justify-center">
                        <i class="fas fa-chart-pie text-pink-400"></i>
                    </div>
                    <p class="text-xs font-semibold text-white mb-0.5">DeFi</p>
                    <p class="text-[9px] text-slate-500">Earn & Grow</p>
                    <p class="text-[10px] text-pink-400 mt-2">Explore →</p>
                </div>
                <div class="category-card glass rounded-xl p-4 text-center cursor-pointer border border-white/5">
                    <div class="w-10 h-10 mx-auto mb-2 rounded-lg bg-orange-500/20 flex items-center justify-center">
                        <i class="fas fa-store text-orange-400"></i>
                    </div>
                    <p class="text-xs font-semibold text-white mb-0.5">Stores</p>
                    <p class="text-[9px] text-slate-500">Digital Goods</p>
                    <p class="text-[10px] text-orange-400 mt-2">Visit →</p>
                </div>
                <div class="category-card glass rounded-xl p-4 text-center cursor-pointer border border-white/5">
                    <div class="w-10 h-10 mx-auto mb-2 rounded-lg bg-blue-500/20 flex items-center justify-center">
                        <i class="fas fa-comments text-blue-400"></i>
                    </div>
                    <p class="text-xs font-semibold text-white mb-0.5">Chats</p>
                    <p class="text-[9px] text-slate-500">Real-time</p>
                    <p class="text-[10px] text-blue-400 mt-2">Join →</p>
                </div>
                <div class="category-card glass rounded-xl p-4 text-center cursor-pointer border border-white/5">
                    <div class="w-10 h-10 mx-auto mb-2 rounded-lg bg-green-500/20 flex items-center justify-center">
                        <i class="fas fa-server text-green-400"></i>
                    </div>
                    <p class="text-xs font-semibold text-white mb-0.5">Node Engines</p>
                    <p class="text-[9px] text-slate-500">Run & Scale</p>
                    <p class="text-[10px] text-green-400 mt-2">Manage →</p>
                </div>
                <div class="category-card glass rounded-xl p-4 text-center cursor-pointer border border-white/5">
                    <div class="w-10 h-10 mx-auto mb-2 rounded-lg bg-indigo-500/20 flex items-center justify-center">
                        <i class="fas fa-cube text-indigo-400"></i>
                    </div>
                    <p class="text-xs font-semibold text-white mb-0.5">IPFS / Kubo</p>
                    <p class="text-[9px] text-slate-500">Decentralized Storage</p>
                    <p class="text-[10px] text-indigo-400 mt-2">Open →</p>
                </div>
                <div class="category-card glass rounded-xl p-4 text-center cursor-pointer border border-white/5">
                    <div class="w-10 h-10 mx-auto mb-2 rounded-lg bg-yellow-500/20 flex items-center justify-center">
                        <i class="fas fa-cloud text-yellow-400"></i>
                    </div>
                    <p class="text-xs font-semibold text-white mb-0.5">Cloudflare</p>
                    <p class="text-[9px] text-slate-500">Edge & Security</p>
                    <p class="text-[10px] text-yellow-400 mt-2">Manage →</p>
                </div>
                <div class="category-card glass rounded-xl p-4 text-center cursor-pointer border border-white/5">
                    <div class="w-10 h-10 mx-auto mb-2 rounded-lg bg-red-500/20 flex items-center justify-center">
                        <i class="fas fa-box text-red-400"></i>
                    </div>
                    <p class="text-xs font-semibold text-white mb-0.5">Packages</p>
                    <p class="text-[9px] text-slate-500">NPM / Packages</p>
                    <p class="text-[10px] text-red-400 mt-2">Browse →</p>
                </div>
                <div class="category-card glass rounded-xl p-4 text-center cursor-pointer border border-white/5">
                    <div class="w-10 h-10 mx-auto mb-2 rounded-lg bg-teal-500/20 flex items-center justify-center">
                        <i class="fas fa-rocket text-teal-400"></i>
                    </div>
                    <p class="text-xs font-semibold text-white mb-0.5">Releases</p>
                    <p class="text-[9px] text-slate-500">v2.3.0 Latest</p>
                    <p class="text-[10px] text-teal-400 mt-2">View →</p>
                </div>
            </div>
            
            <!-- Bottom Section -->
            <div class="grid grid-cols-1 lg:grid-cols-4 gap-4 mb-6">
                <!-- Ecosystem Search -->
                <div class="glass rounded-2xl p-5">
                    <h3 class="text-sm font-semibold text-white mb-3">Ecosystem Search</h3>
                    <div class="relative mb-3">
                        <i class="fas fa-search absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 text-xs"></i>
                        <input type="text" placeholder="Search across the entire ecosystem..." class="w-full bg-dark-800 border border-white/10 rounded-xl py-2.5 pl-9 pr-4 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-purple-500/50 transition-all">
                    </div>
                    <div class="flex gap-2 flex-wrap">
                        <button class="px-3 py-1 rounded-lg bg-white/5 text-[10px] text-slate-400 hover:bg-white/10 transition-colors border border-white/5">All</button>
                        <button class="px-3 py-1 rounded-lg bg-white/5 text-[10px] text-slate-400 hover:bg-white/10 transition-colors border border-white/5">Apps</button>
                        <button class="px-3 py-1 rounded-lg bg-white/5 text-[10px] text-slate-400 hover:bg-white/10 transition-colors border border-white/5">dApps</button>
                        <button class="px-3 py-1 rounded-lg bg-white/5 text-[10px] text-slate-400 hover:bg-white/10 transition-colors border border-white/5">Contracts</button>
                        <button class="px-3 py-1 rounded-lg bg-white/5 text-[10px] text-slate-400 hover:bg-white/10 transition-colors border border-white/5">Assets</button>
                        <button class="px-3 py-1 rounded-lg bg-white/5 text-[10px] text-slate-400 hover:bg-white/10 transition-colors border border-white/5">Repos</button>
                        <button class="px-3 py-1 rounded-lg bg-white/5 text-[10px] text-slate-400 hover:bg-white/10 transition-colors border border-white/5">Packages</button>
                    </div>
                </div>
                
                <!-- Share Ecosystem -->
                <div class="glass rounded-2xl p-5">
                    <h3 class="text-sm font-semibold text-white mb-3">Share Ecosystem</h3>
                    <p class="text-xs text-slate-400 mb-4">Share Elparadisogonzalo with the world</p>
                    <div class="flex gap-3">
                        <button class="w-9 h-9 rounded-lg glass flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 transition-colors">
                            <i class="fab fa-x-twitter"></i>
                        </button>
                        <button class="w-9 h-9 rounded-lg glass flex items-center justify-center text-slate-400 hover:text-blue-400 hover:bg-white/10 transition-colors">
                            <i class="fab fa-telegram"></i>
                        </button>
                        <button class="w-9 h-9 rounded-lg glass flex items-center justify-center text-slate-400 hover:text-indigo-400 hover:bg-white/10 transition-colors">
                            <i class="fab fa-discord"></i>
                        </button>
                        <button class="w-9 h-9 rounded-lg glass flex items-center justify-center text-slate-400 hover:text-pink-400 hover:bg-white/10 transition-colors">
                            <i class="fab fa-instagram"></i>
                        </button>
                        <button class="w-9 h-9 rounded-lg glass flex items-center justify-center text-slate-400 hover:text-green-400 hover:bg-white/10 transition-colors">
                            <i class="fab fa-whatsapp"></i>
                        </button>
                        <button class="w-9 h-9 rounded-lg glass flex items-center justify-center text-slate-400 hover:text-blue-600 hover:bg-white/10 transition-colors">
                            <i class="fab fa-linkedin"></i>
                        </button>
                        <button class="w-9 h-9 rounded-lg glass flex items-center justify-center text-slate-400 hover:text-orange-400 hover:bg-white/10 transition-colors">
                            <i class="fas fa-link"></i>
                        </button>
                    </div>
                </div>
                
                <!-- Contact -->
                <div class="glass rounded-2xl p-5">
                    <h3 class="text-sm font-semibold text-white mb-3">Contact</h3>
                    <div class="space-y-2">
                        <div class="flex items-center gap-2 text-xs text-slate-300">
                            <i class="fas fa-envelope text-purple-400 text-[10px]"></i>
                            genyoungclip@gmail.com
                        </div>
                        <div class="flex items-center gap-2 text-xs text-slate-300">
                            <i class="fas fa-envelope text-cyan-400 text-[10px]"></i>
                            azehagowa@elparadisogonzalo.com
                        </div>
                    </div>
                </div>
                
                <!-- Live Network Activity -->
                <div class="glass rounded-2xl p-5 relative overflow-hidden">
                    <div class="flex items-center justify-between mb-3">
                        <h3 class="text-sm font-semibold text-white">Live Network Activity</h3>
                        <div class="flex items-center gap-2">
                            <span class="live-dot"></span>
                            <span class="text-[10px] text-emerald-400">LIVE</span>
                        </div>
                    </div>
                    <div class="absolute inset-0 opacity-20">
                        <canvas id="networkCanvas" class="w-full h-full"></canvas>
                    </div>
                    <div class="relative z-10 space-y-2">
                        <div class="flex justify-between text-xs">
                            <span class="text-slate-400">Active Nodes</span>
                            <span class="text-white font-semibold">128</span>
                        </div>
                        <div class="flex justify-between text-xs">
                            <span class="text-slate-400">TPS</span>
                            <span class="text-white font-semibold">1,248</span>
                        </div>
                        <div class="flex justify-between text-xs">
                            <span class="text-slate-400">Block Height</span>
                            <span class="text-white font-semibold">19,876,543</span>
                        </div>
                    </div>
                </div>
            </div>
            
            <!-- Footer -->
            <footer class="glass rounded-2xl p-4 flex flex-col md:flex-row items-center justify-between gap-4">
                <div class="flex items-center gap-4">
                    <div class="flex items-center gap-2">
                        <div class="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                            <i class="fas fa-globe text-white text-xs"></i>
                        </div>
                        <div>
                            <p class="text-xs text-slate-400">THE FUTURE IS DECENTRALIZED</p>
                            <p class="text-[10px] text-slate-600">AND WE BUILD IT TOGETHER</p>
                        </div>
                    </div>
                </div>
                <div class="flex items-center gap-6 text-xs text-slate-500">
                    <span>&copy; 2026 Elparadisogonzalo. All rights reserved.</span>
                    <span class="flex items-center gap-1"><i class="fas fa-heart text-pink-500 text-[10px]"></i> BUILT WITH FOR A DECENTRALIZED FUTURE</span>
                    <span>Open Source · Transparent · Community Driven · Forever Building</span>
                </div>
            </footer>
        </div>
    </main>
</div>

<script>
// ==================== VIEW SWITCHING ====================
function handleLogin(e) {
    e.preventDefault();
    document.getElementById('loginView').classList.add('hidden-view');
    document.getElementById('dashboardView').classList.remove('hidden-view');
    document.getElementById('dashboardView').classList.add('fade-in');
    initCharts();
    initNetworkCanvas();
}

function showRegister() {
    alert('Registration form would open here');
}

function togglePassword(id, btn) {
    const input = document.getElementById(id);
    const icon = btn.querySelector('i');
    if (input.type === 'password') {
        input.type = 'text';
        icon.classList.remove('fa-eye');
        icon.classList.add('fa-eye-slash');
    } else {
        input.type = 'password';
        icon.classList.remove('fa-eye-slash');
        icon.classList.add('fa-eye');
    }
}

// ==================== SIDEBAR ====================
function setActive(el) {
    document.querySelectorAll('.sidebar-item').forEach(item => item.classList.remove('active'));
    el.classList.add('active');
}

function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('-translate-x-full');
}

// ==================== CHARTS ====================
let chartsInitialized = false;

function initCharts() {
    if (chartsInitialized) return;
    chartsInitialized = true;
    
    Chart.defaults.color = '#64748b';
    Chart.defaults.borderColor = 'rgba(255,255,255,0.05)';
    
    // Portfolio Line Chart
    const portfolioCtx = document.getElementById('portfolioChart').getContext('2d');
    const portfolioGradient = portfolioCtx.createLinearGradient(0, 0, 0, 120);
    portfolioGradient.addColorStop(0, 'rgba(168, 85, 247, 0.3)');
    portfolioGradient.addColorStop(1, 'rgba(168, 85, 247, 0)');
    
    new Chart(portfolioCtx, {
        type: 'line',
        data: {
            labels: ['00:00', '04:00', '08:00', '12:00', '16:00', '20:00', '24:00'],
            datasets: [{
                label: 'Value',
                data: [65, 72, 68, 85, 78, 92, 88],
                borderColor: '#a855f7',
                backgroundColor: portfolioGradient,
                fill: true,
                tension: 0.4,
                pointRadius: 0,
                pointHoverRadius: 4,
                borderWidth: 2
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: { legend: { display: false } },
            scales: {
                x: { display: false },
                y: { display: false }
            },
            interaction: { intersect: false, mode: 'index' }
        }
    });
    
    // Asset Allocation Doughnut
    const allocationCtx = document.getElementById('allocationChart').getContext('2d');
    new Chart(allocationCtx, {
        type: 'doughnut',
        data: {
            labels: ['Tokens', 'DeFi', 'NFTs', 'Stablecoins', 'Cash', 'Other'],
            datasets: [{
                data: [30, 25, 15, 12, 10, 8],
                backgroundColor: ['#a855f7', '#d946ef', '#06b6d4', '#f97316', '#3b82f6', '#64748b'],
                borderWidth: 0,
                hoverOffset: 4
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            cutout: '75%',
            plugins: { legend: { display: false } }
        }
    });
    
    // Performance Chart (Bar + Line)
    const perfCtx = document.getElementById('performanceChart').getContext('2d');
    const perfGradient = perfCtx.createLinearGradient(0, 0, 0, 140);
    perfGradient.addColorStop(0, 'rgba(217, 70, 239, 0.4)');
    perfGradient.addColorStop(1, 'rgba(217, 70, 239, 0)');
    
    new Chart(perfCtx, {
        type: 'bar',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            datasets: [
                {
                    type: 'line',
                    label: 'Trend',
                    data: [45, 52, 48, 65, 58, 72, 68, 85, 78, 92, 88, 95],
                    borderColor: '#d946ef',
                    backgroundColor: 'transparent',
                    tension: 0.4,
                    pointRadius: 0,
                    borderWidth: 2
                },
                {
                    type: 'bar',
                    label: 'Volume',
                    data: [30, 45, 35, 55, 40, 60, 50, 70, 55, 75, 65, 80],
                    backgroundColor: perfGradient,
                    borderRadius: 4,
                    borderWidth: 0
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: { legend: { display: false } },
            scales: {
                x: { grid: { display: false }, ticks: { font: { size: 9 } } },
                y: { display: false }
            }
        }
    });
}

// ==================== WAVE CANVAS (Login) ====================
(function initWaveCanvas() {
    const canvas = document.getElementById('waveCanvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let width, height;
    let time = 0;
    
    function resize() {
        const parent = canvas.parentElement;
        width = canvas.width = parent.offsetWidth;
        height = canvas.height = parent.offsetHeight * 0.5;
    }
    resize();
    window.addEventListener('resize', resize);
    
    function draw() {
        ctx.clearRect(0, 0, width, height);
        
        for (let i = 0; i < 3; i++) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(16, 185, 129, ${0.15 - i * 0.03})`;
            ctx.lineWidth = 1.5;
            
            for (let x = 0; x < width; x++) {
                const y = height / 2 + 
                    Math.sin(x * 0.01 + time + i) * 30 +
                    Math.sin(x * 0.02 + time * 1.5 + i * 2) * 15 +
                    Math.sin(x * 0.005 + time * 0.5) * 20;
                if (x === 0) ctx.moveTo(x, y);
                else ctx.lineTo(x, y);
            }
            ctx.stroke();
        }
        
        // Draw particles
        for (let i = 0; i < 50; i++) {
            const x = (Math.sin(i * 137.5 + time * 0.5) * 0.5 + 0.5) * width;
            const y = height / 2 + Math.sin(x * 0.01 + time) * 30;
            const size = Math.sin(i + time) * 1.5 + 2;
            ctx.beginPath();
            ctx.arc(x, y, Math.max(0.5, size), 0, Math.PI * 2);
            ctx.fillStyle = `rgba(16, 185, 129, ${0.3 + Math.sin(i + time) * 0.2})`;
            ctx.fill();
        }
        
        time += 0.02;
        requestAnimationFrame(draw);
    }
    draw();
})();

// ==================== NETWORK CANVAS (Dashboard) ====================
function initNetworkCanvas() {
    const canvas = document.getElementById('networkCanvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let width, height;
    let nodes = [];
    const nodeCount = 30;
    
    function resize() {
        const parent = canvas.parentElement;
        width = canvas.width = parent.offsetWidth;
        height = canvas.height = parent.offsetHeight;
        initNodes();
    }
    
    function initNodes() {
        nodes = [];
        for (let i = 0; i < nodeCount; i++) {
            nodes.push({
                x: Math.random() * width,
                y: Math.random() * height,
                vx: (Math.random() - 0.5) * 0.5,
                vy: (Math.random() - 0.5) * 0.5,
                size: Math.random() * 2 + 1
            });
        }
    }
    
    resize();
    window.addEventListener('resize', resize);
    
    function draw() {
        ctx.clearRect(0, 0, width, height);
        
        // Update and draw nodes
        nodes.forEach(node => {
            node.x += node.vx;
            node.y += node.vy;
            
            if (node.x < 0 || node.x > width) node.vx *= -1;
            if (node.y < 0 || node.y > height) node.vy *= -1;
            
            ctx.beginPath();
            ctx.arc(node.x, node.y, node.size, 0, Math.PI * 2);
            ctx.fillStyle = 'rgba(168, 85, 247, 0.6)';
            ctx.fill();
        });
        
        // Draw connections
        for (let i = 0; i < nodes.length; i++) {
            for (let j = i + 1; j < nodes.length; j++) {
                const dx = nodes[i].x - nodes[j].x;
                const dy = nodes[i].y - nodes[j].y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                
                if (dist < 80) {
                    ctx.beginPath();
                    ctx.moveTo(nodes[i].x, nodes[i].y);
                    ctx.lineTo(nodes[j].x, nodes[j].y);
                    ctx.strokeStyle = `rgba(168, 85, 247, ${0.2 * (1 - dist / 80)})`;
                    ctx.lineWidth = 0.5;
                    ctx.stroke();
                }
            }
        }
        
        requestAnimationFrame(draw);
    }
    draw();
}

// ==================== ANIMATED COUNTERS ====================
function animateValue(element, start, end, duration, prefix = '', suffix = '') {
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        const value = Math.floor(progress * (end - start) + start);
        element.textContent = prefix + value.toLocaleString() + suffix;
        if (progress < 1) window.requestAnimationFrame(step);
    };
    window.requestAnimationFrame(step);
}

// Animate stats on dashboard load
const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
        if (mutation.target.id === 'dashboardView' && !mutation.target.classList.contains('hidden-view')) {
            // Stats are already visible in the design
        }
    });
});

const dashboardView = document.getElementById('dashboardView');
if (dashboardView) {
    observer.observe(dashboardView, { attributes: true, attributeFilter: ['class'] });
}
</script>

</body>
</html>
