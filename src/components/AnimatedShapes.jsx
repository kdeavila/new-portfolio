import { motion } from "framer-motion";

const AnimatedShapes = () => {
    return (
        <div className="absolute top-0 left-0 w-full h-screen overflow-hidden pointer-events-none">
            {[...Array(6)].map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{
                        opacity: 1,
                        scale: 1,
                        x: Math.random() * 1000,
                        y: Math.random() * 500,
                        rotate: Math.random() * 360,
                    }}
                    transition={{
                        duration: 2,
                        delay: i * 0.2,
                        repeat: Infinity,
                        repeatType: "reverse",
                        repeatDelay: Math.random() * 5,
                    }}
                >
                    <div className="w-8 h-8 border-2 border-yellow-500/30 transform rotate-45" />
                </motion.div>
            ))}
        </div>
    );
};

export default AnimatedShapes;
