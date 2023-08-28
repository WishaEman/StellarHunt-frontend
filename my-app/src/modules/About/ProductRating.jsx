import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';

function ProductRating() {

  return (
    <div>
      <Rating
        name="hover-feedback"
        precision={1}
        defaultValue={2.5}
        emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
      />
    </div>
  );
}

export default ProductRating;
