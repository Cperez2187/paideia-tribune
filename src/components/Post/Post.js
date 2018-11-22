import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import { OutboundLink } from "gatsby-plugin-google-analytics";
import "prismjs/themes/prism-okaidia.css";

import asyncComponent from "../AsyncComponent";
import Headline from "../Article/Headline";
import Bodytext from "../Article/Bodytext";
import Meta from "./Meta";
import Author from "./Author";
// import Comments from "./Comments";
import NextPrev from "./NextPrev";

import literacyLogo from "../../images/jpg/Literacy_blue.jpg";

const Share = asyncComponent(() =>
  import("./Share")
    .then(module => {
      return module.default;
    })
    .catch(error => {})
);

const Post = props => {
  const {
    post,
    post: {
      html,
      fields: { prefix, slug },
      frontmatter: { title, subtitle, author, about, category, portrait }
    },
    authornote,
    // facebook,
    next: nextPost,
    prev: prevPost,
    theme
  } = props;

  const src = portrait ? portrait.childImageSharp.resize.src : "";

  return (
    <React.Fragment>
      <header>
        <Headline title={title} subtitle={subtitle} theme={theme} />
        <Meta prefix={prefix} author={author} category={category} theme={theme} />
      </header>
      <Bodytext html={html} theme={theme} />
      <footer>
        <Share post={post} theme={theme} />
        <div className="feedback">
          <Link to="/contact/">
            <span className="link">Feedback</span>
          </Link>
          <span> is appreciated.</span>
        </div>
        <div className="literacy-logo">
          <OutboundLink href="https://anthonythigpen.com">
            <img src={literacyLogo} />
            <span>Click to create your legacy.</span>
          </OutboundLink>
        </div>
        <Author author={author} note={about} portrait={src} theme={theme} />
        <NextPrev next={nextPost} prev={prevPost} theme={theme} />
        {/* <Comments slug={slug} facebook={facebook} theme={theme} /> */}
      </footer>

      {/* --- STYLES --- */}
      <style jsx>{`
        .feedback {
          text-align: center;

          .link {
            color: ${theme.color.brand.primary};
          }
        }

        .literacy-logo {
          display: flex;
          justify-content: center;
          text-align: center;
          margin-top: ${theme.space.m};

          img {
            height: 12.7vh;
          }

          span {
            display: flex;
            &:hover {
              color: ${theme.color.brand.primary};
            }
          }
        }
      `}</style>
    </React.Fragment>
  );
};

Post.propTypes = {
  post: PropTypes.object.isRequired,
  authornote: PropTypes.string.isRequired,
  facebook: PropTypes.object.isRequired,
  next: PropTypes.object,
  prev: PropTypes.object,
  theme: PropTypes.object.isRequired
};

export default Post;
