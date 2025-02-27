function showSection(sectionId) {
    document.querySelectorAll('.section').forEach(section =>{
        section.classList.remove('active');
    });
    document.getElementById(sectionId).classList.add('active');
}

function scrollToTop() {
        window.scrollTo({ top: 0, behavior: "smooth" });
}
