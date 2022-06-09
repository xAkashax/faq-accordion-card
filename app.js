const links = document.querySelectorAll('h3');

for (let i = 0; i < links.length; i++ ) {
  links[i].addEventListener('click', function(){
    this.classList.toggle('bold');
  });
}