// ==========================================
// CONFIGURATION
// ==========================================

const CONFIG = {
    MASTER_PASSWORD: "Lala2026!?",
    
    VALID_KEYS: [
        "KEY-2026-001",
        "KEY-2026-002", 
        "VIP-USER-001",
        "VIP-USER-002",
        "ANONY-2026-X",
        "LOADR-PREMIUM"
    ],
    
    THEMES: {
        cyan: { primary: '#00f0ff', secondary: '#7000ff', accent: '#ff00a0' },
        green: { primary: '#00ff88', secondary: '#00aa55', accent: '#44ffaa' },
        orange: { primary: '#ffaa00', secondary: '#ff5500', accent: '#ff8800' },
        pink: { primary: '#ff00a0', secondary: '#aa0066', accent: '#ff44aa' },
        red: { primary: '#ff4444', secondary: '#aa0000', accent: '#ff6666' }
    },
    
    FREE_LINKS: [
        {
            name: "Velara",
            url: "https://quick-help.math.alfa-ingegneria.it/g",
            desc: "Bunch of games hehe",
            icon: `<svg class="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 2c5.514 0 10 4.486 10 10s-4.486 10-10 10S2 17.514 2 12 6.486 2 12 2zm-1.5 5v4.5H9v2h1.5V18h2v-4.5H14v-2h-1.5V7h-2z"/></svg>`
        },
        {
            name: "DogeUB",
            url: "https://file.vise.best/",
            desc: "Browser | hey, it works.",
            icon: `<svg class="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/></svg>`
        }
    ],
    
    PREMIUM_LINKS: [
        {
            name: "Vapor V4",
            url: "https://wildcard.vaporized.help/",
            desc: "G@ME$, M0VI3S, S3ARCH.",
            icon: `<svg class="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>`
        },
        {
            name: "Art Class",
            url: "https://anonyv4.vercel.app/",
            desc: "Some games/apps work :3",
            icon: `<svg class="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M15.725 0l-1.72 1.277 6.39 8.588 1.72-1.277L15.725 0zm-3.94 3.418l-1.369 1.644 8.225 6.85 1.369-1.644-8.225-6.85zm-3.15 4.465l-.905 1.94 9.702 4.517.904-1.94-9.701-4.517zm-1.85 4.86l-.44 2.093 10.473 2.201.44-2.092-10.473-2.203zM1.89 15.47V24h19.19v-8.53h-2.133v6.397H4.021v-6.396H1.89zm4.265 2.133v2.13h10.66v-2.13H6.154z"/></svg>`
        },
        {
            name: "Lunar V2",
            url: "https://grade-checker.dinprima.ro/",
            desc: "Clean, private browsing experience.",
            icon: `<svg class="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M0 0v24h24V0H0zm12.5 17.5L7.5 9h3V5h2v4h3l-5 8.5z"/></svg>`
        },
        {
            name: "Intersteller",
            url: "https://vcsa.notredameparish.ca/",
            desc: "OG LMFAO",
            icon: `<svg class="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M13.604 8.4h-3.405V12h3.405c.996 0 1.8-.804 1.8-1.8s-.804-1.8-1.8-1.8zM12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 19.2c-3.976 0-7.2-3.224-7.2-7.2S8.024 4.8 12 4.8s7.2 3.224 7.2 7.2-3.224 7.2-7.2 7.2z"/></svg>`
        }
    ],

    CHATTER_URL: "https://chatter-5ufw.onrender.com/",

    CHAT_MESSAGES: [
        { user: "Neo", msg: "Just found a new proxy!", color: "#00f0ff" },
        { user: "Ghost", msg: "Thanks for the cloak tool", color: "#ff00a0" },
        { user: "Shadow", msg: "Anyone online?", color: "#00ff88" },
        { user: "Cipher", msg: "Working on a new bypass", color: "#ffaa00" },
        { user: "Raven", msg: "Vapor V4 is fast today", color: "#7000ff" },
        { user: "Phantom", msg: "Stay safe out there", color: "#ff4444" },
        { user: "Zero", msg: "New update looks sick!", color: "#00f0ff" },
        { user: "Glitch", msg: "Testing the encoder...", color: "#ff00a0" }
    ]
};

// State
let isPremium = false;
let usedKey = null;
let username = 'User';
let customSlots = [];
let currentTheme = 'cyan';
let settings = {
    autoCloak: true,
    customCursor: true,
    bgEffects: true,
    scanlines: true,
    terminalSounds: false,
    notifications: false,
    animationSpeed: 'normal',
    particleDensity: 'medium',
    sessionPersist: true,
    devMode: false,
    cornerAccents: true,
    floatingIcons: true,
    dataBar: true,
    keyboardHint: true,
    weatherApiKey: '',
    weatherLocation: 'London'
};

// ==========================================
// GLITCH INTRO ANIMATION
// ==========================================

const BOOT_LOGS = [
    "Initializing kernel...",
    "Loading modules...",
    "Mounting filesystems...",
    "Starting network daemon...",
    "Establishing secure connection...",
    "Verifying encryption keys...",
    "Loading user preferences...",
    "Initializing UI components...",
    "Starting anonyLoadr...",
    "System ready."
];

function startGlitchIntro() {
    const intro = document.getElementById('glitchIntro');
    const progress = document.getElementById('loadingProgress');
    const status = document.getElementById('loadingStatus');
    const logsContainer = document.getElementById('bootLogs');
    
    let progressValue = 0;
    let logIndex = 0;
    
    // Add boot logs
    const logInterval = setInterval(() => {
        if (logIndex < BOOT_LOGS.length) {
            const log = document.createElement('div');
            log.className = 'boot-log-line';
            log.textContent = `[${new Date().toLocaleTimeString()}] ${BOOT_LOGS[logIndex]}`;
            logsContainer.appendChild(log);
            logIndex++;
            logsContainer.scrollTop = logsContainer.scrollHeight;
        }
    }, 150);
    
    // Animate progress
    const progressInterval = setInterval(() => {
        progressValue += Math.random() * 15;
        if (progressValue >= 100) {
            progressValue = 100;
            clearInterval(progressInterval);
            clearInterval(logInterval);
            
            status.textContent = "System ready";
            
            setTimeout(() => {
                intro.style.animation = 'fadeOut 0.5s forwards';
                setTimeout(() => {
                    intro.style.display = 'none';
                    checkSession();
                }, 500);
            }, 500);
        }
        progress.style.width = progressValue + '%';
        
        // Random status updates
        const statuses = [
            "Initializing system",
            "Loading modules",
            "Connecting to network",
            "Verifying security",
            "Preparing dashboard"
        ];
        if (Math.random() > 0.7) {
            status.textContent = statuses[Math.floor(Math.random() * statuses.length)];
        }
    }, 100);
}

// Add fadeOut keyframe
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeOut {
        from { opacity: 1; }
        to { opacity: 0; visibility: hidden; }
    }
`;
document.head.appendChild(style);

// ==========================================
// COMMANDS
// ==========================================

const COMMANDS = {
    help: {
        desc: "Show available commands",
        action: () => {
            let output = "Available commands:\n";
            for (let cmd in COMMANDS) {
                output += `  ${cmd.padEnd(15)} - ${COMMANDS[cmd].desc}\n`;
            }
            output += "\nPro tip: Use TAB to autocomplete commands";
            return output;
        }
    },
    clear: {
        desc: "Clear terminal screen",
        action: () => {
            document.getElementById('terminalOutput').innerHTML = '';
            return null;
        }
    },
    reset: {
        desc: "Redo the introduction",
        action: () => {
            setTimeout(() => resetIntro(), 500);
            return "Launching introduction...";
        }
    },
    whoami: {
        desc: "Display current user",
        action: () => {
            return `Current user: ${username}\nTier: ${isPremium ? 'PREMIUM' : 'FREE'}\nSession: ${usedKey || 'N/A'}\nCloak: ${settings.autoCloak ? 'ON' : 'OFF'}`;
        }
    },
    time: {
        desc: "Show current time",
        action: () => new Date().toLocaleString()
    },
    date: {
        desc: "Show current date",
        action: () => new Date().toDateString()
    },
    links: {
        desc: "List available links",
        action: () => {
            let output = "Available links:\n\nFREE:\n";
            CONFIG.FREE_LINKS.forEach((link, i) => {
                output += `  [${i + 1}] ${link.name} - ${link.desc}\n`;
            });
            if (isPremium) {
                output += "\nPREMIUM:\n";
                CONFIG.PREMIUM_LINKS.forEach((link, i) => {
                    output += `  [${i + CONFIG.FREE_LINKS.length + 1}] ${link.name} - ${link.desc}\n`;
                });
            } else {
                output += "\n🔒 4 premium links locked. Use 'redeem' to upgrade.";
            }
            return output;
        }
    },
    slots: {
        desc: "List custom site slots",
        action: () => {
            if (customSlots.length === 0) {
                return "No custom slots. Use the 'My Slots' tab to add sites.";
            }
            let output = "Custom Site Slots:\n";
            customSlots.forEach((slot, i) => {
                output += `  [${i + 1}] ${slot.name} - ${slot.url}\n`;
            });
            return output;
        }
    },
    cloak: {
        desc: "Cloak a URL (usage: cloak <url>)",
        action: (args) => {
            if (!args || args.length === 0) {
                return "Usage: cloak <url>\nExample: cloak https://example.com";
            }
            const url = args.join(' ');
            if (!url.startsWith('http')) {
                return "Error: URL must start with http:// or https://";
            }
            cloakOpen(url, 'Custom');
            return `Cloaking ${url}...`;
        }
    },
    redeem: {
        desc: "Redeem premium key (usage: redeem <key>)",
        action: (args) => {
            if (!args || args.length === 0) {
                return "Usage: redeem <key>\nUse 'redeem password' for master password auth";
            }
            const key = args.join(' ');
            
            if (key === 'password') {
                setTimeout(() => {
                    const pass = prompt('Enter master password:');
                    if (pass === CONFIG.MASTER_PASSWORD) {
                        upgradeToPremium('PASSWORD');
                    } else {
                        logToTerminal('Authentication failed: Invalid password', 'error');
                    }
                }, 100);
                return "Prompting for password...";
            }
            
            if (CONFIG.VALID_KEYS.includes(key)) {
                upgradeToPremium(key);
                return `Key accepted! Upgrading to PREMIUM...`;
            } else {
                return "Error: Invalid key. Contact extinct for valid keys.";
            }
        }
    },
    upgrade: {
        desc: "Show upgrade options",
        action: () => {
            if (isPremium) {
                return "You already have PREMIUM access!";
            }
            return "Upgrade options:\n  1. Use 'redeem <key>' with a valid key\n  2. Use 'redeem password' for master password\n\nContact extinct for premium keys.";
        }
    },
    settings: {
        desc: "Open settings panel",
        action: () => {
            setTimeout(() => openSettings(), 100);
            return "Opening settings...";
        }
    },
    logout: {
        desc: "Logout completely (resets session)",
        action: () => {
            setTimeout(() => fullLogout(), 500);
            return "Logging out completely...";
        }
    },
    reload: {
        desc: "Reload the page",
        action: () => {
            setTimeout(() => location.reload(), 500);
            return "Reloading...";
        }
    },
    status: {
        desc: "Show system status",
        action: () => {
            return `System Status:
  User: ${username}
  Tier: ${isPremium ? 'PREMIUM ✓' : 'FREE'}
  Links: ${isPremium ? '6/6' : '2/6'}
  Slots: ${customSlots.length}
  Cloak: ${settings.autoCloak ? 'ACTIVE' : 'OFF'}
  Cursor: ${settings.customCursor ? 'CUSTOM' : 'DEFAULT'}
  Effects: ${settings.bgEffects ? 'ON' : 'OFF'}
  Theme: ${currentTheme.toUpperCase()}
  Weather: ${settings.weatherLocation}
  Time: ${new Date().toLocaleTimeString()}`;
        }
    },
    echo: {
        desc: "Echo text back (usage: echo <text>)",
        action: (args) => args ? args.join(' ') : ''
    },
    calc: {
        desc: "Simple calculator (usage: calc <expression>)",
        action: (args) => {
            if (!args || args.length === 0) return "Usage: calc 2+2";
            try {
                const expr = args.join('');
                const result = Function('"use strict"; return (' + expr + ')')();
                return `${expr} = ${result}`;
            } catch (e) {
                return "Error: Invalid expression";
            }
        }
    },
    open: {
        desc: "Open a link by number (usage: open <number>)",
        action: (args) => {
            if (!args || args.length === 0) return "Usage: open 1";
            const num = parseInt(args[0]);
            if (isNaN(num)) return "Error: Please enter a number";
            
            const allLinks = [...CONFIG.FREE_LINKS, ...(isPremium ? CONFIG.PREMIUM_LINKS : [])];
            if (num < 1 || num > allLinks.length) {
                return `Error: Invalid link number. Use 'links' to see available options.`;
            }
            
            const link = allLinks[num - 1];
            if (!isPremium && num > CONFIG.FREE_LINKS.length) {
                return "🔒 This link requires PREMIUM. Use 'redeem' to upgrade.";
            }
            
            cloakOpen(link.url, link.name);
            return `Opening ${link.name}...`;
        }
    },
    about: {
        desc: "About anonyLoadr",
        action: () => {
            return `anonyLoadr v3.0
Created by extinct

A secure, anonymous browsing gateway with cloaking technology.
All connections are encrypted and masked for privacy.

Features:
  • Auto-cloaked link opening
  • Premium key system
  • Interactive terminal
  • Custom site slots
  • Chatter platform
  • Utility tools
  • Customizable themes`;
        }
    },
    version: {
        desc: "Show version info",
        action: () => "anonyLoadr v3.0.0 'Glitch Edition'\nBuild: 2026.02.14\nAuthor: extinct"
    },
    hack: {
        desc: "Fake hacking animation (just for fun)",
        action: () => {
            setTimeout(() => {
                const lines = [
                    "Initializing brute force...",
                    "Bypassing firewall...",
                    "Accessing mainframe...",
                    "Downloading data...",
                    "Just kidding! This is a legal tool :)"
                ];
                let i = 0;
                const interval = setInterval(() => {
                    if (i < lines.length) {
                        logToTerminal(lines[i], 'info');
                        i++;
                    } else {
                        clearInterval(interval);
                    }
                }, 800);
            }, 100);
            return "Initiating sequence...";
        }
    },
    theme: {
        desc: "Change theme (usage: theme <cyan|green|orange|pink|red>)",
        action: (args) => {
            if (!args || args.length === 0) {
                return "Usage: theme <cyan|green|orange|pink|red>\nCurrent theme: " + currentTheme;
            }
            const theme = args[0].toLowerCase();
            if (CONFIG.THEMES[theme]) {
                setTheme(theme);
                return `Theme changed to ${theme.toUpperCase()}`;
            }
            return "Invalid theme. Available: cyan, green, orange, pink, red";
        }
    },
    notify: {
        desc: "Test notification",
        action: (args) => {
            const msg = args ? args.join(' ') : 'Test notification';
            showNotification('Test', msg);
            return "Notification sent";
        }
    },
    chatter: {
        desc: "Launch Chatter platform",
        action: () => {
            setTimeout(() => launchChatter(), 100);
            return "Launching Chatter...";
        }
    },
    ping: {
        desc: "Ping the server",
        action: () => {
            const ms = Math.floor(Math.random() * 50) + 10;
            return `Pong! Latency: ${ms}ms`;
        }
    },
    uuid: {
        desc: "Generate a random UUID",
        action: () => {
            return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
                const r = Math.random() * 16 | 0;
                const v = c == 'x' ? r : (r & 0x3 | 0x8);
                return v.toString(16);
            });
        }
    },
    ip: {
        desc: "Show connection info",
        action: () => {
            return `Connection: ENCRYPTED
Protocol: TLS 1.3
IP: 127.0.0.1 (localhost)
Note: Real IP is masked for privacy`;
        }
    }
};

// ==========================================
// INITIALIZATION
// ==========================================

window.onload = function() {
    loadSettings();
    loadSlots();
    startGlitchIntro();
};

function checkSession() {
    const saved = localStorage.getItem('anonyLoadr_session');
    const hasSeenIntro = localStorage.getItem('anonyLoadr_intro_seen');
    
    isPremium = false;
    usedKey = null;
    
    // Check for potential reload loop (protects against Chromebook issue)
    const lastReload = sessionStorage.getItem(RELOAD_TIME_KEY);
    const now = Date.now();
    if (lastReload && (now - parseInt(lastReload)) < 3000) {
        console.log('Reload loop detected in checkSession - forcing main content display');
        // Clear the reload flag to break the loop
        sessionStorage.setItem(RELOAD_KEY, 'true');
    }
    
    if (!hasSeenIntro) {
        document.getElementById('introModal').style.display = 'flex';
        document.getElementById('loginModal').style.display = 'none';
        document.getElementById('mainContent').style.display = 'none';
    } else if (saved && settings.sessionPersist) {
        const session = JSON.parse(saved);
        username = session.username || 'User';
        isPremium = session.isPremium || false;
        usedKey = session.usedKey || null;
        
        // Check if we need reload BEFORE showing dashboard
        if (checkReloadNeeded()) {
            // Need to reload - show reload modal instead of dashboard
            document.getElementById('mainContent').style.display = 'none';
            document.getElementById('loginModal').style.display = 'none';
            document.getElementById('introModal').style.display = 'none';
            
            // Small delay to let things settle
            setTimeout(() => {
                document.getElementById('reloadModal').style.display = 'flex';
            }, 300);
        } else {
            // Already reloaded - show welcome browser first
            showMainContent();
            
            // Show welcome browser after dashboard is ready (with delay to prevent loop)
            setTimeout(() => {
                // Only cloak if not already done this session
                if (!sessionStorage.getItem('anonyLoadr_has_cloaked')) {
                    cloakSelf();
                }
                showCyberBrowser();
                showNotification('Cloaked', 'Opened in secure window', 'success');
            }, 800);
        }
    } else {
        document.getElementById('loginModal').style.display = 'flex';
        document.getElementById('introModal').style.display = 'none';
        document.getElementById('mainContent').style.display = 'none';
    }
}

// ==========================================
// INTRO FUNCTIONS
// ==========================================

function nextIntroStep() {
    document.getElementById('step1').classList.remove('active');
    document.getElementById('step2').classList.add('active');
    setTimeout(() => document.getElementById('usernameInput').focus(), 100);
}

function saveUsername() {
    const input = document.getElementById('usernameInput').value.trim();
    if (input) username = input;
    document.getElementById('step2').classList.remove('active');
    document.getElementById('step3').classList.add('active');
}

function skipIntro() {
    username = 'User';
    finishIntro();
}

function finishIntro() {
    localStorage.setItem('anonyLoadr_intro_seen', 'true');
    document.getElementById('introModal').style.display = 'none';
    document.getElementById('loginModal').style.display = 'flex';
}

function resetIntro() {
    localStorage.removeItem('anonyLoadr_intro_seen');
    closeSettings();
    location.reload();
}

// ==========================================
// AUTH FUNCTIONS
// ==========================================

function checkAuth() {
    const input = document.getElementById('passwordInput').value.trim();
    const errorMsg = document.getElementById('errorMsg');
    const successMsg = document.getElementById('successMsg');

    if (input === CONFIG.MASTER_PASSWORD) {
        upgradeToPremium('PASSWORD');
        return;
    }

    if (CONFIG.VALID_KEYS.includes(input)) {
        upgradeToPremium(input);
        return;
    }

    errorMsg.style.display = 'block';
    successMsg.style.display = 'none';
}

function showKeyPrompt() {
    const key = prompt('Enter your premium access key:');
    if (key && key.trim()) {
        document.getElementById('passwordInput').value = key.trim();
        checkAuth();
    }
}

function upgradeToPremium(key) {
    isPremium = true;
    usedKey = key;
    
    const successMsg = document.getElementById('successMsg');
    const errorMsg = document.getElementById('errorMsg');
    
    successMsg.textContent = 'Access granted! Loading...';
    successMsg.style.display = 'block';
    errorMsg.style.display = 'none';
    
    saveSession();
    
    // Go to reload flow instead of directly showing dashboard
    setTimeout(() => {
        proceedToReload();
        logToTerminal(`Premium activated with key: ${key}`, 'success');
        showNotification('Premium Activated', 'You now have access to all features!');
    }, 800);
}

function updatePremiumUI() {
    document.getElementById('userBadge').style.display = isPremium ? 'inline-block' : 'none';
    document.getElementById('systemStatus').textContent = isPremium ? 'PREMIUM_USER' : 'FREE_TIER';
    document.getElementById('tierText').textContent = isPremium ? 'Premium Gateway Protocol' : 'Free Gateway Protocol';
    document.getElementById('userTier').textContent = isPremium ? 'PREMIUM' : 'GUEST';
}

function skipLogin() {
    isPremium = false;
    usedKey = null;
    // Go to reload flow
    proceedToReload();
}

function saveSession() {
    localStorage.setItem('anonyLoadr_session', JSON.stringify({
        isPremium: isPremium,
        usedKey: usedKey,
        username: username,
        timestamp: Date.now()
    }));
}

function fullLogout() {
    localStorage.removeItem('anonyLoadr_session');
    localStorage.removeItem('anonyLoadr_intro_seen');
    localStorage.removeItem('anonyLoadr_settings');
    localStorage.removeItem('anonyLoadr_slots');
    
    // Clear session reload and cloak flags
    sessionStorage.removeItem(RELOAD_KEY);
    sessionStorage.removeItem('anonyLoadr_has_cloaked');
    sessionStorage.removeItem(RELOAD_TIME_KEY);
    
    isPremium = false;
    usedKey = null;
    username = 'User';
    customSlots = [];
    
    // Reset initialization flags
    cursorInitialized = false;
    chatInitialized = false;
    clockInitialized = false;
    dataBarInitialized = false;
    topStatusBarInitialized = false;
    hasCloaked = false;
    
    document.getElementById('mainContent').style.display = 'none';
    document.getElementById('settingsModal').style.display = 'none';
    document.getElementById('introModal').style.display = 'flex';
    
    document.getElementById('step1').classList.add('active');
    document.getElementById('step2').classList.remove('active');
    document.getElementById('step3').classList.remove('active');
    document.getElementById('usernameInput').value = '';
}

function logout() {
    fullLogout();
}

function clearAllData() {
    if (confirm('⚠ WARNING: This will erase EVERYTHING including username, settings, slots, and session. Continue?')) {
        localStorage.clear();
        sessionStorage.clear();
        location.reload();
    }
}

function showMainContent() {
    document.getElementById('loginModal').style.display = 'none';
    document.getElementById('mainContent').style.display = 'flex';
    
    // Ensure username is set before displaying
    document.getElementById('userDisplayName').textContent = username || 'User';
    document.getElementById('greeting').textContent = `Hello, ${username || 'User'}!`;
    document.getElementById('topBarUsername').textContent = username || 'User';
    
    updatePremiumUI();
    initApp();
    initTopStatusBar();
}

// Called after login/intro completion (first time - before reload)
function proceedToReload() {
    // Save session first
    saveSession();
    
    // Show reload modal
    document.getElementById('mainContent').style.display = 'none';
    document.getElementById('loginModal').style.display = 'none';
    document.getElementById('introModal').style.display = 'none';
    
    setTimeout(() => {
        document.getElementById('reloadModal').style.display = 'flex';
    }, 300);
}

// ==========================================
// CLOAKING
// ==========================================

function cloakOpen(url, name) {
    if (!settings.autoCloak) {
        window.open(url, '_blank');
        return;
    }
    
    logToTerminal(`Cloaking ${name}...`, 'info');
    
    const win = window.open('about:blank', '_blank');
    if (!win) {
        alert('Popup blocked! Allow popups for cloaking to work.');
        return;
    }
    
    win.document.write(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>${name}</title>
            <style>body{margin:0;padding:0;overflow:hidden;}</style>
        </head>
        <body>
            <iframe src="${url}" style="width:100vw;height:100vh;border:none;position:fixed;top:0;left:0;"></iframe>
        </body>
        </html>
    `);
    win.document.close();
    
    showNotification('Link Cloaked', `${name} opened in cloaked window`);
}

// ==========================================
// SETTINGS
// ==========================================

function loadSettings() {
    const saved = localStorage.getItem('anonyLoadr_settings');
    if (saved) {
        settings = { ...settings, ...JSON.parse(saved) };
    }
    
    // Set toggle values
    const toggles = {
        'autoCloakToggle': 'autoCloak',
        'cursorToggle': 'customCursor',
        'effectsToggle': 'bgEffects',
        'scanlinesToggle': 'scanlines',
        'soundsToggle': 'terminalSounds',
        'notificationsToggle': 'notifications',
        'sessionPersistToggle': 'sessionPersist',
        'devModeToggle': 'devMode',
        'cornerAccentsToggle': 'cornerAccents',
        'floatingIconsToggle': 'floatingIcons',
        'dataBarToggle': 'dataBar',
        'keyboardHintToggle': 'keyboardHint'
    };
    
    for (const [id, key] of Object.entries(toggles)) {
        const el = document.getElementById(id);
        if (el) el.checked = settings[key];
    }
    
    // Set select values
    if (settings.animationSpeed) {
        document.getElementById('animationSpeed').value = settings.animationSpeed;
    }
    if (settings.particleDensity) {
        document.getElementById('particleDensity').value = settings.particleDensity;
    }
    
    // Set weather inputs
    if (settings.weatherApiKey) {
        document.getElementById('weatherApiKey').value = settings.weatherApiKey;
    }
    if (settings.weatherLocation) {
        document.getElementById('weatherLocation').value = settings.weatherLocation;
    }
    
    applySettings();
}

function saveSettings() {
    localStorage.setItem('anonyLoadr_settings', JSON.stringify(settings));
}

function toggleSetting(key, value) {
    if (value !== undefined) {
        settings[key] = value;
    } else {
        settings[key] = !settings[key];
    }
    saveSettings();
    applySettings();
    
    if (key === 'particleDensity') {
        initParticles();
    }
}

function applySettings() {
    const cursors = document.querySelectorAll('.cursor, .cursor-follower');
    const body = document.body;
    
    if (settings.customCursor) {
        body.classList.add('custom-cursor');
        cursors.forEach(c => c.style.display = 'block');
    } else {
        body.classList.remove('custom-cursor');
        cursors.forEach(c => c.style.display = 'none');
    }
    
    const particles = document.getElementById('particles');
    if (particles) particles.style.display = settings.bgEffects ? 'block' : 'none';
    
    const scanlines = document.querySelector('.scanlines');
    if (scanlines) scanlines.style.opacity = settings.scanlines ? '0.3' : '0';
    
    // Corner accents
    document.querySelectorAll('.corner-accent').forEach(el => {
        el.style.display = settings.cornerAccents ? 'block' : 'none';
    });
    
    // Floating icons
    document.querySelectorAll('.floating-icon').forEach(el => {
        el.style.display = settings.floatingIcons ? 'block' : 'none';
    });
    
    // Data bar
    const dataBar = document.getElementById('dataBar');
    if (dataBar) dataBar.style.display = settings.dataBar ? 'block' : 'none';
    
    // Keyboard hint
    const keyboardHint = document.getElementById('keyboardHint');
    if (keyboardHint) keyboardHint.style.display = settings.keyboardHint ? 'block' : 'none';
    
    // Top status bar visibility based on setting
    const topStatusBar = document.getElementById('topStatusBar');
    if (topStatusBar) {
        topStatusBar.style.display = 'flex';
    }
}

function setTheme(theme) {
    if (!CONFIG.THEMES[theme]) return;
    
    currentTheme = theme;
    const colors = CONFIG.THEMES[theme];
    const root = document.documentElement;
    
    root.style.setProperty('--primary', colors.primary);
    root.style.setProperty('--secondary', colors.secondary);
    root.style.setProperty('--accent', colors.accent);
    
    document.querySelectorAll('.theme-preview').forEach(el => el.classList.remove('active'));
    document.querySelector(`.theme-${theme}`)?.classList.add('active');
    
    settings.theme = theme;
    saveSettings();
    showNotification('Theme Updated', `Switched to ${theme} theme`);
}

function switchSettingsTab(tab, clickedBtn) {
    const settingsModal = document.getElementById('settingsModal');
    const tabContainer = (clickedBtn || event.target).closest('.tab-buttons');
    
    // Remove active from buttons in settings only
    tabContainer.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    
    // Add active to clicked
    (clickedBtn || event.target).classList.add('active');
    
    // Hide all tab contents in settings
    settingsModal.querySelectorAll('.tab-content').forEach(content => {
        content.classList.remove('active');
    });
    
    // Show selected
    document.getElementById(`tab-${tab}`).classList.add('active');
}

function openSettings() {
    document.getElementById('settingsModal').style.display = 'flex';
}

function closeSettings() {
    document.getElementById('settingsModal').style.display = 'none';
}

function exportData() {
    const data = {
        settings: settings,
        slots: customSlots,
        theme: currentTheme,
        exportedAt: new Date().toISOString()
    };
    
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `anonyloadr-backup-${Date.now()}.json`;
    a.click();
    URL.revokeObjectURL(url);
    
    showNotification('Export Complete', 'Your data has been downloaded');
}

function importData(input) {
    const file = input.files[0];
    if (!file) return;
    
    const reader = new FileReader();
    reader.onload = function(e) {
        try {
            const data = JSON.parse(e.target.result);
            
            if (data.settings) {
                settings = { ...settings, ...data.settings };
                saveSettings();
                loadSettings();
            }
            
            if (data.slots) {
                customSlots = data.slots;
                saveSlots();
                renderSlots();
            }
            
            if (data.theme) {
                setTheme(data.theme);
            }
            
            showNotification('Import Complete', 'Your data has been restored');
            setTimeout(() => location.reload(), 1000);
        } catch (err) {
            showNotification('Import Failed', 'Invalid backup file', 'error');
        }
    };
    reader.readAsText(file);
}

// ==========================================
// SITE SLOTS
// ==========================================

function loadSlots() {
    const saved = localStorage.getItem('anonyLoadr_slots');
    if (saved) {
        customSlots = JSON.parse(saved);
    }
}

function saveSlots() {
    localStorage.setItem('anonyLoadr_slots', JSON.stringify(customSlots));
}

function renderSlots() {
    const grid = document.getElementById('slotsGrid');
    grid.innerHTML = `
        <div class="slot-card p-8 rounded-xl text-center cursor-pointer" onclick="openSlotModal()">
            <div class="text-5xl mb-4">+</div>
            <h4 class="text-lg font-bold text-cyan-400">Add New Site</h4>
            <p class="text-sm text-gray-400 mt-2">Click to add a custom site slot</p>
        </div>
    `;
    
    customSlots.forEach((slot, index) => {
        const card = document.createElement('div');
        card.className = 'slot-card occupied p-6 rounded-xl cursor-pointer relative group';
        card.innerHTML = `
            <button onclick="event.stopPropagation(); deleteSlot(${index})" 
                class="absolute top-2 right-2 w-6 h-6 bg-red-500/20 text-red-400 rounded-full 
                opacity-0 group-hover:opacity-100 transition flex items-center justify-center text-xs">×</button>
            <div class="flex items-start justify-between mb-4">
                <div class="icon-wrapper text-white/70 group-hover:text-green-400 transition-colors">
                    <svg class="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zM17.9 14.24c.2.81-.26 1.64-1.04 2.02-.78.38-1.7.14-2.2-.56-.5-.7-.43-1.65.17-2.27.6-.62 1.55-.73 2.27-.27.72.46 1.03 1.28.8 2.08z"/></svg>
                </div>
                <div class="text-xs text-white/30 font-mono group-hover:text-green-400/70 transition-colors">
                    [S${String(index + 1).padStart(2, '0')}]
                </div>
            </div>
            <h3 class="text-xl font-bold mb-2 group-hover:text-green-400 transition-colors">${slot.name}</h3>
            <p class="text-sm text-gray-400 group-hover:text-gray-300">${slot.desc || 'Custom site slot'}</p>
            <div class="mt-4 flex items-center gap-2 text-xs text-white/20 group-hover:text-green-400/60 transition-colors">
                <span class="w-1.5 h-1.5 rounded-full bg-current animate-pulse"></span>
                <span class="font-mono">SAVED</span>
            </div>
        `;
        card.addEventListener('click', () => cloakOpen(slot.url, slot.name));
        grid.appendChild(card);
    });
}

function openSlotModal() {
    document.getElementById('slotModal').style.display = 'flex';
    setTimeout(() => document.getElementById('slotName').focus(), 100);
}

function closeSlotModal() {
    document.getElementById('slotModal').style.display = 'none';
    document.getElementById('slotName').value = '';
    document.getElementById('slotUrl').value = '';
    document.getElementById('slotDesc').value = '';
}

function saveSlot() {
    const name = document.getElementById('slotName').value.trim();
    const url = document.getElementById('slotUrl').value.trim();
    const desc = document.getElementById('slotDesc').value.trim();
    
    if (!name || !url) {
        showNotification('Error', 'Name and URL are required', 'error');
        return;
    }
    
    if (!url.startsWith('http')) {
        showNotification('Error', 'URL must start with http:// or https://', 'error');
        return;
    }
    
    customSlots.push({ name, url, desc, addedAt: Date.now() });
    saveSlots();
    renderSlots();
    closeSlotModal();
    showNotification('Site Added', `${name} has been added to your slots`);
    logToTerminal(`Added custom slot: ${name}`, 'success');
}

function deleteSlot(index) {
    if (confirm('Delete this site slot?')) {
        const name = customSlots[index].name;
        customSlots.splice(index, 1);
        saveSlots();
        renderSlots();
        showNotification('Site Removed', `${name} has been removed`);
    }
}

// ==========================================
// CHATTER
// ==========================================

function launchChatter() {
    const modal = document.getElementById('chatterLaunchModal');
    const status = document.getElementById('chatterLaunchStatus');
    
    modal.style.display = 'flex';
    
    const steps = [
        'Establishing connection...',
        'Verifying identity...',
        'Loading channels...',
        'Connecting to Chatter...'
    ];
    
    let i = 0;
    const interval = setInterval(() => {
        if (i < steps.length) {
            status.textContent = steps[i];
            i++;
        } else {
            clearInterval(interval);
            
            // Open cloaked
            setTimeout(() => {
                modal.style.display = 'none';
                cloakOpen(CONFIG.CHATTER_URL, 'Chatter');
            }, 500);
        }
    }, 600);
}

function simulateChat() {
    if (chatInitialized) return;
    chatInitialized = true;
    
    const container = document.getElementById('chatSimulation');
    if (!container) return;
    
    setInterval(() => {
        // Only animate if the Chatter tab is visible
        const chatterTab = document.getElementById('main-tab-chatter');
        if (!chatterTab || !chatterTab.classList.contains('active')) return;
        
        if (Math.random() > 0.7 && container.children.length < 10) {
            const msg = CONFIG.CHAT_MESSAGES[Math.floor(Math.random() * CONFIG.CHAT_MESSAGES.length)];
            const messageEl = document.createElement('div');
            messageEl.className = 'chat-message';
            messageEl.innerHTML = `
                <div class="chat-avatar" style="background: ${msg.color}">${msg.user[0]}</div>
                <div class="chat-content">
                    <div class="chat-username" style="color: ${msg.color}">${msg.user}</div>
                    <div class="chat-text">${msg.msg}</div>
                </div>
                <div class="chat-time">${new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</div>
            `;
            container.appendChild(messageEl);
            
            if (container.children.length > 8) {
                container.removeChild(container.children[1]);
            }
        }
        
        // Update online users
        const onlineEl = document.getElementById('onlineUsers');
        if (onlineEl) {
            const current = parseInt(onlineEl.textContent.replace(',', ''));
            const change = Math.floor(Math.random() * 10) - 5;
            const newValue = Math.max(2000, Math.min(5000, current + change));
            onlineEl.textContent = newValue.toLocaleString();
        }
    }, 3000);
}

// ==========================================
// RELOAD & CLOAK SYSTEM
// ==========================================

const RELOAD_KEY = 'anonyLoadr_has_reloaded';
const RELOAD_TIME_KEY = 'anonyLoadr_last_reload_time';
const CLOAK_URL = 'https://anonyloadr.vercel.app';
let hasCloaked = false;

function checkReloadNeeded() {
    const hasReloaded = sessionStorage.getItem(RELOAD_KEY);
    return !hasReloaded;
}

function performReloadAndCloak() {
    // Check for potential reload loop (reloaded less than 3 seconds ago)
    const lastReload = sessionStorage.getItem(RELOAD_TIME_KEY);
    const now = Date.now();
    if (lastReload && (now - parseInt(lastReload)) < 3000) {
        console.log('Reload loop detected - skipping reload');
        document.getElementById('reloadModal').style.display = 'none';
        showMainContent();
        return;
    }
    
    // Set flags so we know we've reloaded
    sessionStorage.setItem(RELOAD_KEY, 'true');
    sessionStorage.setItem(RELOAD_TIME_KEY, now.toString());
    
    // Close the modal
    document.getElementById('reloadModal').style.display = 'none';
    
    // Perform the reload
    location.reload();
}

function showCyberBrowser() {
    const browser = document.getElementById('cyberBrowser');
    const usernameEl = document.getElementById('userDisplayName');
    const displayName = usernameEl && usernameEl.textContent && usernameEl.textContent !== 'User' 
        ? usernameEl.textContent 
        : username || 'User';
    const tier = isPremium ? 'PREMIUM' : 'FREE';
    
    // Generate random session ID
    const sessionId = '0x' + Math.random().toString(16).substr(2, 8).toUpperCase();
    
    document.getElementById('cyberBrowserUsername').textContent = displayName;
    document.getElementById('cyberBrowserTier').textContent = tier;
    document.getElementById('sessionId').textContent = sessionId;
    
    browser.style.display = 'block';
    browser.classList.remove('animate-out');
    browser.classList.add('animate-in');
    
    // Initialize dragging
    initDraggableBrowser();
}

function closeCyberBrowser() {
    const browser = document.getElementById('cyberBrowser');
    
    browser.classList.remove('animate-in');
    browser.classList.add('animate-out');
    
    setTimeout(() => {
        browser.style.display = 'none';
        browser.classList.remove('animate-out');
    }, 300);
}

// Optimized dragging with requestAnimationFrame
let dragRAF = null;
function initDraggableBrowser() {
    const browser = document.getElementById('cyberBrowser');
    const header = document.getElementById('cyberBrowserHeader');
    
    // Remove existing listeners to prevent duplicates
    const newHeader = header.cloneNode(true);
    header.parentNode.replaceChild(newHeader, header);
    
    let isDragging = false;
    let currentX = 0;
    let currentY = 0;
    let initialX = 0;
    let initialY = 0;

    newHeader.addEventListener('mousedown', dragStart);
    document.addEventListener('mousemove', drag);
    document.addEventListener('mouseup', dragEnd);

    function dragStart(e) {
        if (e.target.closest('.cyber-browser-dot')) return;
        
        initialX = e.clientX - currentX;
        initialY = e.clientY - currentY;

        if (e.target === newHeader || newHeader.contains(e.target)) {
            isDragging = true;
            browser.classList.add('dragging');
            e.preventDefault();
        }
    }

    function drag(e) {
        if (!isDragging) return;
        e.preventDefault();
        
        currentX = e.clientX - initialX;
        currentY = e.clientY - initialY;

        // Use requestAnimationFrame for smooth updates
        if (dragRAF) cancelAnimationFrame(dragRAF);
        dragRAF = requestAnimationFrame(() => {
            browser.style.marginLeft = `calc(-300px + ${currentX}px)`;
            browser.style.marginTop = `calc(-200px + ${currentY}px)`;
        });
    }

    function dragEnd() {
        if (!isDragging) return;
        isDragging = false;
        browser.classList.remove('dragging');
        if (dragRAF) cancelAnimationFrame(dragRAF);
    }
}

function cloakSelf() {
    // Prevent multiple cloaking attempts (fixes Chromebook infinite loop)
    if (hasCloaked) {
        console.log('Already cloaked - skipping');
        return;
    }
    
    // Check if we've already opened a cloaked window this session
    const alreadyCloaked = sessionStorage.getItem('anonyLoadr_has_cloaked');
    if (alreadyCloaked) {
        console.log('Cloaked window already opened this session');
        hasCloaked = true;
        return;
    }
    
    hasCloaked = true;
    sessionStorage.setItem('anonyLoadr_has_cloaked', 'true');
    
    // Open anonyloadr in a cloaked window
    const win = window.open('about:blank', '_blank');
    if (!win) {
        console.log('Popup blocked - continuing in current window');
        return;
    }
    
    win.document.write(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>Dashboard</title>
            <style>body{margin:0;padding:0;overflow:hidden;background:#050505;}</style>
        </head>
        <body>
            <iframe src="${CLOAK_URL}" style="width:100vw;height:100vh;border:none;position:fixed;top:0;left:0;"></iframe>
        </body>
        </html>
    `);
    win.document.close();
}

// ==========================================
// DISCORD
// ==========================================

let discordNotifyRequested = false;

function notifyDiscordLaunch() {
    if (discordNotifyRequested) {
        showNotification('Already Subscribed', 'You will be notified when Discord goes live!', 'info');
        return;
    }
    
    discordNotifyRequested = true;
    showNotification('Notification Set!', 'We will notify you when the Discord server launches', 'success');
    logToTerminal('Discord launch notification requested', 'success');
    
    // Store in localStorage so it persists
    localStorage.setItem('anonyLoadr_discord_notify', 'true');
}

function checkDiscordNotification() {
    const requested = localStorage.getItem('anonyLoadr_discord_notify');
    if (requested === 'true') {
        discordNotifyRequested = true;
    }
}

// ==========================================
// TOOLS
// ==========================================

function cloakCustomUrl() {
    const url = document.getElementById('cloakUrlInput').value.trim();
    if (!url) {
        showNotification('Error', 'Please enter a URL', 'error');
        return;
    }
    if (!url.startsWith('http')) {
        showNotification('Error', 'URL must start with http:// or https://', 'error');
        return;
    }
    cloakOpen(url, 'Custom');
}

function base64Encode() {
    const input = document.getElementById('base64Input').value;
    const result = document.getElementById('base64Result');
    if (!input) return;
    
    result.textContent = btoa(input);
    result.classList.remove('hidden');
}

function base64Decode() {
    const input = document.getElementById('base64Input').value;
    const result = document.getElementById('base64Result');
    if (!input) return;
    
    try {
        result.textContent = atob(input);
        result.classList.remove('hidden');
    } catch (e) {
        result.textContent = 'Invalid Base64 string';
        result.classList.remove('hidden');
    }
}

function generatePassword() {
    const length = parseInt(document.getElementById('passLength').value);
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*';
    let password = '';
    
    for (let i = 0; i < length; i++) {
        password += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    
    const result = document.getElementById('passwordResult');
    result.textContent = password;
    result.classList.remove('hidden');
}

function generateQR() {
    const input = document.getElementById('qrInput').value.trim();
    if (!input) {
        showNotification('Error', 'Please enter text or URL', 'error');
        return;
    }
    
    const img = document.getElementById('qrImage');
    img.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(input)}`;
    document.getElementById('qrResult').classList.remove('hidden');
}

function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        showNotification('Copied', 'Text copied to clipboard');
    });
}

// ==========================================
// TABS
// ==========================================

function switchMainTab(tab, clickedBtn) {
    // Get the parent tab-buttons container
    const tabContainer = (clickedBtn || event.target).closest('.tab-buttons');
    
    // Remove active from all buttons in this container only
    tabContainer.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    
    // Add active to clicked button
    (clickedBtn || event.target).classList.add('active');
    
    // Hide all tab contents in main
    document.querySelectorAll('main > .tab-content').forEach(content => {
        content.classList.remove('active');
    });
    
    // Show selected tab
    document.getElementById(`main-tab-${tab}`).classList.add('active');
    
    if (tab === 'slots') {
        renderSlots();
    }
}

// ==========================================
// TERMINAL
// ==========================================

function initTerminal() {
    const input = document.getElementById('terminalInput');
    const output = document.getElementById('terminalOutput');
    
    output.innerHTML = `<div class="command-output command-info">Welcome to anonyLoadr Console v3.0</div>`;
    output.innerHTML += `<div class="command-output">Type 'help' to see available commands.</div>`;
    
    input.addEventListener('keydown', function(e) {
        if (e.key === 'Enter') {
            const command = this.value.trim();
            if (command) {
                executeCommand(command);
                this.value = '';
            }
        }
        if (e.key === 'Tab') {
            e.preventDefault();
            const partial = this.value.toLowerCase();
            const matches = Object.keys(COMMANDS).filter(cmd => cmd.startsWith(partial));
            if (matches.length === 1) {
                this.value = matches[0];
            }
        }
    });
    
    document.querySelector('.terminal-container').addEventListener('click', () => {
        input.focus();
    });
    
    input.focus();
}

function executeCommand(input) {
    const output = document.getElementById('terminalOutput');
    const args = input.split(' ');
    const cmd = args.shift().toLowerCase();
    
    const echoLine = document.createElement('div');
    echoLine.className = 'command-output';
    echoLine.innerHTML = `<span class="text-cyan-400">root@anonyLoadr:~$</span> ${input}`;
    output.appendChild(echoLine);
    
    if (COMMANDS[cmd]) {
        const result = COMMANDS[cmd].action(args);
        if (result) {
            const resultLines = result.split('\n');
            resultLines.forEach(line => {
                const resultDiv = document.createElement('div');
                resultDiv.className = 'command-output';
                resultDiv.textContent = line;
                output.appendChild(resultDiv);
            });
        }
    } else {
        const errorDiv = document.createElement('div');
        errorDiv.className = 'command-output command-error';
        errorDiv.textContent = `Command not found: ${cmd}. Type 'help' for available commands.`;
        output.appendChild(errorDiv);
    }
    
    output.scrollTop = output.scrollHeight;
}

function logToTerminal(message, type = 'info') {
    const output = document.getElementById('terminalOutput');
    const line = document.createElement('div');
    line.className = `command-output command-${type}`;
    line.textContent = `[${new Date().toLocaleTimeString()}] ${message}`;
    output.appendChild(line);
    output.scrollTop = output.scrollHeight;
}

// ==========================================
// NOTIFICATIONS
// ==========================================

function showNotification(title, message, type = 'info') {
    const container = document.getElementById('notificationContainer');
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.innerHTML = `
        <div class="notification-title">${title}</div>
        <div class="notification-message">${message}</div>
    `;
    container.appendChild(notification);
    
    setTimeout(() => {
        notification.style.opacity = '0';
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => notification.remove(), 300);
    }, 4000);
}

// ==========================================
// APP INITIALIZATION
// ==========================================

function initApp() {
    renderLinks();
    initCursor();
    initParticles();
    startClock();
    initTerminal();
    applySettings();
    simulateChat();
    initDataBar();
    checkDiscordNotification();
    
    if (settings.theme) {
        setTheme(settings.theme);
    }
    
    // Dashboard launch notifications
    setTimeout(() => {
        showNotification('System', 'Browser environment cloaked successfully', 'success');
    }, 800);
    
    setTimeout(() => {
        showNotification('Security', 'Chromebook spoofed! User-Agent masked.', 'success');
    }, 1800);
    
    setTimeout(() => {
        showNotification('Network', 'Encrypted connection established', 'success');
    }, 2800);
    
    if (isPremium) {
        setTimeout(() => {
            showNotification('Premium', 'All features unlocked', 'success');
        }, 3800);
    }
}

// ==========================================
// TOP STATUS BAR & WEATHER
// ==========================================

let topStatusBarInitialized = false;
function initTopStatusBar() {
    if (topStatusBarInitialized) return;
    topStatusBarInitialized = true;
    
    updateTopBarTime();
    setInterval(updateTopBarTime, 1000);
    fetchWeather();
    // Refresh weather every 10 minutes
    setInterval(fetchWeather, 600000);
}

function updateTopBarTime() {
    const now = new Date();
    document.getElementById('topBarTime').textContent = now.toLocaleTimeString('en-US', {
        hour12: false,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    });
    document.getElementById('topBarDate').textContent = now.toLocaleDateString('en-US', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
    });
}

// Demo weather data for when API fails
const DEMO_WEATHER = {
    'London': { temp: 12, desc: 'Light rain', icon: '10d' },
    'New York': { temp: 18, desc: 'Clear sky', icon: '01d' },
    'Los Angeles': { temp: 24, desc: 'Sunny', icon: '01d' },
    'Tokyo': { temp: 20, desc: 'Cloudy', icon: '03d' },
    'Paris': { temp: 15, desc: 'Partly cloudy', icon: '02d' },
    'Sydney': { temp: 22, desc: 'Clear sky', icon: '01d' },
    'Berlin': { temp: 14, desc: 'Overcast', icon: '04d' },
    'Moscow': { temp: 8, desc: 'Snow', icon: '13d' },
    'Dubai': { temp: 35, desc: 'Sunny', icon: '01d' },
    'Singapore': { temp: 30, desc: 'Thunderstorm', icon: '11d' }
};
let useDemoMode = false;

async function fetchWeather() {
    const apiKey = settings.weatherApiKey;
    const location = settings.weatherLocation || 'London';
    
    // If demo mode or no API key, use demo data
    if (useDemoMode || !apiKey) {
        applyDemoWeather(location);
        return;
    }
    
    try {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 5000);
        
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(location)}&appid=${apiKey}&units=metric`,
            { signal: controller.signal }
        );
        clearTimeout(timeoutId);
        
        if (!response.ok) {
            if (response.status === 401) {
                throw new Error('Invalid API key');
            }
            throw new Error('Location not found');
        }
        
        const data = await response.json();
        const temp = Math.round(data.main.temp);
        const desc = data.weather[0].description;
        const iconCode = data.weather[0].icon;
        
        document.getElementById('weatherTemp').textContent = `${temp}°C`;
        document.getElementById('weatherDesc').textContent = desc.charAt(0).toUpperCase() + desc.slice(1);
        updateWeatherIcon(iconCode);
        
    } catch (err) {
        console.log('Weather API error:', err.message);
        // Fall back to demo mode
        applyDemoWeather(location);
    }
}

function applyDemoWeather(location) {
    // Try to find matching city or use random
    let weather = null;
    for (const city in DEMO_WEATHER) {
        if (location.toLowerCase().includes(city.toLowerCase())) {
            weather = DEMO_WEATHER[city];
            break;
        }
    }
    
    // If no match, pick random
    if (!weather) {
        const cities = Object.keys(DEMO_WEATHER);
        weather = DEMO_WEATHER[cities[Math.floor(Math.random() * cities.length)]];
    }
    
    document.getElementById('weatherTemp').textContent = `${weather.temp}°C`;
    document.getElementById('weatherDesc').textContent = weather.desc + (useDemoMode ? '' : ' (Demo)');
    updateWeatherIcon(weather.icon);
}

function useDemoWeather() {
    useDemoMode = true;
    fetchWeather();
    showNotification('Demo Mode', 'Using sample weather data');
}

function updateWeatherIcon(iconCode) {
    // SVG icons for different weather conditions
    const icons = {
        '01d': '<circle cx="12" cy="12" r="5" fill="var(--primary)"/><path d="M12 2v2M12 20v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M2 12h2M20 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" stroke="var(--primary)" stroke-width="2" fill="none"/>',
        '01n': '<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" fill="var(--primary)"/>',
        '02d': '<circle cx="12" cy="12" r="5" fill="var(--primary)"/><path d="M17 18a5 5 0 0 0 0-10 6 6 0 0 0-12 0 5 5 0 0 0 0 10h12z" fill="rgba(255,255,255,0.3)"/>',
        '02n': '<path d="M17 18a5 5 0 0 0 0-10 6 6 0 0 0-12 0 5 5 0 0 0 0 10h12z" fill="rgba(255,255,255,0.3)"/><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" fill="var(--primary)"/>',
        '03d': '<path d="M17 18a5 5 0 0 0 0-10 6 6 0 0 0-12 0 5 5 0 0 0 0 10h12z" fill="rgba(255,255,255,0.5)"/>',
        '03n': '<path d="M17 18a5 5 0 0 0 0-10 6 6 0 0 0-12 0 5 5 0 0 0 0 10h12z" fill="rgba(255,255,255,0.5)"/>',
        '04d': '<path d="M17 18a5 5 0 0 0 0-10 6 6 0 0 0-12 0 5 5 0 0 0 0 10h12z" fill="rgba(255,255,255,0.7)"/>',
        '04n': '<path d="M17 18a5 5 0 0 0 0-10 6 6 0 0 0-12 0 5 5 0 0 0 0 10h12z" fill="rgba(255,255,255,0.7)"/>',
        '09d': '<path d="M17 18a5 5 0 0 0 0-10 6 6 0 0 0-12 0 5 5 0 0 0 0 10h12z" fill="rgba(255,255,255,0.5)"/><path d="M8 20v2M12 20v2M16 20v2" stroke="var(--primary)" stroke-width="2"/>',
        '09n': '<path d="M17 18a5 5 0 0 0 0-10 6 6 0 0 0-12 0 5 5 0 0 0 0 10h12z" fill="rgba(255,255,255,0.5)"/><path d="M8 20v2M12 20v2M16 20v2" stroke="var(--primary)" stroke-width="2"/>',
        '10d': '<circle cx="12" cy="12" r="5" fill="var(--primary)"/><path d="M17 18a5 5 0 0 0 0-10 6 6 0 0 0-12 0 5 5 0 0 0 0 10h12z" fill="rgba(255,255,255,0.3)"/><path d="M8 20v2M12 20v2M16 20v2" stroke="var(--primary)" stroke-width="2"/>',
        '10n': '<path d="M17 18a5 5 0 0 0 0-10 6 6 0 0 0-12 0 5 5 0 0 0 0 10h12z" fill="rgba(255,255,255,0.5)"/><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" fill="var(--primary)"/><path d="M8 20v2M12 20v2M16 20v2" stroke="var(--primary)" stroke-width="2"/>',
        '11d': '<path d="M17 18a5 5 0 0 0 0-10 6 6 0 0 0-12 0 5 5 0 0 0 0 10h12z" fill="rgba(255,255,255,0.5)"/><path d="M11 16l-2 4h3l-1 3" stroke="var(--accent)" stroke-width="2" fill="none"/>',
        '11n': '<path d="M17 18a5 5 0 0 0 0-10 6 6 0 0 0-12 0 5 5 0 0 0 0 10h12z" fill="rgba(255,255,255,0.5)"/><path d="M11 16l-2 4h3l-1 3" stroke="var(--accent)" stroke-width="2" fill="none"/>',
        '13d': '<path d="M17 18a5 5 0 0 0 0-10 6 6 0 0 0-12 0 5 5 0 0 0 0 10h12z" fill="rgba(255,255,255,0.8)"/><circle cx="8" cy="21" r="1" fill="var(--primary)"/><circle cx="12" cy="21" r="1" fill="var(--primary)"/><circle cx="16" cy="21" r="1" fill="var(--primary)"/>',
        '13n': '<path d="M17 18a5 5 0 0 0 0-10 6 6 0 0 0-12 0 5 5 0 0 0 0 10h12z" fill="rgba(255,255,255,0.8)"/><circle cx="8" cy="21" r="1" fill="var(--primary)"/><circle cx="12" cy="21" r="1" fill="var(--primary)"/><circle cx="16" cy="21" r="1" fill="var(--primary)"/>',
        '50d': '<path d="M4 14h16M4 18h16M4 10h16" stroke="rgba(255,255,255,0.5)" stroke-width="2" stroke-linecap="round"/>',
        '50n': '<path d="M4 14h16M4 18h16M4 10h16" stroke="rgba(255,255,255,0.5)" stroke-width="2" stroke-linecap="round"/>'
    };
    
    const iconSvg = document.getElementById('weatherIcon');
    iconSvg.innerHTML = icons[iconCode] || icons['01d'];
}

async function testWeatherApi() {
    const apiKey = document.getElementById('weatherApiKey').value;
    const location = document.getElementById('weatherLocation').value || 'London';
    
    if (!apiKey) {
        showNotification('Error', 'Please enter an API key first', 'error');
        return;
    }
    
    showNotification('Testing', 'Testing API connection...');
    
    try {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 5000);
        
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(location)}&appid=${apiKey}&units=metric`,
            { signal: controller.signal }
        );
        clearTimeout(timeoutId);
        
        if (response.ok) {
            useDemoMode = false;
            showNotification('Success', 'API key is valid!');
            toggleSetting('weatherApiKey', apiKey);
            toggleSetting('weatherLocation', location);
            fetchWeather();
        } else {
            const data = await response.json();
            showNotification('Error', data.message || 'Invalid API key or location', 'error');
        }
    } catch (err) {
        if (err.name === 'AbortError') {
            showNotification('Error', 'Request timed out. API may be blocked by CORS.', 'error');
        } else {
            showNotification('Error', 'CORS error or network issue. Try Demo Mode.', 'error');
        }
    }
}

let dataBarInitialized = false;
function initDataBar() {
    if (dataBarInitialized) return;
    dataBarInitialized = true;
    
    const dataBar = document.getElementById('dataBar');
    if (!dataBar) return;
    
    let width = 0;
    let direction = 1;
    let lastTime = 0;
    
    function animateDataBar(timestamp) {
        if (!settings.dataBar) {
            requestAnimationFrame(animateDataBar);
            return;
        }
        
        if (timestamp - lastTime > 30) {
            width += direction * 1.5;
            if (width >= 100) {
                width = 100;
                direction = -1;
            } else if (width <= 0) {
                width = 0;
                direction = 1;
            }
            dataBar.style.width = width + '%';
            lastTime = timestamp;
        }
        
        requestAnimationFrame(animateDataBar);
    }
    
    requestAnimationFrame(animateDataBar);
}

function renderLinks() {
    const grid = document.getElementById('linksGrid');
    grid.innerHTML = '';

    CONFIG.FREE_LINKS.forEach((link, index) => {
        createCard(link, index, false);
    });

    if (isPremium) {
        CONFIG.PREMIUM_LINKS.forEach((link, index) => {
            createCard(link, index + CONFIG.FREE_LINKS.length, false);
        });
    } else {
        CONFIG.PREMIUM_LINKS.forEach((link, index) => {
            createCard(link, index + CONFIG.FREE_LINKS.length, true);
        });
    }
}

function createCard(link, index, locked) {
    const grid = document.getElementById('linksGrid');
    const card = document.createElement('div');
    
    card.className = `link-card group block p-6 rounded-xl ${locked ? 'locked' : 'cursor-pointer'}`;
    
    card.innerHTML = `
        <div class="loading-bar absolute bottom-0 left-0"></div>
        <span class="cloak-indicator">CLOAKED</span>
        <div class="flex items-start justify-between mb-4">
            <div class="icon-wrapper text-white/70 ${locked ? '' : 'group-hover:text-cyan-400'}">
                ${link.icon}
            </div>
            <div class="text-xs text-white/30 font-mono ${locked ? '' : 'group-hover:text-cyan-400/70'} transition-colors">
                [${String(index + 1).padStart(2, '0')}]
            </div>
        </div>
        <h3 class="text-xl font-bold mb-2 ${locked ? 'text-gray-500' : 'group-hover:text-cyan-400'} transition-colors">${link.name}</h3>
        <p class="text-sm ${locked ? 'text-gray-600' : 'text-gray-400 group-hover:text-gray-300'}">${locked ? '🔒 Upgrade to access' : link.desc}</p>
        <div class="mt-4 flex items-center gap-2 text-xs ${locked ? 'text-gray-600' : 'text-white/20 group-hover:text-cyan-400/60'} transition-colors">
            <span class="w-1.5 h-1.5 rounded-full bg-current ${locked ? '' : 'animate-pulse'}"></span>
            <span class="font-mono">${locked ? 'LOCKED' : 'CLOAKED'}</span>
        </div>
    `;
    
    if (!locked) {
        card.addEventListener('click', (e) => {
            e.preventDefault();
            cloakOpen(link.url, link.name);
        });
        card.addEventListener('mouseenter', () => logToTerminal(`Preparing ${link.name}...`, 'info'));
    }
    
    grid.appendChild(card);
}

// Cursor state to prevent multiple initializations
let cursorInitialized = false;
let cursorObserver = null;
let chatInitialized = false;
let clockInitialized = false;

function initCursor() {
    if (cursorInitialized) return;
    cursorInitialized = true;
    
    const cursor = document.querySelector('.cursor');
    const follower = document.querySelector('.cursor-follower');
    
    if (window.matchMedia('(pointer: coarse)').matches) return;
    if (!cursor || !follower) return;

    let mouseX = 0, mouseY = 0;
    let followerX = 0, followerY = 0;
    let rafId = null;
    let isMoving = false;
    let moveTimeout = null;

    // Use requestAnimationFrame for smooth cursor following
    function updateCursor() {
        cursor.style.left = mouseX - 10 + 'px';
        cursor.style.top = mouseY - 10 + 'px';
        
        // Smooth follower with lerp
        followerX += (mouseX - 20 - followerX) * 0.15;
        followerY += (mouseY - 20 - followerY) * 0.15;
        follower.style.left = followerX + 'px';
        follower.style.top = followerY + 'px';
        
        if (isMoving) {
            rafId = requestAnimationFrame(updateCursor);
        }
    }

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        
        if (!isMoving) {
            isMoving = true;
            updateCursor();
        }
        
        clearTimeout(moveTimeout);
        moveTimeout = setTimeout(() => {
            isMoving = false;
            if (rafId) cancelAnimationFrame(rafId);
        }, 100);
    }, { passive: true });

    // Event delegation for hover effects - more efficient
    document.addEventListener('mouseover', (e) => {
        const target = e.target.closest('button, a, .link-card:not(.locked), input, .toggle-slider, .intro-btn, .modal-btn, .skip-intro, .slot-card');
        if (target) cursor.classList.add('hover');
    });
    
    document.addEventListener('mouseout', (e) => {
        const target = e.target.closest('button, a, .link-card:not(.locked), input, .toggle-slider, .intro-btn, .modal-btn, .skip-intro, .slot-card');
        if (target) cursor.classList.remove('hover');
    });
}

function initParticles() {
    const container = document.getElementById('particles');
    container.innerHTML = '';
    
    const densities = { none: 0, low: 10, medium: 20, high: 40 };
    const count = densities[settings.particleDensity] || 20;
    
    for (let i = 0; i < count; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 15 + 's';
        particle.style.animationDuration = (15 + Math.random() * 10) + 's';
        container.appendChild(particle);
    }
}

function startClock() {
    if (clockInitialized) return;
    clockInitialized = true;
    
    const clock = document.getElementById('clock');
    if (!clock) return;
    
    function update() {
        clock.textContent = new Date().toLocaleTimeString('en-US', { 
            hour12: false, 
            hour: '2-digit', 
            minute: '2-digit', 
            second: '2-digit' 
        });
        requestAnimationFrame(() => setTimeout(update, 1000));
    }
    update();
}

// Event Listeners
document.getElementById('passwordInput')?.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') checkAuth();
});

document.getElementById('usernameInput')?.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') saveUsername();
});

document.getElementById('slotUrl')?.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') saveSlot();
});

window.onclick = function(event) {
    if (event.target.classList.contains('modal-overlay')) {
        // Don't close critical modals by clicking outside
        const criticalModals = ['introModal', 'loginModal', 'reloadModal', 'glitchIntro'];
        if (!criticalModals.includes(event.target.id)) {
            event.target.style.display = 'none';
        }
    }
}

// Keyboard Shortcuts
document.addEventListener('keydown', function(e) {
    // Ctrl/Cmd + K to focus terminal
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        document.getElementById('terminalInput')?.focus();
    }
    
    // Escape to close modals
    if (e.key === 'Escape') {
        document.querySelectorAll('.modal-overlay').forEach(modal => {
            if (modal.id !== 'glitchIntro' && modal.id !== 'introModal' && modal.id !== 'loginModal') {
                modal.style.display = 'none';
            }
        });
    }
    
    // Ctrl/Cmd + , for settings
    if ((e.ctrlKey || e.metaKey) && e.key === ',') {
        e.preventDefault();
        openSettings();
    }
    
    // Ctrl/Cmd + / to show help
    if ((e.ctrlKey || e.metaKey) && e.key === '/') {
        e.preventDefault();
        executeCommand('help');
    }
});

// Hide keyboard hint on mobile
if (window.matchMedia('(pointer: coarse)').matches) {
    document.getElementById('keyboardHint').style.display = 'none';
}
