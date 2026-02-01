import { motion } from 'framer-motion'

export default function LoadingScreen() {
    return (
        <motion.div
            className='fixed inset-0 z-[9999] flex items-center justify-center bg-espresso'
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6}}
        >
            <div className='flex flex-col items-center gap-6'>
                <motion.h1
                    className='text-3xl font-semibold text-latte tracking-wide'
                    initial={{ y: 10, opacity: 0}}
                    animate={{y: 0, opacity: 1}}
                    transition={{ delay: 0.2}}
                >
                    Café DrasZil
                </motion.h1>

                <motion.div
                    className='w-10 h-10 border-2 border-latte/30 border-t-latte rounded-full'
                    animate={{ rotate: 360 }}
                    transition={{ repeat: Infinity, duration: 1, ease: "linear"}}
                />
            </div>

        </motion.div>
    )
}