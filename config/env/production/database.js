module.exports = ({ env }) => ({
    connection: {
      client: 'postgres',
      connection: {
        host: env('PGHOST', 'db.gzjqytpxxwxlmxppdhxz.supabase.co'),
        port: env.int('PGPORT', 5432),
        database: env('PGDATABASE', 'postgres'),
        user: env('PGUSER', 'postgres'),
        password: env('PGPASSWORD', '58CM!4PR3Qpfcmh'),
        ssl: env.bool(true),
      },
    },
  });
  