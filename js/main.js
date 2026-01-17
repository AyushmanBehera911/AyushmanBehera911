
document.addEventListener('DOMContentLoaded', () => {
    initSpotlightEffect();
    initProjects();
    smoothScroll();
    

    lucide.createIcons();
});


function initSpotlightEffect() {
    const cards = document.querySelectorAll('.glass-card');
    
    document.addEventListener('mousemove', (e) => {
        cards.forEach(card => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            card.style.setProperty('--mouse-x', `${x}px`);
            card.style.setProperty('--mouse-y', `${y}px`);
        });
    });
}


function initProjects() {
    const container = document.getElementById('projects-container');
    if (!container || typeof projects === 'undefined') return;

    container.innerHTML = projects.map((project, index) => {
        const delay = index * 100;
        
        return `
        <a href="project.html?id=${project.id}" class="group block animate-fade-up opacity-0" style="animation-delay: ${delay}ms">
            <div class="glass h-full rounded-2xl p-6 transition-all duration-300 hover:bg-[#1a1a1a] hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/50 border border-white/5 relative overflow-hidden flex flex-col">
                

                <div class="h-48 w-full bg-neutral-900 rounded-xl mb-6 overflow-hidden relative">
                    <img src="${project.image}" alt="${project.title}" class="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500">
                    <div class="absolute top-2 right-2 bg-black/40 backdrop-blur-md rounded-lg p-2 text-accent border border-white/10">
                        <i data-lucide="${project.icon}"></i>
                    </div>
                </div>


                <div class="flex-grow">
                    <div class="flex items-center gap-2 mb-3">
                        <span class="text-xs font-mono uppercase tracking-wider text-accent bg-accent/10 px-2 py-1 rounded">
                            ${project.type.split('/')[0]}
                        </span>
                    </div>
                    
                    <h3 class="font-heading text-xl font-bold mb-2 group-hover:text-accent transition-colors">${project.title}</h3>
                    <p class="text-sm text-gray-400 leading-relaxed mb-6">
                        ${project.shortDescription}
                    </p>
                </div>
                

                <div class="mt-auto border-t border-white/5 pt-4 flex items-center gap-2 text-xs text-gray-500 font-mono">
                    <span>${project.tech[0]}</span>
                    <span class="w-1 h-1 rounded-full bg-gray-700"></span>
                    <span>${project.tech[1]}</span>
                    ${project.tech[2] ? `<span class="w-1 h-1 rounded-full bg-gray-700"></span><span>${project.tech[2]}</span>` : ''}
                </div>
            </div>
        </a>
        `;
    }).join('');
    

    lucide.createIcons();
}


function smoothScroll() {
    const links = document.querySelectorAll('.nav-link');
    
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            const targetId = link.getAttribute('href');
            

            if (!targetId.startsWith('#')) return;

            e.preventDefault();
            const targetSection = document.querySelector(targetId);
            if (!targetSection) return;
            

            links.forEach(l => l.classList.remove('active-link'));
            link.classList.add('active-link');
            
            window.scrollTo({
                top: targetSection.offsetTop - 100, // Offset for navbar
                behavior: 'smooth'
            });
        });
    });
    

}
