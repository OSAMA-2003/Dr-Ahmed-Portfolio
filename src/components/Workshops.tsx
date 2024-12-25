import { motion } from 'framer-motion';
import { BookOpen, Award, Calendar } from 'lucide-react';

export const Workshops = () => {
  const workshops = [
    {
      title: 'إدارة الأزمات والكوارث',
      provider: 'مركز التدريب وضمان الجودة - جامعة الأزهر'
    },
    {
      title: 'الاتجاهات الحديثة في تطوير التعليم الجامعي',
      provider: 'مركز التدريب وضمان الجودة - جامعة الأزهر'
    },
    {
      title: 'التخطيط الاستراتيجي',
      provider: 'مركز التدريب وضمان الجودة - جامعة الأزهر'
    },
    {
      title: 'الإدارة الفعالة للوقت ضغوط العمل',
      provider: 'مركز التدريب وضمان الجودة - جامعة الأزهر'
    },
    {
      title: 'تنمية المهارات الإدارية والقانونية',
      provider: 'مركز التدريب وضمان الجودة - جامعة الأزهر'
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-emerald-50" id="workshops">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto"
      >
        <h2 className="text-4xl font-bold text-right mb-12 text-gray-900">
          الدورات التدريبية وورش العمل
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {workshops.map((workshop, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-lg p-6 shadow-md"
            >
              <div className="flex flex-col items-end gap-3">
                <div className="flex items-center justify-end gap-3">
                  <h3 className="text-lg font-semibold text-gray-800">{workshop.title}</h3>
                  <BookOpen className="w-6 h-6 text-emerald-500" />
                </div>
                <div className="text-gray-600 text-right">
                  {workshop.provider}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};