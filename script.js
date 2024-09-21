
const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const formData = new FormData(form);

  fetch(form.action, {
    method: form.method,
    body: formData,
  })
    .then(response => response.json())
    .then(data => {
      if (data.success) {
        alert('Formulário enviado com sucesso!');
      } else {
        alert('Erro ao enviar o formulário: ' + data.message);
      }
    })
    .catch(error => {
      alert('Erro ao enviar o formulário: ' + error);
    });
});
