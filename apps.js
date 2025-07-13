fetch('http://localhost:3000/api/profile')
  .then(res => res.json())
  .then(data => {
    document.getElementById('bio').textContent = data.bio;
    data.skills.forEach(skill => {
      const li = document.createElement('li');
      li.textContent = skill;
      document.getElementById('skills-list').appendChild(li);
    });
    document.getElementById('github').href = data.social.github;
    document.getElementById('insta').href = data.social.insta;
    document.getElementById('linkedin').href = data.social.linkedin;
  });

document.getElementById('contact-form').addEventListener('submit', function (e) {
  e.preventDefault();
  const formData = {
    name: this.name.value,
    email: this.email.value,
    message: this.message.value
  };
  fetch('http://localhost:3000/api/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData)
  }).then(() => alert("Message sent!"));
});