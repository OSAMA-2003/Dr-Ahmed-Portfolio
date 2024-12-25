import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';
import emailjs from 'emailjs-com';
import { useState, useRef } from 'react';

export const Contact = () => {
  const formRef = useRef();
  const [notification, setNotification] = useState({ message: '', type: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setNotification({ message: '', type: '' });

    emailjs
      .sendForm(
        'service_tycf2or', // Replace with your EmailJS service ID
        'template_5z2x5wy', // Replace with your EmailJS template ID
        formRef.current, // Use the form reference
        '1gTEJC9nMAB86yD7t' // Replace with your EmailJS public key
      )
      .then(
        (result) => {
          console.log('Email sent:', result.text);
          setNotification({ message: 'Your message was sent successfully!', type: 'success' });
          formRef.current.reset(); // Reset the form
        },
        (error) => {
          console.error('Error sending email:', error.text);
          setNotification({ message: 'Failed to send your message. Please try again.', type: 'error' });
        }
      )
      .finally(() => setIsSubmitting(false));
  };
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-emerald-50" id="contact">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto"
      >
        <h2 className="text-4xl font-bold text-right mb-12 text-gray-900" style={{ fontFamily: 'Noto Kufi Arabic' }}>
          تواصل معي
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-lg p-8 shadow-lg"
          >
            <div className="space-y-6 text-right">
              <div className="flex items-center justify-end gap-3">
                <span className="text-gray-800">alnzlawy2005@gmail.com</span>
                <Mail className="w-6 h-6 text-emerald-600" />
              </div>
              <div className="flex items-center justify-end gap-3">
                <span className="text-gray-800">ahmedmohamed2211.el@azhar.edu.eg</span>
                <Mail className="w-6 h-6 text-emerald-600" />
              </div>
              <div className="flex items-center justify-end gap-3">
                <span className="text-gray-800">20-010317787</span>
                <Phone className="w-6 h-6 text-emerald-600" />
              </div>
              <div className="flex items-center justify-end gap-3">
                <span className="text-gray-800">سوهاج, مصر</span>
                <MapPin className="w-6 h-6 text-emerald-600" />
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            ref={formRef}
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <div>
              <label htmlFor="name" className="block text-right text-gray-700 mb-2">الاسم</label>
              <input
                type="text"
                name="name"
                id="name"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                dir="rtl"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-right text-gray-700 mb-2">البريد الإلكتروني</label>
              <input
                type="email"
                name="email"
                id="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                dir="rtl"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-right text-gray-700 mb-2">الرسالة</label>
              <textarea
                name="message"
                id="message"
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                dir="rtl"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-emerald-600 text-white py-3 px-6 rounded-lg hover:bg-emerald-700 transition-colors"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'جاري الإرسال...' : 'إرسال'}
            </button>
            {notification.message && (
              <p
                className={`mt-4 text-center ${
                  notification.type === 'success'
                    ? 'text-green-500'
                    : 'text-red-500'
                }`}
              >
                {notification.message}
              </p>
            )}
          </motion.form>
        </div>
      </motion.div>
    </section>
  );
};
