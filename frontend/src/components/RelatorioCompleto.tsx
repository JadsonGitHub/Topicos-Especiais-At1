import type { Cliente } from '../types';

interface RelatorioCompletoProps {
  clientes: Cliente[];
}

export const RelatorioCompleto = ({ clientes }: RelatorioCompletoProps) => {
  const calcularIdade = (dataNascimento: string): number => {
    const today = new Date();
    const birthDate = new Date(dataNascimento);
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();

    if (
      monthDiff < 0 ||
      (monthDiff === 0 && today.getDate() < birthDate.getDate())
    ) {
      age--;
    }

    return age;
  };

  const clientesComIdade = clientes.map((cliente) => ({
    ...cliente,
    idade: calcularIdade(cliente.dataNascimento),
  }));

  const totalClientes = clientes.length;
  const idadeMedia =
    totalClientes > 0
      ? (
          clientesComIdade.reduce((sum, c) => sum + c.idade, 0) / totalClientes
        ).toFixed(1)
      : 0;
  const clienteMaisJovem =
    totalClientes > 0
      ? clientesComIdade.reduce((min, c) => (c.idade < min.idade ? c : min))
      : null;
  const clienteMaisVelho =
    totalClientes > 0
      ? clientesComIdade.reduce((max, c) => (c.idade > max.idade ? c : max))
      : null;

  const clientesPorEstado: Record<string, number> = {};
  const clientesPorRegiao: Record<string, number> = {
    'Sul (RS, SC, PR)': 0,
    'Sudeste (SP, RJ, MG, ES)': 0,
    'Centro-Oeste (MT, MS, GO, DF)': 0,
    'Nordeste (BA, SE, PE, AL, PB, RN, CE, PI, MA)': 0,
    'Norte (AM, RR, AP, PA, TO, AC, RO)': 0,
  };

  clientes.forEach((cliente) => {
    // Extraindo estado do CPF (2 últimos dígitos do meio)
    clientesPorEstado[cliente.cpf] = (clientesPorEstado[cliente.cpf] || 0) + 1;
  });

  return (
    <div className="w-full max-w-6xl mx-auto p-4">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
        Relatório Completo
      </h2>

      {/* Resumo Estatístico */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <div className="p-4 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900 dark:to-blue-800 rounded-lg border border-blue-200 dark:border-blue-700">
          <p className="text-gray-600 dark:text-gray-300 text-xs font-medium mb-1">
            Total
          </p>
          <p className="text-3xl font-bold text-blue-600 dark:text-blue-300">
            {totalClientes}
          </p>
        </div>

        <div className="p-4 bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900 dark:to-purple-800 rounded-lg border border-purple-200 dark:border-purple-700">
          <p className="text-gray-600 dark:text-gray-300 text-xs font-medium mb-1">
            Idade Média
          </p>
          <p className="text-3xl font-bold text-purple-600 dark:text-purple-300">
            {idadeMedia}
          </p>
        </div>

        <div className="p-4 bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900 dark:to-green-800 rounded-lg border border-green-200 dark:border-green-700">
          <p className="text-gray-600 dark:text-gray-300 text-xs font-medium mb-1">
            Mais Jovem
          </p>
          <p className="text-lg font-bold text-green-600 dark:text-green-300">
            {clienteMaisJovem ? `${clienteMaisJovem.idade} anos` : 'N/A'}
          </p>
        </div>

        <div className="p-4 bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-900 dark:to-orange-800 rounded-lg border border-orange-200 dark:border-orange-700">
          <p className="text-gray-600 dark:text-gray-300 text-xs font-medium mb-1">
            Mais Velho
          </p>
          <p className="text-lg font-bold text-orange-600 dark:text-orange-300">
            {clienteMaisVelho ? `${clienteMaisVelho.idade} anos` : 'N/A'}
          </p>
        </div>
      </div>

      {/* Lista Completa de Clientes */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          Lista Completa de Clientes
        </h3>

        {clientes.length === 0 ? (
          <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg text-center">
            <p className="text-gray-500 dark:text-gray-400">
              Nenhum cliente cadastrado
            </p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-gray-900 dark:text-white">
              <thead className="bg-gray-100 dark:bg-gray-800 border-b border-gray-300 dark:border-gray-700">
                <tr>
                  <th className="px-4 py-3 text-left font-semibold">Nome</th>
                  <th className="px-4 py-3 text-left font-semibold">CPF</th>
                  <th className="px-4 py-3 text-left font-semibold">
                    Telefone
                  </th>
                  <th className="px-4 py-3 text-left font-semibold">
                    Nascimento
                  </th>
                  <th className="px-4 py-3 text-center font-semibold">Idade</th>
                </tr>
              </thead>
              <tbody>
                {clientesComIdade
                  .sort((a, b) => a.nome.localeCompare(b.nome))
                  .map((cliente) => (
                    <tr
                      key={cliente.id}
                      className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                    >
                      <td className="px-4 py-3">{cliente.nome}</td>
                      <td className="px-4 py-3 font-mono text-sm">
                        {cliente.cpf}
                      </td>
                      <td className="px-4 py-3">{cliente.telefone}</td>
                      <td className="px-4 py-3">
                        {new Date(cliente.dataNascimento).toLocaleDateString(
                          'pt-BR'
                        )}
                      </td>
                      <td className="px-4 py-3 text-center font-semibold">
                        {cliente.idade}
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Detalhes Adicionais */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Por Faixa Etária */}
        <div className="p-6 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
          <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Distribuição por Faixa Etária
          </h4>

          <div className="space-y-3">
            {[
              { label: 'Menores de 18', min: 0, max: 17 },
              { label: '18-30 anos', min: 18, max: 30 },
              { label: '31-50 anos', min: 31, max: 50 },
              { label: 'Acima de 50', min: 51, max: 200 },
            ].map(({ label, min, max }) => {
              const count = clientesComIdade.filter(
                (c) => c.idade >= min && c.idade <= max
              ).length;
              return (
                <div key={label}>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      {label}
                    </span>
                    <span className="text-sm font-semibold">
                      {count} (
                      {totalClientes > 0
                        ? ((count / totalClientes) * 100).toFixed(1)
                        : 0}
                      %)
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div
                      className="bg-blue-500 h-full rounded-full"
                      style={{
                        width: `${
                          totalClientes > 0 ? (count / totalClientes) * 100 : 0
                        }%`,
                      }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Estatísticas de CPF e Telefone */}
        <div className="p-6 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
          <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Estatísticas Adicionais
          </h4>

          <div className="space-y-4">
            <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded">
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-1">
                Total de CPFs Registrados
              </p>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">
                {totalClientes}
              </p>
            </div>

            <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded">
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-1">
                Total de Telefones Registrados
              </p>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">
                {totalClientes}
              </p>
            </div>

            <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded">
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-1">
                Período de Dados
              </p>
              <p className="text-sm font-semibold text-gray-900 dark:text-white">
                {totalClientes > 0
                  ? `${new Date(
                      clientesComIdade.reduce((min, c) =>
                        new Date(c.dataNascimento) <
                        new Date(min.dataNascimento)
                          ? c
                          : min
                      ).dataNascimento
                    ).toLocaleDateString(
                      'pt-BR'
                    )} até ${new Date().toLocaleDateString('pt-BR')}`
                  : 'N/A'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
