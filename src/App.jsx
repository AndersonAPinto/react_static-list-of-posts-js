import './App.scss';

import postsFromServer from './api/posts.json';
import commentsFromServer from './api/comments.json';
import usersFromServer from './api/users.json';
import { PostList } from './components/PostList/PostList';

// funciton for take all data comments
function getCommentbyId(postId) {
  return commentsFromServer.filter(comment => comment.postId === postId);
}

function getUserbyId(userId) {
  return usersFromServer.find(user => user.id === userId) || null;
}

// copy of all comments and send postId
export const posts = postsFromServer.map(post => ({
  ...post,
  user: getUserbyId(post.userId),
  comments: getCommentbyId(post.id),
}));

export const App = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>
    <PostList posts={posts} />
  </section>
);
