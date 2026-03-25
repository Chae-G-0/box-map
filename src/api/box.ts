import supabase from "@/lib/supabase";

export async function fetchBoxes({
  region,
  city,
  from,
  to,
}: {
  region: string;
  city: string;
  from: number;
  to: number;
}) {
  let query = supabase.from("box").select("*");

  if (region) query = query.eq("region_id", region);

  if (city) query = query.eq("city_id", city);

  query = query.range(from, to);

  const { data, error } = await query;

  if (error) throw error;
  return data;
}
