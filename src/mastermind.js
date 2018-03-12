import initialStoreState from './initialStoreState'
import updateSchemaCreators from './updateSchemaCreators'
import selectors from './selectors'
import { createMastermind } from 'redux-mastermind'
import config from './config'
const firebaseConfig = config.firebaseConfig

export default createMastermind({ initialStoreState, updateSchemaCreators, selectors })
