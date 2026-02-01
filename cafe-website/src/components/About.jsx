import { motion } from "framer-motion"

const story = [
  {
    title: "Where It All Began",
    text: "Café DrasZil started as a quiet idea—born from late nights, deep talks, and a shared love for good coffee.",
    image: "/coffeebeans.jpg",
  },
  {
    title: "Craft Over Convenience",
    text: "Every cup is brewed with intention. From bean selection to the final pour, we believe coffee should never be rushed.",
    image: "/Barista.jpg",
  },
  {
    title: "A Space to Slow Down",
    text: "More than a café, DrasZil is a place to pause—where conversations linger and mornings feel softer.",
    image: "/coffeetalk.jpg",
  },
]

export default function About() {
  return (
    <div id="about" className="space-y-48">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="pt-5 text-3xl md:text-4xl font-medium tracking-wide text-latte mb-4">
          Our Story
        </h2>
        <p className="text-muted">
          A journey shaped by passion, patience, and the pursuit of the perfect cup.
        </p>
      </div>

      {/* Story blocks */}
      {story.map((item, index) => {
        const reverse = index % 2 !== 0

        return (
          <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 80 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ amount: 0.4, once: false }}
                    transition={{ duration: 0.9, delay: index * 0.1, ease: "easeOut" }}
                    className="relative grid md:grid-cols-2 gap-24 items-center"
                    >
                    {/* TEXT */}
                    <div className={reverse ? "md:order-2" : "md:order-1"}>
                        <h3 className="text-2xl md:text-3xl font-semibold text-latte mb-6">
                        {item.title}
                        </h3>
                        <p className="text-muted leading-relaxed max-w-md">
                        {item.text}
                        </p>
                    </div>

                    {/* IMAGE */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ amount: 0.4, delay: index * 0.1,once: false }}
                        transition={{ duration: 1 }}
                        className={`${reverse ? "md:order-1" : "md:order-2"} rounded-3xl overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.5)]`}
                    >
                        <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-[380px] object-cover"
                        />
                    </motion.div>
                </motion.div>

        )
      })}
    </div>
  )
}
