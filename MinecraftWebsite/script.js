function showInfo(sectionId) {
    // Hide all articles
    const articles = document.querySelectorAll('section.info article');
    articles.forEach(article => article.classList.add('hidden'));

    // Show the selected article
    const selectedArticle = document.getElementById(sectionId);
    selectedArticle.classList.remove('hidden');
}
