import type { Cliente } from '../types';

interface RelatorioSimplificadoProps {
  clientes: Cliente[];
}

export const RelatorioSimplificado = ({
  clientes,
}: RelatorioSimplificadoProps) => {
  const totalClientes = clientes.length;

  const clientesPorMes = clientes.reduce(
    (acc, cliente) => {
      const data = new Date(cliente.dataCadastro || new Date());
      const mes = data.toLocaleDateString('pt-BR', {
        month: 'long',
        year: 'numeric',
      });
      acc[mes] = (acc[mes] || 0) + 1;
      return acc;
    },
    {} as Record<string, number>
  );

  const mesAtual = new Date().toLocaleDateString('pt-BR', {
    month: 'long',
    year: 'numeric',
  });
  const clientesMesAtual = clientesPorMes[mesAtual] || 0;

  const distribuicaoIdade = clientes.reduce(
    (acc, cliente) => {
      const dataAtual = new Date();
      const dataNasc = new Date(cliente.dataNascimento);
      let idade = dataAtual.getFullYear() - dataNasc.getFullYear();
      const mes = dataAtual.getMonth() - dataNasc.getMonth();
      if (mes < 0 || (mes === 0 && dataAtual.getDate() < dataNasc.getDate())) {
        idade--;
      }

      if (idade < 18) acc['Menores'] = (acc['Menores'] || 0) + 1;
      else if (idade < 30) acc['18-29 anos'] = (acc['18-29 anos'] || 0) + 1;
      else if (idade < 50) acc['30-49 anos'] = (acc['30-49 anos'] || 0) + 1;
      else acc['50+ anos'] = (acc['50+ anos'] || 0) + 1;
      return acc;
    },
    {} as Record<string, number>
  );

  return (
    <div className="w-full max-w-4xl mx-auto p-4">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
        Relatório Simplificado
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {/* Card Total */}
        <div className="p-6 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900 dark:to-blue-800 rounded-lg border border-blue-200 dark:border-blue-700">
          <p className="text-gray-600 dark:text-gray-300 text-sm font-medium mb-2">
            Total de Clientes
          </p>
          <p className="text-4xl font-bold text-blue-600 dark:text-blue-300">
            {totalClientes}
          </p>
        </div>

        {/* Card Mês Atual */}
        <div className="p-6 bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900 dark:to-green-800 rounded-lg border border-green-200 dark:border-green-700">
          <p className="text-gray-600 dark:text-gray-300 text-sm font-medium mb-2">
            Cadastros em {mesAtual}
          </p>
          <p className="text-4xl font-bold text-green-600 dark:text-green-300">
            {clientesMesAtual}
          </p>
        </div>
      </div>

      {/* Distribuição por Faixa Etária */}
      <div className="p-6 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 mb-8">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          Distribuição por Faixa Etária
        </h3>

        {Object.keys(distribuicaoIdade).length > 0 ? (
          <div className="space-y-4">
            {Object.entries(distribuicaoIdade).map(([faixa, qtd]) => (
              <div key={faixa}>
                <div className="flex justify-between items-center mb-1">
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    {faixa}
                  </span>
                  <span className="text-sm font-semibold text-gray-900 dark:text-white">
                    {qtd} {qtd === 1 ? 'cliente' : 'clientes'} (
                    {totalClientes > 0
                      ? ((qtd / totalClientes) * 100).toFixed(1)
                      : 0}
                    %)
                  </span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden">
                  <div
                    className="bg-gradient-to-r from-blue-500 to-blue-600 h-full"
                    style={{
                      width: `${
                        totalClientes > 0 ? (qtd / totalClientes) * 100 : 0
                      }%`,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-500 dark:text-gray-400">
            Nenhum dado disponível
          </p>
        )}
      </div>

      {/* Cadastros por Mês */}
      <div className="p-6 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          Cadastros por Mês
        </h3>

        {Object.keys(clientesPorMes).length > 0 ? (
          <div className="space-y-3">
            {Object.entries(clientesPorMes)
              .sort(
                ([mesA], [mesB]) =>
                  new Date(mesB).getTime() - new Date(mesA).getTime()
              )
              .map(([mes, qtd]) => (
                <div
                  key={mes}
                  className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded"
                >
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    {mes}
                  </span>
                  <span className="inline-flex items-center justify-center w-8 h-8 bg-blue-500 text-white text-sm font-bold rounded-full">
                    {qtd}
                  </span>
                </div>
              ))}
          </div>
        ) : (
          <p className="text-gray-500 dark:text-gray-400">
            Nenhum dado disponível
          </p>
        )}
      </div>
    </div>
  );
};
