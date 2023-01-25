const letsgo = document.getElementById('letsgo');
const ApiKey = `ef0d2103394a461692c98a071c8e1888`;

const Template = (argument = '') => {

    const preparePage = () => {
      const cleanedArgument = argument.trim().replace(/\s+/g, '-');
  
      const displayResults = (articles) => {
        const resultsContent = articles.map((article) => (
            `<div class="card-container">
            <div class="card" style="background-image: url(${article.background_image}); background-size: cover;">
              <article class="cardGame">
                <h1>${article.name}</h1>
                <h2>${article.released}</h2>
                <a class="card-link" href="#pagedetail/${article.id}">Details</a>
              </article>
            </div>
          </div>
          `
        ));
        const resultsContainer = document.querySelector('.page-list .articles');
        resultsContainer.innerHTML = resultsContent.join("\n");
      };

      const cardLinks = document.querySelectorAll('.card-link');
        cardLinks.forEach(link => {
            link.addEventListener('click', event => {
            // Code à exécuter lorsque la carte est cliquée
            });
        });

  
      const fetchList = (url, argument) => {
        const finalURL = argument ? `${url}&search=${argument}` : url;
        fetch(finalURL)
          .then((response) => response.json())
          .then((responseData) => {
            displayResults(responseData.results)
          });
      };
  
      fetchList(`https://api.rawg.io/api/games?key=${ApiKey}`, cleanedArgument);
      console.log(`https://api.rawg.io/api/games?key=${ApiKey}`);
    };
  
    const render = () => {
      letsgo.innerHTML = `
        <section class="page-list">
          <div class="articles">Loading...</div>
        </section>
      `;
      preparePage();
    };

  
    render();
  };


  
  export { Template };
  