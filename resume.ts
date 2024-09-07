document.addEventListener('DOMContentLoaded', () => {
  const toggleSkillsButton = document.getElementById('toggle-skills') as HTMLButtonElement | null;
  const skillsSection = document.getElementById('skills') as HTMLElement | null;

  if (toggleSkillsButton && skillsSection) {
    toggleSkillsButton.addEventListener('click', () => {
      const currentDisplay = window.getComputedStyle(skillsSection).display;

      if (currentDisplay === 'none') {
        skillsSection.style.display = 'block';
        toggleSkillsButton.textContent = 'Hide Skills';
      } else {
        skillsSection.style.display = 'none';
        toggleSkillsButton.textContent = 'Show Skills';
      }
    });
  }
});
