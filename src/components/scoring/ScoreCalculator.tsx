import { useState } from 'react'
import { useScoreCalculator } from '../../hooks/useScoreCalculator'
import { CalculatorElementRow } from './CalculatorElementRow'
import { ElementPicker } from './ElementPicker'
import { PCSInput } from './PCSInput'
import { ScoreSummary } from './ScoreSummary'
import { Card, CardContent } from '../ui/Card'

export function ScoreCalculator() {
  const { state, dispatch, tes, pcsTotal, total, computeElementScore } = useScoreCalculator()
  const [pickerOpen, setPickerOpen] = useState(false)

  return (
    <div className="space-y-8">
      {/* Elements Section */}
      <Card>
        <CardContent>
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-serif text-lg font-semibold text-gray-900">
                Technical Elements
              </h3>
              <p className="text-xs text-gray-500">
                {state.elements.length} element{state.elements.length !== 1 ? 's' : ''} &middot;
                TES: {tes.toFixed(2)}
              </p>
            </div>
            <button
              onClick={() => setPickerOpen(true)}
              className="flex items-center gap-1 rounded-lg bg-ice-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-ice-700"
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
              </svg>
              Add Element
            </button>
          </div>

          {state.elements.length > 0 ? (
            <div className="mt-4 space-y-2">
              {state.elements.map((el) => (
                <CalculatorElementRow
                  key={el.id}
                  element={el}
                  score={computeElementScore(el)}
                  onGoeChange={(goe) =>
                    dispatch({ type: 'SET_GOE', payload: { id: el.id, goe } })
                  }
                  onToggleSecondHalf={() =>
                    dispatch({ type: 'TOGGLE_SECOND_HALF', payload: el.id })
                  }
                  onRemove={() =>
                    dispatch({ type: 'REMOVE_ELEMENT', payload: el.id })
                  }
                />
              ))}
            </div>
          ) : (
            <div className="mt-6 flex flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-200 py-10">
              <svg
                className="h-10 w-10 text-gray-300"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4.5v15m7.5-7.5h-15"
                />
              </svg>
              <p className="mt-2 text-sm text-gray-500">
                Click "Add Element" to start building your program
              </p>
            </div>
          )}
        </CardContent>
      </Card>

      {/* PCS Section */}
      <Card>
        <CardContent>
          <PCSInput
            pcs={state.pcs}
            pcsFactor={state.pcsFactor}
            pcsTotal={pcsTotal}
            onChange={(component, value) =>
              dispatch({ type: 'SET_PCS', payload: { component, value } })
            }
            onFactorChange={(factor) =>
              dispatch({ type: 'SET_PCS_FACTOR', payload: factor })
            }
          />
        </CardContent>
      </Card>

      {/* Deductions */}
      <Card>
        <CardContent>
          <div className="flex items-center justify-between">
            <h3 className="font-serif text-lg font-semibold text-gray-900">Deductions</h3>
            <div className="flex items-center gap-2">
              <input
                type="number"
                min={0}
                step={0.5}
                value={state.deductions}
                onChange={(e) =>
                  dispatch({
                    type: 'SET_DEDUCTIONS',
                    payload: Math.max(0, parseFloat(e.target.value) || 0),
                  })
                }
                className="w-20 rounded-lg border border-gray-200 px-3 py-2 text-right font-serif font-bold tabular-nums focus:border-ice-300 focus:outline-none"
              />
              <span className="text-sm text-gray-500">points</span>
            </div>
          </div>
          <p className="mt-1 text-xs text-gray-500">
            Each fall is -1.0. Time violations, illegal elements, and other penalties are subtracted here.
          </p>
        </CardContent>
      </Card>

      {/* Summary */}
      <ScoreSummary tes={tes} pcs={pcsTotal} deductions={state.deductions} total={total} />

      {/* Reset */}
      <div className="flex justify-center">
        <button
          onClick={() => dispatch({ type: 'RESET' })}
          className="text-sm font-medium text-gray-500 transition-colors hover:text-gray-700"
        >
          Reset Calculator
        </button>
      </div>

      {/* Element Picker Modal */}
      <ElementPicker
        open={pickerOpen}
        onClose={() => setPickerOpen(false)}
        onSelect={(element) =>
          dispatch({ type: 'ADD_ELEMENT', payload: element })
        }
      />
    </div>
  )
}
