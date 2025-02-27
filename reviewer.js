function showSection(sectionId) {
    document.querySelectorAll('.section').forEach(section =>{
        section.classList.remove('active');
    });
    document.getElementById(sectionId).classList.add('active');
}

const backToTopButton = document.getElementById("backToTop");

        window.onscroll = function() {
            if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
                backToTopButton.style.display = "block";
            } else {
                backToTopButton.style.display = "none";
            }
        };

        function scrollToTop() {
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
