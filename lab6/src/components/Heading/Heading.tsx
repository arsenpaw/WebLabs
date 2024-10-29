import HeadingText from "./HeadingText";
import preview from 'assets/preview.png';
import { Image } from 'primereact/image';

const Heading = () => {
    return (
        <div className="flex  space-x-4 p-4 border border-gray-300 rounded-lg shadow-md max-w-[50%] mx-auto">
            <div className="flex-shrink-0">
                <Image src={preview} alt="Image" width="250" preview />
            </div>
            <div>
                <HeadingText />
            </div>
        </div>
    );
}

export default Heading;
