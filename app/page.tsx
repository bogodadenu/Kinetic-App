"use client";

import Image from "next/image";
import { motion } from "motion/react";

const DevlogSection = ({ title, description, images, reverse }: { title: string, description: string, images: string[], reverse?: boolean }) => {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className={`flex flex-col ${reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 items-center py-16 border-b border-white/5 last:border-0`}
    >
      <div className="flex-1 space-y-6">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">{title}</h2>
        <p className="text-lg text-neutral-400 leading-relaxed">{description}</p>
      </div>
      <div className="flex-1 w-full flex flex-col gap-6">
        {images.map((src, i) => (
          <div key={i} className="relative w-full rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/10 bg-neutral-900">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              src={src} 
              alt={`${title} screenshot ${i + 1}`} 
              className="w-full h-auto object-cover hover:scale-[1.02] transition-transform duration-700 ease-in-out" 
            />
          </div>
        ))}
      </div>
    </motion.section>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0c] text-neutral-200 selection:bg-red-500/30 selection:text-white">
      <div className="max-w-6xl mx-auto px-6 py-24">
        {/* Header */}
        <motion.header 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-8 mb-32 text-center"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-neutral-400 mb-4 shadow-sm backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            Last updated 2026.09.15
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter text-white">
            Kinetic <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">Devlog</span>
          </h1>
          <p className="text-xl md:text-2xl text-neutral-400 max-w-3xl mx-auto font-light leading-relaxed">
            Building the next generation of F1 live timing and telemetry dashboards. A deep dive into the interface and features of the Kinetic platform.
          </p>
        </motion.header>

        {/* Content */}
        <div className="flex flex-col">
          <DevlogSection 
            title="Command Center"
            description="The core interface features a comprehensive timing tower with sector times, gaps, and intervals. A dynamic track map provides live driver positions, and a multi-window layout allows for a customizable workspace. The addition of a Picture-in-Picture (PiP) live video feed directly on the track map enhances situational awareness."
            images={["/image.png", "/image (1).png"]}
          />
          
          <DevlogSection 
            title="The Timing Tower"
            description="The timing tower is the heart of the dashboard. It details position, driver, tyre compound (with stint age), best and last lap times, and micro-sector progress. Visual indicators highlight personal and overall best sectors, providing an immediate read on pace."
            images={["/image (2).png", "/image (3).png"]}
            reverse
          />

          <DevlogSection 
            title="Driver Battles"
            description="The Battle widget focuses on on-track fights. It isolates two drivers (e.g., Verstappen vs. Norris), showing live gap comparisons, last lap deltas, and visual representations of who is ahead and closing in, crucial for predicting overtakes."
            images={["/image (4).png"]}
          />

          <DevlogSection 
            title="Telemetry & Conditions"
            description="Dedicated widgets for Flying Laps break down sector-by-sector progress for individual drivers. The Track Status panel provides instant flag state alerts (e.g., CLEAR or YELLOW), while the Weather widget tracks vital conditions like Air/Track Temp, Humidity, and Pressure."
            images={["/image (5).png"]}
            reverse
          />

          <DevlogSection 
            title="Strategic Insights"
            description="The Pit Strategy widget calculates projected pit loss and tracks tyre choices relative to a reference driver. The Tyre Strategy timeline visualizes live stint history for all drivers, making it easy to identify offset strategies and tyre degradation phases across the field."
            images={["/image (6).png"]}
          />

          <DevlogSection 
            title="Race Control & Comms"
            description="The Race Control log streams live FIA messages and flag updates directly to the dashboard. The Team Radio widget captures live audio communications between drivers and the pit wall, complete with playback controls to never miss a critical call."
            images={["/image (7).png"]}
            reverse
          />
        </div>
        
        {/* Footer */}
        <motion.footer 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-32 pt-8 border-t border-white/5 text-center text-neutral-500 text-sm"
        >
          <p>© 2026 Kinetic Dashboard. Developed in Google AI Studio.</p>
        </motion.footer>
      </div>
    </main>
  );
}
