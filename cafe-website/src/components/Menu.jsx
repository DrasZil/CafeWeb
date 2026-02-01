import MenuItem  from "./MenuItem"
import { useState, useRef } from "react"
import { motion } from "framer-motion"
import { menuItems, categoryMeta } from "./MenuList"
import MenuItemModal from "./MenuItemModal"

export default function Menu() {
    const baseCategories = [...new Set(menuItems.map(item => item.category))];
    const categories = ["Favorites", "Best Seller", ...baseCategories];
    const [openCategory, setOpenCategory] = useState("Hot Coffee");
    const categoryRefs = useRef({});
    const [selectedItem, setSelectedItem] = useState(null);

            return (
                <div id="menu"
                className="relative z-10">
                    <h2 className="pt-10 text-3xl text-latte md:text-4xl font-medium mb-12 text-center">
                        Our Menu
                    </h2>

                <div className="space-y-6 bg-espressoSoft/80 rounded-3xl p-8">
                {categories.map(category => {
                const isOpen = openCategory === category;
                const Icon = categoryMeta[category]?.icon;

                return (

                <div
                key={category}
                ref={el => (categoryRefs.current[category] = el)}
                className="border border-bean/30 rounded-2xl overflow-hidden">
                    {/* Category Header */}
                    <button
                    onClick ={() => {
                        setOpenCategory(isOpen ? null : category)

                        if(!isOpen) {
                            setTimeout(() => {
                                categoryRefs.current[category]?.scrollIntoView({ 
                                    behavior: "smooth", block: "center", 
                                })
                            }, 50)
                        }
                    }}
                    className="w-full flex justify-between items-center px-6 py-6 bg-bean/50 text-latte text-lg font-medium"
                    >
                        <span className="flex items-center gap-4">
                            {Icon && (
                                <Icon 
                                 size={20}
                                 strokeWidth={1.5}
                                 className={isOpen ? "text-latte" : "text-muted"}/>
                            )}
                            {category}
                        </span>

                        <span
                        className={`transition-transform duration-300
                                    ${isOpen ? "rotate-180" : ""}`}>
                                        ▾
                                    </span>
                    </button>

                    {/* Collapsable content */}
                    <motion.div
                    initial={false}
                    animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0}}
                    transition={{ duration: 0.4, ease: "easeInOut"}}
                    className="overflow-hidden">
                        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 p-4 sm:p-6">
                        {menuItems
                            .filter(item => {
                                if (category === "Favorites") {
                                    return item.isFavorite;
                                }
                                if (category === "Best Seller") {
                                    return item.isBestSeller;
                                }
                                return item.category === category
                            })
                            .map((item, index) => (
                                <MenuItem 
                                    key={index}
                                    {...item}
                                    activeCategory={category}
                                    isActive={isOpen && selectedItem?.name === item.name}
                                    onClick={() => setSelectedItem(item)}
                                    className="bg-espressoSoft border border-bean/40 rounded-2xl
                                    shadow-[0_10px_30px_rgba(0,0,0,0.4)]
                                    hover:-translate-y-1 transition"
                                />
                            ))}
                    </div>
                    </motion.div>
                </div>
            )
        })}
    </div>
        <MenuItemModal 
        item={selectedItem}
        onClose={() => setSelectedItem(null)}
    />
    </div>
    )
}