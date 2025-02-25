

export default function ItemList() {
    const items = ["penna", "matita", "cancelleto", "quaderno"]


    return (
        <div>
            puedo exportar una funcion??, si <br />
            props??

            <>
            <ul>
                {
                    items.map((item) => (
                        <li>{item}</li>
                    ))
                }
            </ul>
            </>
        </div>
    )
}