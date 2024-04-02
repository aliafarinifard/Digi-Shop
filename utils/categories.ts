import { AiOutlineDesktop, AiOutlineLaptop } from "react-icons/ai";
import { MdOutlineKeyboard, MdStorefront, MdTv, MdWatch } from "react-icons/md";
import { BsFillPhoneFill } from "react-icons/bs";

export const categories = [
    {
        label: 'همه',
        icon: MdStorefront
    },
    {
        label: 'موبایل',
        icon: BsFillPhoneFill
    },
    {
        label: 'لپ تاپ',
        icon: AiOutlineLaptop
    },
    {
        label: 'دسکتاپ',
        icon: AiOutlineDesktop
    },
    {
        label: 'ساعت',
        icon: MdWatch
    },
    {
        label: 'تلویزیون',
        icon: MdTv
    },
    {
        label: 'اکسسوری',
        icon: MdOutlineKeyboard
    },
]