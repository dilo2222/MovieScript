export function Movie(list) {

    return (
        <ul>
            {list.map((item) => <li><span>{item.title}</span><span>{item.photo}</span></li>)}
        </ul>
    )
}