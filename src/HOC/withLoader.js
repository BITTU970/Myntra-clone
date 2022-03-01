import React from 'react';
import Loader from '../containers/Loader'

const withLoader = (WrappedComponent, pageName) => {

    const WithLoader = (props) => {

        let [isLoading, setLoading] = React.useState(true);

        let setLoadingState = (isCompLoading) => {
            setLoading(isCompLoading)
        }

        return (
            <>
                {
                    isLoading && <Loader page={pageName} />
                }

                <WrappedComponent {...props} setLoading={setLoadingState} />
            </>
        )
    }

    return WithLoader;
}

export default withLoader;
