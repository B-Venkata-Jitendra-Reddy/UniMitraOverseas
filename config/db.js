const mongoose = require('mongoose');

/**
 * Singleton connection to MongoDB
 * Uses the connection string from environment variables.
 */
class Database {
  constructor() {
    this.connection = null;
  }

  async connect() {
    if (this.connection) {
      console.log('✅ Using existing MongoDB connection');
      return this.connection;
    }

    try {
      const conn = await mongoose.connect(process.env.MONGODB_URI, {
        // Mongoose 6+ no longer requires useNewUrlParser or useUnifiedTopology
        serverSelectionTimeoutMS: 5000, // fail fast if DB is unreachable
      });

      this.connection = conn;
      console.log(`✅ MongoDB Connected: ${conn.connection.host}`);

      // Optional: log collections only in development
      if (process.env.NODE_ENV !== 'production') {
        const collections = await conn.connection.db.listCollections().toArray();
        console.log(`📁 Collections: ${collections.map(c => c.name).join(', ') || 'None'}`);
      }

      this._setupEventHandlers();
      this._setupGracefulShutdown();

      return conn;
    } catch (error) {
      console.error(`❌ MongoDB Connection Error: ${error.message}`);
      process.exit(1);
    }
  }

  _setupEventHandlers() {
    mongoose.connection.on('error', (err) => {
      console.error(`❌ MongoDB Runtime Error: ${err}`);
    });
    mongoose.connection.on('disconnected', () => {
      console.warn('⚠️ MongoDB Disconnected – attempting to reconnect...');
    });
  }

  _setupGracefulShutdown() {
    const shutdown = async () => {
      await mongoose.connection.close();
      console.log('🔒 MongoDB connection closed');
      process.exit(0);
    };
    process.on('SIGINT', shutdown);
    process.on('SIGTERM', shutdown);
  }
}

module.exports = new Database();