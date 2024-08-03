function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    section.style.display = 'block';
    section.scrollIntoView({ behavior: 'smooth' });
}
