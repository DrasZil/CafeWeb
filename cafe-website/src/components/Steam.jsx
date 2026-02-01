import { motion } from "framer-motion";

const STEAM_PARTICLES = Array.from({ length: 6 }).map((_, i) => ({
  id: i,
  startX: Math.random() * 700 - 50,
  endX: Math.random() * 400 - 200,
  delay: i * 1.4,
}));


function SteamParticle({ startX, endX, delay }) {
    return (
        <motion.span
        className="
            absolute bottom-24
            w-40 h-40
            rounded-full
            bg-latte/40
            blur-3xl
            z-20
        "
        initial={{
            opacity: 0,
            y: 0,
            x: startX,
            scale: 0.9,
        }}
        animate={{
            opacity: [0, 0.6, 0],
            y: -320,
            x: endX,
            scale: 1.4,
        }}
        transition={{
            duration: 9,
            delay,
            repeat: Infinity,
            ease: "easeOut",
        }}
        />
    );
    }

export default function Steam() {
    return (
        <div className="
        absolute inset-x-0 bottom-0
        h-2/3
        pointer-events-none
        overflow-hidden
        flex justify-center
        ">
        {Array.from({ length: 5 }).map((_, i) => (
            <SteamParticle key={i} delay={i * 1.5} />
        ))}
        </div>
    );
    }
