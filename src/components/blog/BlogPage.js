import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Blog(props) {

  const [blogs, setBlogs] = useState([]);

  useEffect(() => {

    axios.get('https://api.rss2json.com/v1/api.json',
      { params: { rss_url: 'https://medium.com/feed/@t.arulnes' } })
      .then((res) => {
        if (res.status !== 200) {
          setBlogs([]);
        } else {
          console.log(res.data.items);
          setBlogs(res.data.items);
        }
      });
  }, []);

  return (
    <>
      {blogs && <h1>Blog</h1>}
    </>
  )
};