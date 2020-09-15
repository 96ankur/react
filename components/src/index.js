// Import React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';


// Create a react component
    const App = () => {
    return (
        <div className="ui container elements">
            {/* CommentDetail is passed as props to the ApprovalCard component */}
            <ApprovalCard>
                <CommentDetail 
                    avatar={faker.image.avatar()}
                    author="Sam"
                    timeAgo="Today at 4:00 PM"
                    comment='Nice Post'
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail 
                    avatar={faker.image.avatar()} 
                    author="Ram" 
                    timeAgo="Today at 4:00 AM" 
                    comment="Awesome"
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail 
                    avatar={faker.image.avatar()} 
                    author="Jane" 
                    timeAgo="Tomorrow at 5:00 PM" 
                    comment="Good"
                />
            </ApprovalCard>
        </div>
        );
    };


// Take the react component and show it on the screen

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);