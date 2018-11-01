import React from "react";
import PropTypes from "prop-types";

const Headline = props => {
  const { title, subtitle, children, theme } = props;

  return (
    <React.Fragment>
      {title ? <h1>{title}</h1> : <h1>{children}</h1>}
      <h3>
        <em>{subtitle}</em>
      </h3>

      {/* --- STYLES --- */}
      <style jsx>{`
        h1 {
          font-size: ${theme.font.size.xxl};
          animation-name: headlineEntry;
          animation-duration: ${theme.time.duration.long};

          :global(span) {
            font-weight: ${theme.font.weight.standard};
            display: block;
            font-size: 0.5em;
            letter-spacing: 0;
            margin: ${theme.space.stack.xs};
          }

          :global(svg) {
            height: 0.75em;
            fill: ${theme.color.brand.primary};
          }
        }

        h3 {
          font-weight: 300;
          margin: ${theme.space.stack.l};
          animation-name: headlineEntry;
          animation-duration: ${theme.time.duration.long};
        }

        @keyframes headlineEntry {
          from {
            opacity: 0.5;
          }
          to {
            opacity: 1;
          }
        }

        @from-width tablet {
          h1 {
            font-size: ${`calc(${theme.font.size.xl} * 1.2)`};
          }
        }

        @from-width desktop {
          h1 {
            font-size: ${`calc(${theme.font.size.xl} * 1.4)`};
          }
        }
      `}</style>
    </React.Fragment>
  );
};

Headline.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  children: PropTypes.node,
  theme: PropTypes.object.isRequired
};

export default Headline;
