import Analytics1Day from './../components/Analytics1Day'
import Analytics7Day from './../components/Analytics7Day'
import Analytics30Day from './../components/Analytics30Day'
import LoadingFeed from './../components/LoadingFeed'
import Navigation from './../components/Navigation'
import { Suspense } from 'react'

export default async function Page() {

    return (
        <main>
            <Navigation />
            <div className="header userFeedHeader">
                <h1>Most unfollowed in 7 days</h1>
            </div>
            <div>
                {/* <h2 className="recentlyUnfollowed">Most unfollowed in 7 days</h2> */}
                <Suspense fallback={<LoadingFeed />}>
                    <Analytics7Day />
                </Suspense>
                <a className="noMoreCaption">No more unfollows</a>
                <a className="mostRecentCaption">Only showing 10 most recent</a>
            </div>
        </main>
    )
}