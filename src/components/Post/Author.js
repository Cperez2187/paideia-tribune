import React from "react";
import PropTypes from "prop-types";

import config from "../../../content/meta/config";
import avatar from "../../images/jpg/greece.jpg";

const Author = props => {
  const { author, note, portrait, theme } = props;

  return (
    <React.Fragment>
      <div className="author">
        <div className="avatar">
          <img
            src={config.gravatarImgMd5 == "" ? portrait || avatar : config.gravatarImgMd5}
            alt={config.siteTitle}
          />
        </div>
        <div className="note">
          <span className="name">{author}</span>
          {note}
        </div>
      </div>

      {/* --- STYLES --- */}
      <style jsx>{`
        .author {
          margin: ${theme.space.l} 0;
          padding: ${theme.space.l} 0;
          border-top: 1px solid ${theme.line.color};
          border-bottom: 1px solid ${theme.line.color};
        }
        .avatar {
          float: left;
          border-radius: 65% 75%;
          border: 1px solid ${theme.line.color};
          display: inline-block;
          height: 50px;
          margin: 5px 20px 0 0;
          overflow: hidden;
          width: 50px;
        }
        .avatar img {
          width: 100%;
        }
        .name {
          font-weight: 700;
        }
        .note {
          font-size: 0.9em;
          line-height: 1.6;
        }
        @from-width tablet {
          .author {
            display: flex;
          }
          .avatar {
            flex: 0 0 auto;
          }
        }
      `}</style>
    </React.Fragment>
  );
};

Author.propTypes = {
  portrait: PropTypes.string,
  author: PropTypes.string.isRequired,
  note: PropTypes.string.isRequired,
  theme: PropTypes.object.isRequired
};

export default Author;
