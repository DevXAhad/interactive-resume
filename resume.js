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
    // Select form and resume elements
    var form = document.getElementById('resume-builder-form');
    var nameField = document.getElementById('name');
    var emailField = document.getElementById('email');
    var phoneField = document.getElementById('phone');
    var educationField = document.getElementById('education');
    var skillsField = document.getElementById('skills-input');
    var workField = document.getElementById('work');
    // Dynamic resume display elements
    var nameDisplay = document.getElementById('name-display');
    var emailDisplay = document.getElementById('email-display');
    var phoneDisplay = document.getElementById('phone-display');
    var educationDisplay = document.getElementById('education-display');
    var skillsList = document.getElementById('skills-list');
    var workDisplay = document.getElementById('work-display');
    // Handle form submission to update the resume
    form.addEventListener('submit', function (e) {
        e.preventDefault();
        nameDisplay.textContent = nameField.value;
        emailDisplay.textContent = emailField.value;
        phoneDisplay.textContent = phoneField.value;
        educationDisplay.textContent = educationField.value;
        workDisplay.textContent = workField.value;
        skillsList.innerHTML = ''; 
        var skillsArray = skillsField.value.split(','); 
        skillsArray.forEach(function (skill) {
            var li = document.createElement('li');
            li.textContent = skill.trim();
            li.setAttribute('contenteditable', 'true'); 
            skillsList.appendChild(li);
        });
        
        form.reset();
    });
    
    document.querySelectorAll('.resume-section p, .resume-section h2').forEach(function (element) {
        var htmlElement = element;
        htmlElement.addEventListener('click', function () {
            htmlElement.setAttribute('contenteditable', 'true');
            htmlElement.focus();
        });
        htmlElement.addEventListener('blur', function () {
            htmlElement.removeAttribute('contenteditable');
        });
    });
});
