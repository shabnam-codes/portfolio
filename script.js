// Update time display
let currentIndex = 0;
const menuItems = document.querySelectorAll('.menu-item');
let isInTerminal = false;

function updateActiveItem() {
    menuItems.forEach((item, index) => {
        if (index === currentIndex) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });
}

// Initialize first item as active
if (menuItems.length > 0) {
    updateActiveItem();
}

// Project data
const projectData = {
    '1': {
        name: 'IMAGE CAPTIONING SYSTEM',
        bootSequence: [
            { text: '$: > Booting systems...', delay: 500 },
            { text: '$: > Total memory found: 256kb', delay: 300 },
            { text: '$: > Scanning for bootable media    ', progress: true, delay: 1500 },
            { text: '$: > No media found. Booting from network address 3E:40:9C:75', delay: 400 },
            { text: '$: > Loading BIOS 2.3               ', progress: true, delay: 1200 },
            { text: '$: > Reticulating splines           ', progress: true, delay: 1000 },
            { text: '$: > Booting console                ', progress: true, delay: 1200 },
            { text: '$:', delay: 300 },
            { text: '$: > Welcome to the retro console version 0.1a', delay: 500 },
            { text: '$:', delay: 300 },
            { text: '$: > Loading project: IMAGE CAPTIONING SYSTEM', delay: 600 },
            { text: '$: > Initializing PyTorch modules   ', progress: true, delay: 1300 },
            { text: '$: > Loading ResNet-50 encoder      ', progress: true, delay: 1400 },
            { text: '$: > Loading LSTM decoder           ', progress: true, delay: 1200 },
            { text: '$:', delay: 300 },
            { text: '$: > PROJECT DETAILS:', delay: 400 },
            { text: '$: - Developed end-to-end deep image captioning model', delay: 200 },
            { text: '$: - Generates human-like descriptions using encoder-decoder architecture', delay: 200 },
            { text: '$: - Trained on MS COCO dataset (82K+ images)', delay: 200 },
            { text: '$: - Technologies: Python, PyTorch, ResNet-50, LSTM, OpenCV', delay: 200 },
            { text: '$:', delay: 300 },
            { text: '$: > System ready. Type "help" for commands or press ESC to return.', delay: 500, enableInput: true }
        ]
    },
    '2': {
        name: 'CNN FROM SCRATCH',
        bootSequence: [
            { text: '$: > Booting systems...', delay: 500 },
            { text: '$: > Total memory found: 256kb', delay: 300 },
            { text: '$: > Scanning for bootable media    ', progress: true, delay: 1500 },
            { text: '$: > No media found. Booting from network address 3E:40:9C:75', delay: 400 },
            { text: '$: > Loading BIOS 2.3               ', progress: true, delay: 1200 },
            { text: '$: > Reticulating splines           ', progress: true, delay: 1000 },
            { text: '$: > Booting console                ', progress: true, delay: 1200 },
            { text: '$:', delay: 300 },
            { text: '$: > Welcome to the retro console version 0.1a', delay: 500 },
            { text: '$:', delay: 300 },
            { text: '$: > Loading project: CNN FROM SCRATCH', delay: 600 },
            { text: '$: > Compiling convolution layers   ', progress: true, delay: 1300 },
            { text: '$: > Initializing activation functions', progress: true, delay: 1200 },
            { text: '$: > Building backpropagation engine', progress: true, delay: 1400 },
            { text: '$:', delay: 300 },
            { text: '$: > PROJECT DETAILS:', delay: 400 },
            { text: '$: - Complete CNN training pipeline in pure Python', delay: 200 },
            { text: '$: - No PyTorch, TensorFlow, or NumPy used', delay: 200 },
            { text: '$: - Implemented: convolution, activation, loss, backprop', delay: 200 },
            { text: '$: - Built SGD optimizer from first principles', delay: 200 },
            { text: '$:', delay: 300 },
            { text: '$: > System ready. Type "help" for commands or press ESC to return.', delay: 500, enableInput: true }
        ]
    },
    '3': {
        name: 'PLACEMENT PREDICTION',
        bootSequence: [
            { text: '$: > Booting systems...', delay: 500 },
            { text: '$: > Total memory found: 256kb', delay: 300 },
            { text: '$: > Scanning for bootable media    ', progress: true, delay: 1500 },
            { text: '$: > No media found. Booting from network address 3E:40:9C:75', delay: 400 },
            { text: '$: > Loading BIOS 2.3               ', progress: true, delay: 1200 },
            { text: '$: > Reticulating splines           ', progress: true, delay: 1000 },
            { text: '$: > Booting console                ', progress: true, delay: 1200 },
            { text: '$:', delay: 300 },
            { text: '$: > Welcome to the retro console version 0.1a', delay: 500 },
            { text: '$:', delay: 300 },
            { text: '$: > Loading project: PLACEMENT PREDICTION', delay: 600 },
            { text: '$: > Loading dataset                ', progress: true, delay: 1200 },
            { text: '$: > Preprocessing features         ', progress: true, delay: 1300 },
            { text: '$: > Training Logistic Regression   ', progress: true, delay: 1500 },
            { text: '$:', delay: 300 },
            { text: '$: > PROJECT DETAILS:', delay: 400 },
            { text: '$: - Predictive model for student placement outcomes', delay: 200 },
            { text: '$: - Based on academic and demographic factors', delay: 200 },
            { text: '$: - Data preprocessing and feature engineering', delay: 200 },
            { text: '$: - Technologies: Python, Pandas, NumPy, Scikit-learn, Matplotlib', delay: 200 },
            { text: '$:', delay: 300 },
            { text: '$: > System ready. Type "help" for commands or press ESC to return.', delay: 500, enableInput: true }
        ]
    },
    '4': {
        name: 'MATH OPTIMIZATION',
        bootSequence: [
            { text: '$: > Booting systems...', delay: 500 },
            { text: '$: > Total memory found: 256kb', delay: 300 },
            { text: '$: > Scanning for bootable media    ', progress: true, delay: 1500 },
            { text: '$: > No media found. Booting from network address 3E:40:9C:75', delay: 400 },
            { text: '$: > Loading BIOS 2.3               ', progress: true, delay: 1200 },
            { text: '$: > Reticulating splines           ', progress: true, delay: 1000 },
            { text: '$: > Booting console                ', progress: true, delay: 1200 },
            { text: '$:', delay: 300 },
            { text: '$: > Welcome to the retro console version 0.1a', delay: 500 },
            { text: '$:', delay: 300 },
            { text: '$: > Loading project: MATH OPTIMIZATION', delay: 600 },
            { text: '$: > Compiling mathematical functions', progress: true, delay: 1300 },
            { text: '$: > Initializing optimization algorithms', progress: true, delay: 1400 },
            { text: '$: > Loading neural network core    ', progress: true, delay: 1200 },
            { text: '$:', delay: 300 },
            { text: '$: > PROJECT DETAILS:', delay: 400 },
            { text: '$: - End-to-end custom math implementation', delay: 200 },
            { text: '$: - Neural network optimization from scratch', delay: 200 },
            { text: '$: - Deep dive into gradient descent and backpropagation', delay: 200 },
            { text: '$: - Technologies: Python, Mathematics, Custom Algorithms', delay: 200 },
            { text: '$:', delay: 300 },
            { text: '$: > System ready. Type "help" for commands or press ESC to return.', delay: 500, enableInput: true }
        ]
    }
};

// Terminal functions
async function typeText(element, text, speed = 30) {
    for (let char of text) {
        element.textContent += char;
        await new Promise(resolve => setTimeout(resolve, speed));
    }
}

async function showProgressBar(element, duration = 1000) {
    const bars = '■■■■■■■■■■■';
    let progress = 0;
    const steps = 11;
    const stepDuration = duration / steps;
    
    for (let i = 0; i <= steps; i++) {
        progress = Math.floor((i / steps) * 100);
        element.textContent = element.textContent.split('■')[0] + bars.substring(0, i) + ' ' + progress + '%';
        await new Promise(resolve => setTimeout(resolve, stepDuration));
    }
}

async function runBootSequence(projectId) {
    const output = document.getElementById('output');
    const inputLine = document.getElementById('inputLine');
    const terminalInput = document.getElementById('terminalInput');
    
    output.innerHTML = '';
    inputLine.style.display = 'none';
    terminalInput.value = '';
    
    const project = projectData[projectId];
    
    for (let item of project.bootSequence) {
        const line = document.createElement('div');
        line.className = 'terminal-line';
        output.appendChild(line);
        
        await typeText(line, item.text, 20);
        
        if (item.progress) {
            await showProgressBar(line, item.delay);
        }
        
        await new Promise(resolve => setTimeout(resolve, item.delay));
        
        if (item.enableInput) {
            inputLine.style.display = 'flex';
            // Focus the input after a small delay to ensure it's visible
            setTimeout(() => {
                terminalInput.focus();
            }, 100);
        }
        
        // Auto-scroll
        output.scrollTop = output.scrollHeight;
    }
}

// Terminal input handling
let commandHistory = [];
const terminalInput = document.getElementById('terminalInput');

if (terminalInput) {
    terminalInput.addEventListener('keydown', async function(e) {
        if (e.key === 'Enter') {
            e.preventDefault();
            const input = this.value.trim();
            const output = document.getElementById('output');
            
            if (input) {
                // Show user input
                const userLine = document.createElement('div');
                userLine.className = 'terminal-line user-input';
                userLine.textContent = '$: ' + input;
                output.appendChild(userLine);
                
                // Process command
                await processCommand(input);
            }
            
            this.value = '';
            
            // Auto-scroll
            output.scrollTop = output.scrollHeight;
        }
    });
}

async function processCommand(cmd) {
    const output = document.getElementById('output');
    const response = document.createElement('div');
    response.className = 'terminal-line system-prompt';
    
    switch(cmd.toLowerCase()) {
        case 'help':
            response.textContent = '$: > Available commands: help, clear, info, github, linkedin, exit';
            break;
        case 'clear':
            output.innerHTML = '';
            return;
        case 'info':
            response.textContent = '$: > Project by Shabnam Banu - AI ML Student';
            break;
        case 'github':
            response.textContent = '$: > Opening GitHub profile...';
            break;
        case 'linkedin':
            response.textContent = '$: > Opening LinkedIn profile...';
            break;
        case 'exit':
            showMenu();
            return;
        default:
            response.textContent = '$: > Command not found. Type "help" for available commands.';
    }
    
    output.appendChild(response);
}

// Keyboard navigation
// FIXED Keyboard navigation
document.addEventListener('keydown', (e) => {

    // Ignore keys if typing inside terminal input
    if (isInTerminal) {
        if (e.key === 'Escape') {
            e.preventDefault();
            showMenu();
        }
        return;
    }

    // Make sure menu exists
    if (!menuItems.length) return;

    switch (e.key) {

        case 'ArrowUp':
            e.preventDefault();
            currentIndex = (currentIndex - 1 + menuItems.length) % menuItems.length;
            updateActiveItem();
            break;

        case 'ArrowDown':
            e.preventDefault();
            currentIndex = (currentIndex + 1) % menuItems.length;
            updateActiveItem();
            break;

        case 'Enter':
            e.preventDefault();

            // FORCE focus to active item before selecting
            const activeItem = menuItems[currentIndex];

            if (!activeItem) return;

            const projectId = activeItem.getAttribute('data-project');

            if (projectId) {
                selectProject(projectId);
            }
            break;

        case 'Escape':
            e.preventDefault();
            window.location.href = 'index.html';
            break;
    }
});

// Click navigation
menuItems.forEach((item, index) => {
    item.addEventListener('click', () => {
        currentIndex = index;
        updateActiveItem();
        const projectId = item.getAttribute('data-project');
        setTimeout(() => {
            selectProject(projectId);
        }, 200);
    });
    
    item.addEventListener('mouseenter', () => {
        currentIndex = index;
        updateActiveItem();
        showProjectDetails(item);
    });
    
    item.addEventListener('mouseleave', () => {
        // Keep details visible while hovering
    });
});

// Show project details on hover
function showProjectDetails(item) {
    const detailsPanel = document.getElementById('detailsPanel');
    const detailsTitle = document.getElementById('detailsTitle');
    const detailsDescription = document.getElementById('detailsDescription');
    const detailsTech = document.getElementById('detailsTech');
    const githubLink = document.getElementById('githubLink');
    
    if (!detailsPanel) return;
    
    const title = item.querySelector('.menu-name').textContent;
    const description = item.getAttribute('data-description');
    const tech = item.getAttribute('data-tech');
    const github = item.getAttribute('data-github');
    
    detailsTitle.textContent = title;
    detailsDescription.textContent = description;
    detailsTech.textContent = tech;
    githubLink.href = github;
    
    detailsPanel.classList.add('active');
}

// Hide details when mouse leaves menu area
// Hide details when mouse leaves both menu and panel
const menuContainer = document.querySelector('.menu-container');
const detailsPanel = document.getElementById('detailsPanel');

if (menuContainer && detailsPanel) {
    let isOverMenu = false;
    let isOverPanel = false;
    
    menuContainer.addEventListener('mouseenter', () => {
        isOverMenu = true;
    });
    
    menuContainer.addEventListener('mouseleave', () => {
        isOverMenu = false;
        setTimeout(() => {
            if (!isOverPanel) {
                detailsPanel.classList.remove('active');
            }
        }, 100);
    });
    
    detailsPanel.addEventListener('mouseenter', () => {
        isOverPanel = true;
    });
    
    detailsPanel.addEventListener('mouseleave', () => {
        isOverPanel = false;
        setTimeout(() => {
            if (!isOverMenu) {
                detailsPanel.classList.remove('active');
            }
        }, 100);
    });
}

// Project selection
function selectProject(projectId) {
    console.log(`Selected project: ${projectId}`);
    showTerminal(projectId);
}

function showTerminal(projectId) {
    document.getElementById('menuView').style.display = 'none';
    document.getElementById('terminalView').style.display = 'block';
    isInTerminal = true;
    
    // Run boot sequence
    setTimeout(() => {
        runBootSequence(projectId);
    }, 100);
    
    // Click anywhere to focus input
    const terminalScreen = document.getElementById('terminal');
    terminalScreen.addEventListener('click', () => {
        const terminalInput = document.getElementById('terminalInput');
        if (terminalInput && document.getElementById('inputLine').style.display === 'flex') {
            terminalInput.focus();
        }
    });
}

function showMenu() {
    document.getElementById('menuView').style.display = 'block';
    document.getElementById('terminalView').style.display = 'none';
    isInTerminal = false;
}

// Random glitch effect
function addGlitch() {
    const activeView = isInTerminal ? document.getElementById('terminalView') : document.getElementById('menuView');
    activeView.style.filter = 'hue-rotate(180deg) saturate(2)';
    
    setTimeout(() => {
        activeView.style.filter = 'none';
    }, 100);
}

setInterval(() => {
    if (Math.random() > 0.7) {
        addGlitch();
    }
}, Math.random() * 5000 + 10000);

// Console easter egg
console.log('%c📼 VHS PROJECTS MENU v1.0', 'color: #2b52ff; font-size: 20px; font-weight: bold; font-family: "Press Start 2P", cursive;');
console.log('%cUse ↑↓ arrows to navigate, ENTER to select', 'color: #00ff00; font-size: 12px;');
console.log('%cPress ESC to go back', 'color: #ff00ff; font-size: 12px;');
