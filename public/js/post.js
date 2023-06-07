const createPost = async function(event) {
    event.preventDefault();
  
    const postTitle = document.querySelector('input[name="post-title"]').value;
    const postBody = document.querySelector('textarea[name="post-body"]').value;

    await fetch('/api/post', {
      method: 'post',
      body: JSON.stringify({
        title: postTitle,
        body: postBody,
      }),
      headers: { 'Content-Type': 'application/json' },
    });
  
    document.location.replace('/dashboard');
  };
  
  document
    .querySelector('#new-post-form')
    .addEventListener('submit', createPost);
  