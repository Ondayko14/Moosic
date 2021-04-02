import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { QUERY_POSTS, QUERY_ME_BASIC } from "../utils/queries";
import PostList from "../components/PostList";
import PostForm from "../components/PostForm";
import Auth from "../utils/auth";
import SpotifyApp from  "../SpotifyApp";

const Feed = () => {
  const loggedIn = Auth.loggedIn();
  const { loading, data } = useQuery(QUERY_POSTS);
  const { data: userData } = useQuery(QUERY_ME_BASIC);
  const posts = data?.posts || [];

  return (
    <main>
      <div className="flex-row justify-space-between">
        {loggedIn && (
          <div className="col-12 mb-3">
            <PostForm />
            <SpotifyApp />
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