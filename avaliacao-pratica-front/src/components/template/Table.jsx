import Links from "./Links";

function renderTitle(title) {
    return title.map(t => {
        return (
                <th>{t}</th>
        )
    })
}

function renderRows(data, path) {
    return data.map(d => {
        return (
            <tr key={d._id}>
                <td>{d.url}</td>
                <td>
                    <button className="btn btn-info ml-2">
                        <Links link={`/${path}/${d._id}`} icon={"eye"}/>
                    </button>
                </td>
            </tr>
        )
    })
}

export default (table) => {
    console.log(table)
    return (
        <table className="table mt-4">
            <thead>
            <tr>
                {renderTitle(table.title)}
            </tr>
            </thead>
            <tbody>
            {renderRows(table.data, table.path)}
            </tbody>
        </table>
    )
}