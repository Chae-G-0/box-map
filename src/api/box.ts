import supabase from "@/lib/supabase";

export async function fetchBoxes({
  region,
  city,
  from,
  to,
  searchKeyword,
}: {
  region?: string;
  city?: string;
  from: number;
  to: number;
  searchKeyword?: string;
}) {
  let query = supabase.from("box").select("*");

  if (region) query = query.eq("region_id", region);

  if (city) query = query.eq("city_id", city);

  if (searchKeyword) {
    query = query.or(
      `name.ilike.%${searchKeyword}%,region.ilike.%${searchKeyword}%,city.ilike.%${searchKeyword}%`,
    );
  }

  query = query.range(from, to);

  const { data, error } = await query;

  if (error) throw error;
  return data;
}
