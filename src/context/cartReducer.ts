import { CartAction, CartState } from './CartTypes';

export const cartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case 'ADD_TO_CART': {
      const exists = state.items.find(i => i.id === action.payload.id);

      if (exists) {
        return {
          ...state,
          items: state.items.map(item =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
          total: state.total + action.payload.price,
        };
      }

      return {
        ...state,
        items: [...state.items, { ...action.payload, quantity: 1 }],
        total: state.total + action.payload.price,
      };
    }

    case 'REMOVE_FROM_CART': {
      const item = state.items.find(i => i.id === action.payload);
      if (!item) return state;

      return {
        ...state,
        items: state.items.filter(i => i.id !== action.payload),
        total: state.total - item.price * item.quantity,
      };
    }

    case 'INCREASE_QUANTITY': {
      const item = state.items.find(i => i.id === action.payload);
      if (!item) return state;

      return {
        ...state,
        items: state.items.map(i =>
          i.id === action.payload ? { ...i, quantity: i.quantity + 1 } : i
        ),
        total: state.total + item.price,
      };
    }

    case 'DECREASE_QUANTITY': {
      const item = state.items.find(i => i.id === action.payload);
      if (!item || item.quantity === 1) return state;

      return {
        ...state,
        items: state.items.map(i =>
          i.id === action.payload ? { ...i, quantity: i.quantity - 1 } : i
        ),
        total: state.total - item.price,
      };
    }

    case 'CLEAR_CART':
      return { items: [], total: 0 };

    default:
      return state;
  }
};
