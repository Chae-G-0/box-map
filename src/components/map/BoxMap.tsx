import { useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { Map } from "react-kakao-maps-sdk";
import {
  useSetCenter,
  useSelectedBoxState,
  useCenterReset,
} from "@/store/useBoxStore";
import useInfiniteBoxesData from "@/hooks/queries/useInfiniteBoxesData";
import BoxMarker from "./BoxMarker";
import BoxList from "../boxList/BoxList";

export default function BoxMap() {
  const { region, city } = useParams();
  const mapRef = useRef<kakao.maps.Map>(null);
  const isInitialSet = useRef(false);
  const {
    data,
    error,
    isFetched,
    isPending: isBoxDataPending,
    fetchNextPage,
    isFetchingNextPage,
  } = useInfiniteBoxesData(region!, city!);
  const { center } = useSelectedBoxState();
  const setCenter = useSetCenter();
  const centerReset = useCenterReset();

  const flatBoxData = data?.pages?.flatMap((page) => page) ?? [];
  const korRegion = flatBoxData[0]?.region;
  const korCity = flatBoxData[0]?.city;

  useEffect(() => {
    centerReset();
  }, [region]);

  useEffect(() => {
    if (isFetched && flatBoxData.length > 0 && !isInitialSet.current) {
      setCenter({
        lat: flatBoxData[0]?.lat,
        lng: flatBoxData[0]?.lng,
      });

      isInitialSet.current = true;
    }
  }, [isFetched]);

  if (error) return <div>에러가 발생했습니다.</div>;
  if (isBoxDataPending) return <div>로딩중</div>;
  if (!center) return null;

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
        ref={mapRef}
        center={{ lat: center?.lat, lng: center?.lng }}
        style={{ width: "100%", height: "100vh" }}
        level={3}
        isPanto
      >
        {data?.pages?.map((boxes) =>
          boxes?.map((box) => {
            return (
              <BoxMarker
                key={box.id}
                lat={box.lat}
                lng={box.lng}
                boxName={box.name}
              />
            );
          }),
        )}
      </Map>
    </div>
  );
}
