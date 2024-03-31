import React, { useState } from "react";
import { BattlerPanel, EnemyBattlerPanel } from "./BattlerPanel";
import EnemyPlatform from "./EnemyPlatform";
import BattleBackground from "./BattleBackground";
import { BattlerWrapper, BattlerWrapperEnemy } from "./BattlerWrapper";
import { Button, Image } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { ENEMY_INIT_HEALTH, useActionContext } from "@/context/ActionContext";

const CombatScene = () => {
  const {
    setActionMenuDisabled,
    triggerAllyAttack,
    triggerEnemyAttack,
    animateAllyAttack,
    animateEnemyAttack,
    animateAllyHit,
    animateEnemyHit,
  } = useActionContext();
  const { battler } = useActionContext();
  const [enemyHealth, setEnemyHealth] = useState(ENEMY_INIT_HEALTH);

  const allyVariants = {
    attack: {
      rotate: 10,
      scale: 0.8,
      x: 300,
      y: -70,
      transition: { type: "spring", stiffness: 260, damping: 20 },
    },
    hit: {
      rotate: [0, -10, -10, 0, 0],
      scale: [1, 1.1, 1.1, 1, 1],
      x: [0, -20, -20, 0, 0],
      y: [0, -20, -20, 0, 0],
      filter: [
        "brightness(100%)",
        "brightness(0%)",
        "brightness(100%)",
        "brightness(0%)",
        "brightness(100%)",
      ],
      transition: { duration: 0.6 },
    },
    initial: { scale: 1, x: 0, y: 0, rotate: 0, filter: "brightness(100%)" },
  };

  const enemyVariants = {
    attack: {
      rotate: -10,
      scale: 1.25,
      x: -330,
      y: 140,
      transition: { type: "spring", stiffness: 260, damping: 20 },
    },
    hit: {
      rotate: [0, 10, 10, 0, 0],
      scale: [1, 0.9, 0.9, 1, 1],
      x: [0, 50, 50, 0, 0],
      y: [0, -50, -50, 0, 0],
      filter: [
        "brightness(100%)",
        "brightness(0%)",
        "brightness(100%)",
        "brightness(0%)",
        "brightness(100%)",
      ],
      transition: { duration: 0.6 },
    },
    initial: { scale: 1, x: 0, y: 0, rotate: 0, filter: "brightness(100%)" },
  };

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
            initial="initial"
            animate={animateEnemyAttack ? "attack" : animateEnemyHit ? "hit" : "initial"}
            variants={enemyVariants}
          >
            <div className="ml-[65%] w-[20%]">
              <Image src="/img/sadpepe.png" alt="Image of me - This image has not been made yet" />
            </div>
          </motion.div>
        </div>

        {/* Enemy Pokemon Info */}
        <div className="h-full w-full absolute top-[12%]">
          <BattlerWrapperEnemy>
            <EnemyBattlerPanel
              name="Robert's Unemployment"
              health={enemyHealth}
              maxHealth={ENEMY_INIT_HEALTH}
              level={25}
            />
          </BattlerWrapperEnemy>
        </div>

        {/* Ally Pokemon */}
        <Button onClick={() => triggerAllyAttack()}>Ally Attack</Button>
        <Button onClick={() => triggerEnemyAttack()}>Enemy Attack</Button>
        <div className="h-full w-full absolute top-[50%]">
          <motion.div
            initial="initial"
            animate={animateAllyAttack ? "attack" : animateAllyHit ? "hit" : "initial"}
            variants={allyVariants}
          >
            <div className="ml-[10%] w-[32%]">
              <Image
                src={battler.battleImage}
                alt="Portfolio Image - This image has not been made yet"
              />
            </div>
          </motion.div>
        </div>

        {/* Ally Pokemon Info */}
        <div className="h-full w-full absolute top-[67%]">
          <BattlerWrapper>
            <BattlerPanel battler={battler} />
          </BattlerWrapper>
        </div>
      </div>
    </div>
  );
};

export default CombatScene;
