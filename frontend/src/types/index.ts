export interface Cliente {
  id: string;
  nome: string;
  cpf: string;
  telefone: string;
  dataNascimento: string;
  dataCadastro?: string;
}

export interface RelatorioSimplificado {
  totalClientes: number;
  clientesPorMes: Record<string, number>;
}

export interface RelatorioCompleto {
  totalClientes: number;
  clientesPorMes: Record<string, number>;
  clientes: Cliente[];
  idadeMedia?: number;
  estadisticas: {
    totalCPFs: number;
    totalTelefones: number;
  };
}
