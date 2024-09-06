import "./category-item.styles.scss";
import { Category } from "../../types/Category.types";

type CategoryItemProps = {
    category: Category
}

const CategoryItem = ({category}:CategoryItemProps) => {
    const { imageUrl, title } = category;

    return (
        <div className="category-container">
            <div className="background-image" style={{backgroundImage:`url(${imageUrl})`}}></div>
            <div className="category-body-container">
                <h2>{title}</h2>
                <p>Shop Now</p>
            </div>
        </div>
    )
}

export default CategoryItem;