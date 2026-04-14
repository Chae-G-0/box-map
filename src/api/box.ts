import supabase from "@/lib/supabase";

export async function fetchBoxes({
  region,
  city,
  from,
  to,
  searchKeyword,
  userId,
}: {
  region?: string;
  city?: string;
  from: number;
  to: number;
  searchKeyword?: string;
  userId?: string;
}) {
  if (userId) {
    let query = supabase
      .from("box")
      .select(`*, myBookmark: bookmark!box_id (*)`)
      .eq("bookmark.user_id", userId);

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

    return data.map((box) => ({
      ...box,
      isBookmark: box.myBookmark && box.myBookmark.length > 0,
    }));
  } else {
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

    return data.map((box) => ({ ...box, isBookmark: false }));
  }
}

export async function toggleBoxBookmark({
  boxId,
  userId,
}: {
  boxId: string;
  userId: string;
}) {
  const { data, error } = await supabase.rpc("toggle_box_bookmark", {
    p_box_id: boxId,
    p_user_id: userId,
  });

  if (error) throw error;
  return data;
}
