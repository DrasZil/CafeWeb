import { motion } from 'framer-motion'

export default function Hero() {
    return (
        <header className="relative h-screen flex w-full overflow-hidden" id="home">
            <motion.div
                initial={{ scale: 1.05 }}
                animate={{ scale: 1 }}
                transition={{ duration: 2 }}
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: "url('/Hero_bg.jpg')" }}
                />


            <div className='absolute inset-0 bg-espresso/70'/>
            
            <div className='relative z-10 h-full flex items-center'>
                <div className='max-w-7xl w-full px-8 md:px-20'>
                    <motion.h2
                        initial={{ opacity: 0, y: 30}}
                        animate={{ opacity: 1, y: 0}}
                        transition={{ duration: 0.8 }}
                        className="text-5xl md:text-6xl text-cream font-semibold leading-tight max-w-xl"
                    >
                        CRAFTED COFFEE<br/>
                        FOR SLOW MORNINGS
                    </motion.h2>

                    <motion.p
                        initial={{ opacity:0, y: 20}}
                        animate={{ opacity:1, y: 0}}
                        transition={{ delay: 0.2 , duration: 0.8 }}
                        className='text-cream/80 max-w-ml mt-6'
                    >
                        Welcome to our cozy corner of the world where every cup tells a story. <br/>
                        Crafted with passion, served with love. <br/> Your daily dose of comfort.
                    </motion.p>

                    <motion.a
                    href="#menu"
                    whileHover={{scale: 1.05}}
                    whileTap={{scale: 0.95}}
                    initial={{ opacity: 0, y: 30}}
                    animate={{ opacity: 1, y: 0}}
                    transition={{ duration: 0.8 }}
                    className='inline-block mt-10 px-8 py-4 bg-latte text-espresso rounded-full hover:shadow-[0_0_12px_rgba(244,230,200,0.35)]'
                    >
                        View our Menu
                    </motion.a>
                </div>
            </div>
        </header>
    )
} 