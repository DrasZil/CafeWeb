
import { motion } from 'framer-motion';

export default function MenuItem( { name, description, price, image, className = "", isActive = false, onClick } ) {

    return (
        <motion.div 
            initial={{ opacity: 0, y: 20}}
            whileInView={{opacity: 1, y: 0}}
            whileHover={{y: -4}}
            whileTap={{ scale: 0.97 }}
            viewport={{once: true}}
            transition={{duration: 0.4}}
            className={`group cursor-pointer overflow-hidden ${className} ${isActive ? "ring-1 ring-latte/40" : ""}`}
            onClick={onClick}
        >
            <div className='overflow-hidden'>
                <img src={image} alt={name} 
                className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
            </div>
            
            <div className="p-5">
                <h3 className="text-xl font-semibold text-latte ">
                    {name}
                </h3>
                <p className="text-sm text-muted dark:text-gray-400 mt-2">
                    {description}
                </p>
            </div>
            <span className="font-medium block mt-2 p-5 text-latte px-5 pb-5">
                {price}
            </span>
        </motion.div>
    )
}