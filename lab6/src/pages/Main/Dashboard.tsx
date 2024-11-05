import {getPrinters} from "../../api/getPrinters";
import ProductCardCollage from "../../components/ProductCardCollage/ProductCardCollage";

const Dashboard = async () => {
    const data =await getPrinters()
    return (
         <ProductCardCollage data={data} />

    )
}
export default Dashboard;