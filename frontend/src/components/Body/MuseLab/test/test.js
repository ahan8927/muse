export const setInitialState = () => {
  const initialState = {}
  initialState['sequences'] = {}
  for (let i = 0; i < 16; i++) {
    const state = {
      sequenceTitle: '',
      sequenceData: null,
      multiplier: 1,
      // color: '#293847',
      color: '#AFB1D4',
    }

    initialState['sequences'][i] = state
  }
  initialState['projectName'] = ''
  initialState['bpm'] = 857
  return initialState
}

export const setInitialDemoState = () => {
  return {
    bpm: 1000, //ms
    projectName: 'Smooth Cabana',
    sequences: {
      0: {
        sequenceTitle: '808',
        color: 'AFB1D4',
        multiplier: 1,
        sequenceData: {
          columnOrder: ['block-1', 'block-2', 'block-3', 'block-4'],
          columns: {
            'block-1': {
              id: 'block-1',
              title: 'block-1',
              taskIds: ['808-808_5-1', 'Misc-Rest_1-5', 'Misc-Rest_1-4', '808-808_1-2'],
            },
            'block-2': {
              id: 'block-2',
              title: 'block-2',
              taskIds: ['Misc-Rest_1-6', '808-808_1-3'],
            },
            'block-3': {
              id: 'block-3',
              title: 'block-3',
              taskIds: ['Misc-Rest_1-9', '808-808_1-7', '808-808_1-8', 'Misc-Rest_1-10',],
            },
            'block-4': {
              id: 'block-4',
              title: 'block-4',
              taskIds: [],
            },
          },
          tasks: {
            '808-808_5-1': { id: '808-808_5-1', name: '808_5', library: '808', },
            '808-808_1-2': { id: '808-808_1-2', name: '808_1', library: '808', },
            '808-808_1-3': { id: '808-808_1-3', name: '808_1', library: '808', },
            '808-808_1-7': { id: '808-808_1-7', name: '808_1', library: '808', },
            '808-808_1-8': { id: '808-808_1-3', name: '808_1', library: '808', },
            'Misc-Rest_1-4': { id: 'Misc-Rest_1-4', name: 'Rest_1', library: 'Misc', },
            'Misc-Rest_1-5': { id: 'Misc-Rest_1-5', name: 'Rest_1', library: 'Misc', },
            'Misc-Rest_1-6': { id: 'Misc-Rest_1-6', name: 'Rest_1', library: 'Misc', },
            'Misc-Rest_1-9': { id: 'Misc-Rest_1-9', name: 'Rest_1', library: 'Misc', },
            'Misc-Rest_1-10': { id: 'Misc-Rest_1-10', name: 'Rest_1', library: 'Misc', },
          },
        },
      },
      1: {
        sequenceTitle: 'Snare',
        multiplier: 1,
        color: '#AFB1D4',
        sequenceData: {
          columnOrder: ['block-1', 'block-2'],
          columns: {
            'block-1': {
              id: 'block-1',
              title: 'block-1',
              taskIds: ['Snares-Snare_2-1'],
            },
            'block-2': {
              id: 'block-2',
              title: 'block-2',
              taskIds: []
            }
          },
          tasks: {
            'Snares-Snare_2-1': { id: 'Snares-Snare_2-1', name: 'Snare_2', library: 'Snares', },
          }
        },
      },
      2: { sequenceTitle: '', sequenceData: null, multiplier: 1, color: '#AFB1D4', },
      3: { sequenceTitle: '', sequenceData: null, multiplier: 1, color: '#AFB1D4', },
      4: { sequenceTitle: '', sequenceData: null, multiplier: 1, color: '#AFB1D4', },
      5: { sequenceTitle: '', sequenceData: null, multiplier: 1, color: '#AFB1D4', },
      6: { sequenceTitle: '', sequenceData: null, multiplier: 1, color: '#AFB1D4', },
      7: { sequenceTitle: '', sequenceData: null, multiplier: 1, color: '#AFB1D4', },
      8: { sequenceTitle: '', sequenceData: null, multiplier: 1, color: '#AFB1D4', },
      9: { sequenceTitle: '', sequenceData: null, multiplier: 1, color: '#AFB1D4', },
      10: { sequenceTitle: '', sequenceData: null, multiplier: 1, color: '#AFB1D4', },
      11: { sequenceTitle: '', sequenceData: null, multiplier: 1, color: '#AFB1D4', },
      12: { sequenceTitle: '', sequenceData: null, multiplier: 1, color: '#AFB1D4', },
      13: { sequenceTitle: '', sequenceData: null, multiplier: 1, color: '#AFB1D4', },
      14: { sequenceTitle: '', sequenceData: null, multiplier: 1, color: '#AFB1D4', },
      15: { sequenceTitle: '', sequenceData: null, multiplier: 1, color: '#AFB1D4', },
    }
  }
}
