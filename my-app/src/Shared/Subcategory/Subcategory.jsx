import {NavDropdown} from "react-bootstrap";
import {Link} from "react-router-dom";
import useSubcategories from "./Services";
import "../Header/Header.css"

function Subcategory({ category }) {
  const subcategories = useSubcategories(category.id)

  return (
    <div>
          <NavDropdown title={category?.title} id="categoryDropdown">
            {subcategories && subcategories.map(subcategory => (
              <Link key={subcategory.id} to={`/category/subcategory/${subcategory.id}`}>
              <NavDropdown.Item key={subcategory.id}>
                {subcategory.title}
              </NavDropdown.Item>
              </Link>
            ))}
          </NavDropdown>

    </div>
  );
}
export default  Subcategory;
