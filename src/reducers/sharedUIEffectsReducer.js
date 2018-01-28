import {
  LOADING_LAYER_ENABLED,
  LOADING_LAYER_DISABLED,

  SHOW_ERROR_LAYER,
  HIDE_ERROR_LAYER,

  SHOW_MESSAGE_LAYER,
  HIDE_MESSAGE_LAYER
} from '../constants/actionTypes'

const initialState = {
  isLoadingLayerEnabled: false,
  errorLayer: {
    isErrorLayerEnabled: false,
    error: ''
  },
  messageLayer: {
    isMessageLayerEnabled: false,
    message: ''
  }
}

export default function sharedUIEffectsReducer (state = initialState, action) {
  switch (action.type) {
    // ======= UI LOADING PART =======
    case LOADING_LAYER_ENABLED: {
      return {
        isLoadingLayerEnabled: true,
        errorLayer: Object.assign({}, state),
        messageLayer: Object.assign({}, state)
      }
    }

    case LOADING_LAYER_DISABLED: {
      return {
        isLoadingLayerEnabled: false,
        errorLayer: Object.assign({}, state),
        messageLayer: Object.assign({}, state)
      }
    }

    case SHOW_ERROR_LAYER: {
      return {
        isLoadingLayerEnabled: Object.assign({}, state).isLoadingLayerEnabled,
        messageLayer: Object.assign({}, state),
        errorLayer: {
          isErrorLayerEnabled: true,
          error: action.error
        }
      }
    }

    case HIDE_ERROR_LAYER: {
      return {
        isLoadingLayerEnabled: Object.assign({}, state).isLoadingLayerEnabled,
        messageLayer: Object.assign({}, state),
        errorLayer: {
          isErrorLayerEnabled: false,
          error: action.error
        }
      }
    }

    case SHOW_MESSAGE_LAYER: {
      return {
        isLoadingLayerEnabled: Object.assign({}, state).isLoadingLayerEnabled,
        errorLayer: Object.assign({}, state),
        messageLayer: {
          isMessageLayerEnabled: true,
          message: action.message
        }
      }
    }

    case HIDE_MESSAGE_LAYER: {
      return {
        isLoadingLayerEnabled: Object.assign({}, state).isLoadingLayerEnabled,
        errorLayer: Object.assign({}, state),
        messageLayer: {
          isMessageLayerEnabled: false,
          message: null
        }
      }
    }
    default:
      return state
  }
}
