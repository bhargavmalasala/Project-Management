// prisma.config.js
import 'dotenv/config'; // Loads .env variables

export default {
  datasource: {
    url: process.env.DATABASE_URL, // Required for db push/migrate
  },
};
