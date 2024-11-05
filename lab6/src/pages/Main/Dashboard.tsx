import {getPrinters} from "../../api/getPrinters";
import ProductCardCollage from "../../components/ProductCardCollage/ProductCardCollage";
import {useEffect, useState} from "react";
import {IPrinterResponse} from "../../types/Printer";

const Dashboard =  () => {
    const [data, setData] = useState<IPrinterResponse[]>([]);


  useEffect(() => {
    getPrinters().then((resp) => {
        setData(resp);
    });
}, []);

    return (
         <ProductCardCollage data={data} />

    )
}
export default Dashboard;