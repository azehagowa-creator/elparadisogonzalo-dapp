// ==================== VIEW SWITCHING ====================
function handleLogin(e) {
    e.preventDefault();
    document.getElementById('loginView').classList.add('hidden-view');
    document.getElementById('loginView').setAttribute('aria-hidden', 'true');
    document.getElementById('dashboardView').classList.remove('hidden-view');
    document.getElementById('dashboardView').setAttribute('aria-hidden', 'false');
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

// ==================== ACCESSIBLE EVENT WIRING ====================
document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    if (loginForm) loginForm.addEventListener('submit', handleLogin);

    const registerLink = document.getElementById('createAccountLink');
    if (registerLink) registerLink.addEventListener('click', (e) => { e.preventDefault(); showRegister(); });

    const passwordToggle = document.getElementById('toggleLoginPassword');
    if (passwordToggle) passwordToggle.addEventListener('click', () => togglePassword('loginPassword', passwordToggle));

    const sidebarToggle = document.getElementById('sidebarToggle');
    if (sidebarToggle) sidebarToggle.addEventListener('click', toggleSidebar);

    document.querySelectorAll('.sidebar-item').forEach(item => {
        item.addEventListener('click', () => setActive(item));
    });

    const dashboard = document.getElementById('dashboardView');
    const login = document.getElementById('loginView');
    if (dashboard) dashboard.setAttribute('aria-hidden', dashboard.classList.contains('hidden-view') ? 'true' : 'false');
    if (login) login.setAttribute('aria-hidden', login.classList.contains('hidden-view') ? 'true' : 'false');
});

