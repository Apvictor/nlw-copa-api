# Iniciar projeto

> npm init -y

### Usando TS

> npm i typescript -D

### Setup TS

> npx tsc --init

### Install Framework Backend

> npm i fastify

### Node compila TS

> npm i tsx -D
>
> **CONFIG: add em package.json (scripts) -> "dev": "tsx watch src/server.ts"**

### Cors

> npm i @fastify/cors

### Zod (Validações)

> npm i zod

### Short-unique-id

> npm i short-unique-id

### JWT

> npm i @fastify/jwt

# Comandos Prisma

### ORM bancos Prisma

> npm i prisma -D

---

> npm i @prisma/client

### Prisma Banco de dados

> npx prisma init --datasource-provider SQLite

### Run migrate

> npx prisma migrate dev

### Ver base de dados

> npx prisma studio

### Setup gerar Entidade Relacionamento do Banco ERD

> npm i prisma-erd-generator @mermaid-js/mermaid-cli -D
>
> CONFIG: add em schema.prisma -> generator erd {provider = "prisma-erd-generator"}

### Criar Entidade Relacionamento

> npx prisma generate
