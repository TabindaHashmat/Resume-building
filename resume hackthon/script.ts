
document.getElementById('resumeForm')?.addEventListener('submit', function(event) {
    event.preventDefault();

    // Type assertion
    const nameElement = document.getElementById('name') as HTMLInputElement;
    const emailElement = document.getElementById('email') as HTMLInputElement;
    const phoneElement = document.getElementById('phone') as HTMLInputElement;
    const educationElement = document.getElementById('education') as HTMLTextAreaElement;
    const experienceElement = document.getElementById('experience') as HTMLTextAreaElement;
    const skillsElement = document.getElementById('skills') as HTMLTextAreaElement;

    // Update fieldset classes based on content
    updateFieldsetClass(educationElement);
    updateFieldsetClass(experienceElement);
    updateFieldsetClass(skillsElement);

    // Create resume output
    const name = nameElement.value;
    const email = emailElement.value;
    const phone = phoneElement.value;
    const education = educationElement.value;
    const experience = experienceElement.value;
    const skills = skillsElement.value;

    const resumeOutput = `
        <h2>Resume</h2>
        <p><strong>Name: </strong>${name}</p>
        <p><strong>Email: </strong>${email}</p>
        <p><strong>Phone: </strong>${phone}</p>

        <h3>Education</h3>
        <p>${education}</p>

        <h3>Experience</h3>
        <p>${experience}</p>

        <h3>Skills</h3>
        <p>${skills}</p>
    `;

    const resumeOutputElement = document.getElementById('resumeOutput');
    if (resumeOutputElement) {
        resumeOutputElement.innerHTML = resumeOutput;
    } else {
        console.error('The resume output element is missing');
    }
});

function updateFieldsetClass(textareaElement) {
    const fieldset = textareaElement.parentElement;
    if (textareaElement.value.trim() === '') {
        fieldset.classList.remove('filled');
        fieldset.classList.add('empty');
    } else {
        fieldset.classList.remove('empty');
        fieldset.classList.add('filled');
    }
}

// Initial update to set classes based on initial content
['education', 'experience', 'skills'].forEach(id => {
    const element = document.getElementById(id) as HTMLTextAreaElement;
    if (element) updateFieldsetClass(element);
});
