import { motion } from 'framer-motion';
import { Briefcase, Calendar, Building, GraduationCap } from 'lucide-react';

export const Experience = () => {
  const experiences = [
    {
      period: '2019 - الآن',
      title: 'التدريس في كلية الدراسات العليا وكلية اللغة العربية',
      institution: 'جامعة الأزهر',
      details: 'تدريس مقررات البلاغة والنقد العربي لطلاب الدراسات العليا وطلاب البكالوريوس'
    },
    {
      period: '2009 - 2019',
      title: 'أستاذ في جامعة حائل',
      institution: 'المملكة العربية السعودية',
      details: [
        'تدريس مقررات البلاغة والبلاغة في القرآن الكريم والسنة النبوية',
        'تدريس مقررات اللغة العربية ومصادر التراث العربي',
        'تدريس مهارات القراءة والفهم ومهارات الكتابة',
        'التدريس في كليات: الآداب والفنون، الشريعة والقانون، الهندسة، علوم الحاسب الآلي، العلوم، العلوم الطبية'
      ]
    },
    {
      period: '2007 - 2008',
      title: 'أستاذ في كلية الآداب والفنون',
      institution: 'جامعة قاريونس - ليبيا',
      details: 'التدريس لعلوم اللغة العربية والإشراف على المشاريع البحثية للتخرج'
    },
    {
      period: '2004 - 2006',
      title: 'أستاذ في كلية اللغة العربية',
      institution: 'جامعة الأزهر - جرجا',
      details: 'التدريس لفنون البلاغة والنقد العربي والبحث البلاغي'
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white" id="experience">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto"
      >
        <h2 className="text-4xl font-bold text-right mb-12 text-gray-900">
          الخبرات العملية
        </h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-white rounded-lg shadow-lg p-6 border border-gray-100"
            >
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div className="text-right flex-1">
                  <h3 className="text-xl font-semibold text-gray-900">{exp.title}</h3>
                  <div className="flex items-center gap-2 mt-2 text-emerald-600 justify-end">
                    <span>{exp.institution}</span>
                    <Building className="w-4 h-4" />
                  </div>
                  <div className="flex items-center gap-2 mt-1 text-gray-500 justify-end">
                    <span>{exp.period}</span>
                    <Calendar className="w-4 h-4" />
                  </div>
                </div>
              </div>
              <div className="mt-4 text-gray-600 text-right">
                {Array.isArray(exp.details) ? (
                  <ul className="list-none space-y-2">
                    {exp.details.map((detail, idx) => (
                      <li key={idx} className="flex items-center gap-2 justify-end">
                        <span>{detail}</span>
                        <GraduationCap className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p>{exp.details}</p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};