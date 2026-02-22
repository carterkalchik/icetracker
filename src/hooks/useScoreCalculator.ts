import { useReducer, useMemo } from 'react'

export interface CalcElement {
  id: string
  elementId: string
  name: string
  abbreviation: string
  baseValue: number
  goe: number // -5 to +5
  isSecondHalf: boolean
}

interface CalcState {
  elements: CalcElement[]
  pcs: {
    skating: number
    transitions: number
    performance: number
    composition: number
    interpretation: number
  }
  deductions: number
  pcsFactor: number
}

type CalcAction =
  | { type: 'ADD_ELEMENT'; payload: Omit<CalcElement, 'id' | 'goe' | 'isSecondHalf'> }
  | { type: 'REMOVE_ELEMENT'; payload: string }
  | { type: 'SET_GOE'; payload: { id: string; goe: number } }
  | { type: 'TOGGLE_SECOND_HALF'; payload: string }
  | { type: 'SET_PCS'; payload: { component: keyof CalcState['pcs']; value: number } }
  | { type: 'SET_DEDUCTIONS'; payload: number }
  | { type: 'SET_PCS_FACTOR'; payload: number }
  | { type: 'RESET' }

let nextId = 1

const initialState: CalcState = {
  elements: [],
  pcs: {
    skating: 7.0,
    transitions: 7.0,
    performance: 7.0,
    composition: 7.0,
    interpretation: 7.0,
  },
  deductions: 0,
  pcsFactor: 1.0,
}

function reducer(state: CalcState, action: CalcAction): CalcState {
  switch (action.type) {
    case 'ADD_ELEMENT':
      return {
        ...state,
        elements: [
          ...state.elements,
          {
            ...action.payload,
            id: `calc-${nextId++}`,
            goe: 0,
            isSecondHalf: false,
          },
        ],
      }
    case 'REMOVE_ELEMENT':
      return {
        ...state,
        elements: state.elements.filter((e) => e.id !== action.payload),
      }
    case 'SET_GOE':
      return {
        ...state,
        elements: state.elements.map((e) =>
          e.id === action.payload.id ? { ...e, goe: action.payload.goe } : e
        ),
      }
    case 'TOGGLE_SECOND_HALF':
      return {
        ...state,
        elements: state.elements.map((e) =>
          e.id === action.payload ? { ...e, isSecondHalf: !e.isSecondHalf } : e
        ),
      }
    case 'SET_PCS':
      return {
        ...state,
        pcs: { ...state.pcs, [action.payload.component]: action.payload.value },
      }
    case 'SET_DEDUCTIONS':
      return { ...state, deductions: action.payload }
    case 'SET_PCS_FACTOR':
      return { ...state, pcsFactor: action.payload }
    case 'RESET':
      return initialState
    default:
      return state
  }
}

function computeGOEValue(baseValue: number, goe: number): number {
  // GOE percentage table (simplified): each step is ~10% of base value
  const percentage = goe * 0.1
  return Math.round(baseValue * percentage * 100) / 100
}

function computeElementScore(element: CalcElement): number {
  const goeValue = computeGOEValue(element.baseValue, element.goe)
  const base = element.isSecondHalf
    ? Math.round(element.baseValue * 1.1 * 100) / 100
    : element.baseValue
  return Math.round((base + goeValue) * 100) / 100
}

export function useScoreCalculator() {
  const [state, dispatch] = useReducer(reducer, initialState)

  const tes = useMemo(
    () =>
      Math.round(
        state.elements.reduce((sum, el) => sum + computeElementScore(el), 0) * 100
      ) / 100,
    [state.elements]
  )

  const pcsTotal = useMemo(() => {
    const sum =
      state.pcs.skating +
      state.pcs.transitions +
      state.pcs.performance +
      state.pcs.composition +
      state.pcs.interpretation
    return Math.round(sum * state.pcsFactor * 100) / 100
  }, [state.pcs, state.pcsFactor])

  const total = Math.round((tes + pcsTotal - state.deductions) * 100) / 100

  return {
    state,
    dispatch,
    tes,
    pcsTotal,
    total,
    computeElementScore,
  }
}
