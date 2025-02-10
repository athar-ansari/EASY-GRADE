import { motion } from 'framer-motion';

export function Background() {
    return (
        <>
            <div className="absolute inset-0">
                {/* Space background image */}
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa')] bg-cover opacity-20" />

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/80 via-purple-900/80 to-pink-900/80" />

                {/* Animated particles */}
                <div className="absolute inset-0 overflow-hidden">
                    {[...Array(20)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute w-1 h-1 bg-white rounded-full"
                            animate={{
                                x: [Math.random() * window.innerWidth, Math.random() * window.innerWidth],
                                y: [Math.random() * window.innerHeight, Math.random() * window.innerHeight],
                                opacity: [0, 1, 0],
                            }}
                            transition={{
                                duration: Math.random() * 5 + 5,
                                repeat: Infinity,
                                ease: "linear"
                            }}
                        />
                    ))}
                </div>
            </div>

            {/* Glass blur effect */}
            <div className="absolute inset-0 backdrop-blur-sm" />
        </>
    );
}