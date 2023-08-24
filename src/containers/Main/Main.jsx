import CardOne from "../../components/Card/Cardv1";
import { dataCards } from "./CardsData";

import { useRef } from "react";
import { useScroll, motion, useTransform } from "framer-motion";

const CardsSection = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });

  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
  const xProgress = useTransform(scrollYProgress, [0.4, 1], ["15%", "0%"]);
  const xProgressLightning = useTransform(
    scrollYProgress,
    [0.4, 1],
    ["-90%", "0%"]
  );

  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.7, 1]);
  const lightningOpacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <div>
      <div className="container">
        <motion.div
          className="lightning"
          ref={ref}
          style={{
            scale: scaleProgress,
            opacity: opacityProgress,
            x: xProgress,
          }}
          transition={{ duration: 1.1 }}
        >
          <div className="lightning-wrapper-blue">
            <div className="lightning-image-blue"></div>
          </div>
        </motion.div>
        <motion.div
          id="features"
          ref={ref}
          style={{ scale: scaleProgress, opacity: opacityProgress }}
        >
          <div className="header-cards">
            {dataCards.map((card, index) => (
              <CardOne
                phraseStart={card.phraseStart}
                key={index}
                crown={card.crown}
                cardname={card.cardname}
                carddescription={card.carddescription}
                cardimage={card.cardimage}
              />
            ))}
          </div>
        </motion.div>
        <motion.div
          className="lightning-wrapper"
          style={{
            scale: scaleProgress,
            opacity: lightningOpacity,
            x: xProgressLightning,
          }}
        >
          <div className="lightning-image"></div>
        </motion.div>
      </div>
    </div>
  );
};

export default CardsSection;
