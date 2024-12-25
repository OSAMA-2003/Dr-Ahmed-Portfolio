import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

export const Skills = () => {
  const skills = [
    'النحو العربي',
    'الصرف',
    'البلاغةوالنقد الأدبي',
    'الأدب العربي',
    'تحقيق المخطوطات',
    'البلاغة القرأنية',
    'إعداد المناهج التعليمية',
    'البحث العلمي',
    'الخطابة'
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-emerald-50" id="skills">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto"
      >
        <h2 className="text-4xl font-bold text-right mb-12 text-gray-900" style={{ fontFamily: 'Noto Kufi Arabic' }}>
          المهارات والتخصصات
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-lg p-6 shadow-md"
            >
              <div className="flex items-center justify-end gap-3">
                <span className="text-lg text-gray-800">{skill}</span>
                <CheckCircle className="w-6 h-6 text-emerald-500" />
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};