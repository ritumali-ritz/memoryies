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

// 1. Instagram Mapping for Students
// Just add "Full Name": "Instagram_ID" here
const studentSocials = {
    "Aasifa Nadaf": "",
    "Abhijit Sawant": "abhi_sawant_8788",
    "Aditya Sargar": "aditya_sargar_007",
    "Aishwarya Chougule": "aishu_chougule12",
    "Akshata Kamble": "",
    "Akshay Chavan": "aksha_y07.x",
    "Akshrao Bhosale": "ab_291137",
    "Alip Kamate": "_justtt.alif",
    "Amol Kottalagi": "kottalagiamol_45",
    "Anant Pore": "anant_0879",
    "Aniket Bhosale": "aniket_bhosale2005",
    "Aniket Masal": "iamaniket_01",
    "Anita Sangolkar": "",
    "Anuja Kolekar": "a_n_u_j_a___40",
    "Anuradha Gadade": "social_handle",
    "Anuradha Jadhav": "",
    "Anushri Arali": "anushri_10_03",
    "Asha Kumbhar": "",
    "Ashwat Bijjargi": "ashwat_bijjaragi",
    "Ashwat Birajadar": "ashvat_birajadar._",
    "Ashwini Mali": "its_ashvini_07",
    "Atharv Swami": "atharv_477",
    "Avdhut Tile": "avdhut_tile_",
    "Awaij Mujawar": "its_awaij_____m",
    "Ayesha Makandar": "aaishuu_20",
    "Bhagyashri Mali": "",
    "Dhanashri Marathe": "dhanashri_marathe_10",
    "Dhanashri Shinde": "",
    "Dhaneshwari Bagali": "__dhanu__1727",
    "Dhanuja Kolekar": "",
    "Farahat Halli": "",
    "Gitanjali Mali": "_gitanjali___02",
    "Gurubasu Jaygond": "akash_jaygond_45",
    "Harsh Chendake": "harsh_hm_143",
    "Harshada Pawar": "harshada_p07",
    "Harshvardhan Shant": "harshshant1510",
    "Kajma Makandar": "",
    "Kavasar Shaikh": "",
    "Kiran Pawar": "",
    "Laxman Chaugule": "laxman_oo4_",
    "Laxman Pujari": "laxmanpujari497",
    "Madhura Tangadi": "madhu__3125",
    "Mahantesh Mali": "mahantesh_mali_4545",
    "Mahesh Algundagi": "mahesh_koli____1478",
    "Mahesh Karoli": "its_mahi__8055",
    "Mallikarjun Shegunashi": "mr_mallu002",
    "Manjunath Teli": "m.a.n.j.u.n.a.t.h_t.e.l.i",
    "Maruti Chavan": "maruti9197",
    "Maruti Sargar": "marutisargar007",
    "Mayuri Sawant": "mayu__805",
    "Monu Wade": "mr_monu__1432",
    "Nirjala Bamane": "",
    "Pahel Nadaf": "________p.s.p________",
    "Payal Mane": "p____4____payalll",
    "Payal Walikar": "",
    "Prajakta Ingavale": "",
    "Prajakta Mali": "",
    "Prajwal Khandekar": "",
    "Pranav Lokare": "pranav_lokare_16",
    "Praniti Shirke": "mii._.pranitee",
    "Prasad Swami": "prasad_swami_05",
    "Prashant Pawar": "pashya_3824",
    "Prashant Shitole": "prashant_shitole_1406",
    "Pratik Khandekar": "_1718_pratik ",
    "Pratik Mali": "pratikm3953",
    "Pratiksha Mane": "pratiksha_mane_96k",
    "Priya Sawant": "",
    "Priyanka Shinde": "",
    "Radha Yadagond": "",
    "Rakshita Biradar": "",
    "Rani Kare": "",
    "Ritesh Mali": "ritesh_mali514",
    "Rohini Walekhinde": "rohini_walekhinde",
    "Rohit Kadam": "rohya_kadam_92",
    "Rubina Makandar": "rubi_75591",
    "Rukmini Tile": "ruku_tile_45",
    "Rutuja Devkate": "",
    "Sahebrao Devkate": "ssahebrao_devkate_7787",
    "Sahil Kore": "sahil_kore_18",
    "Sajid Mulla": "offx.sajid___7",
    "Sajid Pinjari": "sajid_nadaf_07",
    "Sakshi Waghmode": "",
    "Samruddhi Modi": "",
    "Sana Nadaf": "_itz_sanu._.5125",
    "Sandeep Sawant": "",
    "Sanika Chavan": "_96sanika__",
    "Sanket Khot": "sankuuu_4572",
    "Satish Doni": "satish_doni_143",
    "Saundarya Sankpal": "_saundarya_557",
    "Sauranjali Langote": "swaranjali27112",
    "Savitri Karajanagi": "",
    "Shashikant Mali": "shashikant_mali_05",
    "Shital Patil": "itz_shitu_0203",
    "Shivam Mali": "shiv_ammali45",
    "Shivraj Shinde": "shivraj__shinde212",
    "Shraddha Pore": "shraddhapore_08",
    "Shridevi Ghejji": "",
    "Shreya Biradar": "",
    "Sagar Savant": "official_co_savant8153",
    "Shubhangi Shinde": "shinde_shubh_17",
    "Shweta Shant": "",
    "Sneha Karenavar": "sne.ha__18",
    "Sneha Kumbhar": "__sne.ha__695",
    "Sonali Madane": "sonali_madane7",
    "Sonali Mali": "malisonali_24",
    "Soumya Karoli": "soumya_karoli",
    "Sujal Babar": "sujal_sonar11",
    "Supriya Mane Patil": "",
    "Sushant Shingade": "mr_sushant_shingade ",
    "Sushmita Chavan": "its_susmita_chavan",
    "Tejashri More": "tejashri_more_5007",
    "Vaishnavi Patil": "",
    "Vijaylaxmi Jabagond": "",
    "Vrushali Mane": "vrus.hali0603",
    "Yash Buva": ""
};

// DOM Elements
const introOverlay = document.getElementById('intro-overlay');
const storyContainer = document.getElementById('story-container');
const scenesContainer = document.getElementById('scenes');
const sceneTemplate = document.getElementById('scene-template');
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
                    ${studentSocials[name] ? `
                        <a href="https://instagram.com/${studentSocials[name]}" target="_blank" class="insta-profile-link">
                            <svg class="insta-icon" viewBox="0 0 24 24">
                                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.266.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path>
                            </svg>
                            <span>@${studentSocials[name]}</span>
                        </a>
                    ` : `<span>❤️ Memory Captured</span>`}
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
    // Elegant Cross-fade Transition
    const sections = [storyContainer, finalSection, momentsSection, mentorsSection, messageSection];

    // Fade out all active sections first
    sections.forEach(sec => {
        if (sec) {
            sec.style.opacity = '0';
            setTimeout(() => {
                sec.classList.remove('active');
                sec.style.display = 'none';
            }, 400); // Wait for fade out
        }
    });

    currentSceneIndex = -1;

    setTimeout(() => {
        let target;
        if (sectionId === 'story') {
            target = storyContainer;
            showScene(0);
        } else if (sectionId === 'students') {
            target = finalSection;
            setTimeout(animateStats, 500);
        } else if (sectionId === 'moments') {
            target = momentsSection;
        } else if (sectionId === 'mentors') {
            target = mentorsSection;
        } else if (sectionId === 'message-section') {
            target = messageSection;
        }

        if (target) {
            target.style.display = 'block';
            // Force reflow for transition
            target.offsetHeight;
            target.classList.add('active');
            target.style.opacity = '1';
        }
    }, 500);
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

    // Random horizontal position, but keep it within screen bounds
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
    setTimeout(() => container.remove(), 10000);
}

function endJourneyFlurry() {
    // 1. Play the new finale song
    const audio = document.getElementById('bg-audio');
    if (audio) {
        audio.pause(); // Stop playlist
    }

    const finaleAudio = new Audio('phirse.mp3');
    finaleAudio.volume = 0.8;
    finaleAudio.play().catch(e => {
        console.log("Finale music blocked:", e);
    });

    // START THE BLOOM!
    triggerBloom();

    let count = 0;
    const maxLetters = 5; // Reduced to 5 as requested

    // First immediate letter
    setTimeout(createMagicLetter, 500);
    count++;

    const letterInterval = setInterval(() => {
        if (count >= maxLetters) {
            clearInterval(letterInterval);

            // Final transition after letters finish
            setTimeout(() => {
                showSection('message-section');
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }, 8000);
            return;
        }
        createMagicLetter();
        count++;
    }, 4500);
}

const playlist = [
    "Wo din bhi kya din thearijit Singh black screen WhatsApp status.mp3",
    "second song.mp3",
    "Third song.mp3",
    "fourth song.mp3"
];
let currentTrackIndex = 0;

function toggleMusic() {
    const audio = document.getElementById('bg-audio');
    const btn = document.getElementById('music-toggle');
    const circle = document.querySelector('.progress-ring__circle');
    const circumference = 2 * Math.PI * 28;

    if (!audio) return;

    // Update Progress Ring
    audio.ontimeupdate = () => {
        const offset = circumference - (audio.currentTime / audio.duration) * circumference;
        if (circle) circle.style.strokeDashoffset = offset;
    };

    // Initialize playlist listener
    if (!audio.hasAttribute('data-limit-set')) {
        audio.setAttribute('data-limit-set', 'true');
        audio.addEventListener('ended', () => {
            currentTrackIndex++;
            if (currentTrackIndex < playlist.length) {
                audio.src = playlist[currentTrackIndex];
                audio.load();
                audio.play();
                btn.classList.remove('muted');
            } else {
                audio.pause();
                btn.classList.add('muted');
            }
        });
    }

    if (audio.paused) {
        if (currentTrackIndex < playlist.length) {
            if (!audio.src || audio.src === "") {
                audio.src = playlist[currentTrackIndex];
            }
            audio.play();
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
startStory = function () {
    originalStartStory();
    initFloatingMessages();
};

// ==========================================
// ELITE UPGRADES: CONFETTI
// ==========================================

// 1. CONFETTI BLOOM SYSTEM
function triggerBloom() {
    const canvas = document.createElement('canvas');
    canvas.id = 'confetti-canvas';
    document.body.appendChild(canvas);
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = [];
    const colors = ['#ffab00', '#ffffff', '#ffd700', '#ff8f00'];

    for (let i = 0; i < 200; i++) {
        particles.push({
            x: Math.random() * canvas.width,
            y: canvas.height + Math.random() * 100,
            vx: (Math.random() - 0.5) * 10,
            vy: -Math.random() * 20 - 10,
            size: Math.random() * 8 + 4,
            color: colors[Math.floor(Math.random() * colors.length)],
            rotation: Math.random() * 360,
            rotationSpeed: (Math.random() - 0.5) * 10
        });
    }

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        particles.forEach((p, i) => {
            p.x += p.vx;
            p.y += p.vy;
            p.vy += 0.5; // Gravity
            p.rotation += p.rotationSpeed;

            ctx.save();
            ctx.translate(p.x, p.y);
            ctx.rotate(p.rotation * Math.PI / 180);
            ctx.fillStyle = p.color;
            ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size);
            ctx.restore();

            if (p.y > canvas.height + 100) particles.splice(i, 1);
        });

        if (particles.length > 0) {
            requestAnimationFrame(animate);
        } else {
            canvas.remove();
        }
    }
    animate();
}

// 3. MAGNETIC BUTTONS & SIGNATURE REVEAL
function initEliteInteractions() {
    // Magnetic Effect
    const magneticElements = document.querySelectorAll('.replay-btn, .music-btn, .insta-link');

    document.addEventListener('mousemove', (e) => {
        magneticElements.forEach(el => {
            const rect = el.getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;

            const distanceX = e.clientX - centerX;
            const distanceY = e.clientY - centerY;
            const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);

            if (distance < 100) {
                const moveX = distanceX * 0.3;
                const moveY = distanceY * 0.3;
                el.style.transform = `translate(${moveX}px, ${moveY}px) scale(1.1)`;
                el.style.boxShadow = `0 15px 40px rgba(255,171,0,0.4)`;
            } else {
                el.style.transform = `translate(0, 0) scale(1)`;
                el.style.boxShadow = `none`;
            }
        });
    });

    // Staggered Signature Reveal
    const signatures = document.querySelectorAll('.signature-name');
    signatures.forEach((sig, index) => {
        sig.style.transitionDelay = `${(index % 15) * 0.05}s`;
    });
}

// Update initialization
const finalPolishInit = init;
init = function () {
    finalPolishInit();
    initEliteInteractions();
};

// Start the whole application
init();
