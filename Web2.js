function showArticle(index) {
    document.querySelectorAll('.article').forEach((article, i) => {
        article.classList.toggle('active', i === index);
    });
}