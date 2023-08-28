import {Nav, Navbar} from "react-bootstrap";
import '../Header/Header.css'
import useCategories from "./Services";
import Subcategory from "../Subcategory/Subcategory";

export default function Category(){
    const categories = useCategories()

     return (
       <div>
            <Navbar expand="lg" bg="light">
                <Navbar.Toggle aria-controls="categoriesNavbar"/>
                <Navbar.Collapse id="categoriesNavbar">
                    <Nav className="mx-auto">
                        {categories.length > 0 && categories.map(category => (
                            <Subcategory
                                key={category.id}
                                category={category}
                            />
                        ))}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
       </div>
     );
}
