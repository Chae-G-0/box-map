import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import BoxListItem from "./BoxListItem";
import type { BoxEtity } from "@/types";
import type { UseInfiniteQueryResult } from "@tanstack/react-query";

type Props = {
  region: string;
  city: string;
  data: BoxEtity[][];
  fetchNextPage: UseInfiniteQueryResult<any, any>["fetchNextPage"];
  isFetchingNextPage: boolean;
};

export default function BoxList({
  region,
  city,
  data,
  fetchNextPage,
  isFetchingNextPage,
}: Props) {
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [inView]);

  return (
    <div className="no-scrollbar h-screen w-100 overflow-y-scroll">
      <div className="flex justify-between border-b px-4 py-2 text-[14px]">
        <p>
          {region} {city}
        </p>
      </div>
      <div>
        {data?.map((boxData) =>
          boxData.map((box) => {
            return <BoxListItem key={box?.id} {...box} />;
          }),
        )}
        {isFetchingNextPage && <div>로딩중</div>}
        <div ref={ref}></div>
      </div>
    </div>
  );
}
