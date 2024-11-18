import { Star, StarHalf } from "lucide-react";

const rating = ({ rate }: { rate: number }) => {
  const yellowStars = Math.floor(rate);
  const halfStar = rate - yellowStars ? 1 : 0;

  return (
    <div className="w-full">
      <div className="relative w-24 h-4">
        <div className="absolute left-0 z-10 flex gap-2">
          {[...new Array(5)].map((_, key) => (
            <Star fill="#cecece" strokeWidth={0} key={key} className="size-3" />
          ))}
        </div>
        <div className="absolute left-0 z-20 flex flex-row-reverse gap-2">
          {[...new Array(yellowStars)].map((_, key) => (
            <Star fill="yellow" strokeWidth={0} key={key} className="size-3" />
          ))}
          {halfStar ? (
            <StarHalf fill="yellow" strokeWidth={0} className="size-3" />
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default rating;
