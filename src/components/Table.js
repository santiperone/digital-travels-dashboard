function Table(props) {
    return (
        <div className="table-responsive">
            <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                <thead>
                    <tr>                        
                        <th>Tipo</th>
                        <th>Nombre</th>
                        <th>Descripcion</th>
                        <th>Precio</th>
                        <th>Destino</th>
                    </tr>
                </thead>
                <tfoot>
                    <tr>
                        <th>Tipo</th>
                        <th>Nombre</th>
                        <th>Descripcion</th>
                        <th>Precio</th>
                        <th>Destino</th>
                    </tr>
                </tfoot>
                <tbody>
                    {props.products.map(product => (
                        <tr key={product.type+product.id}>
                            <td>{product.type}</td>
                            <td>{product.name}</td>
                            <td>{product.description}</td>
                            <td>{`$${product.price}`}</td>
                            <td>{product.destination}</td>

                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Table;
