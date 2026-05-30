
document.addEventListener('DOMContentLoaded', () => {

    // Получаем текущий файл
    let currentPage = window.location.pathname.split('/').pop();

    // Если открыли просто домен
    if (currentPage === '') {
        currentPage = 'index.html';
    }

    // Ищем все ссылки меню
    document.querySelectorAll('.nav-link[data-page]')
        .forEach(link => {

            if (link.dataset.page === currentPage) {
                link.classList.add('active');
            }

        });

});



/*Генерация инвентарного кода для ПК */



async function generatePCCode() {

    const response = await fetch('/generate-pc-code');

    const data = await response.json();

    document.getElementById('pcCode').value =
        data.code;
}

document.addEventListener(
    'DOMContentLoaded',
    generatePCCode
);
