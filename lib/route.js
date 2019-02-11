const Path = require('path');
const Home = require('./controllers/home');
const Note = require('./controllers/note');

module.exports = [
{
    method: 'GET',
        path: '/',
        handler: (request, h) => {
            return 'All the notes will appear here';
        },
        config: {
            description: 'Gets all the notes available'
        }
},
{
    method: 'POST',
    path: '/note',
    handler: Note.create,
    config: {
        description: 'Adds a new note'
    }
},
{

    method: 'GET',

    path: '/note/{slug}',

    handler: Note.read,

    config: {

        description: 'Gets the content of a note'

    }

},
{
    method: 'PUT',
    path: '/note/{slug}',
    handler: Note.update,
    config: {
        description: 'Updates the selected note'
    }
},
{
    method: 'DELETE',
    path: '/note/{slug}',
    handler: (request, h) => {
        return 'This note no longer exists';
    },
    config: {
        description: 'Deletes the selected note'
    }
}
];