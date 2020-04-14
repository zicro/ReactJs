import React from 'react'

export default function About(props) {
    return (
        <div>
            <h2>About : </h2>
            <p> get the id from url : <b>{props.match.params.id} </b></p>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus asperiores voluptatem quos accusamus ullam et mollitia aut. Dolor sint dolores quae, culpa, error esse vitae fugiat velit, similique amet quisquam!
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus asperiores voluptatem quos accusamus ullam et mollitia aut. Dolor sint dolores quae, culpa, error esse vitae fugiat velit, similique amet quisquam!
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus asperiores voluptatem quos accusamus ullam et mollitia aut. Dolor sint dolores quae, culpa, error esse vitae fugiat velit, similique amet quisquam!
            </p>
        </div>
    )
}
