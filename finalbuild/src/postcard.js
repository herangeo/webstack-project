import React, { useEffect } from 'react';
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, onValue } from 'firebase/database';
import './postcard.css';

const ViewPosts = () => {
    useEffect(() => {
        const firebaseConfig = {
            apiKey: "YAIzaSyAhs0g1RMoV3mBy9BpYMn-X3lq2dCOFT2M",
            authDomain: "video-streaming-platform-wsd.firebaseapp.com",
            projectId: "video-streaming-platform-wsd",
            storageBucket: "Yideo-streaming-platform-wsd.appspot.com",
            messagingSenderId: "5217413066",
            appId: "1:5217413066:web:6948f726c5819edbf41133"
        };

        const app = initializeApp(firebaseConfig);
        const database = getDatabase(app);

        const postsTable = document.getElementById("postsTable");

        function loadPosts() {
            const postsRef = ref(database, 'posts');

            onValue(postsRef, (snapshot) => {
                const posts = snapshot.val();

                postsTable.innerHTML = "";

                for (let postId in posts) {
                    const post = posts[postId];
                    const row = document.createElement("tr");
                    row.innerHTML = `
                        <td>${post.postTitle}  ${post.postContent}</td>`;
                    postsTable.appendChild(row);
                }
            });
        }
        loadPosts();
    }, []);
    return ( // <td>${post.postContent}</td>
      <div>
          <h3>RECENT POSTS</h3>
          <table className="posts-table">
              <thead>
                  <tr>
                      <th></th>
                  </tr>
              </thead>
              <tbody id="postsTable">
              </tbody>
          </table>
      </div>
  );
}

export default ViewPosts;