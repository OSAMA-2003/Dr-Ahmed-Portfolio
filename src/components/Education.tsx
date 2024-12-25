import { motion } from 'framer-motion';
import { GraduationCap, Award, Calendar } from 'lucide-react';

export const Education = () => {
  const degrees = [
    {
      title: 'درجة الأستاذية في البلاغة والنقد',
      institution: 'جامعة الأزهر',
      year: '2015',
      details: 'درجة الأستاذية في البلاغة والنقد'
    },
    {
      title: 'دكتوراه في اللغة العربية',
      institution: 'جامعة الأزهر',
      year: '2004',
      details: 'البلاغة والنقد - الجنة والنار في البيان النبوي دراسة بلاغية في الكتب الصحاح الستة',
      honors: 'مرتبة الشرف الأولى'
    },
    {
      title: 'ماجستير في اللغة العربية',
      institution: 'جامعة الأزهر',
      year: '2000',
      details: 'البلاغة والنقد - الأساليب الإنشائية في جزأي الأحقاف والذاريات دراسة بلاغية',
      grade: 'ممتاز'
    },
    {
      title: 'تمهيدي ماجستير في اللغة العربية',
      institution: 'جامعة الأزهر',
      year: '1998',
      details: 'البلاغة والنقد'
    },
    {
      title: 'الإجازة العالية (الليسانس) في اللغة العربية',
      institution: 'جامعة الأزهر',
      year: '1996',
      details: 'اللغة العربية وآدابها',
      honors: 'جيد جداً مع مرتبة الشرف'
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-emerald-50" id="education">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto"
      >
        <h2 className="text-4xl font-bold text-right mb-12 text-gray-900">
          الشهادات العلمية
        </h2>
        <div className="space-y-6">
          {degrees.map((degree, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-white rounded-lg p-6 shadow-lg border border-emerald-100"
            >
              <div className="flex flex-col space-y-4">
                <div className="flex items-center justify-start">
                 
                  <div className=" flex-1 mr-4">
                    <div className=" text-right flex items-center justify-start gap-3 mb-2">
                      <h3 className="text-xl font-semibold text-gray-900">{degree.title}</h3>
                      <GraduationCap className="w-6 h-6 text-emerald-600" />
                    </div>
                    <p className="text-gray-600">{degree.institution}</p>
                  </div>
                  <div className="flex items-center gap-2 text-emerald-600">
                    <Calendar className="w-5 h-5" />
                    <span>{degree.year}</span>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-gray-700">{degree.details}</p>
                  {(degree.honors || degree.grade) && (
                    <div className="flex items-center justify-end gap-2 mt-2 text-emerald-600">
                      <span>{degree.honors || degree.grade}</span>
                      <Award className="w-5 h-5" />
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};