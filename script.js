function showSection(sectionId) {

    const sections = document.querySelectorAll('.section');
    sections.forEach(section => section.classList.remove('active-section'));

    const selectedSection = document.getElementById(sectionId);
    selectedSection.classList.add('active-section');
}
