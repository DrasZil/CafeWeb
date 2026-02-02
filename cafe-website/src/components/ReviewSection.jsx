import ReviewCard from "./reviewCard";
import { reviews } from "./ReviewList"

export default function ReviewSection() {
    return (
        <section className="mt-24" id="reviews">
            <h2 className="text-3xl md:text-4xl text-latte font-medium text-center mb-12">
                What Our Customers Say
            </h2>

            <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
                {reviews.map((review, i) => (
                    <ReviewCard key={i} {...review}/>
                ))}
            </div>
        </section>
    )
}