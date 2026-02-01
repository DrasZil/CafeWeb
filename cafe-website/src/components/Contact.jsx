import { MapPin, Clock, Phone, Instagram, Facebook} from "lucide-react"
import InstagramIcon from "../assets/icons/instagram"
import FacebookIcon from "../assets/icons/facebook"

export default function Contact() {
    return (
        <div id="contact">
            <h2 className="text-3xl text-latte md:text-4xl font-medium tracking-wide mb-16 text-center">
                Visit Us!
            </h2>

            <div className="grid gap-12 md:grid-cols-2 items-start">
                <div className="space-y-6 bg-espressoSoft/80 rounded-2xl p-8 
                                shadow-[0_20px_50px_rgba(0,0,0,0.4)]">
                    <div className="flex items-start gap-4">
                        <MapPin className="w-6 h-6 text-latte" />
                        <div>
                            <p className="text-latte font-medium">Address</p>
                            <p className="text-muted text-s">Iloilo City, Philippines</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-4">
                        <Clock className="w-6 h-6 text-latte"/>
                        <div>
                            <p className="text-latte font-medium">Opening Hours</p>
                            <p className="text-muted text-s">Mon - Sun: 8:00 AM - 8:00 PM</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-4">
                        <Phone className="w-6 h-6 text-latte"/>
                        <div>
                            <p className="text-latte font-medium">Contact</p>
                            <p className="text-muted text-s">+63 912 345 6789</p>
                        </div>
                    </div>

                    <div className="pt-4 border-t border-bean/30">
                        <p className="text-latte font-medium mb-4">
                            Follow Us
                        </p>

                        <div className="flex gap-6">
                            <a href="https://www.instagram.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group">
                                <InstagramIcon className="w-6 h-6 text-muted group-hover:text-latte transition" />
                            </a>

                            <a href="https://www.facebook.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group">
                                <FacebookIcon className="w-6 h-6 text-muted group-hover:text-latte transition" />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="overflow-hidden rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.4)]">
                    <iframe 
                        title="map"
                        className="w-full h-[358px]"
                        src="https://maps.google.com/maps?q=iloilo%20city&t=&z=13&ie=UTF8&iwloc=&output=embed"
                        >   
                        </iframe>
                </div>
            </div>
        </div>
    )
}