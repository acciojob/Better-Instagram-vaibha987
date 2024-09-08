let source;
document.querySelectorAll('.image').forEach(item => {
  item.addEventListener('dragstart', dragStart);
  item.addEventListener('dragover', dragOver);
  item.addEventListener('drop', dragDrop);
});

function dragStart(e) {
 source = e.target;
}
function dragOver(e) {
  e.preventDefault();
}

function dragDrop(e) {
  let temp = e.target.style.backgroundImage;
  e.target.style.backgroundImage = source.style.backgroundImage;
  source.style.backgroundImage = temp;
}