import { addNewContact, getContacts, getContactWithID, updateContact, deleteContact } from '../controllers/crmControllers.js'

const routes = (app) => {
    app.route('/contact')
        .get((req, res, next) =>{
            // middleware
            console.log(`request : ${req.originalUrl}`)
            console.log(`request type : ${req.method}`)
            next()
            // middleware
        }, getContacts)
            
        .post(addNewContact)

    app.route('/contact/:contactId')
        .get(getContactWithID)
        .put(updateContact)
        .delete(deleteContact)
}
export default routes;