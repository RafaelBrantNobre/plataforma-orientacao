import React from 'react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Informações da Secretaria */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Secretaria Acadêmica</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-blue-400" />
                <span className="text-sm">
                  Campus Universitário Professor Darcy Ribeiro<br/>
                  Avenida Rui Braga, S/Nº – Vila Mauricéia<br/>
                  Montes Claros – MG, CEP 39401-089
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-blue-400" />
                <span className="text-sm">(38) 3229-8000</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-blue-400" />
                <span className="text-sm">secretaria.geral@unimontes.br</span>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="w-4 h-4 text-blue-400" />
                <span className="text-sm">Seg–Sex: 7h às 22h</span>
              </div>
            </div>
          </div>

          {/* Links Úteis */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Links Úteis</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://www.webgiz.unimontes.br/index.php"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm hover:text-blue-400 transition-colors"
                >
                  Portal do Aluno (WebGiz)
                </a>
              </li>
              <li>
                <a
                  href="https://pergamum.unimontes.br/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm hover:text-blue-400 transition-colors"
                >
                  Biblioteca Digital
                </a>
              </li>
              <li>
                <a
                  href="https://unimontes.br/falecom/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm hover:text-blue-400 transition-colors"
                >
                  Ouvidoria
                </a>
              </li>
            </ul>
          </div>

          {/* Sobre a Plataforma */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Sobre a Plataforma</h3>
            <p className="text-sm text-gray-400 mb-4">
              Sistema inteligente de orientação acadêmica para auxiliar estudantes com procedimentos, normas e regulamentos universitários.
            </p>
            <p className="text-xs text-gray-500">
              Versão 1.0 – Junho 2025
            </p>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <p className="text-sm text-gray-400">
              © 2025 Unimontes. Todos os direitos reservados.
            </p>
            <div className="flex space-x-4 mt-4 sm:mt-0">
              <a
                href="https://unimontes.br/unidades/secretaria-geral/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm hover:text-blue-400 transition-colors"
              >
                Site da Secretaria Geral
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
