document.addEventListener('DOMContentLoaded', function () {
    var toggleSkillsButton = document.getElementById('toggle-skills');
    var skillsSection = document.getElementById('skills');
    if (toggleSkillsButton && skillsSection) {
        toggleSkillsButton.addEventListener('click', function () {
            var currentDisplay = window.getComputedStyle(skillsSection).display;
            if (currentDisplay === 'none') {
                skillsSection.style.display = 'block';
                toggleSkillsButton.textContent = 'Hide Skills';
            }
            else {
                skillsSection.style.display = 'none';
                toggleSkillsButton.textContent = 'Show Skills';
            }
        });
    }
});
