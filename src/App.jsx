import "./App.scss";
import { useSpring, animated } from "@react-spring/web";
import Trails from "./components/Trail";

function App() {
  const spring = useSpring({
    from: { scale: 0 },
    to: { scale: 1 },
  });
  return (
    <>
      <main>
        <Trails />
        <section>About</section>
        <section>Contact</section>
        <section>Blog</section>
      </main>
    </>
  );
}

export default App;
