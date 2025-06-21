import React from 'react';
import { Bot, Target, Users, Lightbulb, CheckCircle, ArrowRight } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Sobre a Plataforma
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Uma solução inteligente e moderna para orientação acadêmica, 
            desenvolvida para facilitar o acesso às informações universitárias
          </p>
        </div>

        {/* Mission Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <div className="flex items-center mb-6">
              <div className="flex items-center justify-center w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg mr-4">
                <Target className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Nossa Missão</h2>
            </div>
            <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
              Democratizar o acesso às informações acadêmicas através de uma plataforma 
              inteligente que oferece orientação personalizada sobre procedimentos, normas 
              e regulamentos universitários, disponível 24 horas por dia.
            </p>
          </div>
          
          <div>
            <div className="flex items-center mb-6">
              <div className="flex items-center justify-center w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg mr-4">
                <Lightbulb className="w-6 h-6 text-green-600 dark:text-green-400" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Nossa Visão</h2>
            </div>
            <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
              Ser a principal referência em orientação acadêmica digital, proporcionando 
              uma experiência eficiente e humanizada que elimine barreiras no acesso à 
              informação e melhore a jornada acadêmica dos estudantes.
            </p>
          </div>
        </div>

        {/* Features Grid */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
            Como Funciona
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center justify-center w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full mx-auto mb-6">
                <Bot className="w-8 h-8 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Assistente Inteligente
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                IA treinada com todo o conhecimento acadêmico da universidade para 
                fornecer respostas precisas e contextualizadas.
              </p>
            </div>

            <div className="text-center p-8 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center justify-center w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full mx-auto mb-6">
                <CheckCircle className="w-8 h-8 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Informações Atualizadas
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Base de conhecimento constantemente atualizada com as últimas 
                normas, procedimentos e regulamentos institucionais.
              </p>
            </div>

            <div className="text-center p-8 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center justify-center w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-full mx-auto mb-6">
                <Users className="w-8 h-8 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Suporte Personalizado
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Atendimento adaptado ao perfil do usuário, oferecendo orientações 
                específicas para cada situação acadêmica.
              </p>
            </div>
          </div>
        </div>

        {/* Benefits */}
        <div className="bg-gray-50 dark:bg-gray-800/50 rounded-2xl p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
            Benefícios da Plataforma
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <ArrowRight className="w-6 h-6 text-blue-600 dark:text-blue-400 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                    Redução de Filas
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    Diminui significativamente a necessidade de atendimento presencial 
                    na secretaria acadêmica.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <ArrowRight className="w-6 h-6 text-blue-600 dark:text-blue-400 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                    Agilidade nas Respostas
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    Obtenha informações instantâneas sem esperas ou horários restritos 
                    de atendimento.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <ArrowRight className="w-6 h-6 text-blue-600 dark:text-blue-400 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                    Disponibilidade Total
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    Acesso 24/7 às informações acadêmicas, incluindo finais de semana 
                    e feriados.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <ArrowRight className="w-6 h-6 text-blue-600 dark:text-blue-400 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                    Padronização das Informações
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    Garante que todos os usuários recebam informações consistentes 
                    e atualizadas.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <ArrowRight className="w-6 h-6 text-blue-600 dark:text-blue-400 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                    Histórico de Conversas
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    Mantenha um registro das orientações recebidas para consultas futuras.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <ArrowRight className="w-6 h-6 text-blue-600 dark:text-blue-400 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                    Interface Intuitiva
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    Design moderno e familiar, inspirado nas melhores plataformas 
                    de IA do mercado.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-blue-600 dark:bg-blue-700 rounded-2xl p-12 text-white">
          <h2 className="text-3xl font-bold mb-4">
            Pronto para começar?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Experimente agora nosso assistente inteligente e descubra como é fácil 
            obter orientação acadêmica personalizada.
          </p>
          <a
            href="/"
            className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 transition-colors"
          >
            Iniciar Conversa
            <ArrowRight className="w-5 h-5 ml-2" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;