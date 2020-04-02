import React from 'react'
import ReactDOM from 'react-dom'
import {createStore} from 'effector'
import {createComponent, useStoreMap} from 'effector-react'
const data = [
    {
        id: 1,
        name: 'Yung',
    },
    {
        id: 2,
        name: 'Lean',
    },
    {
        id: 3,
        name: 'Kyoto',
    },
    {
        id: 4,
        name: 'Sesh',
    },
]
const $users = createStore(data)
const $ids = createStore(data.map(({id}) => id))
const User = ({id}) => {
    const user = useStoreMap({
        store: $users,
        keys: [id],
        fn: (users, [userId]) => users.find(({id}) => id === userId),
    })
    return (
        <div>
            <strong>[{user.id}]</strong> {user.name}
        </div>
    )
}
const UserList = createComponent($ids, (_, ids) =>
    ids.map(id => <User key={id} id={id} />),
)
ReactDOM.render(<UserList />, document.getElementById('root'))





//
import React from 'react'
import ReactDOM from 'react-dom'
import {createEvent, createStore, restore} from 'effector'
import {useStore, useList} from 'effector-react'

const renameUser = createEvent()
const user = restore(renameUser, 'alice')
const friends = createStore(['bob'])

const List = () => {
    const userName = useStore(user)
    return useList(friends, {
        keys: [userName],
        fn: friend => (
            <div>
                {friend} is a friend of {userName}
            </div>
        ),
    })
}

ReactDOM.render(<List />, document.getElementById('root'))
// => <div> bob is a friend of alice </div>

setTimeout(() => {
    renameUser('carol')
    // => <div> bob is a friend of carol </div>
}, 500)
