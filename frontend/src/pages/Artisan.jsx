import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/api";
import ArtisanHeader from "../components/artisan/ArtisanHeader";
import ProductsList from "../components/products/ProductsList";

function Artisan () {
const { artisanSlug } = useParams()

const { response, error, loading} = useFetch(`http://localhost:1337/api/artisans?filters[slug][$eq]=${artisanSlug}&populate=*`)

const { response: products, error: productsError, loading: productsLoading} = useFetch(`http://localhost:1337/api/artisans?filters[artisan][slug][$eq]=${artisanSlug}&populate=*`)

    if (loading || productsLoading) return <h1>Chargement...</h1>
    
    if (error || productsError) return <pre>{JSON.stringify(error, null, 2)}</pre>

    return response && ( 
        <>
        <h1>Artisan : {artisanSlug} </h1>
        <ArtisanHeader attributes={response[0]?.attributes} />
        {
            products ? (
                <ProductsList products={products} />
            )
            : <p>Aucun produit trouvé</p>
        }
        </>
     );
}

export default Artisan ;