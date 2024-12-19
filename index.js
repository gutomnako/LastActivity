document.addEventListener("DOMContentLoaded", function() {
    const hobbies = document.querySelectorAll('.hobby');
    
    hobbies.forEach(hobby => {
      hobby.addEventListener('click', () => {
        alert('More information about this hobby!');
      });
    });
  });
  