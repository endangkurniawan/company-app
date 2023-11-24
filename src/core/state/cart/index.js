import { create } from "zustand";

const useCart = create((set) => ({
  totalCart: 0,
  handleIncCart: () => set((state) => ({ totalCart: state.totalCart + 1 })),
  handleDecCart: () => set((state) => ({ totalCart: state.totalCart > 0 ? state.totalCart - 1 : state.totalCart })),
  handleClearCart: () => set({ totalCart: 0 }),
}));

export default useCart;
