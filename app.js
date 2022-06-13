const links = document.querySelectorAll('summary');
const box = document.querySelector('.img-box');

for (let i = 0; i < links.length; i++ ) {
  links[i].addEventListener('click', function(){
    this.querySelector('h3').classList.toggle('bold');
  });
  links[i].addEventListener('mouseover', function(){
    box.style.transform = "translateX(-35px)";
  });
  links[i].addEventListener('mouseout', function(){
    box.style.transform = "translateX(0)";
});
}

