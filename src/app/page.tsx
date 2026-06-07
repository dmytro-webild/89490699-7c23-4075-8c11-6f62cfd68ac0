"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FaqSplitMedia from '@/components/sections/faq/FaqSplitMedia';
import FeatureBorderGlow from '@/components/sections/feature/featureBorderGlow/FeatureBorderGlow';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import HeroLogo from '@/components/sections/hero/HeroLogo';
import MetricCardEleven from '@/components/sections/metrics/MetricCardEleven';
import NavbarStyleFullscreen from '@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen';
import PricingCardFive from '@/components/sections/pricing/PricingCardFive';
import TeamCardTwo from '@/components/sections/team/TeamCardTwo';
import TestimonialCardTen from '@/components/sections/testimonial/TestimonialCardTen';
import TextSplitAbout from '@/components/sections/about/TextSplitAbout';
import { Activity, Droplet, Facebook, Instagram, Linkedin, Sparkles, Star, Target, Twitter, Zap } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="text-shift"
        defaultTextAnimation="background-highlight"
        borderRadius="rounded"
        contentWidth="compact"
        sizing="mediumLargeSizeMediumTitles"
        background="floatingGradient"
        cardStyle="gradient-radial"
        primaryButtonStyle="double-inset"
        secondaryButtonStyle="radial-glow"
        headingFontWeight="medium"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleFullscreen
      navItems={[
        {
          name: "Home",
          id: "#hero",
        },
        {
          name: "About",
          id: "#about",
        },
        {
          name: "Features",
          id: "#features",
        },
        {
          name: "Team",
          id: "#team",
        },
        {
          name: "Pricing",
          id: "#pricing",
        },
        {
          name: "FAQ",
          id: "#faq",
        },
        {
          name: "Contact",
          id: "#contact",
        },
      ]}
      logoSrc="http://img.b2bpic.net/free-photo/exercise-banner-blank-bird-badge-graphic_53876-21373.jpg"
      logoAlt="Body Action Gym Logo"
      brandName="Body Action Gym"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroLogo
      logoText="Body Action Gym"
      description="Unleash Your Potential. Achieve Your Fitness Goals with Our Expert Trainers and State-of-the-Art Facilities."
      buttons={[
        {
          text: "Join Now",
          href: "#contact",
        },
        {
          text: "Learn More",
          href: "#about",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/young-adult-mother-doing-fitness-with-her-little-daughter_1153-4764.jpg"
      imageAlt="Athlete in a modern gym"
    />
  </div>

  <div id="about" data-section="about">
      <TextSplitAbout
      useInvertedBackground={true}
      title="About Body Action Gym"
      description={[
        "Body Action Gym is more than just a place to work out; it's a community dedicated to health and well-being. We provide a supportive environment where individuals of all fitness levels can thrive.",
        "Our state-of-the-art equipment, diverse class offerings, and highly certified trainers are here to guide you on your fitness journey. Whether you're aiming for strength, endurance, or overall wellness, we have the resources to help you succeed.",
      ]}
    />
  </div>

  <div id="features" data-section="features">
      <FeatureBorderGlow
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      features={[
        {
          icon: Activity,
          title: "Personal Training",
          description: "Customized workout plans and one-on-one coaching to accelerate your progress.",
        },
        {
          icon: Zap,
          title: "Group Classes",
          description: "High-energy sessions including cardio, strength, yoga, and spin for all levels.",
        },
        {
          icon: Target,
          title: "Modern Equipment",
          description: "Access to the latest fitness machines, free weights, and functional training areas.",
        },
        {
          icon: Droplet,
          title: "Nutritional Guidance",
          description: "Expert advice to complement your workouts and optimize your diet for better results.",
        },
        {
          icon: Sparkles,
          title: "Recovery Zones",
          description: "Relax and rejuvenate in our dedicated stretching and recovery areas.",
        },
      ]}
      title="Our World-Class Facilities & Programs"
      description="Experience top-tier training with our comprehensive range of services and modern amenities."
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardEleven
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={true}
      metrics={[
        {
          id: "m1",
          value: "500+",
          title: "Active Members",
          description: "A thriving community pushing limits daily.",
          imageSrc: "http://img.b2bpic.net/free-photo/people-doing-sport-gym_23-2151874963.jpg",
          imageAlt: "Diverse group of happy gym members",
        },
        {
          id: "m2",
          value: "98%",
          title: "Satisfaction Rate",
          description: "Members love our facilities and trainers.",
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-smiling-fitness-woman-with-towel-resting_171337-13398.jpg",
          imageAlt: "Person smiling after a successful workout",
        },
        {
          id: "m3",
          value: "20+",
          title: "Years Experience",
          description: "Delivering expert fitness coaching.",
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-fitness-influencer_23-2151564855.jpg",
          imageAlt: "Experienced personal trainer guiding client",
        },
        {
          id: "m4",
          value: "75+",
          title: "Weekly Classes",
          description: "Diverse range of classes for all fitness levels.",
          imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-fit-people-together_23-2148948542.jpg",
          imageAlt: "Dynamic group fitness class in action",
        },
      ]}
      title="Your Journey, Our Success"
      description="Proudly supporting our community in achieving their fitness milestones every day."
    />
  </div>

  <div id="team" data-section="team">
      <TeamCardTwo
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={false}
      members={[
        {
          id: "t1",
          name: "Sarah Miller",
          role: "Head Trainer",
          description: "Specializing in strength and conditioning.",
          imageSrc: "http://img.b2bpic.net/free-photo/pilates-instructor-gym_1303-23279.jpg",
          imageAlt: "Female personal trainer Sarah Miller",
          socialLinks: [
            {
              icon: Instagram,
              url: "#",
            },
            {
              icon: Twitter,
              url: "#",
            },
          ],
        },
        {
          id: "t2",
          name: "John Davis",
          role: "Yoga Instructor",
          description: "Focus on flexibility and mindfulness.",
          imageSrc: "http://img.b2bpic.net/free-photo/full-shot-smiley-woman-wearing-sport-outfit_23-2149348440.jpg",
          imageAlt: "Male yoga instructor John Davis",
          socialLinks: [
            {
              icon: Instagram,
              url: "#",
            },
            {
              icon: Facebook,
              url: "#",
            },
          ],
        },
        {
          id: "t3",
          name: "Emily White",
          role: "Cardio Specialist",
          description: "High-intensity interval training (HIIT) expert.",
          imageSrc: "http://img.b2bpic.net/free-photo/full-body-portrait-middle-age-female-with-short-hair-holds-barbell-gym-club_613910-12308.jpg",
          imageAlt: "Female cardio specialist Emily White",
          socialLinks: [
            {
              icon: Instagram,
              url: "#",
            },
            {
              icon: Linkedin,
              url: "#",
            },
          ],
        },
        {
          id: "t4",
          name: "David Lee",
          role: "Nutrition Coach",
          description: "Guiding optimal diet for peak performance.",
          imageSrc: "http://img.b2bpic.net/free-photo/man-eating-salad-bowl_23-2147893432.jpg",
          imageAlt: "Male nutrition coach David Lee",
          socialLinks: [
            {
              icon: Instagram,
              url: "#",
            },
            {
              icon: Twitter,
              url: "#",
            },
          ],
        },
      ]}
      title="Meet Our Expert Trainers"
      description="Our certified professionals are here to motivate, educate, and inspire you to reach your full potential."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardTen
      textboxLayout="default"
      useInvertedBackground={true}
      testimonials={[
        {
          id: "test1",
          title: "Transformed My Life!",
          quote: "Body Action Gym has completely transformed my approach to fitness. The trainers are incredibly supportive, and the community aspect keeps me motivated. I've never felt stronger!",
          name: "Jessica R.",
          role: "Long-term Member",
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-smiling-young-fitness-woman_329181-1295.jpg",
          imageAlt: "Jessica R. from Body Action Gym",
        },
        {
          id: "test2",
          title: "Best Gym Experience",
          quote: "I've tried many gyms, but Body Action Gym stands out. The equipment is top-notch, classes are engaging, and the staff genuinely cares about your progress. Highly recommend!",
          name: "Mark T.",
          role: "Fitness Enthusiast",
          imageSrc: "http://img.b2bpic.net/free-photo/african-american-athlete-exercising-outdoors_23-2149063632.jpg",
          imageAlt: "Mark T. from Body Action Gym",
        },
        {
          id: "test3",
          title: "Achieved My Goals",
          quote: "Thanks to Body Action Gym, I finally hit my weight loss goals and gained so much confidence. Their personal training program made all the difference. Fantastic results!",
          name: "Sophia L.",
          role: "Dedicated Trainee",
          imageSrc: "http://img.b2bpic.net/free-photo/female-model-sport-bra-looks-seductive-with-hands-closed_114579-15787.jpg",
          imageAlt: "Sophia L. from Body Action Gym",
        },
        {
          id: "test4",
          title: "Great Community",
          quote: "Beyond the great facilities, it's the friendly and encouraging atmosphere that makes Body Action Gym special. It feels like a second home, and I look forward to every workout.",
          name: "Ethan S.",
          role: "Community Member",
          imageSrc: "http://img.b2bpic.net/free-photo/females-gym-taking-photos_23-2148419828.jpg",
          imageAlt: "Ethan S. from Body Action Gym",
        },
        {
          id: "test5",
          title: "Professional and Supportive",
          quote: "The trainers are truly exceptional. They combine professional expertise with genuine care, tailoring programs that are challenging yet achievable. A truly supportive environment.",
          name: "Olivia K.",
          role: "New Member",
          imageSrc: "http://img.b2bpic.net/free-photo/slim-active-woman-practices-yoga-uses-digital-tablet-having-online-training-watches-tutorial-drinks-fresh-water-dressed-activewear-poses-outdoors-against-blurred-background-fitness-concept_273609-56888.jpg",
          imageAlt: "Olivia K. from Body Action Gym",
        },
      ]}
      title="What Our Members Say"
      description="Hear from our satisfied members about their incredible journeys and transformations."
    />
  </div>

  <div id="pricing" data-section="pricing">
      <PricingCardFive
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      plans={[
        {
          id: "p1",
          tag: "Basic",
          tagIcon: Zap,
          price: "$49",
          period: "/month",
          description: "Access to gym floor, basic classes.",
          featuresTitle: "Includes:",
          features: [
            "Full Gym Access",
            "Group Fitness Classes",
            "Locker Room Access",
          ],
          button: {
            text: "Choose Basic",
          },
        },
        {
          id: "p2",
          tag: "Premium",
          tagIcon: Sparkles,
          price: "$79",
          period: "/month",
          description: "Enhanced access, personal training session.",
          featuresTitle: "Includes everything in Basic, plus:",
          features: [
            "Full Gym Access",
            "All Group Classes",
            "One Personal Training Session/month",
            "Nutritional Guidance",
            "Priority Booking",
          ],
          button: {
            text: "Choose Premium",
          },
        },
        {
          id: "p3",
          tag: "Elite",
          tagIcon: Star,
          price: "$129",
          period: "/month",
          description: "Unlimited personal training, exclusive access.",
          featuresTitle: "Includes everything in Premium, plus:",
          features: [
            "Full Gym Access",
            "All Group Classes",
            "Unlimited Personal Training",
            "Advanced Nutritional Planning",
            "Exclusive Workshops",
            "Guest Passes",
          ],
          button: {
            text: "Choose Elite",
          },
        },
      ]}
      title="Flexible Membership Plans"
      description="Choose the plan that fits your lifestyle and fitness aspirations, with no hidden fees."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqSplitMedia
      textboxLayout="default"
      useInvertedBackground={true}
      faqs={[
        {
          id: "f1",
          title: "What are your operating hours?",
          content: "We are open Monday-Friday 5 AM - 10 PM, and Saturday-Sunday 7 AM - 8 PM.",
        },
        {
          id: "f2",
          title: "Do you offer a free trial?",
          content: "Yes, we offer a complimentary 3-day guest pass for new members to experience our facilities and classes.",
        },
        {
          id: "f3",
          title: "Can I bring a guest?",
          content: "Members on Premium and Elite plans receive guest passes. Guests must register at the front desk.",
        },
        {
          id: "f4",
          title: "What classes do you offer?",
          content: "We offer a wide range of classes including Yoga, Pilates, HIIT, Spin, Zumba, and Strength Training. Check our schedule for details.",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/close-up-flexible-sportswoman_23-2147598803.jpg"
      imageAlt="Person stretching dynamically in a gym"
      mediaAnimation="opacity"
      title="Frequently Asked Questions"
      description="Find answers to common questions about our gym, memberships, and services."
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactSplitForm
      useInvertedBackground={false}
      title="Get Started Today!"
      description="Reach out to us with any questions or to schedule a tour of our facilities. We're here to help you achieve your fitness goals."
      inputs={[
        {
          name: "name",
          type: "text",
          placeholder: "Your Name",
          required: true,
        },
        {
          name: "email",
          type: "email",
          placeholder: "Your Email",
          required: true,
        },
      ]}
      textarea={{
        name: "message",
        placeholder: "Your Message",
        rows: 4,
        required: true,
      }}
      imageSrc="http://img.b2bpic.net/free-photo/young-woman-white-top-standing-with-coach_1157-32128.jpg"
      imageAlt="Modern gym reception desk with staff"
      mediaAnimation="opacity"
      mediaPosition="right"
      buttonText="Send Message"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterLogoEmphasis
      logoSrc="http://img.b2bpic.net/free-photo/exercise-banner-blank-bird-badge-graphic_53876-21373.jpg"
      logoAlt="Body Action Gym Logo"
      columns={[
        {
          items: [
            {
              label: "Home",
              href: "#hero",
            },
            {
              label: "About Us",
              href: "#about",
            },
            {
              label: "Features",
              href: "#features",
            },
          ],
        },
        {
          items: [
            {
              label: "Memberships",
              href: "#pricing",
            },
            {
              label: "Our Trainers",
              href: "#team",
            },
            {
              label: "Testimonials",
              href: "#testimonials",
            },
          ],
        },
        {
          items: [
            {
              label: "FAQs",
              href: "#faq",
            },
            {
              label: "Contact Us",
              href: "#contact",
            },
            {
              label: "Privacy Policy",
              href: "#",
            },
          ],
        },
      ]}
      logoText="Body Action Gym"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
