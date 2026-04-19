console.log(">> SYSTEM INITIALIZED: ENGINEERING BLUEPRINT V1.0");
console.log(">> WELCOME, USER.");

// =========================================
// HERO TERMINAL ANIMATION
// =========================================
document.addEventListener("DOMContentLoaded", () => {
    const terminalLines = document.querySelectorAll(".cmd-line");

    // Animate lines clearly one by one
    terminalLines.forEach((line, index) => {
        setTimeout(() => {
            line.classList.add("visible");
        }, index * 800 + 500); // 500ms initial delay, then 800ms stagger
    });
});

// =========================================
// NAVIGATION HIGHLIGHT (ScrollSpy)
// =========================================
const sections = document.querySelectorAll(".full-screen-section");
const railItems = document.querySelectorAll(".rail-item");

const observerOptions = {
    threshold: 0.3 // Trigger when 30% of section is visible
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            railItems.forEach(item => item.classList.remove("active"));
            const id = entry.target.getAttribute("id");
            const activeLink = document.querySelector(`.rail-item[href="#${id}"]`);
            if (activeLink) activeLink.classList.add("active");
        }
    });
}, observerOptions);

sections.forEach(section => observer.observe(section));

// =========================================
// TIMELINE ANIMATION TRIGGER
// =========================================
const timelineSection = document.querySelector(".timeline");
if (timelineSection) {
    const timelineObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                timelineSection.classList.add("in-view");
                timelineObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });
    timelineObserver.observe(timelineSection);
}

// =========================================
// SKILL NODE ANIMATION TRIGGER
// =========================================
const specsSection = document.getElementById("specs");
if (specsSection) {
    const specsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                specsSection.classList.add("active-scan");
                // Optional: Unobserve if you want it to run only once
                // specsObserver.unobserve(entry.target); 
            } else {
                // Remove if you want it to reset every time they leave
                specsSection.classList.remove("active-scan");
            }
        });
    }, { threshold: 0.3 });
    specsObserver.observe(specsSection);
}

// =========================================
// BLUEPRINT CONTACT INTERFACE (EmailJS Integration)
// =========================================
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const btn = this.querySelector('.btn-transmit');
        const originalText = btn.innerText;

        btn.innerText = '[ TRANSMITTING_PACKETS... ]';
        btn.disabled = true;
        document.body.style.cursor = 'wait';

        const serviceID = 'service_09sfsqa';
        const templateID = 'template_cw2c9ac';

        emailjs.sendForm(serviceID, templateID, this)
            .then(() => {
                btn.innerText = '[ TRANSMISSION_SUCCESSFUL ]';
                btn.style.borderColor = '#00FFC6';
                btn.style.color = '#00FFC6';
                this.reset();
                setTimeout(() => {
                    btn.innerText = originalText;
                    btn.disabled = false;
                    btn.style.borderColor = '';
                    btn.style.color = '';
                    document.body.style.cursor = 'default';
                }, 4000);
            }, (err) => {
                console.error('FAILED...', err);
                btn.innerText = '[ FAILED: RETRY ]';
                btn.style.borderColor = '#ff5f5f';
                btn.style.color = '#ff5f5f';
                setTimeout(() => {
                    btn.innerText = originalText;
                    btn.disabled = false;
                    btn.style.borderColor = '';
                    btn.style.color = '';
                    document.body.style.cursor = 'default';
                }, 4000);
            });
    });
}

// =========================================
// SIDEBAR TOGGLE LOGIC (Floating Ball)
// =========================================
document.addEventListener("DOMContentLoaded", () => {
    const toggleBall = document.getElementById("rail-toggle-ball");
    const sidebar = document.getElementById("system-rail");
    const backdrop = document.getElementById("sidebar-backdrop");
    const body = document.body;
    const railItems = document.querySelectorAll(".rail-item");

    if (toggleBall && sidebar && backdrop) {
        // Toggle Open/Close
        toggleBall.addEventListener("click", () => {
            sidebar.classList.toggle("active");
            body.classList.toggle("sidebar-open");
        });

        // Close on Backdrop Click
        backdrop.addEventListener("click", () => {
            sidebar.classList.remove("active");
            body.classList.remove("sidebar-open");
        });

        // Close on Item Click (for better navigation UX)
        railItems.forEach(item => {
            item.addEventListener("click", () => {
                sidebar.classList.remove("active");
                body.classList.remove("sidebar-open");
            });
        });
    }
});

// =========================================
// HERO TERMINAL ANIMATION
// =========================================
document.addEventListener("DOMContentLoaded", () => {
    const heroTerminal = document.getElementById("hero-terminal");
    if (!heroTerminal) return;

    const heroLines = [
        "> Boot sequence initiated...",
        "> Loading kernel: M.Tech CSE (AIML)",
        "> Initializing neural systems...",
        "> Mounting modules: Python, React, TensorFlow, FastAPI",
        "> Configuring system architecture...",
        "> STATUS: READY FOR DEPLOYMENT",
        "> "
    ];

    async function typeHeroLog() {
        heroTerminal.innerHTML = "";
        const container = document.createElement("div");
        heroTerminal.appendChild(container);
        const cursor = document.createElement("span");
        cursor.className = "hero-cursor";

        for (let i = 0; i < heroLines.length; i++) {
            const text = heroLines[i];
            const line = document.createElement("span");
            line.className = "hero-line";
            container.appendChild(line);
            line.appendChild(cursor);

            for (const char of text) {
                const charSpan = document.createElement("span");
                charSpan.textContent = char;
                line.insertBefore(charSpan, cursor);
                await new Promise(r => setTimeout(r, Math.random() * 20 + 40));
            }
            if (i < heroLines.length - 1) await new Promise(r => setTimeout(r, 400));
        }
    }
    typeHeroLog();
});

// =========================================
// 3D BRAIN MODEL (Three.js) - FINAL PRODUCTION
// =========================================
document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("brain-container");
    if (!container) return;

    const scene = new THREE.Scene();

    // CAMERA
    const camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 1000);
    camera.position.set(0, 0, 5);

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    container.appendChild(renderer.domElement);

    // Light (Subtle, for any meshes)
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    let brainModel = null;
    const loader = new THREE.GLTFLoader();

    loader.load(
        'components/brain.glb',
        (gltf) => {
            const rawScene = gltf.scene;
            const newGroup = new THREE.Group();

            // ------------------------------------
            // HELPER: GENERATE GLOW TEXTURE
            // ------------------------------------
            function createGlowTexture() {
                const canvas = document.createElement('canvas');
                canvas.width = 32;
                canvas.height = 32;
                const ctx = canvas.getContext('2d');

                // Create radial gradient (Soft Center -> Fade)
                const gradient = ctx.createRadialGradient(16, 16, 0, 16, 16, 16);
                gradient.addColorStop(0, 'rgba(255, 255, 255, 1)');      // White Center (Spark)
                gradient.addColorStop(0.15, 'rgba(0, 245, 212, 1)');     // Spring Green Core (0x00F5D4)
                gradient.addColorStop(0.4, 'rgba(0, 245, 212, 0.2)');    // Soft fade
                gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');

                ctx.fillStyle = gradient;
                ctx.fillRect(0, 0, 32, 32);

                const texture = new THREE.CanvasTexture(canvas);
                return texture;
            }

            // CONVERT MESH TO HYBRID (PARTICLES + WIREFRAME)
            let interactiveLines = []; // Store reference for animation

            rawScene.traverse((node) => {
                if (node.isMesh) {
                    const geometry = node.geometry.clone();

                    // 1. PARTICLES (Points with Balanced Glow)
                    const pointsMaterial = new THREE.PointsMaterial({
                        color: 0x00F5D4, // Updated Cyan (Reference Match)
                        size: 0.7,       // Base size restricted
                        map: createGlowTexture(),
                        transparent: true,
                        opacity: 0.9,
                        depthWrite: false,
                        blending: THREE.AdditiveBlending
                    });
                    const points = new THREE.Points(geometry, pointsMaterial);
                    points.position.copy(node.position);
                    points.rotation.copy(node.rotation);
                    points.scale.copy(node.scale);
                    newGroup.add(points);

                    // 2. BACKGROUND LINES (Wireframe Mesh) - SUBTLE
                    const wireframeMaterial = new THREE.MeshBasicMaterial({
                        color: 0x008B8B, // Dark Cyan
                        wireframe: true,
                        transparent: true,
                        opacity: 0.05,   // Very faint
                        blending: THREE.AdditiveBlending
                    });
                    const wireframe = new THREE.Mesh(geometry, wireframeMaterial);
                    wireframe.position.copy(node.position);
                    wireframe.rotation.copy(node.rotation);
                    wireframe.scale.copy(node.scale);
                    newGroup.add(wireframe);

                    // 3. INTERACTIVE LINES (Sequential Drawing)
                    // We use WireframeGeometry to get segments we can animate (setDrawRange)
                    const lineGeo = new THREE.WireframeGeometry(geometry);
                    const lineMat = new THREE.LineBasicMaterial({
                        color: 0x00F5D4, // Updated Cyan (Reference Match)
                        transparent: true,
                        opacity: 0.8,
                        depthWrite: false,
                        blending: THREE.AdditiveBlending
                    });
                    const lines = new THREE.LineSegments(lineGeo, lineMat);
                    lines.geometry.setDrawRange(0, 0); // Start Hidden

                    lines.position.copy(node.position);
                    lines.rotation.copy(node.rotation);
                    lines.scale.copy(node.scale);

                    interactiveLines.push(lines);
                    newGroup.add(lines);
                }
            });

            brainModel = newGroup;

            // ------------------------------------
            // AUTO-NORMALIZATION (Crucial Fix)
            // ------------------------------------
            const box = new THREE.Box3().setFromObject(brainModel);
            const size = new THREE.Vector3();
            box.getSize(size);
            const center = new THREE.Vector3();
            box.getCenter(center);

            // 1. Center it
            brainModel.position.x -= center.x;
            brainModel.position.y -= center.y;
            brainModel.position.z -= center.z;

            // 2. Scale to exactly 60.0 units (Doubling Size)
            const maxDim = Math.max(size.x, size.y, size.z);
            if (maxDim > 0) {
                const targetSize = 32.0;
                const scaleFactor = targetSize / maxDim;
                brainModel.scale.set(scaleFactor, scaleFactor, scaleFactor);
            }

            // 3. Final Position (Centered in Visual Panel)
            brainModel.position.x = 0;
            brainModel.position.y = 0;

            scene.add(brainModel);
            console.log(">> SYSTEM: BRAIN MODULE LOADED & NORMALIZED");
        },
        (xhr) => { },
        (error) => { console.error(error); }
    );

    // ------------------------------------
    // HOVER INTERACTION LOGIC
    // ------------------------------------
    let isHovering = false;

    // Smooth Animation State
    const state = {
        rotationSpeed: 0.1,    // Base speed
        rotationY: 0,          // Current rotation
        lineDrawProgress: 0    // 0.0 to 1.0
    };

    container.addEventListener('mouseenter', () => {
        if (window.innerWidth > 768) isHovering = true;
    });
    container.addEventListener('mouseleave', () => { isHovering = false; });

    const clock = new THREE.Clock();

    function animate() {
        requestAnimationFrame(animate);
        const delta = clock.getDelta();
        const time = clock.getElapsedTime();

        if (brainModel) {
            // --- ROTATION LOGIC ---
            if (isHovering) {
                // 1. Slow down rotation speed to 0
                state.rotationSpeed = THREE.MathUtils.lerp(state.rotationSpeed, 0, delta * 2);

                // 2. Gently move rotation to 0 (Original Place)
                // Use a damper to pull current rotation towards 0
                brainModel.rotation.y = THREE.MathUtils.lerp(brainModel.rotation.y, 0, delta * 2);

                // 3. Draw Lines (0 -> 1)
                state.lineDrawProgress = THREE.MathUtils.lerp(state.lineDrawProgress, 1, delta * 1.5);

            } else {
                // 1. Restore rotation speed
                state.rotationSpeed = THREE.MathUtils.lerp(state.rotationSpeed, 0.1, delta * 2);

                // 2. Apply continuous rotation
                brainModel.rotation.y += state.rotationSpeed * delta;

                // 3. Hide Lines (1 -> 0)
                state.lineDrawProgress = THREE.MathUtils.lerp(state.lineDrawProgress, 0, delta * 4);
            }

            // Update Line Draw Range
            brainModel.traverse((node) => {
                if (node.isLineSegments) {
                    // Calculate max count roughly logic
                    // WireframeGeometry uses position attribute size
                    const count = node.geometry.attributes.position.count; // Total vertices
                    const drawCount = Math.floor(count * state.lineDrawProgress);
                    node.geometry.setDrawRange(0, drawCount);
                }
            });

            // Hover (Subtle, Lowered)
            brainModel.position.y = -12.0 + Math.sin(time * 0.5) * 0.2;

            // Blinking / Balanced Pulse
            brainModel.traverse((node) => {
                if (node.isPoints) {
                    // Balanced Pulse Opacity [0.6 to 1.0]
                    node.material.opacity = 0.6 + Math.sin(time * 3) * 0.4;

                    // Controlled Pulse Size [0.7 to 0.85]
                    // Base 0.775 +/- 0.075
                    node.material.size = 0.775 + Math.sin(time * 3) * 0.075;
                }
            });
        }

        renderer.render(scene, camera);
    }
    animate();

    window.addEventListener('resize', () => {
        if (!container) return;
        renderer.setSize(container.clientWidth, container.clientHeight);
        camera.aspect = container.clientWidth / container.clientHeight;
        camera.updateProjectionMatrix();
    });
});

// =========================================
// MOBILE & TABLET WARNING POPUP LOGIC
// =========================================
document.addEventListener("DOMContentLoaded", () => {
    const warningPopup = document.getElementById("mobile-warning-popup");

    function checkDevice() {
        // Check if mobile or tablet (<= 1023px)
        if (window.innerWidth <= 1023) {
            document.body.style.overflow = "hidden"; // Disable scroll
            if (warningPopup) {
                warningPopup.classList.add("active");
                warningPopup.classList.remove("hidden");
            }
        } else {
            document.body.style.overflow = ""; // Enable scroll
            if (warningPopup) {
                warningPopup.classList.remove("active");
                warningPopup.classList.add("hidden");
            }
        }
    }

    // Run on load
    checkDevice();

    // Run on resize (for orientation changes/window scaling)
    window.addEventListener("resize", checkDevice);
});
