# 🚀 Quick Start - Cadastro de Clientes

## ⚡ Início Rápido (3 passos)

### 1. Terminal 1 - Backend

```bash
cd /Project/backend
bun start
```

Você verá:

```bash
✅ Servidor rodando em http://localhost:3000
📝 API disponível em http://localhost:3000/api
```

### 2. Terminal 2 - Frontend

```bash
cd /Project/frontend
bun run dev
```

Você verá:

```bash
VITE v8.0.2  ready in 284 ms
➜  Local:   http://localhost:5173/
```

### 3. Abra seu navegador

```bash
http://localhost:5173
```

---

## ✅ Checklist de Funcionalidades

- [x] Cadastro de cliente (nome, CPF, telefone, data de nascimento)
- [x] Listagem de clientes cadastrados
- [x] Validação de CPF e telefone
- [x] Formatação automática de CPF e telefone
- [x] Deletar cliente
- [x] Relatório simplificado com gráficos
- [x] Relatório completo com estatísticas
- [x] Tema claro/escuro
- [x] Interface responsiva (mobile, tablet, desktop)
- [x] Armazenamento em arquivo JSON
- [x] API REST funcional
- [x] ESLint + Prettier configurados

---

## 🎯 Próximos Passos (Opcional)

### Formatar código

```bash
cd frontend
bun run prettier --write src/
bun run lint
```

### Build para produção

```bash
cd frontend
bun run build
```

### Testar API manualmente

```bash
# Listar clientes
curl http://localhost:3000/api/clientes

# Adicionar cliente
curl -X POST http://localhost:3000/api/clientes \
  -H "Content-Type: application/json" \
  -d '{
    "nome": "João Silva",
    "cpf": "123.456.789-00",
    "telefone": "(11) 98765-4321",
    "dataNascimento": "1990-05-15"
  }'
```

---

## 🐛 Troubleshooting

### Porta 3000 ou 5173 já em uso?

**Backend:**

```bash
# Encontrar processo
lsof -i :3000

# Matar processo (substituir PID)
kill -9 <PID>
```

**Frontend:**

```bash
lsof -i :5173
kill -9 <PID>
```

### Dados não aparecem?

1. Verifique se `backend/clientes.json` existe
2. Verifique as permissões: `ls -la backend/clientes.json`
3. Limpe o localStorage do navegador (DevTools > Application > Storage)

### Erro de CORS?

Certifique-se que o backend está rodando. O frontend tenta se conectar em `http://localhost:3000/api`

---

## 📱 Interface

### Seção 1: Cadastros (Padrão)

- Formulário para adicionar clientes
- Lista com todos cadastrados
- Botão para deletar

### Seção 2: Relatório Simplificado

- Total de clientes
- Cadastros deste mês
- Distribuição por idade
- Histórico de cadastros

### Seção 3: Relatório Completo

- Estatísticas detalhadas
- Idade média
- Cliente mais jovem/velho
- Tabela completa
- Distribuição por faixa etária

---
