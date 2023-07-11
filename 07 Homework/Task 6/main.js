window.addEventListener('resize', function() {
  let width = window.innerWidth;
  let height = window.innerHeight;
  let dimensions = document.getElementById('dimensions');
  dimensions.textContent = `Width: ${width}  px, Height: ${height} px`;
});