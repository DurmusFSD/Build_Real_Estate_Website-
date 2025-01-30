import { motion, useScroll, useTransform } from "framer-motion";
import "./App.css";
import HomeSection1 from "./HomeSection1";
import { useRef } from "react";
import HomeSection2 from "./HomeSection2";
import HomeSection3 from "./HomeSection3";
import HomeSection4 from "./HomeSection4";

function App() {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const { scrollYProgress: scrollYProgress1 } = useScroll({ target: ref1 });
  const { scrollYProgress: scrollYProgress2 } = useScroll({ target: ref2 });
  const { scrollYProgress: scrollYProgress3 } = useScroll({ target: ref3 });
  const scale1 = useTransform(scrollYProgress1, [0, 1], [1, 0.2]);
  const scale2 = useTransform(scrollYProgress2, [0, 1], [1, 0.2]);
  const scale3 = useTransform(scrollYProgress3, [0, 1], [1, 0.65]);

  return (
    <div className="App">
      <motion.div ref={ref1}>
        <motion.div style={{ scale: scale1 }}>
          <HomeSection1 />
        </motion.div>
        <motion.div ref={ref2}>
          <motion.div style={{ scale: scale2 }}>
            <HomeSection2 />
          </motion.div>
          <motion.div ref={ref3}>
            <motion.div style={{ scale: scale3 }}>
              <HomeSection3 />
            </motion.div>
          </motion.div>
          <HomeSection4 />
        </motion.div>
      </motion.div>
    </div>
  );
}

export default App;
