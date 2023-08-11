import {NavDropdown} from "react-bootstrap";
import useSubcategories from "./Services";
import "../Header/Header.css"

function Subcategory({ category, onSubcategoryClick }) {
  const subcategories = useSubcategories(category.id)

   const handleSubcategoryClick = (subcategory) => {
    if (onSubcategoryClick) {
      onSubcategoryClick(subcategory.title);
    }
  };

  return (
    <div>
          <NavDropdown title={category?.title} id="categoryDropdown">
            {subcategories && subcategories.map(subcategory => (
              <NavDropdown.Item key={subcategory.id} onClick={() => handleSubcategoryClick(subcategory)}>
                {subcategory.title}
              </NavDropdown.Item>
            ))}
          </NavDropdown>

    </div>
  );
}
export default  Subcategory;
