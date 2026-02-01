import { motion, AnimatePresence } from "framer-motion";

export default function MenuItemModal( { item, onClose } ) {
    if (!item) return null;

    return (
        <AnimatePresence>
            <motion.div
            className="fixed inset-0 z-[100] flex items-start justify-center pt-20 md:pt-24 bg-black/60 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}>
                <motion.div
                onClick={(e) => e.stopPropagation()}
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="bg-espresso rounded-3xl max-w-lg w-full mx-6 p-6 max-h-[85vh] md:max-h-[85vh] overflow-y-auto no-scrollbar">
                    <div className="aspect-square md:aspect-[4/3] w-full overflow-hidden rounded-3xl
                    shadow-[0_10px_30px_rgba(0,0,0,0.4)] ring-1 ring-bean/30">
                        <img 
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover"/> 
                    </div>

                    <h3 className="text-2xl font-semibold text-latte mt-6">
                        {item.name}
                    </h3>

                    <p className="text-muted mt-2">
                        {item.description}
                    </p>

                    {/**different sizes */}
                    {item.sizes && (
                        <div className="mt-6 space-y-3">
                            {item.sizes.map((sizes, i) => (
                                <div
                                key={i}
                                className={`flex justify-between items-center px-4 rounded-xl
                                    ${sizes.available ? "bg-bean.40 text-latte" : "bg-bean/20 text-muted line-through"}
                                    `}>
                                        <span>{sizes.label}</span>
                                        <span>{sizes.price}</span>
                                    </div>
                            ))}
                        </div>
                    )}

                    {/**pastries */}
                    {item.price && (
                        <div className="mt-6 flex justify-between text-latte">
                        <span>Price:</span>
                        <span>${item.price}</span>
                        </div>
                    )}

                    {/* Order Links */}
                    {item.orderLinks && (
                    <div className="mt-8">
                        <p className="text-sm text-muted mb-3 text-center">
                        Order via
                        </p>

                        <div className="flex justify-center gap-4 flex-wrap">
                        {item.orderLinks.map((platform, i) => (
                            <motion.a
                            key={i}
                            href={platform.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-5 py-2 rounded-full border border-latte/30
                                        text-sm text-latte hover:bg-latte hover:text-espresso
                                        transition-colors hover:shadow-[0_0_12px_rgba(244,230,200,0.35)]"
                            whileHover={{ y: -2 }}
                            whileTap={{ scale: 0.95 }}
                            transition={{ type: "spring", stiffness: 300 }}
                            >
                            {platform.name}
                            </motion.a>
                        ))}
                        </div>
                    </div>
                    )}



                    <motion.button
                    onClick={onClose}
                    whileHover={{ y: -2}}
                    whileTap={{ scale: 0.95}}
                    transition={{ type: "string", stiffness: 300}}
                    className="mt-6 w-full py-3 rounded-full border 
                            border-latte/30 hover:bg-latte/80 hover:text-espresso font-medium transition-colors">
                        Close
                    </motion.button>

                </motion.div>
            </motion.div>
        </AnimatePresence>
    )
}