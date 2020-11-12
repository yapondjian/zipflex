# Código fonte - Zipflex Vtex - FrontEnd

## URLs do site

admin: <https://zipflextatix.vtexcommercestable.com.br/admin/a>


## Como rodar o projeto:

1. Instale as dependencias do projeto com abrindo o terminal e digitando o comando npm install ou yarn install. Para isso você precisa ter o [nodejs](https://nodejs.org/en/download/) e em caso da utilização do *yarn* também precisa ter instalado o [yarn](https://yarnpkg.com/en/docs/install).

2. Depois de instalado, execute o comando *yarn start* ou *npm run start*  para compilar os arquivos.

3. Faça as alterações de seus arquivos dentro da pasta src, com o comando de start rodando em seu terminal e ele irá gerar o código compilado dentro da pasta *dist*.

## Testando na Vtex:

Para testar se suas alterações estão funcionando antes de subir em produção recomendamos que teste localmente primeiro, mas como fazer isso ?

1. Use o chrome para te ajudar, abra o console e vá na aba 'Sources'.
2. Ao lado de 'Page' e 'Filesystem' no canto superior esquerdo tem uma seta, clique nela e vá na opção de Overrides, depois selecione uma pasta do seu computador pra funcionar como o overrides em seu pc.
3. Ative a opção 'Enable Local Overrides'.
4. Volte para a pasta 'page' procure seu arquivo que deseja modificiar.
5. Vá na pasta dist do seu repositorio abra o arquivo desejado em seu editor de texto.
6. Copie o código e cole no lugar do arquivo selecionado no passo 4.
7. Em caso de js atualize a página, e em caso de css ele será refletido em tempo real.
8. Após testar tudo, acesse o admin da vtex e faça o upload de seu arquivo.


### Obs:

O tempo de cache da vtex pode ir de 5 minutos a 1 hora em média.