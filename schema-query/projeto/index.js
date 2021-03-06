const { ApolloServer, gql } = require('apollo-server');

const typeDefs = gql`
  scalar Date

  type Usuario {
    id: ID
    nome: String!
    email: String!
    idade: Int
    salario: Float
    vip: Boolean
  }

  # Pontos de enttada da sua API!

  type Query {
    ola: String
    horaAtual: Date
    usuarioLogado: Usuario
  }
`;

const resolvers = {
  Usuario: {
    salario(parent) {
      return usuario.salario_real;
    },
  },
  Query: {
    ola() {
      return 'Bom dia';
    },
    horaAtual() {
      return `${new Date()}`;
    },
    usuarioLogado() {
      return {
        id: 1,
        nome: 'Ana da Web',
        email: 'anadaweb@email.com',
        idade: 23,
        salario: 1234.56,
        vip: true,
      };
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen().then(({ url }) => {
  console.log(`Executando em ${url}`);
});
