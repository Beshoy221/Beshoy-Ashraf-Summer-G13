
function changeWord(){
var sp = document.getElementById('sp-word')
    sp.innerText = "COPIED!";
   setTimeout(() => {
    sp.innerText = "COUPON25";
  }, 2000)
}
 document.querySelectorAll('[data-bs-toggle="popover"]').forEach(function (el) {
    new bootstrap.Popover(el);
  });
  
 var buttons = document.querySelectorAll('[data-tab]');
  var contents = document.querySelectorAll('[id^="tab"]');

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      buttons.forEach(b => b.classList.remove('active'));

      contents.forEach(c => c.classList.add('d-none'));

      btn.classList.add('active');

      document.getElementById(btn.dataset.tab).classList.remove('d-none');
    });
  });

document.querySelectorAll(".hover-check").forEach(check => {
  check.addEventListener("mouseenter", () => {
    check.checked = true;
  });
  
  check.addEventListener("mouseleave", () => {
    check.checked = false;
  });
});
 var zoomContainer = document.querySelector('.zoom-container');
  var zoomImage = document.getElementById('zoomImage');

  zoomContainer.addEventListener('mousemove', function (e) {
    const { left, top, width, height } = zoomContainer.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;

    zoomImage.style.transformOrigin = `${x}% ${y}%`;
    zoomImage.style.transform = 'scale(2)';
  });

  zoomContainer.addEventListener('mouseleave', function () {
    zoomImage.style.transformOrigin = 'center center';
    zoomImage.style.transform = 'scale(1)';
  });
  
  function handleFilter(category){
    let categories = document.querySelectorAll('.categories')
     categories.forEach((element)=>{
  (category == 'ALL') ? element.classList.remove('d-none') : element.classList.add('d-none')
} )
if (category != 'ALL')
{
  let categoryItems = document.querySelectorAll(`[data-category=${category}]`)
  console.log(categoryItems)
  categoryItems.forEach((element)=>{
    element.classList.remove('d-none')
  } 
  )}

  }
  function handleChangeImg(element){
    let img = document.getElementById('zoomImage')
    img.src = element.src
}







