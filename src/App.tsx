import { useState } from "react";
import { motion } from "motion/react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { 
  Clock, 
  Brain, 
  Home, 
  BadgeCheck, 
  Zap, 
  ChevronRight, 
  ShieldCheck,
  TrendingDown,
  TrendingUp,
  Lock,
  ArrowRight,
  Sparkles,
  Gift,
  CheckCircle2,
  XCircle,
  Dna,
  Target,
  Heart,
  Smile,
  Focus,
  Activity,
  HelpCircle,
  ChevronDown
} from "lucide-react";
import PrivacyPolicy from "./components/PrivacyPolicy";
import TermsConditions from "./components/TermsConditions";

const AFFILIATE_LINK = import.meta.env.VITE_AFFILIATE_LINK || "https://48c3dxj8yrhr6o23ffrhww4m2u.hop.clickbank.net";

const Navbar = () => (
  <nav className="bg-primary/95 backdrop-blur-md sticky top-0 border-b border-white/10 z-50 shadow-lg">
    <div className="max-w-[1100px] mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
      <a href={AFFILIATE_LINK} className="font-display text-xl sm:text-2xl font-extrabold text-on-primary tracking-tight uppercase shrink-0 hover:opacity-80 transition-opacity">
        The Genius Wave
      </a>
      
      <div className="hidden lg:flex flex-1 justify-end mr-12 items-center gap-10 text-[11px] font-bold text-on-primary uppercase tracking-[0.2em]">
        <a href="#how-it-works" className="hover:text-secondary transition-colors">How it works</a>
        <a href="#benefits" className="hover:text-secondary transition-colors">Benefits</a>
        <a href="#reviews" className="hover:text-secondary transition-colors">Reviews</a>
        <a href="#faq" className="hover:text-secondary transition-colors">FAQ</a>
        <a href="#refund" className="hover:text-secondary transition-colors">Refund Policy</a>
      </div>

      <a 
        href={AFFILIATE_LINK}
        style={{ fontSize: "19px", lineHeight: "19px", fontFamily: "Inter, sans-serif" }}
        className="cta-gradient text-primary font-bold px-4 sm:px-6 py-3 rounded-lg uppercase shadow-sm hover:opacity-90 active:scale-95 transition-all shrink-0"
      >
        Get Started
      </a>
    </div>
  </nav>
);

const Hero = () => (
  <section className="hero-gradient py-12 md:py-20 px-4 sm:px-6 overflow-hidden">
    <div className="max-w-[1100px] mx-auto grid lg:grid-cols-2 gap-10 md:gap-12 items-center">
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="space-y-6 md:space-y-8 text-center lg:text-left"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-green-50 text-green-700 border border-green-200 rounded-full text-[10px] font-bold uppercase tracking-widest mx-auto lg:mx-0">
          <BadgeCheck className="w-3 h-3" />
          Verified Official Site
        </div>
        <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-primary leading-[1.15] tracking-tight">
          The Genius Wave®:<br />
          <span className="text-secondary opacity-90 italic">The NASA-Supported 7-Minute Brain Ritual</span>
        </h1>
        
        <div className="space-y-4 md:space-y-6">
          <p className="text-lg sm:text-xl text-on-surface-variant font-medium">
            <a href={AFFILIATE_LINK} className="text-primary font-bold underline decoration-secondary ring-offset-2 hover:opacity-80 transition-opacity">Dr. James River's Theta Wave Protocol.</a><br className="hidden sm:block" />
            Discover the simple, 7-minute digital audio designed by neuroscientists to naturally activate your <span className="font-bold text-primary italic">Genius Wave</span> — boosting creativity, flow, and mental clarity.
          </p>
          
          <div className="pl-4 sm:pl-6 border-l-4 border-secondary/50 py-2 text-left">
            <h3 className="font-display text-xl sm:text-2xl font-bold text-primary mb-2">The Science Behind It</h3>
            <p className="text-base sm:text-lg text-on-surface-variant leading-relaxed">
              Researchers have observed that Theta waves are often associated with relaxed alertness, creative flow, and improved mental performance. This state helps the mind feel <span className="font-bold text-primary">calm, focused, and inspired</span> throughout the day.
            </p>
          </div>
        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => window.location.href = AFFILIATE_LINK}
          className="cta-gradient text-primary font-display text-xl font-black px-10 py-4 rounded-xl uppercase shadow-xl hover:shadow-2xl transition-all inline-flex items-center gap-2 group"
        >
          Activate Your Genius Wave
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" strokeWidth={3} />
        </motion.button>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="relative flex justify-center mt-8 lg:mt-0"
      >
        <div className="absolute inset-0 bg-primary/5 rounded-full blur-3xl -z-10" />
        <a href={AFFILIATE_LINK} className="block transition-transform hover:scale-[1.02]">
          <img 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuArDn3GzCcgl0xDdqNwX5v3LFgq6hF7pFFYOl-ABUTphdJXRJOn1Kj8HLagHfkgCj5wqj0RllRqE8f07SY2lHZtrKqSXaHTqtL7ocTTf6rd_cCsLvGbJ9sUh_khnglj8R6DlOVt_J7N4BJSMUcf06ZcnvbkXzbNoXGmJ-fJTyOFnNQNZeXslMDPF313Zz0HqZTFmk2wCxmpH5JW75JUyZoR-IZCdJnyYXUOvd0Q4FnVg3XeIdjVezWJFEkL9OC4A_8erIB8MvYfumI" 
            alt="The Genius Wave activation headset and digital audio program interface on smartphone" 
            className="w-full max-w-[300px] sm:max-w-[400px] lg:max-w-[500px] shadow-2xl object-cover rounded-3xl drop-shadow-[0_20px_50px_rgba(0,0,0,0.1)] border-4 sm:border-8 border-white/50"
            referrerPolicy="no-referrer"
          />
        </a>
      </motion.div>
    </div>
  </section>
);

const FeatureChips = () => (
  <section className="bg-white border-y border-outline-variant/30 py-8 md:py-12 px-4 sm:px-6">
    <div className="max-w-[1100px] mx-auto grid md:grid-cols-3 gap-4 md:gap-6">
      {[
        { icon: Clock, label: "Simple 12-Minute", sub: "daily routine" },
        { icon: Brain, label: "Based on Modern", sub: "brainwave research" },
        { icon: Home, label: "Enjoyed Anywhere", sub: "comfort of your home" }
      ].map((feature, i) => (
        <motion.div 
          key={i}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1 }}
          className="flex items-center gap-4 p-4 md:p-6 bg-surface/50 rounded-2xl border border-outline-variant/50 hover:bg-surface transition-colors duration-300"
        >
          <div className="p-3 bg-white rounded-full shadow-sm flex-shrink-0">
            <feature.icon className="w-5 h-5 md:w-6 md:h-6 text-primary-container" strokeWidth={2} />
          </div>
          <div>
            <p className="text-xs md:text-sm font-bold uppercase tracking-wider text-primary">{feature.label}</p>
            <p className="text-[10px] md:text-xs text-on-surface-variant italic">{feature.sub}</p>
          </div>
        </motion.div>
      ))}
    </div>
  </section>
);

const ProblemSection = () => (
  <section className="py-16 md:py-24 px-4 sm:px-6 bg-primary text-on-primary relative overflow-hidden">
    <div className="absolute top-0 right-0 w-full h-full opacity-5 pointer-events-none">
      <Dna className="w-full h-full rotate-45 scale-150" />
    </div>
    <div className="max-w-[1100px] mx-auto grid lg:grid-cols-2 gap-12 md:gap-16 items-center">
      <div className="space-y-6 md:space-y-8 relative z-10 text-center lg:text-left">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-secondary-container/10 border border-secondary-container/20 rounded-full text-secondary-container text-[10px] font-bold uppercase tracking-widest">
          <Lock className="w-3 h-3" />
          The Modern Bottleneck
        </div>
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black leading-tight tracking-tighter">
          Why your brain feels <span className="text-secondary-container">"Stuck"</span> in common patterns.
        </h2>
        <p className="text-on-primary/70 text-base md:text-lg leading-relaxed font-light">
          Most adults spend 95% of their lives in <span className="italic">Beta wave</span> states—stressed, analytical, and constantly reactive. This "noise" drowns out the creative frequency we all possessed as children.
        </p>
        <div className="space-y-6 text-left">
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-error-container/20 flex items-center justify-center text-error-container">
              <TrendingDown className="w-5 h-5" />
            </div>
            <div>
              <p className="font-bold text-base md:text-lg">The "Theta Shrinkage"</p>
              <p className="text-on-primary/60 text-sm md:text-base">As we age, our Theta activity naturally declines, taking our intuitive "genius" with it.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-secondary-container/20 flex items-center justify-center text-secondary-container">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <p className="font-bold text-base md:text-lg">The 12-Minute Solution</p>
              <p className="text-on-primary/60 text-sm md:text-base">Our audio uses specific brain entrainment frequencies to "guide" your mind back to its peak creative state.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="relative group mt-8 lg:mt-0">
        <div className="absolute -inset-1 bg-gradient-to-r from-secondary-container to-primary-container rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
        <div className="relative bg-primary-container p-6 md:p-12 rounded-2xl border border-white/10 space-y-6 md:space-y-8">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-bold uppercase tracking-widest opacity-50">Brain Activity Map</span>
            <span className="text-[9px] bg-secondary-container text-primary font-black px-2 py-0.5 rounded">LIVE TEST</span>
          </div>
          <div className="space-y-4">
            <div className="space-y-2">
              <div className="flex justify-between text-[10px] sm:text-xs font-bold">
                <span>THETA (Creative Flow)</span>
                <span className="text-secondary-container">+340%</span>
              </div>
              <div className="h-1.5 sm:h-2 w-full bg-white/5 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: "95%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                  className="h-full bg-secondary-container shadow-[0_0_15px_rgba(244,231,34,0.5)]" 
                />
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-[10px] sm:text-xs font-bold">
                <span>BETA (Stress/Noise)</span>
                <span className="text-error-container">-62%</span>
              </div>
              <div className="h-1.5 sm:h-2 w-full bg-white/5 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: "100%" }}
                  whileInView={{ width: "38%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                  className="h-full bg-error-container" 
                />
              </div>
            </div>
          </div>
          <p className="text-[10px] text-center italic opacity-40 font-medium">Representative of observed brain patterns during Theta entrainment.</p>
        </div>
      </div>
    </div>
  </section>
);

const ComparisonSection = () => (
  <section className="py-16 md:py-24 px-4 sm:px-6 bg-white overflow-hidden">
    <div className="max-w-[1100px] mx-auto text-center mb-10 md:mb-16 space-y-4">
      <h2 className="font-display text-3xl md:text-4xl font-extrabold text-primary">Why Not Just Meditate?</h2>
      <p className="text-on-surface-variant max-w-xl mx-auto text-sm sm:text-base">Traditional methods work, but they can take months to master. We built a shortcut.</p>
    </div>
    
    <div className="max-w-[800px] mx-auto border border-outline-variant/30 rounded-2xl md:rounded-3xl overflow-hidden shadow-sm">
      <div className="grid grid-cols-2 bg-surface text-center font-bold text-[10px] md:text-xs uppercase tracking-widest border-b border-outline-variant/30">
        <div className="py-4 md:py-6 border-r border-outline-variant/30">Traditional Methods</div>
        <div className="py-4 md:py-6 text-primary flex items-center justify-center gap-2">
          The Genius Wave
          <Sparkles className="w-3 h-3 fill-secondary-container text-secondary-container" />
        </div>
      </div>
      
      {[
        { label: "Learning Curve", traditional: "Months of practice", wave: "Instant (12 min)" },
        { label: "Effort Level", traditional: "High (Concentration)", wave: "Zero (Passive)" },
        { label: "Daily Ritual", traditional: "30-60 minutes", wave: "Subliminal 12 min" },
        { label: "Cost", traditional: "$1,000s (Retreats)", wave: "One-time $39" },
        { label: "Research", traditional: "General wellness", wave: "NASA-grade Tech" }
      ].map((row, i) => (
        <div key={i} className="grid grid-cols-2 text-xs sm:text-sm border-b last:border-0 border-outline-variant/20 hover:bg-surface/30 transition-colors">
          <div className="p-4 sm:p-6 md:p-8 flex flex-col gap-1 border-r border-outline-variant/20">
            <span className="text-[9px] font-black uppercase text-outline tracking-wider">{row.label}</span>
            <span className="flex items-center gap-2 text-on-surface-variant">
              <XCircle className="w-3 h-3 sm:w-4 sm:h-4 text-error opacity-40 flex-shrink-0" />
              {row.traditional}
            </span>
          </div>
          <div className="p-4 sm:p-6 md:p-8 flex flex-col gap-1 bg-primary/5">
            <span className="text-[9px] font-black uppercase text-primary/40 tracking-wider">Solution</span>
            <span className="flex items-center gap-2 font-bold text-primary">
              <CheckCircle2 className="w-3 h-3 sm:w-4 sm:h-4 text-secondary flex-shrink-0" />
              {row.wave}
            </span>
          </div>
        </div>
      ))}
    </div>
  </section>
);

const TheStory = () => (
  <section id="how-it-works" className="py-16 md:py-24 px-4 sm:px-6 bg-white overflow-hidden scroll-mt-20">
    <div className="max-w-[1100px] mx-auto flex flex-col md:flex-row gap-10 md:gap-16 items-center">
      <div className="w-full md:w-1/2 relative space-y-4">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative z-10 rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl rotate-1 md:rotate-2 hover:rotate-0 transition-transform duration-500"
        >
          <a href={AFFILIATE_LINK} className="block cursor-pointer">
            <img 
              src="https://images.unsplash.com/photo-1507413245164-6160d8298b31?auto=format&fit=crop&q=80&w=800" 
              alt="Neuroscientist conducting brainwave research in a modern laboratory" 
              className="w-full h-auto"
            />
          </a>
        </motion.div>
        <a 
          href={AFFILIATE_LINK}
          className="md:absolute -bottom-6 -right-6 bg-secondary text-primary p-4 md:p-6 rounded-2xl shadow-xl z-20 max-w-full md:max-w-[200px] mx-auto md:mx-0 text-center md:text-left block hover:scale-105 transition-transform"
        >
          <p className="text-[10px] font-black uppercase tracking-widest mb-1">Source</p>
          <p className="text-xs md:text-sm font-bold leading-tight">NASA "Private Research" archives (1995-2012)</p>
        </a>
      </div>
      
      <div className="w-full md:w-1/2 space-y-4 md:space-y-6 text-on-surface-variant text-center md:text-left">
        <h2 className="font-display text-3xl md:text-4xl font-extrabold text-primary leading-tight">The Secret NASA Study</h2>
        <p className="text-lg md:text-xl italic font-medium text-primary leading-relaxed">"It wasn't that we weren't smart enough... we just lost the frequency."</p>
        <p className="text-base md:text-lg leading-relaxed">
          In a little-known study, NASA researchers found that 98% of children possess "creative genius" levels of brain activity. But by age 20, that number drops to just 2%.
        </p>
        <p className="text-base md:text-lg leading-relaxed">
          Dr. Rivers, a leading neuroscientist, spent 12 years decoding what happened. He discovered that the <strong>Theta Wave</strong>—the bridge between the conscious and subconscious—hardens as we age. 
        </p>
        <p className="text-base md:text-lg leading-relaxed">
          The Genius Wave isn't a "pill" or a "hack." It's a precisely tuned acoustic frequency designed to gently vibrate the cranial nerves, encouraging the brain to re-learn its natural Theta rhythm.
        </p>
        <div className="pt-4 flex justify-center md:justify-start">
          <div className="flex items-center gap-4 text-primary text-left">
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-secondary flex items-center justify-center flex-shrink-0">
              <Sparkles className="w-5 h-5 md:w-6 md:h-6 fill-secondary" />
            </div>
            <p className="font-bold text-sm md:text-base">Restoring what is already yours.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Testimonials = () => (
  <section id="reviews" className="py-16 md:py-24 px-4 sm:px-6 bg-primary overflow-hidden scroll-mt-20">
    <div className="max-w-[1100px] mx-auto text-center mb-12 sm:mb-16">
      <h2 className="font-display text-3xl md:text-4xl font-extrabold text-on-primary">Real Experiences</h2>
    </div>
    
    <div className="max-w-[1100px] mx-auto grid md:grid-cols-3 gap-6 sm:gap-8">
      {[
        { 
          name: "Sarah J.", 
          role: "Graphic Designer", 
          image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150&h=150",
          text: "I was in a creative rut for 2 years. After 3 days of 'The Wave', I felt the ideas just flooding back. It feels like my brain is finally awake again." 
        },
        { 
          name: "Mark T.", 
          role: "Software Engineer", 
          image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150&h=150",
          text: "Focusing used to be a chore. Now, I put my headphones on for 12 minutes while coffee brews, and my productivity is through the roof." 
        },
        { 
          name: "Elena R.", 
          role: "Entrepreneur", 
          image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=150&h=150",
          text: "It's the weirdest thing... I just feel 'luckier'. Better ideas, better conversations, and much less stress." 
        }
      ].map((test, i) => (
        <motion.div 
          key={i}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1 }}
          className="bg-white/5 backdrop-blur-md p-6 sm:p-8 rounded-3xl border border-white/10 hover:bg-white/10 transition-colors flex flex-col"
        >
          <div className="flex items-center gap-4 mb-4 sm:mb-6">
            <img 
              src={test.image} 
              alt={test.name}
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover ring-2 ring-secondary/50"
              referrerPolicy="no-referrer"
            />
            <div>
              <p className="font-bold text-secondary-container text-base sm:text-lg">{test.name}</p>
              <p className="text-[10px] sm:text-[11px] text-on-primary/40 uppercase tracking-widest leading-none mt-1">{test.role}</p>
            </div>
          </div>
          <p className="text-on-primary/80 italic leading-relaxed text-base sm:text-lg">"{test.text}"</p>
        </motion.div>
      ))}
    </div>
  </section>
);

const Benefits = () => {
  const benefitList = [
    {
      title: "Improved Brainwave Synchronization",
      desc: "The Genius Wave aligns your brainwave frequencies, creating a state of mental harmony. This synchronization enhances overall brain performance, supports cognitive health, and unlocks your true potential.",
      icon: Activity,
      color: "text-blue-500"
    },
    {
      title: "Increased Awareness and Productivity",
      desc: "Users experience heightened awareness and sharper perception of their surroundings. This leads to improved efficiency, proactive decision-making, and greater productivity in daily tasks.",
      icon: TrendingUp,
      color: "text-green-500"
    },
    {
      title: "Stress and Anxiety Reduction",
      desc: "The soothing audio frequencies naturally place the brain in a relaxed yet focused state. This helps reduce stress and anxiety, making it ideal for both high-performance work sessions and restful downtime.",
      icon: ShieldCheck,
      color: "text-indigo-500"
    },
    {
      title: "Boosted Creativity and Problem-Solving",
      desc: "By stimulating theta brainwaves, The Genius Wave unlocks creative thinking and enhances problem-solving abilities. Users often report generating fresh, innovative ideas with ease.",
      icon: Sparkles,
      color: "text-amber-500"
    },
    {
      title: "Positive Emotional Balance",
      desc: "The program promotes emotional stability, fostering feelings of calmness, positivity, and overall well-being. This helps users approach life’s challenges with greater resilience and confidence.",
      icon: Smile,
      color: "text-pink-500"
    },
    {
      title: "Increased Mental Clarity",
      desc: "The Genius Wave clears away mental fog, sharpening thought processes and decision-making abilities. It creates the clarity needed to focus, plan, and execute with precision.",
      icon: Zap,
      color: "text-cyan-500"
    },
    {
      title: "Enhanced Learning and Memory",
      desc: "By optimizing brain function, the program makes it easier to retain information, strengthen memory, and accelerate learning. It’s perfect for students, professionals, and lifelong learners.",
      icon: Brain,
      color: "text-purple-500"
    },
    {
      title: "Deep Relaxation",
      desc: "Through advanced soundwave technology—such as binaural beats and isochronic tones—The Genius Wave promotes profound relaxation, effectively reducing stress and mental fatigue.",
      icon: Heart,
      color: "text-rose-500"
    },
    {
      title: "Heightened Focus and Concentration",
      desc: "The program strengthens mental clarity and concentration, allowing users to remain focused on tasks without distraction. This results in higher productivity and improved performance.",
      icon: Target,
      color: "text-orange-500"
    },
    {
      title: "Overall Well-Being",
      desc: "By harmonizing relaxation and focus, The Genius Wave supports mental, emotional, and even physical health. It provides a holistic approach to self-improvement and personal transformation.",
      icon: BadgeCheck,
      color: "text-emerald-500"
    }
  ];

  return (
    <section id="benefits" className="py-16 md:py-24 px-4 sm:px-6 bg-surface-container-low scroll-mt-20">
      <div className="max-w-[1100px] mx-auto text-center mb-12 sm:mb-20 space-y-4">
        <h2 className="font-display text-3xl md:text-5xl font-extrabold text-primary leading-tight">Activating Your Full Potential</h2>
        <p className="text-on-surface-variant max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
          The Genius Wave isn't just about sound—it's about harmonizing your mind for a more fulfilling life.
        </p>
      </div>
      
      <div className="max-w-[1100px] mx-auto grid sm:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-10 mb-20">
        {benefitList.map((benefit, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            className="flex gap-6 p-6 sm:p-8 bg-white rounded-3xl border border-outline-variant/30 shadow-sm hover:shadow-md transition-shadow group"
          >
            <div className={`p-4 rounded-2xl bg-surface group-hover:scale-110 transition-transform flex-shrink-0 ${benefit.color}`}>
              <benefit.icon className="w-6 h-6 sm:w-8 sm:h-8" strokeWidth={2} />
            </div>
            <div className="space-y-3">
              <h3 className="font-display text-xl sm:text-2xl font-bold text-primary italic leading-tight">
                {benefit.title}
              </h3>
              <p className="text-on-surface-variant text-base sm:text-lg leading-relaxed">
                {benefit.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="max-w-[1100px] mx-auto grid md:grid-cols-3 gap-6 sm:gap-8">
        <div className="md:col-span-2 bg-white p-8 sm:p-10 md:p-14 rounded-3xl border border-outline-variant/30 shadow-sm flex flex-col justify-center text-center md:text-left">
          <div className="inline-flex items-center justify-center md:justify-start gap-2 text-primary font-bold text-[10px] sm:text-xs uppercase tracking-[0.2em] mb-4 sm:mb-6">
            <Zap className="w-4 h-4 fill-secondary text-secondary" />
            Instant Access
          </div>
          <h3 className="font-display text-2xl sm:text-3xl font-bold text-primary mb-4 sm:mb-6">100% Digital Delivery</h3>
          <p className="text-on-surface-variant text-sm sm:text-lg leading-relaxed">
            The Genius Wave is <span className="font-bold text-primary">digital</span>, so you can begin right away from any device. No shipping waits, no physical clutter. Your copy is yours to keep forever, stored securely in the cloud.
          </p>
        </div>
        
        <div id="refund" className="bg-primary-container p-8 sm:p-10 rounded-3xl text-on-primary flex flex-col items-center justify-center text-center space-y-4 sm:space-y-6 shadow-xl relative overflow-hidden group scroll-mt-24">
          <div className="absolute top-0 right-0 p-4 opacity-10 scale-150 rotate-12 group-hover:rotate-0 transition-transform">
            <ShieldCheck className="w-24 h-24 sm:w-32 sm:h-32" />
          </div>
          <div className="bg-white/10 p-4 sm:p-5 rounded-full backdrop-blur-sm ring-1 ring-white/20">
            <BadgeCheck className="w-8 h-8 sm:w-10 sm:h-10 text-secondary-container" strokeWidth={1.5} />
          </div>
          <div className="space-y-2 relative z-10">
            <h4 className="font-display text-xl sm:text-2xl font-bold italic">90-Day Money Back Guarantee</h4>
            <p className="text-xs sm:text-base text-on-primary/80 leading-relaxed font-light">
              If you're not absolutely thrilled with your results, we'll give you every penny back. No questions asked.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

const BonusSection = () => (
  <section className="py-16 md:py-24 px-4 sm:px-6 bg-surface-container-low border-y border-outline-variant/30">
    <div className="max-w-[1100px] mx-auto text-center mb-12 md:mb-16 space-y-4">
      <h2 className="font-display text-3xl md:text-4xl font-extrabold text-primary">Plus Free Exclusive Bonuses</h2>
      <p className="text-on-surface-variant text-sm md:text-base">Three additional gifts to accelerate your results, included free today.</p>
    </div>
    
    <div className="max-w-[1100px] mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
      {[
        { 
          title: "The Genius Bio-Hacks", 
          desc: "Simple tweaks to your sleep and diet that can double your cognitive output.",
          value: "$47 Value",
          icon: Brain
        },
        { 
          title: "The Financial Wave", 
          desc: "How to use your new creative flow to spot opportunities others miss.",
          value: "$97 Value",
          icon: Zap
        },
        { 
          title: "Success Accelerator", 
          desc: "A daily tracking system to monitor your cognitive evolution.",
          value: "$37 Value",
          icon: ArrowRight
        }
      ].map((bonus, i) => (
        <a key={i} href={AFFILIATE_LINK} className="block group/card">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-white p-6 sm:p-8 rounded-2xl border border-outline-variant/50 shadow-sm flex flex-col hover:shadow-md transition-shadow h-full"
          >
            <div className="w-10 h-10 md:w-12 md:h-12 bg-primary/5 rounded-xl flex items-center justify-center text-primary mb-4 md:mb-6 ring-1 ring-primary/10 group-hover/card:scale-110 transition-transform">
              <bonus.icon className="w-5 h-5 md:w-6 md:h-6" />
            </div>
            <h3 className="font-display text-base md:text-lg font-bold text-primary mb-2 italic group-hover/card:text-secondary transition-colors">Bonus #{i+1}: {bonus.title}</h3>
            <p className="text-on-surface-variant text-xs md:text-sm leading-relaxed flex-grow">{bonus.desc}</p>
            <div className="mt-6 pt-6 border-t border-outline-variant/30 flex justify-between items-center bg-secondary/5 -mx-6 sm:-mx-8 -mb-6 sm:-mb-8 p-4 sm:p-6 rounded-b-2xl group-hover/card:bg-secondary/10 transition-colors">
              <span className="text-[9px] font-black uppercase tracking-tighter text-secondary">Bonus {i + 1}</span>
              <span className="text-[10px] md:text-xs font-bold text-primary italic line-through opacity-40">{bonus.value}</span>
              <span className="text-[10px] md:text-xs font-black text-secondary uppercase tracking-widest">FREE</span>
            </div>
          </motion.div>
        </a>
      ))}
    </div>
  </section>
);

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      q: "What frequency does God vibrate on?",
      a: "Many spiritual and ancient traditions identify 963 Hz as the 'Frequency of the Gods' or the frequency of divine consciousness. While these frequencies connect us to the universe, the Genius Wave targets the 4-7Hz Theta range—the exact frequency where your brain unlocks its intuitive 'God-given' creative spark and deep connection.",
      cta: "Discover Your Divine Spark"
    },
    {
      q: "What are the 9 sacred frequencies?",
      a: "The 9 Solfeggio frequencies (174Hz, 285Hz, 396Hz, 417Hz, 528Hz, 639Hz, 741Hz, 852Hz, 963Hz) are ancient tones used to heal and balance the mind. The Genius Wave ritual incorporates these harmonic principles to vibrate the cranial nerves and 'tune' your brain into its peek performance state in minutes.",
      cta: "Experience Sacred Harmonics"
    },
    {
      q: "What frequency is 666?",
      a: "In acoustics and numerology, 666 is often discussed, but in neuroscience, the focus is on avoiding 'dissonant' Beta waves (13-30Hz) associated with high stress and 'The Modern Bottleneck.' The Genius Wave works by purging this mental dissonance and returning you to the restorative, high-power Theta state.",
      cta: "Purge Mental Noise Now"
    },
    {
      q: "How can I improve my brain power in 7 minutes?",
      a: "The Secret NASA-backed study proved that specific acoustic rhythms can activate the brain's 'Genius' mode in as little as 7 minutes. By listening to the precisely tuned frequencies in Dr. Rivers' protocol, you can bypass years of meditation and instantly re-trigger your dormant Theta activity.",
      cta: "Start Your 7-Minute Activation"
    }
  ];

  return (
    <section id="faq" className="py-20 md:py-32 px-4 sm:px-6 bg-white overflow-hidden border-t border-outline-variant/30">
      <div className="max-w-[800px] mx-auto">
        <div className="text-center mb-12 sm:mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/5 rounded-full text-primary text-[10px] font-bold uppercase tracking-widest">
            <HelpCircle className="w-3 h-3" />
            Curious Minds Ask
          </div>
          <h2 className="font-display text-3xl md:text-5xl font-black text-primary italic leading-tight">Frequently Asked Secrets</h2>
          <p className="text-on-surface-variant text-base md:text-lg">Unlocking the mysteries of the mind and the universe.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="border border-outline-variant/30 rounded-2xl md:rounded-3xl overflow-hidden bg-surface-container-low/30 hover:bg-blue-50/50 transition-all duration-300 group">
              <button 
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full text-left p-6 md:p-8 flex items-center justify-between gap-4"
              >
                <span className="font-display text-xl md:text-2xl font-bold text-primary group-hover:text-blue-600 transition-colors italic">{faq.q}</span>
                <ChevronDown className={`w-5 h-5 text-primary transition-transform duration-300 ${openIndex === i ? 'rotate-180' : ''}`} strokeWidth={3} />
              </button>
              
              <motion.div 
                initial={false}
                animate={{ height: openIndex === i ? "auto" : 0, opacity: openIndex === i ? 1 : 0 }}
                className="overflow-hidden"
              >
                <div className="px-6 md:px-8 pb-8 space-y-6">
                  <p className="text-on-surface-variant text-base md:text-lg leading-relaxed border-l-2 border-secondary/30 pl-4 italic">
                    {faq.a}
                  </p>
                  <div className="pt-2">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => window.location.href = AFFILIATE_LINK}
                      className="cta-gradient text-primary font-display text-xs md:text-sm font-black px-6 py-3 rounded-xl uppercase shadow-lg inline-flex items-center gap-2 group/btn"
                    >
                      {faq.cta}
                      <ArrowRight className="w-3 h-3 group-hover/btn:translate-x-1 transition-transform" strokeWidth={3} />
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const OfferBox = () => (
  <section id="offer" className="py-16 md:py-24 px-4 sm:px-6 bg-white relative">
    <div className="max-w-[900px] mx-auto bg-white border-[2px] md:border-[3px] border-primary rounded-3xl md:rounded-[2.5rem] p-6 sm:p-10 md:p-20 shadow-[0_20px_100px_-20px_rgba(13,43,91,0.1)] text-center relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-2 bg-secondary" />
      
      <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-extrabold text-primary mb-8 md:mb-12 leading-tight">
        Start Activating Your "Genius Wave" Today
      </h2>
      
      <div className="mb-8 md:mb-12 relative group uppercase">
        <motion.div 
          className="absolute inset-0 bg-secondary/5 blur-[60px] md:blur-[100px] rounded-full scale-75 group-hover:scale-100 transition-transform duration-700" 
          aria-hidden="true"
        />
        <img 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCfMesWp9OhElt3jqSnmsASypzG15KItkFem-rYRuy2m039_K2Q9PqSx5NcdnJ8sWATktaBpwxqEnEkh0ySwl8zeju5tsqoUlkd7IlDBs200vFVZaWchrw7ATbkapitJX3CTMNdMtVZ3XUnWQ3t49jF2W3_JhvsAuAmMrRNPxKYOtjNlii-TsDQv2twqmw28_Oq-9l3eWsIuDgnwzNhN_w6JEEDANa-4NOJNxB3ES1G4PS_AApvIMN0B5f5FkEcy8KiRrB6zbe7pJg" 
          alt="Complete The Genius Wave digital bundle including the 7-minute audio and bonus materials" 
          className="w-full max-w-[500px] mx-auto relative z-10 hover:scale-[1.02] transition-transform duration-500 rounded-2xl md:rounded-3xl shadow-2xl border border-outline-variant/20 cursor-pointer"
          referrerPolicy="no-referrer"
          onClick={() => window.location.href = AFFILIATE_LINK}
        />
        <p className="text-[10px] sm:text-xs text-on-surface-variant font-medium italic mt-4 sm:mt-6 opacity-60">
          Product Is Delivered Digitally. Instant Access Provided After Purchase.
        </p>
      </div>
      
      <div className="flex items-center justify-center gap-4 sm:gap-10 mb-8 md:mb-12">
        <ChevronRight className="hidden sm:block w-8 h-8 text-secondary-container stroke-[3px] rotate-180" />
        <div className="flex flex-col items-center">
          <span className="text-[10px] sm:text-xs font-bold text-on-surface-variant uppercase tracking-widest mb-1">Today Just For</span>
          <div className="flex items-baseline gap-1">
            <span className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-primary tabular-nums tracking-tighter">$39</span>
          </div>
        </div>
        <ChevronRight className="hidden sm:block w-8 h-8 text-secondary-container stroke-[3px]" />
      </div>
      
      <motion.button 
        whileHover={{ scale: 1.02, y: -2 }}
        whileTap={{ scale: 0.98 }}
        className="cta-gradient w-full py-5 sm:py-6 rounded-2xl text-primary font-display text-xl sm:text-2xl font-black uppercase tracking-tight shadow-xl hover:shadow-2xl transition-all border-b-4 border-secondary/50 group cursor-pointer"
        onClick={() => window.location.href = AFFILIATE_LINK}
      >
        Buy Genius Wave Now
        <span className="ml-2 inline-block transition-transform group-hover:translate-x-1">→</span>
      </motion.button>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-surface-container py-20 px-6 border-t border-outline-variant">
    <div className="max-w-[1100px] mx-auto flex flex-col items-center text-center space-y-12">
      <div className="space-y-4">
        <div className="font-display text-2xl font-black text-primary tracking-tighter uppercase">The Genius Wave</div>
        <p className="text-xs text-on-surface-variant max-w-3xl font-medium leading-loose">
          *These statements have not been evaluated by the U.S. Food and Drug Administration. This product is not intended to diagnose, treat, cure, or prevent any disease.
          <br /><br />
          ClickBank is the retailer of products on this site. CLICKBANK® is a registered trademark of Click Sales Inc., a Delaware corporation located at 1444 S. Entertainment Ave., Suite 410 Boise, ID 83709, USA and used by permission.
        </p>
      </div>
      
      <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-[11px] font-bold text-on-surface-variant uppercase tracking-widest">
        <Link to="/privacy" className="hover:text-primary transition-colors hover:underline decoration-secondary underline-offset-4">Privacy Policy</Link>
        <span className="text-outline-variant">|</span>
        <Link to="/terms" className="hover:text-primary transition-colors hover:underline decoration-secondary underline-offset-4">Terms & Conditions</Link>
        <span className="text-outline-variant">|</span>
        <a href={AFFILIATE_LINK} className="hover:text-primary transition-colors hover:underline decoration-secondary underline-offset-4">Product Support</a>
        <span className="text-outline-variant">|</span>
        <a href={AFFILIATE_LINK} className="hover:text-primary transition-colors hover:underline decoration-secondary underline-offset-4">Order Support</a>
      </div>
      
      <p className="text-[10px] text-outline font-medium tracking-wide">
        Copyright © {new Date().getFullYear()} Genius Wave. All Right Reserved.
      </p>
    </div>
  </footer>
);

const LandingPage = () => (
  <>
    <Hero />
    <FeatureChips />
    <ProblemSection />
    <TheStory />
    <Benefits />
    <ComparisonSection />
    <FAQSection />
    <Testimonials />
    <BonusSection />
    <OfferBox />
  </>
);

export default function App() {
  return (
    <Router>
      <div className="min-h-screen selection:bg-secondary/30 selection:text-primary">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<TermsConditions />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
