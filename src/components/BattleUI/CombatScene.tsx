import React, { useEffect, useState } from "react";
import { BattlerPanel, EnemyBattlerPanel } from "./BattlerPanel";
import EnemyPlatform from "./EnemyPlatform";
import BattleBackground from "./BattleBackground";
import { BattlerWrapper, BattlerWrapperEnemy } from "./BattlerWrapper";
import { Button, Image } from "@chakra-ui/react";
import { motion, AnimatePresence } from "framer-motion";
import { useActionMenuDisabled } from "@/context/ActionMenuDisabledContext";

const CombatScene = () => {
  const { actionMenuDisabled, setActionMenuDisabled } = useActionMenuDisabled();
  // Ally Attack Animation
  const [animateAllyAttack, setAnimateAllyAttack] = useState(false);
  const [animateEnemyHit, setAnimateEnemyHit] = useState(false);
  const controlsAllyAttack = {
    initial: { scale: 1 },
    animate: animateAllyAttack ? { rotate: 10, scale: 0.8, x: 300, y: -70 } : { scale: 1 },
  };

  const controlsEnemyHit = {
    initial: { scale: 1, filter: "brightness(100%)" },
    animate: animateEnemyHit
      ? {
          rotate: [0, 10, 10, 0, 0],
          scale: [1, 0.9, 0.9, 1, 1],
          x: [0, 50, 50, 0, 0],
          y: [0, -50, -50, 0, 0],
          filter: [
            // TODO: THIS IS DISGUSTING
            "brightness(150%)",
            "brightness(100%)",
            "brightness(150%)",
            "brightness(100%)",
            "brightness(100%)",
          ],
          transition: { duration: 0.8 },
        }
      : { scale: 1, filter: "brightness(100%)" },
  };
  // Using useEffect to safeguard against memory leaks if component unmounts before timeout complete
  useEffect(() => {
    let timer: ReturnType<typeof setTimeout> | undefined;
    if (animateAllyAttack) {
      timer = setTimeout(() => {
        setAnimateAllyAttack(false);
      }, 450);
    }
    return () => clearTimeout(timer);
  }, [animateAllyAttack]);

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout> | undefined;
    if (animateEnemyHit) {
      timer = setTimeout(() => {
        setAnimateEnemyHit(false);
        setActionMenuDisabled(false);
      }, 500);
    }
    return () => clearTimeout(timer);
  }, [animateEnemyHit, setActionMenuDisabled]);

  return (
    <div className="h-full w-full absolute">
      <div className="h-full box-border relative bg-cyan-200">
        {/* Sky and Background */}
        <div className="h-full w-full absolute">
          <BattleBackground />
        </div>

        {/* Vignette */}
        <div className="h-full w-full absolute bg-gradient-radial from-transparent from-60% to-[rgba(0,0,0,0.25)] to-100%" />

        {/* Enemy Platform */}
        <div className="h-full w-full absolute top-[52%]">
          <EnemyPlatform />
        </div>

        {/* Enemy Pokemon */}
        <div className="h-full w-full absolute top-[24%]">
          <motion.div
            initial={controlsEnemyHit.initial}
            animate={controlsEnemyHit.animate}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20,
            }}
          >
            <div className="ml-[65%] w-[20%]">
              <Image src="/img/sadpepe.png" alt="Image of me - This image has not been made yet" />
            </div>
          </motion.div>
        </div>

        {/* Enemy Pokemon Info */}
        <div className="h-full w-full absolute top-[12%]">
          <BattlerWrapperEnemy>
            <EnemyBattlerPanel name="Robert's Unemployment" level={25} />
          </BattlerWrapperEnemy>
        </div>

        {/* Ally Pokemon */}

        <Button
          onClick={() => {
            setAnimateAllyAttack(true);
            setActionMenuDisabled(true);
            setTimeout(() => {
              setAnimateEnemyHit(true);
            }, 150);
          }}
        >
          Attack!
        </Button>
        <div className="h-full w-full absolute top-[50%]">
          <motion.div
            initial={controlsAllyAttack.initial}
            animate={controlsAllyAttack.animate}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20,
            }}
          >
            <div className="ml-[10%] w-[32%]">
              <Image
                src="/img/sadpepe.png"
                alt="Portfolio Image - This image has not been made yet"
              />
            </div>
          </motion.div>
        </div>

        {/* Ally Pokemon Info */}
        <div className="h-full w-full absolute top-[67%]">
          <BattlerWrapper>
            <BattlerPanel name="Portfolio Website" level={30} />
          </BattlerWrapper>
        </div>
      </div>
    </div>
  );
};

export default CombatScene;
