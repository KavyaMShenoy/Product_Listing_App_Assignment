import { useState } from "react";
import "../css/CategoryFilter.css";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import ProductList from "./ProductList";

const category = [];

function CategoryFilter(productsJson) {

    const [productArray, setProductList] = useState(productsJson);

    const [categoryProductsList, setCategoryProductsList] = useState(productsJson["productsList"]);

    var searchArray = [];

    //Function to filter by category.
    const filterByCategory = (selectedCategory) => {

        document.getElementById("requiredMessage").style.display = "none";
        document.getElementById("notFoundMessage").style.display = "none";

        if (selectedCategory) {

            if (selectedCategory == "all") {

                setProductList(productsJson);

                setCategoryProductsList(productsJson["productsList"]);

            } else {

                const filteredCategoryArray = productsJson["productsList"].filter(
                    (obj) => obj.category.toLowerCase() == selectedCategory.toLowerCase()
                );

                setProductList({ productsList: filteredCategoryArray });

                setCategoryProductsList(filteredCategoryArray);

            }

            document.getElementById("searchForm").reset();
        }
    };

    //Function to search by name.
    const search = (name) => {

        if (name.value) {

            searchArray = categoryProductsList.filter(
                (obj) => (obj.name.toLowerCase() == name.value.toLowerCase())
            );

            setProductList({ productsList: searchArray });

            if (searchArray.length == 0) {

                document.getElementById("notFoundMessage").style.display = "block";
                document.getElementById("notFoundMessage").style.width = "100%";

            } else {

                document.getElementById("notFoundMessage").style.display = "none";

            }

            document.getElementById("requiredMessage").style.display = "none";

        } else {

            setProductList({ productsList: searchArray });

            document.getElementById("requiredMessage").style.display = "block";
            document.getElementById("requiredMessage").style.width = "100%";

            document.getElementById("notFoundMessage").style.display = "none";

        }
    };

    return (
        <>
            {productsJson["productsList"].forEach((obj) => {
                if (!category.includes(obj.category)) {
                    category.push(obj.category);
                }
            })}

            <Container className="pt-4 px-4">
                <Row>
                    <Col className="mt-2">
                        {/* Form for filter by category. */}
                        <Form id="filterByCategoryForm">
                            <Form.Select id="selectCategory" aria-label="category list"
                                onChange={() => filterByCategory(document.getElementById("selectCategory").value)}>
                                <option value="all" key="all" id="all">All</option>
                                {category.map((data, index) => {
                                    return (
                                        <option value={data} key={index}>{data}</option>
                                    );
                                })}
                            </Form.Select>
                        </Form>
                    </Col>

                    <Col className="mt-2">
                        {/* Form for search by name. */}
                        <Form id="searchForm" className="searchFormContainer">
                            <Form.Control type="search" placeholder="Search by Name"
                                className="searchInput" aria-label="Search" id="searchValue" />
                            <Button variant="outline-light" className="searchButton"
                                onClick={() => search(document.getElementById("searchValue"))}>🔍</Button>
                        </Form>
                    </Col>
                </Row>
            </Container>

            {/* Message to be displayed when user clicks search button without entering any input. */}
            <div id="requiredMessage" className="mt-5 text-danger text-center" style={{ display: "none" }}>
                Enter a product name to search.
            </div>

            {/* Message to be displayed when no products are found. */}
            <div id="notFoundMessage" className="mt-5 text-danger text-center" style={{ display: "none" }}>
                No Products Found.
            </div>

            <ProductList productsList={productArray["productsList"]} />
        </>
    );
}

export default CategoryFilter;
