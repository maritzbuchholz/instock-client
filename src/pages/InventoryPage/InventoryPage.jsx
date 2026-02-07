import Tags from "../../components/Tags/Tags.jsx";
import Icon from "../../components/Iconography/Iconography.jsx";
import "./InventoryPage.scss";

const InventoryPage = () => {
    const toggleIcons = ["sort", "dropdown"];
    const staticIcons = ["edit", "delete", "close", "search", "chevronRight", "backArrow", "error"];

    return (
        <main>
            <h1>Status Tags</h1>
            <span>
                <Tags status="In Stock" />
                <Tags status="Out of Stock" />
            </span>
            <h1>Iconography Preview</h1>
            <h3>Active State Testing</h3>
            <div style={{ display: "flex", gap: "20px" }}>
                {toggleIcons.map(name => (
                    <div key={name} style={{ textAlign: "center" }}>
                        <Icon name={name} />
                        <p>Default {name}</p>
                        
                        <Icon name={name} isActive={true} />
                        <p>Active {name}</p>
                    </div>
                ))}
            </div>

            <h3>Other Icons</h3>
            <div style={{ display: "flex", gap: "20px" }}>
                {staticIcons.map(name => (
                    <div key={name} style={{ textAlign: "center", padding: "10px" }}>
                        <Icon name={name} />
                        <p>{name}</p>
                    </div>
                ))}
            </div>
        </main>
    );
};

export default InventoryPage;