const Header = () => {
    return (
        <header className="py-5 bg-image-full" style={{ backgroundImage: `url('/img/baner.jpg')`, height: 25 + 'rem' }}>
            <div className="text-center my-5 py-3">
                <h1 className="text-white fs-2 fw-bolder">John Kowalsky</h1>
                <p className="text-white-50 fs-4 mb-0">Journeys</p>
                <p className="text-white-50 fs-4 mb-0">Weddings</p>
                <p className="text-white-50 fs-4 mb-0">Occasional trips</p>
            </div>
        </header>
    )
}

export default Header