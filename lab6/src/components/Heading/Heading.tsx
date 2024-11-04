import HeadingText from "./HeadingText";
import preview from 'assets/preview.png';
import { Image } from 'primereact/image';

const Heading = () => {
    return (
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 p-4 border border-gray-300 rounded-lg shadow-md max-w-[90%] md:max-w-[70%] lg:max-w-[50%] xl:max-w-[40%] mx-auto">
            <div className="flex-shrink-0 mx-auto md:mx-0">
               <Image
                src={preview}
                alt="Image"
                className="w-full md:w-[250px] lg:w-[300px] h-auto rounded-lg object-cover"
                preview
            />

            </div>
            <div className="text-center md:text-left">
                <HeadingText />
            </div>
        </div>
    );
}


export default Heading;
