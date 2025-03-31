import { useState } from "react";
import { useLanguage } from "~/root";

const text = {
  ko: {
    title: "문의하기",
    name: "이름",
    email: "이메일",
    message: "메시지",
    send: "보내기",
    success: "메시지가 전송되었습니다. 감사합니다!",
  },
  en: {
    title: "Contact Us",
    name: "Name",
    email: "Email",
    message: "Message",
    send: "Send",
    success: "Message sent successfully. Thank you!",
  }
};

export default function ContactForm() {
  const { language } = useLanguage();
  const t = text[language as 'ko' | 'en'];
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would handle the email sending here
    // For now, we'll just simulate a successful submission
    setTimeout(() => {
      setIsSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
    }, 500);
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-coffee-dark">{t.title}</h2>
      
      {isSubmitted ? (
        <div className="p-4 bg-matcha text-matcha-dark rounded-lg text-center">
          {t.success}
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-coffee-dark mb-1">
              {t.name}
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-2 rounded-lg border border-coffee-light focus:ring-2 focus:ring-matcha focus:border-matcha outline-none"
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-coffee-dark mb-1">
              {t.email}
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-2 rounded-lg border border-coffee-light focus:ring-2 focus:ring-matcha focus:border-matcha outline-none"
            />
          </div>
          
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-coffee-dark mb-1">
              {t.message}
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={4}
              className="w-full p-2 rounded-lg border border-coffee-light focus:ring-2 focus:ring-matcha focus:border-matcha outline-none"
            />
          </div>
          
          <button
            type="submit"
            className="w-full py-2 px-4 bg-coffee hover:bg-coffee-dark text-white font-medium rounded-lg transition"
          >
            {t.send}
          </button>
        </form>
      )}
    </div>
  );
} 