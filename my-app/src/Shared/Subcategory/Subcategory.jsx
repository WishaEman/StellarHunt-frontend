import {NavDropdown} from "react-bootstrap";
import {Link} from "react-router-dom";
import useSubcategories from "./Services";
import "../Header/Header.css"

function Subcategory({ category}) {
  const subcategories = useSubcategories(category.id)

  return (
    <div>
          <NavDropdown title={category?.title} id="categoryDropdown">
            {subcategories && subcategories.map(subcategory => (

              <NavDropdown.Item key={subcategory.id}>
                <Link key={subcategory.id} to={`/category/subcategory/${subcategory.id}`}
                      className="text-reset text-decoration-none text-dark">
                {subcategory.title}
                </Link>
              </NavDropdown.Item>
            ))}
          </NavDropdown>

    </div>
  );
}
export default  Subcategory;
