// import {
//   Inject,
//   Injectable,
//   OnModuleDestroy,
//   OnModuleInit,
// } from '@nestjs/common';
// import { Db, MongoClient } from 'mongodb';
// import { DatabaseConfig } from '../../config';
// import mongoose from 'mongoose';
//
// @Injectable()
// export class MongodbService implements OnModuleInit, OnModuleDestroy {
//   private readonly config: DatabaseConfig;
//   private client: MongoClient;
//   private db: Db;
//
//   constructor(@Inject(DatabaseConfig) config: DatabaseConfig) {
//     mongoose.set('debug', true);
//     mongoose.set('debug', { color: true });
//     this.config = config;
//   }
//
//   async onModuleInit() {
//     // Initialize the MongoDB connection when the module is initialized
//     await this.connect(this.config.mongodbUri, this.config.mongodbName);
//   }
//
//   async onModuleDestroy() {
//     // Close the MongoDB connection when the module is destroyed
//     this.closeConnection();
//   }
//
//   async connect(uri: string, dbName: string): Promise<void> {
//     try {
//       this.client = new MongoClient(uri);
//       await this.client.connect();
//       this.db = this.client.db(dbName);
//       console.log(`Mongodb Connected Successful Dev at ${dbName}`);
//     } catch (error) {
//       console.error('Error connecting to MongoDB:', error.message);
//       throw error;
//     }
//   }
//
//   getDb(): Db {
//     return this.db;
//   }
//
//   closeConnection(): void {
//     if (this.client) {
//       this.client.close();
//       console.log('MongoDB connection closed.');
//     }
//   }
// }
