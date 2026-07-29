import React, { useMemo, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import dataInfo from "./dataInfo";
import "./Products.css";

const Categories = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const categories = [
        "All",
        "Casual",
        "Party",
        "Summer",
        "Beach",
        "Vacation",
        "Wedding",
        "Date Night",
        "Office",
        "Boho",
        "Floral",
        "Mini Dress",
        "Maxi Dress",
        "Bodycon",
        "Y2K",
        "Jumpsuit",
        "Set",
        "Top",
        "Accessories"
    ];

    // const [selectedCategory, setSelectedCategory] = useState("All");

    const selectedId = searchParams.get("id");
    const selectedCategory = searchParams.get("category") || "All";

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }, [selectedId]);

    const { mainProduct, otherProducts } = useMemo(() => {
        if (!selectedId) {
            return {
                mainProduct: null,
                otherProducts: dataInfo,
            };
        }

        const main = dataInfo.find(
            (item) => String(item.id) === String(selectedId)
        );

        const others = dataInfo.filter(
            (item) => String(item.id) !== String(selectedId)
        );

        return {
            mainProduct: main,
            otherProducts: others,
        };
    }, [selectedId]);

    const categoryMap = {
        Casual: ["casual", "daily", "everyday"],
        Party: ["party", "cocktail", "birthday", "prom", "club"],
        Summer: ["summer"],
        Beach: ["beach", "seaside", "swimsuit", "cover up"],
        Vacation: ["vacation", "holiday", "travel", "resort"],
        Wedding: ["wedding", "bridal"],
        "Date Night": ["date", "romantic"],
        Office: ["office", "business casual", "commuter", "workwear"],
        Boho: ["bohemian", "boho"],
        Floral: ["floral", "flower", "leaf"],
        "Mini Dress": ["mini dress", "short dress"],
        "Maxi Dress": ["maxi dress", "long dress"],
        Bodycon: ["bodycon"],
        Y2K: ["y2k"],
        Jumpsuit: ["jumpsuit", "romper"],
        Set: ["2pcs", "2-piece", "set"],
        Top: ["shirt", "tank top", "blouse", "camisole"],
        Accessories: ["bandana", "hair scarf", "headband"]
    };

    const getCategories = (product) => {
        const text = `${product.title} ${product.description}`.toLowerCase();

        return Object.entries(categoryMap)
            .filter(([_, keywords]) =>
                keywords.some((word) => text.includes(word))
            )
            .map(([category]) => category);
    };

    const filteredProducts =
        selectedCategory === "All"
            ? otherProducts
            : otherProducts.filter((product) =>
                getCategories(product).includes(selectedCategory)
            );



    return (
        <>


            <div className="main-products-wrapper">

                {!mainProduct && (
                    <>
                        <h2 className="category-heading">Popular Categories</h2>

                        <div className="category-grid">
                            {categories.map((category) => (
                                <div
                                    key={category}
                                    className={`category ${selectedCategory === category ? "active" : ""
                                        }`}
                                    onClick={() =>
                                        setSearchParams(
                                            category === "All"
                                                ? {}
                                                : { category }
                                        )
                                    }
                                >
                                    {category}
                                </div>
                            ))}
                        </div>
                    </>
                )}

                {/* Selected Product */}
                {mainProduct && (
                    <div className="highlighted-product-section">
                        <h2>Your Selection</h2>

                        <div className="product-card highlighted-card">
                            <img src={mainProduct.image} alt={mainProduct.title} />

                            <div className="product-content">
                                <h3>{mainProduct.title}</h3>
                                <p>{mainProduct.description}</p>

                                <button>
                                    <a
                                        href={mainProduct.productLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        BUY NOW
                                    </a>
                                </button>

                                <button
                                    onClick={() =>
                                        setSearchParams(
                                            selectedCategory === "All"
                                                ? {}
                                                : { category: selectedCategory }
                                        )
                                    }
                                    style={{
                                        backgroundColor: "#ccc",
                                        marginLeft: "10px",
                                        color: "#000",
                                    }}
                                >
                                    Clear Selection
                                </button>
                            </div>
                        </div>
                    </div>
                )}

                {/* Other Products */}
                <div className="products-container general-grid">
                    {filteredProducts.map((item) => (
                        <div
                            className="product-card normal-card"
                            key={item.id}
                            onClick={() =>
                                setSearchParams(
                                    selectedCategory === "All"
                                        ? { id: item.id }
                                        : {
                                            id: item.id,
                                            category: selectedCategory,
                                        }
                                )
                            }
                            style={{ cursor: "pointer" }}
                        >
                            <img src={item.image} alt={item.title} />

                            <div className="product-content">
                                <h3>{item.title}</h3>
                                <p>{item.description}</p>

                                <div className="button-group">
                                    <button
                                        onClick={(e) => {
                                            e.stopPropagation(); // Prevent card click
                                            setSearchParams(
                                                selectedCategory === "All"
                                                    ? { id: item.id }
                                                    : {
                                                        id: item.id,
                                                        category: selectedCategory,
                                                    }
                                            );
                                        }}
                                        style={{
                                            backgroundColor: "#fafafa",
                                            color: "#000",
                                            border: "1px solid #ccc",
                                        }}
                                    >
                                        View Details
                                    </button>

                                    <button
                                        onClick={(e) => e.stopPropagation()} // Prevent card click
                                    >
                                        <a
                                            href={item.productLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            BUY NOW
                                        </a>
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Categories;