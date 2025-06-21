import React, { useState } from 'react';
import BotpressChat from '../components/BotpressChat';
import { MessageCircle, Zap, Shield, Clock } from 'lucide-react';

export default function Home() {
  const [chatOpen, setChatOpen] = useState(false);

  return (
    <div className="min-h-[calc(100vh-8rem)] flex flex-col bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-700 dark:to-blue-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Assistente de Orientação Acadêmica
            </h1>
            <p className="text-xl text-blue-100 mb-6 max-w-3xl mx-auto">
              Tire suas dúvidas sobre procedimentos acadêmicos, normas, regulamentos e prazos de forma rápida e inteligente
            </p>

            {/* Features Icons */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="flex items-center justify-center space-x-3 bg-blue-700/30 rounded-lg p-4">
                <MessageCircle className="w-6 h-6 text-blue-200" />
                <span className="text-blue-100">Respostas Instantâneas</span>
              </div>
              <div className="flex items-center justify-center space-x-3 bg-blue-700/30 rounded-lg p-4">
                <Zap className="w-6 h-6 text-blue-200" />
                <span className="text-blue-100">Informações Atualizadas</span>
              </div>
              <div className="flex items-center justify-center space-x-3 bg-blue-700/30 rounded-lg p-4">
                <Clock className="w-6 h-6 text-blue-200" />
                <span className="text-blue-100">Disponível 24/7</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Welcome & Tutorial */}
      <div className="mx-4 md:mx-8 my-16 p-12 bg-white dark:bg-gray-800 rounded-2xl shadow-lg">
        <div className="max-w-3xl mx-auto text-left space-y-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center">
            Bem-vindo(a)!
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 text-center">
            Este é o nosso assistente virtual para orientar sobre solicitações, documentos e processos acadêmicos.
          </p>

          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
            Como utilizar o ChatBot:
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-start space-x-4 bg-white dark:bg-gray-700 p-6 rounded-xl shadow hover:shadow-lg transition">
              <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center bg-blue-100 dark:bg-blue-900 rounded-full">
                <MessageCircle className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <p className="text-gray-800 dark:text-gray-200">
                Clique no ícone no canto inferior direito para abrir o chat.
              </p>
            </div>

            <div className="flex items-start space-x-4 bg-white dark:bg-gray-700 p-6 rounded-xl shadow hover:shadow-lg transition">
              <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center bg-green-100 dark:bg-green-900 rounded-full">
                <Zap className="w-6 h-6 text-green-600 dark:text-green-400" />
              </div>
              <p className="text-gray-800 dark:text-gray-200">
                Envie mensagens objetivas, por exemplo: "me ensine a solicitar um histórico".
              </p>
            </div>

            <div className="flex items-start space-x-4 bg-white dark:bg-gray-700 p-6 rounded-xl shadow hover:shadow-lg transition">
              <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center bg-purple-100 dark:bg-purple-900 rounded-full">
                <Shield className="w-6 h-6 text-purple-600 dark:text-purple-400" />
              </div>
              <p className="text-gray-800 dark:text-gray-200">
                O bot atende apenas dúvidas acadêmicas.
              </p>
            </div>
          </div>

          <p className="text-gray-500 dark:text-gray-400 text-center">
            Para fazer uma solicitação, utilize o <a href="/contato" className="text-blue-600 underline">formulário de contato</a>.
          </p>
        </div>
      </div>

      {/* Quick Help */}
      <div className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
              <Shield className="w-4 h-4 inline mr-1" />
              Dúvidas frequentes: matrícula, trancamento, transferência, histórico escolar
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-500">
              Acesse nosso <a href="/regulamentos" className="text-blue-600 underline">acervo de regulamentos</a> ou entre em contato direto.
            </p>
          </div>
        </div>
      </div>

      {/* Floating Chat Button & Chat Component */}
      <div>
        <button
          onClick={() => setChatOpen(true)}
          aria-label="Abrir chat"
          className="fixed bottom-6 right-6 bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-lg focus:outline-none">
          <MessageCircle className="w-6 h-6" />
        </button>
        {chatOpen && <BotpressChat onClose={() => setChatOpen(false)} />}
      </div>
    </div>
  );
}
