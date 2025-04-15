import { cherryFive, cherryOne, cherryThree, cherryTwo, chickenFour, chickenOne, chickenTikka, chickenTwo, DriedCherriesFive, DriedCherriesFour, DriedCherriesOne, DriedCherriesThree, DriedCherriesTwo, Error, Herbals1, Herbals2, Herbals3, HimalayaFive, HimalayaFour, HimalayaOne, HimalayaThree, HimalayaTwo, Samai1, Samai2, Samai3, TanRemoval1, TanRemoval2, TanRemoval3, TanRemoval4, TanRemoval5, Thinai1, Thinai2, Thinai3, Wellness, Wipes1, Wipes2, Wipes3, Wipes4, Wipes5 } from "../assets/images";

export const productDetails = (name) => {
    if (name === "CB Half") {
        return {
            background: chickenTikka,
            imgOne: chickenOne,
            imgTwo: chickenTwo,
            imgThree: cherryThree,
            imgFour: chickenFour,
            price: 455,
            mrp: 500,
            offer: 67
        }
    }
    if (name === "bb") {
        return {
            background: cherryOne,
            imgOne: cherryTwo,
            imgTwo: cherryThree,
            imgThree: chickenFour,
            imgFour: cherryFive,
            price: 676,
            mrp: 700,
            offer: 34
        }
    }
    if (name === "Chicken Tikka Small - Premium") {
        return {
            background: DriedCherriesOne,
            imgOne: DriedCherriesTwo,
            imgTwo: DriedCherriesThree,
            imgThree: DriedCherriesFour,
            imgFour: DriedCherriesFive,
            price: 878,
            mrp: 898,
            offer: 34
        }
    }
    if (name === "GE DRIED CRANBERRY 100G") {
        return {
            background: HimalayaOne,
            imgOne: HimalayaTwo,
            imgTwo: HimalayaThree,
            imgThree: HimalayaFour,
            imgFour: HimalayaFive,
            price: 898,
            mrp: 900,
            offer: 89
        }
    }
    if (name === "HIM. PURIFYING NEEM PEEL-OFF MASK") {
        return {
            background: Herbals3,
            imgOne: Herbals1,
            imgTwo: Herbals2,
            price: 676,
            mrp: 1000,
            offer: 88
        }
    }
    if (name === " HIMALAYA  TAN REMOVAL ORANGE PEEL OFF MASK 50G") {
        return {
            background: TanRemoval1,
            imgOne: TanRemoval2,
            imgTwo: TanRemoval3,
            imgThree: TanRemoval4,
            imgFour: TanRemoval5,
            price: 334,
            mrp: 565,
            offer: 45
        }
    }
    if (name === "HIMALAYA SHIGRU 60 TABLETS") {
        return {
            background: Wellness,
            price: 800,
            mrp: 890,
            offer: 34
        }
    }
    if (name === "Himalaya Gentle Baby Wipes - With Aloe & Indian Lotus 72 pcs (Pack of 2)") {
        return {
            background: Wipes1,
            imgOne: Wipes2,
            imgTwo: Wipes3,
            imgThree: Wipes4,
            imgFour: Wipes5,
            price: 564,
            mrp: 785,
            offer: 66
        }
    }
    if (name === "GE SEMIYA SAMAI 180GM") {
        return {
            background: Samai1,
            imgOne: Samai2,
            imgTwo: Samai3,
            price: 234,
            mrp: 455,
            offer: 23
        }
    }
    if (name === "GE SEMIYA THINAI 180GM") {
        return {
            background: Thinai1,
            imgOne: Thinai2,
            imgTwo: Thinai3,
            price: 676,
            mrp: 678,
            offer: 34
        }
    }
    return {
        background: Error
    }
}