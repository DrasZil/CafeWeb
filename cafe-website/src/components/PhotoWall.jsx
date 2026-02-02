import { motion } from 'framer-motion'
import { photoWall } from './PhotoWallList'

export default function PhotoWall() {
  return (
      <section className='mt-24' id="gallery">
        <h2 className='text-3xl md:text-4xl text-latte font-medium text-center mb-12'>
            Moments at Our Café
        </h2>

        <div className='columns-2 sm:columns-3 md:columns-4 gap-4 space-y-4'>
            {photoWall.map((src, i) => (
                <motion.img
                    key={i}
                    src={src}
                    alt='Cafe Moment'
                    loading='lazy'
                    className='w-full rounded-2xl break-inside-avoid shadow'
                    initial={{ opacity: 0}}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4 }}
                />
            ))}
        </div>
    </section>
  )
}