import React from "react";
import "../../css/loader.css";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function LoaderComp({ height, width, repeat }) {
  const repeatData = Array(repeat).fill(0);

  return (
    <>
      {repeatData.map(() => (
        <div
          // onClick={productQuickViewDisplayhandler}
          class="bg-white rounded-lg overflow-hidden shadow-lg ring-4 ring-red-500 ring-opacity-40 max-w-sm cursor-pointer"
          style={{ minHeight: "32rem" }}
        >
          <SkeletonTheme baseColor="gray" highlightColor="#444">
            <div class="relative">
              <Skeleton count={1} height={"28rem"} />
            </div>
            <div>
              <Skeleton count={3} height={30} />
            </div>
          </SkeletonTheme>
        </div>
      ))}
    </>
  );
}
