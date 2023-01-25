const letsgo = document.getElementById('letsgo');
const ApiKey = `ef0d2103394a461692c98a071c8e1888`;

const PageDetail = (argument) => {
    const preparePage = () => {
      const cleanedArgument = argument.trim().replace(/\s+/g, "-");
  
      const displayGame = (gameData) => {
        const { name, released, description, background_image } = gameData;
        const articleDOM = document.querySelector(".page-detail .article");
        articleDOM.querySelector("h1.title").innerHTML = name;
        articleDOM.querySelector("p.release-date span").innerHTML = released;
        articleDOM.querySelector("p.description").innerHTML = description;
        articleDOM.querySelector("background_image").innerHTML = background_image;

      };
  
      const fetchGame = (url, argument) => {
        fetch(`${url}/${argument}?key=${ApiKey}`)
          .then((response) => response.json())
          .then((responseData) => {
            displayGame(responseData);
          });
      };
  
      fetchGame('https://api.rawg.io/api/games', cleanedArgument);
    };
  
    const render = () => {
      letsgo.innerHTML = `
        <section class="page-detail">
          <div class="article">
            <h1 class="title"></h1>
            <p class="release-date">Release date : <span></span></p>
            <p class="description"></p>
            <div class="card" style="background-image: url="background_image"></div>
          </div>
        </section>
      `;
  
      preparePage();
    };
  
    render();
  };
  
  export { PageDetail };