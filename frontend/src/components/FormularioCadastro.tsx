import { useState } from 'react';
import type { Cliente } from '../types';

interface FormularioCadastroProps {
  onSubmit: (cliente: Omit<Cliente, 'id'>) => Promise<void>;
  loading: boolean;
}

export const FormularioCadastro = ({
  onSubmit,
  loading,
}: FormularioCadastroProps) => {
  const [formData, setFormData] = useState({
    nome: '',
    cpf: '',
    telefone: '',
    dataNascimento: '',
  });
  const [error, setError] = useState('');

  const validarCPF = (cpf: string): boolean => {
    const cpfLimpo = cpf.replace(/\D/g, '');
    return cpfLimpo.length === 11;
  };

  const validarTelefone = (telefone: string): boolean => {
    const telefoneLimpo = telefone.replace(/\D/g, '');
    return telefoneLimpo.length >= 10;
  };

  const formatarCPF = (cpf: string): string => {
    const cpfLimpo = cpf.replace(/\D/g, '');
    return cpfLimpo
      .slice(0, 11)
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d{1,2})$/, '$1-$2');
  };

  const formatarTelefone = (telefone: string): string => {
    const telefoneLimpo = telefone.replace(/\D/g, '');
    if (telefoneLimpo.length <= 10) {
      return telefoneLimpo
        .slice(0, 10)
        .replace(/(\d{2})(\d)/, '($1) $2')
        .replace(/(\d{4})(\d)/, '$1-$2');
    }
    return telefoneLimpo
      .slice(0, 11)
      .replace(/(\d{2})(\d)/, '($1) $2')
      .replace(/(\d{5})(\d)/, '$1-$2');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    let formattedValue = value;

    if (name === 'cpf') {
      formattedValue = formatarCPF(value);
    } else if (name === 'telefone') {
      formattedValue = formatarTelefone(value);
    }

    setFormData((prev) => ({
      ...prev,
      [name]: formattedValue,
    }));
    setError('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (
      !formData.nome ||
      !formData.cpf ||
      !formData.telefone ||
      !formData.dataNascimento
    ) {
      setError('Todos os campos são obrigatórios');
      return;
    }

    if (!validarCPF(formData.cpf)) {
      setError('CPF inválido (deve ter 11 dígitos)');
      return;
    }

    if (!validarTelefone(formData.telefone)) {
      setError('Telefone inválido');
      return;
    }

    try {
      await onSubmit({
        nome: formData.nome,
        cpf: formData.cpf,
        telefone: formData.telefone,
        dataNascimento: formData.dataNascimento,
      });

      setFormData({
        nome: '',
        cpf: '',
        telefone: '',
        dataNascimento: '',
      });
    } catch (err) {
      setError(
        err instanceof Error ? err.message : 'Erro ao cadastrar cliente'
      );
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto p-4">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
        Cadastro de Cliente
      </h2>

      {error && (
        <div className="mb-4 p-4 bg-red-100 dark:bg-red-900 border border-red-400 dark:border-red-700 text-red-700 dark:text-red-100 rounded">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Nome Completo *
          </label>
          <input
            type="text"
            name="nome"
            value={formData.nome}
            onChange={handleChange}
            placeholder="Ex: João da Silva"
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            CPF *
          </label>
          <input
            type="text"
            name="cpf"
            value={formData.cpf}
            onChange={handleChange}
            placeholder="XXX.XXX.XXX-XX"
            maxLength={14}
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Telefone *
          </label>
          <input
            type="tel"
            name="telefone"
            value={formData.telefone}
            onChange={handleChange}
            placeholder="(XX) XXXXX-XXXX"
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Data de Nascimento *
          </label>
          <input
            type="date"
            name="dataNascimento"
            value={formData.dataNascimento}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full px-6 py-2 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white font-medium rounded-lg transition-colors"
        >
          {loading ? 'Cadastrando...' : 'Cadastrar Cliente'}
        </button>
      </form>
    </div>
  );
};
