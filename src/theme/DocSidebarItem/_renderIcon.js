import { NutIcon, Settings, User } from "lucide-react";


export default function SideBarIcon(classname) {
    switch (classname) {
        case 'user':
            return <User color="black" size={20} style={{ marginRight: 10 }} />
        case 'setting':
            return <Settings color="black" size={20} style={{ marginRight: 10 }} />
        case 'intro':
            return <NutIcon color="black" size={20} style={{ marginRight: 10 }} />
        default:
            break;
    }
}