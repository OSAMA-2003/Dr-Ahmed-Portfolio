import { motion } from 'framer-motion';
import { GraduationCap, Book, MapPin } from 'lucide-react';

import img from '../assets/main-pic.jpg'

export const Hero = () => {
  return (
    <section id='hero' className=" min-h-screen bg-gradient-to-b from-emerald-50 to-white py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto text-right"
      >
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="flex-1"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'Noto Kufi Arabic' }}>
              د. أحمد حسن
            </h1>
            <h2 className="text-2xl md:text-3xl text-emerald-600 mb-4" style={{ fontFamily: 'Noto Kufi Arabic' }}>
               أستاذ اللغة العربية ودراسات اسلامية
            </h2>
            <div className="flex flex-col gap-3 text-gray-600 mb-8">
              <div className="flex items-center gap-2 justify-end">
                <span>جامعة الأزهر</span>
                <GraduationCap className="w-5 h-5" />
              </div>
              <div className="flex items-center gap-2 justify-end">
                <span>خبرة في تدريس اللغة العربية والدراسات الاسلامية</span>
                <Book className="w-5 h-5" />
              </div>
              <div className="flex items-center gap-2 justify-end">
                <span> مصر</span>
                <MapPin className="w-5 h-5" />
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            className="flex-1"
          >
            <img
              src={img}
              alt="صورة تعبيرية"
              className="rounded-lg shadow-2xl w-full max-w-md mx-auto"
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};