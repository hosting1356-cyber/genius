import { motion } from "motion/react";

export default function TermsConditions() {
  return (
    <div className="min-h-screen bg-surface py-20 px-6">
      <div className="max-w-3xl mx-auto bg-white p-8 md:p-12 rounded-3xl border border-outline-variant/30 shadow-sm">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="font-display text-4xl font-extrabold text-primary mb-8 text-center uppercase tracking-tight">Terms & Conditions</h1>
          
          <div className="prose prose-slate max-w-none space-y-6 text-on-surface-variant leading-relaxed">
            <section>
              <h2 className="text-xl font-bold text-primary mb-3">1. Agreement to Terms</h2>
              <p>
                By accessing The Genius Wave, you agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, you are prohibited from using this site.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-primary mb-3">2. Digital Product License</h2>
              <p>
                Upon purchase, you are granted a non-exclusive, non-transferable license to stream or download The Genius Wave audio for personal, non-commercial use only. Redistribution or resale is strictly prohibited.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-primary mb-3">3. Medical Disclaimer</h2>
              <p>
                The Genius Wave is for educational and entertainment purposes. It is not a substitute for professional medical advice, diagnosis, or treatment. Always consult with your physician before beginning any new brainwave entrainment program. Do not listen while driving or operating heavy machinery.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-primary mb-3">4. Refund Policy</h2>
              <p>
                We offer a 90-day satisfaction guarantee. If you are not satisfied with the results, you may request a full refund through ClickBank within 90 days of your purchase.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-primary mb-3">5. Limitation of Liability</h2>
              <p>
                In no event shall The Genius Wave or its suppliers be liable for any damages arising out of the use or inability to use the audio program, even if notified of the possibility of such damage.
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
