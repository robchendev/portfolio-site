import React, { useState } from "react";
import { BattlerPanel, EnemyBattlerPanel } from "./BattlerPanel";
import EnemyPlatform from "./EnemyPlatform";
import BattleBackground from "./BattleBackground";
import { BattlerWrapper, BattlerWrapperEnemy } from "./BattlerWrapper";
import { Button, Flex, HStack, Image } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { ENEMY_INIT_HEALTH, useActionContext } from "@/context/ActionContext";

const CombatScene = () => {
  const {
    setActionMenuDisabled,
    triggerAllyAttack,
    animateAllyAttack,
    animateEnemyAttack,
    animateAllyHit,
    animateEnemyHit,
    animateAllySwitchReturn,
    animateAllySwitchEnter,
    enemyHealth,
    setEnemyHealth,
    animateHp,
    isEnemyDead,
    animateEnemyDeath,
    actionMenuDisabled,
  } = useActionContext();
  const { battler } = useActionContext();

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

  const enemyDeathVariants = {
    animate: {
      y: 100,
      scale: 0,
      opacity: 0,
      transition: { duration: 0.2, type: "spring", stiffness: 200, damping: 40 },
    },
    initial: { scale: 1, y: 0, opacity: 1 },
  };

  const allySwitchVariants = {
    return: {
      x: -500,
      y: 500,
      scale: 0,
      transition: { duration: 0.2, type: "spring", stiffness: 100, damping: 40 },
    },
    enter: {
      x: 0,
      y: 0,
      scale: 1,
      // transition: { type: "spring", stiffness: 260, damping: 20 },
      transition: { duration: 0.1, type: "spring", stiffness: 200, damping: 20 },
    },
    initial: { scale: 1, x: 0, y: 0, rotate: 0 },
  };

  const allyInfoSwitchVariants = {
    return: {
      x: 100,
      transition: { type: "spring", stiffness: 260, damping: 20 },
    },
    enter: {
      x: 0,
      transition: { type: "spring", stiffness: 260, damping: 20 },
    },
    initial: { scale: 1, x: 0, y: 0, rotate: 0 },
  };

  const getEnemyImage = () => {
    const hpPercent = (enemyHealth / ENEMY_INIT_HEALTH) * 100;
    let imgSrc = "/img/sadpepe.png";
    if (hpPercent <= 25) {
      imgSrc = "/img/pepestare.png";
    } else if (hpPercent <= 50) {
      imgSrc = "/img/pepeworried.png";
    } else if (hpPercent <= 75) {
      imgSrc = "/img/amogus.png";
    }
    return imgSrc;
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
          <Flex justify="center" className="ml-[65%] w-[20%]">
            <motion.div
              initial="initial"
              style={{ background: "transparent" }}
              animate={animateEnemyDeath ? "animate" : "initial"}
              variants={enemyDeathVariants}
            >
              <motion.div
                initial="initial"
                animate={animateEnemyAttack ? "attack" : animateEnemyHit ? "hit" : "initial"}
                variants={enemyVariants}
              >
                <Image src={getEnemyImage()} alt="Image of me - This image has not been made yet" />
              </motion.div>
            </motion.div>
          </Flex>
        </div>

        {/* Enemy Platform Bottom Half */}
        <div className="h-full w-full absolute top-[52%] overflow-hidden">
          <div className="h-full w-full relative">
            <div className="h-full w-full absolute -top-[50%] height-[200%]">
              <EnemyPlatform />
            </div>
          </div>
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
        <Button onClick={() => animateHp(80, "enemy")}>
          - HP {actionMenuDisabled ? "True" : "False"}
        </Button>
        <Button onClick={() => animateHp(-80, "enemy")}>+ HP</Button>
        <div className="h-full w-full absolute top-[50%]">
          <Flex justify="center" className="ml-[10%] w-[32%]">
            <motion.div
              initial="initial"
              animate={
                animateAllySwitchReturn ? "return" : animateAllySwitchEnter ? "enter" : "initial"
              }
              variants={allySwitchVariants}
            >
              <motion.div
                initial="initial"
                animate={animateAllyAttack ? "attack" : animateAllyHit ? "hit" : "initial"}
                variants={allyVariants}
              >
                <Image
                  src={battler.battleImage}
                  alt="Portfolio Image - This image has not been made yet"
                />
              </motion.div>
            </motion.div>
          </Flex>
        </div>

        {/* TODO: Animate this upon switching */}
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
