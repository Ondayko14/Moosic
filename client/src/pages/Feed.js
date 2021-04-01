import React, { useState, useEffect } from "react";
import { useQuery } from "@apollo/react-hooks";
import { QUERY_POSTS, QUERY_ME_BASIC } from "../utils/queries";
import PostList from "../components/PostList";
import PostForm from "../components/PostForm";
import Auth from "../utils/auth";
// import { idbPromise } from "../utils/helpers";

function Feed() {
  const loggedIn = Auth.loggedIn();
  const { loading: loadingPosts, data } = useQuery(QUERY_POSTS);
  const { loading } = useQuery(QUERY_POSTS);
  const { data: userData } = useQuery(QUERY_ME_BASIC);
  const posts = data?.posts || [];
  //const [dbPosts, setDbPosts] = useState([]);

  /* useEffect(() => {
    if (posts) {
      setDbPosts(posts.posts)
      posts.posts.forEach(post => {
        idbPromise('posts', 'put', post);
      });
    } else if (!loadingPosts) {
      idbPromise('posts', 'get').then((idbPosts) => {
        console.log('idbPosts: ', idbPosts)
        setDbPosts(idbPosts.reverse());
      })
    }
  }, [posts, loadingPosts, setDbPosts]) */

  return (
    <main>
      <div className="flex-row justify-space-between">
        {loggedIn && (
          <div className="col-12 mb-3">
            <PostForm />
          </div>
        )}
        <div className={`col-12 mb-3 ${loggedIn && "col-lg-8"}`}>
          {loading ? (
            <div>Loading...</div>
          ) : (
            <PostList
              posts={posts}
              title="Feed"
            />
          )}
        </div>
        {loggedIn && userData ? (
          <div className="col-12 col-lg-3 mb-3">
          </div>
        ) : null}
      </div>
    </main>
  );
};

export default Feed;