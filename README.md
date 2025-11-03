# Beach Runner

![Next.js](https://img.shields.io/badge/Next.js-14-black?logo=nextdotjs)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)
![Prisma](https://img.shields.io/badge/Prisma-ORM-blueviolet?logo=prisma)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4-38BDF8?logo=tailwindcss)
![Clerk](https://img.shields.io/badge/Clerk-Auth-orange?logo=clerk)
![Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?logo=vercel)
![License](https://img.shields.io/badge/license-MIT-green)
 
 ---

**Beach Runner** é uma aplicação web moderna para monitoramento de treinos de corrida.  
Desenvolvido com **Next.js**, **TypeScript**, **Prisma**, e **Clerk**, o app permite que corredores rastreiem sua evolução, cadastrem treinos e acompanhem o progresso de forma simples, bonita e intuitiva.

---

## Tecnologias Utilizadas

- **Next.js 14 (App Router)**
- **TailwindCSS + shadcn/ui**
- **TypeScript**
- **Clerk** (autenticação)
- **Prisma ORM**
- **Recharts** (gráficos dinâmicos)
- **TanStack Query (React Query)**
- **Framer Motion** (animações)
- **Sonner** (notificações)
- **BFF (Backend for Frontend)** — camada intermediária entre o front e o banco de dados

---

## Arquitetura BFF

O projeto segue o padrão **Backend for Frontend (BFF)**, onde toda a comunicação entre o frontend e o banco de dados passa por uma camada server-side específica para o cliente (Next.js App Router).  
Essa camada centraliza as operações, melhora a performance e garante segurança no acesso aos dados.

### Benefícios:
- **Segurança:** o cliente nunca acessa o banco diretamente.  
- **Performance:** dados tratados e otimizados antes de chegar ao frontend.  
- **Organização:** separação clara entre lógica de apresentação e lógica de negócio.  
- **Escalabilidade:** fácil de expandir para novas entidades e funcionalidades.

### Estrutura da Arquitetura

```text
┌────────────────────────┐
│        Frontend         │
│  (Next.js + React)      │
└────────────┬────────────┘
             │
             ▼
┌────────────────────────┐
│  BFF (Backend for Frontend) │
│  /server/training_session/  │
│  - Actions (CRUD)           │
│  - Validações e regras      │
└────────────┬────────────┘
             │
             ▼
┌────────────────────────┐
│       Prisma ORM        │
│   Comunicação com DB     │
└────────────┬────────────┘
             │
             ▼
┌────────────────────────┐
│    Banco de Dados       │
│ (SQLite / PostgreSQL)   │
└────────────────────────┘
```

---

## Funcionalidades

- **Gráfico de evolução** — acompanhe seus quilômetros percorridos ao longo do tempo.  
- **Cadastro de corridas** — registre distância, duração, calorias e ritmo médio.  
- **Histórico completo** — visualize e filtre suas corridas anteriores.  
- **Layout responsivo** — design otimizado para desktop e mobile.  
- **Autenticação segura** — login via Clerk.  
- **Paginação inteligente** — visualização fluida mesmo com muitos registros.  

---

## Como Rodar Localmente

```bash
# Clone o repositório
git clone https://github.com/1m4ru/beach-runner.git

# Acesse o diretório
cd beach-runner

# Instale as dependências
npm install

# Configure as variáveis de ambiente (.env)
# Clerk, Banco de Dados, etc.

# Execute as migrações do Prisma
npx prisma migrate dev

# Rode o servidor de desenvolvimento
npm run dev
```

Acesse em: [http://localhost:3000](http://localhost:3000)

---

## Deploy

O projeto está pronto para ser deployado em **Vercel** 🪄  
Basta conectar o repositório e definir as variáveis de ambiente.

---

## Autor

Desenvolvido por **Maruan Moussa**  
📍 Palhoça, Santa Catarina  
[LinkedIn](https://www.linkedin.com/in/maruan-moussa/)  
[GitHub](https://github.com/1m4ru)

---

## Status

✅ Projeto finalizado  


---

## 📜 Licença

Este projeto foi desenvolvido com fins de **portfólio** e aprendizado.  
Sinta-se livre para explorar o código.
