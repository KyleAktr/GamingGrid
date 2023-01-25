const letsgo = document.getElementById('letsgo')

const Home = (argument = '') => {
    console.log('Page List', argument);
    letsgo.innerHTML = `
    <h1>Welcome,</h1>
    <p>   
    Gaming Grid is the world's premier event for computer and video games and related products. At Gaming Grid, the video game industry's top talent pack the Los Angeles Convention Center, connecting tens of thousands of the best, brightest, and most innovative in the interactive entertainment industry like me. For three exciting days, leading-edge companies, groundbreaking new technologies, and never-before-seen products will be showcased. Gaming Grid connects you with both new and existing partners, industry executives, gamers ans social influencers providing unprecedented exposure.
    </p>`
  };

  

export { Home };