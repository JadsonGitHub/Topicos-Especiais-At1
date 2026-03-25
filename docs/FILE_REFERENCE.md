# 📚 Documentação de Referência

## 🗂️ Árvore de Arquivos Completa

```text
/Project
│
├── 📄 README.md                    ← Documentação principal
├── 📄 QUICKSTART.md                ← Guia rápido (3 passos)
├── 📄 ARCHITECTURE.md              ← Arquitetura detalhada
├── 📄 IMPLEMENTATION.md            ← Resumo de implementação
├── 📄 UI_PREVIEW.md                ← Layout e visual
├── 📄 FILE_REFERENCE.md            ← Este arquivo
│
├── 📄 .gitignore                   ← Arquivos ignorados
├── 📄 .prettierrc.json             ← Prettier config global
├── 📄 run.sh                       ← Script de conveniência
│
├── 📁 frontend/
│   │
│   ├── 📄 package.json             ← Dependências + scripts
│   ├── 📄 biome.config.json        ← Biome config
│   ├── 📄 tsconfig.json            ← TypeScript config
│   ├── 📄 tailwind.config.js       ← Tailwind config
│   ├── 📄 vite.config.ts           ← Vite config
│   ├── 📄 .eslintrc.json           ← ESLint config
│   ├── 📄 .prettierrc              ← Prettier config local
│   │
│   ├── 📁 src/
│   │   ├── 📄 main.tsx             ← Entrada React
│   │   ├── 📄 App.tsx              ← Componente principal (167 linhas)
│   │   ├── 📄 App.css              ← Estilos globais
│   │   ├── 📄 index.css            ← Tailwind CSS + base styles
│   │   │
│   │   ├── 📁 components/          ← Componentes React
│   │   │   ├── 📄 FormularioCadastro.tsx     (118 linhas)
│   │   │   ├── 📄 ListaCadastros.tsx         (102 linhas)
│   │   │   ├── 📄 RelatorioSimplificado.tsx  (110 linhas)
│   │   │   ├── 📄 RelatorioCompleto.tsx      (196 linhas)
│   │   │   ├── 📄 TemaToggle.tsx             (42 linhas)
│   │   │   └── 📄 index.ts                   (Exports)
│   │   │
│   │   ├── 📁 hooks/               ← Custom Hooks
│   │   │   ├── 📄 useClientes.ts             (71 linhas)
│   │   │   ├── 📄 useTheme.ts               (23 linhas)
│   │   │   └── 📄 index.ts                   (Exports)
│   │   │
│   │   ├── 📁 types/               ← Interfaces TypeScript
│   │   │   └── 📄 index.ts                   (19 linhas)
│   │   │
│   │   └── 📁 assets/              ← Imagens e recursos
│   │
│   └── 📁 public/                  ← Assets públicos
│
└── 📁 backend/
    ├── 📄 package.json             ← Dependências + scripts
    ├── 📄 index.ts                 ← API Bun (150 linhas)
    └── 📄 clientes.json            ← Banco de dados JSON
```

---

## 📄 Descrição de Cada Arquivo

### Raiz do Projeto

| Arquivo | Tipo | Descrição |
| --------- | ------ | ----------- |
| `README.md` | 📄 Docs | Documentação completa com instruções |
| `QUICKSTART.md` | 📄 Docs | Guia rápido de início em 3 passos |
| `ARCHITECTURE.md` | 📄 Docs | Detalhamento técnico da arquitetura |
| `IMPLEMENTATION.md` | 📄 Docs | Resumo do que foi implementado |
| `UI_PREVIEW.md` | 📄 Docs | Visualização do layout e interface |
| `FILE_REFERENCE.md` | 📄 Docs | Este arquivo - referência de arquivos |
| `.gitignore` | ⚙️ Config | Arquivos ignorados pelo Git |
| `.prettierrc.json` | ⚙️ Config | Configuração Prettier global |
| `run.sh` | 🔧 Script | Script para rodar ambos os servidores |

### Frontend

| Caminho | Tipo | Linhas | Descrição |
| --------- | ------ | -------- | ----------- |
| `frontend/package.json` | 📦 | - | Dependências React + Vite + Tailwind |
| `frontend/tsconfig.json` | ⚙️ | - | Configuração TypeScript |
| `frontend/vite.config.ts` | ⚙️ | - | Configuração Vite |
| `frontend/tailwind.config.js` | ⚙️ | - | Configuração Tailwind CSS |
| `frontend/postcss.config.js` | ⚙️ | - | Configuração PostCSS |
| `frontend/.eslintrc.json` | ⚙️ | - | Regras ESLint |
| `frontend/.prettierrc` | ⚙️ | - | Config Prettier local |
| `frontend/src/main.tsx` | 🎯 | - | Entrada React |
| `frontend/src/App.tsx` | 🎨 | 167 | **Interface principal com navegação** |
| `frontend/src/App.css` | 🎨 | 30 | Estilos globais + reset |
| `frontend/src/index.css` | 🎨 | 45 | Tailwind directives + custom styles |

#### Components

| Arquivo | Linhas | Descrição |
| --------- | -------- | ----------- |
| `FormularioCadastro.tsx` | 118 | Formulário com validação de CPF/telefone |
| `ListaCadastros.tsx` | 102 | Lista com tabela desktop e cards mobile |
| `RelatorioSimplificado.tsx` | 110 | Estatísticas básicas com gráficos |
| `RelatorioCompleto.tsx` | 196 | Análise detalhada e tabelas |
| `TemaToggle.tsx` | 42 | Botão para alternar tema |

#### Hooks

| Arquivo | Linhas | Descrição |
| --------- | -------- | ----------- |
| `useClientes.ts` | 71 | Gerencia API e estado de clientes |
| `useTheme.ts` | 23 | Gerencia tema claro/escuro |

#### Types

| Arquivo | Linhas | Descrição |
| --------- | -------- | ----------- |
| `types/index.ts` | 19 | Interfaces: Cliente, Relatórios |

### Backend

| Arquivo | Tipo | Linhas | Descrição |
| --------- | ------ | -------- | ----------- |
| `backend/package.json` | 📦 | - | Dependências Bun |
| `backend/index.ts` | 🔧 | 150 | **Servidor API REST completo** |
| `backend/clientes.json` | 💾 | - | Banco de dados JSON persistido |

---

## 🔄 Fluxos de Dados Importantes

### 1. Adicionar Cliente

```text
FormularioCadastro.tsx
  ↓ (validação local)
App.tsx (handleAdicionarCliente)
  ↓ (POST request)
useClientes.ts (adicionarCliente)
  ↓ (HTTP)
backend/index.ts (POST /api/clientes)
  ↓ (persistência)
clientes.json (array atualizado)
  ↓ (response)
ListaCadastros.tsx (re-render)
```

### 2. Mudar Tema

```text
TemaToggle.tsx (onClick)
  ↓
useTheme.ts (toggleTheme)
  ↓
localStorage.setItem()
document.classList.toggle
  ↓
App.tsx attribui 'dark' class
  ↓
Tailwind CSS aplica estilos
```

### 3. Visualizar Relatórios

```text
App.tsx (secaoAtiva state)
  ↓ (renderização condicional)
RelatorioSimplificado.tsx
  ↓ (props: clientes[])
Calcula:
  - Total
  - Distribuição por idade
  - Histórico de cadastros
  ↓
Renderiza cards + gráficos
```

---

## 📊 Estatísticas do Projeto

### Contagem de Código

```text
Frontend:
  - App.tsx:                 167 linhas
  - Components (5):          568 linhas
  - Hooks (2):               94 linhas
  - Types:                   19 linhas
  - CSS:                     75 linhas
  ──────────────────────────────────────
  TOTAL Frontend:           923 linhas

Backend:
  - index.ts:               150 linhas
  ──────────────────────────────────────
  TOTAL Backend:            150 linhas

  ══════════════════════════════════════
  TOTAL DO PROJETO:        1073 linhas
```

### Dependências

```text
Frontend (36 packages):
  - react: 19.2.4
  - react-dom: 19.2.4
  - vite: 8.0.2
  - typescript: 5.9.3
  - tailwindcss: 4.2.2
  - eslint: 9.39.4
  - prettier: 3.8.1
  - + 29 more

Backend:
  - Bun built-in (sem deps externas)
```

---

## 🎯 Checklist de Funcionalidades

### Cadastro

- [x] Formulário completo
- [x] Validação de CPF
- [x] Validação de Telefone
- [x] Formatação automática
- [x] Envio para API
- [x] Mensagens de erro

### Listagem

- [x] Tabela desktop
- [x] Cards mobile
- [x] Opção deletar
- [x] Confirmação de delete
- [x] Requisição DELETE

### Relatório Simplificado

- [x] Total de clientes
- [x] Cadastros do mês
- [x] Gráfico por faixa etária
- [x] Histórico por mês

### Relatório Completo

- [x] Estatísticas detalhadas
- [x] Idade média
- [x] Mais jovem e velho
- [x] Tabela completa
- [x] Distribuição por faixa

### Interface

- [x] Tema claro
- [x] Tema escuro
- [x] Toggle de tema
- [x] Responsivo mobile
- [x] Responsivo tablet
- [x] Responsivo desktop
- [x] Navegação entre seções
- [x] Mensagens de sucesso
- [x] Mensagens de erro

### Ferramentas

- [x] ESLint configurado
- [x] Prettier configurado
- [x] TypeScript strict
- [x] Tailwind CSS
- [x] Vite
- [x] Bun
- [x] API REST
- [x] JSON Storage

---

## 🚀 Como Executar Cada Parte

### Formatter

```bash
cd /Project/frontend
bun run prettier --write src/
```

### Linter

```bash
cd /Project/frontend
bun run lint
```

### Build

```bash
cd /Project/frontend
bun run build
```

### Backend Dev

```bash
cd /Project/backend
bun run dev
```

### Frontend Dev

```bash
cd /Project/frontend
bun run dev
```

### API Test

```bash
# GET
curl http://localhost:3000/api/clientes

# POST
curl -X POST http://localhost:3000/api/clientes \
  -H "Content-Type: application/json" \
  -d '{"nome":"Test","cpf":"123.456.789-00",...}'

# DELETE
curl -X DELETE http://localhost:3000/api/clientes/ID
```

---

## 📚 Documentação Relacionada

| Documento | Conteúdo |
| ----------- | ---------- |
| `README.md` | Overview, instruções, troubleshooting |
| `QUICKSTART.md` | 3 passos para rodar |
| `ARCHITECTURE.md` | Estrutura técnica detalhada |
| `IMPLEMENTATION.md` | Requisitos implementados |
| `UI_PREVIEW.md` | Layouts e visualizações |
| `FILE_REFERENCE.md` | **Este arquivo** |

---

## 🔗 Links Importantes

- [React Docs](https://react.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Tailwind CSS](https://tailwindcss.com)
- [Vite Guide](https://vitejs.dev)
- [Bun Docs](https://bun.sh)
- [ESLint](https://eslint.org)
- [Prettier](https://prettier.io)

---
