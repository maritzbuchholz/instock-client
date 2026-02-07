import Tags from "../../components/Tags/Tags.jsx";
import "./InventoriesPage.scss";

const InventoriesPage = () => {
    return (
        <main>
            <h1>Status Tags</h1>
            <span>
                <Tags status="In Stock" />
                <Tags status="Out of Stock" />
            </span>
        </main>
    );
};

export default InventoriesPage;