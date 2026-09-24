'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsDone(true);
            setTimeout(onComplete, 500); // Trigger page reveal
          }, 300);
          return 100;
        }
        const step = Math.floor(Math.random() * 15) + 5;
        return Math.min(prev + step, 100);
      });
    }, 70);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isDone && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -40 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          className="fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-[#050816]"
        >
          {/* Glowing Ring spinner */}
          <div className="relative flex items-center justify-center w-28 h-28">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 1.5, ease: 'linear' }}
              className="absolute w-20 h-20 border-t-2 border-r-2 border-transparent border-t-cyan-400 border-r-purple-500 rounded-full"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ repeat: Infinity, duration: 2, ease: 'linear' }}
              className="absolute w-24 h-24 border-b-2 border-l-2 border-transparent border-b-blue-500 border-l-cyan-300 rounded-full opacity-60"
            />
            <span className="text-sm font-semibold tracking-wide text-white font-mono">{progress}%</span>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-6 flex flex-col items-center gap-2"
          >
            <h2 className="text-xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent tracking-wider uppercase font-head">
              R. Akilanethran
            </h2>
            <p className="text-[10px] text-slate-400 tracking-[0.25em] uppercase animate-pulse">
              Initializing Portfolio
            </p>
          </motion.div>

          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-48 h-[1px] bg-slate-800 overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-cyan-500 to-purple-500"
              style={{ width: `${progress}%` }}
              transition={{ ease: 'easeOut' }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
