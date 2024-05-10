import "./App.scss";
import { useSpring, animated } from "@react-spring/web";

function App() {
  const spring = useSpring({
    from: { x: 0 },
    to: { x: 100 },
  });
  return (
    <>
      <main>
        <animated.div
          style={{
            ...spring,
            width: "100px",
            height: "100px",
            borderRadius: "50%",
            backgroundColor: "red",
            marginLeft: "5px",
          }}
        />
        <section>About</section>
        <section>Contact</section>
        <section>Blog</section>
      </main>
    </>
  );
}

export default App;
