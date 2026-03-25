import { useState, useCallback } from 'react';
import type { Cliente } from '../types';

const API_URL = 'http://localhost:3000/api';

export const useClientes = () => {
  const [clientes, setClientes] = useState<Cliente[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchClientes = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch(`${API_URL}/clientes`);
      if (!response.ok) throw new Error('Erro ao buscar clientes');
      const data = await response.json();
      setClientes(data);
      setError(null);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Erro desconhecido');
    } finally {
      setLoading(false);
    }
  }, []);

  const adicionarCliente = useCallback(async (cliente: Omit<Cliente, 'id'>) => {
    setLoading(true);
    try {
      const response = await fetch(`${API_URL}/clientes`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(cliente),
      });
      if (!response.ok) throw new Error('Erro ao adicionar cliente');
      const novoCliente = await response.json();
      setClientes((prev) => [...prev, novoCliente]);
      setError(null);
      return novoCliente;
    } catch (err) {
      const errorMsg = err instanceof Error ? err.message : 'Erro desconhecido';
      setError(errorMsg);
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  const deletarCliente = useCallback(async (id: string) => {
    setLoading(true);
    try {
      const response = await fetch(`${API_URL}/clientes/${id}`, {
        method: 'DELETE',
      });
      if (!response.ok) throw new Error('Erro ao deletar cliente');
      setClientes((prev) => prev.filter((c) => c.id !== id));
      setError(null);
    } catch (err) {
      const errorMsg = err instanceof Error ? err.message : 'Erro desconhecido';
      setError(errorMsg);
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  return {
    clientes,
    loading,
    error,
    fetchClientes,
    adicionarCliente,
    deletarCliente,
  };
};
