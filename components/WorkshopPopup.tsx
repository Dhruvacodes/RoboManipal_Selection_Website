'use client';

import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';

interface WorkshopPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function WorkshopPopup({
  isOpen,
  onClose,
}: WorkshopPopupProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 flex items-center justify-center px-4"
          style={{ backgroundColor: 'rgba(26,24,21,0.85)' }}
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.7, opacity: 0, y: 30 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.7, opacity: 0, y: 30 }}
            transition={{
              duration: 0.3,
              type: 'spring',
              stiffness: 300,
              damping: 25,
            }}
            className="border-4 border-ink p-0 max-w-2xl w-full text-center overflow-hidden"
            style={{
              boxShadow: '12px 12px 0 #C5A059',
              backgroundColor: '#F7F4ED',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Meme Image Section */}
            <div className="relative w-full">
              <Image
                src="/workshop-meme.jpeg"
                alt="Workshop meme"
                width={800}
                height={500}
                className="w-full h-auto"
              />
            </div>

            {/* Details Section - Solid Background */}
            <div
              className="p-10 space-y-5 text-left"
              style={{
                backgroundColor: '#F7F4ED',
              }}
            >
              {/* Emoji */}
              <motion.div
                animate={{ scale: [1, 1.15, 1], rotate: [0, 5, -5, 0] }}
                transition={{ duration: 0.8, repeat: Infinity, delay: 0.2 }}
                className="text-5xl text-center"
              >
                🎊
              </motion.div>

              {/* Main Message */}
              <motion.h2
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-3xl md:text-4xl font-black uppercase tracking-tighter"
                style={{ color: '#C5A059' }}
              >
                Hold Your Horses!
              </motion.h2>

              {/* Details */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="space-y-3 text-sm"
              >
                <p style={{ color: '#1A1815', fontWeight: 'bold' }}>
                  ⏰ Workshop at 6 PM
                </p>
                <ul className="space-y-2 text-xs" style={{ color: '#3d3d3d' }}>
                  <li>📍 <strong>Dress Code:</strong> Pink top + Green shorts (COMPULSORY)</li>
                  <li>👟 <strong>Footwear:</strong> Actual shoes (not flip-flops)</li>
                  <li>🧠 <strong>Vibe:</strong> Come ready to move fast and build</li>
                  <li>🚨 <strong>Late?</strong> Bring 1L Coke as tribute</li>
                </ul>
              </motion.div>

              {/* Bottom Message */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-base font-bold text-center"
                style={{ color: '#C5A059' }}
              >
                See you in your finest pink and green combo! 🩷💚
              </motion.p>

              {/* Click to close */}
              <motion.p
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="text-xs text-center uppercase tracking-wider"
                style={{ color: '#A8BCC1' }}
              >
                Click anywhere to dismiss
              </motion.p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
