import Link from 'next/link';
import {CgMenu} from 'react-icons/cg';
import { OffCanvasMenu } from '../client';

// consider jsx is a normal data type
const jsxLogo = ( <span className="bg-white block w-4 aspect-square rounded-full"></span>
);

export const Header = () => {

    return (
        <div className={`bg-neutral-900 text-white flex justify-between items-center h-full`}>
          {/* forced example */}
            <Link href="/" className="relative z-10">{jsxLogo}</Link>

            <OffCanvasMenu></OffCanvasMenu>

            <ul className="hidden lg:flex">
                <li>{jsxLogo}</li>
            </ul>
        </div>
    );
};