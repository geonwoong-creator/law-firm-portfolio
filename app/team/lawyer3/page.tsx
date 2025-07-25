"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Users, Award, Scale, Star, ChevronRight, Phone, Mail } from 'lucide-react';
import Link from 'next/link';

const Lawyer3Page = () => {
  const currentLawyer = {
    name: '박송무',
    position: '시니어변호사',
    speciality: '형사변호, 교통사고',
    experience: '8년',
    education: ['고려대학교 법학과 졸업', '사법연수원 42기 수료'],
    career: [
      '법무법인 정의 시니어변호사 (2020~현재)',
      '서울중앙지검 검사 (2017~2020)',
      '법무법인 바른 변호사 (2016~2017)'
    ],
    achievements: [
      '2023년 형사변호 무죄율 85% 달성',
      '교통사고 전문변호사 자격 취득',
      '검찰 재직시 공정수사 표창 수상'
    ],
    cases: [
      '경제범죄 무죄 판결 획득',
      '교통사고 민형사 동시 변호',
      '기업임원 배임 혐의 무혐의 처분'
    ],
    philosophy: '무죄추정의 원칙을 바탕으로 의뢰인의 권익을 적극적으로 보호합니다. 검찰 출신의 경험을 살려 수사기관의 관점을 이해하고, 효과적인 변호전략을 수립합니다.',
    contact: {
      phone: '02-1234-5680',
      email: 'park.lawyer@lawfirm-justice.co.kr'
    }
  };

  const otherLawyers = [
    { name: '김법무', url: '/team/lawyer1', speciality: '기업법무, M&A' },
    { name: '이변호', url: '/team/lawyer2', speciality: '민사소송, 부동산' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <motion.header 
        className="bg-white shadow-sm sticky top-0 z-40"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center text-gray-600 hover:text-blue-600 transition-colors">
              <ArrowLeft className="w-5 h-5 mr-2" />
              홈으로 돌아가기
            </Link>
            
            <div className="text-xl font-bold text-blue-600">법무법인 정의</div>
          </div>
        </div>
      </motion.header>

      {/* Lawyer Navigation */}
      <motion.div 
        className="bg-blue-600 text-white py-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center space-x-6">
            {otherLawyers.map((lawyer, index) => (
              <Link
                key={index}
                href={lawyer.url}
                className="bg-blue-500/50 hover:bg-blue-500/70 px-6 py-2 rounded-lg font-medium transition-colors"
              >
                {lawyer.name}
              </Link>
            ))}
            <div className="bg-white text-blue-600 px-6 py-2 rounded-lg font-semibold">
              {currentLawyer.name}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        {/* Profile Header */}
        <motion.div 
          className="bg-white rounded-lg shadow-lg p-8 mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="flex flex-col lg:flex-row items-start space-y-6 lg:space-y-0 lg:space-x-8">
            <div className="w-full lg:w-1/3">
              <div className="w-full h-80 bg-gradient-to-br from-purple-400 to-purple-600 rounded-lg flex items-center justify-center">
                <div className="w-32 h-32 bg-white/20 rounded-full flex items-center justify-center">
                  <Users className="w-20 h-20 text-white" />
                </div>
              </div>
            </div>
            
            <div className="w-full lg:w-2/3">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">{currentLawyer.name}</h1>
              <p className="text-xl text-purple-600 font-semibold mb-3">{currentLawyer.position}</p>
              <p className="text-lg text-gray-600 mb-4">{currentLawyer.speciality}</p>
              
              <div className="flex items-center mb-6">
                <Award className="w-5 h-5 text-purple-600 mr-2" />
                <span className="text-gray-700">경력 {currentLawyer.experience}</span>
              </div>

              <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
                <div className="flex items-center text-gray-600">
                  <Phone className="w-4 h-4 mr-2" />
                  {currentLawyer.contact.phone}
                </div>
                <div className="flex items-center text-gray-600">
                  <Mail className="w-4 h-4 mr-2" />
                  {currentLawyer.contact.email}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Philosophy */}
        <motion.div 
          className="bg-white rounded-lg shadow-lg p-8 mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <Scale className="w-6 h-6 text-purple-600 mr-3" />
            변호 철학
          </h2>
          <p className="text-gray-700 leading-relaxed text-lg bg-gray-50 p-6 rounded-lg">
            {currentLawyer.philosophy}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          {/* Education */}
          <motion.div 
            className="bg-white rounded-lg shadow-lg p-8"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <Award className="w-6 h-6 text-purple-600 mr-3" />
              학력
            </h2>
            <div className="space-y-4">
              {currentLawyer.education.map((edu, index) => (
                <div key={index} className="flex items-start p-4 bg-gray-50 rounded-lg">
                  <ChevronRight className="w-5 h-5 text-purple-600 mt-1 mr-3" />
                  <span className="text-gray-700 font-medium">{edu}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Achievements */}
          <motion.div 
            className="bg-white rounded-lg shadow-lg p-8"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <Star className="w-6 h-6 text-purple-600 mr-3" />
              주요 수상 및 활동
            </h2>
            <div className="space-y-4">
              {currentLawyer.achievements.map((achievement, index) => (
                <div key={index} className="flex items-start p-4 bg-gray-50 rounded-lg">
                  <Star className="w-5 h-5 text-yellow-500 mt-1 mr-3" />
                  <span className="text-gray-700">{achievement}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Career */}
        <motion.div 
          className="bg-white rounded-lg shadow-lg p-8 mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <Users className="w-6 h-6 text-purple-600 mr-3" />
            주요 경력
          </h2>
          <div className="space-y-4">
            {currentLawyer.career.map((career, index) => (
              <motion.div 
                key={index} 
                className="flex items-center p-4 bg-gray-50 rounded-lg"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
              >
                <div className="w-3 h-3 bg-purple-600 rounded-full mr-4"></div>
                <span className="text-gray-700 font-medium">{career}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Major Cases */}
        <motion.div 
          className="bg-white rounded-lg shadow-lg p-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <Scale className="w-6 h-6 text-purple-600 mr-3" />
            주요 처리 사건
          </h2>
          <div className="grid gap-6">
            {currentLawyer.cases.map((case_, index) => (
              <motion.div 
                key={index} 
                className="p-6 border border-gray-200 rounded-lg hover:shadow-md transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
              >
                <div className="flex items-start">
                  <ChevronRight className="w-5 h-5 text-purple-600 mt-1 mr-3" />
                  <span className="text-gray-700 font-medium">{case_}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Other Lawyers Quick Links */}
        <motion.div 
          className="mt-12 bg-purple-50 rounded-lg p-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">다른 구성원도 만나보세요</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {otherLawyers.map((lawyer, index) => (
              <Link
                key={index}
                href={lawyer.url}
                className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow group"
              >
                <h4 className="text-lg font-bold text-gray-900 group-hover:text-purple-600 transition-colors">
                  {lawyer.name}
                </h4>
                <p className="text-gray-600 mt-2">{lawyer.speciality}</p>
                <div className="mt-4 text-purple-600 font-medium group-hover:translate-x-2 transition-transform inline-flex items-center">
                  상세보기 <ChevronRight className="w-4 h-4 ml-1" />
                </div>
              </Link>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 mt-16">
        <div className="container mx-auto px-4 text-center">
          <div className="text-2xl font-bold text-blue-400 mb-4">법무법인 정의</div>
          <p className="text-gray-400 mb-4">
            정의로운 법률 서비스로 고객의 권익을 보호합니다
          </p>
          <p className="text-gray-500 text-sm">
            © 2024 법무법인 정의. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Lawyer3Page;