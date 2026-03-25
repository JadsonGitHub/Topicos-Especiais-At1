# 📋 Cadastro de Clientes - TEI

Uma aplicação React/TypeScript para gerenciamento de clientes com relatórios simplificados e completos.

## ✨ Características

- ✅ **Cadastro de Clientes**: Formulário para adicionar novos clientes
- 📊 **Relatório Simplificado**: Estatísticas básicas e gráficos
- 📈 **Relatório Completo**: Análise detalhada com distribuições
- 🌓 **Tema Claro/Escuro**: Suporte a temas com Tailwind CSS
- 📱 **Responsivo**: Interface adaptada para móvel, tablet e desktop
- 💾 **Armazenamento em Arquivo**: Dados salvos em JSON
- 🎨 **Interface Profissional**: Componentes bem estruturados e testados

## 🛠 Tecnologias

### Frontend

- **React 19** - Biblioteca UI
- **TypeScript** - Type safety
- **Vite** - Build tool moderno
- **Tailwind CSS** - Estilo responsivo
- **ESLint** - Code quality
- **Prettier** - Code formatting

### Backend

- **Bun** - JavaScript runtime
- **Node.js File System** - Armazenamento em JSON
- **CORS** - Requisições cross-origin

## 📦 Estrutura do Projeto

```text
/Project
├── frontend/                 # Aplicação React
│   ├── src/
│   │   ├── components/       # Componentes React
│   │   ├── hooks/            # Custom hooks
│   │   ├── types/            # Tipos TypeScript
│   │   ├── App.tsx           # Componente principal
│   │   └── index.css         # Estilos Tailwind
│   ├── package.json
│   ├── tsconfig.json
│   ├── vite.config.ts
│   └── tailwind.config.js
│
└── backend/                  # API com Bun
    ├── index.ts              # Servidor principal
    ├── clientes.json         # Dados armazenados
    └── package.json
```

## 🚀 Como Rodar

### Pré-requisitos

- Bun 1.0+
- Node.js (opcional)

### 1. Instalar Dependências

**Frontend:**

```bash
cd /Project/frontend
bun install
```

**Backend:**

```bash
cd /Project/backend
bun install
```

### 2. Iniciar o Backend

```bash
cd /Project/backend
bun run dev
# ou
bun start
```

O servidor estará disponível em `http://localhost:3000`

### 3. Iniciar o Frontend

Em outro terminal:

```bash
cd /Project/frontend
bun run dev
```

A aplicação estará disponível em `http://localhost:5173`

## 📝 Seções Principais

### 1. **Cadastros** (Padrão)

- Formulário para adicionar novos clientes
- Validação de CPF e Telefone
- Lista de clientes cadastrados
- Opção para deletar clientes

### 2. **Relatório Simplificado**

- Total de clientes
- Cadastros no mês atual
- Distribuição por faixa etária
- Cadastros por mês

### 3. **Relatório Completo**

- Estatísticas detalhadas
- Idade média dos clientes
- Cliente mais jovem e mais velho
- Lista completa com idades
- Distribuição por faixa etária
- Período de dados

## 🎯 Campos de Cliente

- **ID**: Identificador único (gerado automaticamente)
- **Nome**: Nome completo (obrigatório)
- **CPF**: Cadastro de Pessoa Física (obrigatório, validação)
- **Telefone**: Contato (obrigatório, validação)
- **Data de Nascimento**: Para cálculo de idade (obrigatório)
- **Data de Cadastro**: Timestamp automático

## 🔧 API REST

### Endpoints

#### GET `/api/clientes`

Retorna lista de todos os clientes.

```bash
curl http://localhost:3000/api/clientes
```

#### POST `/api/clientes`

Cria um novo cliente.

```bash
curl -X POST http://localhost:3000/api/clientes \
  -H "Content-Type: application/json" \
  -d '{
    "nome": "João Silva",
    "cpf": "123.456.789-00",
    "telefone": "(11) 98765-4321",
    "dataNascimento": "1990-05-15"
  }'
```

#### DELETE `/api/clientes/:id`

Remove um cliente pelo ID.

```bash
curl -X DELETE http://localhost:3000/api/clientes/abc123
```

## 🎨 Tema Claro/Escuro

A aplicação suporta tema claro e escuro automaticamente:

- Detecta preferência do SO ao carregar
- Permite alternar com botão no header
- Persiste escolha no localStorage
- Usa classe `dark` do Tailwind CSS

## 📋 Scripts Disponíveis

### Front

- `bun run dev` - Iniciar servidor de desenvolvimento
- `bun run lint` - Executar ESLint
- `bun run preview` - Preview da build

### Back

- `bun run dev` - Iniciar servidor com watch
- `bun start` - Iniciar servidor

## 📚 Padrões Seguidos

- **Component Composition**: Componentes pequenos e reutilizáveis
- **Custom Hooks**: Lógica separada em hooks customizados
- **Type Safety**: TypeScript em todo projeto
- **Responsive Design**: Mobile-first approach
- **Accessibility**: Semântica HTML apropriada
- **Code Style**: ESLint + Prettier configurados

## 🐛 Troubleshooting

### Erro de CORS

Certifique-se que o backend está rodando em `http://localhost:3000`

### Dados não aparecem

- Verifique se `clientes.json` existe na pasta `backend/`
- Verifique permissões de leitura/escrita

### Tema não funciona

Limpe o localStorage e recarregue a página:

```javascript
localStorage.clear()
```

## 📄 Licença

Este projeto é de código aberto e educacional.

---

### Desenvolvido com React + TypeScript + Bun
