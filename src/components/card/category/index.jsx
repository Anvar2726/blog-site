import PropTypes from "prop-types";


import "./style.scss";
import { useNavigate } from "react-router-dom";
import imgURL from "../../../utils/getImgUrl";

const CategoryCard = ({ name, description, _id, photo }) => {
  const navigate = useNavigate();
  const handleCategory = (id) => {
    navigate(`/category/${id}`);
  };
  return (
    <div onClick={() => handleCategory(_id)} className="category-card">
      <img
        className="category-card__img"
        src={imgURL(photo)}
        alt={name}
        width={60}
        height={60}
        onError={({ currentTarget }) => {
          
          currentTarget.src = "/nophoto.png"
        }}
      />
      <h1 className="category-card__title">{name}</h1>
      <p className="category-card__text">{description}</p>
    </div>
  );
};

CategoryCard.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  _id: PropTypes.string.isRequired,
  photo: PropTypes.object.isRequired,
};

export default CategoryCard;
