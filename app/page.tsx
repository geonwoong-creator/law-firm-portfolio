"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, Mail, MapPin, Scale, Users, Award, ChevronDown, ChevronRight, Star, ChevronLeft } from 'lucide-react';
import Link from 'next/link';
import { url } from 'inspector';

const LawFirmWebsite = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);


  interface cases {
    title: string;
    description: string;
    result: string;
    category: string;
    url: string; 
  }

  const cases = [
    {
      title: '대기업 M&A 자문',
      description: '국내 대기업의 해외 기업 인수합병 과정에서 법적 자문을 제공하여 성공적으로 거래를 완료했습니다.',
      result: '거래금액 500억원',
      category: '기업법무',
      url: 'cases/case1'
    },
    {
      title: '대형 건설분쟁 승소',
      description: '건설업체와 발주처 간의 대규모 공사대금 분쟁에서 의뢰인 승소 판결을 이끌어냈습니다.',
      result: '승소 (배상금 100억원)',
      category: '민사소송',
      url: 'cases/case2'
    },
    {
      title: '경제범죄 무죄 판결',
      description: '복잡한 금융사기 혐의에 대해 체계적인 변호 전략으로 무죄 판결을 받았습니다.',
      result: '무죄 판결',
      category: '형사변호',
      url: 'cases/case3'
    },
    {
      title: '특허분쟁 승소',
      description: '글로벌 IT기업 간의 특허침해 분쟁에서 의뢰인의 권리를 성공적으로 보호했습니다.',
      result: '특허권 보호 및 손해배상',
      category: '기업법무',
      url: 'cases/case4'
    },
    {
      title: '의료사고 손해배상',
      description: '의료진의 과실로 인한 환자 피해에 대해 적정한 배상을 받아냈습니다.',
      result: '손해배상 50억원',
      category: '민사소송',
      url: 'cases/case5'
    },
    {
      title: '노동분쟁 해결',
      description: '대기업의 부당해고 사건에서 근로자의 권익을 보호하고 복직을 이끌어냈습니다.',
      result: '복직 및 임금 보상',
      category: '노동법',
      url: 'cases/case6'
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 자동 슬라이드 효과
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % Math.ceil(cases.length / 3));
    }, 4000); // 4초마다 자동 슬라이드

    return () => clearInterval(interval);
  }, [cases.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % Math.ceil(cases.length / 3));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + Math.ceil(cases.length / 3)) % Math.ceil(cases.length / 3));
  };

  const navItems = [
    { id: 'home', label: '홈' },
    { id: 'about', label: '회사소개' },
    { id: 'services', label: '업무분야' },
    { id: 'team', label: '구성원' },
    { id: 'cases', label: '주요사례' },
    { id: 'contact', label: '오시는길' }
  ];

  const services = [
    {
      icon: <Scale className="w-12 h-12 text-blue-600" />,
      title: '기업법무',
      description: '계약서 검토, M&A, 기업 구조조정 등 기업의 모든 법적 이슈를 전문적으로 지원합니다.',
      details: ['계약서 작성 및 검토', 'M&A 자문', '기업 구조조정', '노무 관리']
    },
    {
      icon: <Users className="w-12 h-12 text-blue-600" />,
      title: '민사소송',
      description: '개인 및 기업간 분쟁에서 의뢰인의 권익을 보호하고 최적의 해결책을 제시합니다.',
      details: ['손해배상청구', '계약분쟁', '부동산분쟁', '금전분쟁']
    },
    {
      icon: <Award className="w-12 h-12 text-blue-600" />,
      title: '형사변호',
      description: '형사사건 전반에 대한 전문적인 변호를 통해 의뢰인의 권리를 보장합니다.',
      details: ['일반 형사사건', '경제범죄', '교통사고', '성범죄']
    }
  ];


  interface TeamMember {
    name: string;
    position: string;
    speciality: string;
    experience: string;
    image: string;
    url: string; 
  }

  const teamMembers = [
    {
      name: '김법무',
      position: '대표변호사',
      speciality: '기업법무, M&A',
      experience: '15년',
      image: '/api/placeholder/300/400',
      url: '/team/lawyer1'
    },
    {
      name: '이변호',
      position: '파트너변호사',
      speciality: '민사소송, 부동산',
      experience: '12년',
      image: '/api/placeholder/300/400',
      url: '/team/lawyer2'
    },
    {
      name: '박송무',
      position: '시니어변호사',
      speciality: '형사변호, 교통사고',
      experience: '8년',
      image: '/api/placeholder/300/400',
      url: '/team/lawyer3'
    }
  ];

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <motion.nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white shadow-lg' 
            : 'bg-white/90 backdrop-blur-md shadow-sm'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16 lg:h-20">
            <motion.div 
              className="text-2xl lg:text-3xl font-bold text-blue-600"
              whileHover={{ scale: 1.05 }}
            >
              법무법인 정의
            </motion.div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex space-x-8">
              {navItems.map((item) => (
                <motion.button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-gray-800 hover:text-blue-600 font-medium transition-colors ${
                    activeSection === item.id ? 'text-blue-600' : ''
                  }`}
                  whileHover={{ y: -2 }}
                  whileTap={{ y: 0 }}
                >
                  {item.label}
                </motion.button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              className="lg:hidden p-2 text-gray-800"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              whileTap={{ scale: 0.95 }}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="lg:hidden bg-white/95 backdrop-blur-md border-t"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
            >
              <div className="container mx-auto px-4 py-4">
                {navItems.map((item) => (
                  <motion.button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="block w-full text-left py-3 text-gray-800 hover:text-blue-600 font-medium border-b border-gray-100 last:border-b-0"
                    whileHover={{ x: 10 }}
                  >
                    {item.label}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 text-center text-white px-4">
          <motion.h1 
            className="text-4xl lg:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            정의로운 법률 서비스
          </motion.h1>
          <motion.p 
            className="text-lg lg:text-xl mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            15년 이상의 풍부한 경험과 전문성으로 고객의 권익을 보호하는 신뢰받는 법무법인입니다
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.button
              onClick={() => scrollToSection('contact')}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              무료 상담 신청
            </motion.button>
            <motion.button
              onClick={() => scrollToSection('about')}
              className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-lg font-semibold transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              회사 소개
            </motion.button>
          </motion.div>
        </div>
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown className="w-6 h-6 text-white" />
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">회사 소개</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              법무법인 정의는 고객 중심의 전문적인 법률 서비스를 제공합니다
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">신뢰받는 법률 파트너</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                법무법인 정의는 2008년 설립 이래 기업법무, 민사소송, 형사변호 등 다양한 분야에서 
                전문성을 인정받아왔습니다. 고객의 입장에서 생각하고, 최선의 결과를 위해 노력하는 
                것이 저희의 철학입니다.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
                  <div className="text-gray-600">성공 사례</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">15+</div>
                  <div className="text-gray-600">경력 년수</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 gap-6"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <Scale className="w-12 h-12 text-blue-600 mb-4" />
                <h4 className="text-lg font-semibold mb-2">전문성</h4>
                <p className="text-gray-600 text-sm">각 분야별 전문 변호사의 체계적인 법률 서비스</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <Users className="w-12 h-12 text-blue-600 mb-4" />
                <h4 className="text-lg font-semibold mb-2">신뢰성</h4>
                <p className="text-gray-600 text-sm">고객과의 약속을 지키는 투명한 업무 진행</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">업무 분야</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              다양한 법률 분야에서 전문적이고 체계적인 서비스를 제공합니다
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="bg-gray-50 p-8 rounded-lg hover:shadow-lg transition-shadow group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="mb-6 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.details.map((detail, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-600">
                      <ChevronRight className="w-4 h-4 text-blue-600 mr-2" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">구성원</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              풍부한 경험과 전문성을 갖춘 변호사들이 함께합니다
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Link href={member.url} key={index}>
              <motion.div
                className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="h-64 bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
                  <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center">
                    <Users className="w-12 h-12 text-white" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-blue-600 font-medium mb-2">{member.position}</p>
                  <p className="text-gray-600 mb-3">{member.speciality}</p>
                  <div className="flex items-center text-sm text-gray-500">
                    <Award className="w-4 h-4 mr-2" />
                    경력 {member.experience}
                  </div>
                </div>
              </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Cases Section */}
      <section id="cases" className="py-20 bg-white overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">주요 사례</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              다양한 분야에서 축적한 성공 경험을 바탕으로 최적의 해결책을 제시합니다
            </p>
          </motion.div>

          <div className="relative">
            {/* 슬라이드 컨테이너 */}
            <div className="overflow-hidden">
              <motion.div
                className="flex"
                animate={{ x: `${-currentSlide * 100}%` }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              >
                {Array.from({ length: Math.ceil(cases.length / 3) }).map((_, slideIndex) => (
                  <div key={slideIndex} className="w-full flex-shrink-0">
                    <div className="grid lg:grid-cols-3 gap-8 px-4">
                      {cases.slice(slideIndex * 3, slideIndex * 3 + 3).map((case_, caseIndex) => (
                        <Link href={case_.url} key={slideIndex * 3 + caseIndex}>
                        <motion.div
                          className="bg-gray-50 p-6 rounded-lg hover:shadow-lg transition-shadow group"
                          initial={{ opacity: 0, y: 30 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: caseIndex * 0.1 }}
                          viewport={{ once: true }}
                          whileHover={{ y: -5 }}
                        >
                          <div className="flex items-center justify-between mb-4">
                            <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
                              {case_.category}
                            </span>
                            <Star className="w-5 h-5 text-yellow-500 group-hover:scale-110 transition-transform" />
                          </div>
                          <h3 className="text-lg font-bold text-gray-900 mb-3">{case_.title}</h3>
                          <p className="text-gray-600 mb-4 leading-relaxed">{case_.description}</p>
                          <div className="border-t pt-4">
                            <p className="text-blue-600 font-semibold">{case_.result}</p>
                          </div>
                        </motion.div>
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* 네비게이션 버튼 */}
            <div className="flex items-center justify-center mt-8 space-x-4">
              <motion.button
                onClick={prevSlide}
                className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <ChevronLeft className="w-6 h-6" />
              </motion.button>

              {/* 슬라이드 인디케이터 */}
              <div className="flex space-x-2">
                {Array.from({ length: Math.ceil(cases.length / 3) }).map((_, index) => (
                  <motion.button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      currentSlide === index ? 'bg-blue-600' : 'bg-gray-300'
                    }`}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.8 }}
                  />
                ))}
              </div>

              <motion.button
                onClick={nextSlide}
                className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <ChevronRight className="w-6 h-6" />
              </motion.button>
            </div>

            {/* 진행 바 */}
            <div className="mt-6 max-w-md mx-auto">
              <div className="bg-gray-200 rounded-full h-1">
                <motion.div
                  className="bg-blue-600 h-1 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${((currentSlide + 1) / Math.ceil(cases.length / 3)) * 100}%` }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">오시는 길</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              언제든지 편리한 방법으로 연락주시면 친절하게 상담해드립니다
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-8">연락처 정보</h3>
              <div className="space-y-6">
                <div className="flex items-center">
                  <Phone className="w-6 h-6 text-blue-400 mr-4" />
                  <div>
                    <p className="font-semibold">전화번호</p>
                    <p className="text-gray-300">02-1234-5678</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Mail className="w-6 h-6 text-blue-400 mr-4" />
                  <div>
                    <p className="font-semibold">이메일</p>
                    <p className="text-gray-300">info@lawfirm-justice.co.kr</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-6 h-6 text-blue-400 mr-4" />
                  <div>
                    <p className="font-semibold">주소</p>
                    <p className="text-gray-300">서울특별시 강남구 테헤란로 123, 정의빌딩 10층</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="bg-gray-800 p-8 rounded-lg"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-6">무료 상담 신청</h3>
              <div className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="성함"
                    className="w-full p-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    placeholder="연락처"
                    className="w-full p-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                </div>
                <div>
                  <select className="w-full p-3 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-400">
                    <option>상담 분야 선택</option>
                    <option>기업법무</option>
                    <option>민사소송</option>
                    <option>형사변호</option>
                  </select>
                </div>
                <div>
                  <textarea
                    placeholder="상담 내용"
                    rows={4}
                    className="w-full p-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                </div>
                <motion.button
                  type="button"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition-colors"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => alert('상담 신청이 접수되었습니다. 빠른 시일 내에 연락드리겠습니다.')}
                >
                  상담 신청하기
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-400 mb-4">법무법인 정의</div>
            <p className="text-gray-400 mb-4">
              정의로운 법률 서비스로 고객의 권익을 보호합니다
            </p>
            <p className="text-gray-500 text-sm">
              © 2024 법무법인 정의. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LawFirmWebsite;