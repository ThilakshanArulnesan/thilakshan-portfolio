import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Blog from './Blog';

export default function BlogPage({ blogData }) {



  const blogs = blogData.map((b, i) => (<Blog key={i} title={b.title} date={b.pubDate} thumbnail={b.thumbnail} content={b.content} link={b.link} />));


  return (
    <>
      {blogs}
    </>
  )
};