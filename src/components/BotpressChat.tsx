import React from 'react';
import BotpressChat from '../components/BotpressChat';
import { MessageCircle, Zap, Shield, Clock } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="min-h-[calc(100vh-8rem)] flex flex-col">
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
            
            {/* Features */}
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

      {/* Chat Section */}
      <div className="flex-1 bg-gray-50 dark:bg-gray-900">
        <BotpressChat />
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
              Digite sua pergunta no chat acima para obter orientação personalizada
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;