import { Database } from 'bun:sqlite';
import { readFileSync, writeFileSync } from 'fs';
import { resolve } from 'path';

// Tipos
interface Cliente {
  id: string;
  nome: string;
  cpf: string;
  telefone: string;
  dataNascimento: string;
  dataCadastro?: string;
}

// Caminho do arquivo de dados
const DATA_FILE = resolve('./clientes.json');

// Funções para gerenciar dados em JSON
function lerClientes(): Cliente[] {
  try {
    const data = readFileSync(DATA_FILE, 'utf-8');
    return JSON.parse(data);
  } catch {
    return [];
  }
}

function salvarClientes(clientes: Cliente[]): void {
  writeFileSync(DATA_FILE, JSON.stringify(clientes, null, 2));
}

function gerarId(): string {
  return Math.random().toString(36).substring(2) + Date.now().toString(36);
}

// Servidor Bun
const server = Bun.serve({
  port: 3000,
  hostname: '0.0.0.0',

  async fetch(request: Request) {
    const url = new URL(request.url);
    const pathname = url.pathname;
    const method = request.method;

    // Configurar CORS
    const headers = {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    };

    // Responder a preflight requests
    if (method === 'OPTIONS') {
      return new Response(null, { headers, status: 204 });
    }

    try {
      // GET /api/clientes - Listar todos os clientes
      if (pathname === '/api/clientes' && method === 'GET') {
        const clientes = lerClientes();
        return new Response(JSON.stringify(clientes), {
          headers,
          status: 200,
        });
      }

      // POST /api/clientes - Criar novo cliente
      if (pathname === '/api/clientes' && method === 'POST') {
        const body = await request.json();
        const clientes = lerClientes();

        // Validação
        if (!body.nome || !body.cpf || !body.telefone || !body.dataNascimento) {
          return new Response(
            JSON.stringify({
              error: 'Campos obrigatórios: nome, cpf, telefone, dataNascimento',
            }),
            { headers, status: 400 }
          );
        }

        const novoCliente: Cliente = {
          id: gerarId(),
          nome: body.nome,
          cpf: body.cpf,
          telefone: body.telefone,
          dataNascimento: body.dataNascimento,
          dataCadastro: body.dataCadastro || new Date().toISOString(),
        };

        clientes.push(novoCliente);
        salvarClientes(clientes);

        return new Response(JSON.stringify(novoCliente), {
          headers,
          status: 201,
        });
      }

      // DELETE /api/clientes/:id - Deletar cliente
      if (pathname.startsWith('/api/clientes/') && method === 'DELETE') {
        const id = pathname.split('/').pop();
        const clientes = lerClientes();
        const novosList = clientes.filter((c) => c.id !== id);

        if (novosList.length === clientes.length) {
          return new Response(
            JSON.stringify({ error: 'Cliente não encontrado' }),
            { headers, status: 404 }
          );
        }

        salvarClientes(novosList);
        return new Response(JSON.stringify({ success: true }), {
          headers,
          status: 200,
        });
      }

      // Rota não encontrada
      return new Response(JSON.stringify({ error: 'Rota não encontrada' }), {
        headers,
        status: 404,
      });
    } catch (error) {
      console.error('Erro:', error);
      return new Response(
        JSON.stringify({
          error: error instanceof Error ? error.message : 'Erro interno',
        }),
        { headers, status: 500 }
      );
    }
  },
});

console.log(`✅ Servidor rodando em http://localhost:${server.port}`);
console.log(`📝 API disponível em http://localhost:${server.port}/api`);
