import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import useResponsive from "@/hooks/useResponsive";
import BoxListItem from "./BoxListItem";
import type { BoxEtity } from "@/types";
import type { UseInfiniteQueryResult } from "@tanstack/react-query";

type Props = {
  region: string;
  city: string;
  searchKeyword: string;
  data: BoxEtity[][];
  fetchNextPage: UseInfiniteQueryResult<any, any>["fetchNextPage"];
  isFetchingNextPage: boolean;
};

export default function BoxList({
  region,
  city,
  searchKeyword,
  data,
  fetchNextPage,
  isFetchingNextPage,
}: Props) {
  const { ref, inView } = useInView();
  const { isPc } = useResponsive();

  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [inView]);

  return (
    <div
      className={`${isPc ? `h-screen w-100` : `h-[calc(80dvh-40px)] w-full`} no-scrollbar overflow-y-auto overscroll-contain bg-white`}
    >
      <div className="flex justify-between border-b px-4 py-2 text-[14px]">
        <p>
          {searchKeyword ? `${searchKeyword} 검색결과` : `${region} ${city}`}
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
