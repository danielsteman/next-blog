import { Box } from '@chakra-ui/react';
import React from 'react';
import BlogPreview from '../../components/blogpreview';
import { IBlog } from '../../shared/blog.interface';

const Blog = () => {
  const blogs: IBlog[] = [
    {
      id: 1,
      title:
        'test',
      date: 'Mon 1 Aug, 2022',
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, ea iure? Non consequatur nostrum, quam optio at eius inventore veritatis ratione, animi cumque dolore aperiam, nulla unde pariatur accusamus culpa.",
      tags: ['Internet of Things'],
    },
    {
      id: 2,
      title:
        'test',
      date: 'Mon 1 Aug, 2022',
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, ea iure? Non consequatur nostrum, quam optio at eius inventore veritatis ratione, animi cumque dolore aperiam, nulla unde pariatur accusamus culpa.",
      tags: ['Internet of Things'],
    },
  ];
  return (
    <Box>
      {blogs.reverse().map((blog: IBlog) => (
        <BlogPreview
          id={blog.id}
          title={blog.title}
          date={blog.date}
          text={blog.text}
          tags={blog.tags}
          key={blog.id}
        />
      ))}
    </Box>
  );
};

export default Blog;
