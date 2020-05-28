// Créer un API REST
// Qui intéragira avec un tableaux de contacts

const contacts = [{
  prenom: 'John',
  id: 123,
}, {
  prenom: 'Paul',
  id: 456,
}]

// Sur la requete GET /api/contacts
// retourner en JSON le tableau

// Sur la requête GET /api/contacts/123
// retourner en JSON le contact correspond
// (123 soit paramétrable)
// !!!!! req.params.id est de type string

// Sur la requête POST /api/contacts
// recevrez dans le body un objet de type
// {"prenom": "Toto"}
// Générer un id (différent des autres)
// stocker le contact dans le tableau
// retourner en JSON le contact générer avec son id
// et le status 201

// DELETE /api/contacts/123
// supprimer le contact
// et le retourner en JSON

// PUT /api/contacts/123
// remplacer le contact
// et retourner l'ancien en JSON

// PATCH /api/contacts/123
// fusion le contact en body avec l'ancien (Object.assign)
// et retourner l'ancien en JSON
