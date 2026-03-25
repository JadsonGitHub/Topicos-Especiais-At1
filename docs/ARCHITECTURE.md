# 📐 Arquitetura do Projeto

## Estrutura de Pastas

```text
/cd /Project
│
├── README.md                 # Documentação principal
├── QUICKSTART.md            # Guia de início rápido
├── run.sh                   # Script para rodar aplicação
├── .gitignore              # Arquivos ignorados pelo Git
├── .prettierrc.json        # Configuração Prettier global
│
└── frontend/                # Aplicação React/TypeScript
    ├── src/
    │   ├── assets/         # Imagens e recursos estáticos
    │   │
    │   ├── components/     # Componentes React
    │   │   ├── FormularioCadastro.tsx
    │   │   ├── ListaCadastros.tsx
    │   │   ├── RelatorioSimplificado.tsx
    │   │   ├── RelatorioCompleto.tsx
    │   │   ├── TemaToggle.tsx
    │   │   └── index.ts    # Exportações
    │   │
    │   ├── hooks/          # Custom hooks
    │   │   ├── useClientes.ts    # Comunicação com API
    │   │   ├── useTheme.ts       # Gerenciar tema
    │   │   └── index.ts          # Exportações
    │   │
    │   ├── types/          # Interfaces TypeScript
    │   │   └── index.ts    # Cliente, Relatorio, etc
    │   │
    │   ├── App.tsx         # Componente principal
    │   ├── App.css         # Estilos globais
    │   ├── index.css       # Tailwind CSS
    │   └── main.tsx        # Entrada React
    │
    ├── public/             # Assets públicos
    ├── package.json
    ├── tsconfig.json
    ├── vite.config.ts
    ├── tailwind.config.js
    ├── postcss.config.js
    ├── .eslintrc.json
    ├── .prettierrc
    └── node_modules/
│
└── backend/                # API com Bun
    ├── index.ts            # Servidor principal
    ├── clientes.json       # Banco de dados (JSON)
    ├── package.json
    └── bun.lockb
```

## Fluxo de Dados

```text
┌─────────────────────────────────────────────────────────┐
│                   FRONTEND (React)                       │
├─────────────────────────────────────────────────────────┤
│                                                           │
│  ┌──────────────┐         ┌──────────────┐              │
│  │   App.tsx    │────────▶│ useClientes  │              │
│  └──────────────┘         └──────────────┘              │
│         ▲                         │                       │
│         │                         ▼                       │
│         │              ┌─────────────────┐               │
│         │              │   Componentes   │               │
│         │              │                 │               │
│         │              │ FormularioCad   │               │
│         └──────────────│ ListaCadastros  │               │
│         (Re-render)    │ RelatorioSimp   │               │
│                        │ RelatorioCom    │               │
│                        └─────────────────┘               │
│                              │                           │
│                              ▼                           │
│              ┌──────────────────────────┐                │
│              │   HTTP (JSON)            │                │
│              │  http://localhost:3000   │                │
│              └──────────────────────────┘                │
└─────────────────────────────────────────────────────────┘
                            ▲
                            │
                            ▼
┌─────────────────────────────────────────────────────────┐
│                   BACKEND (Bun)                         │
├─────────────────────────────────────────────────────────┤
│                                                           │
│  ┌────────────────────────────────────────────┐          │
│  │      Servidor HTTP (Bun)                   │          │
│  │      localhost:3000                        │          │
│  └────────────────────────────────────────────┘          │
│                    │                                      │
│   ┌────────────────┼────────────────┐                    │
│   ▼                ▼                ▼                    │
│ GET /api/      POST /api/      DELETE /api/             │
│ clientes       clientes        clientes/:id              │
│                                                           │
│   └────────────────┬────────────────┘                    │
│                    ▼                                      │
│  ┌────────────────────────────────────────────┐          │
│  │      clientes.json (Banco de dados)       │          │
│  │      [{id, nome, cpf, tel, data}]         │          │
│  └────────────────────────────────────────────┘          │
└─────────────────────────────────────────────────────────┘
```

## Componentes React

### App.tsx

**Responsabilidade**: Componente raiz e controlador principal

- Gerencia estado de navegação (qual seção está ativa)
- Controla o hook `useClientes` para comunicação com API
- Controla o hook `useTheme` para o tema claro/escuro
- Renderiza header, navegação e seções

### FormularioCadastro

**Props**:

- `onSubmit: (cliente) => Promise<void>`
- `loading: boolean`

**Features**:

- Validação de CPF (11 dígitos)
- Validação de Telefone (10-11 dígitos)
- Formatação automática: `123456789 → 123.456.789-00`
- Mensagens de erro

### ListaCadastros

**Props**:

- `clientes: Cliente[]`
- `onDelete: (id) => Promise<void>`
- `loading: boolean`

**Features**:

- Desktop: Tabela com scroll horizontal
- Mobile: Cards empilhados
- Confirmação ao deletar

### RelatorioSimplificado

**Props**:

- `clientes: Cliente[]`

**Features**:

- Total de clientes (card)
- Cadastros do mês atual
- Gráficos de distribuição por idade
- Histórico de cadastros por mês

### RelatorioCompleto

**Props**:

- `clientes: Cliente[]`

**Features**:

- Estatísticas: Total, Idade Média, Mais velho/jovem
- Tabela completa com idades
- Distribuição por faixa etária
- Gráficos com barras de progresso

### TemaToggle

**Props**:

- `isDark: boolean`
- `onToggle: () => void`

**Features**:

- Ícone de sol/lua
- Alterna entre temas
- Persiste no localStorage

## Hooks Customizados

### useClientes

**Retorna**:

```typescript
{
  clientes: Cliente[],
  loading: boolean,
  error: string | null,
  fetchClientes: () => Promise<void>,
  adicionarCliente: (cliente) => Promise<Cliente>,
  deletarCliente: (id) => Promise<void>
}
```

**Endpoints**:

- GET `/api/clientes` → fetchClientes()
- POST `/api/clientes` → adicionarCliente()
- DELETE `/api/clientes/:id` → deletarCliente()

### useTheme

**Retorna**:

```typescript
{
  isDark: boolean,
  toggleTheme: () => void
}
```

**Comportamento**:

- Detecta preferência do SO ao iniciar
- Persiste seleção em localStorage
- Aplica classe `dark` ao HTML

## Tipos TypeScript

```typescript
interface Cliente {
  id: string;                    // UUID gerado
  nome: string;                  // Obrigatório
  cpf: string;                   // Obrigatório, formato: XXX.XXX.XXX-XX
  telefone: string;              // Obrigatório, formato: (XX) XXXXX-XXXX
  dataNascimento: string;        // ISO 8601: YYYY-MM-DD
  dataCadastro?: string;         // ISO timestamp
}

interface RelatorioSimplificado {
  totalClientes: number;
  clientesPorMes: Record<string, number>;
}

interface RelatorioCompleto {
  totalClientes: number;
  clientesPorMes: Record<string, number>;
  clientes: Cliente[];
  idadeMedia?: number;
  estadisticas: {
    totalCPFs: number;
    totalTelefones: number;
  };
}
```

## Endpoints da API

### GET /api/clientes

Retorna todos os clientes cadastrados.

**Response** (200):

```json
[
  {
    "id": "abc123def456",
    "nome": "João Silva",
    "cpf": "123.456.789-00",
    "telefone": "(11) 98765-4321",
    "dataNascimento": "1990-05-15",
    "dataCadastro": "2024-03-24T21:00:00.000Z"
  }
]
```

### POST /api/clientes

Cria um novo cliente.

**Request Body**:

```json
{
  "nome": "João Silva",
  "cpf": "123.456.789-00",
  "telefone": "(11) 98765-4321",
  "dataNascimento": "1990-05-15"
}
```

**Response** (201):

```json
{
  "id": "abc123def456",
  "nome": "João Silva",
  ...
}
```

### DELETE /api/clientes/:id

Remove um cliente.

**Response** (200):

```json
{ "success": true }
```

## Padrões de Código

### Componente React

```typescript
import { FC } from 'react';

interface Props {
  // Props obrigatórias e opcionais
}

export const MeuComponente: FC<Props> = ({ prop1, prop2 }) => {
  return (
    // JSX
  );
};
```

### Hook Customizado

```typescript
export const useMeuHook = () => {
  // Lógica
  return {
    // Estado e funções
  };
};
```

### Validação de Entrada

```typescript
const validar = (valor: string): boolean => {
  // Validações
  return true;
};

const formatar = (valor: string): string => {
  // Formatação
  return valor;
};
```

## Estilo com Tailwind CSS

- **Tema**: Classes `dark:` para modo escuro
- **Responsive**: `md:`, `lg:` para diferentes telas
- **Componentes**: Classes reutilizáveis no `@layer components`
- **Cores**: Paleta padrão do Tailwind (cinza, azul, vermelho, etc)

## Performance

- **Lazy Loading**: Componentes renderizados apenas quando necessário
- **Memoização**: Uso de `useCallback` para funções
- **Re-renders**: Minimizados com props bem definidas
- **Bundle**: Build otimizado com Vite

## Segurança

- **CORS**: Habilitado apenas para localhost
- **Validação**: Frontend valida entrada
- **Dados sensíveis**: CPF e dados pessoais sem criptografia (apenas para demo)
- **HTTPS**: Recomendado para produção

---
