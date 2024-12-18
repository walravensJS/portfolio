import React, { useState, useEffect } from 'react';


function GitHubContributions({ username }) {
    const [contributions, setContributions] = useState(null);

    useEffect(() => {
        const url = `https://api.github.com/users/${username}/events/public`;

        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                const currentYear = new Date().getFullYear();

                const contributionsThisYear = data.filter((event) => {
                    const eventDate = new Date(event.created_at);
                    return (
                        (event.type === 'PushEvent' || event.type === 'PullRequestEvent') &&
                        eventDate.getFullYear() === currentYear
                    );
                });

                setContributions(contributionsThisYear.length);
            })
            .catch((error) => console.error('Error fetching GitHub contributions:', error));
    }, [username])
    
    console.log(contributions)
    ;

    return (
        <div className='flex items-center gap-5'>

            <div className="text-zinc-500">
            <h2>GitHub Contributions</h2>
            <p className="text-sm text-black">
                {contributions === null
                    ? 'Loading contributions...'
                    : `${contributions} contributions this year.`}
            </p>
        </div>
        </div>
    );
}

export default function GithubWidget() {
    return (
        <div className="bg-zinc-800 p-4 shadow-md rounded-md">
            <GitHubContributions username="pgm-stijwalr" />
        </div>
    );
}
