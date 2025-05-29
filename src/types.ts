export type Kodepos = {
  id?: string | string;
  province?: string;
  city?: string; // deprecated
  regency?: string;
  subdistrict?: string; // deprecated
  district?: string;
  urban?: string; // deprecated
  village?: string;
  postalcode?: number; // deprecated
  code?: number;
};

export type Sekolah = {
  id?: number | string;
  nama?: string;
  status?: string;
  npsn?: string;
  alamat?: string;
};
