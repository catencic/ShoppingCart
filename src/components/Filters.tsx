import { useContext } from "react"
import { Button, Form } from "react-bootstrap"
import { CartContext } from "../context/cartContext";

import { Rating } from "./Rating";


export const Filters = () => {

   

    const {filtersState: {byStock, byFastDelivery , byRating , sort} ,dispatchFilters } = useContext(CartContext);
    


  return (
    <div className="filters">
    <span className="title">Filter Products</span>
    <span>
      <Form.Check
        inline
        label="Ascending"
        name="group1"
        type="radio"
        id={`inline-1`}
        onChange={() => dispatchFilters({
            type: 'sortByPrice',
            payload: 'lowToHigh'
        })}
        checked={sort === 'lowToHigh' ? true : false}
      />
    </span>
    <span>
      <Form.Check
        inline
        label="Descending"
        name="group1"
        type="radio"
        id={`inline-2`}
        onChange={() => dispatchFilters({
            type: 'sortByPrice',
            payload: 'lowToLow'
        })}
        checked={sort === 'lowToLow' ? true : false}
      />
    </span>
    <span>
      <Form.Check
        inline
        label="Include Out of Stock"
        name="group1"
        type="checkbox"
        id={`inline-3`}
        onChange={() => dispatchFilters({
            type: 'filterByStock',
        })}
        checked={byStock}
      />
    </span>
    <span>
      <Form.Check
        inline
        label="Fast Delivery Only"
        name="group1"
        type="checkbox"
        id={`inline-4`}
        onChange={() => dispatchFilters({
            type: 'filterByDelivery',
        })}
        checked={byFastDelivery}
        />
    </span>
    <span>
      <label style={{ paddingRight: 10 }}>Rating: </label>
      <Rating
        rating={byRating}
        style={{ cursor: "pointer" }}
        onClick={(i)=> dispatchFilters({
            type: 'filterByRating',
            payload: i + 1,
        })}
      />
    </span>
    <Button
      variant="light"
      onClick={() => dispatchFilters({
        type: 'clearFilters',
    })}
    >
      Clear Filters
    </Button>
  </div>
  )
}
