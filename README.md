# 🚀 Next New

<div align="center">

![Next.js](https://img.shields.io/badge/Next.js-16.0.0-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-19.2.0-61DAFB?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript)
![TailwindCSS](https://img.shields.io/badge/Tailwind-4.0-38B2AC?style=for-the-badge&logo=tailwind-css)

Uma aplicação moderna construída com Next.js 16, React 19 e TypeScript.

[Demo](https://github.com/EmersonSabino34/next-new) · [Reportar Bug](https://github.com/EmersonSabino34/next-new/issues) · [Solicitar Feature](https://github.com/EmersonSabino34/next-new/issues)

</div>

---

## 📋 Índice

- [Sobre o Projeto](#-sobre-o-projeto)
- [Tecnologias](#-tecnologias)
- [Pré-requisitos](#-pré-requisitos)
- [Instalação](#-instalação)
- [Scripts Disponíveis](#-scripts-disponíveis)
- [Estrutura do Projeto](#-estrutura-do-projeto)
- [Workflow Git](#-workflow-git)
- [Contribuindo](#-contribuindo)
- [Licença](#-licença)
- [Contato](#-contato)

---

## 🎯 Sobre o Projeto

Este projeto foi desenvolvido utilizando as tecnologias mais modernas do ecossistema React, incluindo Next.js 16 com App Router, React 19 e TypeScript para garantir type-safety e melhor experiência de desenvolvimento.

### ✨ Principais Features

- ⚡ **Next.js 16** - Framework React com renderização híbrida
- 🎨 **Tailwind CSS 4** - Estilização moderna e responsiva
- 📘 **TypeScript** - Type-safety em todo o código
- 🔥 **React 19** - Última versão do React com novos recursos
- 🎯 **ESLint** - Linting configurado para Next.js
- 📱 **Responsivo** - Design adaptável para todos os dispositivos

---

## 🛠️ Tecnologias

Este projeto foi construído com as seguintes tecnologias:

- **[Next.js 16.0.0](https://nextjs.org/)** - Framework React para produção
- **[React 19.2.0](https://react.dev/)** - Biblioteca JavaScript para interfaces
- **[TypeScript 5](https://www.typescriptlang.org/)** - Superset JavaScript com tipagem
- **[Tailwind CSS 4](https://tailwindcss.com/)** - Framework CSS utility-first
- **[ESLint](https://eslint.org/)** - Ferramenta de linting para JavaScript/TypeScript

---

## 📦 Pré-requisitos

Antes de começar, você precisa ter instalado em sua máquina:

- **[Node.js](https://nodejs.org/)** (versão 18.17 ou superior)
- **[npm](https://www.npmjs.com/)** ou **[yarn](https://yarnpkg.com/)** ou **[pnpm](https://pnpm.io/)**
- **[Git](https://git-scm.com/)**

Para verificar se você tem o Node.js e npm instalados:

```bash
node --version
npm --version
```

---

## 🚀 Instalação

### 1️⃣ Clone o repositório

```bash
git clone https://github.com/EmersonSabino34/next-new.git
```

### 2️⃣ Acesse a pasta do projeto

```bash
cd next-new
```

### 3️⃣ Instale as dependências

```bash
npm install
# ou
yarn install
# ou
pnpm install
```

### 4️⃣ Inicie o servidor de desenvolvimento

```bash
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000) no seu navegador para ver o resultado.

---

## 📜 Scripts Disponíveis

No diretório do projeto, você pode executar:

### `npm run dev`

Inicia o servidor de desenvolvimento em modo watch.
- Abre em [http://localhost:3000](http://localhost:3000)
- Hot reload automático ao editar arquivos
- Ideal para desenvolvimento

### `npm run build`

Cria uma build otimizada para produção.
- Gera arquivos otimizados na pasta `.next`
- Minifica e otimiza o código
- Necessário antes do deploy

### `npm start`

Inicia o servidor de produção.
- Requer executar `npm run build` primeiro
- Serve a aplicação otimizada
- Usado em ambientes de produção

### `npm run lint`

Executa o ESLint para verificar problemas no código.
- Identifica erros e más práticas
- Ajuda a manter código limpo
- Configurado para Next.js

---

## 📁 Estrutura do Projeto

```
next-new/
├── app/                    # App Router do Next.js 16
│   ├── favicon.ico        # Ícone do site
│   ├── globals.css        # Estilos globais
│   ├── layout.tsx         # Layout raiz da aplicação
│   └── page.tsx           # Página inicial
├── public/                # Arquivos estáticos
├── .gitignore            # Arquivos ignorados pelo Git
├── eslint.config.mjs     # Configuração do ESLint
├── next.config.ts        # Configuração do Next.js
├── package.json          # Dependências e scripts
├── postcss.config.mjs    # Configuração do PostCSS
├── tsconfig.json         # Configuração do TypeScript
└── README.md             # Este arquivo
```

---

## 🔄 Workflow Git

### Primeiro Commit (Configuração Inicial)

```bash
# Inicializar repositório Git
git init

# Adicionar todos os arquivos
git add .

# Fazer o primeiro commit
git commit -m "first commit"

# Renomear branch para main
git branch -M main

# Adicionar repositório remoto
git remote add origin https://github.com/EmersonSabino34/next-new.git

# Enviar para o GitHub
git push -u origin main
```

### Commits Subsequentes

```bash
# Adicionar alterações
git add .

# Fazer commit com mensagem descritiva
git commit -m "descrição das alterações"

# Enviar para o repositório remoto
git push
```

### 💡 Boas Práticas de Commit

- Use mensagens descritivas e claras
- Comece com um verbo no imperativo (ex: "Adiciona", "Corrige", "Atualiza")
- Seja específico sobre o que foi alterado
- Exemplos:
  - ✅ `git commit -m "Adiciona componente de navegação"`
  - ✅ `git commit -m "Corrige bug no formulário de login"`
  - ❌ `git commit -m "alterações"`

---

## 🤝 Contribuindo

Contribuições são sempre bem-vindas! Se você quer contribuir com este projeto:

1. Faça um Fork do projeto
2. Crie uma Branch para sua Feature (`git checkout -b feature/MinhaFeature`)
3. Commit suas mudanças (`git commit -m 'Adiciona MinhaFeature'`)
4. Push para a Branch (`git push origin feature/MinhaFeature`)
5. Abra um Pull Request

---

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

## 👤 Contato

**Emerson Sabino**

- GitHub: [@EmersonSabino34](https://github.com/EmersonSabino34)
- Repositório: [next-new](https://github.com/EmersonSabino34/next-new)

---

<div align="center">

Feito com ❤️ por [Emerson Sabino](https://github.com/EmersonSabino34)

⭐ Se este projeto te ajudou, considere dar uma estrela!

</div>