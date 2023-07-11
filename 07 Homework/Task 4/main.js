window.onload = function() {
  let button = document.getElementById('btn1');
  button.addEventListener('click', deleteSelectedItem);
};

function deleteSelectedItem() {
  let list = document.getElementById('list');
  let selectedIndex = list.selectedIndex;
  list.remove(selectedIndex);
}