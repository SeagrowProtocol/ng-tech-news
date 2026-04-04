const fs = require('fs');

async function fetchNews() {
    const API_KEY = '3f8b592a6a9444d48a48114dc2e6328c';
    // We search for tech jobs and general nigeria tech news
    const query = 'Nigeria tech OR "remote jobs"';
    const url = `https://newsapi.org/v2/everything?q=${encodeURIComponent(query)}&sortBy=publishedAt&language=en&apiKey=${API_KEY}`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        
        if (data.articles) {
            // Keep the latest 30 articles
            const newsData = JSON.stringify(data.articles.slice(0, 30));
            fs.writeFileSync('news.json', newsData);
            console.log('Successfully updated news.json');
        }
    } catch (error) {
        console.error('Update failed:', error);
        process.exit(1);
    }
}

fetchNews();
