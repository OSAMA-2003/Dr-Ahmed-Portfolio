import { motion } from 'framer-motion';
import { BookOpen, Link } from 'lucide-react';

export const Research = () => {
  const researches = [
    {
      title: 'دراسة تحليلية في أساليب البلاغة القرآنية',
      year: '2022',
      journal: 'مجلة الدراسات اللغوية - جامعة الأزهر',
      link: '#'
    },
    {
      title: 'منهجية تدريس النحو العربي للناطقين بغير العربية',
      year: '2021',
      journal: 'المجلة العربية للعلوم الإنسانية',
      link: '#'
    },
    {
      title: 'تحقيق مخطوطة "كنز البلاغة" للعلامة الزمخشري',
      year: '2020',
      journal: 'مجلة التراث العربي',
      link: '#'
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white" id="research">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto"
      >
        <h2 className="text-4xl font-bold text-right mb-12 text-gray-900" style={{ fontFamily: 'Noto Kufi Arabic' }}>
          الأبحاث والمنشورات
        </h2>
        <div className="space-y-6">
          {researches.map((research, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-gray-50 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-start justify-between gap-4">
                <a href={research.link} className="text-emerald-600 hover:text-emerald-700">
                  <Link className="w-5 h-5" />
                </a>
                <div className="text-right flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{research.title}</h3>
                  <div className="flex items-center justify-end gap-2 text-gray-600">
                    <span>{research.journal}</span>
                    <BookOpen className="w-4 h-4" />
                  </div>
                  <p className="text-gray-500 mt-1">{research.year}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};