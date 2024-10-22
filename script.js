document.getElementById('portfolio-link').addEventListener('mouseover', function() {
  const logo = document.getElementById('logo');
  logo.style.transition = 'transform 0.3s ease-in-out';
  logo.style.transform = 'scale(1.2)'; // Scale up on hover
});

document.getElementById('portfolio-link').addEventListener('mouseout', function() {
  const logo = document.getElementById('logo');
  logo.style.transform = 'scale(1)'; // Reset scale after hover
});
