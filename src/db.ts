import { Database } from "bun:sqlite";
export const kodepos = new Database("kodepos.sqlite");
export const sekolah = new Database("sekolah.sqlite");
