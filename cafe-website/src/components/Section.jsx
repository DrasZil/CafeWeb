import { motion } from 'framer-motion';

export default function Section( { children } ) {
    return (
        <motion.section
            initial={{ opacity: 0, y: 60}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{ once: false }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className='w-full min-h-screen bg-espressoSoft flex items-center'
        >
           <div className='max-w-7xl mx-auto px-8 md:px-20 w-full'>
             {children}
           </div>
        </motion.section>
    )
}