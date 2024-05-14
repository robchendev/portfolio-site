import React from "react";
import { BattlerPanel } from "./BattlerPanel";
import EnemyPlatform from "./EnemyPlatform";
import BattleBackground from "./BattleBackground";
import { Flex } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useActionContext } from "@/context/ActionContext";
import {
  allyDeathVariants,
  allySwitchVariants,
  allyVariants,
  enemyDeathVariants,
  enemyVariants,
} from "@/data/animations";
import EnemyPanel from "./EnemyPanel";
import Image from "next/image";
import { enemyData } from "@/data/enemy";

const CombatScene = () => {
  const {
    animateAllyAttack,
    animateEnemyAttack,
    animateAllyHit,
    animateEnemyHit,
    animateAllySwitchReturn,
    animateAllySwitchEnter,
    enemyHealth,
    animateEnemyDeath,
    animateAllyDeath,
  } = useActionContext();
  const { battler } = useActionContext();

  // Gradually make me happier as my unemployment's HP gets lower
  const getEnemyImage = () => {
    const hpPercent = (enemyHealth / enemyData.maxHealth) * 100;
    let imgSrc = enemyData.images[0];
    if (hpPercent <= 25) {
      imgSrc = enemyData.images[5];
    } else if (hpPercent <= 40) {
      imgSrc = enemyData.images[4];
    } else if (hpPercent <= 55) {
      imgSrc = enemyData.images[3];
    } else if (hpPercent <= 70) {
      imgSrc = enemyData.images[2];
    } else if (hpPercent <= 85) {
      imgSrc = enemyData.images[1];
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
              initial="animate"
              animate={animateEnemyDeath ? "animate" : "initial"}
              variants={enemyDeathVariants}
            >
              <motion.div
                initial="initial"
                animate={animateEnemyAttack ? "attack" : animateEnemyHit ? "hit" : "initial"}
                variants={enemyVariants}
              >
                <Image src={getEnemyImage()} width="200" height="200" alt="Enemy image" />
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
        <div className="h-full w-full absolute top-[12%] drop-shadow-[4px_4px_1px_rgba(0,0,0,0.25)]">
          <EnemyPanel
            name={enemyData.name}
            health={enemyHealth}
            maxHealth={enemyData.maxHealth}
            level={enemyData.level}
          />
        </div>

        {/* Ally Pokemon */}
        <div className="h-full w-full absolute top-[45%]">
          <Flex justify="center" className="ml-[10%] w-[32%]">
            <motion.div
              initial="animate"
              animate={animateAllyDeath ? "animate" : "initial"}
              variants={allyDeathVariants}
            >
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
                    width="300"
                    height="300"
                    src={battler.battleImage}
                    alt="Portfolio Image - This image has not been made yet"
                  />
                </motion.div>
              </motion.div>
            </motion.div>
          </Flex>
        </div>

        {/* Ally Pokemon Info */}
        <div className="h-full w-full absolute top-[67%] drop-shadow-[5px_5px_1px_rgba(0,0,0,0.25)]">
          <BattlerPanel battler={battler} />
        </div>
      </div>
    </div>
  );
};

export default CombatScene;
