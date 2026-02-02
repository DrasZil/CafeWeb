import { Star } from "lucide-react";

export default function ReviewStars({ rating }) {
    return (
        <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
                <Star 
                key={i}
                size={16}
                className={
                    i < rating ? "fill-yellow-400 text-yellow-400"
                    : "text-latte/30"
                }/>
            ))}
        </div>
    )
}