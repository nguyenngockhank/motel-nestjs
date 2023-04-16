export interface AppConfiguration {
  nedb: {
    motelPath: string;
  };
}

export default (): AppConfiguration => ({
  nedb: {
    get motelPath(): string {
      return process.env.NEDB_MOTEL_PATH || 'storage/motel.db';
    },
  },
});
