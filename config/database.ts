export default ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'ec2-44-199-143-43.compute-1.amazonaws.com'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'd22ontfpdcppt4'),
      user: env('DATABASE_USERNAME', 'muyqkmpxhparnv'),
      password: env('DATABASE_PASSWORD', 'fb52e49291f1ebef591c9e2a894d5468171179d358ce99d0ab5a879464d43111'),
      ssl: env.bool('DATABASE_SSL', true),
    },
  },
});
