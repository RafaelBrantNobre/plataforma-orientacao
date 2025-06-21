import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, MessageCircle, Calendar } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    matricula: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Destinatário fixo
    const to = '(procure o email correto no site da secretaria para o seu tipo de solicitação)';

    // Prepara assunto e corpo do Gmail
    const su = encodeURIComponent(formData.subject);
    const body = encodeURIComponent(
      `Nome: ${formData.name}\n` +
      `Matrícula: ${formData.matricula}\n` +
      `E-mail de retorno: ${formData.email}\n\n` +
      formData.message
    );

    // URL de compose do Gmail
    const gmailUrl =
      `https://mail.google.com/mail/?view=cm&fs=1` +
      `&to=${to}` +
      `&su=${su}` +
      `&body=${body}`;

    // Abre uma nova aba com o rascunho
    window.open(gmailUrl, '_blank');
  };

  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Entre em Contato
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Estamos aqui para ajudar. Entre em contato conosco através dos canais abaixo 
            ou use nosso assistente inteligente para orientações imediatas
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Informações de Contato
              </h2>
              
              <div className="space-y-6">
                {/* Address */}
                <div className="flex items-start space-x-4">
                  <div className="flex items-center justify-center w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg">
                    <MapPin className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      Endereço
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Campus Universitário Professor Darcy Ribeiro<br />
                      Avenida Rui Braga<br />
                      S/Nº<br />
                      Vila Mauricéia<br />
                      Montes Claros<br />
                      CEP 39401-089
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start space-x-4">
                  <div className="flex items-center justify-center w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg">
                    <Phone className="w-6 h-6 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      Telefones
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Secretaria Geral da Unimontes: (38) 3229-8000<br />
                      Recepção Secretaria Geral: (38) 3229-8040<br />
                      Assessoria da Secretaria-Geral: (38) 3229-8066<br />
                      Registro de Diploma: (38) 3229-8042<br />
                      Apoio Acadêmico – Secretaria Geral: (38) 3229-8044
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start space-x-4">
                  <div className="flex items-center justify-center w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg">
                    <Mail className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      E-mails
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Recepção Secretaria Geral: secretaria.recepcao@unimontes.br<br />
                      Assessoria da Secretaria-Geral: secretaria.geral@unimontes.br<br />
                      Registro de Diploma: registro.diploma@unimontes.br
                    </p>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start space-x-4">
                  <div className="flex items-center justify-center w-12 h-12 bg-orange-100 dark:bg-orange-900 rounded-lg">
                    <Clock className="w-6 h-6 text-orange-600 dark:text-orange-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      Horário de Atendimento da Secretaria Geral
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Segunda à Sexta: 7h às 22h
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Ações Rápidas
              </h3>
              <div className="space-y-3">
                <a
                  href="/"
                  className="flex items-center space-x-3 p-3 bg-white dark:bg-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors group"
                >
                  <MessageCircle className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  <span className="text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400">
                    Falar com Assistente IA
                  </span>
                </a>
                
<a
  href="https://unimontes.br/unidades/secretaria-geral/"
  target="_blank"
  rel="noopener noreferrer"
  className="flex items-center space-x-3 p-3 bg-white dark:bg-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors group"
>
  <Calendar className="w-5 h-5 text-green-600 dark:text-green-400" />
  <span className="text-gray-900 dark:text-white group-hover:text-green-600 dark:group-hover:text-green-400">
    Consultar Emails e Horários da Secretaria
  </span>
</a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Envie uma Mensagem
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Nome Completo
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="block w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  placeholder="Seu nome completo"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  E-mail
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="block w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  placeholder="seu.email@exemplo.com"
                />
              </div>

              <div>
                <label htmlFor="matricula" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Número de Matrícula
                </label>
                <input
                  type="text"
                  id="matricula"
                  name="matricula"
                  value={formData.matricula}
                  onChange={handleChange}
                  required
                  className="block w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  placeholder="Seu número de matrícula"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Assunto
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="block w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                >
      <option value="">Selecione um assunto</option>
                  <option value="Abono de Faltas">Abono de Faltas</option>
                  <option value="Aproveitamento de Carga Horária (PIBID/RP) para Estágio">Aproveitamento de Carga Horária (PIBID/RP) para Estágio</option>
                  <option value="Alteração de Dados Cadastrais">Alteração de Dados Cadastrais</option>
                  <option value="Cancelamento de Disciplina">Cancelamento de Disciplina</option>
                  <option value="Colação de Grau/Colação Extemporânea (depois do prazo)">Colação de Grau/Colação Extemporânea (depois do prazo)</option>
                  <option value="Declaração no formato Digital">Declaração no formato Digital</option>
                  <option value="Declaração Impressa">Declaração Impressa</option>
                  <option value="Desistência de Curso">Desistência de Curso</option>
                  <option value="Diplomas Graduação - 1ª VIA">Diplomas Graduação – 1ª VIA</option>
                  <option value="Diplomas Graduação - 2ª VIA">Diplomas Graduação – 2ª VIA</option>
                  <option value="Diplomas/Certificados Pós-Graduação - 1ª VIA">Diplomas/Certificados Pós-Graduação – 1ª VIA</option>
                  <option value="Diplomas/Certificados Pós-Graduação - 2ª VIA">Diplomas/Certificados Pós-Graduação – 2ª VIA</option>
                  <option value="Dispensa de Disciplinas/Aproveitamento de Estudos">Dispensa de Disciplinas/Aproveitamento de Estudos</option>
                  <option value="Documentos Pendentes">Documentos Pendentes</option>
                  <option value="Ementas">Ementas</option>
                  <option value="Equivalência Curricular">Equivalência Curricular</option>
                  <option value="Históricos no Formato Digital">Históricos no Formato Digital</option>
                  <option value="Históricos Impressos">Históricos Impressos</option>
                  <option value="Matrícula em disciplina de Outro Curso (Multicurso)">Matrícula em disciplina de Outro Curso (Multicurso)</option>
                  <option value="Matrícula Fora do Prazo">Matrícula Fora do Prazo</option>
                  <option value="Matriz Curricular">Matriz Curricular</option>
                  <option value="Nome Social">Nome Social</option>
                  <option value="Obtenção de novo título">Obtenção de novo título</option>
                  <option value="Plano de Ensino">Plano de Ensino</option>
                  <option value="Prova de 2ª Oportunidade">Prova de 2ª Oportunidade</option>
                  <option value="Renovação de Matrícula">Renovação de Matrícula</option>
                  <option value="Retorno ao Curso">Retorno ao Curso</option>
                  <option value="Revisão de Nota/Prova">Revisão de Nota/Prova</option>
                  <option value="Tratamento Excepcional (Atestado Médico a partir de 4 dias)">Tratamento Excepcional (Atestado Médico a partir de 4 dias)</option>
                  <option value="Trancamento de Curso">Trancamento de Curso</option>
                  <option value="Transferência EX-OFFÍCIO">Transferência EX-OFFÍCIO</option>
                  <option value="Transferência Externa">Transferência Externa</option>
                  <option value="Transferência Interna">Transferência Interna</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="block w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white resize-none"
                  placeholder="Descreva sua dúvida ou solicitação..."
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
              >
                <Send className="w-5 h-5 mr-2" />
                Enviar Mensagem
              </button>
            </form>

            <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <p className="text-sm text-blue-800 dark:text-blue-200">
                <strong>Dica:</strong> Para respostas mais rápidas sobre procedimentos acadêmicos, 
                experimente nosso assistente inteligente na página inicial.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
