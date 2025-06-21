import React from 'react';
import { ExternalLink, FileText, BookOpen, GraduationCap, Calendar, Users, Phone } from 'lucide-react';

const Regulations: React.FC = () => {
  const documents = [
    {
      title: 'Normas Graduação',
      description: 'Normas para regulamentação do ensino de graduação',
      url: 'https://unimontes.br/wp-content/uploads/2022/03/Normas-Para-Regulamentao-do-Ensino_09_03_2022.pdf',
      icon: GraduationCap,
      color: 'blue'
    },
    {
      title: 'Normas Pós-Graduação',
      description: 'Resolução CEPEX 135 - Normas de pós-graduação',
      url: 'https://unimontes.br/wp-content/uploads/2022/12/resolucao_cepex135.pdf',
      icon: BookOpen,
      color: 'green'
    },
    {
      title: 'Calendário Acadêmico 2025',
      description: 'Calendário oficial do ano letivo 2025',
      url: 'https://unimontes.br/wp-content/uploads/2024/12/RESOLUCAO.pdf',
      icon: Calendar,
      color: 'purple'
    },
    {
      title: 'Regimento Geral da Unimontes',
      description: 'Regimento geral da universidade',
      url: 'https://unimontes.br/wp-content/uploads/2018/10/regimentogeral.pdf',
      icon: Users,
      color: 'orange'
    },
    {
      title: 'Catálogo Telefônico',
      description: 'Consulte o catálogo de telefones internos da Unimontes',
      url: 'https://unimontes.br/catalogo-telefonico/',
      icon: Phone,
      color: 'cyan'
    },
    {
      title: 'Organograma da Unimontes',
      description: 'Visualize a apresentação do organograma institucional',
      url: 'https://unimontes.br/apresentacao/organograma/',
      icon: Users,
      color: 'red'
    }
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'blue':
        return {
          bg: 'bg-blue-50 dark:bg-blue-900/20',
          border: 'border-blue-200 dark:border-blue-700',
          icon: 'text-blue-600 dark:text-blue-400',
          button: 'bg-blue-600 hover:bg-blue-700 focus:ring-blue-500'
        };
      case 'green':
        return {
          bg: 'bg-green-50 dark:bg-green-900/20',
          border: 'border-green-200 dark:border-green-700',
          icon: 'text-green-600 dark:text-green-400',
          button: 'bg-green-600 hover:bg-green-700 focus:ring-green-500'
        };
      case 'purple':
        return {
          bg: 'bg-purple-50 dark:bg-purple-900/20',
          border: 'border-purple-200 dark:border-purple-700',
          icon: 'text-purple-600 dark:text-purple-400',
          button: 'bg-purple-600 hover:bg-purple-700 focus:ring-purple-500'
        };
      case 'orange':
        return {
          bg: 'bg-orange-50 dark:bg-orange-900/20',
          border: 'border-orange-200 dark:border-orange-700',
          icon: 'text-orange-600 dark:text-orange-400',
          button: 'bg-orange-600 hover:bg-orange-700 focus:ring-orange-500'
        };
      case 'cyan':
        return {
          bg: 'bg-cyan-50 dark:bg-cyan-900/20',
          border: 'border-cyan-200 dark:border-cyan-700',
          icon: 'text-cyan-600 dark:text-cyan-400',
          button: 'bg-cyan-600 hover:bg-cyan-700 focus:ring-cyan-500'
        };
      case 'red':
        return {
          bg: 'bg-red-50 dark:bg-red-900/20',
          border: 'border-red-200 dark:border-red-700',
          icon: 'text-red-600 dark:text-red-400',
          button: 'bg-red-600 hover:bg-red-700 focus:ring-red-500'
        };
      default:
        return {
          bg: 'bg-gray-50 dark:bg-gray-900/20',
          border: 'border-gray-200 dark:border-gray-700',
          icon: 'text-gray-600 dark:text-gray-400',
          button: 'bg-gray-600 hover:bg-gray-700 focus:ring-gray-500'
        };
    }
  };

  return (
    <div className="py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Regulamentos e Documentos
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Acesse os principais documentos oficiais, normas e regulamentos da Unimontes
          </p>
        </div>

        {/* Documents Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {documents.map((doc, index) => {
            const colors = getColorClasses(doc.color);
            const IconComponent = doc.icon;

            return (
              <div
                key={index}
                className={`${colors.bg} ${colors.border} border rounded-xl p-6 hover:shadow-lg transition-all duration-300 group`}
              >
                <div className="flex items-start space-x-4">
                  <div className={`flex items-center justify-center w-12 h-12 ${colors.bg} rounded-lg border ${colors.border}`}>
                    <IconComponent className={`w-6 h-6 ${colors.icon}`} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      {doc.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                      {doc.description}
                    </p>
                    <a
                      href={doc.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center px-4 py-2 ${colors.button} text-white text-sm font-medium rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 transition-colors`}
                    >
                      Acessar Documento
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Help Section */}
        <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-8 text-center">
          <div className="flex items-center justify-center w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full mx-auto mb-4">
            <FileText className="w-8 h-8 text-blue-600 dark:text-blue-400" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Precisa de ajuda para encontrar algo?
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
            Use nosso assistente inteligente para obter orientações específicas sobre 
            procedimentos, normas e documentos acadêmicos
          </p>
          <a
            href="/"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
          >
            Conversar com Assistente
            <ExternalLink className="w-4 h-4 ml-2" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Regulations;
