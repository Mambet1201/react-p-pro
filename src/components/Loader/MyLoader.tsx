import React from "react";
import ContentLoader from "react-content-loader";

const MyLoader: React.FC = () => (
  <ContentLoader
    rtl
    speed={1}
    width={290}
    height={482}
    viewBox="0 0 290 482"
    backgroundColor="#edd9d9"
    foregroundColor="#ccd6f5"
  >
    <circle cx="127" cy="118" r="117" />
    <rect x="26" y="253" rx="11" ry="11" width="213" height="38" />
    <rect x="149" y="271" rx="0" ry="0" width="7" height="1" />
    <rect x="26" y="304" rx="11" ry="11" width="212" height="79" />
    <rect x="27" y="396" rx="24" ry="24" width="102" height="42" />
    <rect x="137" y="403" rx="8" ry="8" width="96" height="32" />
  </ContentLoader>
);

export default MyLoader;
