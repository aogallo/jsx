//Import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom'
import CommentDetail from './CommentDetail';
import faker from 'faker';
import ApprovalCard from './ApprovalCard';

//Create a react component
const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <CommentDetail 
                    author="Sam" 
                    timeAgo="Today at 4:45 PM" 
                    content="Nice blog post!"
                    avatar={faker.image.avatar()}
                />
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail author="Ale" 
                    timeAgo="Today at 2:00 PM" 
                    content="I like the subject" 
                    avatar={faker.image.avatar()}/>
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail author="Jane"
                    timeAgo="Today at 1:33 AM" 
                    content="I like writting" 
                    avatar={faker.image.avatar()}/>
            </ApprovalCard>
        </div>
    )
}

//Take the react component and show it on the screen
ReactDOM.render(
    <App/>,
    document.querySelector('#root')
)