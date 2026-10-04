const form = document.querySelector('.login-form');
form.addEventListener('submit', event => { event.preventDefault();
const formData = new FormData(form); const data = {};
for (const [name, value] of formData) { const trimmedValue = value.trim();
if (trimmedValue === '') {
  alert('All form fields must be filled in');
  return;
}

data[name] = trimmedValue;
}
console.log(data);
form.reset(); });
