
import { AiFillStar, AiOutlineStar } from 'react-icons/ai'


interface RatingProps {
    rating: number;
    onClick: (value: number) => void;
    style?: {};
}

export const Rating = ({rating , onClick , style} : RatingProps) => {
  return (
    <>
    {[...Array(5)].map((_, i) => (
        <span key={i} onClick={() => onClick(i)} style={style}>
          {rating > i ? (
            <AiFillStar fontSize="15px" />
          ) : (
            <AiOutlineStar fontSize="15px" />
          )}
        </span>
      ))}
    
    
    </>
  )
}
