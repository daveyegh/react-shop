import * as actionTypes from './action-types'
import {REMOVE_PRODUCT} from "./action-types";

const initialState = {
    products: [],
    cartItems: [],
    cartItemsTotal: 0,
}

function reducer(state = initialState, payload) {
    switch(payload.type) {
        case actionTypes.SET_PRODUCTS:
            return {
                ...state,
                products: payload.products
            }

        case actionTypes.ADD_TO_CART:
            const sameItem = state.cartItems.find(item => item.id === payload.data.id);
            const sameItemIndex = state.cartItems.findIndex(o => {
                return o?.id === sameItem?.id;
            });

            if(sameItem) {
                state.cartItems.splice(sameItemIndex);
                payload.data.quantity = payload.data.quantity + 1;
            };

            return {
                ...state,
                cartItems: [
                    ...state.cartItems,
                    {
                        ...payload.data,
                        quantity: 1,
                        mainPrice: payload.data.price,
                    }
                ]
            };
        case actionTypes.INCREASE_QUANTITY:
            const increasedCartItems = state.cartItems.map(item => {
                if(item.id === payload.id) {
                    item.quantity = item.quantity + 1;
                    item.price = item.quantity * item.mainPrice;
                }
                return item;
            });

            const increasedPrices =
                increasedCartItems
                .map(item => item.price)
                .reduce((currentPrice, futurePrice) => currentPrice + futurePrice);

            return {
                ...state,
                cartItems: increasedCartItems,
                cartItemsTotal: increasedPrices
            }

        case actionTypes.DECREASE_QUANTITY:
            const decreasedCartItems = state.cartItems.map(item => {
                if(item.id === payload.id) {
                    if(item.quantity <= 1) {
                        item.quantity = 1;
                    }
                    item.quantity = item.quantity - 1
                    item.price = (item.quantity * item.mainPrice).toFixed();
                }
                return item;
            });

            const decreasedPrices =
                decreasedCartItems
                    .map(item => item.price)
                    .reduce((currentPrice, futurePrice) => currentPrice + futurePrice);

            return {
                ...state,
                cartItems: decreasedCartItems,
                cartItemsTotal: decreasedPrices
            }

        case REMOVE_PRODUCT:
            const removedProductArray = [...state.cartItems].filter(
                (item) => item.id !== payload.id
            );

            return {
                ...state,
                cartItems: removedProductArray,
            }

        default:
            return state;
    }
}

export default reducer;