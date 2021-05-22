var line = document.querySelector('#line'),
    bodyHeight = document.body.clientHeight,
    doc = document.documentElement;

setWidthLine();

document.addEventListener('scroll', function() {
   setWidthLine();
});

document.addEventListener('resize', function() {
   setWidthLine();
});

function setWidthLine() {
   var scrollTop = (window.pageYOffset || doc.scrollTop)  - (doc.clientTop || 0),
       percent;
   scrollTop += doc.clientHeight;
   
   percent = scrollTop / bodyHeight * 100;
   line.style.width = percent + '%';
}