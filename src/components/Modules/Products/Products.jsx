import'./products.css'

function Product({ label, img, title, price }) {
    return (
        <products-main>
            <span>{label}</span>
            <img src={img} alt={title}/>
            <p>{title}</p>
            <h4>€{price},-</h4>
        </products-main>
    );
}

export default Product;