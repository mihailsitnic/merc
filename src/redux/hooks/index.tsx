import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import type { RootState } from "../reducer";

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
