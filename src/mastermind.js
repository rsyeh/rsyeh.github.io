import initialStoreState from './initialStoreState'
import updateSchemaCreators from './updateSchemaCreators'
import { createMastermind } from 'redux-mastermind'

const firebaseConfig = {

}

export default createMastermind({ initialStoreState, updateSchemaCreators })
