# Next Meetups 🚀

Uma aplicação moderna para agendar e organizar seus meetups com amigos! Desenvolvida com Next.js e integrada com MongoDB Atlas.

<img src='https://branditechture.agency/brand-logos/wp-content/uploads/wpdm-cache/Next.js-900x0.png' alt='Next logo' width='200'>

## 📋 Sobre o Projeto

Este é um projeto prático desenvolvido com Next.js que demonstra funcionalidades avançadas como:

-   **Páginas dinâmicas** com roteamento automático
-   **Data pre-rendering** (SSG e SSR)
-   **Next.js Router** para navegação
-   **API Routes** para backend
-   **Integração com MongoDB Atlas** para persistência de dados

## 🛠️ Tecnologias Utilizadas

-   **Next.js 14** - Framework React
-   **React 18** - Biblioteca JavaScript
-   **MongoDB** - Banco de dados NoSQL
-   **CSS Modules** - Estilização com escopo local
-   **Node.js 22+** - Runtime JavaScript

## 📦 Pré-requisitos

Antes de começar, certifique-se de ter instalado:

-   **Node.js** (versão 22.0.0 ou superior)
-   **npm** ou **yarn**
-   Conta no **MongoDB Atlas** (para banco de dados)

## 🚀 Instalação e Configuração

### 1. Clone o repositório

```bash
git clone https://github.com/rodhis/next-meetups.git
cd next-meetups
```

### 2. Instale as dependências

```bash
npm install
# ou
yarn install
```

### 3. Configure as variáveis de ambiente

Crie um arquivo `.env.local` na raiz do projeto:

```env
MONGODB_URI=mongodb+srv://seu-usuario:sua-senha@cluster.mongodb.net/meetups?retryWrites=true&w=majority
```

**Como obter a string de conexão do MongoDB:**

1. Acesse [MongoDB Atlas](https://cloud.mongodb.com/)
2. Crie uma conta e um cluster gratuito
3. Vá em "Connect" > "Connect your application"
4. Copie a string de conexão e substitua `<password>` pela sua senha

### 4. Execute a aplicação

```bash
npm run dev
# ou
yarn dev
```

A aplicação estará disponível em [http://localhost:3000](http://localhost:3000)

## 📖 Como Usar

### Visualizar Meetups

-   Acesse a página inicial para ver todos os meetups cadastrados
-   Clique em "Show Details" para ver detalhes específicos de um meetup

### Criar Novo Meetup

1. Navegue para `/new-meetup` ou clique em "Add New Meetup"
2. Preencha o formulário com:
    - **Título**: Nome do meetup
    - **Imagem**: URL de uma imagem para o meetup
    - **Endereço**: Local onde será realizado
    - **Descrição**: Detalhes sobre o evento
3. Clique em "Add Meetup" para salvar

### Navegação

-   **Página Inicial** (`/`): Lista de todos os meetups
-   **Novo Meetup** (`/new-meetup`): Formulário para criar meetup
-   **Detalhes** (`/[meetupId]`): Página de detalhes específicos

## 🏗️ Scripts Disponíveis

```bash
# Executa em modo de desenvolvimento
npm run dev

# Cria build de produção
npm run build

# Executa em modo de produção
npm run start

# Executa o linter
npm run lint
```

## 📁 Estrutura do Projeto

```
├── components/           # Componentes React reutilizáveis
│   ├── layout/          # Componentes de layout
│   ├── meetups/         # Componentes específicos de meetups
│   └── ui/              # Componentes de interface
├── pages/               # Páginas e rotas da aplicação
│   ├── api/             # API Routes do Next.js
│   ├── [meetupId]/      # Páginas dinâmicas
│   └── new-meetup/      # Página de criação
├── public/              # Arquivos estáticos
└── styles/              # Estilos globais
```

## 🌐 Deploy

### Vercel (Recomendado)

1. Conecte seu repositório ao [Vercel](https://vercel.com)
2. Configure a variável `MONGODB_URI` nas configurações do projeto
3. O deploy será automático a cada push

### Outros provedores

Certifique-se de:

-   Configurar a variável de ambiente `MONGODB_URI`
-   Usar Node.js 22+ como runtime
-   Executar `npm run build` antes do deploy

## 🤝 Contribuição

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova feature'`)
4. Push para a branch (`git push origin feature/nova-feature`)
5. Abra um Pull Request

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.

## 📞 Suporte

Se encontrar algum problema ou tiver dúvidas:

-   Abra uma [issue](https://github.com/rodhis/next-meetups/issues)
-   Entre em contato através do GitHub

---

Desenvolvido com ❤️ usando Next.js
