# especifica versao de sistema operacional base
FROM node:20-alpine

# define a pasta onde o codigo vai ser executado
WORKDIR /app

# copia os arquivos package.json e package-lock.json para a pasta /app
COPY package*.json ./

# instala as depedencias
RUN npm install

# copia o resto do codigo para a pasta /app
COPY . .

# informar a porta 8080
EXPOSE 3000

#comando para rodar a aplicacao em modo de desenvolvimento
CMD ["npm", "run", "dev"]
