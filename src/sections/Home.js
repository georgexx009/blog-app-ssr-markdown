import React from 'react';

const Home = ({ content }) => {
  return (
    <section id="#home">
      <h1>Home section</h1>
      <ul>
        {content.map((title, i) => (
          <li>
            <a href={`http://localhost:3000/${title}`} key={i}>
              {title}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Home;
