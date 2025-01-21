import React, { useState, useEffect, useRef } from "react";
import { useTrail, a } from "@react-spring/web";
import PropTypes from "prop-types";
import styles from "./Gallery.module.css";

const Trail = ({ open, children }) => {
  const items = React.Children.toArray(children);
  const trail = useTrail(items.length, {
    config: { mass: 5, tension: 1000, friction: 400 },
    opacity: open ? 1 : 0,
    x: open ? 0 : 20,
    height: open ? "auto" : 0,
    from: { opacity: 0, x: 20, height: 0 },
  });
  return (
    <div>
      {trail.map(({ height, ...style }, index) => (
        <a.div key={index} className={styles.trailsText} style={style}>
          <a.div style={{ height }}>{items[index]}</a.div>
        </a.div>
      ))}
    </div>
  );
};

Trail.propTypes = {
  open: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
};

export default function LandingText() {
  const [open, setOpen] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setOpen(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  return (
    <div className={styles.container} ref={containerRef}>
      <Trail open={open}>
        <h1 className="my-10 px-0 ">Hello there!👋🏽</h1>
        <h1 className="pt-2">
          I&apos;m Theodora, <br></br>A Software Engineer.
        </h1>
      </Trail>
    </div>
  );
}
