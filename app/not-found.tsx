"use client";

import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Home, ArrowLeft, Scale, Search, AlertTriangle } from 'lucide-react';
import Link from 'next/link';

const NotFoundPage = () => {
  // 페이지 진입 시 스크롤을 맨 위로
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const quickLinks = [
    { name: '홈', url: '/', icon: Home, description: '메인 페이지로 돌아가기' },
    { name: '구성원', url: '/#team', icon: Scale, description: '변호사 소개 보기' },
    { name: '주요사례', url: '/#cases', icon: Search, description: '성공 사례 확인하기' }
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <motion.header 
        className="bg-white shadow-sm"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-2xl font-bold text-blue-600">
              법무법인 정의
            </Link>
            <Link 
              href="/" 
              className="flex items-center text-gray-600 hover:text-blue-600 transition-colors"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              홈으로 돌아가기
            </Link>
          </div>
        </div>
      </motion.header>

      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center px-4 py-16">
        <div className="max-w-2xl mx-auto text-center">
          {/* 404 Animation */}
          <motion.div
            className="mb-12"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div
              className="relative inline-block"
              animate={{ 
                rotate: [0, -5, 5, -5, 0],
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                repeatDelay: 3
              }}
            >
              <div className="text-8xl lg:text-9xl font-bold text-blue-600 mb-4">
                404
              </div>
              <motion.div
                className="absolute -top-4 -right-4"
                animate={{ 
                  rotate: 360,
                  scale: [1, 1.2, 1]
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <AlertTriangle className="w-12 h-12 text-yellow-500" />
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Error Message */}
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              페이지를 찾을 수 없습니다
            </h1>
            <p className="text-lg text-gray-600 mb-2">
              요청하신 페이지가 존재하지 않거나 이동되었을 수 있습니다.
            </p>
            <p className="text-gray-500">
              URL을 다시 확인해주시거나 아래 링크를 이용해 주세요.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            className="grid md:grid-cols-3 gap-6 mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            {quickLinks.map((link, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link
                  href={link.url}
                  className="block bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow group"
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-blue-200 transition-colors">
                      <link.icon className="w-8 h-8 text-blue-600" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                      {link.name}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {link.description}
                    </p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>

          {/* Back Home Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
          >
            <Link href="/">
              <motion.button
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg shadow-lg transition-colors inline-flex items-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Home className="w-5 h-5 mr-2" />
                홈페이지로 이동
              </motion.button>
            </Link>
          </motion.div>

          {/* Decorative Elements */}
          <motion.div
            className="absolute top-20 left-10 opacity-10"
            animate={{ 
              rotate: 360,
              scale: [1, 1.2, 1]
            }}
            transition={{ 
              duration: 10,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            <Scale className="w-24 h-24 text-blue-600" />
          </motion.div>

          <motion.div
            className="absolute bottom-20 right-10 opacity-10"
            animate={{ 
              rotate: -360,
              scale: [1, 0.8, 1]
            }}
            transition={{ 
              duration: 15,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            <Scale className="w-32 h-32 text-blue-600" />
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="text-xl font-bold text-blue-400 mb-2">법무법인 정의</div>
          <p className="text-gray-400 text-sm">
            정의로운 법률 서비스로 고객의 권익을 보호합니다
          </p>
          <p className="text-gray-500 text-xs mt-2">
            © 2024 법무법인 정의. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default NotFoundPage;