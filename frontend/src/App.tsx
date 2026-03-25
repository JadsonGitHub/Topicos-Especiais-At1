import { useState } from 'react';
import { useClientes, useTheme } from './hooks';
import {
  FormularioCadastro,
  ListaCadastros,
  RelatorioSimplificado,
  RelatorioCompleto,
  TemaToggle,
} from './components';
import './App.css';

type Secao = 'cadastros' | 'simplificado' | 'completo';

function App() {
  const {
    clientes,
    loading,
    error,
    fetchClientes,
    adicionarCliente,
    deletarCliente,
  } = useClientes();
  const { isDark, toggleTheme } = useTheme();
  const [secaoAtiva, setSecaoAtiva] = useState<Secao>('cadastros');
  const [mensagem, setMensagem] = useState('');

  const handleAdicionarCliente = async (cliente: Omit<any, 'id'>) => {
    try {
      await adicionarCliente({
        ...cliente,
        dataCadastro: new Date().toISOString(),
      });
      setMensagem('Cliente cadastrado com sucesso!');
      setTimeout(() => setMensagem(''), 3000);
    } catch (err) {
      console.error('Erro:', err);
    }
  };

  return (
    <div className={isDark ? 'dark' : ''}>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        {/* Header */}
        <header className="sticky top-0 z-50 bg-white dark:bg-gray-800 shadow border-b border-gray-200 dark:border-gray-700">
          <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
                📋 Cadastro de Clientes
              </h1>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Gerenciador simplificado de clientes e relatórios
              </p>
            </div>
            <TemaToggle isDark={isDark} onToggle={toggleTheme} />
          </div>
        </header>

        {/* Mensagem de Sucesso */}
        {mensagem && (
          <div className="bg-green-100 dark:bg-green-900 border border-green-400 dark:border-green-700 text-green-700 dark:text-green-100 px-4 py-3 rounded sticky top-16 z-40">
            {mensagem}
          </div>
        )}

        {/* Erro Global */}
        {error && (
          <div className="bg-red-100 dark:bg-red-900 border border-red-400 dark:border-red-700 text-red-700 dark:text-red-100 px-4 py-3">
            Erro: {error}
          </div>
        )}

        {/* Navegação */}
        <div className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex space-x-1 overflow-x-auto">
              <button
                onClick={() => setSecaoAtiva('cadastros')}
                className={`px-6 py-4 font-medium text-sm whitespace-nowrap border-b-2 transition-colors ${
                  secaoAtiva === 'cadastros'
                    ? 'border-blue-500 text-blue-600 dark:text-blue-400'
                    : 'border-transparent text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                }`}
              >
                📝 Cadastros
              </button>
              <button
                onClick={() => setSecaoAtiva('simplificado')}
                className={`px-6 py-4 font-medium text-sm whitespace-nowrap border-b-2 transition-colors ${
                  secaoAtiva === 'simplificado'
                    ? 'border-blue-500 text-blue-600 dark:text-blue-400'
                    : 'border-transparent text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                }`}
              >
                📊 Relatório Simplificado
              </button>
              <button
                onClick={() => setSecaoAtiva('completo')}
                className={`px-6 py-4 font-medium text-sm whitespace-nowrap border-b-2 transition-colors ${
                  secaoAtiva === 'completo'
                    ? 'border-blue-500 text-blue-600 dark:text-blue-400'
                    : 'border-transparent text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                }`}
              >
                📈 Relatório Completo
              </button>
            </div>
          </div>
        </div>

        {/* Conteúdo Principal */}
        <main className="max-w-6xl mx-auto py-8 px-4">
          {secaoAtiva === 'cadastros' && (
            <div className="space-y-8">
              <FormularioCadastro
                onSubmit={handleAdicionarCliente}
                loading={loading}
              />
              <ListaCadastros
                clientes={clientes}
                onDelete={deletarCliente}
                loading={loading}
              />
            </div>
          )}

          {secaoAtiva === 'simplificado' && (
            <RelatorioSimplificado clientes={clientes} />
          )}

          {secaoAtiva === 'completo' && (
            <RelatorioCompleto clientes={clientes} />
          )}
        </main>

        {/* Footer */}
        <footer className="bg-gray-100 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 py-6 mt-12">
          <div className="max-w-6xl mx-auto px-4 text-center text-gray-600 dark:text-gray-400 text-sm">
            <p>
              © 2024 Cadastro de Clientes. Desenvolvido com React + TypeScript.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
