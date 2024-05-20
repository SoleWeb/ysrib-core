"use client";
import { cn } from "@/lib/utils";
import { BrandImages } from "..";
const AnimatedEl = ({ className, ...props }: { className?: String }) => {
  return (
    <div className={cn("flex animate-move", className)} {...props}>
      {BrandImages.map((image) => (
        <div className="flex justify-center items-center min-w-[150px] snap-center">
          <span
            className="box-border inline-block overflow-hidden m-0 p-0 relative max-w-full opacity-100"
            style={{
              width: `initial`,
              height: `initial`,
              background: `none`,
              border: 0,
            }}
          >
            <span
              className="box-border block m-0 p-0 max-w-full opacity-100"
              style={{
                width: `initial`,
                height: `initial`,
                background: `none`,
                border: 0,
              }}
            >
              <img
                src={image.url}
                alt={image.alt}
                className="p-4 m-0  block max-w-full box-border border-none border-0"
                style={{
                  width: `initial`,
                  height: `initial`,
                  background: `none`,
                  border: 0,
                }}
              />
            </span>
          </span>
        </div>
      ))}
    </div>
  );
};

export const MovingCarousel = () => {
  return (
    <div className="relative flex flex-col shrink-0 box-border my-0 mx-auto max-w-screen-2xl">
      <div className="h-full relative flex w-full overflow-hidden max-w-[100vw]">
        <AnimatedEl />
        <AnimatedEl aria-hidden="true" />
      </div>
    </div>
  );
};
