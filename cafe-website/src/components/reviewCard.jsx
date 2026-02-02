import { motion } from 'framer-motion'
import ReviewStars from './ReviewStars'

export default function ReviewCard({ name, rating, comment, date }) {
    return(
        <motion.div
            initial={{ opacity: 0, y: 20}}
            whileInView={{ opacity:1, y: 0}}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className='bg-espressoSoft border border-bean/40 rounded-2xl p-6 shadow'    
        >
            <ReviewStars rating={rating}/>

            <p className='text-sm text-latte mt-3 italic'> 
                “{comment}”
            </p>

            <div className='mt-4 text-sm text-muted'>
                — {name}, {date}
            </div>
        </motion.div>
    )
}