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

  const form = document.getElementById('resume-builder-form') as HTMLFormElement;
  const nameField = document.getElementById('name') as HTMLInputElement;
  const emailField = document.getElementById('email') as HTMLInputElement;
  const phoneField = document.getElementById('phone') as HTMLInputElement;
  const educationField = document.getElementById('education') as HTMLInputElement;
  const skillsField = document.getElementById('skills-input') as HTMLInputElement;
  const workField = document.getElementById('work') as HTMLInputElement;

  const nameDisplay = document.getElementById('name-display') as HTMLElement;
  const emailDisplay = document.getElementById('email-display') as HTMLElement;
  const phoneDisplay = document.getElementById('phone-display') as HTMLElement;
  const educationDisplay = document.getElementById('education-display') as HTMLParagraphElement;
  const skillsList = document.getElementById('skills-list') as HTMLUListElement;
  const workDisplay = document.getElementById('work-display') as HTMLParagraphElement;

  form.addEventListener('submit', (e) => {
    e.preventDefault();  

    nameDisplay.textContent = nameField.value;
    emailDisplay.textContent = emailField.value;
    phoneDisplay.textContent = phoneField.value;
    educationDisplay.textContent = educationField.value;
    workDisplay.textContent = workField.value;

    
    skillsList.innerHTML = '';  
    const skillsArray = skillsField.value.split(',');  
    skillsArray.forEach(skill => {
      const li = document.createElement('li');
      li.textContent = skill.trim();
      li.setAttribute('contenteditable', 'true'); 
      skillsList.appendChild(li);
    });

    
    form.reset();
  });

  
  document.querySelectorAll('.resume-section p, .resume-section h2').forEach(element => {
    const htmlElement = element as HTMLElement;
    htmlElement.addEventListener('click', () => {
      htmlElement.setAttribute('contenteditable', 'true');
      htmlElement.focus();
    });

    htmlElement.addEventListener('blur', () => {
      htmlElement.removeAttribute('contenteditable');
    });
  });
});