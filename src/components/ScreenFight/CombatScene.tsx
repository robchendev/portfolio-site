import React from "react";
import { BattlerPanel } from "./BattlerPanel";
import EnemyPlatform from "./EnemyPlatform";
import BattleBackground from "./BattleBackground";
import { Flex } from "@chakra-ui/react";
import { motion } from "framer-motion";
import {
  allyDeathVariants,
  allyPanelSwitchVariants,
  allySwitchVariants,
  allyVariants,
  enemyDeathVariants,
  enemyVariants,
} from "@/lib/data/animations";
import EnemyPanel from "./EnemyPanel";
import { enemyData } from "@/lib/data/enemy";
import SVGenemy from "../SVG/SVGenemy";
import { useActionStore } from "@/store/useActionStore";

const CombatScene = () => {
  const {
    battler,
    animateAllyAttack,
    animateEnemyAttack,
    animateAllyHit,
    animateEnemyHit,
    animateAllySwitchReturn,
    animateAllySwitchEnter,
    animateAllyPanelSwitch,
    enemyHealth,
    animateEnemyDeath,
    animateAllyDeath,
  } = useActionStore();

  // Gradually make me happier as my unemployment's HP gets lower
  const EnemyImage = ({ size, className = "" }: { size: number; className?: string }) => {
    const hpPercent = (enemyHealth / enemyData.maxHealth) * 100;
    if (hpPercent >= 85) return <SVGenemy.Frown size={size} className={className} />;
    if (hpPercent >= 70) return <SVGenemy.Deadpan size={size} className={className} />;
    if (hpPercent >= 55) return <SVGenemy.SlightSmile size={size} className={className} />;
    if (hpPercent >= 40) return <SVGenemy.Smile size={size} className={className} />;
    if (hpPercent >= 25) return <SVGenemy.BigSmile size={size} className={className} />;
    return <SVGenemy.Briefcase size={size} className={className} />;
  };
  const getEnemyStatus = () => {
    const hpPercent = (enemyHealth / enemyData.maxHealth) * 100;
    if (hpPercent >= 85) return "Unemployed";
    if (hpPercent >= 70) return "Applying";
    if (hpPercent >= 55) return "Screening";
    if (hpPercent >= 40) return "Interviewing";
    if (hpPercent >= 25) return "Job Offer";
    return "Hired";
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
        <div className="h-full w-full absolute top-[20%]">
          <Flex justify="center" className="ml-[64%] w-[20%]">
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
                <EnemyImage size={190} />
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
            name={`Robert (${getEnemyStatus()})`}
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
                  {battler.sprite}
                </motion.div>
              </motion.div>
            </motion.div>
          </Flex>
        </div>

        {/* Ally Pokemon Info */}
        <div className="h-full w-full absolute top-[67%] drop-shadow-[5px_5px_1px_rgba(0,0,0,0.25)]">
          <motion.div
            initial="initial"
            animate={animateAllyPanelSwitch ? "animate" : "initial"}
            variants={allyPanelSwitchVariants}
          >
            <BattlerPanel battler={battler} />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default CombatScene;
