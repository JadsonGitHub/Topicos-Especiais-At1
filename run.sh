#!/bin/bash

# Script para rodar a aplicação completa

echo "🚀 Iniciando Cadastro de Clientes - TEI"
echo ""

# Cores
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Função para mostrar ajuda
show_help() {
  echo "Uso: ./run.sh [opção]"
  echo ""
  echo "Opções:"
  echo "  backend     - Rodar apenas o servidor backend"
  echo "  frontend    - Rodar apenas o servidor frontend"
  echo "  dev         - Rodar ambos (padrão)"
  echo "  help        - Mostrar esta mensagem"
}

# Verificar se Bun está instalado
if ! command -v bun &> /dev/null; then
  echo -e "${YELLOW}❌ Bun não encontrado. Instale em https://bun.sh${NC}"
  exit 1
fi

# Função para rodar o backend
run_backend() {
  echo -e "${BLUE}▶️  Iniciando Backend em porta 3000...${NC}"
  cd backend
  bun start
}

# Função para rodar o frontend
run_frontend() {
  echo -e "${BLUE}▶️  Iniciando Frontend em porta 5173...${NC}"
  cd frontend
  bun run dev
}

# Processar argumentos
case "${1:-dev}" in
  backend)
    run_backend
    ;;
  frontend)
    run_frontend
    ;;
  dev)
    echo -e "${GREEN}✨ Iniciando ambos os servidores...${NC}"
    echo ""
    echo -e "${YELLOW}📍 Backend:  http://localhost:3000${NC}"
    echo -e "${YELLOW}📍 Frontend: http://localhost:5173${NC}"
    echo ""

    # Rodar backend em background
    cd backend
    bun start > ../backend.log 2>&1 &
    BACKEND_PID=$!
    cd ..

    # Rodar frontend
    cd frontend
    bun run dev
    ;;
  help)
    show_help
    ;;
  *)
    show_help
    exit 1
    ;;
esac
