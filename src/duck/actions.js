import { createAction } from 'redux-starter-kit'

export const handleCheck = createAction('handleCheck')
export const resetFormValues = createAction('resetFormValues')
export const toggleExpand = createAction('toggleExpand')
export const handleBookTitleChange = createAction('handleBookTitleChange')
export const handleAuthorNameChange = createAction('handleAuthorNameChange')
export const handleGenreName = createAction('handleGenreName')

//hier für sämtliche Events wieder holen
