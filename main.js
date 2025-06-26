
const topButton = document.getElementById("topBtn");

console.log("topButton");
function showButton() {
    if (window.scrollY > 100) {
      topButton.style.display = 'block';
    } else {
      topButton.style.display = 'none';
    }
  }
  
  // Wywołujemy funkcję na początku, aby sprawdzić czy użytkownik już przewinął stronę
  showButton();
  
  // Dodajemy event listener, który będzie wywoływał funkcję przy każdym scrollowaniu
  window.addEventListener('scroll', showButton);

