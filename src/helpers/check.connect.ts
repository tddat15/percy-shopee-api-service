import mongoose from 'mongoose';
import * as os from 'os';
import * as process from 'process';

const _SECOND = 5000;
export class HealthCheck {
  constructor() {}

  //count connect
  public countConnect(): number {
    const numberConnection = mongoose.connections.length;
    console.log(`Number of connections::${numberConnection}`);
    return numberConnection;
  }

  //check over load
  public async checkOverLoad() {
    setInterval(() => {
      const numberConnection = this.countConnect();
      const numCores = os.cpus();
      const memoryUsage = process.memoryUsage().rss;
      // Example maximum number of connections based on number osf cores
      const maxConnection = numCores.length * 5;

      console.log(`Active connections:${numberConnection} `);
      console.log(`Memory usage:: ${memoryUsage / 1024 / 1024} MB`);

      if (numberConnection > maxConnection) {
        console.log(`Connection overload detected!`);

        //notify.send() for team know about connection reach max number
      }
    }, _SECOND);
  }
}
