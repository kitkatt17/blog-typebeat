const commentedFormHandler = async (event) => {
    event.preventDefault();
  
    const postId = document.querySelector('input[name="post-id"]').value;
    const body = document.querySelector('textarea[name="comment-body"]').value;
  
    if (!body) return;
  
    try {
      await fetch('/api/commented', {
        method: 'post',
        body: JSON.stringify({ postId, body }),
        headers: { 'Content-Type': 'application/json' }
      });
  
      document.location.reload();
    } catch (err) {
      console.error('Failed to submit comment:', err);
    }
  };
  
  document
    .querySelector('#new-comment-form')
    .addEventListener('submit', commentedFormHandler);
  