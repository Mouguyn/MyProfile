const projects = [
    {
        title: 'Demo1',
        description: 'Something that can be updated in the future.',
        image: 'assets/img/demo.jpg',
        technologies: ['...', '...', '...', '...', '...', '...', '...', '...', '... ...'],
        link: [
            '#',
        ]
    },
    {
        title: 'Demo2',
        description: 'Something that can be updated in the future.',
        image: 'assets/img/demo2.jpg',
        technologies: ['...', '...', '...', '...', '...'],
        link: [
            '#',
            
        ]
    },
    {
        title: 'Demo3',
        description: 'Something that can be updated in the future.',
        image: 'assets/img/demo3.jpg',
        technologies: ['... ...', '...', '...', '...', '...', '...', '...', '...', '...'],
        link: [
            '#'
        ]
    }
]

function showProjectModal(index) {
    console.log(index);
    let modalTitle = document.getElementById('modalTitle');
    let modalImage = document.getElementById('modalImage');
    let modalAbout = document.getElementById('modalAbout');
    let modalTechnologies = document.getElementById('modalTechnologies');
    let modalURLs = document.getElementById('modalURLs');

    modalTitle.innerHTML = projects[index].title;
    modalImage.src = projects[index].image;
    modalAbout.innerHTML = projects[index].description;
    modalTechnologies.innerHTML = '';
    projects[index].technologies.forEach(technology => {
        modalTechnologies.innerHTML += `<p>${technology}</p>`;
    });
    modalURLs.innerHTML = '';
    projects[index].link.forEach(link => {
        modalURLs.innerHTML += `<a href="${link}" target="_blank">${link}</a>`;
    });

    let modal = document.getElementById('modal');
    modal.classList.remove('hidden');
}

function hideModal() {
    let modal = document.getElementById('modal');
    modal.classList.add('hidden');
}

window.addEventListener("load", loading)
function loading() {
    let loading = document.getElementById('loading');
    loading.classList.add('hidden');
}