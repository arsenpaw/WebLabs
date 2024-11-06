import {usePrinters} from "../../api/getPrinters";
import ProductCardCollage from "../../components/ProductCardCollage/ProductCardCollage";


const Dashboard =  () => {

    const {data,error,isLoading} =  usePrinters();


    return (
         <ProductCardCollage data={data} />

    )
}
export default Dashboard;