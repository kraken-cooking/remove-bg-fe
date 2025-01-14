import type { MetaFunction } from "@remix-run/node";

import { Header } from "~/components/Header";
import { Footer } from "~/components/Footer";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-purple-50 to-white px-8 py-16">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-5xl font-bold mb-6">
              Remove Background
              <br />
              in just one click
            </h1>
            <p className="text-gray-600 mb-8">
              Professional-grade background removal powered by AI.
              <br />
              Get perfect results in seconds, no expertise needed.
            </p>
            <div className="flex gap-4">
              <button className="bg-purple-600 text-white px-6 py-3 rounded-full hover:bg-purple-700 transition">
                Remove Background Now
              </button>
              <button className="flex items-center gap-2 text-gray-700">
                Watch Demo <span>→</span>
              </button>
            </div>
          </div>
          <div className="md:w-1/2 relative">
            <div className="grid grid-cols-2 gap-4">
              <img
                src="/landing/before-image.jpg"
                alt="Original"
                className="rounded-lg shadow-lg"
              />
              <img
                src="/landing/after-image.png"
                alt="No Background"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="absolute top-4 right-4 bg-white text-purple-600 p-4 rounded-lg shadow-lg">
              <div className="text-xl font-bold">100%</div>
              <div className="text-sm">Automatic</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-purple-600 mb-2">Features</h2>
          <div className="flex flex-col md:flex-row gap-12">
            <div className="md:w-1/2">
              <h3 className="text-4xl font-bold mb-6">
                Advanced AI for
                <br />
                Perfect Results
              </h3>
              <p className="text-gray-600 mb-8">
                Our AI-powered technology ensures precise edge detection and
                smooth cutouts every time.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-center gap-2">
                  <span className="text-purple-600">✓</span>
                  <span>Batch Processing</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-purple-600">✓</span>
                  <span>HD Resolution</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-purple-600">✓</span>
                  <span>Multiple Formats</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-purple-600">✓</span>
                  <span>Cloud Storage</span>
                </div>
              </div>
            </div>
            <div className="md:w-1/2">
              <img
                src="/landing/features-demo.jpeg"
                alt="Features"
                className="rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-gray-50 py-16 px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-purple-600 mb-2">How It Works</h2>
          <h3 className="text-4xl font-bold mb-12">
            Remove backgrounds in
            <br />
            three simple steps
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: "📤",
                title: "Upload Image",
                desc: "Upload any image from your device",
              },
              {
                icon: "⚡️",
                title: "Auto Process",
                desc: "Our AI removes the background instantly",
              },
              {
                icon: "💾",
                title: "Download",
                desc: "Download your image in any format",
              },
            ].map((step) => (
              <div
                key={step.title}
                className="bg-white p-6 rounded-xl shadow-lg"
              >
                <div className="text-4xl mb-4">{step.icon}</div>
                <h4 className="text-xl font-semibold mb-2">{step.title}</h4>
                <p className="text-gray-600">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-purple-600 mb-2">Pricing</h2>
          <h3 className="text-4xl font-bold mb-12">Choose your perfect plan</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Free",
                price: "$0",
                features: ["5 images/month", "Basic quality", "Web export"],
              },
              {
                name: "Pro",
                price: "$9.99",
                features: [
                  "100 images/month",
                  "HD quality",
                  "Priority support",
                ],
              },
              {
                name: "Business",
                price: "$29.99",
                features: ["Unlimited images", "API access", "Custom branding"],
              },
            ].map((plan) => (
              <div
                key={plan.name}
                className="bg-white p-8 rounded-xl shadow-lg"
              >
                <h4 className="text-xl font-semibold mb-4">{plan.name}</h4>
                <div className="text-3xl font-bold mb-6">
                  {plan.price}
                  <span className="text-sm text-gray-500">/month</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center justify-center gap-2"
                    >
                      <span className="text-purple-600">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="w-full bg-purple-600 text-white px-6 py-3 rounded-full hover:bg-purple-700 transition">
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
