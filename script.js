// Dark Mode Toggle
document.addEventListener('DOMContentLoaded', function() {
    const darkModeToggle = document.getElementById('darkModeToggle');
    const body = document.body;
    const icon = darkModeToggle.querySelector('i');

    // Check for saved dark mode preference
    const darkMode = localStorage.getItem('darkMode');
    if (darkMode === 'enabled') {
        body.classList.add('dark-mode');
        icon.classList.replace('fa-moon', 'fa-sun');
    }

    darkModeToggle.addEventListener('click', function() {
        body.classList.toggle('dark-mode');
        
        // Toggle icon
        if (body.classList.contains('dark-mode')) {
            icon.classList.replace('fa-moon', 'fa-sun');
            localStorage.setItem('darkMode', 'enabled');
        } else {
            icon.classList.replace('fa-sun', 'fa-moon');
            localStorage.setItem('darkMode', null);
        }
    });
});

// Comments System
document.addEventListener('DOMContentLoaded', function() {
    const commentForms = document.querySelectorAll('.comment-form');
    
    commentForms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formData = new FormData(form);
            const name = formData.get('name');
            const comment = formData.get('comment');
            
            // In a real application, this would be an AJAX call to a server
            // For demo purposes, we'll simulate adding a comment
            addComment(form.closest('.comments-section').querySelector('.comments-list'), name, comment);
            
            // Clear the form
            form.reset();
        });
    });
});

function addComment(commentsList, name, comment) {
    const commentElement = document.createElement('div');
    commentElement.className = 'comment';
    commentElement.innerHTML = `
        <strong>${name}</strong>
        <p class="mb-0">${comment}</p>
        <small class="text-muted">Just now</small>
    `;
    
    commentsList.appendChild(commentElement);
    
    // Add animation
    commentElement.style.opacity = '0';
    commentElement.style.transform = 'translateY(20px)';
    
    setTimeout(() => {
        commentElement.style.transition = 'all 0.3s ease';
        commentElement.style.opacity = '1';
        commentElement.style.transform = 'translateY(0)';
    }, 10);
} 