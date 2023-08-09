function Logo(props) {
  return (
    <svg
      color={props.color}
      width={props.size}
      height="100%"
      viewBox="-10.5 -9.45 21 18.9"
      fill="none"
    >
      <circle cx="0" cy="0" r="2" fill="currentColor"></circle>
      <g stroke="currentColor" strokeWidth="1" fill="none">
        <ellipse rx="10" ry="4.5"></ellipse>
        <ellipse rx="10" ry="4.5" transform="rotate(60)"></ellipse>
        <ellipse rx="10" ry="4.5" transform="rotate(120)"></ellipse>
      </g>
    </svg>
  );
}

export default Logo;