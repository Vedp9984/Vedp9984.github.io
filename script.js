document.addEventListener('DOMContentLoaded', function () {
  const themeToggle = document.getElementById('theme-toggle');
  const body = document.body;

  themeToggle.addEventListener('click', function () {
      body.classList.toggle('dark-mode');
  });
});
document.addEventListener('DOMContentLoaded', function () {
  const navLinks = document.querySelectorAll('nav a');
  const sections = document.querySelectorAll('section');

  navLinks.forEach((link, index) => {
      link.addEventListener('click', function (event) {
          event.preventDefault();

          sections.forEach((section, i) => {
              section.classList.remove('active');
              if (i === index) {
                  section.classList.add('active');
              }
          });
      });
  });
  });
   document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });



    function handleLike(button) {
      var likeCount = button.parentNode.querySelector('.like-count');
      var currentLikes = parseInt(likeCount.innerText);
      likeCount.innerText = (currentLikes + 1) + ' likes';
  }

  function showCommentSection(button) {
      var commentSection = button.parentNode.querySelector('.comment-section');
      commentSection.style.display = 'block';
  }

  function addComment(button) {
    var commentSection = button.parentNode;
    var commentTextarea = commentSection.querySelector('textarea');
    var commentText = commentTextarea.value;

    // Retrieve existing comments from local storage
    const existingComments = JSON.parse(localStorage.getItem('comments')) || [];

    // Add the new comment to the array
    existingComments.push(commentText);

    // Save the updated comments array back to local storage
    localStorage.setItem('comments', JSON.stringify(existingComments));

    // You can handle the comment as needed, e.g., display it or store it
    console.log('New Comment:', commentText);

    // Clear the textarea and hide the comment section
    commentTextarea.value = '';
    commentSection.style.display = 'none';

    // Update the comment count
    updateCommentCount();
}
