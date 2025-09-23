import { memo } from "react";
import { Helmet } from "react-helmet";
import Main from '../../components/main/Main.jsx';
import Projects from "../../components/projects/Projects.jsx";
import About from "../../components/about/About.jsx";
import "./index.css";

const Home = () => {
  // JSON-LD para Schema.org
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Gustavo Vieira Serpa",
    "jobTitle": "React Front-End Web Developer",
    "url": "https://www.devgustavo.com",
    "sameAs": [
      "https://www.linkedin.com/in/gustavovieira/",
      "https://github.com/gustavovieira"
    ]
  };

  return (
    <>
      <Helmet>
        <title>Gustavo Vieira – React Front-End Developer</title>
        <meta name="description" content="Portfolio of Gustavo Vieira Serpa, React Front-End Developer. Showcasing projects, skills, and blog posts." />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      <main>
        <Main />
        <Projects />
        <About />
      </main>
    </>
  );
};

export default memo(Home);
