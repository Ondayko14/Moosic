import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { QUERY_POSTS, QUERY_ME_BASIC } from '../utils/queries';
import PostList from '../components/PostList';
import PostForm from '../components/PostForm';
import Auth from '../utils/auth';
import Header from '../components/Header';

const Feed = () => {
    const loggedIn = Auth.loggedIn();
    const { loading, data } = useQuery(/* ? */);
    const { data: userData } = useQuery(/* ? */);
    const posts = data?.posts || [];

    return (
        <main>
            <div>
                
            </div>
        </main>
    )
}

export default Feed;