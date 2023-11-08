import CardSkeleton from "./Cardskeleton";


const CardSkeletonList = () => {
  const loadCards = Array(9).fill(1);

  return loadCards.map((_, i) => <CardSkeleton key={i} />);
};

export default CardSkeletonList;
