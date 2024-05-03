import { customer1, customer2, bigShoe1, bigShoe2, bigShoe3 , thumbnailShoe1, thumbnailShoe2, thumbnailShoe3, shoe4, shoe5, shoe6, shoe7, } from "../assets/images";
import { facebook, instagram, shieldTick, support, truckFast, twitter } from "../assets/icons";

export  const navLinks = [
    {href:"#home",label:"Home"},
    {href:"#about-us",label:"About Us"},
    {href:"#products",label:"Products"},
    {href:"#contact-us",label:"Contact Us"},

];
export const statics=[
    {value:"1K+", label:"Brands"},
    {value:"500K+", label:"Shops"},
    {value:"250K+", label:"Customers"},
];
export const shoesCollection =[
    {bigShoeUrl:bigShoe1,actualShoeUrl:thumbnailShoe1},
    {bigShoeUrl:bigShoe2,actualShoeUrl:thumbnailShoe2},
    {bigShoeUrl:bigShoe3,actualShoeUrl:thumbnailShoe3},
];
export const products= [
    {imgUrl:shoe4, name:"Nike Air Lordan-01", price:"$200.20"},
    {imgUrl:shoe5, name:"Nike Air Lordan-10", price:"$210.20"},
    {imgUrl:shoe6, name:"Nike Air Lordan-100", price:"$220.20"},
    {imgUrl:shoe7, name:"Nike Air Lordan-001", price:"$230.20"},
];

export const services = [
    {
        imgURL: truckFast,
        label: "Free shipping",
        subtext: "Enjoy seamless shopping with our complimentary shipping service."
    },
    {
        imgURL: shieldTick,
        label: "Secure Payment",
        subtext: "Experience worry-free transactions with our secure payment options."
    },
    {
        imgURL: support,
        label: "Love to help you",
        subtext: "Our dedicated team is here to assist you every step of the way."
    },
];

export const reviews = [
    {
        imgURL: customer1,
        customerName: 'Morich Brown',
        rating: 4.5,
        feedback: "The attention to detail and the quality of the product exceeded my expectations. Highly recommended!"
    },
    {
        imgURL: customer2,
        customerName: 'Lota Mongeskar',
        rating: 4.5,
        feedback: "The product not only met but exceeded my expectations. I'll definitely be a returning customer!"
    }
];

export const socialMedia = [
    { src: facebook, alt: "facebook logo" },
    { src: twitter, alt: "twitter logo" },
    { src: instagram, alt: "instagram logo" },
];

export const footerLinks = [
    {
        title: "Products",
        links: [
            { name: "Air Force 1", link: "/" },
            { name: "Air Max 1", link: "/" },
            { name: "Air Jordan 1", link: "/" },
            { name: "Air Force 2", link: "/" },
            { name: "Nike Waffle Racer", link: "/" },
            { name: "Nike Cortez", link: "/" },
        ],
    },
    {
        title: "Help",
        links: [
            { name: "About us", link: "/" },
            { name: "FAQs", link: "/" },
            { name: "How it works", link: "/" },
            { name: "Privacy policy", link: "/" },
            { name: "Payment policy", link: "/" },
        ],
    },
    {
        title: "Get in touch",
        links: [
            { name: "customer@nike.com", link: "mailto:customer@nike.com" },
            { name: "+92554862354", link: "tel:+92554862354" },
        ],
    },
];