const postList = document.getElementById('post-list');
const postTitleInput = document.getElementById('post-title');
const addPostButton = document.getElementById('add-post');

const apiUrl = 'https://jsonplaceholder.typicode.com/posts';

// Function to fetch and display posts
async function fetchPosts() {
  try {
    const response = await fetch(apiUrl);
    const posts = await response.json();

    postList.innerHTML = '';
    posts.forEach(post => {
      const li = document.createElement('li');
      li.innerHTML = `${post.id}: ${post.title}`;
      postList.appendChild(li);
    });
  } catch (error) {
    console.error('Error fetching posts:', error);
  }
}

// Function to add a new post
async function addPost() {
  const postTitle = postTitleInput.value;

  if (postTitle) {
    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title: postTitle }),
      });

      if (response.ok) {
        postTitleInput.value = '';
        fetchPosts();
      } else {
        console.error('Error adding post:', response.statusText);
      }
    } catch (error) {
      console.error('Error adding post:', error);
    }
  }
}

addPostButton.addEventListener('click', addPost);

// Fetch and display posts when the page loads
fetchPosts();
