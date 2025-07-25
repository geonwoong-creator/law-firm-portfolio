"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Building, Calendar, Award, Scale, Users, ChevronRight, Clock, Target, CheckCircle } from 'lucide-react';
import Link from 'next/link';

const Case1Page = () => {
  const caseData = {
    title: '대기업 M&A 자문',
    category: '기업법무',
    result: '거래금액 500억원',
    duration: '2022.03 ~ 2022.12 (10개월)',
    lawyer: {
      name: '김법무',
      position: '대표변호사',
      url: '/team/lawyer1'
    },
    overview: {
      background: '국내 대기업 A사가 동남아시아 진출을 위해 현지 제조업체 B사의 지분 70%를 인수하는 대규모 M&A 프로젝트였습니다. 복잡한 국경간 거래로 인해 한국과 현지국의 법률을 모두 고려해야 하는 어려운 사안이었습니다.',
      challenges: [
        '현지국 외국인투자법 및 규제 검토',
        '복잡한 기업지배구조 분석',
        '세무 최적화 구조 설계',
        '노동법 이슈 및 임직원 승계 문제'
      ]
    },
    timeline: [
      {
        date: '2022.03',
        phase: '초기 검토',
        description: 'Due Diligence 시작 및 법적 리스크 분석',
        status: 'completed'
      },
      {
        date: '2022.05',
        phase: '구조 설계',
        description: '최적의 M&A 구조 설계 및 정부승인 전략 수립',
        status: 'completed'
      },
      {
        date: '2022.08',
        phase: '정부승인',
        description: '한국 및 현지국 정부승인 신청 및 취득',
        status: 'completed'
      },
      {
        date: '2022.10',
        phase: '계약 체결',
        description: '주식양도계약 체결 및 조건 이행',
        status: 'completed'
      },
      {
        date: '2022.12',
        phase: '거래 완료',
        description: '지분 이전 완료 및 사후 관리',
        status: 'completed'
      }
    ],
    strategy: {
      approach: '다국적 M&A의 복잡성을 해결하기 위해 현지 법무법인과의 긴밀한 협업체계를 구축했습니다. 단계별 리스크 관리와 정부기관과의 사전 협의를 통해 승인 가능성을 극대화했습니다.',
      keyPoints: [
        '현지 파트너 법무법인과의 협업 네트워크 구축',
        '정부기관과의 사전 협의를 통한 승인 전략 수립',
        '세무 효율성을 고려한 투자구조 설계',
        '계약 조건의 단계별 이행 관리'
      ]
    },
    outcome: {
      results: [
        '성공적인 지분 70% 인수 완료',
        '정부승인 과정에서 추가 조건 없이 승인 취득',
        '예상보다 2개월 단축된 일정으로 거래 완료',
        '향후 동남아 진출의 교두보 확보'
      ],
      impact: '이번 M&A는 국내 기업의 동남아시아 진출 성공 사례로 평가받으며, 유사한 해외 투자 프로젝트의 벤치마크가 되었습니다. 특히 정부승인 과정에서의 전략적 접근이 업계에서 높은 평가를 받았습니다.'
    }
  };

  const relatedCases = [
    { title: '대형 건설분쟁 승소', category: '민사소송', url: '/cases/case2' },
    { title: '경제범죄 무죄 판결', category: '형사변호', url: '/cases/case3' },
    { title: '특허분쟁 승소', category: '기업법무', url: '/cases/case4' }
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

      {/* Case Header */}
      <motion.div 
        className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <div className="flex items-center mb-4">
              <span className="bg-white/20 text-white px-4 py-2 rounded-full text-sm font-medium">
                {caseData.category}
              </span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">{caseData.title}</h1>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="flex items-center">
                <Award className="w-6 h-6 mr-3" />
                <div>
                  <p className="text-blue-100 text-sm">거래 규모</p>
                  <p className="font-semibold">{caseData.result}</p>
                </div>
              </div>
              <div className="flex items-center">
                <Calendar className="w-6 h-6 mr-3" />
                <div>
                  <p className="text-blue-100 text-sm">처리 기간</p>
                  <p className="font-semibold">{caseData.duration}</p>
                </div>
              </div>
              <div className="flex items-center">
                <Users className="w-6 h-6 mr-3" />
                <div>
                  <p className="text-blue-100 text-sm">담당 변호사</p>
                  <Link href={caseData.lawyer.url} className="font-semibold hover:text-blue-200 transition-colors">
                    {caseData.lawyer.name} {caseData.lawyer.position}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        {/* Overview */}
        <motion.div 
          className="bg-white rounded-lg shadow-lg p-8 mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <Building className="w-6 h-6 text-blue-600 mr-3" />
            사건 개요
          </h2>
          <p className="text-gray-700 leading-relaxed mb-8 text-lg">
            {caseData.overview.background}
          </p>
          
          <h3 className="text-xl font-bold text-gray-900 mb-4">주요 과제</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {caseData.overview.challenges.map((challenge, index) => (
              <div key={index} className="flex items-start p-4 bg-gray-50 rounded-lg">
                <Target className="w-5 h-5 text-blue-600 mt-1 mr-3 flex-shrink-0" />
                <span className="text-gray-700">{challenge}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Timeline */}
        <motion.div 
          className="bg-white rounded-lg shadow-lg p-8 mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
            <Clock className="w-6 h-6 text-blue-600 mr-3" />
            진행 과정
          </h2>
          
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-8 bottom-8 w-0.5 bg-blue-200"></div>
            
            <div className="space-y-8">
              {caseData.timeline.map((phase, index) => (
                <motion.div 
                  key={index}
                  className="relative flex items-start"
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                >
                  <div className="relative z-10 w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-8 h-8 text-white" />
                  </div>
                  <div className="ml-6 flex-1">
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-lg font-bold text-gray-900">{phase.phase}</h3>
                        <span className="text-sm text-blue-600 font-medium">{phase.date}</span>
                      </div>
                      <p className="text-gray-700">{phase.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Strategy */}
        <motion.div 
          className="bg-white rounded-lg shadow-lg p-8 mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <Scale className="w-6 h-6 text-blue-600 mr-3" />
            변호 전략
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6 text-lg bg-blue-50 p-6 rounded-lg">
            {caseData.strategy.approach}
          </p>
          
          <h3 className="text-xl font-bold text-gray-900 mb-4">핵심 전략 포인트</h3>
          <div className="space-y-3">
            {caseData.strategy.keyPoints.map((point, index) => (
              <div key={index} className="flex items-start">
                <ChevronRight className="w-5 h-5 text-blue-600 mt-1 mr-3" />
                <span className="text-gray-700 font-medium">{point}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Outcome */}
        <motion.div 
          className="bg-white rounded-lg shadow-lg p-8 mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <Award className="w-6 h-6 text-blue-600 mr-3" />
            최종 결과 및 성과
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">주요 성과</h3>
              <div className="space-y-3">
                {caseData.outcome.results.map((result, index) => (
                  <div key={index} className="flex items-start p-3 bg-green-50 rounded-lg">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-1 mr-3" />
                    <span className="text-gray-700">{result}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">의미 및 영향</h3>
              <p className="text-gray-700 leading-relaxed bg-gray-50 p-6 rounded-lg">
                {caseData.outcome.impact}
              </p>
            </div>
          </div>
        </motion.div>

        {/* Related Cases */}
        <motion.div 
          className="bg-blue-50 rounded-lg p-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">관련 주요 사례</h3>
          <div className="grid md:grid-cols-3 gap-4">
            {relatedCases.map((case_, index) => (
              <Link
                key={index}
                href={case_.url}
                className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow group"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
                    {case_.category}
                  </span>
                </div>
                <h4 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors mb-2">
                  {case_.title}
                </h4>
                <div className="text-blue-600 font-medium group-hover:translate-x-2 transition-transform inline-flex items-center">
                  자세히 보기 <ChevronRight className="w-4 h-4 ml-1" />
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

export default Case1Page;