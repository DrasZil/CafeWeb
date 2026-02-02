export default function Footer() {
  return (
    <>
    <div className="h-px w-full bg-gradient-to-r from-transparent via-bean/40 to-transparent" />


    <footer id="footer" className="mt-40 border-t border-bean/30">
      <div className="max-w-7xl mx-auto px-8 md:px-20 py-12 text-sm text-muted space-y-6">
        
        {/* Copyright */}
        <p className="text-center">
          © {new Date().getFullYear()} Café DrasZil. All rights reserved.
        </p>

        {/* Disclaimer */}
        <div className="max-w-3xl mx-auto text-center space-y-2">
          <p>
            This website is a conceptual and educational project created for
            design and development demonstration purposes.
          </p>

          <p>
            Menu item images are temporary placeholders sourced from publicly
            available images on Google/unsplash and are used strictly for visual
            representation. These images will be replaced with properly licensed
            or original content before any commercial use.
          </p>

          <p>
            The background image used in the hero section is sourced from
            Freepik and is used in accordance with its free-use license.
          </p>

          <p>
            This project is not affiliated with or endorsed by any image owners
            or third-party brands.
          </p>
        </div>
      </div>
    </footer>
    
    </>
  )
}
