import { IconDefinition, faMoneyBill } from "@fortawesome/free-solid-svg-icons";

interface IAboutCard {
    icon: IconDefinition,
    name: string,
    text: string
}


export const content: IAboutCard[] = [
    {
        icon: faMoneyBill,
        name: 'Coffee Bikes',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
        icon: faMoneyBill,
        name: 'Ice Cream Bikes',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
        icon: faMoneyBill,
        name: 'Modern Bikes',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
        icon: faMoneyBill,
        name: 'Hot Dog Bikes',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
]