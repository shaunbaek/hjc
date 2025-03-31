import type { MetaFunction } from "@remix-run/node";
import { useLanguage } from "~/root";
import LanguageToggle from "~/components/LanguageToggle";
import Logo from "~/components/Logo";

export const meta: MetaFunction = () => {
  return [
    { title: "HJC Consulting - 조현준 컨설팅" },
    { name: "description", content: "HJC Consulting is a Seoul-based consulting firm helping small businesses in the cafe industry." },
  ];
};

// Multilingual content
const content = {
  ko: {
    title: "조현준 컨설팅",
    subtitle: "HJC Consulting",
    description: "조현준 컨설팅은 카페 산업의 소규모 비즈니스를 위한 컨설팅 서비스를 제공합니다. 저희는 운영, 마케팅, 전략 계획 등 분야에서 전문적인 지도를 제공하여 카페 소유자들이 비즈니스를 최적화하고 경쟁 시장에서 성공적으로 운영할 수 있도록 도와드립니다. 저희의 맞춤형 접근 방식과 탁월함에 대한 헌신은 고객의 지속적인 성장과 성공을 이끄는 혁신적인 솔루션을 제공합니다.",
    address: "주소",
    addressLine1: "서울특별시 강남구 논현로 163길 11",
    addressLine2: "06031 대한민국",
    director: "조현준, 대표",
    email: "이메일",
    services: "서비스",
    servicesList: [
      "카페 운영 최적화",
      "마케팅 전략 개발",
      "브랜드 포지셔닝",
      "시장 분석 및 진입 전략",
      "경쟁력 향상 솔루션"
    ],
    allRightsReserved: "모든 권리 보유."
  },
  en: {
    title: "Hun Jun Cho Consulting",
    subtitle: "HJC Consulting",
    description: "Hun Jun Cho Consulting is a consulting firm dedicated to empowering small businesses in the cafe industry. We offer expert guidance in areas such as operations, marketing, and strategic planning, helping cafe owners optimize their businesses and navigate competitive markets. Our tailored approach and commitment to excellence allow us to deliver innovative solutions that drive sustained growth and success for our clients.",
    address: "Address",
    addressLine1: "11 Nonhyeon-ro 163-gil, Gangnam-gu, Seoul",
    addressLine2: "06031 South Korea",
    director: "Hun Jun Cho, Director",
    email: "Email",
    services: "Services",
    servicesList: [
      "Cafe Operations Optimization",
      "Marketing Strategy Development",
      "Brand Positioning",
      "Market Analysis & Entry Strategy",
      "Competitive Advantage Solutions"
    ],
    allRightsReserved: "All rights reserved."
  }
};

export default function Index() {
  const { language } = useLanguage();
  const t = content[language as 'ko' | 'en'];

  return (
    <main className="min-h-screen bg-matcha-light font-sans pb-16">
      <LanguageToggle />
      
      {/* Hero Section */}
      <div className="py-20 text-center">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex justify-center mb-6">
            <Logo className="w-28 h-28" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-2 text-coffee-dark">
            {t.title}
          </h1>
          <p className="text-xl md:text-2xl text-coffee mb-8">
            {t.subtitle}
          </p>
          <div className="h-1 w-20 bg-matcha mx-auto mb-10"></div>
          <p className="text-lg max-w-3xl mx-auto text-gray-700 leading-relaxed">
            {t.description}
          </p>
        </div>
      </div>
      
      {/* Services Section */}
      <div className="py-12 bg-white bg-opacity-80">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-10 text-coffee-dark">
            {t.services}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {t.servicesList.map((service, index) => (
              <div 
                key={index} 
                className="p-6 rounded-lg bg-matcha-light border border-matcha shadow-sm hover:shadow-md transition"
              >
                <span className="block mb-2 text-matcha-dark font-medium">0{index + 1}</span>
                <h3 className="text-lg font-semibold text-coffee-dark mb-2">{service}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Contact Section */}
      <div className="py-10 max-w-5xl mx-auto px-4">
        <div className="flex flex-col items-center text-center">
          <h2 className="text-2xl font-bold mb-6 text-coffee-dark">{t.director}</h2>
          <div className="mb-4">
            <a 
              href="mailto:hunjuncho@naver.com" 
              className="text-matcha-dark hover:text-matcha-dark hover:underline text-lg"
            >
              hunjuncho@naver.com
            </a>
          </div>
          
          <div>
            <p className="text-gray-700">{t.addressLine1}</p>
            <p className="text-gray-700">{t.addressLine2}</p>
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <footer className="mt-10 py-4 text-center text-gray-500 text-sm border-t border-coffee-light">
        <p>© {new Date().getFullYear()} HJC Consulting. {t.allRightsReserved}</p>
      </footer>
    </main>
  );
}
