import { motion } from 'framer-motion';
import { Users, Award, Calendar } from 'lucide-react';

export const Committees = () => {
  const committees = [
    {
      title: 'منسق الجودة لبرنامج الدراسات العليا',
      place: 'قسم اللغة العربية - جامعة حائل',
      period: '2016/2017'
    },
    {
      title: 'رئيس لجنة الأنشطة الطلابية',
      place: 'قسم اللغة العربية - جامعة حائل',
      period: '2014'
    },
    {
      title: 'عضو اللجنة المنظمة لاحتفالية قسم اللغة العربية',
      place: 'كلية الآداب والفنون - جامعة حائل',
      period: '2016'
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white" id="committees">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto"
      >
        <h2 className="text-4xl font-bold text-right mb-12 text-gray-900">
          اللجان والأنشطة
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {committees.map((committee, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-white rounded-lg p-6 shadow-lg border border-emerald-100"
            >
              <div className="flex items-start justify-end gap-4">
                <div className="text-right flex-1">
                  <div className="flex items-center justify-end gap-3 mb-2">
                    <h3 className="text-xl font-semibold text-gray-900">{committee.title}</h3>
                    <Users className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div className="flex items-center justify-end gap-2 text-gray-600">
                    <span>{committee.place}</span>
                    <Award className="w-5 h-5" />
                  </div>
                  <div className="flex items-center justify-end gap-2 mt-2 text-emerald-600">
                    <span>{committee.period}</span>
                    <Calendar className="w-5 h-5" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};