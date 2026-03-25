import type { Cliente } from '../types';

interface ListaCadastrosProps {
  clientes: Cliente[];
  onDelete: (id: string) => Promise<void>;
  loading: boolean;
}

export const ListaCadastros = ({
  clientes,
  onDelete,
  loading,
}: ListaCadastrosProps) => {
  const handleDelete = async (id: string) => {
    if (window.confirm('Tem certeza que deseja deletar este cliente?')) {
      try {
        await onDelete(id);
      } catch (error) {
        console.error('Erro ao deletar:', error);
      }
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-4">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
        Clientes Cadastrados
      </h2>

      {clientes.length === 0 ? (
        <div className="flex items-center justify-center p-8 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
          <p className="text-gray-500 dark:text-gray-400">
            Nenhum cliente cadastrado ainda.
          </p>
        </div>
      ) : (
        <div className="space-y-4">
          {/* Desktop view */}
          <div className="hidden md:block overflow-x-auto">
            <table className="w-full text-sm text-gray-900 dark:text-white">
              <thead className="bg-gray-100 dark:bg-gray-800 border-b border-gray-300 dark:border-gray-700">
                <tr>
                  <th className="px-4 py-3 text-left font-semibold">ID</th>
                  <th className="px-4 py-3 text-left font-semibold">Nome</th>
                  <th className="px-4 py-3 text-left font-semibold">CPF</th>
                  <th className="px-4 py-3 text-left font-semibold">
                    Telefone
                  </th>
                  <th className="px-4 py-3 text-left font-semibold">
                    Data Nascimento
                  </th>
                  <th className="px-4 py-3 text-center font-semibold">Ação</th>
                </tr>
              </thead>
              <tbody>
                {clientes.map((cliente) => (
                  <tr
                    key={cliente.id}
                    className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                  >
                    <td className="px-4 py-3 text-xs font-mono text-gray-600 dark:text-gray-400">
                      {cliente.id.substring(0, 8)}...
                    </td>
                    <td className="px-4 py-3">{cliente.nome}</td>
                    <td className="px-4 py-3">{cliente.cpf}</td>
                    <td className="px-4 py-3">{cliente.telefone}</td>
                    <td className="px-4 py-3">
                      {new Date(cliente.dataNascimento).toLocaleDateString(
                        'pt-BR'
                      )}
                    </td>
                    <td className="px-4 py-3 text-center">
                      <button
                        onClick={() => handleDelete(cliente.id)}
                        disabled={loading}
                        className="px-3 py-1 bg-red-600 hover:bg-red-700 disabled:bg-gray-400 text-white text-sm rounded transition-colors"
                      >
                        Deletar
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile view */}
          <div className="md:hidden space-y-4">
            {clientes.map((cliente) => (
              <div
                key={cliente.id}
                className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 space-y-2"
              >
                <div className="flex justify-between items-start">
                  <h3 className="font-semibold">{cliente.nome}</h3>
                  <button
                    onClick={() => handleDelete(cliente.id)}
                    disabled={loading}
                    className="px-3 py-1 bg-red-600 hover:bg-red-700 disabled:bg-gray-400 text-white text-sm rounded transition-colors"
                  >
                    Deletar
                  </button>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  <span className="font-medium">CPF:</span> {cliente.cpf}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  <span className="font-medium">Telefone:</span>{' '}
                  {cliente.telefone}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  <span className="font-medium">Data Nascimento:</span>{' '}
                  {new Date(cliente.dataNascimento).toLocaleDateString('pt-BR')}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      <p className="mt-6 text-sm text-gray-600 dark:text-gray-400">
        Total de clientes: <span className="font-bold">{clientes.length}</span>
      </p>
    </div>
  );
};
