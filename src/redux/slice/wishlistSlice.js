import { createSlice } from "@reduxjs/toolkit";
// One slice is created for on state , here it is initialState:[]
const wishlistSlice = createSlice({ // createSlice enna function enthann return cheyunnath athan slice aayitt act cheyunnath // createSlice function expect cheyunnath 
    name:"wishlist",
    initialState:[], // ivide nammal wishlistinn vendi ulla state aan create cheyunath,wishlistil onnil kooduthal items kaanum.so initial value empty array kodukkuka
    reducers:{ // reducers keyil kure actions und.so type object aaki vekuka
        addToWishlist:(state,action)=>{ // Nammal ivide addToWishlist enna action // action oru object aan.athile oru key aan payload
            state.push(action.payload) // means ividethe state oru array aan.so aa arrayilek enthenkilum add cheyenamenkil,push use cheyanam.Home component fileil wishlist button clickil actione call cheyunna aal click cheytha productsinte datasinee provide cheyum.(karanam nammal aa specific productinte wishlist buttonil click cheythal mathram,aa specific product mathram add aavukayullu)Aa productsine(Tip:payload) access ivide kittanan actione argumentil kodukkunath.ath use cheyth action.payloadine(i.e Home component action vazhi tharunna productine) state arrayilek push cheyum.so athinayitt action objectinte payloadine stateilek push cheyunnu
        },// ee addToWishlist action Home componentil dispatch cheyunnath vazhi,ithile (i.e ividenn storeilek import cheyunna reducerile stateile arrayilek) stateile arrayilek (initialState:[]), Home component tharunna product details add aavum. so ee storeil ulla stateine i.e athile contentsine vere componentsinn access cheyan pattum sine store is globally accessesible in a react application.So useSelector hook use cheyth nammukk ee stateine eth componentil venemenkilum use cheyam Eg: ith Header componentile wishlistilek add cheyunna productsinte number (badge) kaanikkan use cheyunnund.Athinayitt products ulla stateine avide useSelector use cheyth nammal konduvarunnu.then wishlist enna variablek athine eduth vekunnu i.e const wishlist = useSelector((state)=>state.wishlistReducer),then Headerinte jsxil wishlist.length kodukkuka
        removeFromWishlist:(state,action)=>{ // ivide  {} illayirunnenkikil return cheyan vendi return enn kodukkenda aavashyam illayirunnu.// ivide nammalk splice use cheyan pattila.karanam splice use cheyth kittunath array containing removed products aan.
          return state.filter(item=>item.id!=action.payload)
        } // Doubt: Nammal ivide addToWishlist actione return cheyand, removeFromWishlistine return cheyunnathinte reason enthann., you use return in removeFromWishlist because you're creating a new array contains products excluding the one product where you clicked the trash button with filter and returning it. In addToWishlist, you don't need a return statement because you're directly modifying the existing state array, and Redux Toolkit takes care of creating the new immutable state for you.

    }
})

export const {addToWishlist,removeFromWishlist} = wishlistSlice.actions // Oru filelil ninnum onnil kooduthal karyangal export cheyunnundenkil , avare "export const"il kodukkanam
export default wishlistSlice.reducer // Oru filelil ninnum otta karyam export cheyanamenkil athine "export default"il kodukkanam
//  ivide ninnum nammal wishlistSlice.reducerine export cheyunnathinte reason enthennal : component actionsine call cheyumbol/dispatch cheyumbol, stateinte value update aavum aa update cheytha value storeile stateil varanam.Athinayitt storeil state ulpedduthan.sliceile reduceril aan state irikunnath.so athinnayitt aa reducerine storeil import cheyanam ( In words, reducerinn mathraman aa stateine storeil poyi update cheyan pattuvollu ).so ivide ninnum  nammal reducerine export cheyanam