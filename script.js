document.addEventListener("DOMContentLoaded", function () {
    const cards = document.querySelectorAll('.card-content');
  
    cards.forEach(card => {
      const progressBar = card.querySelector('.progress');
      const percentageText = card.querySelector('.percentage');
      let targetPercentage = parseInt(percentageText.innerText);
      let currentPercentage = 0;
      let animationInterval;
  
      const animateProgress = () => {
        if (currentPercentage < targetPercentage) {
          currentPercentage++;
          progressBar.style.width = `${currentPercentage}%`;
          percentageText.innerText = `${currentPercentage}%`;
        } else if (currentPercentage > targetPercentage) {
          currentPercentage--;
          progressBar.style.width = `${currentPercentage}%`;
          percentageText.innerText = `${currentPercentage}%`;
        }
        if (currentPercentage === targetPercentage) {
          clearInterval(animationInterval);
        }
      };
  
      card.addEventListener('mouseover', () => {
        clearInterval(animationInterval);
        animationInterval = setInterval(animateProgress, 10); // Atualiza a cada 20ms
      });
  
      card.addEventListener('mouseleave', () => {
        clearInterval(animationInterval);
        currentPercentage = 0;
        progressBar.style.width = `${currentPercentage}%`;
        percentageText.innerText = `${currentPercentage}%`;
      });
    });
  });
  