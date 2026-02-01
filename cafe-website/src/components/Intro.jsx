import { motion, AnimatePresence } from "framer-motion";
import Steam from "./Steam.jsx";

export default function Intro({ show}) {

    return (
        <AnimatePresence>
            {show && (
                <motion.div
                className="fixed inset-0 z-[100] flex items-center justify-center bg-espresso"
                initial={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 2.5, ease: "easeInOut"}}
            >

                {/*background texture*/}
                <motion.div 
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: "url('/Hero_bg.jpg')"}}
                initial={{scale: 1.1 }}
                animate={{scale: 1}}
                transition={{ duration: 2.3, ease: "easeOut"}}
                />

                {/*Dark coffee overlay*/}
                <div className="absolute inset-0 bg-espresso/80"/>

                <Steam />

                {/*The content*/}
                <motion.div
                className="relative text-center px-6"
                initial={{ opacity: 0, y: 40}}
                animate={{ opacity: 1, y: 0}}
                transition={{ delay: 0.6, duration: 2}}>
                    <p className="tracking-widest text-muted text-sm mb-4">
                        CRAFTED COFFEE<br/>
                        FOR SLOW MORNINGS
                    </p>

                    <h1 className="text-4xl md:text-6xl font-semibold text-latte leading-tight">
                        Café DrasZil
                    </h1>

                    <p className="mt-6 text-muted max-w-md mx-auto">
                        Slow mornings. Warm cups. Meaningful moments.
                    </p>

                    
                </motion.div>

            </motion.div>
            )}
        </AnimatePresence>
    )
}