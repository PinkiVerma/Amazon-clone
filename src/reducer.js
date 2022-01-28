//data layer
//  we have data layer, A reducer is something how we are able to dispatch the action into the date layer. 
//ex: (add to basket) to data-layer and from data-layer to basketIcon 

// Store - holds our state - THERE IS ONLY ONE STATE
// Action - State can be modified using actions - SIMPLE OBJECTS
// Dispatcher - Action needs to be sent by someone - known as dispatching an action
// Reducer - receives the action and modifies the state to give us a new state
// pure functions
// only mandatory argument is the 'type'
// Subscriber - listens for state change to update the ui

export const initialState={
    basket: [],
    user: null, //store the user as null inside context api 
} ;

//state : state of the application
// action : ex- add to the basket, remove from the basket

//Selector
export const getBasketTotal = (basket) =>
    basket?.reduce((amount,item)=>item.price+amount, 0);

const reducer = (state,action) =>{
    console.log(action);
    switch(action.type){
        case 'ADD_TO_BASKET':
            return{
                ...state,
                basket: [...state.basket, action.item],
            };

            case 'REMOVE_FROM_BASKET':
                const index = state.basket.findIndex(
                    (basketItem)=> basketItem.id==action.id
                );

                //firstindex would find the "first" match and returns that index. then only that index item would get removed from basket
            
                let newBasket = [...state.basket]; //copies the current basket content

                if(index>=0){
                    newBasket.splice(index,1) //removes the item from the basket
                }else{
                    console.warn(
                        `Can't remove product (id : ${action.id}) as its not in basket`
                    )
                }

                return {
                    ...state,
                    basket:newBasket
                }

                case "SET_USER" :
                    return{
                        ...state,
                        user: action.user //this is the user that we dispatched
                    }
        

        default:
            return state;
    }
};

export default reducer;