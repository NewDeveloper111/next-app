'use client';
import { useEffect, useState } from 'react';
import setData from '../includes/setData';
import add from '../includes/add';
import update from '../includes/update';
import remove from '../includes/remove';

type Post = {
  id: string;
  title: string;
};
export default function Posts() {
  const [posts, setPosts] = useState([]);
  const route: string = 'http://localhost:3003/posts';
  let mount = false;
  useEffect(() => {
    if (!mount) {
      mount = true;
      setData(route, setPosts);
    }
  }, []);

  const addPost = async () => {
    add(posts, route, setData, setPosts);
  };
  const updatePost = async (postId: string) => {
    const newTitle = 'Updated post';
    update(postId, newTitle, route, setData, setPosts);
  };
  const deletePost = async (postId: string) => {
    remove(postId, route, setData, setPosts);
  };
  return (
    <div className='container'>
      <h1>Список постов</h1>
      <section>
        {posts.map(({ id, title }: Post) => (
          <li key={id}>
            <div>
              {id}: {title + ' '}
              <div><button onClick={() => updatePost(id)}>Update</button>
              <button onClick={() => deletePost(id)}>Delete</button></div>
            </div>
            <br />
          </li>
        ))
        }
      </section>
      <button onClick={addPost}>Add Post</button>
      <p><br /></p>
     {/*  <div>
        <button onClick={() => setPageIndex(pageIndex > 1 ? pageIndex - 1 : 1)}>Назад</button>
        <button onClick={() => setPageIndex(pageIndex < data.last ? pageIndex + 1 : pageIndex)}>Вперёд</button>
      </div> */}
    </div>
  )
}