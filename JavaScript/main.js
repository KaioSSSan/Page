// изменение цвета фона
document.getElementById('bg-yellow').addEventListener('click', () => {
    document.body.style.backgroundColor = '#c1ef0bff';
});

document.getElementById('bg-lightblue').addEventListener('click', () => {
    document.body.style.backgroundColor = '#4949f2ff';
});

// 2. Идущие часы в заголовке (title)
setInterval(() => {
  const now = new Date();
  const hh = String(now.getHours()).padStart(2, '0');
  const mm = String(now.getMinutes()).padStart(2, '0');
  const ss = String(now.getSeconds()).padStart(2, '0');
  document.title = `${hh}:${mm}:${ss} — HomePage`;
}, 1000);

// 3. Показ текущей даты в pop-up по нажатию кнопки
document.getElementById('show-date').addEventListener('click', () => {
  alert(new Date().toLocaleString());
});
