import { motion } from "motion/react";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-surface py-20 px-6">
      <div className="max-w-3xl mx-auto bg-white p-8 md:p-12 rounded-3xl border border-outline-variant/30 shadow-sm">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="font-display text-4xl font-extrabold text-primary mb-8 text-center uppercase tracking-tight selection:bg-secondary/30">Privacy Policy</h1>
          
          <div className="prose prose-slate max-w-none space-y-6 text-on-surface-variant leading-relaxed">
            <section>
              <h2 className="text-xl font-bold text-primary mb-3">1. Information Collection</h2>
              <p>
                We value your privacy. The Genius Wave collects minimal information necessary to deliver our digital products and improve your experience. This may include your email address and basic usage statistics.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-primary mb-3">2. Use of Information</h2>
              <p>
                The information we collect is used to fulfill orders, send product updates, and provide customer support. We never sell or share your personal data with third-party advertisers.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-primary mb-3">3. Data Security</h2>
              <p>
                We use industry-standard encryption to protect your data. Since our product is delivered digitally via secure cloud storage, we ensure that your access links are protected and private.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-primary mb-3">4. Cookies</h2>
              <p>
                Our website uses cookies to remember your preferences and provide a seamless checkout experience. You can disable cookies in your browser settings, though some features may not function correctly.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-primary mb-3">5. Third-Party Services</h2>
              <p>
                We use ClickBank as our primary retailer. Their privacy policy also applies to transactions made on this site. Please review their terms for more details on financial data handling.
              </p>
            </section>

            <div className="pt-10 text-center">
              <a href="/" className="text-primary font-bold hover:underline decoration-secondary underline-offset-4">Back to Home</a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
