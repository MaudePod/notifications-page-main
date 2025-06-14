document.querySelector("button[id='mark-all-as-read']").addEventListener('click', () => {
    document.querySelectorAll("article[class*='new']").forEach(article => {
        article.classList.remove('new');
    });
    document.querySelector("span[class='notification-count']").innerHTML = 0;
})