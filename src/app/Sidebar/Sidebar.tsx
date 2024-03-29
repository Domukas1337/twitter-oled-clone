import SidebarItems from "./SidebarItems"
import Link from "next/link"

export default function Sidebar (){
    return (
        <div className="w-1/5 rounded-md">
            <div>
                <ul>
                    {SidebarItems.map((item) => (
                        <Link 
                        href={item.path} 
                        key={item.name}
                        >
                            <li className="flex items-center hover-accent p-2 rounded-md transition-all duration-150 text-lg">
                                <item.icon className="w-6 h-6 m-2"/>
                                {item.name}
                            </li>
                        </Link>

                    ))}
                </ul>
            </div>
            <div>
                <Link href="/">
                    <p className="button-bg">Post</p>
                </Link>
            </div>
        </div>
    )
}