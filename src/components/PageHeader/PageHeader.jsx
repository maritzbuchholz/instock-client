const PageHeader = ({ headerText, onBack, onEdit, variant = "noedit" }) => {   //variants = noedit, edit
    return (
        <div className="page-header">
            <button
                type="button"
                className="page-header__back-button"
                aria-label={`back button`}
                onClick={() => onBack()}
            >
                <Iconography
                    name="backArrow"
                    className="page-header__back-icon"
                />
            </button>

            <div className="page-header__title">
                <Typography variant="h1">{headerText}</Typography>
            </div>

            <Button
                type="button"
                className="page-header__button"
                variant="primary"
                onClick={onEdit}
            >
                <Iconography
                    name="backArrow"
                    className="page-header__back-icon"
                />
                <Typography variant="h1">{headerText}</Typography>
            </Button>

        </div>
    );
}

export default PageHeader;