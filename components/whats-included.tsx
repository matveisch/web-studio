import { FileImage, FormInput, Layout, MousePointerClick, Palette, Search, Smartphone, Zap } from "lucide-react"

export default function WhatsIncluded() {
  return (
    <section className="w-full py-12 md:py-24 bg-white">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl lg:text-5xl">
            What's Included in Your $990 Package
          </h2>
          <p className="mt-4 text-xl text-gray-500 max-w-3xl mx-auto">
            Everything you need for a professional, high-converting landing page
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="bg-gray-50 rounded-lg p-6 shadow-sm">
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/10 mb-4">
              <Layout className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-2">Expert-Designed Layout</h3>
            <p className="text-gray-500">
              A clean, modern, and easy-to-understand structure optimized for visitor engagement and conversions.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-gray-50 rounded-lg p-6 shadow-sm">
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/10 mb-4">
              <Smartphone className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-2">Mobile & Desktop Responsive</h3>
            <p className="text-gray-500">Looks great and functions perfectly on all devices.</p>
          </div>

          {/* Feature 3 */}
          <div className="bg-gray-50 rounded-lg p-6 shadow-sm">
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/10 mb-4">
              <Palette className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-2">Your Branding Integration</h3>
            <p className="text-gray-500">We seamlessly incorporate your logo and brand colors.</p>
          </div>

          {/* Feature 4 */}
          <div className="bg-gray-50 rounded-lg p-6 shadow-sm">
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/10 mb-4">
              <FileImage className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-2">Content Placement</h3>
            <p className="text-gray-500">We'll populate the page with your provided text and images.</p>
          </div>

          {/* Feature 5 */}
          <div className="bg-gray-50 rounded-lg p-6 shadow-sm">
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/10 mb-4">
              <FormInput className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-2">Contact/Lead Form</h3>
            <p className="text-gray-500">An integrated form to capture visitor inquiries or leads.</p>
          </div>

          {/* Feature 6 */}
          <div className="bg-gray-50 rounded-lg p-6 shadow-sm">
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/10 mb-4">
              <MousePointerClick className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-2">Clear Call-to-Action (CTA)</h3>
            <p className="text-gray-500">Strategically placed buttons to guide user actions.</p>
          </div>

          {/* Feature 7 */}
          <div className="bg-gray-50 rounded-lg p-6 shadow-sm">
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/10 mb-4">
              <Search className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-2">Basic SEO Setup</h3>
            <p className="text-gray-500">
              Essential on-page optimization (page title, meta description) to help search engines find you.
            </p>
          </div>

          {/* Feature 8 */}
          <div className="bg-gray-50 rounded-lg p-6 shadow-sm">
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/10 mb-4">
              <Zap className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-2">Fast Loading Speed</h3>
            <p className="text-gray-500">Optimized for quick performance.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
