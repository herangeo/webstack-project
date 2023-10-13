import React, { useState, useEffect } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/database';
import './PostForm.css'; 

const firebaseConfig = {
  apiKey: "AIzaSyAhs0g1RMoV3mBy9BpYMn-X3lq2dCOFT2M",
  authDomain: "video-streaming-platform-wsd.firebaseapp.com",
  projectId: "video-streaming-platform-wsd",
  storageBucket: "video-streaming-platform-wsd.appspot.com",
  messagingSenderId: "5217413066",
  appId: "1:5217413066:web:6948f726c5819edbf41133"
};

firebase.initializeApp(firebaseConfig);
const database = firebase.database();


function PostForm() {
  const [postTitle, setPostTitle] = useState('');
  const [message, setMessage] = useState('');
  const [messag, setMessag] = useState([]);
  const [editingPost, setEditingPost] = useState(null);
  

  useEffect(() => {
    const messagesRef = database.ref('posts');

    messagesRef.on('value', (snapshot) => {
      const posts = snapshot.val();
      if (posts) {
        const postArray = Object.entries(posts).map(([key, value]) => ({ id: key, ...value }));
        setMessag(postArray);
      }
    });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editingPost) {
      // Update the existing post
      const postRef = database.ref(`posts/${editingPost.id}`);
      postRef.update({
        postTitle,
        postContent: message
      })
      .then(() => {
        alert('Post updated successfully!');
        setEditingPost(null);
      })
      .catch((error) => {
        console.error('Error updating post:', error);
      });
    } else {
      // Create a new post
      database.ref('posts').push({
        postTitle,
        postContent: message
      });
      alert('Your message has been sent!');
    }

    setPostTitle('');
    setMessage('');
  };

  const handleEdit = (post) => {
    setPostTitle(post.postTitle);
    setMessage(post.postContent);
    setEditingPost(post);
  };

  const handleDelete = (postId) => {
    database.ref(`posts/${postId}`).remove()
      .then(() => {
        alert('Post deleted successfully!');
      })
      .catch((error) => {
        console.error('Error deleting post:', error);
      });
  };

  //Messages List
   const [messages, setMessages] = useState([]);

  useEffect(() => {
    const messagesRef = database.ref("messages");

    const handleChildAdded = (snapshot) => {
      const msg = snapshot.val();
      const msgId = snapshot.key;

      setMessages((prevMessages) => [
        ...prevMessages,
        { id: msgId, ...msg }
      ]);
    };

    // Add messagesRef and handleChildAdded to the dependency array
    messagesRef.on("child_added", handleChildAdded);

    // Remove the event listener when the component unmounts
    return () => {
      messagesRef.off("child_added", handleChildAdded);
    };
  }, [database]);

  const deleteMessage = (msgId) => {
    const messagesRef = database.ref(`messages/${msgId}`);
    messagesRef
      .remove()
      .then(() => {
        // Reload messages after deletion
      })
      .catch((error) => {
        console.error("Error deleting message:", error);
      });
      alert('The message has been deleted');
  };

  return (
    <div>
      <center>
      <div className='container'>
        <div className='c1'>
        <h1>Share an Update</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="post-title">Title:</label>
          <input
            type="text"
            id="post-title"
            name="post-title"
            required
            value={postTitle}
            onChange={(e) => setPostTitle(e.target.value)}
          /><br /><br />

          <label htmlFor="message">Content:</label><br />
          <textarea
            id="message"
            name="message"
            rows="4"
            required
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea><br /><br />

          <button type="submit">{editingPost ? 'Update' : 'Submit'}</button>
        </form>
      </div>
      </div>

      <div className='container'>
        <h1>View Posts</h1>
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Content</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {messag.map((post) => (
              <tr key={post.id}>
                <td>{post.postTitle}</td>
                <td>{post.postContent}</td>
                <td>
                  <button className="edit" onClick={() => handleEdit(post)}>Edit</button>
                  <button className="delete" onClick={() => handleDelete(post.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className='container'>
      <h1>Messages List</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Message</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {messages.map((msg) => (
            <tr key={msg.id}>
              <td>{msg.name}</td>
              <td>{msg.email}</td>
              <td>{msg.message}</td>
              <td>
                <button onClick={() => deleteMessage(msg.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
      </center>
    </div>
  );
}

export default PostForm;
