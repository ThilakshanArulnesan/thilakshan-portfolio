import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Blog from './Blog';

export default function BlogPage(props) {

  const [blogData, setBlogs] = useState([]);

  useEffect(() => {

    axios.get('https://api.rss2json.com/v1/api.json',
      { params: { rss_url: 'https://medium.com/feed/@t.arulnes' } })
      .then((res) => {
        if (res.status !== 200) {
          setBlogs([]);
        } else {
          console.log(res.data.items);
          setBlogs(res.data.items.reverse());
        }
      });
  }, []);

  const blogs = blogData.map((b, i) => (<Blog key={i} title={b.title} date={b.pubDate} thumbnail={b.thumbnail} content={b.content} link={b.link} />));


  return (
    <>
      {blogs}
    </>
  )
};