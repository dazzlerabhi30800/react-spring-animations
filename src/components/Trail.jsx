import { useTrail, a, easings } from "@react-spring/web";
import React, { useState } from "react";

const Trail = ({ open, children }) => {
  const items = React.Children.toArray(children);
  const trail = useTrail(items.length, {
    config: {
      mass: 5,
      tension: 100,
      friction: 100,
      duration: 500,
    },
    opacity: open ? 1 : 0,
    x: open ? 0 : 20,
    height: open ? 110 : 0,
    from: { opacity: 0, x: 20, height: 0 },
  });

  return (
    <div>
      {trail.map(({ height, ...style }, index) => (
        <a.div key={index} className="trailText" style={style}>
          <a.div style={{ height }}>{items[index]}</a.div>
        </a.div>
      ))}
    </div>
  );
};

export default function Trails() {
  const [open, setOpen] = useState(true);
  return (
    <section className="container" onClick={() => setOpen((state) => !state)}>
      <Trail open={open}>
        <span>Lorem</span>
        <span>Ipsum</span>
        <span>Abhishek</span>
      </Trail>
    </section>
  );
}
