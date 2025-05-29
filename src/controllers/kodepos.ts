import { kodepos as db } from "../db";
export default function kodepos(searchQuery: string) {
  const rows = db
    .query(
      `
      SELECT *
      FROM addresses
      WHERE
        province LIKE '%${searchQuery}%'
        OR city LIKE '%${searchQuery}%'
        OR subdistrict LIKE '%${searchQuery}%'
        OR urban LIKE '%${searchQuery}%'
        OR postalcode LIKE '%${searchQuery}%'
      `,
    )
    .all();

  return Response.json(rows, {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET",
    },
  });
}
