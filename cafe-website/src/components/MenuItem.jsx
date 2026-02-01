
import { motion } from 'framer-motion';
import { getActiveMenuTags } from './MenuList';

export default function MenuItem( { 
    name, description, price, image, isFavorite = false, 
    isBestSeller = false, className = "", isActive = false, 
    activeCategory, onClick 
} ) {

    const item = { isFavorite, isBestSeller };
    const tags = getActiveMenuTags(item, activeCategory);
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
           <div className='relative'>
                 <div className='overflow-hidden'>
                <img src={image} alt={name} loading='lazy'
                className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                {/**tag badges */}
                {tags.length > 0 && (
                    <div className='absolute top-3 right-3 z-10 flex gap-2'>
                        {tags.map((tag) => {
                            const Icon = tag.icon;
                            return (
                                <div
                                    key={tag.key}
                                    className={`${tag.bg} ${tag.text} p-2 rounded-full shadow-lg`}
                                    >
                                        <Icon size={16} strokeWidth={2}/>
                                    </div>
                            )
                        })}
                    </div>
                )}
            </div>
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