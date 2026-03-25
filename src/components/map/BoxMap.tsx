import { useParams } from "react-router-dom";
import { Map } from "react-kakao-maps-sdk";
import useInfiniteBoxesData from "@/hooks/queries/useInfiniteBoxesData";
import BoxMarker from "./BoxMarker";
import BoxList from "../boxList/BoxList";

export default function BoxMap() {
  const { region, city } = useParams();
  const {
    data,
    error,
    isPending: isBoxDataPending,
    fetchNextPage,
    isFetchingNextPage,
  } = useInfiniteBoxesData(region!, city!);

  if (error) return <div>에러가 발생했습니다.</div>;
  if (isBoxDataPending) return <div>로딩중</div>;

  const initLat = data?.pages?.[0]?.[0]?.lat || 0;
  const initLng = data?.pages?.[0]?.[0]?.lng || 0;
  const korRegion = data?.pages?.[0]?.[0]?.region;
  const korCity = data?.pages?.[0]?.[0]?.city;

  return (
    <div className="flex items-center justify-center">
      <BoxList
        region={korRegion ?? ""}
        city={korCity ?? ""}
        data={data?.pages}
        fetchNextPage={fetchNextPage}
        isFetchingNextPage={isFetchingNextPage}
      />
      <Map
        center={{ lat: initLat, lng: initLng }}
        style={{ width: "100%", height: "100vh" }}
        level={6}
        isPanto
      >
        {data?.pages?.map((boxes) =>
          boxes?.map((box) => {
            return <BoxMarker key={box.id} lat={box.lat} lng={box.lng} />;
          }),
        )}
      </Map>
    </div>
  );
}
