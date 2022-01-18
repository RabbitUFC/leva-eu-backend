# LevaEu - Backend

## Sobre
### Nós somos um grupo de estudantes da [Universidade Federal do Ceará](https://www.ufc.br/)
### Conheça os membros do nosso time:
<table>
  <tr>
    <td align="center">
      <a target="_blank" href="https://www.linkedin.com/in/arthur-anderson-2328ab201/">
        <img src="https://pps.whatsapp.net/v/t61.24694-24/219342397_2105549836274437_1435454248764216795_n.jpg?ccb=11-4&oh=c8fe577e5c81c7bafce3658a4679dc5d&oe=61E450C7"
          style="object-fit: cover; min-width: 75px; min-height: 75px" /><br/>
        <sub><b>Arthur Anderson [494828]</b></sub>
      </a><br/>
     </td>
     <td align="center">
      <a target="_blank" href="https://www.linkedin.com/in/cainan-matheus-coelho-464988209/">
        <img src="https://pps.whatsapp.net/v/t61.24694-24/170203380_199410605024521_990128832251816207_n.jpg?ccb=11-4&oh=01_AVwgle9fxGly8Ti06K1D6nWWigLsbyblu-iGIpZYgecJqw&oe=61E46090" style="object-fit: cover; min-width: 75px; min-height: 75px" /><br/>
        <sub><b>Cainan Matheus [494795]</b></sub>
      </a><br/>
     </td>
     <td align="center">
      <a target="_blank" href="https://www.linkedin.com/in/eric-ian-noronha-junqueira-bb40091a7/">
        <img src="https://pps.whatsapp.net/v/t61.24694-24/118121396_4820681414616487_6128499254549711151_n.jpg?ccb=11-4&oh=01_AVy8J1Jn5wOzl1ADSk4DWowMQr7VeEIPEZspdsOXPvyJ-g&oe=61E3405B" style="object-fit: cover; min-width: 75px; min-height: 75px" /><br/>
        <sub><b>Eric Ian Noronha [493698]</b></sub>
      </a><br/>
     </td>
     <td align="center">
      <a target="_blank" href="https://www.linkedin.com/in/joaovictorfreitas/">
        <img src="https://pps.whatsapp.net/v/t61.24694-24/206839049_283220749997671_2520275226822973404_n.jpg?ccb=11-4&oh=9546433c7ffd552c1e7b57f213aad367&oe=61E342CC" style="object-fit: cover; min-width: 75px; min-height: 75px" /><br/>
        <sub><b>João V. Freitas [493832]</b></sub>
      </a><br/>
     </td>
     <td align="center">
      <a target="_blank" href="https://www.linkedin.com/in/jordy-muniz-b34072117/">
        <img src="https://pps.whatsapp.net/v/t61.24694-24/227294886_1956698397827733_582205399039699056_n.jpg?ccb=11-4&oh=dd5d21579b28b474824b91ae9bc049e3&oe=61E41672" style="object-fit: cover; min-width: 75px; min-height: 75px" /><br/>
        <sub><b>Jordy Muniz Araújo [500872]</b></sub>
      </a><br/>
     </td>
  </tr>
</table>

## Links
[Postman - API](https://www.postman.com/winter-resonance-1974/workspace/levaeu/request/6751126-d541ad76-5f19-4d4d-bfab-83355e33795d)<br>
[Trello](https://trello.com/b/RcivNDqd/levaeu)<br>
[API url base](https://s7mjf3rnvf.execute-api.us-east-1.amazonaws.com/dev)

## Mapa de funcionalidades
<!-- <style type="text/css">
.tg  {border-collapse:collapse;border-spacing:0;}
.tg td{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;
  overflow:hidden;padding:10px 5px;word-break:normal;}
.tg th{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;
  font-weight:normal;overflow:hidden;padding:10px 5px;word-break:normal;}
.tg .tg-c3ow{border-color:inherit;text-align:center;vertical-align:top}
.tg .tg-0pky{border-color:inherit;text-align:left;vertical-align:top}
.tg .tg-0lax{text-align:left;vertical-align:top}
</style> -->
<table class="tg" style="table-layout: fixed; width: 1009px">
  <colgroup>
  <col style="width: 325px">
  <col style="width: 454px">
  <col style="width: 230px">
  </colgroup>
  <thead>
    <tr>
      <th class="tg-c3ow"><span style="text-align: center; font-weight:bold">Requisitos Funcionais Fundamentais</span></th>
      <th class="tg-c3ow"><span style="text-align: center; font-weight:bold">Descrição</span></th>
      <th class="tg-c3ow"><span style="text-align: center; font-weight:bold">Codificação</span></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="tg-0pky"><span style="font-weight:bold">RF0001 -</span> Cadastrar conta</td>
      <td class="tg-c3ow" style="text-align: center;">O usuário pode se cadastrar fornecendo algumas informações básicas</td>
      <td class="tg-c3ow" style="text-align: center;"><a target="_blank" href="https://github.com/RabbitUFC/leva-eu-backend/blob/develop/src/controllers/users.js#L10" target="_blank" rel="noopener noreferrer">código</a></td>
    </tr>
    <tr>
      <td class="tg-0pky"><span style="font-weight:bold">RF0002 - </span>Autenticar conta</td>
      <td class="tg-0pky" style="text-align: center;">O usuário pode fazer login usando o email e senha e receberá um token de autenticação</td>
      <td class="tg-c3ow" style="text-align: center;"><a target="_blank" href="https://github.com/RabbitUFC/leva-eu-backend/blob/develop/src/controllers/auth.js#L7" target="_blank" rel="noopener noreferrer">código</a></td>
    </tr>
    <tr>
      <td class="tg-0pky"><span style="font-weight:bold">RF0003 - </span><span style="font-weight:normal">Recuperar senha</span></td>
      <td class="tg-0pky" style="text-align: center;">O usuário receberá um email com um link de alteração de senha</td>
      <td class="tg-c3ow" style="text-align: center;">-</td>
    </tr>
    <tr>
      <td class="tg-0lax"><span style="font-weight:bold">RF0004 -</span> Ver caronas disponíveis</td>
      <td class="tg-0lax" style="text-align: center;">O usuário pode ver as caronas disponíveis do dia</td>
      <td class="tg-c3ow" style="text-align: center;">-</td>
    </tr>
    <tr>
      <td class="tg-0lax"><span style="font-weight:bold">RF0005 -</span> Ver caronas anteriores</td>
      <td class="tg-0lax" style="text-align: center;">O usuário pode ver as caronas passadas</td>
      <td class="tg-0lax" style="text-align: center;">-</td>
    </tr>
    <tr>
      <td class="tg-0lax"><span style="font-weight:bold">RF0006 -</span> Ver rotinas disponíveis</td>
      <td class="tg-0lax" style="text-align: center;">O usuário pode listar as suas rotinas</td>
      <td class="tg-c3ow" style="text-align: center;"><a target="_blank" href="https://github.com/RabbitUFC/leva-eu-backend/blob/develop/src/controllers/routines.js" target="_blank" rel="noopener noreferrer">código</a></td>
    </tr>
    <tr>
      <td class="tg-0lax"><span style="font-weight:bold">RF0007 -</span> Cadastrar carona</td>
      <td class="tg-0lax" style="text-align: center;">O usuário motorista pode cadastrar caronas avulsas à uma rotina</td>
      <td class="tg-0lax" style="text-align: center;">-</td>
    </tr>
    <tr>
      <td class="tg-0lax"><span style="font-weight:bold">RF0008 -</span> Criar rotina de caronas</td>
      <td class="tg-0lax" style="text-align: center;">O usuário pode criar rotinas de caronas que criam as caronas automaticamente todos os dias</td>
      <td class="tg-c3ow" style="text-align: center;"><a target="_blank" href="https://github.com/RabbitUFC/leva-eu-backend/blob/develop/src/controllers/routines.js" target="_blank" rel="noopener noreferrer">código</a></td>
    </tr>
    <tr>
      <td class="tg-0lax"><span style="font-weight:bold">RF0009 -</span> Solicitar vaga em carona</td>
      <td class="tg-0lax" style="text-align: center;">O usuário passageiro pode solicitar para participar numa carona</td>
      <td class="tg-0lax" style="text-align: center;">-</td>
    </tr>
    <tr>
      <td class="tg-0lax"><span style="font-weight:bold">RF00010 -</span> Contatar usuário</td>
      <td class="tg-0lax" style="text-align: center;">-</td>
      <td class="tg-0lax" style="text-align: center;">-</td>
    </tr>
    <tr>
      <td class="tg-0lax"><span style="font-weight:bold">RF00011 -</span> Acompanhar trajeto</td>
      <td class="tg-0lax" style="text-align: center;">-</td>
      <td class="tg-0lax" style="text-align: center;">-</td>
    </tr>
    <tr>
      <td class="tg-0lax"><span style="font-weight:bold">RF00012 -</span> Avaliar usuário</td>
      <td class="tg-0lax" style="text-align: center;">Os usuários podem se avaliar</td>
      <td class="tg-0lax" style="text-align: center;">-</td>
    </tr>
    <tr>
      <td class="tg-0lax"><span style="font-weight:bold">RF00013 -</span> Acessar funções de segurança</td>
      <td class="tg-0lax" style="text-align: center;">Os usuários podem configurar as opções de segurança da sua conta</td>
      <td class="tg-0lax" style="text-align: center;">-</td>
    </tr>
    <tr>
      <td class="tg-0lax"><span style="font-weight:bold">RF00014 -</span> Configurar preferências</td>
      <td class="tg-0lax" style="text-align: center;">-</td>
      <td class="tg-0lax" style="text-align: center;">-</td>
    </tr>
    <tr>
      <td class="tg-0lax"><span style="font-weight:bold">RF00015 -</span> Editar perfil</td>
      <td class="tg-0lax" style="text-align: center;">O usuário pode editar as informações da sua conta, exceto a matrícula</td>
      <td class="tg-c3ow" style="text-align: center;"><a target="_blank" href="https://github.com/RabbitUFC/leva-eu-backend/blob/develop/src/controllers/users.js#L107" target="_blank" rel="noopener noreferrer">código</a></td>
    </tr>
    <tr>
      <td class="tg-0lax"><span style="font-weight:bold">RF00016 -</span> Filtrar caronas</td>
      <td class="tg-0lax" style="text-align: center;">O usuário pode buscar caronas com filtros, como bairro, pontos de encontro, horário</td>
      <td class="tg-0lax" style="text-align: center;">-</td>
    </tr>
    <tr>
      <td class="tg-0lax"><span style="font-weight:bold">RF00017 -</span> Bairros</td>
      <td class="tg-0lax" style="text-align: center;">A administração pode cadastrar os bairros da cidade, para que os usuários usem nas caronas e rotinas</td>
      <td class="tg-0lax" style="text-align: center;"><a target="_blank" href="https://github.com/RabbitUFC/leva-eu-backend/blob/develop/src/controllers/districts.js" target="_blank" rel="noopener noreferrer">código</a></td>
    </tr>
    <tr>
      <td class="tg-0lax"><span style="font-weight:bold">RF00018 -</span> Pontos de encontro</td>
      <td class="tg-0lax" style="text-align: center;">A administração pode cadastrar os principais pontos de encontro da cidade, para que os usuários usem nas caronas e rotinas</td>
      <td class="tg-0lax" style="text-align: center;"><a target="_blank" href="https://github.com/RabbitUFC/leva-eu-backend/blob/develop/src/controllers/pickup-points.js" target="_blank" rel="noopener noreferrer">código</a></td>
    </tr>
  </tbody>
</table>

## Documentação
### Testar a API
1. Abra o link do Postman;
2. Crie uma conta ou logue;
3. Selecione `cloud env` em `Enviroments`. Você pode encontrar essa opção no lado esquerdo da tela ou no canto superior direito;
4. Teste as rotas :)

### Rodar o projeto localmente
1. Baixe esse repositório;
2. Entre na pasta do projeto;
3. Rode o comando `yarn` para instalar as depedências;
4. Rode o comando `yarn dev`;
5. O projeto vai estar disponível na url: `http://localhost:3000/dev`

### Deploy o projeto para a AWS 
1. Você deve ter o aws CLI instalado globalmente em sua máquina e pelo menos um perfil. Vamos chamá-lo de perfil aws por `minha-conta`;
2. Abra o `package.json` e encontre a seção de scripts;
3. Encontre a opção `--aws-profile` no script de implantação;
4. Altere `rabbit` para `minha-conta`;
5. No terminal, execute `yarn deploy`

## Linguagens e Ferramentas
<p align="left">
  <a href="https://nodejs.org" target="_blank" rel="noreferrer" style="margin-right: 15px;">
    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="nodejs" width="40" height="40" />
  </a>
  <a href="https://expressjs.com" target="_blank" rel="noreferrer" style="margin-right: 15px;">
    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg" alt="express" width="40" height="40" />
  </a>
  <a href="https://www.mongodb.com/" target="_blank" rel="noreferrer" style="margin-right: 15px;">
    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg" alt="mongodb" width="40" height="40" />
  </a>
  <a href="https://aws.amazon.com" target="_blank" rel="noreferrer" style="margin-right: 15px;">
    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" alt="aws" width="40" height="40"     />
  </a>
</p>
