# 📱 Visualização da Interface

## Paleta de Cores

### Tema Claro

```text
┌─────────────────────────────────────────┐
│ Header (Branco)                         │
├─────────────────────────────────────────┤
│ Navegação (Cinza 50)                    │
├─────────────────────────────────────────┤
│ Conteúdo (Cinza 50)                     │
│                                         │
│ Cards: Branco                           │
│ Texto: Cinza 900                        │
│ Acentos: Azul 600                       │
│ Bordas: Cinza 200                       │
└─────────────────────────────────────────┘
```

### Tema Escuro

```text
┌─────────────────────────────────────────┐
│ Header (Cinza 800)                      │
├─────────────────────────────────────────┤
│ Navegação (Cinza 800)                   │
├─────────────────────────────────────────┤
│ Conteúdo (Cinza 900)                    │
│                                         │
│ Cards: Cinza 800                        │
│ Texto: Branco/Cinza Claro               │
│ Acentos: Azul 400                       │
│ Bordas: Cinza 700                       │
└─────────────────────────────────────────┘
```

---

## Layout - Desktop (>1024px)

```text
┌──────────────────────────────────────────────────────────┐
│ 📋 Cadastro de Clientes  [Tema Toggle ☀️/🌙]            │
├──────────────────────────────────────────────────────────┤
│                                                            │
│  📝 Cadastros | 📊 Relatório Simplificado | 📈 Completo  │
├──────────────────────────────────────────────────────────┤
│                                                            │
│  ┌─────────────────────────────────────────────────────┐  │
│  │ FORMULÁRIO DE CADASTRO                              │  │
│  │ ─────────────────────────────────────────────────── │  │
│  │ Nome: [________________________]                     │  │
│  │ CPF:  [________________________]                     │  │
│  │ Tel:  [________________________]                     │  │
│  │ Data: [________________________]                     │  │
│  │                          [Cadastrar Cliente] ▶      │  │
│  └─────────────────────────────────────────────────────┘  │
│                                                            │
│  ┌─────────────────────────────────────────────────────┐  │
│  │ CLIENTES CADASTRADOS (Total: 3)                     │  │
│  │ ─────────────────────────────────────────────────── │  │
│  │╔═════╦════════════╦═══════════════╦═════════════╗  │  │
│  │║ ID  ║ Nome       ║ CPF           ║ Telefone    ║  │  │
│  │╠═════╬════════════╬═══════════════╬═════════════╣  │  │
│  │║abc… ║ Maria      ║ 123.456.789-… ║ (21) 9876…  ║  │  │
│  │║def… ║ Pedro      ║ 987.654.321-… ║ (11) 9987…  ║  │  │
│  │║ghi… ║ Ana        ║ 456.789.123-… ║ (85) 9999…  ║  │  │
│  │╚═════╩════════════╩═══════════════╩═════════════╝  │  │
│  └─────────────────────────────────────────────────────┘  │
│                                                            │
├──────────────────────────────────────────────────────────┤
│ © 2024 Cadastro de Clientes. React + TypeScript.         │
└──────────────────────────────────────────────────────────┘
```

---

## Layout - Relatório Simplificado

```text
┌──────────────────────────────────────────────────────────┐
│ Relatório Simplificado                                   │
├──────────────────────────────────────────────────────────┤
│                                                            │
│ ┌─────────────────────┐  ┌─────────────────────┐         │
│ │ Total de Clientes   │  │ Cadastros em Março  │         │
│ │      3              │  │         3           │         │
│ └─────────────────────┘  └─────────────────────┘         │
│                                                            │
│ ┌──────────────────────────────────────────────────────┐ │
│ │ Distribuição por Faixa Etária                        │ │
│ │ ────────────────────────────────────────────────────│ │
│ │ Menores  ▓░░░░░░░░░░░░░░░░░░░░░░  33.3% (1)         │ │
│ │ 18-29    ▓▓▓▓▓░░░░░░░░░░░░░░░░░░   33.3% (1)        │ │
│ │ 30-49    ▓░░░░░░░░░░░░░░░░░░░░░░   0.0% (0)         │ │
│ │ 50+      ▓▓▓▓▓░░░░░░░░░░░░░░░░░░   33.3% (1)        │ │
│ └──────────────────────────────────────────────────────┘ │
│                                                            │
│ ┌──────────────────────────────────────────────────────┐ │
│ │ Cadastros por Mês                                    │ │
│ │ ────────────────────────────────────────────────────│ │
│ │ Março de 2026        ◯ 3                            │ │
│ └──────────────────────────────────────────────────────┘ │
└──────────────────────────────────────────────────────────┘
```

---

## Layout - Relatório Completo

```text
┌──────────────────────────────────────────────────────────┐
│ Relatório Completo                                       │
├──────────────────────────────────────────────────────────┤
│                                                            │
│ ┌─────────┐ ┌──────────┐ ┌────────────┐ ┌──────────────┐ │
│ │ Total   │ │ Idade    │ │ Mais Jovem │ │ Mais Velho   │ │
│ │    3    │ │ Média    │ │   21 anos  │ │   38 anos    │ │
│ │         │ │  28.5    │ │            │ │              │ │
│ └─────────┘ └──────────┘ └────────────┘ └──────────────┘ │
│                                                            │
│ ┌──────────────────────────────────────────────────────┐ │
│ │ Lista Completa de Clientes                           │ │
│ │ ────────────────────────────────────────────────────│ │
│ │╔═══════════╦═══════════════╦════════════╦════════╗  │ │
│ │║ Nome      ║ CPF           ║ Telefone   ║ Idade  ║  │ │
│ │╠═══════════╬═══════════════╬════════════╬════════╣  │ │
│ │║ Ana       ║ 456.789.123-… ║ (85) 99… │ 23   ║  │ │
│ │║ Maria     ║ 123.456.789-… ║ (21) 98… │ 28   ║  │ │
│ │║ Pedro     ║ 987.654.321-… ║ (11) 99… │ 35   ║  │ │
│ │╚═══════════╩═══════════════╩════════════╩════════╝  │ │
│ └──────────────────────────────────────────────────────┘ │
│                                                            │
│ ┌────────────────────────┐ ┌──────────────────────────┐ │
│ │ Faixa Etária           │ │ Estatísticas Adicionais  │ │
│ │ ──────────────────────-│ │ ──────────────────────── │ │
│ │ Menores de 18  ▓░░  1 │ │ CPFs Registrados: 3      │ │
│ │ 18-30 anos     ▓▓░░ 2 │ │ Telefones: 3             │ │
│ │ 31-50 anos     ░░░░ 0 │ │ Período: 20/03 - 25/03  │ │
│ │ Acima de 50    ░░░░ 0 │ │                          │ │
│ └────────────────────────┘ └──────────────────────────┘ │
└──────────────────────────────────────────────────────────┘
```

---

## Layout - Móvel (<768px)

```text
┌─────────────────────────┐
│ 📋 Cadastro Clientes    │
│                   ☀️/🌙 │
├─────────────────────────┤
│  📝 Cadastros           │
├─────────────────────────┤
│                         │
│ ┌─────────────────────┐ │
│ │ Nome:               │ │
│ │ [______________]    │ │
│ │                     │ │
│ │ CPF:                │ │
│ │ [______________]    │ │
│ │                     │ │
│ │ Telefone:           │ │
│ │ [______________]    │ │
│ │                     │ │
│ │ Data Nascimento:    │ │
│ │ [______________]    │ │
│ │                     │ │
│ │ [Cadastrar Cliente] │ │
│ └─────────────────────┘ │
│                         │
│ ┌─────────────────────┐ │
│ │ Maria Santos        │ │
│ │                     │ │
│ │ CPF: 123.456.789-00 │ │
│ │ Tel: (21) 98765-4321│ │
│ │ Nasc: 20/03/1995    │ │
│ │                     │ │
│ │      [Deletar]      │ │
│ └─────────────────────┘ │
│                         │
│ ┌─────────────────────┐ │
│ │ Pedro Oliveira      │ │
│ │ ...                 │ │
│ └─────────────────────┘ │
│                         │
├─────────────────────────┤
│ © 2024 Cadastro        │
└─────────────────────────┘
```

---

## Interações Principais

### Adicionar Cliente

```text
Usuário preenche:
  Nome (obrigatório)
  CPF (obrigatório, 11 dígitos)
  Telefone (obrigatório, 10-11 dígitos)
  Data Nascimento (obrigatório)
        ↓
  Validação no cliente
        ↓
  Se válido → POST /api/clientes
        ↓
  Backend cria ID único
  Salva em clientes.json
        ↓
  Retorna ao cliente
        ↓
  App atualiza lista
        ↓
  Mensagem: "Cliente cadastrado com sucesso! ✅"
```

### Deletar Cliente

```text
Usuário clica em "Deletar"
        ↓
  Confirmar: "Tem certeza?"
        ↓
  Se confirmado → DELETE /api/clientes/ID
        ↓
  Backend remove de clientes.json
        ↓
  App atualiza lista
        ↓
  Cliente desaparece da tela
```

### Alternar Tema

```text
Usuário clica no icon ☀️/🌙
        ↓
  useTheme().toggleTheme()
        ↓
  isDark = !isDark
  localStorage.setItem('theme', isDark)
        ↓
  document.documentElement.classList.toggle('dark')
        ↓
  Tailwind aplica classes escuras
        ↓
  Interface muda instantaneamente
```

---

## Estados da Aplicação

### Carregando

```text
┌──────────────────────────┐
│ [Carregando...]          │
│ ⏳ Buscando dados...     │
└──────────────────────────┘
```

### Sucesso

```text
┌──────────────────────────────┐
│ ✅ Cliente cadastrado!        │
│ Maria Santos adicionada       │
│ (desaparece em 3 segundos)    │
└──────────────────────────────┘
```

### Erro

```text
┌──────────────────────────────┐
│ ⚠️ Erro ao cadastrar          │
│ Verifique os dados e tente    │
│ novamente                     │
└──────────────────────────────┘
```

### Vazio

```text
┌──────────────────────────────┐
│ Nenhum cliente cadastrado     │
│ ainda.                        │
│                              │
│ Use o formulário acima para  │
│ começar! 👆                  │
└──────────────────────────────┘
```

---

## Fluxo de Navegação

```text
                    ┌─────────────┐
                    │ App.tsx     │
                    └──────┬──────┘
                           │
          ┌────────────────┼────────────────┐
          │                │                │
          ▼                ▼                ▼
    ┌──────────────┐ ┌──────────────┐ ┌──────────────┐
    │ Cadastros    │ │ Relatório    │ │ Relatório    │
    │ (Padrão)     │ │ Simplificado │ │ Completo     │
    └──────┬───────┘ └──────┬───────┘ └──────┬───────┘
           │                │                │
           └────────────────┼────────────────┘
                            │
                    ┌───────▼────────┐
                    │ useClientes    │
                    │ (API Backend)  │
                    └────────────────┘
```

---

## Animações e Transições

- **Hover em elementos:** Mudança suave de cor (0.3s)
- **Mudança de tema:** Aplicação instantânea
- **Navegação:** Sem reload, transição suave
- **Mensagens:** Fade in/out em 3 segundos
- **Carregamento:** Spinner/estado disabled em botões

---

### Interface profissional, intuitiva e orientada ao usuário
