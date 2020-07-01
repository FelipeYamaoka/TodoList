import Realm from 'realm';

import TodoSchema from '../schemas/Todo';

export default function getRealm() {
    return Realm.open({
        schema: [TodoSchema],
    });
}