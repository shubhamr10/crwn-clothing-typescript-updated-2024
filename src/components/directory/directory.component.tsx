import CategoryItem from "../category-item/category-item.component";
import "./directory.styles.scss";
import { Category } from "../../types/Category.types";

type DirectoryProps = {
    categories: Category[];
}

const Directory = ({ categories }:DirectoryProps) => {
    return (
        <div className="directory-container">
            {
                categories.map((category:Category) => (
                    <CategoryItem key={category.title} category={category} />
                ))
            }
        </div>
    )
}

export default Directory;