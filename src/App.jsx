import React from "react";
import { Button } from "./components/Button";
import { motion } from "framer-motion";
import {logo} from "./constants";
import { PlayCircle } from "lucide-react";

const PaymintLanding = () => {
  return (
    <div className="min-h-screen bg-[#A2E4B8] text-[#1F2A44] font-sans">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center px-6 py-20">
        <motion.img
          src={logo}
          alt="Paymint Logo"
          className="w-32 h-32 mb-6 rounded-2xl shadow-lg"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        />
        <motion.h1
          className="text-4xl md:text-5xl font-bold mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Verified & Branded Receipts. Minted on WhatsApp.
        </motion.h1>
        <motion.p
          className="text-lg max-w-xl mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          Paymint helps businesses and individuals verify receipts, generate branded ones, and automatically track their daily and monthly sales — all from WhatsApp.
        </motion.p>
        <Button
          className="bg-[#1F2A44] text-white hover:bg-[#2D2D2D] transition"
          asChild
        >
          <a href="https://wa.link/7de0yo" target="_blank" rel="noopener noreferrer">
            <span className="p-2">Start with Paymint</span>
          </a>
        </Button>
      </section>

      {/* Features Section */}
      <section className="bg-white py-16 px-6">
        <h2 className="text-3xl font-semibold text-center mb-10">What Paymint Solves</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              title: "Fake Receipt Detection",
              desc: "Instantly detect manipulated or reused receipts shared on WhatsApp."
            },
            {
              title: "Branded Receipt Generation",
              desc: "Send professional, branded receipts to customers instantly."
            },
            {
              title: "Sales Tracking",
              desc: "Easily track and review your daily and monthly sales history automatically."
            }
          ].map(({ title, desc }, i) => (
            <motion.div
              key={i}
              className="p-6 bg-[#F5FDF9] rounded-xl shadow-md"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold mb-2">{title}</h3>
              <p className="text-sm text-[#2D2D2D]">{desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Video Onboarding Section */}
      <section className="py-16 px-6 bg-[#EAFBF2] text-center">
        <motion.h2
          className="text-3xl font-semibold mb-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          See How It Works
        </motion.h2>

        <motion.div
          className="relative w-full max-w-3xl mx-auto aspect-video rounded-xl overflow-hidden shadow-lg"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/VIDEO_ID_HERE"
            title="Paymint Onboarding Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </motion.div>
      </section>

      {/* Call to Action */}
      <section className="bg-[#1F2A44] text-white text-center py-14">
        <h2 className="text-3xl font-semibold mb-4">Start Verifying & Branding Receipts Now</h2>
        <p className="mb-6">Join hundreds using Paymint on WhatsApp to create trust, track sales, and stay organized.</p>
        <Button className="bg-[#A2E4B8] text-[#1F2A44] hover:bg-[#89d7a9]" asChild>
          <a href="https://wa.link/7de0yo" target="_blank" rel="noopener noreferrer">
            <span className="p-2 text-blue-950">Chat with Paymint Bot</span>
          </a>
        </Button>
      </section>
    </div>
  );
};

export default PaymintLanding;
