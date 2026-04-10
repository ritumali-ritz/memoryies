const storyData = [
    {
        text: "This isn’t just a website…",
        image: "BCA GROUP PHOTO (2).jpg.jpeg",
        duration: 4500
    },
    {
        text: "It’s our beautiful journey, BCA 2023-26.",
        image: "WhatsApp Image 2026-04-07 at 11.35.29 PM.jpeg",
        duration: 5000
    }
];

const students = [
    "Anuradha Gadade", "Avdhut Tile", "Dhaneshwari Bagali", "Laxman Pujari", "Aniket Masal", "Maruti Chavan", "Asha Kumbhar", "Sneha Kumbhar", "Farahat Halli", "Prashant Shitole", "Abhijit Sawant", "Prasad Swami", "Anushri Arali", "Dhanuja Kolekar", "Kajma Makandar", "Anuja Kolekar", "Samruddhi Modi", "Prajakta Mali", "Shreya Biradar", "Sanket Khot", "Sandeep Sawant", "Vaishnavi Patil", "Shubhangi Shinde", "Shraddha Pore", "Anant Pore", "Ashwini Mali", "Sauranjali Langote", "Anuradha Jadhav", "Akshrao Bhosale", "Ritesh Mali", "Rutuja Devkate", "Sajid Pinjari", "Shridevi Ghejji", "Amol Kottalagi", "Vijaylaxmi Jabagond", "Payal Walikar", "Rohit Kadam", "Shweta Shant", "Manjunath Teli", "Rohini Walekhinde", "Laxman Chaugule", "Atharv Swami", "Mahantesh Mali", "Mallikarjun Shegunashi", "Shashikant Mali", "Gurubasu Jaygond", "Ashwat Birajadar", "Sonali Mali", "Priya Sawant", "Alip Kamate", "Shivraj Shinde", "Monu Wade", "Pratiksha Mane", "Sanika Chavan", "Payal Mane", "Saundarya Sankpal", "Sushmita Chavan", "Aditya Sargar", "Rani Kare", "Shravani Purohit", "Vrushali Mane", "Prajwal Khandekar", "Pratik Mali", "Savitri Karajanagi", "Akshata Kamble", "Mahesh Karoli", "Aniket Bhosale", "Sneha Karenavar", "Sonali Madane", "Sushant Shingade", "Rubina Makandar", "Harsh Chendake", "Sahil Kore", "Satish Doni", "Mahesh Algundagi", "Gitanjali Mali", "Supriya Mane Patil", "Madhura Tangadi", "Shital Patil", "Harshada Pawar", "Ashwat Bijjargi", "Kiran Pawar", "Sujal Babar", "Sagar Savant", "Prajakta Ingavale", "Tejashri More", "Sajid Mulla", "Pahel Nadaf", "Sana Nadaf", "Sahebrao Devkate", "Maruti Sargar", "Sakshi Waghmode", "Pratik Khandekar", "Dhanashri Shinde", "Rukmini Tile", "Praniti Shirke", "Harshvardhan Shant", "Priyanka Shinde", "Rakshita Biradar", "Shivam Mali", "Mayuri Sawant", "Yash Buva", "Aasifa Nadaf", "Dhanashri Marathe", "Aishwarya Chougule", "Pranav Lokare", "Awaij Mujawar", "Anita Sangolkar", "Bhagyashri Mali", "Soumya Karoli", "Radha Yadagond", "Kavasar Shaikh", "Nirjala Bamane", "Ayesha Makandar", "Akshay Chavan", "Prashant Pawar"
];

const floatingQuotes = [
    "End of an Era...", "BCA 2023-26 forever!", "Coffee, Code, and Memories.", 
    "The journey was the reward.", "See you on the other side!", "One team, One dream.", 
    "Late nights, Great heights.", "Miss those lab sessions...", "Chai breaks > Classes", 
    "Don't cry because it's over, smile because it happened.", "A journey of a thousand miles...", 
    "Memories are timeless treasures.", "Batch of '26: The Legends.", 
    "Started with a 'Hello', ended with a 'See you later'.", "Infinite memories...", 
    "We didn't realize we were making memories...", "Backbenchers rules!"
];

// DOM Elements
const introOverlay = document.getElementById('intro-overlay');
const storyContainer = document.getElementById('story-container');
const scenesContainer = document.getElementById('scenes');
const sceneTemplate = document.getElementById('scene-template');
const progressBar = document.getElementById('progress-bar');
const finalSection = document.getElementById('final-section');
const momentsSection = document.getElementById('moments-section');
const mentorsSection = document.getElementById('mentors-section');
const messageSection = document.getElementById('message-section');
const studentsGrid = document.getElementById('students-grid');
const mainNav = document.getElementById('main-nav');
const infoModal = document.getElementById('infoModal');
const modalBody = document.getElementById('studentProfileContent');

let currentSceneIndex = 0;
let isStarted = false;

function init() {
    scenesContainer.innerHTML = '';
    storyData.forEach((data, index) => {
        const sceneClone = sceneTemplate.cloneNode(true);
        sceneClone.id = `scene-${index}`;
        const img = sceneClone.querySelector('.scene-media');
        img.src = data.image;
        img.onerror = function () {
            this.src = 'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=2070&auto=format&fit=crop';
        };
        sceneClone.querySelector('.story-text').textContent = '';
        scenesContainer.appendChild(sceneClone);
    });

    // Generate student cards
    if (studentsGrid) {
        studentsGrid.innerHTML = '';
        students.forEach(name => {
            studentsGrid.appendChild(createStudentCard(name));
        });
    }

    introOverlay.addEventListener('click', startStory);
}

function createStudentCard(name) {
    const card = document.createElement('div');
    card.className = 'student-card';
    const initial = name.charAt(0);
    const photoPath = `students/${name}.jpg`;
    
    card.innerHTML = `
        <div class="card-image">
            <img src="${photoPath}" alt="${name}" loading="lazy" 
                onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
            <div class="card-initial-fallback" style="display:none;">${initial}</div>
        </div>
        <div class="card-overlay">
            <div class="student-info">
                <span class="batch-tag">BCA '26</span>
                <h3 class="card-name">${name}</h3>
            </div>
        </div>
    `;
    card.onclick = () => showStudentProfile(name);
    return card;
}

// Student Profile logic
function showStudentProfile(name) {
    const modal = document.getElementById('infoModal');
    const modalBody = document.getElementById('studentProfileContent');
    const photoPath = `students/${name}.jpg`;

    modalBody.innerHTML = `
        <div class="student-profile-view">
            <div class="student-profile-photo">
                <img src="${photoPath}" alt="${name}" 
                    onerror="this.onerror=null; this.src='https://www.w3schools.com/howto/img_avatar.png';">
            </div>
            <div class="student-profile-details">
                <h3>BCA BATCH 2023-26</h3>
                <h2>${name}</h2>
                <div class="student-quote">
                    <p>"A journey that started with a hello, ending with beautiful memories forever."</p>
                </div>
                <div class="student-social">
                    <span> Memory Captured</span>
                </div>
            </div>
        </div>
    `;
    modal.style.display = 'flex';
}

function hideModal() {
    const modal = document.getElementById('infoModal');
    if (modal) modal.style.display = 'none';
}

function startStory() {
    if (isStarted) return;
    isStarted = true;

    // Play Background Audio
    const audio = document.getElementById('bg-audio');
    if (audio) {
        // Ensure the playlist limit is set up and starts playing
        toggleMusic();
    }

    introOverlay.style.opacity = '0';
    setTimeout(() => {
        introOverlay.style.display = 'none';
        mainNav.classList.add('active'); // Reveal Navbar
        storyContainer.classList.add('active');
        showScene(0);
    }, 1000);
}

async function showScene(index) {
    if (index >= storyData.length) {
        endStory();
        return;
    }

    currentSceneIndex = index;
    const prevScene = document.querySelector('.scene.active');
    if (prevScene) prevScene.classList.remove('active');

    const currentScene = document.getElementById(`scene-${index}`);
    currentScene.classList.add('active');

    const data = storyData[index];
    const textElement = currentScene.querySelector('.story-text');

    updateProgressBar(index, data.duration);
    await typeText(textElement, data.text);

    setTimeout(() => {
        if (currentSceneIndex === index) showScene(index + 1);
    }, data.duration - (data.text.length * 70));
}

function endStory() {
    setTimeout(() => {
        storyContainer.classList.remove('active');
        showSection('students');
    }, 1500);
}

function showSection(sectionId) {
    // Hide all
    storyContainer.classList.remove('active');
    finalSection.classList.remove('active');
    momentsSection.classList.remove('active');
    mentorsSection.classList.remove('active');
    if (messageSection) messageSection.classList.remove('active');

    currentSceneIndex = -1;

    if (sectionId === 'story') {
        storyContainer.classList.add('active');
        showScene(0);
    } else if (sectionId === 'students') {
        finalSection.classList.add('active');
        setTimeout(animateStats, 500);
    } else if (sectionId === 'moments') {
        momentsSection.classList.add('active');
    } else if (sectionId === 'mentors') {
        mentorsSection.classList.add('active');
    } else if (sectionId === 'message-section') {
        if (messageSection) messageSection.classList.add('active');
    }
}

function typeText(element, text) {
    return new Promise(resolve => {
        element.textContent = '';
        element.classList.add('typing');
        let i = 0;
        const speed = 70;
        function type() {
            if (i < text.length) {
                element.textContent += text.charAt(i);
                i++;
                setTimeout(type, speed);
            } else {
                element.classList.remove('typing');
                resolve();
            }
        }
        type();
    });
}

function updateProgressBar(index, duration) {
    const totalScenes = storyData.length;
    const progressPerScene = 100 / totalScenes;
    const startProgress = index * progressPerScene;
    const startTime = performance.now();

    function animate() {
        const elapsed = performance.now() - startTime;
        const sceneProgress = Math.min(elapsed / duration, 1);
        const totalProgress = startProgress + (sceneProgress * progressPerScene);
        progressBar.style.width = `${totalProgress}%`;
        if (sceneProgress < 1 && currentSceneIndex === index) requestAnimationFrame(animate);
    }
    requestAnimationFrame(animate);
}

// Cinematic Particle System (Stardust)
const canvas = document.getElementById('bg-particles');
const ctx = canvas ? canvas.getContext('2d') : null;
let particlesArray = [];

function initParticles() {
    if (!canvas) return;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    particlesArray = [];
    for (let i = 0; i < 150; i++) {
        particlesArray.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            size: Math.random() * 2,
            speedX: (Math.random() - 0.5) * 0.3,
            speedY: (Math.random() - 0.5) * 0.3,
            opacity: Math.random()
        });
    }
}

function animateParticles() {
    if (!ctx) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particlesArray.forEach(p => {
        p.x += p.speedX;
        p.y += p.speedY;
        
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        ctx.globalAlpha = p.opacity;
        ctx.fillStyle = '#ffab00';
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
    });
    requestAnimationFrame(animateParticles);
}

// Stats counter animation
function animateStats() {
    const stats = document.querySelectorAll('.stat-number');
    stats.forEach(stat => {
        const target = +stat.getAttribute('data-target');
        const count = +stat.innerText;
        const incremental = Math.max(1, Math.floor(target / 50));

        if (count < target) {
            stat.innerText = Math.min(count + incremental, target);
            setTimeout(animateStats, 30);
        }
    });
}

// Moments Gallery Detail Logic
let currentMomentIndex = 0;
const allMoments = [];

function showMomentDetail(element) {
    // Populate allMoments if empty
    if (allMoments.length === 0) {
        document.querySelectorAll('.moment-item').forEach((item, index) => {
            allMoments.push({
                img: item.querySelector('img').src,
                date: item.querySelector('.moment-date').textContent,
                title: item.querySelector('h3').textContent,
                desc: item.querySelector('p').textContent,
                element: item
            });
        });
    }

    // Find current index
    const clickedImg = element.querySelector('img').src;
    currentMomentIndex = allMoments.findIndex(m => m.img === clickedImg);

    updateMomentModal();
    document.getElementById('momentModal').style.display = 'flex';
}

function updateMomentModal() {
    const moment = allMoments[currentMomentIndex];
    const modal = document.getElementById('momentModal');
    
    // Add fade-out/in effect
    const content = modal.querySelector('.moment-detail-view');
    content.style.opacity = '0';
    content.style.transform = 'scale(0.95)';

    setTimeout(() => {
        document.getElementById('detail-img').src = moment.img;
        document.getElementById('detail-date').textContent = moment.date;
        document.getElementById('detail-title').textContent = moment.title;
        document.getElementById('detail-desc').textContent = moment.desc;
        
        content.style.opacity = '1';
        content.style.transform = 'scale(1)';
    }, 200);
}

function navMoment(step) {
    currentMomentIndex += step;
    if (currentMomentIndex < 0) currentMomentIndex = allMoments.length - 1;
    if (currentMomentIndex >= allMoments.length) currentMomentIndex = 0;
    updateMomentModal();
}

function closeMomentModal() {
    document.getElementById('momentModal').style.display = 'none';
}

// 3D Tilt Effect
function initMomentTilt() {
    document.querySelectorAll('.moment-item').forEach(item => {
        item.addEventListener('mousemove', e => {
            const { left, top, width, height } = item.getBoundingClientRect();
            const x = (e.clientX - left) / width - 0.5;
            const y = (e.clientY - top) / height - 0.5;
            
            const tiltX = y * 10; // Max tilt 10deg
            const tiltY = -x * 10;
            
            item.style.transform = `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale(0.98)`;
        });
        
        item.addEventListener('mouseleave', () => {
            item.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)`;
        });
    });
}
window.addEventListener('load', initMomentTilt);

function hideModal() {
    document.getElementById('infoModal').style.display = 'none';
}

// Developer Profile Logic
function showDeveloperProfile() {
    document.getElementById('devModal').style.display = 'flex';
}

function closeDevModal() {
    document.getElementById('devModal').style.display = 'none';
}

window.onclick = (event) => {
    const momentModal = document.getElementById('momentModal');
    const devModal = document.getElementById('devModal');
    const infoModalElement = document.getElementById('infoModal');
    if (event.target == momentModal) momentModal.style.display = 'none';
    if (event.target == devModal) devModal.style.display = 'none';
    if (event.target == infoModalElement) infoModalElement.style.display = 'none';
};

function filterStudents() {
    const input = document.getElementById('studentSearch');
    const filter = input.value.toLowerCase();
    const resultsContainer = document.getElementById('searchResults');

    if (filter.length < 1) {
        resultsContainer.style.display = 'none';
        return;
    }

    const filtered = students.filter(name => name.toLowerCase().includes(filter));

    resultsContainer.innerHTML = '';
    if (filtered.length > 0) {
        filtered.slice(0, 8).forEach(name => {
            const div = document.createElement('div');
            div.className = 'search-result-item';
            div.innerHTML = `<span class="res-initial">${name.charAt(0)}</span> ${name}`;
            div.onclick = () => {
                showStudentProfile(name);
                input.value = '';
                resultsContainer.style.display = 'none';
            };
            resultsContainer.appendChild(div);
        });
        resultsContainer.style.display = 'block';
    } else {
        resultsContainer.innerHTML = '<div class="no-results">No classmate found with that name...</div>';
        resultsContainer.style.display = 'block';
    }
}

// Close search or modal on Escape key, Nav on Arrows
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        const momentsModal = document.getElementById('momentModal');
        if (momentsModal && momentsModal.style.display === 'flex') closeMomentModal();
        
        const results = document.getElementById('searchResults');
        if (results) results.style.display = 'none';
        
        const searchInput = document.getElementById('studentSearch');
        if (searchInput) searchInput.value = '';
    }
    
    // Gallery Navigation
    const momentsModal = document.getElementById('momentModal');
    if (momentsModal && momentsModal.style.display === 'flex') {
        if (e.key === 'ArrowRight') navMoment(1);
        if (e.key === 'ArrowLeft') navMoment(-1);
    }
});

function createMagicLetter() {
    const quote = floatingQuotes[Math.floor(Math.random() * floatingQuotes.length)];
    const container = document.createElement('div');
    container.className = 'envelope-container';
    
    // Random horizontal position
    container.style.left = Math.random() * 60 + 20 + '%';
    
    container.innerHTML = `
        <div class="envelope">
            <div class="letter-paper">
                <p>${quote}</p>
            </div>
        </div>
    `;
    
    document.body.appendChild(container);
    
    // Trigger the "opening" after it starts floating
    setTimeout(() => {
        container.classList.add('active');
    }, 2000);
    
    // Remove after it floats off screen
    setTimeout(() => container.remove(), 12000);
}

function endJourneyFlurry() {
    let count = 0;
    const maxLetters = 15;
    
    // First immediate letter
    createMagicLetter();
    count++;
    
    const letterInterval = setInterval(() => {
        createMagicLetter();
        count++;
        
        if (count >= maxLetters) {
            clearInterval(letterInterval);
            
            // Final transition after the last few letters are still visible
            setTimeout(() => {
                showSection('message-section');
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }, 8000);
        }
    }, 5000); // 5 second gap as requested
}

const playlist = [
    "Wo din bhi kya din thearijit Singh black screen WhatsApp status.mp3",
    "second song.mp3",
    "Third song.mp3"
];
let currentTrackIndex = 0;

function toggleMusic() {
    const audio = document.getElementById('bg-audio');
    const btn = document.getElementById('music-toggle');
    
    if (!audio) return;

    // Initialize playlist listener if not already there
    if (!audio.hasAttribute('data-limit-set')) {
        audio.setAttribute('data-limit-set', 'true');
        audio.addEventListener('ended', () => {
            currentTrackIndex++;
            if (currentTrackIndex < playlist.length) {
                audio.src = playlist[currentTrackIndex];
                audio.load();
                audio.play().catch(console.error);
                btn.classList.remove('muted');
            } else {
                audio.pause();
                btn.classList.add('muted');
            }
        });
    }

    if (audio.paused) {
        // Only play if we haven't finished the playlist
        if (currentTrackIndex < playlist.length) {
            // If src is empty (first time), set it
            if (!audio.src || audio.src === "") {
                audio.src = playlist[currentTrackIndex];
            }
            audio.play().catch(e => console.log("Manual play failed:", e));
            btn.classList.remove('muted');
        }
    } else {
        audio.pause();
        btn.classList.add('muted');
    }
}

// Custom Cursor Interaction
const cursor = document.querySelector('.custom-cursor');
const follower = document.querySelector('.cursor-follower');

if (cursor && follower) {
    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
        
        // Follower with slight lag
        setTimeout(() => {
            follower.style.left = e.clientX + 'px';
            follower.style.top = e.clientY + 'px';
        }, 50);
    });
}

// Initialize Everything
window.addEventListener('resize', initParticles);
initParticles();
animateParticles();
init();

// ELITE FINALE LOGIC
// 1. Scroll Progress & Reveal Observer
const scrollProgress = document.getElementById('scroll-progress');
const revealOptions = { threshold: 0.15 };

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
        }
    });
}, revealOptions);

function updateScrollProgress() {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    if (scrollProgress) scrollProgress.style.width = scrolled + "%";
    
    // Auto-reveal elements on scroll
    document.querySelectorAll('.moment-item, .stat-card, .mentor-card, .signature-name').forEach(el => {
        revealObserver.observe(el);
    });
}

window.addEventListener('scroll', updateScrollProgress);

// 2. Legacy Signature Wall Population
const signatureWall = document.getElementById('signature-wall');
if (signatureWall) {
    // Sort and inject all students as signatures
    [...students].sort().forEach(name => {
        const span = document.createElement('span');
        span.className = 'signature-name';
        span.textContent = name;
        signatureWall.appendChild(span);
    });
}

// 3. Audio Pulse Visualizer
function addMusicPulse() {
    const musicBtn = document.getElementById('music-toggle');
    if (musicBtn && !musicBtn.querySelector('.music-pulse')) {
        const pulse = document.createElement('div');
        pulse.className = 'music-pulse';
        musicBtn.appendChild(pulse);
    }
}

function createFloatingMessage() {
    const quote = floatingQuotes[Math.floor(Math.random() * floatingQuotes.length)];
    const msg = document.createElement('div');
    msg.className = 'floating-message';
    msg.textContent = quote;
    
    // Random position
    msg.style.left = Math.random() * 80 + 10 + '%';
    msg.style.top = Math.random() * 80 + 10 + '%';
    
    document.body.appendChild(msg);
    
    // Remove after animation
    setTimeout(() => msg.remove(), 15000);
}

// Start floating messages only after intro is cleared
function initFloatingMessages() {
    setInterval(createFloatingMessage, 4000);
}

// Update startStory to include floating messages
const originalStartStory = startStory;
startStory = function() {
    originalStartStory();
    addMusicPulse();
    initFloatingMessages();
};
