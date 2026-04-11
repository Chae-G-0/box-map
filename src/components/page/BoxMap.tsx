import { useEffect, useRef } from "react";
import { useSearchParams } from "react-router-dom";
import useResponsive from "@/hooks/useResponsive";
import { Map } from "react-kakao-maps-sdk";
import {
  useSetCenter,
  useSelectedBoxState,
  useCenterReset,
} from "@/store/useBoxStore";
import useInfiniteBoxesData from "@/hooks/queries/useInfiniteBoxesData";
import BoxMarker from "../map/BoxMarker";
import BoxList from "../map/BoxList";
import BottomSheetContainer from "../bottomSheet/BottomSheetContainer";
import GlobalLoader from "../GlobalLoader";

export default function BoxMap() {
  const { isPc } = useResponsive();
  const mapRef = useRef<kakao.maps.Map>(null);

  const [searchParams] = useSearchParams();
  const searchKeyword = searchParams.get("q") || "";
  const region = searchParams.get("region") || "";
  const city = searchParams.get("city") || "";
  const {
    data,
    error,
    isFetched,
    isPending: isBoxDataPending,
    fetchNextPage,
    isFetchingNextPage,
  } = useInfiniteBoxesData(region, city, searchKeyword);

  const { center } = useSelectedBoxState();
  const setCenter = useSetCenter();
  const centerReset = useCenterReset();

  const flatBoxData = data?.pages?.flatMap((page) => page) ?? [];
  const korRegion = flatBoxData[0]?.region;
  const korCity = flatBoxData[0]?.city;

  useEffect(() => {
    centerReset();
  }, [region, searchKeyword]);

  useEffect(() => {
    if (isFetched && flatBoxData.length > 0) {
      setCenter({
        lat: flatBoxData[0]?.lat,
        lng: flatBoxData[0]?.lng,
      });
    }
  }, [isFetched]);

  if (error) return <div>에러가 발생했습니다.</div>;
  if (isBoxDataPending) return <GlobalLoader />;
  if (!center) return null;

  return (
    <div
      className={`${isPc && `flex`} relative h-screen w-screen items-center justify-center`}
    >
      <Map
        ref={mapRef}
        center={{ lat: center?.lat, lng: center?.lng }}
        style={{ width: "100%", height: "100%" }}
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
      {isPc ? (
        <BoxList
          region={korRegion ?? ""}
          city={korCity ?? ""}
          searchKeyword={searchKeyword}
          data={data?.pages}
          fetchNextPage={fetchNextPage}
          isFetchingNextPage={isFetchingNextPage}
        />
      ) : (
        <BottomSheetContainer>
          <BoxList
            region={korRegion ?? ""}
            city={korCity ?? ""}
            searchKeyword={searchKeyword}
            data={data?.pages}
            fetchNextPage={fetchNextPage}
            isFetchingNextPage={isFetchingNextPage}
          />
        </BottomSheetContainer>
      )}
    </div>
  );
}
